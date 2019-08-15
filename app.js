// IIFE
// Immediately Invoked Function Expression
//

(function() {
  function timer() {
    var clock = document.getElementById("clock");

    var time = new Date();
    var hh = time.getHours();
    var mm = time.getMinutes();

    var ss = time.getSeconds();
    mm = checkTime(mm);
    ss = checkTime(ss);

    clock.innerHTML = hh + ":" + mm + ":" + ss;
    var t = setTimeout(timer, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  timer();
})();
