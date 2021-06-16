// 函数定义的方式
// 1. 常用
function fn() {}
// 2. 函数表达式（匿名函数）
let fun = function() { console.log('我是匿名函数'); };
fun()

// 3.  高级 使用 new Function('参数',....,'函数体)

let f = new Function('a', 'b', 'console.log(a+b)')
f(1, 2)
    // 4.  前面两种方法都只是Function的一种实例
console.log(f instanceof Object);
// 所有的函数都是对象