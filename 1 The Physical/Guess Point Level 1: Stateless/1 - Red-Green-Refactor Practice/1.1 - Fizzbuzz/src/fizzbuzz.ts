export function fizzbuzz(input: number) {
    let result = ''

    if (input % 3 === 0) {
        result += 'Fizz'
    }

    if (input % 5 === 0) {
        result += 'Buzz'
    }

    return result || input
}
