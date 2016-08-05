const request = require('request-promise');
const {fun, level} = require('./fun');
require('colors');

const url = 'http://146.185.148.111:3000'

const server = (x, y) => {
    return request(`${url}?level=${level}&x=${x}&y=${y}`)
        .then(v => +v);
}

const test = (x, y) => {
    return server(x, y)
        .then(serverValue => {
            const localValue = fun(x, y);
            if (serverValue !== localValue) {
                console.error(`f(${x}, ${y}) = local: ${localValue}, server: ${serverValue}`.red);
            } else {
                console.log(`f(${x}, ${y}) = ${localValue}`.green);
            }
        });
};

const xs = [0, 1, 2, 3, 4, 5];
const ys = [0, 1, 2, 3, 4, 5];

xs.forEach(x => {
    ys.forEach(y => {
        test(x, y);
    });
});
