const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

function printTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(hr>12){hr = hr - 12}
    if(hr == 00){hr = 12}
    if(hr<10){hr = "0" + hr;}
    if(min<10){min = "0" + min;}
    if(sec<10){sec = "0" + sec;}
    
    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    
}
let myInterval = setInterval(printTime, 1000)
