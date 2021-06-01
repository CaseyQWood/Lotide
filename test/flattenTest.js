const assert = require('chai').assert;
const flatten = require('../flatten');


describe ('#Flatten', () => {
  it ('Should return a single longer array when given a nested array', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  });
});



