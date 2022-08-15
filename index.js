$(document).ready(function () {
  animateDiv(".a");
});

function makeNewPosition(oldH, oldW) {
  // wait 5 seconds
  // setTimeout(function () {
  //   document.getElementById("pingu-img").src = "./assets/transparent0.gif";
  //   setTimeout(function () {
  //     document.getElementById("pingu-img").src = "./assets/transparent45.gif";
  //   }, 2000);
  // }, 8000);

  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 150;
  var w = $(window).width() - 150;

  // var oldHeight = oldH;
  // var oldWidth = oldW;

  // console.log(oldHeight);
  // console.log(oldWidth);

  var newHeight = Math.floor(Math.random() * h);
  var newWidth = Math.floor(Math.random() * w);

  console.log(newHeight, newWidth);

  return [newHeight, newWidth];
}

function animateDiv(myclass) {
  var newq = makeNewPosition($(myclass).offset().top, $(myclass).offset().left);

  let oldHeight = $(myclass).offset().top;
  let oldWidth = $(myclass).offset().left;

  let newHeight = newq[0];
  let newWidth = newq[1];

  if (oldHeight < newHeight && oldWidth < newWidth) {
    document.getElementById("pingu-img").src = "./assets/transparent45.gif";
  } else if (oldHeight < newHeight && oldWidth > newWidth) {
    document.getElementById("pingu-img").src = "./assets/transparent315.gif";
  } else if (oldHeight > newHeight && oldWidth < newWidth) {
    document.getElementById("pingu-img").src = "./assets/transparent135.gif";
  } else if (oldHeight > newHeight && oldWidth > newWidth) {
    document.getElementById("pingu-img").src = "./assets/transparent225.gif";
  } else if (oldHeight < newHeight && oldWidth == newWidth) {
    document.getElementById("pingu-img").src = "./assets/transparent0.gif";
  } else if (oldHeight > newHeight && oldWidth == newWidth) {
    document.getElementById("pingu-img").src = "./assets/transparent180.gif";
  } else if (oldHeight == newHeight && oldWidth < newWidth) {
    document.getElementById("pingu-img").src = "./assets/transparent90.gif";
  } else if (oldHeight == newHeight && oldWidth > newWidth) {
    document.getElementById("pingu-img").src = "./assets/transparent270.gif";
  } else {
    document.getElementById("pingu-img").src = "./assets/transparent0.gif";
  }

  $(myclass).animate({ top: newq[0], left: newq[1] }, 10000, function () {
    animateDiv(myclass);
  });
}
