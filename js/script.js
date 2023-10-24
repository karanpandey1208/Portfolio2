function firstPageAnim(){
    var tl= gsap.timeline();
    tl.from("#nav",{
        y:'-200',
        opacity:0,  
        delay: -0.25,
        duration:2,
        ease: Expo.easeInOut
    })
        .to(".boundingelem",{
            y:0,
            ease: Expo.easeInOut,
            duration: 2,
            delay:-1.9,
            stagger: .7
        })
}
firstPageAnim();

