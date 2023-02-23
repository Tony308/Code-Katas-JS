const {add} = require('../../CodeWars/AddingBigNumbers')

describe.skip("Add two numbers", function(){
    it("should pass basic tests", function() {
        expect(add("1", "1")).toBe("2")
        expect(add("123", "456")).toBe("579")
    })

    it('', () => {
        expect(add("888", "222")).toBe("1110")
        expect(add("1372", "69")).toBe("1441")

    })
    it('' , () => {
        expect(add("12", "456")).toBe("468")
        expect(add("101", "100")).toBe("201")

    })
    it('' , () => {
        expect(add('63829983432984289347293874', '90938498237058927340892374089')).toBe("91002328220491911630239667963");
    })
})