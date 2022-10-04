const isValidWalk = require('./isValidWalk');

describe("Tests", () => {
    it("test", () => {
        //some test cases for you...
        expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBeTruthy();
    });
    
    it("test zwei", () => {
        const ans = !isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
        expect(ans).toBeFalsy();
    });
    
    it("test drei", () => {
        expect(!isValidWalk(['w'])).toBeFalsy();
    });

    it("test vier", () => {
        expect(!isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBeFalsy();
    });
    
});