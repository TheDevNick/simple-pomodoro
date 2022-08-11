// variables for buttons
const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')

// variables to hold time values
let seconds = 0
let minutes = 0
let hours = 0

// variables for leading 0
let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0


// variables for setInterval and timout
let timerInterval = null
let timerStatus = "stopped"
// stop watch function

function stopWatch() {
    // when we press the play button the seconds will increment
    // add more functionality


    seconds++

    if(seconds / 60 === 1) {//once the seconds reach 60 then increment the minutes
        seconds = 0
        minutes++

        if(minutes / 60 === 1) {
            minutes = 0
            hours++
        }
    }

    // making sure the leading 0 will show if the stopwatch is only showing one digit
    if(seconds < 10) {
        leadingSeconds = '0' + seconds.toString()
    } else {
        leadingSeconds = seconds
    }
    if(minutes < 10) {
        leadingMinutes = '0' + minutes.toString()
    } else {
        leadingSeconds = minutes
    }
    if(hours < 10) {
        leadingHours = '0' + hours.toString()
    } else {
        leadingHours = hours
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds
}



startStopBtn.addEventListener('click', function() {

    if(timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000)
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>'
        timerStatus = 'started'
    } else {
        window.clearInterval(timerInterval)
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus = 'stopped'
    }
})

resetBtn.addEventListener('click', function() {


    window.clearInterval(timerInterval)
    seconds = 0
    minutes = 0
    hours = 0

    document.getElementById('timer').innerHTML = "00:00:00"
})