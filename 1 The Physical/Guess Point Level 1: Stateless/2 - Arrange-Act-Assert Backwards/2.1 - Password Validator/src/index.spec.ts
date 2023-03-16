import {
    AtLeastOneDigitValidator,
    AtLeastOneUppercaseLetterValidator,
    DefaultPasswordValidator,
    LengthIsBetweenValidator,
    PasswordValidator
} from "./index";

describe('DefaultPasswordValidator', () => {
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

        const defaultValidator = new DefaultPasswordValidator(validators)
        const result = defaultValidator.validate('')

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

        const defaultValidator = new DefaultPasswordValidator(validators)
        const result = defaultValidator.validate('pass')

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
    const newValidator = () => (new AtLeastOneDigitValidator())

    it('should return the correct error when given a password that does not have digits', () => {
        expect(newValidator().validate('test')).toStrictEqual('Password must contain at least one digit')
    })

    it('should not return errors when given a password with 1 digit', () => {
        expect(newValidator().validate('1')).toStrictEqual(undefined)
    })

    it('should not return errors when given a password with more than 1 digits', () => {
        expect(newValidator().validate('12')).toStrictEqual(undefined)
    })

    it('should not return errors when given a password with more than 1 digits and other characters', () => {
        expect(newValidator().validate('test12')).toStrictEqual(undefined)
    })
})

describe('AtLeastOneUppercaseLetter', () => {
    const newValidator = () => (new AtLeastOneUppercaseLetterValidator())

    it('should return the correct error when given a password that does not have any uppercase letters', () => {
        expect(newValidator().validate('test')).toStrictEqual('Password must contain at least one uppercase letter')
    })

    it('should not return errors when the password has 1 uppercase letter', () => {
        expect(newValidator().validate('Test')).toStrictEqual(undefined)
    })

    it('should not return errors when the password has 2 uppercase letters', () => {
        expect(newValidator().validate('TeSt')).toStrictEqual(undefined)
    })
});