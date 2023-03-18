const inputs = new Map([
    ['APP_PASSIVE_OPEN', "APP_PASSIVE_OPEN"],
    ['APP_ACTIVE_OPEN', "APP_ACTIVE_OPEN"],
    ['APP_SEND', "APP_SEND"],
    ['APP_CLOSE', "APP_CLOSE"],
    ['APP_TIMEOUT', "APP_TIMEOUT"],
    ['RCV_SYN', "RCV_SYN"],
    ['RCV_ACK', "RCV_ACK"],
    ['RCV_SYN_ACK', "RCV_SYN_ACK"],
    ['RCV_FIN', "RCV_FIN"],
    ['RCV_FIN_ACK', "RCV_FIN_ACK"],
]);

const states = new Map();
states.set("CLOSED", [
    ['CLOSED', 'APP_PASSIVE_OPEN', 'LISTEN'],
    ['CLOSED', 'APP_ACTIVE_OPEN', 'SYN_SENT']
]);
states.set("LISTEN", [
    ["LISTEN", 'RCV_SYN', "SYN_RCVD"],
    ['LISTEN', 'APP_SEND', "SYN_SENT"],
    ['LISTEN', 'APP_CLOSE', 'CLOSED'],
]);
states.set('SYN_RCVD', [
    ['SYN_RCVD', 'APP_CLOSE', 'FIN_WAIT_1'],
    ['SYN_RCVD', 'RCV_ACK', 'ESTABLISHED'],
]);
states.set('SYN_SENT', [
    ['SYN_SENT', 'RCV_SYN', 'SYN_RCVD'],
    ['SYN_SENT', 'RCV_SYN_ACK', 'ESTABLISHED'],
    ['SYN_SENT', 'APP_CLOSE', 'CLOSED'],
]);
states.set("ESTABLISHED", [
    ['ESTABLISHED', 'APP_CLOSE', 'FIN_WAIT_1'],
    ['ESTABLISHED', 'RCV_FIN', 'CLOSE_WAIT'],
]);
states.set('FIN_WAIT_1', [
    ['FIN_WAIT_1', 'RCV_FIN', 'CLOSING'],
    ['FIN_WAIT_1', 'RCV_FIN_ACK', 'TIME_WAIT'],
    ['FIN_WAIT_1', 'RCV_ACK', 'FIN_WAIT_2'],
]);
states.set("CLOSING", [
    ['CLOSING', 'RCV_ACK', 'TIME_WAIT']
]);
states.set('FIN_WAIT_2', [
    ['FIN_WAIT_2', 'RCV_FIN', 'TIME_WAIT'],
])
states.set('TIME_WAIT', [
    ['TIME_WAIT', 'APP_TIMEOUT', 'CLOSED'],

]);
states.set('CLOSE_WAIT', [
    ['CLOSE_WAIT', 'APP_CLOSE', 'LAST_ACK']
]);
states.set('LAST_ACK', [
    ['LAST_ACK', 'RCV_ACK', 'CLOSED']
]);

function traverseTCPStates(eventList) {
    var state = "CLOSED"; // initial state, always
    for (const event of eventList) {
        if (!inputs.has(event)) {
            state = "ERROR";
            break;
        }
        const path = states.get(state);
        for (const item of path) {
            if (item[1] == event) {
                state = item[2];
                break;
            } 
            state = "ERROR";
        }
        if (state == 'ERROR') {
            return state;
        }
    }
    return state;
}

module.exports = traverseTCPStates;