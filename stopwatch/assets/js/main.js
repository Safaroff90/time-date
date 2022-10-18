var seconds = 00;
var hundreds = 00;

var appendHundreds = document.getElementById('hundreds');
var appendSeconds = document.getElementById('seconds');
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var interval; 


function startTimer() {
    hundreds++
    if (hundreds <= 9) {
        appendHundreds.innerHTML = "0" + hundreds;
    }  
    if (hundreds > 9) {
        appendHundreds.innerHTML = hundreds;
    } 
    if (hundreds > 99) {
        seconds++
        appendSeconds.innerHTML = "0" + seconds;
        hundreds = 0;
        appendHundreds.innerHTML = "0" + 0;;
    }
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}

    buttonStart.onclick = function(){
        if(interval) {
            clearInterval(interval);}

        interval = setInterval(startTimer,10); 
    }
   
    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    buttonReset.onclick = function (){
        clearInterval(interval)
        hundreds = "00";
        seconds = "00";
        appendSeconds.innerHTML = seconds;
        appendHundreds.innerHTML = hundreds;
    }
