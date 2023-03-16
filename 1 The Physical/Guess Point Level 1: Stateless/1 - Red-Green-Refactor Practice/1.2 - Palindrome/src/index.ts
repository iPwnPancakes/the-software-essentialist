export function isPalindrome (input: string): boolean {
    const inputCharacters = getAllCharacters(input)
    const reversedCharacters = reverse(inputCharacters)

    return reversedCharacters.join('') === inputCharacters.join('')
}

function getAllCharacters (input: string): string[] {
    return Array.from(input)
        .filter((char) => char.trim().length > 0)
        .map((char) => char.toLowerCase())
}

function reverse(inputCharacters: string[]) {
    return Array.from(inputCharacters).reverse();
}
