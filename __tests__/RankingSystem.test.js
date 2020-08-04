const {User} = require('../CodeWars/RankingSystem')

describe.only("User Class", function() {
    
    it("should initialize user with seed data", () => {
        const user = new User()
        expect(user.rank).toBe(-8);
        expect(user.progress).toBe(0);
    });

    it('should calculate points, Rank: -8', () => {
        const user = new User()
        expect(user.rank).toBe(-8)
        expect(user.calculatePoints(-8)).toBe(3)
        expect(user.calculatePoints(-7)).toBe(10)
        expect(user.calculatePoints(-6)).toBe(40)
        expect(user.calculatePoints(-5)).toBe(90)
        expect(user.calculatePoints(-4)).toBe(160)
        expect(user.calculatePoints(-3)).toBe(250)
        expect(user.calculatePoints(-2)).toBe(360)
        expect(user.calculatePoints(-1)).toBe(490)
        expect(user.calculatePoints(1)).toBe(640)
        expect(user.calculatePoints(8)).toBe(2250)
    })

    it('should calculate rank:7; 8,6', () => {
        const user = new User();
        user.rank = 7
        user.incProgress(8)
        expect(user.progress).toBe(10)
        user.incProgress(6)
        expect(user.progress).toBe(11)
    })

    it('should increase progress', () => {
        const user = new User();
        user.incProgress(-8)
        expect(user.progress).toBe(3)
        user.incProgress(-7)
        expect(user.progress).toBe(13)
        user.incProgress(-6)
        expect(user.progress).toBe(53)
        user.incProgress(-6)
        expect(user.progress).toBe(93)
    })

    it('should rank up and leftover 60 points', () => {
        const user = new User();
        user.incProgress(-4)
        expect(user.rank).toBe(-7)
        expect(user.progress).toBe(60)
    })

    it('should progress 10', () => {
        const user = new User();
        user.rank = -1;
        user.incProgress(1);
        expect(user.progress).toBe(10);
    })

    it('should inc 4 ranks, progress: 90', () => {
        const user = new User();
        user.incProgress(-1)
        expect(user.progress).toBe(90)
        expect(user.rank).toBe(-4)
    })

    it('should calc points: rank 1: -1', () => {
        const user = new User();
        user.rank = 1;
        expect(user.calculatePoints(-1)).toBe(1)
    })

    it('should max out rank', () => {
        const user = new User();
        user.incProgress(8)
        expect(user.rank).toBe(8)
        expect(user.progress).toBe(0)
    })

});
