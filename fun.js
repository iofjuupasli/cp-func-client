// 0: x + y
// 1: x - y
// 2: x*y
// 3: Math.pow(x,y) + x
// 4: ...

const fun = (x, y) => {
  if(x>=4 && x <14)
    return x*6 + y*200
    else if(x>=14)
     return +((y*2).toString() + x*6 )
     else return x*6 + y*20
};

const level = 4;

module.exports = {
    fun,
    level
}
