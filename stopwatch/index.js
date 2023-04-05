const timeDisplay = document.querySelector("#timeDisplay");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let time = 0;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;
let intervalID;


start.addEventListener("click", () => {
    if(paused){
        paused = false;
        intervalID = setInterval(updateTime, 1000);
    }
});

pause.addEventListener("click", () => {
    if(!paused){
        paused = true;
        clearInterval(intervalID);
    }
});

reset.addEventListener("click", () => {
    paused = true;
    time = 0;
    mins= 0;
    hrs = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00"
});

function updateTime(){
    time+=1000;
    secs = pad(Math.floor((time/1000)%60));
    mins = pad(Math.floor((time/1000*60)%60));
    hrs = pad(Math.floor((time/1000*60*60)%60));
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`

    function pad(unit){
        return (("0")+unit).length > 2 ? unit : "0"+unit;
    }
}