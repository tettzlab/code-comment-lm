#!/usr/bin/env node

import * as dotenv from 'dotenv'
import { Command } from '@commander-js/extra-typings'
import { CodeCommentLM } from '../lib/CodeCommentLM.js'
import {
  JavaCommentTranslator,
  JavaCommentTranslatorOptions,
} from '../lib/JavaCommentTranslator.js'

dotenv.config()

const program = new Command()

program
  .name('code-comment-lm')
  .description(
    'A CLI tool leveraging LLMs to manipulate code comments - currently supporting only Java comment translation - with a backup of the original files.',
  )
  .version('1.0.0')

program
  .option('-e, --encoding <encoding>', 'File encoding', 'utf8')
  .option('-f, --from <language>', 'Language from which files will be translated', 'English')
  .option('-t, --to <language>', 'Language into which files will be translated', 'Japanese')
  .option('-s, --suffix <suffix>', 'Backup file suffix', '~')
  .option('-v, --verbose', 'Enable verbose output')
  .option('-r, --recursive', 'Process directories recursively for files')
  .option('-x, --extension <extension>', 'File extension to process', '.java')
  .argument('<files...>', 'Files or directories to process')
  .action((files: string[], options) => {
    const cclm = new CodeCommentLM(options)
    cclm.setProcessor(async (code, opts) => {
      const translator = new JavaCommentTranslator(opts as JavaCommentTranslatorOptions)
      return await translator.translate(code)
    })
    files.forEach((file) => {
      cclm.processPath(file)
    })
  })

program.parse(process.argv)
