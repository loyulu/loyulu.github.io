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
$(".more_btn_1").click(function () {
  $(".new_more").slideToggle();
});
$(".more_btn_2").click(function () {
  $(".again_more").slideToggle();
});
$(".enter").click(function () {
  var inputVal = $('input[name="memberName"]').val();
  var inputVal2 = $('input[name="pass"]').val();
  console.log(inputVal, inputVal2);
  if (inputVal2 !== "456") {
    alert("密碼錯誤");
  }
});
