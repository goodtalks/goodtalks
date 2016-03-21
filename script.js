 $(document).ready(function(){
    var navbarHeight = 64;
    var $imageContainer = $('.image-container');

    function fillHeaderImage(nav, $img){
      var imgHeight = $(window).height() - nav;
      $img.css('height', imgHeight+'px');
    }
    fillHeaderImage(navbarHeight, $imageContainer);
    $(window).resize(fillHeaderImage(navbarHeight, $imageContainer));

    $(".button-collapse").sideNav();
    $('.parallax').parallax();
  });