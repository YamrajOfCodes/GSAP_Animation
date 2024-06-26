          

                                            // Using timeline we brought all the elements of the webpage into single line 
                                            // Using timeline we don't need to calculate delat for every element saperately


var tl= gsap.timeline();

tl.to(".box1",{
    x:1200,
    duration:2,
    repeat:-1,
    yoyo:true
})


tl.to(".box2",{
    x:1200,
    duration:2,
    repeat:-1,
    yoyo:true
})

tl.to(".box3",{
    x:1200,
    duration:2,
    repeat:-1,
    yoyo:true
})