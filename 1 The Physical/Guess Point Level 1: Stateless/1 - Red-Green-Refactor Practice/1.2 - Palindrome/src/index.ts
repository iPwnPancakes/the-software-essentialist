export function isPalindrome (input: string): boolean {
    const lowercaseCharacters = allLowercaseCharacters(input)

    return lowercaseCharacters === reverse(lowercaseCharacters)
}

function allLowercaseCharacters (input: string): string {
    return Array.from(input)
        .filter((char) => char.trim().length > 0)
        .map((char) => char.toLowerCase())
        .join('')
}

function reverse(input: string) {
    return Array.from(input).reverse().join('');
}
