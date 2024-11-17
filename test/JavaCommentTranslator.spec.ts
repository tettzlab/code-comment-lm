import * as dotenv from 'dotenv'
import { describe, it, expect } from 'vitest'
import { JavaCommentTranslator } from '../lib/JavaCommentTranslator.js'

dotenv.config()

describe('JavaCommentTranslator', () => {
  it('should translate Java code comments in English into Japanese.', async () => {
    const javaCode = `/**
 * HelloWorld class
 */
public class HelloWorld {
  /**
   * Main function
   */
  public static void main(String args[]) {
    return;
  }
}
`
    const hello = new JavaCommentTranslator()
    const translation = await hello.translate(javaCode)
    expect(translation).toEqual(expect.stringMatching(/ \* (ハローワールド|HelloWorld) ?クラス/i))
    expect(translation).toEqual(expect.stringMatching(/ \* (メイン|Main) ?(ファンクション|関数)/i))
    expect(translation).toEqual(expect.stringContaining('public class HelloWorld {'))
    expect(translation).toEqual(expect.stringContaining('public static void main(String args[]) {'))
  })
})
