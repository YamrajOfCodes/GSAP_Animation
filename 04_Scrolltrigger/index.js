

gsap.to(".page1 .box",{
    x:900,
    rotate:360,
    duration:3
})

gsap.to(".page2 .box",{
    x:900,
    rotate:360,
    duration:3,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:3                                      // scrub he scroll var depend aste like jas scroll karatat tas animation complete hote 
                                                        // you can give boolean value to scrub like true or any number between 1 to 5 represents smoothness scroll
    }
})

gsap.to(".page3 .box",{
    x:900,
    rotate:360,
    duration:3
})












// scrolltrigger


gsap.to(".pager2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:".pager2",
        end:"top -400%",
        scroller:"body",
        scrub:2,
        pin:true                                                                       // Pin property until and unless animation is completed then you can go next 
                                                                                       // when you use pin property you have to mentioned into trigger is parent means i want to animate on h1 but in trigger i mentioned  .pager2 because h1's parent is .pager2 
    }
})









              // propetry we Learned Today          

            //   scrollTrigger  
            //   scroller
            //   trigger 
            //   scrub
            //   pin
            //   markers== start and end  