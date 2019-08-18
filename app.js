// IIFE

(function() {
  var colors = [
    "mediumseagreen",
    "lightcoral",
    "dodgerblue",
    "gold",
    "lightsalmon"
  ];
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
      'url("https://source.unsplash.com/300x500/?flower")');
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
    var apps = document.getElementById("apps");
    for (let i = 0; i < apps.children.length; i++) {
      let app = apps.children[i];
      app.style.backgroundColor = colors[i % colors.length];
      app.addEventListener("click", appHandler);
    }
  }

  function appHandler() {
    console.log(this.id);
    let appName = this.id;

    if (appName === "twitter") {
      console.log("Welcome to Twitter");
      console.log("Post a tweet!");
    } else if (appName === "facebook") {
      console.log("Welcome to Facebook");
      console.log("Wanna make social friends?");
    } else if (appName === "github") {
      console.log("Welcome to Github");
      console.log("Create a new repository or commit updates!");
    } else if (appName === "email") {
      console.log("Welcome to Email");
      console.log("Someone sent you an email");
    }

    // switch()
  }

  // var ra = ["a", "b", "c", "d", "e", "f", "g", "h"];
  console.log(randomize(colors));

  function randomize(arr = []) {
    if (arr.length == 0) return null;
    let random = arr[Math.floor(Math.random() * arr.length)];
    return random;
  }
})();
