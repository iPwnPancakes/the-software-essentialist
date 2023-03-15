import {fizzbuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {
    it('should return the number', () => {
        expect(fizzbuzz(1)).toBe(1)
    })

    it('should return Fizz for multiplies of 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz')
    })

    it('should return Fizz for multiplies of 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz')
    })

    it('should return FizzBuzz for multiplies of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz')
    })
});
