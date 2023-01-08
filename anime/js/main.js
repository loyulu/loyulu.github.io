var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  pause: "hover",
});
$(".logIn").click(function () {
  $("#logIn").show();
  $(".backdrop").show();
});
$(".logIn_close").click(function () {
  $("#logIn").hide();
  $(".backdrop").hide();
});
