// const eqArrays = function(x, y) {
//   if (x.length !== y.length) {
//     return false
//   }
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== y[i]) {
//       return false
//     } 
//   }
//   return true;
// };


// const assertEqualArray = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

// assertEqualArray([1, 2, 3], [1, 2, 3]);
// assertEqualArray([1, 2, 3], [3, 2, 1]);


const without = function(source, itemsToRemove) {
  let finalArray = []
  for (let i = 0; i < source.length; i++) {
    if(!itemsToRemove.includes(source[i])) {
        finalArray.push(source[i])
      }
    }

  console.log(finalArray)
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]