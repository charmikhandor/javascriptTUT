const clock = document.getElementById("clock");

update();
setInterval(update, 1000);
//updates every second
function update(){
    let date = new Date();
    clock.innerHTML = formatTime(date);

    function formatTime(){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours >= 12? "pm" : "am";

        hours = (hours%12) || 12;
        
        hours = formatZeros(hours);
        minutes = formatZeros(minutes);
        seconds = formatZeros(seconds);
        return `${hours}:${minutes}:${seconds} ${amOrpm}`;
    }

    function formatZeros(time){
        time = time.toString()
        return time.length < 2 ? "0"+time : time;
    }
}