$(document).ready(function(){

/* CURRENT WINDOW SIZE */
  $(window).resize(function () {
    var width = $(window).width();
    var height = $(window).height();
    var documentWidth = $(document).width();
    var documentHeight = $(document).height();
    console.log(width);
    // console.log(height);
  });

/* HAMBURGER MENU */
  var $hamburger = $("#hamburger-menu");
  var $menu = $(".navigation ul");

  $hamburger.on("click", function (){
    if($menu.css("display") == "none") {
      $menu.css("display", "block");
      $hamburger.css("background-color", "white");
    } else {
      $menu.css("display", "none");
      $hamburger.css("background-color", "transparent");
    }
  });

});
