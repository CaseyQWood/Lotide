const { isArray } = require("util");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


// const eqObjects = (obj1, obj2) => {
 
// }





const eqObjects = function(object1, object2) {
  let length1 = Object.keys(object1).length;
  let length2 = Object.keys(object2).length;

  if (length1 !== length2) {
      return false;
  }

    for (const key in object2) {
      if (Array.isArray(object1[key]) && Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false ) {
          return false;
        }
      }

      if (object1[key].constructor !== object2[key].constructor) {
        return false
      }

      if (object1[key].constructor === Object && object2[key].constructor === Object) {
        if (eqObjects(object1[key], object2[key]) === false) {
          return false;
        }
      }

      if (object1[key] !== object1[key]) {  
        return false;
      } 
    }
  return true;
};

const eqArrays = function(x, y) {
  if (x.length !== y.length) {
    return false
  }
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        return false;
    }
  }
  return true;
};


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)


const ab = { a: "1", b: "2" };
const abc = { a: "1", b: "2", c: "3" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, ba), true)

const dc = { d: ["2", 3], c: "1" };
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, dc), true);