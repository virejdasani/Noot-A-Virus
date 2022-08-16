var pingus = 0;

$(document).ready(function () {
  setTimeout(function () {
    document.getElementById("start-vid").remove();
  }, 4000);
  setTimeout(function () {
    animateDiv(".a", "pingu-img1");
    pingus += 1;
  }, 4000);
});

function makeNewPosition() {
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 150;
  var w = $(window).width() - 150;

  var newHeight = Math.floor(Math.random() * h);
  var newWidth = Math.floor(Math.random() * w);

  // console.log(newHeight, newWidth);

  return [newHeight, newWidth];
}

function animateDiv(myclass, myid) {
  var newq = makeNewPosition($(myclass).offset().top, $(myclass).offset().left);

  let oldHeight = $(myclass).offset().top;
  let oldWidth = $(myclass).offset().left;

  let newHeight = newq[0];
  let newWidth = newq[1];

  // this logic determines the direction that pingu faces while walking on screen
  if (
    oldHeight < newHeight &&
    (oldWidth - 5 > newWidth || oldWidth + 4 > newWidth)
  ) {
    console.log(oldHeight, oldWidth);
    console.log(newHeight, newWidth);

    document.getElementById(myid).src = "./assets/transparent-noot.gif";
    var snd = new Audio("./assets/Noot-Noot.mp3");
    snd.play();
    setTimeout(function () {
      document.getElementById(myid).src = "./assets/transparent0.gif";
    }, 1000);
    if (pingus == 1) {
      setTimeout(function () {
        animateDiv(".b", "pingu-img2");
        pingus += 1;
      }, 1200);
    } else if (pingus == 2) {
      setTimeout(function () {
        animateDiv(".c", "pingu-img3");
        pingus += 1;
      }, 1200);
    } else if (pingus == 3) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".d", "pingu-img4");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 4) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".e", "pingu-img5");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 5) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".f", "pingu-img6");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 6) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".g", "pingu-img7");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 7) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".h", "pingu-img8");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 8) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".i", "pingu-img9");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 9) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".j", "pingu-img10");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 10) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".k", "pingu-img11");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 11) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".l", "pingu-img12");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 12) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".m", "pingu-img13");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 13) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".n", "pingu-img14");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 14) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".o", "pingu-img15");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 15) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".p", "pingu-img16");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 16) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".q", "pingu-img17");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 17) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".r", "pingu-img18");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 18) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".s", "pingu-img19");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 19) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".t", "pingu-img20");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 20) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".u", "pingu-img21");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 21) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".v", "pingu-img22");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 22) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".w", "pingu-img23");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 23) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".x", "pingu-img24");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 24) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".y", "pingu-img25");
          pingus += 1;
        }, 1200);
      }
    } else if (pingus == 25) {
      if (Math.random() < 0.5) {
        setTimeout(function () {
          animateDiv(".z", "pingu-img26");
          pingus += 1;
        }, 1200);
      }
    }
  } else if (oldHeight > newHeight && oldWidth > newWidth) {
    document.getElementById(myid).src = "./assets/transparent225.gif";
  } else if (oldHeight < newHeight && oldWidth > newWidth) {
    document.getElementById(myid).src = "./assets/transparent315.gif";
  } else if (
    oldHeight > newHeight &&
    (oldWidth - 4 > newWidth || oldWidth + 3 > newWidth)
  ) {
    document.getElementById(myid).src = "./assets/transparent180.gif";
  } else if (oldHeight < newHeight && oldWidth < newWidth) {
    document.getElementById(myid).src = "./assets/transparent45.gif";
  } else if (oldHeight > newHeight && oldWidth < newWidth) {
    document.getElementById(myid).src = "./assets/transparent135.gif";
  } else if (oldHeight == newHeight && oldWidth < newWidth) {
    document.getElementById(myid).src = "./assets/transparent90.gif";
  } else if (oldHeight == newHeight && oldWidth > newWidth) {
    document.getElementById(myid).src = "./assets/transparent270.gif";
  } else {
    document.getElementById(myid).src = "./assets/transparent0.gif";
  }

  $(myclass).animate(
    { top: newq[0], left: newq[1] },
    Math.floor(Math.random() * (14000 - 8000)) + 8000,
    function () {
      animateDiv(myclass, myid);
    }
  );
}
