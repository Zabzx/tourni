//Link Animations
const tl = gsap.timeline({defaults: {duration: 1, ease: "back.out"}})
tl.fromTo('[data-main]', {opacity: 0, scale: 0}, {opacity: 1, scale: 1});
tl.fromTo('[data-header]', {opacity: 0, x: -30}, {opacity: 1, x: 0});
tl.fromTo('[data-text-and-links]', {opacity: 0, y: 30}, {opacity: 1, y: 0})