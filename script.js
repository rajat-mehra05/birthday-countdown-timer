const daysElement = document.getElementById("days")
const hoursElement = document.getElementById("hours")
const minsElement = document.getElementById("mins")
const secondsElement = document.getElementById("seconds")

const bday = "5 April 2021"

function countdown() {
    const bdayDate = new Date(bday)
    const currentDate = new Date();

    const totalseconds = (bdayDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 3600) % 60;
    const seconds = Math.floor(totalseconds) % 60;
   
    /* console.log(days, hours, minutes, seconds); */

daysElement.innerHTML = days;
hoursElement.innerHTML = formatTime(hours);
minsElement.innerHTML = formatTime(mins);
secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time }`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);