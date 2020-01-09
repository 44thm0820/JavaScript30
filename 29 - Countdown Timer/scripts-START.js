

/* function timer(seconds) {
  setInterval(function() {
    seconds--;
  }, 1000);
}
// above code is faulty because for some reason setInterval will stop running when it supposed to never stop */

let countdown; // we have placed it in the global name space, but alternatively we could have placed this variable instead in an iife
function timer(seconds) {
  //to figure out when timer started, write below
  const now = Date.now();  //old equivalent way was (new Date()).getTime();
  const then = now + seconds * 1000; //multiplied by 1000 because now is in milliseconds
  // console.log({now, then});
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000); //converting to seconds from milliseconds
    // check if we should stop it! - in order to stop it we need to store countdown in a separate global variable
    if(secondsLeft < 0) { // correction - to display correctly it is < 0 not <= 0
      clearInterval(countdown);
      return;
    }
    // display it
    console.log(secondsLeft);
  }, 1000)
}

//next thing we have to do is to display every second the amount of time left

