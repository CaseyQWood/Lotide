const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  }

  const middleIndex = Math.ceil(length / 2);
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }
  return [array[middleIndex - 1]];
};

module.exports = middle;






