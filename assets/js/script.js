$(document).ready(function(){
    $('.feedback-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        navText: ["<i class = 'fas fa-arrow-left'></i>", "<i class = 'fas fa-arrow-right'></i>"]
    });

    // stop animation on resize
    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    });

    $('.navbar-show-btn').click(function(){
        $('.navbar-box').addClass('navbar-box-show');
    });

    $('.navbar-hide-btn').click(function(){
        $('.navbar-box').removeClass("navbar-box-show");
    })
});

// ADD SHADOW HEADER 
const shadowHeader = () => {
    const header = document.getElementById('header')
    // when scroll is better than 50 viewport height , add the scroll-header tag to the header tag 
    this.scrollY >= 50? header.classList.add('shadow-header')
                     :  header.classList.remove('shadow-header')
}
window.addEventListener('scroll' , shadowHeader)

// HOME SWIPER SECTION 
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPreview: 'auto',
    centeredSlides: 'auto',

    autoplay:{
        delay: 3000,
        disableOnInteraction: false ,
    },

    breakpoints: {
        1220:{
            spaceBetween: -32,
        }
    }
  })

//   FEATURED SWIPER 
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPreview: 'auto',
    centeredSlides: 'auto',

    // autoplay:{
    //     delay: 3000,
    //     disableOnInteraction: false ,
    // },

    breakpoints: {
        1150:{
            slidesPreview: 4,
            centeredSlides: false , 
            
        }
    }
  })   