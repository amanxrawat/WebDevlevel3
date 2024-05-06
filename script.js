function homePageAnimation(){
    gsap.set(".slidesm",{scale:4})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:3,
    }

})

tl.to(".videodiv",{
    '--clip': "0%",
    ease:Power2
},'a')
.to(".slidesm",{
    scale:1,
    ease:Power2
},'a')
.to(".lft",{
    xPercent: -10,
    stagger:.03,
    ease:Power4
},'b')
.to(".rgt",{
    xPercent: 20,
    stagger:.03,
    ease:Power4
},'b')

}

function realPageAnimation(){

    
    gsap.to(".real",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:2
        },
        
        xPercent:-315,
        ease:Power4
    })
}

document.querySelectorAll(".liselem")
.forEach(function(el){
    el.addEventListener("mousemove", function(dets){
        gsap.to(this.querySelector(".teamimage"),{ 
            opacity:1,
            x: gsap.utils.mapRange(0, window.innerWidth,-200, 200 , dets.clientX),
            // y: gsap.utils.mapRange(0, window.innerWidth,-200, 200 , dets.clientX),
            ease:Power2,
            duration:.5,

        })
    })

    el.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelector(".teamimage"),{
            opacity:0,
            ease:Power2,
            duration:.5
        })
    })
})

document.querySelectorAll(".liselem")
.forEach(function(el){
    el.addEventListener("mouseenter",function(){
        gsap.to(this.querySelector(".bluelayer"),{
            'height':"100%",
            duration:1,
            ease:Power4
        })
        gsap.to(this.querySelector("*"),{
            'color':"white",
            duration:.5,
            ease:Power4
        })
    })


    el.addEventListener("mouseleave",function(){
        gsap.to(this.querySelector(".bluelayer"),{
            'height':"0%",
            duration:1,
            ease:Power4
        })
        gsap.to(this.querySelector("*"),{
            'color':"rgb(21, 56, 56)",
            duration:.5,
            ease:Power4
        })
    })
})

function textpara(){

    var clutter = "";
    document.querySelector(".textPara").textContent.split("")
    .forEach(function(e){
        if(e === " ")clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".textPara").innerHTML = clutter;
    
    
    gsap.set(".textPara span",{opacity:0.1});
    
    gsap.to(".textPara span",{
        scrollTrigger:{
            trigger:".para",
            start:"top 60%",
            end:"bottom 90%",
            scrub:2
        },
        opacity :1,
        stagger: .03,
        ease:Power4
    });
}

function loco(){

    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleAni(){
    
    gsap.to(".cap2",{
        scrollTrigger:{
            trigger:".right",
            start:"top 30%",
            end:"bottom bottom",
            scrub:1
        },
        y:-10,
        ease:Power4
    });
    gsap.to(".cap1",{
        scrollTrigger:{
            trigger:".right",
            start:"top 30%",
            end:"bottom bottom",
            scrub:1
        },
        y:90,
        ease:Power4
    });
}

function themeColor(){

    document.querySelectorAll(".section")
    .forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start : "top 50%",
            end:"bottom 60%",
            // markers:true,
            onEnter: function(){
                document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color) ; 
            }
        })
    });
}

// gsap.to(".craftright",{
//     scale:.5
// })
// gsap.to(".craftright",{
//     scale:1,
//     duration:5,
//     ease:Power4,

    
// });
function craftAni(){

    gsap.set(".cRcontent",{
        opacity:0,
        scale:.5,
    })
    
    gsap.to(".cRcontent",{
        yPercent: "-120",
        scrollTrigger:{
            trigger:".craft",
            start:"top 20%",
            end:"bottom bottom",
            scrub:2
        },
        ease:Power4,
        
    })
    gsap.to(".cRcontent",{
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:".craft",
            start:"top 20%",
            end:"bottom bottom",
            scrub:2
        },
        ease:Power4,
    })
}



loco();
homePageAnimation();
realPageAnimation();
textpara();
capsuleAni();
themeColor();
craftAni();





