gsap.registerPlugin(ScrollTrigger);

gsap.to('.square', {
    duration: 1,
    // x: '700px',
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        end: () => `+=${document.querySelector(".square").offsetHeight}`,
        markers: true,
            toggleClass: "red"
    }
})