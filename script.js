 $(document).ready(function(){
    $(".button-collapse").sideNav();

    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

     $(".nav-menu a").click(function (e){
        e.preventDefault();
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top - 180
        }, 300);
    });
  });