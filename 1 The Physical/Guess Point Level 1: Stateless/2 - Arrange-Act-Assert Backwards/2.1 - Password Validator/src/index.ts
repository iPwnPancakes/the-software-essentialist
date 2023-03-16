interface PasswordValidationResult {
    valid: boolean;
    errors: string[]
}

export function validatePassword(password: string): PasswordValidationResult {
    const validators = [
        new LengthIsBetweenValidator({
            minLength: 5,
            maxLength: 15
        })
    ]

    const errors = []
    for (const validator of validators) {
        const error = validator.validate(password)
        if (error) {
            errors.push(error)
        }
    }

    return {
        valid: errors.length === 0,
        errors: errors
    }
}

interface PasswordValidator {
    validate(password: string): string | undefined;
}

export class LengthIsBetweenValidator implements PasswordValidator {
    constructor(private readonly constraint: { minLength: number, maxLength: number }) {
    }

    validate(password: string) {
        if (password.length >= this.constraint.minLength && password.length <= this.constraint.maxLength) {
            return;
        }
        return `Password must be between ${this.constraint.minLength} and ${this.constraint.maxLength} characters long`
    }
}