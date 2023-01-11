var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  pause: "hover",
});
$(".logIn").click(function () {
  $("#logIn").show();
  $(".backdrop").show();
});
$(".logIn_mobile").click(function () {
  $("#logIn").show();
  $(".backdrop").show();
});
$(".logIn_close").click(function () {
  $("#logIn").hide();
  $(".backdrop").hide();
});

$(".more_btn_1").click(function () {
  $(".new_more").slideToggle();
});
$(".more_btn_2").click(function () {
  $(".again_more").slideToggle();
});
$(".enter").click(function () {
  var inputVal = $('input[name="pass"]').val();
  if (inputVal !== "123") {
    alert("密碼錯誤");
  } else {
    $("#logIn").hide();
    $(".backdrop").hide();
  }
});
$(".menu_btn").click(function () {
  $("#burger_menu").slideToggle();
});

$(".new_frame").click(function () {
  $(".movie_popup").show();
  $(".backdrop").show();
});
$(".logIn_close").click(function () {
  $(".movie_popup").hide();
  $(".backdrop").hide();
});
