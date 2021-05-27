const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}


const eqObjects = function(object1, object2) {
  const obj1Length = Object.keys(object1).length
  const obj2Length = Object.keys(object2).length
  let iteration = 0
  if (obj1Length === obj2Length) {
    for (const index in object2) {
      if (object2[index] === object1[index]) {
        iteration += 1
        if (iteration >= obj2Length) {
          return true
        }
       } else {
        iteration += 1
        eqArrays(object1[index], object2[index])
      }
    }
  }
  return object1
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
  return finalAsnwer;
};



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc)
assertObjectsEqual(ab, ba)
assertObjectsEqual(cd, cd2)
assertObjectsEqual(cd, dc)