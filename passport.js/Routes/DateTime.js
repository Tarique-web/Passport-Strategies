
var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var DATE = new Date();
var day = weekday[DATE.getDay()];


var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

var month = months[DATE.getMonth()]
var date = DATE.getDate();

var currentDate = `${day}, ${date}${month}`
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = `${hours}:${minutes}${ampm}`;
    return strTime;
}

const Time = (formatAMPM(new Date));

const currentDateTime = `${currentDate} ${Time}`
// console.log(currentDateTime);

module.exports = currentDateTime;
