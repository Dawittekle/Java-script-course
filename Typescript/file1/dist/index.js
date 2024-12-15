"use strict";
let b = [5, 'dawit'];
console.log(b[0]);
;
let mysize = 2;
console.log(mysize);
function hello(sale, rate = 100) {
    if (sale < 5000) {
        return 200 * 5;
    }
    else {
        return rate * 3;
    }
}
let employee = {
    id: 1,
    name: 'dawit',
    retire: (date) => {
        console.log('hello' + (date));
    },
};
function greet(name) {
    if (name) {
        console.log('hello ' + name + '!!');
    }
    else {
        console.log('holla');
    }
}
greet('dawit');
function hell0(name) {
    let nameg = `hello how are you${name}`;
    return nameg;
}
console.log(hell0 === null || hell0 === void 0 ? void 0 : hell0('Dawit'));
//# sourceMappingURL=index.js.map