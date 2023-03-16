import {isBetween, validatePassword} from "./index";

describe('password validator', () => {
    it('should see an empty password as invalid', () => {
        const result = validatePassword('');

        expect(result.valid).toBe(false)
    })

    it('should return an error indicating the expected password length given an empty password', () => {
        const result = validatePassword('');

        expect(result.errors).toStrictEqual(['Password must be between 5 and 15 characters long'])
    })
})

describe('isBetween validator', () => {
    it('should return false given a too short string', () => {
        expect(isBetween(5, 15, '')).toBe(false)
    })

    it('should return true for an input with the correct length', () => {
        expect(isBetween(1, 3, '12')).toBe(true)
    })
})

