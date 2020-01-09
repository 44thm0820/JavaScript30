/* function timer(seconds) {
  setInterval(function() {
    seconds--;
  }, 1000);
}
// above code is faulty because for some reason setInterval will stop running when it supposed to never stop */
function timer(seconds) {
  //to figure out when timer started, write below
  const now = Date.now();  //old equivalent way was (new Date()).getTime();
  const then = now + seconds * 1000; //multiplied by 1000 because now is in milliseconds
  // console.log({now, then});
  setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000); //converting to seconds from milliseconds
    console.log(secondsLeft);
  }, 1000)
}

//next thing we have to do is to display every second the amount of time left

