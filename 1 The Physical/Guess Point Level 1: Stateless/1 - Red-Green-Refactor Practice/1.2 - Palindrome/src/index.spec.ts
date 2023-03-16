import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    it('should return true for mom', () => {
        expect(isPalindrome('mom')).toBe(true)
    })

    it('should return true for wow', () => {
        expect(isPalindrome('wow')).toBe(true)
    })

    it('should return true for WoW', () => {
        expect(isPalindrome('WoW')).toBe(true)
    })

    it('should return false for bill', () => {
        expect(isPalindrome('bill')).toBe(false)
    })

    it('should return true for Was It A Rat I Saw', () => {
        expect(isPalindrome('Was It A Rat I Saw')).toBe(true)
    })
})