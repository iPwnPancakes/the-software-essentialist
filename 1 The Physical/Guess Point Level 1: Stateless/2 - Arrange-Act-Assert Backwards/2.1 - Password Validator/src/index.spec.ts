import {validatePassword} from "./index";

describe('password validator', () => {
    it('should see an empty password as invalid', () => {
        const result = validatePassword('');

        expect(result.valid).toBe(false)
    })
})

