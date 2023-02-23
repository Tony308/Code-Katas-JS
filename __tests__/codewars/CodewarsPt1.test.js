const {duplicateCount, quadratic, findOdd, solution, isIsogram, getCount, dirReduc, weatherInfo, nbYear, rot13, comp, deleteNth, digPow, anagrams} = require('../CodeWars/CodeWarsPt1');
const {distribution} = require('../../CodeWars/SnakeInTheSquare')

describe.skip('duplicateCount', () => {
    it('', () => {
        var actual = duplicateCount("aabBcde");
        expect(actual).toBe(2);
    })
})

describe.skip('Quadratics', () => {
    it('test cases', () => {

        expect(quadratic(0,1)).toStrictEqual([1, -1, 0]);
        expect(quadratic(1,1)).toStrictEqual([1, -2, 1]);
        expect(quadratic(-4,-9)).toStrictEqual([1, 13, 36]);
        expect(quadratic(-5,-4)).toStrictEqual([1, 9, 20]);
    })
})

describe.skip('findOdd', () => {
    it('test cases', () => {
        a =[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
    n = 5;
    expect(findOdd(a)).toBe(n);
    
    a = [1,1,2,-2,5,2,4,4,-1,-2,5];
    n = -1;
    expect(findOdd(a)).toBe(n);

    a = [20,1,1,2,2,3,3,5,5,4,20,4,5];
    n = 5;
    expect(findOdd(a)).toBe(n);

    expect(findOdd([10])).toBe(10);

    a = [1,1,1,1,1,1,10,1,1,1,1];
    n = 10;
    expect(findOdd([10])).toBe(10);

    a = [5,4,3,2,1,5,4,3,2,10,10];
    n = 1;
    expect(findOdd([10])).toBe(10);
    })
})

it.skip('solution', () => {
    expect(solution('45', '1')).toBe('1451');
    expect(solution('13', '200')).toBe('1320013');
    expect(solution('Soon', 'Me')).toBe('MeSoonMe');
    expect(solution('U', 'False')).toBe('UFalseU');

})

describe.skip('isIsoGram', () => {
    expect('Dermatoglyphics').toBeTruthy();
    expect('isogram').toBeTruthy();
    it("same chars may not be adjacent", () => {
        const actual = isIsogram("aba");
        console.log(actual);
        expect(actual).toBeFalsy();
    })
    it( "same chars may not be same case" , () => {
        expect(isIsogram("moOse")).toBeFalsy();
    })

    expect(isIsogram("isIsogram")).toBeFalsy();

    it('an empty string is a valid isogram' , () => {
        expect(isIsogram("")).toBeTruthy();
    })
})

describe.skip('Vowels', () => {
    it ("should be defined", function(){
        expect(getCount("abracadabra")).toBe(5);
    });
})


describe.skip('Jade Case Strings', () => {
    it('test', () => {
        var str = "How can mirrors be real if our eyes aren't real";
        expect(str.toJadenCase()).toBe('How Can Mirrors Be Real If Our Eyes Aren\'t Real');
    })
})

describe.skip('Directions Reduction', () => {
    it('Eins', () => {
        expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toStrictEqual(["WEST"]);
    })
    it('Zwei', () => {
        expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toStrictEqual( ["NORTH", "WEST", "SOUTH", "EAST"]);
    })

    it('Drei', () => {
        expect(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])).toStrictEqual([])
    })

    it('default', () => {
        expect(dirReduc(['SOUTH', 'NORTH'])).toStrictEqual([]);
        expect(dirReduc(['NORTH', 'SOUTH'])).toStrictEqual([]);
        expect(dirReduc(['WEST', 'EAST'])).toStrictEqual([]);
        expect(dirReduc(['EAST', 'WEST'])).toStrictEqual([]);
        
    }) 
})

describe.skip('celsius converter', function () {
    it ('should get correct answer', function () {
      expect(weatherInfo(50)).toBe('10 is above freezing temperature');
    })
    it('23 => -5', () => {
        expect(weatherInfo(23)).toBe('-5 is freezing temperature');
    })
})

describe.skip("nbYear",function() {
    it("Basic tests",function() {    
        expect(nbYear(1500, 5, 100, 5000)).toBe(15)
    })

    it('zwei', () => {
        expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
    })

    it('drei', () => {
        expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
    })
})

describe.skip("Rot13", function(){
    it("grfg", function(){
      expect(rot13("test")).toBe('grfg');

    })    
    it('Boundary test lowercase', () => {
        expect(rot13("az")).toBe("nm");
    })
    it("Grfg", function(){
      expect(rot13("Test")).toBe('Grfg');
    })

    it('Boundary Test caps', () =>{
        expect(rot13("AZ")).toBe("NM");
    })

})

describe.skip("Are they the 'Same'", () => {
    it('test case 1', () => {
        a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
        expect(comp(a1, a2)).toBeTruthy();
    })

    it('random', () => expect(comp([79], [6242])).toBeFalsy());
    it("[72, 80] and [5184, 6400]", () => {
        expect(comp([72, 80],[5184, 6400])).toBeTruthy();
    })
})

describe.skip('Delete Nth', () => {
    it('eins', () => {
        expect(deleteNth([20,37,20,21], 1)).toStrictEqual( [20,37,21])
    })
    
    it('zwei', () => {
        expect(deleteNth([1,1,3,3,7,2,2,2,2], 3)).toStrictEqual([1, 1, 3, 3, 7, 2, 2, 2]);
    })

    it('drei', () => {
        // expect(deleteNth([1, 2, 3, 1, 1, 2, 2, 3, 3, 2, 4, 5, 1], 3)).toStrictEqual([1,2,3,1,1,2,2,3,3,4,5,1]);
        expect(deleteNth([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5], 2)).toStrictEqual([1,1,2,2,3,3,4,4,5,5]);
    })
})

describe.skip('DigPow', () => {
    it('Eins', () => {
        expect(digPow(89, 1)).toBe(1);
    })

    it('Zwei', () => {
        expect(digPow(92, 1)).toBe(-1);
    })

    it('Drei', () => {
        expect(digPow(46288, 3)).toBe(51);
    })

    it('Viert', () => {
        expect(digPow(695, 2)).toBe(2);
    })
    
})

describe.skip("Anagrams", function() {
    it("Test case one", function() {
        const words = ['aabb', 'abcd', 'bbaa', 'dada'];
        expect(anagrams('abba',words)).toStrictEqual(['aabb', 'bbaa'])
    });
});

describe.skip('Distribution', () => {
    const CONFIG = [
        [5,  [[1, 0, 0], [1, 0, 0], [1, 1, 1]] ],
        [8,  [[1, 0, 0, 0], [1, 0, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]] ],
        [31, [[1, 0, 1, 1, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 0, 1, 1, 1]] ],
      ];
      it('5', () => {
          expect(distribution(5)).toStrictEqual([[1, 0, 0], [1, 0, 0], [1, 1, 1]]);
      })
      it('8', () => {
          expect(distribution(8)).toStrictEqual([[1, 0, 0, 0], [1, 0, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]] )
      })
      it('31', () => {
          expect(distribution(31))
          .toStrictEqual([[1, 0, 1, 1, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 0, 1, 1, 1]] )
      })
})