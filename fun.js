// 0: x + y
// 1: x - y
// 2: x * y
// 3: x ^ y + x
// 4:

const fun = (x, y) => {
  if (x >= 4) {
    return y * 200 + x * 6;
  }
    return y * 20 + x * 6;
};

const level = 4;

module.exports = {
    fun,
    level
}
