import {sumTwoNumbers, subTwoNumbers, mulTwoNumbers, divTwoNumbers } from './mathUtils.js';

// ADDITION import functions and grab DOM elements
const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumTotal = document.getElementById('sum-total');

// set event listeners to update state and DOM
export function handleSumClick() {
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;

    const sum = sumTwoNumbers(value1 + value2);

    sumTotal.textContent = sum;
}


// SUBTRACTION import functions and grab DOM elements
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subTotal = document.getElementById('sub-total');

// set event listeners to update state and DOM
export function handleSubClick() {
    const value1 = subInput1.valueAsNumber;
    const value2 = subInput2.valueAsNumber;

    const sub = subTwoNumbers(value1, value2);

    subTotal.textContent = sub;
}

// MULTIPLY import functions and grab DOM elements
const mulInput1 = document.getElementById('mul-input-1');
const mulInput2 = document.getElementById('mul-input-2');
const mulTotal = document.getElementById('mul-total');

// set event listeners to update state and DOM
export function handleMulClick() {
  
    const value1 = mulInput1.valueAsNumber;
    const value2 = mulInput2.valueAsNumber;

    const mul = mulTwoNumbers(value1, value2);

    mulTotal.textContent = mul;
}

// DIVIDE import functions and grab DOM elements
const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');

const divTotal = document.getElementById('div-total');

// initialize state

// set event listeners to update state and DOM
export function handleDivClick() {
  
    const value1 = divInput1.valueAsNumber;
    const value2 = divInput2.valueAsNumber;

    const div = divTwoNumbers(value1, value2);

    divTotal.textContent = div;
}