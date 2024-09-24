

var nav = gsap.timeline()
nav.from("h2",{
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})


nav.from("h4",{
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3
})

nav.from("h5",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.3,
})

gsap.to("#page2 h1",{
    transform: "translateX(-150%)",
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: " -60%",
        scrub:2,
        pin:true
        
    }
})
gsap.from("#box1",{
    x :1300,
    // y :500,
    duration:2,
    delay:1,
    rotate:180,
    backgroundColor: "blue",
    borderRadius: "50%",
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: " top 30%",
        scrub:2,
        // pin:true
    }
    

})

gsap.to("#box2",{
    x :1300,
    // y :500,
    duration:2,
    delay:1,
    rotate:180,
    backgroundColor: "blue",
    borderRadius: "50%",
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: " top 30%",
        scrub:1,
        // pin:true
    }})