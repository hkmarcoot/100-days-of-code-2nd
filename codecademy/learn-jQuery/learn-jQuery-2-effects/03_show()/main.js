$(document).ready(() => {
  $(".hide-button").on("click", () => {
    $(".first-image").hide();
  });

  $(".show-button").on("click", () => {
    $(".first-image").show();
  });
});
