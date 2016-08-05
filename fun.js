// 0: x + y
// 1: x - y
// 2: x * y
// 3: x + Math.pow(x,y)
// 4: ...

const fun = (x, y) => {
  let c = x;
  let t = 0;
  while (c >= 10){
    c = c/10;
    t++;
  }
    let k = 1;
    if (x % 3 == 0 && x != 0)
      k = 10;
    return x*6 + y*2*Math.pow(10, Math.floor(c/3)+t + 1)/k;
};

const level = 4;

module.exports = {
    fun,
    level
}
