/**
 * Author: TBY on 2021-07-15
 * note 笔记
 * tips 特别注意
 * example 例子
 */
function getValue() {
    return Math.random() * 10;
}
var E;
(function (E) {
    E[E["B"] = 0] = "B";
    E[E["A"] = getValue()] = "A";
    E[E["C"] = 2] = "C";
})(E || (E = {}));
console.log(E.B + '...' + E.A);
