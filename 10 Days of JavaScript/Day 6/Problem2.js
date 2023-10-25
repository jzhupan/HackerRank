//JavaScript Dates

function getDayName(dateString) {
    let dayName;
    // Write your code here
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let d = new Date(dateString)
    dayName = days[d.getDay()]
    return dayName;
}