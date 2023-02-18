class Event {
    constructor() {
        this.handler = new Set();
    }
    subscribe(func) {
        this.handler.add(func);
    }

    unsubscribe(func) {
        this.handler.delete(func);
    }

    emit(...args) {
        this.handler.forEach(s => s(...args));
    }
}

module.exports = Event;