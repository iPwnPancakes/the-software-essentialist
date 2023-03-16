export function isPalindrome (input: string): boolean {
    const inputCharacters = getAllCharacters(input)
    const reversedCharacters = Array.from(inputCharacters).reverse()

    return reversedCharacters.join('') === inputCharacters.join('')
}

function getAllCharacters (input: string): string[] {
    return Array.from(input)
        .filter((char) => char.trim().length > 0)
        .map((char) => char.toLowerCase())
}