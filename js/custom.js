/*
   Date : Nov 3rd 2019
   Author : Amine Aoudjehane
   Description : ZucoraHome web page test.
*/


//add smooth scrolling
$(document).ready(function() {
    'use strict';
    $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });   
});

/* active menu item on click */
$(document).ready(function() {
    'use strict';
    $('.navbar-nav li a').click(function(){
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});

//Responsive Lighbox
$(document).ready(function() {
    $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    image: {
      cursor: null,
      titleSrc: 'title'
    },
    gallery: {
      enabled: true,
      preload: [0,1], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
		}
  });
    
});

// Add animation/ Initialize Woo
$(document).ready(function() {
    'use strict';
    new WOW().init();
});


// showing the scroll up button after scrolling down 70% of the page 
$(document).ready(function(){
    'use strict';
     if($(window).scrollTop() < 60 ) {
            $('.scroll-top').css ({
                'opacity': '0'
            });
        } else {
            $('.scroll-top').css ({
                'opacity': '1'   
            });
        }
    $(window).scroll(function() {
        'use strict';
        if($(window).scrollTop() < 60 ) {
            $('.scroll-top').css ({
                'opacity': '0'
            });
        } else {
            $('.scroll-top').css ({
                'opacity': '1'   
            });
        }
    });
});

// fix the menu problem to override bootstrap, the default height is not good, fixing it distroy the mobileview
$(document).ready(function(){
    var alterClass = function() {
        var windowWidth = document.body.clientWidth;
        if (windowWidth < 992){
            $('#menuid').removeClass('menu');
            }
        else{
            $('#menuid').addClass('menu');
        }
        $(window).resize(function(){
           alterClass(); 
        });
    }
    //Fire it when the page first loads:
  alterClass();
 });   
























