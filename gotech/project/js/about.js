//mobile nav
const hamburger = document.querySelector('.hamburger');
const overLayMenu = document.querySelector('.overlaymenu');

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle('active');
    overLayMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-li').forEach(n => n.addEventListener('click',()=>{
    hamburger.classList.remove('active');
    overLayMenu.classList.remove('active');
}));

//window with scroll
let screenHeight = $(window).height();
// console.log(screenHeight);


$(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    // console.log(currentPosition);
    if(currentPosition >= screenHeight-100){
        $(".header").addClass("site-nav-scroll");
    }else{
        $(".header").removeClass("site-nav-scroll");
        setActive('about');
    }
});

//wow js
new WOW().init();

//way_point
function setActive(current) {

    $(".nav-item").removeClass("current-section");

    $(`.nav-item[current='#${current}']`).addClass('current-section');

}


function navScroll() {

    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {

        if(direction == "down"){
            let currentSectionId = $(this.element).attr('id');
            // console.log(currentSectionId);
            setActive(currentSectionId);
        }

    },{ offset: "100px"});

    currentSection.waypoint(function (direction) {

        if(direction == "up"){
            let currentSectionId = $(this.element).attr('id');
            // console.log(currentSectionId);
            setActive(currentSectionId);
        }

    },{ offset: "100px"});

}

navScroll();

//swiper js
var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop:true,
    pagination: {
        el: '.swiper-pagination',
    },
});