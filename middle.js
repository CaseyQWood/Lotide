const eqArrays = function(x, y) {
  if (x.length !== y.length) {
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return false;
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


const middle = function(array) {
  const length = array.length;
  if (length <= 2){
    return [];
  }

  const middleIndex = Math.ceil(length / 2)
  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]]
  } 
  return [array[middleIndex - 1]];
};

assertEqualArray(middle([1]), []);
assertEqualArray(middle([1, 2]), []);
assertEqualArray(middle([1, 2, 3]), [2]);
assertEqualArray(middle([1, 2, 3, 4, 5]), [3]);
assertEqualArray(middle([1, 2, 3, 4]), [2, 3]);
assertEqualArray(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


//create a frunction call middle***********
//intake the array ************************
// create a container**********************
//find the middle of the array
//- find the length and devide by 2

//consol.log the value of the middle index
//if even number log the two middle index's
//if 2 or less index log empty array
// - console log the conatiner which base is an empty array




