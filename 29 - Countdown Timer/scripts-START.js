/* function timer(seconds) {
  setInterval(function() {
    seconds--;
  }, 1000);
}
// above code is faulty because for some reason setInterval will stop running when it supposed to never stop */

let countdown; // we have placed it in the global name space, but alternatively we could have placed this variable instead in an iife
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  //to figure out when timer started, write below
  const now = Date.now();  //old equivalent way was (new Date()).getTime();
  const then = now + seconds * 1000; //multiplied by 1000 because now is in milliseconds
  // console.log({now, then});
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => { // notice now that right now it doesnt countdown immediately - it waits one second before counting down.... need to change this behavior
    const secondsLeft = Math.round((then - Date.now()) / 1000); //converting to seconds from milliseconds
    // check if we should stop it! - in order to stop it we need to store countdown in a separate global variable
    if(secondsLeft < 0) { // correction - to display correctly it is < 0 not <= 0
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000)
}

function displayTimeLeft(seconds) { // call this before invoking setInterval to display the first display countdown immediately and not one wait one second
  const minutes = Math.floor(seconds /60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds <  10 ? '0' : ''}${remainderSeconds}`;
  document.title = display; //lags! not synching!!!
  timerDisplay.textContent = display;
  console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp); //converts timestamp to object where we can display minutes, day, whatever using . e.g. end.getDay() gives you the day of the month
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent =`Be Back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
  // endTime.textContent =`Be Back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${hour > 12 ? 'p.m.' : 'a.m.'}`;
}
