// IIFE

(function() {
  var screen = document.getElementById("button");
  var lockScreen = document.getElementById("sidebutton");
  screen.addEventListener("click", unlock);
  lockScreen.addEventListener("click", lock);

  function timer() {
    var clock = document.getElementById("clock");

    var time = new Date();
    var hh = time.getHours();
    var mm = time.getMinutes();

    hh = addZeroToTime(hh);
    mm = addZeroToTime(mm);

    clock.innerHTML = hh + ":" + mm;

    var t = setTimeout(timer, 1000);
  }

  function addZeroToTime(i) {
    if (i < 10) {
      return "0" + i;
    } else {
      return i;
    }
  }

  timer();

  function unlock() {
    var clock = document.getElementById("clock");
    var homeScreen = (document.getElementById("screen").style.background =
      'url("https://source.unsplash.com/300x500/?ice-cream")');
    clock.className = "clockunlock";
    document.getElementById("apps").style.display = "flex";
    appColor();
  }
  function lock() {
    var clock = document.getElementById("clock");
    var homeScreen = (document.getElementById("screen").style.background =
      'url("https://source.unsplash.com/300x500/?galaxy")');
    clock.className = "clocklock";
    document.getElementById("apps").style.display = "none";
  }
  function appColor() {
    var colors = [
      "forestgreen",
      "lightcoral",
      "dodgerblue",
      "gold",
      "peachpuff"
    ];
    var apps = document.getElementById("apps");
    for (let i = 0; i < apps.children.length; i++) {
      let app = apps.children[i];
      app.style.backgroundColor = colors[i % colors.length];
    }
  }
})();
