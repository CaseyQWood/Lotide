const assert = require('chai').assert;
const middle = require('../middle')
const eqArrays = require('../eqArrays')

describe("Middle Test", () => {
  it("if array is 1 long return []", () => {
    assert.strictEqual(eqArrays(middle([1]), []), true);
  });
  it("if array is 2 long return []", () => {
    assert.strictEqual(eqArrays(middle([1, 2]), []), true);
  });
  it("if odd return value of middle index", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3]), [2]), true);
  });
  it("if odd return value of middle index (larger array)", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
  });
  it("if even return array of middle two indexs", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
  });
  it("if even return array of middle two indexs (larger array)", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
  });
});