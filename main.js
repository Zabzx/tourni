//Animations
//Hero Animation
const tl = gsap.timeline({defaults: {duration: 1, ease: "elastic.out"}});

tl.fromTo('[data-main-hero]', {opacity: 0, y: -50}, {opacity: 1, y: 0});
tl.fromTo('[data-sub-hero]', {opacity: 0, x: -100}, {opacity: 1, x: 0}, '<');