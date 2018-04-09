"use strict"

const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }

  return result
}

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.display')
const keys = calculator.querySelector('.keypad')


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType
    
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-pressed'))

// Number key pressed...
  if (!action) { 
    console.log(`Number key ${key.innerHTML} was pressed!`)
    
    calculator.dataset.previousKey = 'number'
    if (displayedNum === '0' || previousKeyType ==='operator') {
      display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent 
      }
  }

// Decimal key pressed    
  if (action === 'decimal') {
    console.log(`.decimal key.`)

    if (!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.'
    } else if (previousKeyType === 'operator') {
      display.textContent = '0.'
    }

    calculator.dataset.previousKey = 'decimal'
  }

// Operator key pressed...
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide' ||
    action === 'sqroot' ||
    action === 'percent'
  ){  
    const firstNumber = calculator.dataset.firstNumber
    const operator = calculator.dataset.operator
    const secondNumber = displayedNum
    console.log(`${key.getAttribute('data-action')} key was pressed`)
    
    if (firstNumber && operator) {
      display.textContent = calculate(firstNumber, operator, secondNumber)
    }

    key.classList.add('is-pressed')
    calculator.dataset.previousKeyType = 'operator'
    calculator.dataset.firstNumber = displayedNum
    calculator.dataset.operator = action

    

  }

// Clear key pressed    
    if (action === 'clear') {
      console.log(`All clear`)
      calculator.dataset.previousKeyType = 'clear'

      display.textContent = `0`
    }

// Equals key pressed    
    if (action === 'calculate') {
      console.log(`Equals`)

      const firstNumber = calculator.dataset.firstNumber
      const operator = calculator.dataset.operator
      const secondNumber = displayedNum

      display.textContent = calculate(firstNumber, operator, secondNumber)
    }
  }
})

