var crsr = document.querySelector(".cursor");
var blurCrsr = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blurCrsr.style.left = dets.x-125 + "px";
    blurCrsr.style.top = dets.y-125 + "px";
});

gsap.to(".navBar", {
    backgroundColor: "#000",
    height: "100px",
    duration: 2,
    scrollTrigger: {
        trigger: ".navBar",
        scroller: "body",
        // markers: true,
        start: "top -15%",
        end: "top -20%",
        scrub: 1,
    },
});

gsap.to(".main", {
    backgroundColor: "#000",
    duration: 2,
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -30%",
        scrub: 2,
    },
});
