interface PasswordValidationResult {
    valid: boolean;
    errors: string[]
}

export function validatePassword(password: string, validators: PasswordValidator[]): PasswordValidationResult {
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

export interface PasswordValidator {
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

export class AtLeastOneDigitValidator implements PasswordValidator {
    validate(password: string): string | undefined {
        if (/\d/.test(password)) {
            return
        }
        return "Password must contain at least one digit";
    }
}

export class AtLeastOneUppercaseLetterValidator implements PasswordValidator {
    validate(password: string): string | undefined {
        return "Password must contain at least one uppercase letter";
    }
}