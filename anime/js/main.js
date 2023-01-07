var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  pause: "hover",
});
$(".logIn").click(function () {
  $("#logIn").show();
});
