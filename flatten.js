const flatten = (input) => {
  let final = [];
  for (var index of input) {
    if (Array.isArray(index)) {
      for (var dex of index) {
        final.push(dex);
      }
    }
    else { 
      final.push(index);
    }
  }
  return final;
};

module.exports = flatten;
