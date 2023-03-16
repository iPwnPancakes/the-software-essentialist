interface PasswordValidationResult {
    valid: boolean;
    errors: string[]
}

export function validatePassword (password: string): PasswordValidationResult {
    const errors = []

    if (!isBetween(5, 15, password)) {
        errors.push('Password must be between 5 and 15 characters long')
    }

    return {
        valid: errors.length === 0,
        errors: errors
    }
}

export function isBetween (minLength: number, maxLength: number, input: string): boolean {
    return input.length >= minLength && input.length <= maxLength
}