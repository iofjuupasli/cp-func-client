// 0: x + y
// 1: x - y
// 2: x * y
// 3: Math.pow(x, y) + x
// 4: ...

const fun = (x, y) => {
    const a = x*6 + y*20;
    if (y == 5 && x > 3) {
      return 1000 + x * 6
    }
    if( (a%10 == 0) && a && x) {
      return ((a / 10) - 3) * 100 + 30
    }
    if( (a%10 == 4) && a && x) {
      return Math.round(((a / 10) - 2) * 100 + 24 - 40)
    }
    return a;
};

const level = 4;

module.exports = {
    fun,
    level
}
