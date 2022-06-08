const clock = document.querySelector("#clock");
const nowTime = clock.querySelector("span");

function timeSet() {
    const date = new Date;
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    nowTime.innerText = `${hour} :  ${minute} : ${second}`;
    
}

setInterval(timeSet, 1000)
