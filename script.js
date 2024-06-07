// script.js
let timer;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('lapsList');

function updateDisplay() {
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStop() {
    if (running) {
        clearInterval(timer);
        startStopBtn.innerHTML = '<i class="fas fa-play"></i> Start';
    } else {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
        startStopBtn.innerHTML = '<i class="fas fa-pause"></i> Stop';
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    startStopBtn.innerHTML = '<i class="fas fa-play"></i> Start';
    lapsList.innerHTML = '';
}

function recordLap() {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = display.textContent;
        lapsList.appendChild(lapTime);
    }
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);

updateDisplay();
