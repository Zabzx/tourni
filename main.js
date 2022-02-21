//Animations
gsap.registerPlugin(ScrollTrigger)
//Hero Animation
const tl = gsap.timeline({defaults: {duration: 3, ease: "back.out"}});

tl.fromTo('[data-main-hero]', {opacity: 0, y: -50}, {opacity: 1, y: 0});
tl.fromTo('[data-sub-hero]', {opacity: 0, x: -100}, {opacity: 1, x: 0}, '<');

//Divider Animations
const dtl = gsap.timeline({defaults: {duration: 1, ease: "back.out"}, scrollTrigger: {
    trigger: ".community-text",
    toggleActions: 'restart none none none'
}});

dtl.fromTo('.community-text', {opacity: 0, x: -200}, {opacity: 1, x: 0});
dtl.fromTo('.community-icon', {opacity: 0, y: -200}, {opacity: 1, y: 0}, '<')
dtl.fromTo('.e-icon', {opacity: 0, x: 200}, {opacity: 1, x: 0})
dtl.fromTo('.e-text', {opacity: 0, y: -200}, {opacity: 1, y: 0}, '<')
dtl.fromTo('.g-text', {opacity: 0, x: -200}, {opacity: 1, x: 0});
dtl.fromTo('.g-icon', {opacity: 0, y: -200}, {opacity: 1, y: 0})