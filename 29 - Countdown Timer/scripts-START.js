function timer(seconds) {
  setInterval(function() {
    seconds--;
  }, 1000);
}
// above code is faulty because for some reason setInterval will stop running when it supposed to never stop