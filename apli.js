$(window).on("load",function(){
    $(".loader-container").fadeOut(1000);
});

$(document).ready(function() {
    $("#myHeading").fadeIn(3000);
    $(".links").each(function(index) {
        $(this).delay(500 * index).fadeIn(1000);
      });

    $("button").click(function(){
        $("div.d1").toggle(1000);
      });

//  info area

$("#intro-show").click(function() {
    $(".intro").show(1000);
    $(".intro-img").show(1000);
});

$("#intro-hide").click(function() {
    $(".intro").hide(1000);
    $(".intro-img").hide(1000);
});

//  hobbies area

$("#hobbies-show").click(function() {
    $(".hobbies").show(1000);
    $(".hobbies-img").show(1000);
});

$("#hobbies-hide").click(function() {
    $(".hobbies").hide(1000);
    $(".hobbies-img").hide(1000);
});

//  fav area

$("#fav-show").click(function() {
    $(".fav").show(1000);
    $(".fav-img").show(1000);
});

$("#fav-hide").click(function() {
    $(".fav").hide(1000);
    $(".fav-img").hide(1000);
});

  });



