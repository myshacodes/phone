// IIFE
//Immediatly Invoked Function Expression

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
      'url("https://source.unsplash.com/300x500/?ice-cream")');
    clock.className = "clockunlock";
    document.getElementById("apps").style.display = "flex";
    appColor();
    document.getElementById("appHome").style.display = "none";
  }
  function lock() {
    var clock = document.getElementById("clock");
    var homeScreen = (document.getElementById("screen").style.background =
      'url("https://source.unsplash.com/300x500/?galaxy")');
    clock.className = "clocklock";
    document.getElementById("apps").style.display = "none";
    document.getElementById("appHome").style.display = "none";
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
    let title;
    let message;
    switch (appName) {
      case "twitter":
        title = "Welcome to Twitter";
        message = "Post a tweet!";
        break;
      case "facebook":
        title = "Welcome to Facebook";
        message = "Wanna make social friends?";
        break;
      case "whatsapp":
        title = "Welcome to Whatsapp";
        message = "No one is online right now";
      case "Github":
        title = "Welcome to Github";
        message = "Create a new repository or commit updates!";
        break;
    }

    // 1. hide apps div
    document.getElementById("apps").style.display = "none";
    // 2. change background screen
    document.getElementById("screen").style.background = "mediumpurple";
    // 3. display title and message
    let appHome = document.getElementById("appHome");
    appHome.style.display = "block";
    appHome.querySelector("h1").innerHTML = title;
    appHome.querySelector("p").innerHTML = message;
  }

  //Closing of IIFE
})();
