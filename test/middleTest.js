const assertEqualArray = require('../assertEqualArray')
const middle = require('../middle')

assertEqualArray(middle([1]), []);
assertEqualArray(middle([1, 2]), []);
assertEqualArray(middle([1, 2, 3]), [2]);
assertEqualArray(middle([1, 2, 3, 4, 5]), [3]);
assertEqualArray(middle([1, 2, 3, 4]), [2, 3]);
assertEqualArray(middle([1, 2, 3, 4, 5, 6]), [3, 4]);