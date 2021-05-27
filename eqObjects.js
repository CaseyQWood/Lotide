const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


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
  return false
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
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, ba), true)
assertEqual(eqObjects(cd, cd2), false)
assertEqual(eqObjects(cd, dc), true)
// console.log(eqObjects(ab, ba));

// eqObjects(cd, cd2)


// eqObjects(cd, dc);