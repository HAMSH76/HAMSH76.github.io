
function showTime(){
    var date = new Date();
    var hours = date.getHours(); 
    var mins = date.getMinutes(); 
    var sec = date.getSeconds(); 
    var session = "AM";
    
    if(hours > 12){
        session = "PM";
    }
    
    hours = (hours < 10) ? "0" + hours : hours;
    mins = (mins < 10) ? "0" + mins : mins;
    sec = (sec < 10) ? "0" + sec : sec;
    
    var time = hours + ":" + mins + ":" + sec + " " + session;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
 
showTime();