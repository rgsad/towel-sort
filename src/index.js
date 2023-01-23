
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) return [];
  matrix.forEach((item, index) => { [...item] = index % 2 == 0 ? [...item] : item.reverse();});
   
   const arr = [].concat(...matrix);
   
   return arr;
}
