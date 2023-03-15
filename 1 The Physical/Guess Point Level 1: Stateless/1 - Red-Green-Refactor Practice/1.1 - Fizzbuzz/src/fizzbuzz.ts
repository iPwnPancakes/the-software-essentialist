export function fizzbuzz(renderer: (input: number) => string, limit: number = 100) {
    let result = ''

    for (let i = 0; i < limit; i++) {
        result += renderer(i + 1)
    }

    return result
}

export function render(input: number) {
    let result = ''

    if (input % 3 === 0) {
        result += 'Fizz'
    }

    if (input % 5 === 0) {
        result += 'Buzz'
    }

    return result || input.toString(10)
}
