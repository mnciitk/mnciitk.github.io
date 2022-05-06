

// Listeners
document.addEventListener('mousemove', onMouseMove);


// Move the cursor
function onMouseMove(e) {
    const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
  gsap.to(bigBall, .4, {
    x: e.clientX - 15,
    y: e.clientY - 15 });

    gsap.to(smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 7 });

}

// Hover an element
function onMouseHover() {
    const bigBall = document.querySelector('.cursor__ball--big');
    gsap.to(bigBall, .3, {
    scale: 2 });

}
function onMouseHoverOut() {
    const bigBall = document.querySelector('.cursor__ball--big');
    gsap.to(bigBall, .3, {
    scale: 1 });

}

var hover = ()=>{
    const hoverables = document.querySelectorAll('.hoverable');
    for (let i = 0; i < hoverables.length; i++) {
        // console.log('a')
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }
}