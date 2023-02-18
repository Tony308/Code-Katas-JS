const Event = require('../CodeWars/Event');

var event;
describe("events", () => {
    beforeEach(() => {
        event = new Event();
    });
    it('first', () => {
    
        function f() {
            f.calls = (f.calls || 0) + 1;
            f.args = Array.prototype.slice.call(arguments);
        }
        
        event.subscribe(f);
        event.emit(1, 'foo', true);
        
        expect(f.calls).toBe(1); // calls a handler
        // Test.assertSimilar(f.args, [1, 'foo', true]); // passes arguments
        expect(f.args).toEqual([1, 'foo', true]);
        
        event.unsubscribe(f);
        event.emit(2);
        
        expect(f.calls === 1); //no second call
    })
});