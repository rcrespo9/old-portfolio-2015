jQuery(document).ready(function ($) {
    
    // stellar.js 

    //initialise Stellar.js
    $(window).stellar({
        responsive: true,
        horizontalScrolling: false,
        parallaxBackgrounds: false
    });

    //Cache some variables
    var links = $('.navigation').find('li');
    slide_link = $('.slide-link');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1100, 'easeInOutQuint');
    }


    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });

    slide_link.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
    
    // activating all links
    $('#slide2 .closer-look,  #slide2 #github-button, #slide4 .social-link').on('click', function(){
        var href = $(this).attr('href');
        window.open(href, '_blank');
    });
});

// circular content carousel
$('#ca-container').contentcarousel({
    sliderSpeed: 800,
    itemSpeed: 800
});


// fadein navbar
$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.navbar').fadeIn(800);
    } else {
        $('.navbar').fadeOut();
    }
});

$('.navbar').hide();