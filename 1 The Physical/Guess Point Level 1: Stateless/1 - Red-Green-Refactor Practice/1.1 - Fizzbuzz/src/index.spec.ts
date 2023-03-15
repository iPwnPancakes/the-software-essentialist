import {render, fizzbuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {
    it('should call the renderer correctly', () => {
        const renderer = jest.fn()
        fizzbuzz(renderer, 2)

        expect(renderer).toHaveBeenCalledTimes(2)
        expect(renderer).toHaveBeenNthCalledWith(1, 1)
        expect(renderer).toHaveBeenNthCalledWith(2, 2)
    })

    it('should render 100 times by default', () => {
        const renderer = jest.fn()
        fizzbuzz(renderer)

        expect(renderer).toHaveBeenCalledTimes(100)
    })

    it('should return the rendered result', () => {
        const renderer = jest.fn().mockReturnValue('1')
        expect(fizzbuzz(renderer, 1)).toBe('1')
    })
})

describe("fizzbuzz renderer", () => {
    it('should return the number', () => {
        expect(render(1)).toBe('1')
    })

    it('should return Fizz for multiplies of 3', () => {
        expect(render(3)).toBe('Fizz')
    })

    it('should return Fizz for multiplies of 5', () => {
        expect(render(5)).toBe('Buzz')
    })

    it('should return FizzBuzz for multiplies of 3 and 5', () => {
        expect(render(15)).toBe('FizzBuzz')
    })
});
