module.exports = flatten

const flatten = function(input){
  let final = [];
  for (var index of input) {
    if(Array.isArray(index)) {
      for( var dex of index) {
        final.push(dex)
      }
    }
    else { 
      final.push(index )
    }
  }
  console.log(final)
}


flatten([1, 2, [3, 4], 5, [6]])