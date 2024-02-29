import "./main.scss";
import anime from './Utils/animees.js'

let topColumn = document.querySelector('.top-column');
let bottonColumn = document.querySelector('.botton-column');
const card = document.querySelector(".column-2");
let newCardOne = document.createElement("div");
let newCardTwo = document.createElement("div");

const handleScroll = () => {
    if (window.scrollY > 5) {
        // Update styles directly
        topColumn.style.animation = 'scrollAnim 2s ease 0s 1 normal forwards';
        topColumn.style.visibility = 'visible'; // Set visibility to visible

        setTimeout(() => {
            bottonColumn.style.animation = 'scrollAnim 2s ease 0s 1 normal forwards';
            bottonColumn.style.visibility = 'visible'; // Set visibility to visible
        }, 400);
    } else {
        // Reset animation and set visibility to hidden when not scrolled
        topColumn.style.animation = '';
        topColumn.style.visibility = 'hidden';
        bottonColumn.style.animation = '';
        bottonColumn.style.visibility = 'hidden';
    }
};


let animationProps ={
    prop1: '0',
    prop2: 0
}

document.addEventListener('DOMContentLoaded', function(event) {
    // Add the card elements with their initial content and classes.
    newCardOne.classList.add("cardOne");
    newCardOne.innerHTML = `
        <h5>Course Hours</h5>
        <h1>${animationProps.prop1}</h1>
    `;
    card.appendChild(newCardOne);

setTimeout(() => {
    newCardTwo.classList.add("cardTwo");  
    newCardTwo.innerHTML = `
        <h5>Members</h5>
        <h1>${animationProps.prop2}</h1>
    `;
    card.appendChild(newCardTwo);
}, 100);
startAnimation();

    function startAnimation() {
        anime({
            targets: animationProps,
            prop1: '1451',
            prop2: '29',
            easing: 'linear',
            round: 1,
            update: function() {
                newCardOne.innerHTML = `
                    <h5>Course Hours</h5>
                    <h1>${animationProps.prop1}</h1>
                `;
               
                newCardTwo.innerHTML = `
                    <h5>Members</h5>
                    <h1>${animationProps.prop2}k</h1>
                `;
            }
        });
    }
});

window.addEventListener('scroll', handleScroll);

