$(document).ready(function () {
  animateDiv(".a");
});

function makeNewPosition() {
  // wait 5 seconds
  setTimeout(function () {
    document.getElementById("pingu-img").src =
      "./assets/stationary-transparent.png";
    setTimeout(function () {
      document.getElementById("pingu-img").src =
        "./assets/walking-transparent.gif";
    }, 2000);
  }, 8000);

  // document.getElementById("pingu-img").src = "./assets/walking-transparent.gif";

  // document.getElementById("pingu-img").src = "./assets/walking-transparent.gif";

  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv(myclass) {
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 10000, function () {
    animateDiv(myclass);
  });
}
