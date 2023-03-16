interface Violation {

}

interface PasswordValidationResult {
    valid: boolean;
    errors: Violation[]
}

export function validatePassword (password: string): PasswordValidationResult {
    return {
        valid: false,
        errors: []
    }
}