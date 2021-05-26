const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(x, y) {
  let finalAsnwer = '';
  if (x.length === y.length) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] === y[i]) {
        finalAsnwer = true;
      }
      else {
        finalAsnwer = false;
      }
    }
  }
  else {finalAsnwer = false ;
  }
  console.log(finalAsnwer);
};


// create a function called eqArrays
//loop through each array and compair each index 

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false