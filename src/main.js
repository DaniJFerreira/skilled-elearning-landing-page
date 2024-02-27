import "./main.scss";
import anime from './Utils/animees.js'

const card = document.querySelector(".column-2");
let newCardOne = document.createElement("div");
let newCardTwo = document.createElement("div");

let animationProps ={
    prop1: '0',
    prop2: '0'
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
            prop2: '29k',
            easing: 'linear',
            round: 2,
            update: function() {
                newCardOne.innerHTML = `
                    <h5>Course Hours</h5>
                    <h1>${animationProps.prop1}</h1>
                `;
               
                newCardTwo.innerHTML = `
                    <h5>Members</h5>
                    <h1>${animationProps.prop2}</h1>
                `;
            }
        });
    }
});

console.log("hello world!");
