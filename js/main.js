// Var
var img = Array.from(document.querySelectorAll(".box img"));
var boxModel = document.getElementById("boxmodel");
var closeElemnt = document.getElementById("close");
var innerImg = document.querySelector(".boxmodel .innermodel");
var pervElement = document.getElementById("perv");
var nextElement = document.getElementById("next");
var currentEl = 0;

// ________________________________________________________________
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function (e) {
    boxModel.style.display = "flex";
    var imgSrc = e.target.getAttribute("src");
    innerImg.style.backgroundImage = `url(${imgSrc})`;
    currentEl = img.indexOf(e.target);
  });
}
nextElement.addEventListener("click", nextSlide);
function nextSlide() {
  currentEl++;
  if (currentEl == img.length) {
    currentEl = 0;
  }
  var imgSrc = img[currentEl].getAttribute("src");
  innerImg.style.backgroundImage = `url(${imgSrc})`;
}
pervElement.addEventListener("click", pervSlide);
function pervSlide() {
  currentEl--;
  if (currentEl < 0) {
    currentEl = img.length - 1;
  }
  var imgSrc = img[currentEl].getAttribute("src");
  innerImg.style.backgroundImage = `url(${imgSrc})`;
}
closeElemnt.addEventListener("click", closeitem);
function closeitem() {
  boxModel.style.display = "none";
}
document.addEventListener("keyup", function (e) {
  if (e.code == "ArrowRight") {
    nextSlide();
  } else if (e.code == "ArrowLeft") {
    pervSlide();
  } else if (e.code == "Escape") {
    closeitem();
  }
});
document.addEventListener("click", function(e) {
  if(e.target.getAttribute("id") == "boxmodel") {
    closeitem()
  }
})