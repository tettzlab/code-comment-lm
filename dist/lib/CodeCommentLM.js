import * as fs from 'fs';
import * as path from 'path';
export class CodeCommentLM {
    options = {
        encoding: 'utf8',
        from: 'English',
        to: 'Japanese',
        suffix: '~',
        // verbose: true,
        // recursive: true,
        extension: '.java',
    };
    processor;
    constructor(options) {
        this.options = { ...this.options, ...(options ?? {}) };
        this.processor = async (code, options) => code.toUpperCase();
    }
    async processFile(fileName, options) {
        try {
            const opts = { ...this.options, ...(options ?? {}) };
            // console.log('CodeCommentLM.processFile():', JSON.stringify(opts, null, 2))
            const content = fs.readFileSync(fileName, opts.encoding);
            // Make backup
            const backupFileName = fileName + opts.suffix;
            fs.writeFileSync(backupFileName, content, opts.encoding);
            // Translate it into another language
            const translation = await this.processor(content, opts);
            // Write back to original file
            fs.writeFileSync(fileName, translation, opts.encoding);
            if (opts.verbose) {
                console.log(`Processed file ${fileName}`);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Processing File Error, ${fileName}: ${error.message}`);
            }
            else {
                console.error(`Unknown Error, ${fileName}: ${error}`);
            }
        }
    }
    async processPath(filePath, options) {
        try {
            const opts = { ...this.options, ...(options ?? {}) };
            // console.log('CodeCommentLM.processFile():', JSON.stringify(opts, null, 2))
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                if (opts.recursive) {
                    const entries = fs.readdirSync(filePath);
                    entries.forEach((entry) => {
                        const fullPath = path.join(filePath, entry);
                        const entryStats = fs.statSync(fullPath);
                        // Check if the entry is a regular file with the specified file extention before processing
                        if (entryStats.isFile() && path.extname(entry) === opts.extension) {
                            this.processFile(fullPath, opts);
                        }
                        else if (entryStats.isDirectory()) {
                            // Recursively process directories if recursive option is enabled
                            this.processPath(fullPath, opts);
                        }
                        // Otherwise, skip the entry silently
                    });
                }
                else {
                    console.error(`Skipping directory ${filePath} (use --recursive to process directories)`);
                }
            }
            else if (stats.isFile()) {
                this.processFile(filePath, opts);
            }
            else {
                console.error(`Skipping ${filePath} (not a file or directory)`);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Processing File Error, ${filePath}: ${error.message}`);
            }
            else {
                console.error(`Unknown Error, ${filePath}: ${error}`);
            }
        }
    }
    setProcessor(processor) {
        if (processor == null || typeof processor !== 'function') {
            throw new Error('Invalid Parameter Error: `processor` must be a ProcessorFunction');
        }
        this.processor = processor;
    }
}
