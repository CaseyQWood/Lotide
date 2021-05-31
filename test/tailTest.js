

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail = require('../tail')

describe("Tail Tests", () => {
  const result = ["Hello", "Lighthouse", "Labs"]
  const words = ["Yo Yo", "Lighthouse", "Labs"]

  it("ensure we got two elemnts left over from a array 3 long", () => {
    assert.strictEqual(tail(result).length, 2);
  });
  it("ensure the fist element return is correct", () => {
    assert.strictEqual(tail(result)[0], "Lighthouse");
  });
  it("ensure the second element return is correct", () => {
    assert.strictEqual(tail(result)[1], "Labs");
  });
  it("ensure the original array is not mutated", () => {
    tail(words)
    assert.strictEqual(words.length, 3);
  });
});