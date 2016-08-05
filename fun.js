// 0: x + y
// 1: ...
// 2: ...
// 3: ...
// 4: ...

// const fun = (x, y) => {
//     return x + y
// };

// const fun = (x, y) => {
//     return x - y
// };

// const fun = (x, y) => {
//     return x * y
// };

// const fun = (x, y) => {
//     if (y == 0) {
//       return x+1;
//     }
//     else return  Math.pow(x, y) + x;
// };

const fun = (x, y) => {
  let sum;
  if (x >= 4) {
    return (y*200) + (x*6);
  }
  sum = (y*20) + (x*6);
  return sum;
};

const level = 4;

module.exports = {
    fun,
    level
}
