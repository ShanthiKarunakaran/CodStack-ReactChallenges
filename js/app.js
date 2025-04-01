
//initialize the state variables
let time = 0;
let isRunning = false;
let intervalId = null;


//cache the DOM elements
const timerDisplay = document.getElementById('timer');
const timerButton = document.getElementById('timer_button');

//add event listener to the button
timerButton.onclick = toggleTimer;




function toggleTimer() {
    if(isRunning === false) {
        isRunning = true;
        timerButton.textContent = 'Stop';
        timerButton.className = 'btn btn-danger';
        intervalId = setInterval(timer,1000);
    } else {
        isRunning = false;
        clearInterval(intervalId);
        timerButton.textContent = 'Start';
        timerButton.className = 'btn btn-success';
    }
}



function timer() {
    if(isRunning === true) {
       time++;
       timerDisplay.textContent = formatElapsedTime(time);
    }
}

function formatElapsedTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    let result = '';

    if (hours > 0) {
        result = `${hours} ${hours ===1 ? 'hour' : 'hours'}`;           a
    }
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}


function pad(number) {
    return (number < 10) ? '0' + number : number;
}