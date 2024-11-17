export function identifyLineSeparator(text) {
    if (!text || typeof text !== 'string') {
        return '';
    }
    const crCount = (text.match(/\r(?!\n)/g) || []).length;
    const lfCount = (text.match(/(?<!\r)\n/g) || []).length;
    const crlfCount = (text.match(/\r\n/g) || []).length;
    if (crCount === 0 && lfCount === 0 && crlfCount === 0) {
        return '';
    }
    const maxCount = Math.max(crCount, lfCount, crlfCount);
    if (lfCount === maxCount) {
        return '\n';
    }
    else if (crlfCount === maxCount) {
        return '\r\n';
    }
    else {
        return '\r';
    }
}
