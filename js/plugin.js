
$(document).ready(function () { //when document(DOM) loads completely
    checkScroll(); //check if page is scrolled
    $(window).scroll(checkScroll); //get scroll position of window
});

function checkScroll() { //check if page is scrolled
if ($(window).scrollTop() >= 300) { //if window is scrolled 300px or more
    $('.navbar').addClass('solid'); //add class 'solid' to element with class 'navbar'
} else { //if page is not scrolled 300px from top
    $('.navbar').removeClass('solid'); //remove class 'solid' from navbar element
}
}


/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
$(document).ready(function () {
	checkScroll();
	$(window).scroll(checkScroll);
	$('.navbar-toggler').click(function () {
		if (!$('.navbar').hasClass('solid-toggle')) {
			if ($(window).scrollTop() <= 300) {
				$('.navbar').toggleClass('solid-toggle');
			}
		}
	});
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('.navbar-toggler').addClass('collapsed');
    $('#navbarResponsive').removeClass('show');

    setTimeout(function () {
        $('nav.navbar').removeClass('solid-toggle');
    }, 300);

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});


$(document).ready(function(){
    $('#team-carousel').owlCarousel({ 
        autoplay: true, 
        autoplayHoverPause: true, 
        loop: true, 
        autoplayTimeout: 8000, 
        smartSpeed: 1200, 
        dotsSpeed: 1000, 
        responsive : { 
            0 : {
                items: 1 
            },
            768 : {
                items: 2 
            },
            992 : {
                items: 3 
            }
        }
    });
  });

  $(document).ready(function(){ 
    $('#works-carousel').owlCarousel({ 
        autoplay: true, 
        autoplayHoverPause: true, 
        loop: true, 
        autoplayTimeout: 8000, 
        smartSpeed: 1200, 
        dotsSpeed: 1000, 
        responsive : { 
            0 : {
                items: 1 
                      },
            768 : {
                items: 2 
            },
            992 : {
                items: 3 
            }
        }
    });
  });

  

$(function () { 
    function onScrollInit(items, trigger) { 
        items.each(function () { 
            var osElement = $(this), 
                osAnimationClass = osElement.attr('data-animation'), 
                osAnimationDelay = osElement.attr('data-delay');
  
            osElement.css({ 
                '-webkit-animation-delay': osAnimationDelay, 
                '-moz-animation-delay': osAnimationDelay, 
                'animation-delay': osAnimationDelay 
            });
  
            var osTrigger = (trigger) ? trigger : osElement; 
  
            osTrigger.waypoint(function () { 
                osElement.addClass('animated').addClass(osAnimationClass); 
            }, {
                    triggerOnce: true,
                    offset: '70%'
                });
        });
    }
  
    onScrollInit($('.os-animation'));
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); 
  });