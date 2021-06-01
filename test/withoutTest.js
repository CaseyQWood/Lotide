const assert = require('chai').assert;
const without = require('../without');

describe ('#Without', () => {
  it ('Should return a array minus a specified number', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3])
  });
  it ('Should remove only values of matching type', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
  });
});


