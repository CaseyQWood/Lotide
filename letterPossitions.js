module.exports = letterPossitions

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' '){ 
      if(!results[sentence[i]]){
        results[sentence[i]] = [i]
      } else { 
        results[sentence[i]].push(i)
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"))
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

// const eqArrays = function(x, y) {
//   let finalAsnwer = '';
//   if (x.length === y.length) {
//     for (let i = 0; i < x.length; i++) {
//       if (x[i] === y[i]) {
//         finalAsnwer = true;
//       }
//       else {
//         finalAsnwer = false;
//       }
//     }
//   }
//   else {finalAsnwer = false ;
//   }
//   console.log(finalAsnwer);
// };