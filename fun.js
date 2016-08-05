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
  let div = x/4;
  let s;
  let mul = 1;
  for (var i = 0; div >= 1; i++) {
    div = div/10;
    mul *= 10;
  }
  let res = mul * 20;
  return (y*res) + (x*6);
};

const level = 4;

module.exports = {
    fun,
    level
}
