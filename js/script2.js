import LocomotiveScroll from 'locomotive-scroll';


const scroll = new LocomotiveScroll({
    el: document.querySelector('#mainbody'),
    smooth: true
});

gsap.from(".anim1",{
    y:99,
    stagger: 0.2,
    opacity:0,  
    ease: Power4,
    duration:2
})

Shery.imageEffect("#imageanim img",{
    style: 3,
    debug: true
})

