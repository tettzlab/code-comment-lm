import assert from 'node:assert';
import { parse } from 'java-parser';
import { JavaCommentVisitor, LINE_COMMENT, TRADITIONAL_COMMENT } from './JavaCommentVisitor.js';
import { JavaComment } from './JavaComment.js';
import { identifyLineSeparator } from './identifyLineSeparator.js';
import { translateComments } from '../lib/translateComments.js';
export class JavaCommentTranslator {
    code;
    comments;
    cst;
    lineSeparator;
    mergedComments;
    normalizedCode;
    options = {
        from: 'English',
        to: 'Japanese',
    };
    toLanguage;
    constructor(options) {
        this.options = { ...this.options, ...(options ?? {}) };
    }
    async translate(javaCode, options) {
        const opts = { ...this.options, ...(options ?? {}) };
        this.lineSeparator = identifyLineSeparator(javaCode);
        this.code = javaCode.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split(/\n/);
        this.normalizedCode = this.code.join('\n');
        this.cst = parse(this.normalizedCode);
        const tokens = new JavaCommentVisitor().visit(this.cst);
        this.comments = this.enhanceTokens(tokens);
        this.mergedComments = this.mergeTokens(this.comments);
        const englishComments = [];
        for (let i = 0, len = this.mergedComments.length; i < len; i++) {
            const jc = this.mergedComments[i];
            const comment = jc.getContent();
            englishComments.push(comment.join('\n'));
            // const translation = comment.map((line) => line.toUpperCase())
            // jc.setContent(translation)
        }
        const translatedComments = await translateComments(this.normalizedCode, englishComments, opts.from, opts.to);
        // console.log(JSON.stringify(res, null, 2))
        // const translatedComments = res.translation_list.map((t) => t.translation)
        const translatedCommentsLength = translatedComments ? translatedComments.length : 0;
        for (let i = 0, len = this.mergedComments.length; i < len; i++) {
            if (i < translatedCommentsLength) {
                const jc = this.mergedComments[i];
                jc.setContent(translatedComments[i].replace(/\r\n/g, '\n').replace(/\r/g, '\n').split(/\n/));
            }
        }
        const code = this.normalizedCode;
        const buffer = [];
        let cursor = 0;
        for (let i = 0, len = this.mergedComments.length; i < len; i++) {
            const jc = this.mergedComments[i];
            const comment = jc.format('\n');
            const seekPos = jc.firstToken.startOffset;
            assert.ok(seekPos >= cursor);
            if (seekPos > cursor) {
                buffer.push(code.slice(cursor, seekPos));
            }
            buffer.push(comment);
            cursor = jc.lastToken.endOffset + 1;
            assert.ok(cursor > seekPos);
        }
        if (cursor < code.length) {
            buffer.push(code.slice(cursor));
        }
        return buffer.join('').split(/\n/).join(this.lineSeparator);
    }
    enhanceTokens(tokens) {
        const javaCodeLine = this.code;
        const comments = [];
        let i = 0;
        const len = tokens.length;
        while (i < len) {
            const token = tokens[i++];
            const lines = [];
            let lineIndex = token.startLine - 1;
            const endIndex = token.endLine;
            while (lineIndex < endIndex) {
                lines.push(javaCodeLine[lineIndex++]);
            }
            const isLineComment = token.tokenTypeIdx === LINE_COMMENT;
            const isTraditionalComment = token.tokenTypeIdx === TRADITIONAL_COMMENT;
            const leadingChars = lines[0].slice(0, token.startColumn - 1);
            const isWholeLine = isLineComment && leadingChars.trim().length === 0;
            let trailingChars = '';
            let isJavadoc = false;
            if (isTraditionalComment) {
                isJavadoc = token.image.slice(0, -2).startsWith('/**');
                const last = lines[lines.length - 1];
                if (last.length > token.endColumn) {
                    trailingChars = last.slice(token.endColumn);
                }
            }
            const comment = {
                ...token,
                lines,
                isLineComment,
                isTraditionalComment,
                isJavadoc,
                isWholeLine,
                leadingChars,
                trailingChars,
            };
            comments.push(comment);
        }
        return comments;
    }
    mergeTokens(tokens) {
        const merged = [];
        let i = 0;
        const len = tokens.length;
        while (i < len) {
            const conseq = [];
            let head = tokens[i++];
            conseq.push(head);
            if (head.isLineComment && head.isWholeLine) {
                while (i < len) {
                    const next = tokens[i];
                    if (next.isLineComment &&
                        next.startLine === head.startLine + 1 &&
                        next.isWholeLine &&
                        head.leadingChars === next.leadingChars) {
                        conseq.push(next);
                        head = next;
                        i++;
                        continue;
                    }
                    break;
                }
            }
            merged.push(new JavaComment(conseq));
        }
        return merged;
    }
}
