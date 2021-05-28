const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
}


const eqObjects = function(object1, object2) {
  let length1 = Object.keys(object1).length;
  let length2 = Object.keys(object2).length;
  if (length1 !== length2) {
      return false;
  }
    for (const key in object2) {
      if (Array.isArray(object1[key]) && Array.isArray(object1[key])) {
        if ( !eqArrays(object1[key], object2[key]) ) {
          return false;
        }
      } else if (object1[key] !== object1[key]) {  
        return false;
      } 
    }
  return true;
};

const eqArrays = (x, y) => {
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