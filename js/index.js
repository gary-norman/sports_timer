let homeScoreJs = 0;
let awayScoreJs = 0;
let countdown = 0;
let homeNamed = 'Home';
let awayNamed = 'Away';
const homeScoreValue = document.getElementById('homeScore');
const awayScoreValue = document.getElementById('awayScore');
const timerValueMins = document.getElementById('timerM');
const timerValueSecs = document.getElementById('timerS');
const homeNameValue = document.getElementById('homeName');
const awayNameValue = document.getElementById('awayName');

//populate HTML
homeScoreValue.innerHTML = (pad2(homeScoreJs));
awayScoreValue.innerHTML = (pad2(awayScoreJs));
timerValueMins.innerHTML = (pad2(Math.floor(countdown/60)));
timerValueSecs.innerHTML = (pad2(countdown % 60));
homeNameValue.innerHTML = homeNamed ;
awayNameValue.innerHTML = awayNamed ;

//functions for renaming teams & changing colours

function renameHome() {
    let userHome = prompt("Enter the home team name.");
    homeNamed = userHome;
    homeNameValue.innerHTML = homeNamed ;
}
function renameAway() {
    let userAway = prompt("Enter the Away team name.");
    awayNamed = userAway;
    awayNameValue.innerHTML = awayNamed ;
}




//functions for the buttons
function plusOneToHome() {
    homeScoreJs ++;
    homeScoreValue.innerHTML = (pad2(homeScoreJs));
}
function minusOneToHome() {
    homeScoreJs --;
    if (homeScoreJs < 0) {
        homeScoreJs = 0;
    }
    homeScoreValue.innerHTML = (pad2(homeScoreJs));
}
function resetHome() {
    homeScoreJs = 0;
    homeScoreValue.innerHTML = (pad2(homeScoreJs));
}
function plusOneToAway() {
    awayScoreJs ++;
    awayScoreValue.innerHTML = (pad2(awayScoreJs));
}
function minusOneToAway() {
    awayScoreJs --;
    if (awayScoreJs < 0) {
        awayScoreJs = 0;
    }
    awayScoreValue.innerHTML = (pad2(awayScoreJs));
}
function resetAway() {
    awayScoreJs = 0;
    awayScoreValue.innerHTML = (pad2(awayScoreJs));
}

function plusFiveToClock() {
    countdown += 300;
    timerValueMins.innerHTML = (pad2(Math.floor(countdown/60)));
    timerValueSecs.innerHTML = (pad2(countdown % 60));
}
function minusFiveToClock() {
    if (countdown < 301) {
        countdown = 0;
    }
    else {
    countdown -= 300;
    }
    timerValueMins.innerHTML = (pad2(Math.floor(countdown/60)));
    timerValueSecs.innerHTML = (pad2(countdown % 60));
}
function plusOneToClock() {
    countdown += 60;
    timerValueMins.innerHTML = (pad2(Math.floor(countdown/60)));
    timerValueSecs.innerHTML = (pad2(countdown % 60));
}
function minusOneToClock() {
    if (countdown < 61) {
        countdown = 0;
    }
    else {
    countdown -= 60;
    }
    timerValueMins.innerHTML = (pad2(Math.floor(countdown/60)));
    timerValueSecs.innerHTML = (pad2(countdown % 60));
}
function resetClock() {
    countdown = 0;
    timerValueMins.innerHTML = (pad2(countdown));
    timerValueSecs.innerHTML = (pad2(countdown));
}



//ensure numbers are always 2 digits
function pad2(number) {
   
    return (number < 10 ? '0' : '') + number
  
}

//timer
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (countdown >0 && stoptime == false) {

    countdown -= 1;
    timerValueMins.innerHTML = (pad2(Math.floor(countdown/60)));
    timerValueSecs.innerHTML = (pad2(countdown % 60));

    setTimeout("timerCycle()", 1000);
  }
}