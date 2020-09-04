// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('sumTwoNumbers should return 10 if passed 5 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    const sumInput1 = 5;
    const sumInput2 = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = sumTwoNumbers(sumInput1, sumInput2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subTwoNumbers should return 1 if passed 6 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    const subInput1 = 6;
    const subInput2 = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subTwoNumbers(subInput1, subInput2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('mulTwoNumbers should return 25 if passed 5 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 25;
    const mulInput1 = 5;
    const mulInput2 = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mulTwoNumbers(mulInput1, mulInput2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divTwoNumbers should return 6 if passed 30 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;
    const divInput1 = 30;
    const divInput2 = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divTwoNumbers(divInput1, divInput2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});