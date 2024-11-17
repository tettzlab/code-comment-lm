import assert from 'node:assert';
export class JavaComment {
    firstToken;
    lastToken;
    leadingLines;
    tokens;
    trailingLines;
    content = [];
    constructor(tokens) {
        this.tokens = tokens;
        if (!tokens || tokens.length === 0) {
            throw new Error('Invalid `tokens`');
        }
        this.firstToken = tokens[0];
        this.lastToken = tokens[tokens.length - 1];
        assert.ok(this.firstToken != null);
        assert.ok(this.firstToken.startOffset != null);
        assert.ok(this.lastToken != null);
        assert.ok(this.lastToken.endOffset != null);
        assert.ok(this.firstToken.startOffset < this.lastToken.endOffset);
        // if (tokens.length === 1) {
        //   const token = tokens[0]
        //   if (token.isLineComment) {
        //     this.isInline = !token.isWholeLine
        //   } else if (token.isTraditionalComment) {
        //     this.isBlock = ...
        //   }
        // }
        const commentBody = [];
        for (let i = 0, len = tokens.length; i < len; i++) {
            const token = tokens[i];
            if (token.isLineComment) {
                commentBody.push(token.image.replace(/^\/\/ ?/, ''));
            }
            else if (token.isTraditionalComment) {
                const heading = token.isJavadoc ? /^\/\*\* ?/ : /^\/\* ?/;
                const text = token.image.replace(/ ?\*\/$/, '').replace(heading, '');
                const lines = text.split(/\n/);
                const lastLineIndex = lines.length;
                for (let j = 0; j < lastLineIndex; j++) {
                    let line = lines[j];
                    if (j === 0) {
                        continue;
                    }
                    line = line.replace(/^ +\* ?/, '').replace(/[ \t]+$/, '');
                    if (j === lastLineIndex - 1) {
                        if (line.trim().length === 0) {
                            line = '';
                        }
                    }
                    lines[j] = line;
                }
                commentBody.push(...lines);
            }
        }
        let idx = 0;
        const len = commentBody.length;
        while (idx < len && !commentBody[idx]) {
            idx++;
        }
        this.leadingLines = idx;
        if (idx === len) {
            this.trailingLines = 0;
            this.content = [];
            return;
        }
        idx = len - 1;
        while (idx >= 0 && !commentBody[idx]) {
            idx--;
        }
        this.trailingLines = len - 1 - idx;
        this.content = commentBody.slice(this.leadingLines, len - this.trailingLines);
    }
    format(lineSeparator) {
        if (this.firstToken.isLineComment) {
            return this.formatAsLineComment(lineSeparator);
        }
        return this.formatAsTraditionalComment(lineSeparator, this.firstToken.isJavadoc);
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        content = content ? content.slice(0) : [];
        if (this.firstToken.isLineComment) {
            this.content = content;
        }
        else {
            this.content = content.map((text) => text.replace(/\*\//g, '*|').replace(/\/\*/g, '|*'));
        }
    }
    formatAsLineComment(lineSeparator) {
        let buf = [];
        for (let i = 0, len = this.leadingLines; i < len; i++) {
            buf.push('');
        }
        buf.push(...this.content);
        for (let i = 0, len = this.trailingLines; i < len; i++) {
            buf.push('');
        }
        if (buf.length === 0) {
            return '';
        }
        else if (buf.length === 1) {
            const comment = buf[0].trim();
            if (comment) {
                return `// ${buf[0]}`;
            }
            else {
                return '//';
            }
        }
        let prefix = '';
        if (this.firstToken.leadingChars.match(/^[ \t]+$/)) {
            prefix = this.firstToken.leadingChars;
        }
        buf = buf.map((line, idx) => `${idx > 0 ? prefix : ''}// ${line}`);
        return buf.join(lineSeparator);
    }
    formatAsTraditionalComment(lineSeparator, javadoc) {
        let buf = [];
        for (let i = 0, len = this.leadingLines; i < len; i++) {
            buf.push('');
        }
        buf.push(...this.content);
        for (let i = 0, len = this.trailingLines; i < len; i++) {
            buf.push('');
        }
        if (buf.length === 0) {
            return '';
        }
        else if (buf.length === 1) {
            const comment = buf[0].trim();
            if (comment) {
                return `${javadoc ? '/**' : '/*'} ${buf[0]} */`;
            }
            else {
                return `${javadoc ? '/**' : '/*'}*/`;
            }
        }
        let prefix = '';
        if (this.firstToken.leadingChars.match(/^[ \t]+$/)) {
            prefix = this.firstToken.leadingChars;
        }
        buf = buf.map((line, idx) => {
            if (idx === 0) {
                if (line) {
                    return javadoc ? `/** ${line}` : `/* ${line}`;
                }
                else {
                    return javadoc ? '/**' : '/*';
                }
            }
            else if (idx === buf.length - 1) {
                if (line) {
                    return `${prefix} * ${line} */`;
                }
                else {
                    return `${prefix} */`;
                }
            }
            return `${prefix} * ${line}`;
        });
        return buf.join(lineSeparator);
    }
}
