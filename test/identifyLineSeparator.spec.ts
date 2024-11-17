import { describe, it, expect } from 'vitest'
import { identifyLineSeparator } from '../lib/identifyLineSeparator.js'

describe('identifyLineSeparator', () => {
  it('should return LF for Unix-style line endings', () => {
    const unixText = 'Hello\nWorld\nHow\nAre\nYou'
    expect(identifyLineSeparator(unixText)).toBe('\n')
  })

  it('should return CRLF for Windows-style line endings', () => {
    const windowsText = 'Hello\r\nWorld\r\nHow\r\nAre\r\nYou'
    expect(identifyLineSeparator(windowsText)).toBe('\r\n')
  })

  it('should return CR for old Mac-style line endings', () => {
    const oldMacText = 'Hello\rWorld\rHow\rAre\rYou'
    expect(identifyLineSeparator(oldMacText)).toBe('\r')
  })

  it('should return Unknown for text without line separators', () => {
    const noSeparatorText = 'HelloWorldHowAreYou'
    expect(identifyLineSeparator(noSeparatorText)).toBe('')
  })

  it('should return the most frequent separator in mixed text', () => {
    const mixedText1 = 'Hello\nWorld\r\nHow\rAre\nYou\n'
    expect(identifyLineSeparator(mixedText1)).toBe('\n')

    const mixedText2 = 'Hello\r\nWorld\r\nHow\rAre\r\nYou\nToday?\n'
    expect(identifyLineSeparator(mixedText2)).toBe('\r\n')

    const mixedText3 = 'Hello\nWorld\r\nHow\rAre\nYou\rToday?\n'
    expect(identifyLineSeparator(mixedText3)).toBe('\n')
  })

  it('should return CR if the each number of occurrences of the CR, LF, and CRLF are all the same', () => {
    const mixedText = 'Hello\r\nWorld\r\nHow\rAre\rYou\nToday?\n'
    expect(identifyLineSeparator(mixedText)).toBe('\n')
  })

  it('should handle strings with only one line', () => {
    expect(identifyLineSeparator('Single line')).toBe('')
  })

  it('should handle empty strings', () => {
    expect(identifyLineSeparator('')).toBe('')
  })

  it('should handle falsy value', () => {
    expect(identifyLineSeparator(0 as unknown as string)).toBe('')
    expect(identifyLineSeparator(false as unknown as string)).toBe('')
    expect(identifyLineSeparator(null as unknown as string)).toBe('')
    expect(identifyLineSeparator(undefined as unknown as string)).toBe('')
    expect(identifyLineSeparator(void 0 as unknown as string)).toBe('')
  })

  it('should handle non-strings parameters', () => {
    expect(identifyLineSeparator({} as unknown as string)).toBe('')
    expect(identifyLineSeparator((() => {}) as unknown as string)).toBe('')
    expect(identifyLineSeparator(new Object() as unknown as string)).toBe('')
  })
})
