const countOnly = function(allItems, itemsToCount) {
  const finalObj = {};
  for (let i = 0; i < allItems.length; i++) {
    if(itemsToCount[allItems[i]]) {
      if(!finalObj[allItems[i]]) {
        finalObj[allItems[i]] = 1
      } else {
        finalObj[allItems[i]] += 1
      }
    }
  }
  return finalObj
}

module.exports = countOnly


