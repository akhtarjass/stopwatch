

var playPause = 0;
var interval;

function playfunc(){
    
    playPause = playPause+1;
    if(playPause === 1){
        play();
        document.getElementById('play').classList.add('pause');
        document.getElementById('animationCir').classList.add('addAnimation');
        document.getElementById('animationCir').style.animationPlayState = 'running';
        

    }else if(playPause === 2){
        document.getElementById('play').classList.remove('pause');
        document.getElementById('animationCir').style.animationPlayState = 'paused';
        playPause = 0;
        stop();
    }
}

function play(){
    interval = setInterval(timer, 10);
}

function stop(){
    clearInterval(interval);
}

var milisec = 0;
var sec = 0;
var min = 0; 
var hour = 0;


var milisecVal = 0;
var secVal = 0;
var minVal = 0;
var hourVal = 0;



 

function timer(){
    milisecVal = updateTime(milisec);
    secVal = updateTime(sec);
    minVal = updateTime(min);
    hourVal = updateTime(hour);
    
    milisec = ++milisec;

    if(milisec === 100){
        milisec = 0;
        sec = ++sec;
    }
    if(sec === 60){
        min = ++min;
        sec = 0;
    }
    if(min === 60){
        min = 0;
        hour = ++hour;
    }
        milisecHead = document.getElementById("milisec")
        secHead = document.getElementById("sec");
        minHead = document.getElementById("min");
        hourHead = document.getElementById("hour")
         
        milisecHead.innerHTML = milisecVal
        secHead.innerHTML = sec
        minHead.innerHTML = min
        hourHead.innerHTML = hour

    } 
    function updateTime(i){
        if(i < 10){
            i = "0" + i;
        }  
        return i;
    }

function resetfunc(){
    milisec = 0;
    sec =0;
    min = 0;
    hour = 0;

    milisecHead = document.getElementById("milisec")
    secHead = document.getElementById("sec")
    minHead = document.getElementById("min")
    hourHead = document.getElementById("hour")
    
    milisecHead.innerHTML = "0";
    secHead.innerHTML = "0";
    minHead.innerText = "0";
    hourHead.innerText = "0";

    if( document.getElementById('play').className = 'pause'){
        document.getElementById('animationCir').classList.remove('addAnimation')
     }else {
        document.getElementById('animationCir').classList.remove('addAnimation');
        
     }
     setTimeout(function(){
        document.getElementById('animationCir').classList.add('addAnimation'); 
    }, 10)
}


function stopfunc(){
    clearInterval(interval)
    resetfunc();

    if( document.getElementById('play').className = 'pause'){
        document.getElementById('animationCir').classList.remove('addAnimation')
    }
     playfunc()
}