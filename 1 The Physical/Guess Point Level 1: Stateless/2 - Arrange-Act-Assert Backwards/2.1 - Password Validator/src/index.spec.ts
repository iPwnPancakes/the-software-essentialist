import {
    AtLeastOneDigitValidator,
    AtLeastOneUppercaseLetterValidator,
    LengthIsBetweenValidator,
    PasswordValidator,
    validatePassword
} from "./index";

describe('password validator', () => {
    it('should return the errors of all validators combined', () => {
        const validators: PasswordValidator[] = [
            {
                validate(): string | undefined {
                    return 'Password is too short'
                }
            },
            {
                validate(): string | undefined {
                    return 'Password is not strong enough'
                }
            }
        ]

        const result = validatePassword('', validators);

        expect(result).toStrictEqual({
            valid: false,
            errors: [
                'Password is too short',
                'Password is not strong enough'
            ]
        })
    })

    it('should return valid when all validators pass', () => {
        const validators: PasswordValidator[] = [
            {
                validate(): string | undefined {
                    return undefined
                }
            }
        ]

        const result = validatePassword('', validators);

        expect(result).toStrictEqual({
            valid: true,
            errors: []
        })
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

    it('should not return errors giving an input with the correct length', () => {
        const validator = new LengthIsBetweenValidator({
            minLength: 1,
            maxLength: 3
        })

        expect(validator.validate('12')).toStrictEqual(undefined)
    })

    it('should not return errors for an input with the exact minimum length', () => {
        const validator = new LengthIsBetweenValidator({
            minLength: 1,
            maxLength: 3
        })

        expect(validator.validate('1')).toStrictEqual(undefined)
    })

    it('should not return errors for an input with the exact maximum length', () => {
        const validator = new LengthIsBetweenValidator({
            minLength: 1,
            maxLength: 3
        })

        expect(validator.validate('123')).toStrictEqual(undefined)
    })
})

describe('AtLeastOneDigitValidator', () => {
    it('should return the correct error when given a password that does not have digits', () => {
        const validator = new AtLeastOneDigitValidator()

        expect(validator.validate('test')).toStrictEqual('Password must contain at least one digit')
    })

    it('should not return errors when given a password with 1 digit', () => {
        const validator = new AtLeastOneDigitValidator()

        expect(validator.validate('1')).toStrictEqual(undefined)
    })

    it('should not return errors when given a password with more than 1 digits', () => {
        const validator = new AtLeastOneDigitValidator()

        expect(validator.validate('12')).toStrictEqual(undefined)
    })

    it('should not return errors when given a password with more than 1 digits and other characters', () => {
        const validator = new AtLeastOneDigitValidator()

        expect(validator.validate('test12')).toStrictEqual(undefined)
    })
})

describe('AtLeastOneUppercaseLetter', () => {
    it('should return the correct error when given a password that does not have any uppercase letters', () => {
        const validator = new AtLeastOneUppercaseLetterValidator()

        expect(validator.validate('test')).toStrictEqual('Password must contain at least one uppercase letter')
    })

    it('should not return errors when the password has 1 uppercase letter', () => {
        const validator = new AtLeastOneUppercaseLetterValidator()

        expect(validator.validate('Test')).toStrictEqual(undefined)
    })

    it('should not return errors when the password has 2 uppercase letters', () => {
        const validator = new AtLeastOneUppercaseLetterValidator()

        expect(validator.validate('TeSt')).toStrictEqual(undefined)
    })
});