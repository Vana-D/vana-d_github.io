const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// console.log('Hour: ' + hr+ ' Minute: ' + min+ ' Seconds: ' + sec);

// seconds
let secPos = sec * 360/60;

// minutes
let minPos = (min * 360/60) + (sec * (360/60)/60);

// hours
let hrPos = (hr * 360/12) + (min * (360/60)/12);

function runClock() {
    secPos = secPos + 6;
    minPos = minPos + (6/60);
    hrPos = hrPos + (3/360);

    hourHand.style.transform = 'rotate(' + hrPos + 'deg)';
    minuteHand.style.transform = 'rotate(' + minPos + 'deg)';
    secondHand.style.transform = 'rotate(' + secPos + 'deg)';
}

let myInterval = setInterval(runClock, 1000);