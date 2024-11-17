import * as fs from 'fs'
import * as path from 'path'

export type CodeCommentLMOptions = {
  encoding: string
  from: string
  to: string
  suffix: string
  verbose?: true | undefined
  recursive?: true | undefined
  extension: string
}

export type ProcessorFunction = (code: string, options: CodeCommentLMOptions) => Promise<string>

export class CodeCommentLM {
  public readonly options: CodeCommentLMOptions = {
    encoding: 'utf8',
    from: 'English',
    to: 'Japanese',
    suffix: '~',
    // verbose: true,
    // recursive: true,
    extension: '.java',
  }
  private processor: ProcessorFunction

  public constructor(options?: Partial<CodeCommentLMOptions>) {
    this.options = { ...this.options, ...(options ?? {}) }
    this.processor = async (code, options) => code.toUpperCase()
  }

  public async processFile(
    fileName: string,
    options?: Partial<CodeCommentLMOptions>,
  ): Promise<void> {
    try {
      const opts = { ...this.options, ...(options ?? {}) }
      // console.log('CodeCommentLM.processFile():', JSON.stringify(opts, null, 2))
      const content = fs.readFileSync(fileName, opts.encoding as BufferEncoding)

      // Make backup
      const backupFileName = fileName + opts.suffix
      fs.writeFileSync(backupFileName, content, opts.encoding as BufferEncoding)

      // Translate it into another language
      const translation = await this.processor(content, opts)

      // Write back to original file
      fs.writeFileSync(fileName, translation, opts.encoding as BufferEncoding)

      if (opts.verbose) {
        console.log(`Processed file ${fileName}`)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Processing File Error, ${fileName}: ${error.message}`)
      } else {
        console.error(`Unknown Error, ${fileName}: ${error}`)
      }
    }
  }

  public async processPath(
    filePath: string,
    options?: Partial<CodeCommentLMOptions>,
  ): Promise<void> {
    try {
      const opts = { ...this.options, ...(options ?? {}) }
      // console.log('CodeCommentLM.processFile():', JSON.stringify(opts, null, 2))
      const stats = fs.statSync(filePath)
      if (stats.isDirectory()) {
        if (opts.recursive) {
          const entries = fs.readdirSync(filePath)
          entries.forEach((entry) => {
            const fullPath = path.join(filePath, entry)
            const entryStats = fs.statSync(fullPath)

            // Check if the entry is a regular file with the specified file extention before processing
            if (entryStats.isFile() && path.extname(entry) === opts.extension) {
              this.processFile(fullPath, opts)
            } else if (entryStats.isDirectory()) {
              // Recursively process directories if recursive option is enabled
              this.processPath(fullPath, opts)
            }
            // Otherwise, skip the entry silently
          })
        } else {
          console.error(`Skipping directory ${filePath} (use --recursive to process directories)`)
        }
      } else if (stats.isFile()) {
        this.processFile(filePath, opts)
      } else {
        console.error(`Skipping ${filePath} (not a file or directory)`)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Processing File Error, ${filePath}: ${error.message}`)
      } else {
        console.error(`Unknown Error, ${filePath}: ${error}`)
      }
    }
  }

  public setProcessor(processor: ProcessorFunction): void {
    if (processor == null || typeof processor !== 'function') {
      throw new Error('Invalid Parameter Error: `processor` must be a ProcessorFunction')
    }
    this.processor = processor
  }
}
