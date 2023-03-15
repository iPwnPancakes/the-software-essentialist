export function isPalindrome (input: string): boolean {
    const reversed = Array.from(input).reverse().join('')
    return reversed === input
}