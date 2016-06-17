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

  // /* ADDING CLASS WHEN RESIZE WINDOW */
  // var $window = $(window);
  // var $sectionHeader = $("#first-section .box-container .additional-box h3");
  // var $sectionParagraph = $("#first-section .box-container .additional-box p");
  //
  // $window.resize(function (){
  //   if ($window.width() <= 779) {
  //     $sectionHeader.addClass("col-8");
  //     $sectionParagraph.addClass("col-8");
  //   }
  // });
});
