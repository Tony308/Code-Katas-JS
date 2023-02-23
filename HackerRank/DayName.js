// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    // Write your code here
    let date = new Date(dateString)
    const options = { weekday: 'long' };
    return date.toLocaleDateString("en-GB" , options)
}

module.exports = getDayName;