/**
 * Author: TBY on 2021-07-15
 * note 笔记
 * tips 特别注意
 * example 例子
 */
function getValue(): number {
    return Math.random()*10
}

enum E {
    B,
    A = getValue(),
    C = 2
}

console.log(E.B+'...'+E.A)