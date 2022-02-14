// Slick slide 효과 slick 사이트에서 코드

$(".slides").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});

// Parallax Animation 효과 Parallax 사이트에서 코드
$(".banner.item_01").parallax({
  imageSrc: "https://deok222.github.io/new_tour/images/slide_02.jpg",
});
$(".banner.item_02").parallax({
  imageSrc: "https://deok222.github.io/new_tour/images/slide_03.jpg",
});

// Animation 효과 ScrollReveal 사이트에서 코드
ScrollReveal().reveal(".left_ani", {
  origin: "left",
  duration: 1000,
  distance: "250px",
  delay: 300,
});

ScrollReveal().reveal(".right_ani", {
  origin: "right",
  duration: 1000,
  distance: "250px",
  delay: 500,
});

ScrollReveal().reveal(".top_ani", {
  origin: "top",
  duration: 1000,
  distance: "250px",
  delay: 500,
});

ScrollReveal().reveal(".bottom_ani", {
  origin: "bottom",
  duration: 1000,
  distance: "250px",
  delay: 500,
});

// top 버튼
$(".go_top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});
