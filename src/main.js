import "./main.scss";
import anime from './Utils/animees.js'

let topColumn = document.querySelector('.top-column');
let bottomColumn = document.querySelector('.botton-column');
const card = document.querySelector(".column-2");
let newCardOne = document.createElement("div");
let newCardTwo = document.createElement("div");
let scrollTimeout;

const animateColumn = (column, animation, visibility) => {
    column.style.animation = animation;
    column.style.visibility = visibility;
};

const handleScroll = () => {
    const shouldAnimate = window.scrollY > 5;
    const isWidthValid = window.innerWidth < 991;
    const animationStyle = 'scrollAnim 2s ease 0s 1 normal forwards';
    const visibleStyle = 'visible';
    const hiddenStyle = 'hidden';

    clearTimeout(scrollTimeout);

    if (shouldAnimate) {
        animateColumn(topColumn, animationStyle, visibleStyle);
        scrollTimeout = setTimeout(() => {
            animateColumn(bottomColumn, animationStyle, visibleStyle);
        }, 400);

    }else if (shouldAnimate && isWidthValid) {
            scrollTimeout = setTimeout(() => {
                animateColumn(bottomColumn, animationStyle, visibleStyle);
            }, 1);
        } else {
        animateColumn(bottomColumn, '', hiddenStyle);
        animateColumn(topColumn, '', hiddenStyle);
    }
};

let animationProps ={
    prop1: '0',
    prop2: '0'
}

document.addEventListener('DOMContentLoaded', function(event) {

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
            round: 1,
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

window.addEventListener('scroll', handleScroll);

