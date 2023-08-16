var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('return correct result of 5!', () => {
    // Setup
    const inputNumber = 5;
    const expectedResult = 120;

    // Exercise
    const result = Calculate.factorial(inputNumber);
    
    // Verification
    assert.equal(Calculate.factorial(inputNumber), expectedResult);
    });

    it('return correct result of 3!', () => {
    // Setup
    const inputNumber = 3;
    const expectedResult = 6;

    // Exercise
    const result = Calculate.factorial(inputNumber);
    
    // Verification
    assert.equal(Calculate.factorial(inputNumber), expectedResult);
    });

  // Add another it block for Edge Case
  
    it('return correct result of 0!', () => {
    // Setup
    const inputNumber = 0;
    const expectedResult = 1;

    // Exercise
    const result = Calculate.factorial(inputNumber);

    // Verification
    assert.equal(Calculate.factorial(inputNumber), expectedResult);
    });
  });
});

