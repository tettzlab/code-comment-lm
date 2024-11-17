import Instructor from '@instructor-ai/instructor'
import OpenAI from 'openai'
import { z } from 'zod'
import { retry } from 'ts-retry-promise'

const TranslationSchema = z.object({
  index: z.number().describe('The index of the comment.'),
  translation: z.string().describe('The translated text.'),
})

const TranslationListSchema = z.object({
  translation_list: z.array(TranslationSchema).describe('List of the translated comments.'),
})

// type TranslationList = z.infer<typeof TranslationListSchema>

export async function translateComments(
  javaCode: string,
  comments: string[],
  fromLanguage: string = 'English',
  toLanguage: string = 'Japanese',
  maxIteration: number = 3,
): Promise<string[]> {
  const MODEL = process.env.OPENAI_MODEL ?? 'gpt-4o-mini'
  const openai = new OpenAI()
  const client = Instructor({
    client: openai,
    mode: 'FUNCTIONS',
  })
  let numIteration = 0

  return retry(
    async () => {
      let translatedComments: string[] = []
      while (numIteration++ < maxIteration) {
        const messages = [
          {
            role: 'system',
            content: `You are a professional translator fluent in ${fromLanguage}, ${toLanguage}.

Your task is to translate selected comments from ${fromLanguage} to ${toLanguage}, following these instructions:

- **Preserve** all line separators, human names, copyright notices (such as 'Copyright (C) 2024 John Doe. All Rights Reverved.'), identifiers (such as type names and variable names), code snippets, and Javadoc directives (such as '@author', '@param', '@return', '@throws', '@exception', '@see', '@version', and '@deprecated') exactly as they are, without any modifications.

- **Respond only** with the translated text, without adding any messages, descriptions, or explanations.

Below is the Java source file content. The selected comments will be provided from the user afterwards:

<java-source-file-content>${javaCode}</java-source-file-content>          
          `,
          },
          {
            role: 'user',
            content: comments
              .map(
                (comment, idx) => `<selected-comment index:"${idx}">${comment}</selected-comment>`,
              )
              .join('\n'),
          },
        ]

        // Get the initial translation
        const initialResponse = await client.chat.completions.create({
          messages,
          model: MODEL,
          response_model: {
            schema: TranslationListSchema,
            name: 'TranslationList',
          },
          temperature: 0.2,
        })

        // Add the assistant's initial translation to the conversation
        messages.push({
          role: 'assistant',
          content: JSON.stringify(initialResponse.translation_list, null, 2),
        })

        // Add the reflection prompt
        messages.push({
          role: 'user',
          content: `
Based on the instructions and your initial translations, reflect on your translation to check for any errors, omissions, or deviations from the instructions. Correct any issues found during your review.

**Important Instructions:**

- **Do not include** the initial translation or your internal reflections in the final output.
- **Only provide** the final corrected translation.
- **Preserve** all line separators, human names, copyright notices (such as 'Copyright ©︎ 2024 John Doe All Rights Reverved'), identifiers (such as type names and variable names), code snippets, and Javadoc directives (such as '@author', '@param', '@return', '@throws', '@exception', '@see', '@version', and '@deprecated') exactly as they are.
        `,
        })

        // Get the improved translation
        const improvedResponse = await client.chat.completions.create({
          messages,
          model: MODEL,
          response_model: {
            schema: TranslationListSchema,
            name: 'TranslationList',
          },
          temperature: 0.2,
        })

        let needsMoreIteration = false
        translatedComments = []

        const initialList = initialResponse.translation_list
        const reflectList = improvedResponse.translation_list
        for (let i = 0, len = comments.length; i < len; i++) {
          const initial = initialList.find((translation) => translation.index === i)
          const reflect = reflectList.find((translation) => translation.index === i)
          if (reflect && reflect.translation) {
            translatedComments.push(reflect.translation)
          } else {
            needsMoreIteration = true
            if (initial && initial.translation) {
              translatedComments.push(initial.translation)
            } else {
              translatedComments.push(comments[i])
            }
          }
        }
        if (needsMoreIteration) {
          continue
        }
        break
      }
      return translatedComments
    },
    {
      backoff: 'EXPONENTIAL',
      retries: 5, // number of maximal retry attempts
      delay: 200, // wait time between retries in ms
      timeout: 60 * 1000, // overall timeout in ms
      retryIf: (error) => error instanceof OpenAI.APIError && error.status === 429,
    },
  )
}
