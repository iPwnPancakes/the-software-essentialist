export function isPalindrome (input: string): boolean {
    const preparedInput = prepareInput(input)

    return preparedInput === reverse(preparedInput)
}

function prepareInput (input: string): string {
    return Array.from(input)
        .filter((char) => char.trim().length > 0)
        .map((char) => char.toLowerCase())
        .join('')
}

function reverse(input: string) {
    return Array.from(input).reverse().join('');
}
