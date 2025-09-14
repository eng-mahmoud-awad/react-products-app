/**
 * 
 * @param {string} text - text to slice
 * @param {number} max - max length
 * @returns Sliced text with ... if length exceeds max
 */
export function txtSlice(text: string, max: number =50) {
    if (text.length >= max) return text.slice(0, max) + '...';
    return text;
}