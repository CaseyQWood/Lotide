module.exports = countLetters

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input) {
  const finalObj = {};
  for (const index of input) {
    if(index !== ' '){
      if(!finalObj[index]){
        finalObj[index] = 1
      } else {
        finalObj[index] += 1
      }
    }
  }
  console.log(finalObj)
}


assertEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1, } )