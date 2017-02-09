$(document).ready(function() {

  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#cat").children("li").first().click(function() {
      $("li").html('<img src="img/cat.jpg"/>');
     $("#cat li img").click(function() {
      $("li").remove();
      });
    });
  });

  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#dog").children("li").first().click(function() {
      $("li").html('<img src="img/dog.png">');
    $("#dog li img").click(function() {
     $("li").remove();
     });
    });
  });
});
