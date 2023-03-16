import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    const palindromes = [
        'mom',
        'wow',
        'WoW',
        'Was It A Rat I Saw'
    ]

    it.each(palindromes)('should return true for palindrome "%i"', (palindrome) => {
        expect(isPalindrome(palindrome)).toBe(true)
    })

    it('should return false for bill', () => {
        expect(isPalindrome('bill')).toBe(false)
    })
})