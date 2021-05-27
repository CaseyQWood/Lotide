const takeUntil = (array, callback) => {
  return array.slice(0, array.findIndex(callback))
  // let final = [];
  // for (const value of array) {
  //   if(!callback(value)) {
  //     final.push(value);
  //   } else {
  //     return final;
  //   }
  // }
}

const eqArrays = function(x, y) {
  if (x.length !== y.length) {
    return false
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return false
    } 
  }
  return true;
};


const assertEqualArray = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertEqualArray(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ])
console.log('---');
assertEqualArray(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ])


// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);