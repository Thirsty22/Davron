
let form = document.querySelector('.contact__form-wrap');
let contactInfo = document.querySelector('.contacts__desc');

let menuBtn = document.querySelector('.home__menu');
let topLine = document.querySelector('.line-top');
let middleLine = document.querySelector('.line-middle');
let bottomLine = document.querySelector('.line-bottom');

let homeBtn = document.querySelector('.home-button');
let aboutBtn = document.querySelector('.about-button');
let portfolioBtn = document.querySelector('.portfolio-button');
let contactBtn = document.querySelector('.contact-button');
let menuBg = document.querySelector('.menu__bg')

function menuClick() {
  menuBtn.classList.toggle('open');
  topLine.classList.toggle('top-anim');
  middleLine.classList.toggle('middle-anim');
  bottomLine.classList.toggle('bottom-anim');
  homeBtn.classList.toggle('home-btn-show')
  aboutBtn.classList.toggle('about-btn-show')
  portfolioBtn.classList.toggle('portfolio-btn-show')
  contactBtn.classList.toggle('contact-btn-show')
  menuBg.classList.toggle('menu-bg-show')
}

function moveForm() {
  form.classList.toggle('form-show')
  contactInfo.classList.toggle('contacts-desc-show')
}

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 0)+"px; left: "+(e.pageX - 0)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

new fullpage('#fullpage', {
  autoscrolling: true,
  controlArrows: false,
  anchors: ['section1', 'section2', 'section3', 'section4'],
  // responsiveHeight: 300,
  responsiveWidth: 300
})