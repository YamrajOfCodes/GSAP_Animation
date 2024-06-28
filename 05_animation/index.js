const string=document.querySelector(".strings");
let initial="M 1000 100 Q 700 100 200 100"


string.addEventListener("mousemove",(e)=>{
    path=`M 1000 100 Q ${e.x} ${e.y} 200 100`;

    gsap.to("svg path",{
        attr:{
            d:path
        }
    })
})

string.addEventListener("mouseleave",(e)=>{
    path=`M 1000 100 Q 700 100 200 100`;

    gsap.to("svg path",{
        attr:{
            d:path
        },
        duration:1.5,
      ease: "elastic.out(1,0.3)"
        })
})







              // 6 values of making an svg first X second Y third is what you want to make Q or C and 4th is again X and 5th is Y  6th X and Y again
      // gsap madhe jar konacha attribute change karayacha asel tar attr{ which attribute you want to change:value }
        // gsap ease animiation checkout gsap ease