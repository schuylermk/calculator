"use strict";

// Get value of button that was pressed

const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('input');
const keys = calculator.querySelector('.keypad');

keys.addEventListener('click', e => {
  const key = e.target;
  const action = key.dataset.action;

  // Get type of key pressed
  
  if (!action) {
    console.log(e.target.value)
  }
  if (action === 'add') {
    console.log('...plus...')
  }
  if (action === 'subtract') {
    console.log('...minus...')
  }
  if (action === 'multiply') {
    console.log('...times...')
  }
  if (action === 'divide') {
    console.log('...divided by...')
  }
  if (action === 'percent') {
    console.log('...percent of...')
  }
  if (action === 'calculate') {
    console.log('...equals...')  
  }
  if (action === 'clear') {
    console.log('Memory cleared!')  
  }
});

// Append first number (operand) to the display
function displayOperand(e) {
  const key = document.querySelector(`.key[value="${e.target.value}"]`)
  const display = document.querySelector(`.display[value="${e.target.value}"]`)
  display.innerHTML()
}




// Set operator (and possibly append previous operand(s) to smaller, upper display)


// Append new number (operand) to the display


                //   _by pressing new operator (with respect to OoO)
// CALCULATE result {
              //     ¯by pressing equals sign

window.addEventListener('keydown', displayOperand);              
window.addEventListener('click', displayOperand);              