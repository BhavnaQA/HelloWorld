//import {} from '@cucumber/cucumber'
const { Given, When, Then } = require("@cucumber/cucumber");
const { assert } = require("chai");

let a, b, value;

Given("The numbers are {int} and {int}", function (numOne, numTwo) {
  a = numOne;
  b = numTwo;
});


Then("the result is {int}", function (result) {
  assert.equal(value, result, "Does is failed");
});
