$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('.circle').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
$('.menu-toggle').on('click', function(e) {
        $(this).toggleClass('active');
        $(this).next().slideToggle();

    });


$('.navTrigger').click(function(){
  $(this).toggleClass('active');
});

 var $window = $(window), previousScrollTop = 0, scrollLock = false;
$window.scroll(function(event) {
    if(scrollLock) {
        $window.scrollTop(previousScrollTop);
    }
 previousScrollTop = $window.scrollTop();
});

$('.navbar-toggle.collapsed').click(function() {
      /*  scrollLock = true; */
     var a= $('#hambernav').attr("aria-expanded");
 if(a=="false"){
      $('.navbar-brand').html('<img src="images/white-logo.svg">');
      $('#header').addClass('headerbg');
      $('.icon-bar').addClass('fff');
   $('html').css({'overflow':'hidden'});
 }
 else{

 setTimeout(function()
  {
   $('#header').removeClass('headerbg');
     $('.navbar-brand').html('<img src="images/logo.svg">');
  }, 320);
     $('.icon-bar').removeClass('fff');
    /*  scrollLock = false; */
     /*  $('#bs-example-navbar-collapse-1').slideUp();   */
 $('html').css({'overflow':'visible'});
 }
 });
/*  $('.navbar-toggle.fixed').click(function() {
       scrollLock = false;
       $('#hambernav').removeClass("fixed");
       alert('s');
 }); */

      AOS.init({easing: 'ease-in-out-sine'});
 var header = new Headroom(document.querySelector("#header"), {
            tolerance: 5,
            offset: 205,
            classes: {
                initial: "animated",
                pinned: "slideDown",
                unpinned: "slideUp"
            }
        });
        header.init();
    /*         $(".carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: false,
        responsiveClass: true,
    }); */

var bannerCarousel =    $("#banner_carousel")
  bannerCarousel.owlCarousel({
        items: 1,
        loop: false,
        autoplay: true,
        nav: false,
        margin: 0,
        merge: true,
        navigation: false,
        navigationText: false,
        responsiveClass: true,
        mouseDrag: false,
        touchDrag: false,
        fluidSpeed: true,
        smartSpeed: 350,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
		 slideSpeed : 3000,
		/*  autoplayTimeout: 1000, */
        responsive: {
            0: {
                items: 1,
                mergeFit: true,
                nav: true
            },
            600: {
                items: 1,
                margin: 0,
                mergeFit: true,
                nav: false
            },
            1024: {
                items: 1,
                mergeFit: true,
                nav: false
            },
            1200: {
                items: 1,
                nav: true,
                mergeFit: true,
                loop: true
            }
        }
    });

	
    function checkText(pos){
        $('.bannertext').find('.bannerbg').css({opacity: 0, zIndex: 2});
        var slideContent = $('.bannertext').find(`[data-index*="${pos}"]`);
        slideContent.css({opacity: 1, zIndex: 3});
    }

    bannerCarousel.on('changed.owl.carousel', function (e) {
        setTimeout(function()
        {
            var activeId = bannerCarousel.find(".owl-item.active .item").attr("id");
            console.log('activeId  ', activeId);
            checkText(activeId);
        }, 0);
    });

        var carousel_height= $("#banner_carousel img").height();
        $(".bannerbg").css({'height':carousel_height});

         setInterval(function(){
            var carousel_height= $("#banner_carousel img").height();
             $(".bannerbg").height(carousel_height);
			 var parent_height= carousel_height+20;
             $(".bannertext").css({'min-height':parent_height});
        }, 50);

});



