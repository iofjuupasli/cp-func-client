// 0: x + y
// 1: x - y
// 2: x * y
// 3: Math.pow(x,y) + x
// 4: x > 3 && y > 0 ? x*6 + y*200 : x*6 + y*20

const fun = (x, y) => {
    return x > 3 && y > 0 ? x*6 + y*200 : x*6 + y*20
};

const level = 4;

module.exports = {
    fun,
    level
}
