const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
const image = document.querySelector(".image");

main.addEventListener("mousemove",(e)=>{
    // console.log("event",e.x)

    gsap.to(".main .cursor",{
        x:e.x,
        y:e.y,
        // backgroundColor:`#444${e.x}`,
    })
})

image.addEventListener("mouseenter",()=>{
    cursor.innerHTML="view more",
    gsap.to(cursor,{
        scale:2,
    })
})


image.addEventListener("mouseleave",()=>{
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1
    })
})


