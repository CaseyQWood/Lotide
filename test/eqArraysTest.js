



// assertEqual(eqArrays([1, 2, 3], [3, [2, 4], 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false


const assert = require('chai').assert
const eqArrays = require('../eqArrays')

describe ('#eqArray', () => { 
  it('equal arrays return true', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
});
  it('if arrays dont match and have a nested array', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, [2, 4], 1]), false)
  });
  it('if both arrays match', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
  });
  it('checking that all the value types match', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
  });
})
