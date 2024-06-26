gsap.to(".box",{
    x:1000,                                    // x means left-to-right
    delay:2,                                   // delay means animatio starts after 2 seconds
    duration:2,                                 // after delay it will be take 2 seconds for complete
    rotate:360,
    borderRadius:"100%",
    // scale:20                                      // portfolio idea
})







// gsap.to   vs  gsap.from


/*  gsap moves element from initial destination to final destination ( initial is means your defalut position of element ) where gsap.from moves your 
    element from destination to source ( in the above example x:1000 is final destination ) in simpler words x:1000 to x:0 (default)   */ 


// from aapn je property lavtat te sodat yeto aani shevato origional position madhe yeto









// gsap.from(".box",{
//     y:450,
//     delay:1,
//     duration:2
// })




                                         // stagger

                    // ek hi naam ke logoko bari bari chalana ex= h1,li

    
    gsap.from("li",{
      y:-200,
      duration:2,
      stagger:1                  // -1 means
    })






                                     //  repeat property with yoyo



 gsap.to(".box",{
    x:1150,
    delay:1,
    duration:2,
    repeat:-1,                              // repeat 1 means ekda origional and ekda repeat means n+1    and -1 means infinity
    yoyo:true
})





