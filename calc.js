"use strict";

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keypad')

// Get value of button that was 'pressed'
keys.addEventListener('click', e => {
  if (e.target.matches('input')) {
    console.log(e.target);
  }
})

// window.addEventListener('keydown', function(e) {
//   console.log(e);
// });

// window.addEventListener('click', function(e) {
//   console.log(e);
// });

// function getInput(e) {
//   key = document.querySelector(`input[data-key="${e.keyCode}"]`);
//   console.log(key);
// }

// Append first number (operand) to the display


// Set operator (and possibly append previous operand(s) to smaller, upper display)


// Append new number (operand) to the display


                //   _by pressing new operator (with respect to OoO)
// CALCULATE result {
              //     ¯by pressing equals sign