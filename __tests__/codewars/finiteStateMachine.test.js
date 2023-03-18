const main = require("../../CodeWars/finiteStateMachine");

describe('Finite State Machine', () => {
    it.each([
        [
            ["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "RCV_FIN"], "CLOSE_WAIT"
        ],
        [
            ["APP_PASSIVE_OPEN", "RCV_SYN", "RCV_ACK"], "ESTABLISHED"
        ],
        [
            ["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "RCV_FIN", "APP_CLOSE"], "LAST_ACK"
        ],
        [
            ["APP_ACTIVE_OPEN"], "SYN_SENT"
        ],
        [
            ["APP_PASSIVE_OPEN", "RCV_SYN", "RCV_ACK", "APP_CLOSE", "APP_SEND"], "ERROR",
        ],
        [["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "APP_CLOSE", "RCV_FIN_ACK", "RCV_ACK"], "ERROR"],
        [['RCV_SYN', 'RCV_ACK', 'APP_CLOSE'], "ERROR"]
    ])("Given: '%s' then return '%s'", (input, expected) => {
        expect(main(input)).toBe(expected);

    })
})