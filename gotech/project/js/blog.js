
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

$(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    if(currentPosition >= screenHeight-100){
        $(".header").addClass("site-nav-scroll");
    }else{
        $(".header").removeClass("site-nav-scroll");
        setActive('blog');
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
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    breakpoints: {
        0:{
          slidesPerView: 1
        },
        768:{
            grid: {
                rows: 2,
            },
            slidesPerView:2
        },
        991:{
            grid: {
                rows: 2,
            },
            slidesPerView:3
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});