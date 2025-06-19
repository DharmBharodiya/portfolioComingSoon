const container = document.querySelector("#gradient-container");


let tl = gsap.timeline()

tl
.to("#fs", {
    scaleY: 0,
    duration: 1,
    delay: 1,
    ease: Expo.easeInOut,
    transformOrigin: "top"
})
.to("#ss", {
    height: "100%",
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut    
})
.to("#span2", {
    opacity: 1,
    delay: -.9
})
.to("#ts", {
    scaleY: 1,
    duration: 2,
    delay: -1.1,
    ease: Expo.easeInOut,
    transformOrigin: "bottom"
})
.to("#gradient-container", {
    opacity: 1,
    delay: -.74
})



function generateNumber(){
    return Math.floor(Math.random() * 100);
}

// container.addEventListener("mouseenter", (e) => {
//     // container.classList.add("hover")
//     const x = generateNumber();
//     const y = generateNumber();
//     container.style.backgroundPosition = `${x}% ${y}%`;
//     console.log(`mouseenter: backgroundPosition set to ${x}% ${y}%`);
// })



// container.addEventListener("mouseleave", () => {
//     const x = generateNumber();
//     const y = generateNumber();
//     container.style.backgroundPosition = `${x}% ${y}%`;
//     console.log(`mouseleave: backgroundPosition set to ${x}% ${y}%`);
// });


// Map mouse position to background position
container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    // Invert direction and increase sensitivity
    let x = 100 - ((e.clientX - rect.left) / rect.width) * 100;
    let y = 100 - ((e.clientY - rect.top) / rect.height) * 100;    // Reduce sensitivity for slower movement
    x = Math.min(100, Math.max(0, x * 1.2));
    y = Math.min(100, Math.max(0, y * 1.2));

    container.style.backgroundPosition = `${x}% ${y}%`;
    // Optionally log:
    // console.log(`mousemove: backgroundPosition set to ${x}% ${y}%`);
});

