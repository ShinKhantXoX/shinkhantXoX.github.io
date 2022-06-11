
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
console.log(screenHeight);


$(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    // console.log(currentPosition);
    if(currentPosition >= screenHeight-100){
        $(".header").addClass("site-nav-scroll");
    }else{
        $(".header").removeClass("site-nav-scroll");
        setActive('lending');
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


//client btn
let clientImgs = ['img/client-1.png','img/client-2.png','img/client-3.png','img/client-4.png','img/client-5.png','img/client-6.png','img/client-7.png'];

let clientLeftBtn = document.querySelector('.client-left');
let clientRightBtn = document.querySelector('.client-right');
let displayClient = document.getElementById('display-client');

const firstImg = 0;
const lastImg = clientImgs.length-1;
let currentImg = 0;

clientLeftBtn.addEventListener('click',_ =>{
    currentImg--;
    if(currentImg <= firstImg) {
        currentImg = 0;
    }
    displayClient.src = clientImgs[currentImg];
    displayClient.style.width = '187'+'px';
    displayClient.style.height = '187'+'px';
})


clientRightBtn.addEventListener('click',_ =>{
    currentImg++;
    if(currentImg > lastImg) {
        currentImg = 0;
    }
    displayClient.src = clientImgs[currentImg];
    displayClient.style.width = '187'+'px';
    displayClient.style.height = '187'+'px';
});



