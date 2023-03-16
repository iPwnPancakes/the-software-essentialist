import {validatePassword} from "./index";

describe('password validator', () => {
    it('should return false for empty password', () => {
        expect(validatePassword('')).toBe(false)
    })
})

