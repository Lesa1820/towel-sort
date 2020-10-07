
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined){
    return arr = [];
  }else if(matrix.length === 0){
    return arr = [];
  }else{
    let arr = matrix[0].concat(matrix[1].reverse());
    if(matrix.length == 3){
      arr = arr.concat(matrix[2]);
    }
    if(matrix.length == 4){
      arr = arr.concat(matrix[2]);
      arr = arr.concat(matrix[3].reverse());
    }
    // matrix = matrix.sort(function(a,b){ 
    //   return a - b;
    // });
    return arr;
  }
}
