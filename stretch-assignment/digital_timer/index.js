// let secondTens = document.getElementById("secondTens")
//  let secondOnes = document.getElementById("SecondOnes")
// let msHundreds = document.getElementById("msHundreds")
// let msTens = document.getElementById("msTens");


// var Time = 0;
// var Countup = setInterval(function(){
 
// ++Time;
//  secondOnes.innerHTML = Time; 
//  if(time/10 >= 1){
//      secondTens.innerHTML = Math.floor(time/10);
//  } 
//  msHundreds

//  if(Time >= 30){
//      time = 0;
//      document.write('Time is up');
//  }

// }, 600);

var active = false;

function start_timer() {

    if (active) {
        var timer = document.getElementById("my_timer").innerHTML;
        var arr = timer.split(":")
        let hour =arr[0];
        var min = arr[1];
        var sec = arr[2];
        var millisec = arr[3];
    

        if (sec == 59) {
            if (min == 59) {
                hour++;
                min = 0;
                if (hour < 10) hour = "0" + hour;
            } else {
                min++
            }
            if (min < 10) min = "0"  + min;
            sec = 0;
        } else {
            sec++;
            if (sec < 10) sec = "0" + sec;
        }
        document.getElementById("my_timer").innerHTML = hour + ":" + min + ":" + sec;
        setTimeout(start_timer, 1000);
    }
    if (sec == 30) {
        thirtySec();
    }
}

function changeState() {
    if (active == false) {
        active = true;
        start_timer();
        console.log("Timer has been started");
        document.getElementById("control").innerHTML = "PAUSE";
    } else {
        active = false;
        console.log("Timer is on pause");
        document.getElementById("control").innerHTML = "Start";
    }
}

function reset() {
    document.getElementById("my_timer").innerHTML = "00" + ":" + "00" + ":" + "00";
    console.log("the timer has reset");
}

let audio = document.getElementById("myAudio");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function thirtySec() {
        document.getElementById("my_timer").innerHTML = "00" + ":" + "00" + ":" + "00";
        playAudio();
        window.alert("30 seconds have elapsed");
        active = false;
        document.getElementById("control").innerHTML = "Start"
        // setTimeout(start_timer, 30000)
}