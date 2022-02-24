//Animations
gsap.registerPlugin(ScrollTrigger)
//Hero Animation
const tl = gsap.timeline({defaults: {duration: 3, ease: "back.out"}});

tl.fromTo('[data-main-hero]', {opacity: 0, y: -50}, {opacity: 1, y: 0});
tl.fromTo('[data-sub-hero]', {opacity: 0, x: -100}, {opacity: 1, x: 0}, '<');

//Divider Animations




const ctl = gsap.timeline({defaults: {duration: 1, ease: "back.out"}, scrollTrigger: {
    trigger: '.community-text',
    toggleActions: 'restart none none none'
}})

ctl.fromTo('.community-text', {opacity: 0, x: -200}, {opacity: 1, x: 0})
ctl.fromTo('.community-icon', {opacity: 0, y: -200}, {opacity: 1, y: 0}, '<')

const etl = gsap.timeline({defaults: {duration: 1, ease: "back.out"}, scrollTrigger: {
    trigger: '.events',
    toggleActions: 'restart none none none'
}});

etl.fromTo('.e-icon', {opacity: 0, x: 200}, {opacity: 1, x: 0});
etl.fromTo('.e-text', {opacity: 0, y: -200}, {opacity: 1, y: 0});

const gtl = gsap.timeline({defaults: {duration: 1, ease: "back.out"}, scrollTrigger: {
    trigger: '.giveaways',
    toggleActions: 'restart none none none'
}});

gtl.fromTo('.g-text', {opacity: 0, x: -200, duration: 0.25}, {opacity: 1, x: 0});
gtl.fromTo('.g-icon', {opacity: 0, y: -200,}, {opacity: 1, y: 0});

//NavBar Menu
const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.nav-links');
const body = document.querySelector('body');
const html = document.querySelector('html');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav-active');
    body.classList.toggle('body-noscroll')
    html.classList.toggle('body-noscroll')
})