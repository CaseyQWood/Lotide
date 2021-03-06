const eqArrays = function(x, y) {
  if (x.length !== y.length) {
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i].operator === Array !== x[i].operator === Array) {
      return false;
    }
    if (x[i].operator === Array && x[i].operator === Array) {
      if (eqArrays(x[i], y[i]) === false) {
        return false;
      }
    }
    if (x[i] !== y[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;



