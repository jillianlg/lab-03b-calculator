import {
    handleSumClick,
    handleSubClick,
    handleMulClick,
    handleDivClick,
} from './handlers.js';

const sumButton = document.getElementById('sum-button');
const subButton = document.getElementById('sub-button');
const mulButton = document.getElementById('mul-button');
const divButton = document.getElementById('div-button');

sumButton.addEventListener('click', handleSumClick);
subButton.addEventListener('click', handleSubClick);
mulButton.addEventListener('click', handleMulClick);
divButton.addEventListener('click', handleDivClick);

