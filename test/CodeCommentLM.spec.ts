// main.test.ts

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import * as fs from 'fs'
import * as path from 'path'
import { CodeCommentLM, CodeCommentLMOptions } from '../lib/CodeCommentLM.js'

describe('processPath', async () => {
  const testDir = path.join(__dirname, '.testing')
  const javaFile = path.join(testDir, 'Test.java')
  const txtFile = path.join(testDir, 'Test.txt')
  const subDir = path.join(testDir, 'subdir')
  const javaFileInSubDir = path.join(subDir, 'SubTest.java')
  const options: Partial<CodeCommentLMOptions> = {
    encoding: 'utf8',
    suffix: '~',
    from: 'English',
    to: 'Japanese',
    // verbose: true,
    // recursive: true,
  }

  beforeEach(() => {
    // Create test directory and files
    fs.rmSync(testDir, { recursive: true, force: true })
    fs.mkdirSync(testDir, { recursive: true })
    fs.mkdirSync(subDir, { recursive: true })
    fs.writeFileSync(javaFile, 'public class Test {}', options.encoding as BufferEncoding)
    fs.writeFileSync(txtFile, 'This is a text file.', options.encoding as BufferEncoding)
    fs.writeFileSync(
      javaFileInSubDir,
      'public class SubTest {}',
      options.encoding as BufferEncoding,
    )
  })

  afterEach(() => {
    // Clean up test files and directories
    fs.rmSync(testDir, { recursive: true, force: true })
  })

  it('should not process any directories including .java files in it (non-recursive)', async () => {
    const cclm = new CodeCommentLM(options)
    await cclm.processPath(testDir)

    // Check that javaFile was not processed
    const processedJavaContent = fs.readFileSync(javaFile, options.encoding as BufferEncoding)
    expect(processedJavaContent).toBe('public class Test {}')

    // Check that backup file does not exist for javaFile
    const javaBackupExists = fs.existsSync(javaFile + options.suffix)
    expect(javaBackupExists).toBe(false)

    // Check that txtFile was not processed
    const txtContent = fs.readFileSync(txtFile, options.encoding as BufferEncoding)
    expect(txtContent).toBe('This is a text file.')

    // Check that no backup exists for txtFile
    const txtBackupExists = fs.existsSync(txtFile + options.suffix)
    expect(txtBackupExists).toBe(false)

    // Check that javaFileInSubDir was not processed
    const subJavaContent = fs.readFileSync(javaFileInSubDir, options.encoding as BufferEncoding)
    expect(subJavaContent).toBe('public class SubTest {}')
  })

  it('should process .java files recursively when --recursive is set', async () => {
    const cclm = new CodeCommentLM(options)
    await cclm.processPath(testDir, { recursive: true })

    // Check that javaFile was processed
    const processedJavaContent = fs.readFileSync(javaFile, options.encoding as BufferEncoding)
    expect(processedJavaContent).toBe('PUBLIC CLASS TEST {}')

    // Check that backup file exists for javaFile
    const javaBackupExists = fs.existsSync(javaFile + options.suffix)
    expect(javaBackupExists).toBe(true)

    // Check that javaFileInSubDir was processed
    const processedSubJavaContent = fs.readFileSync(
      javaFileInSubDir,
      options.encoding as BufferEncoding,
    )
    expect(processedSubJavaContent).toBe('PUBLIC CLASS SUBTEST {}')

    // Check that backup file exists for javaFileInSubDir
    const subJavaBackupExists = fs.existsSync(javaFileInSubDir + options.suffix)
    expect(subJavaBackupExists).toBe(true)

    // Check that txtFile was not processed
    const txtContent = fs.readFileSync(txtFile, options.encoding as BufferEncoding)
    expect(txtContent).toBe('This is a text file.')

    // Check that no backup exists for txtFile
    const txtBackupExists = fs.existsSync(txtFile + options.suffix)
    expect(txtBackupExists).toBe(false)
  })

  it('should skip directories when --recursive is not set', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const cclm = new CodeCommentLM(options)
    await cclm.processPath(testDir, { recursive: undefined })

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining(`Skipping directory ${testDir}`),
    )

    consoleErrorSpy.mockRestore()
  })

  it('should process a single .java file', async () => {
    const cclm = new CodeCommentLM(options)
    await cclm.processPath(javaFile)

    const processedJavaContent = fs.readFileSync(javaFile, options.encoding as BufferEncoding)
    expect(processedJavaContent).toBe('PUBLIC CLASS TEST {}')

    const javaBackupExists = fs.existsSync(javaFile + options.suffix)
    expect(javaBackupExists).toBe(true)
  })

  it('should process for non-.java files when specified explicitly', async () => {
    const cclm = new CodeCommentLM(options)
    await cclm.processPath(txtFile)

    const txtContent = fs.readFileSync(txtFile, options.encoding as BufferEncoding)
    expect(txtContent).toBe('THIS IS A TEXT FILE.')

    const txtBackupExists = fs.existsSync(txtFile + options.suffix)
    expect(txtBackupExists).toBe(true)
  })

  it('should provide verbose output when --verbose is set', async () => {
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const cclm = new CodeCommentLM(options)
    await cclm.processPath(javaFile, { verbose: true })

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining(`Processed file ${javaFile}`),
    )

    consoleLogSpy.mockRestore()
  })

  it('should handle errors gracefully', async () => {
    const invalidPath = path.join(testDir, 'nonexistent.java')
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const cclm = new CodeCommentLM(options)
    await cclm.processPath(invalidPath)

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining(`Processing File Error, ${invalidPath}:`),
    )

    consoleErrorSpy.mockRestore()
  })
})
