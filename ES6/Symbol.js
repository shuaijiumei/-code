/**
 * Author: TBY on 2021-07-03
 * note 笔记
 * tips 特别注意
 * example 例子
 */

// note Symbol 避免属性名冲突而诞生的一个随机变量
// note JS 的第七种原始暑假类型：undefined、null、Boolean、String、Number、Object、Symbol

// note Symbol可以接受一个字符串作为参数，用于区分Symbol

let s1 = Symbol('tby')
let s2 = Symbol('hx')

console.log(s1.toString())
console.log(s2.toString())

// note Symbol.for() 传递同一个字符串，返回同一个Symbol

let sym1 = Symbol('tby')
let sym2 = Symbol('tby')

console.log(sym1 === sym2) // tips false

// note 每次调用 Symbol.for 会先检查有没有 这个 key 创建的symbol值 ？ ‘存在的值’：‘创建一个新的’
let symF1 = Symbol.for('tby')
let symF2 = Symbol.for('tby')

console.log(symF1 === symF2) // tips true

// note Symbol.keyFor() 返回一个已登记的Symbol类型值的key
// example
let key_s = Symbol('tby')
let key_s2 = Symbol.for('hx')

console.log(Symbol.keyFor(key_s))   // tips undefined 因为没有在全局注册，所以搜索不到
console.log(Symbol.keyFor(key_s2))  // tips hx



