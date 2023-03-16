import {LengthIsBetweenValidator, validatePassword} from "./index";

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

describe('LengthIsBetweenValidator', () => {
    it('should return the error given a password that is too short', () => {
        const validator = new LengthIsBetweenValidator({
            minLength: 5,
            maxLength: 15
        })

        expect(validator.validate('')).toStrictEqual('Password must be between 5 and 15 characters long')
    })

    it('should pass giving an input with the correct length', () => {
        const validator = new LengthIsBetweenValidator({
            minLength: 1,
            maxLength: 3
        })

        expect(validator.validate('12')).toStrictEqual(undefined)
    })

    it('should return true for an input with the exact minimum length', () => {
        const validator = new LengthIsBetweenValidator({
            minLength: 1,
            maxLength: 3
        })

        expect(validator.validate('1')).toStrictEqual(undefined)
    })

    it('should return true for an input with the exact maximum length', () => {
        const validator = new LengthIsBetweenValidator({
            minLength: 1,
            maxLength: 3
        })

        expect(validator.validate('123')).toStrictEqual(undefined)
    })
})

