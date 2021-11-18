import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../scss/main.scss';

gsap.registerPlugin(ScrollTrigger);
const container = document.querySelector('.container');

gsap.to('.b', {
    y: container.clientHeight - 600,
    rotateX: 360,
    scrollTrigger: {
        tigger: '.b',
        start: '200px top',
        end: "+=800 100px",
        scrub: 0.5, // as second
        // markers: { startColor: "salmon", endColor: "red", fontSize: "18px" }
    }
})


gsap.to('.d', {
    y: 600,
    x: 200,
    rotateY: 360,
    rotation: 360,
    scrollTrigger: {
        trigger: '.d',
        start: 'top 400px',
        scrub: 1,
    }
})

gsap.to('.f', {
    y: 600,
    scrollTrigger: {
        trigger: '.f',
        start: 'top top',
        end: '+=400 top',
        scrub: 1,
        // markers: { startColor: "salmon", endColor: "red", fontSize: "18px" }
    }
})
