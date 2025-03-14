$(document).ready(() => {
  $(".hide-button").on("click", () => {
    $(".first-image").hide();
  });

  $(".show-button").on("click", () => {
    $(".first-image").show();
  });

  $(".toggle-button").on("click", () => {
    $(".first-image").toggle();
  });

  $(".fade-out-button").on("click", () => {
    $(".fade-image").fadeOut(500);
  });

  $(".fade-in-button").on("click", () => {
    $(".fade-image").fadeIn(4000);
  });

  $(".fade-toggle-button").on("click", () => {
    $(".fade-image").fadeToggle("fast");
  });
});
