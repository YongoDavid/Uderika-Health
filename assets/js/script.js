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


//   FEATURED/ BOOK SWIPER 
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPreview: 'auto',
    centeredSlides: 'auto',

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        1150:{
            slidesPreview: 4,
            centeredSlides: false , 

        }
    }
  })   

// NEW SWIPER / BOOKS SWIPER 
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPreview: 'auto',

    breakpoints: {
        1150:{
            slidesPreview: 3,
        }
    }
  })  

// SHOW SCROLL UP  
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is above 350 vph add scroll 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/* SCROLL SECTIONS ACTIVE LINKS  */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop -58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll' , scroll)