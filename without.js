const without = function(source, itemsToRemove) {
  let finalArray = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      finalArray.push(element);
    }
  }
  return finalArray;
};

module.exports = without;
