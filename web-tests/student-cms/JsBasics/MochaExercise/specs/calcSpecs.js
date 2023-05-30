import calc from "../src/calc.js";
import { assert } from 'chai' // '.' refers to current directory, '..' refers to parent directory

describe("Test Calculator", () => {

    let Calculator

    before(() => {
        Calculator = new calc()
    });

  it("Addition Test", () => {
    const RESULT = Calculator.add(10, 5);
    assert.equal(RESULT,15,"Values does not match")
  });

  it('Substraction ', () => {
      const RESULT = Calculator.sub(10,5)
      assert.equal(RESULT,5,"Substraction is incorrect")
      
  });

  it('Multiplication', () => {
      const RESULT = Calculator.mul(10,5)
      assert.equal(RESULT,50,"Multiplication is incorrect")
      
  });
  it('Division', () => {
    const RESULT = Calculator.div(10,5)
    assert.equal(RESULT,2,"Division is incorrect")
    
});




});
