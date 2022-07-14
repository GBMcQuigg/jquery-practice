$(function () {
  console.log("Lets get ready to party with JQuery");
});

$("article img").addClass("image-center");

$("article p:last-child").remove();

// $("#title").css("font-size", Math.random() * 100);

$("ol").append($("<li>", { text: "New List Item" }));

$("aside")
  .empty()
  .append($("<p>", { text: "Sorry for the list." }));

$("body").css("background-color", "input").val();

$(".form-control").on("keyup blur change", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();
  $("body").css(
    "background-color",
    "rgb(" + red + ", " + green + "," + blue + ")"
  );
});

$("img").on("click", function (e) {
  $(e.target).remove();
});
