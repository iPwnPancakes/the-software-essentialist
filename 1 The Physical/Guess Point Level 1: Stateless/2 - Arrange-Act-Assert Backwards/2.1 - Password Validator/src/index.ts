interface PasswordValidationResult {
    valid: boolean;
    errors: string[]
}

export function validatePassword (password: string): PasswordValidationResult {
    return {
        valid: false,
        errors: [
            'Password must be between 5 and 15 characters long'
        ]
    }
}