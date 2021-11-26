

const small = window.matchMedia("(max-width: 767px)");
const large = window.matchMedia("(min-width: 768px)");





// gsap.from('main p', {duration: 2, x:400});


const controller = new ScrollMagic.Controller();
let triggerElement = [...document.querySelectorAll('.st')];
let triggeredElements = [...document.querySelectorAll('.single-stage')];
function checkWidthInner() {
    if (window.innerWidth > 767) {
        triggerElement.forEach((cont, k) => {

            triggerElement.forEach((el2, i) => {
                let delay;

                if (i === 0) {
                    delay = 0.1;
                } else{
                    delay = 0.4 + (0.2 * i);
                }
                // console.log(cont + ' delay ' + delay + ':::' + i + ' number' )
                let trigger = cont;
                // console.log(el2 + ' element ' + delay + ' delay')
                // gsap.fromTo(el, {opacity:0, y: 200}, {opacity: 1, y: 0, delay: delay, duration: 0.6})
                var scene = new ScrollMagic.Scene({
                    triggerElement: el2,
                    triggerHook: 0.8, // show, when scrolled 10% into view
                    offset: 50 // move trigger to center of element
                })
                    .setClassToggle(triggeredElements[i], "animed") // add class toggle
                    // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                    .addTo(controller);
            })


        });

    } else {
        triggerElement.forEach((cont, k) => {

            triggerElement.forEach((el2, i) => {
                let delay;

                if (i === 3) {

                    var scene2 = new ScrollMagic.Scene({
                        triggerElement: el2,
                        triggerHook: 0.4, // show, when scrolled 10% into view
                        offset: 50 // move trigger to center of element
                    })
                        .setClassToggle(document.querySelector('.process-circle'), "animeded") // add class toggle
                        // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                        .addTo(controller);

                }
                // console.log(cont + ' delay ' + delay + ':::' + i + ' number' )
                let trigger = cont;
                // console.log(el2 + ' element ' + delay + ' delay')
                // gsap.fromTo(el, {opacity:0, y: 200}, {opacity: 1, y: 0, delay: delay, duration: 0.6})
                var scene = new ScrollMagic.Scene({
                    triggerElement: el2,
                    triggerHook: 0.9, // show, when scrolled 10% into view
                    offset: 50 // move trigger to center of element
                })
                    .setClassToggle(triggeredElements[i], "animed") // add class toggle
                    // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                    .addTo(controller);
            })


        });
    }
}
window.onload = () => {
    checkWidthInner();
}









