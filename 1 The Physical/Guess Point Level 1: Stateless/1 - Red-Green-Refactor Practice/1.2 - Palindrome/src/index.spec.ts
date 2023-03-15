import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    it('should return true for mom', () => {
        expect(isPalindrome('mom')).toBe(true)
    })

    it('should return true for wow', () => {
        expect(isPalindrome('wow')).toBe(true)
    })

    it('should return true for test', () => {
        expect(isPalindrome('test')).toBe(false)
    })
})