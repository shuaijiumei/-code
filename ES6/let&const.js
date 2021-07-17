// 暂时性死区

var x ='tby'
if(true){
  // if 代码块内，x未声明之前都不可用，这在语法上称为暂时性死区
  // 这意味着 type of 也不是100%安全，因为在这个死区里，用type of 会抛出referenceError
  // typeof x   referenceError
  // console.log(x)
  let x = 'hx'
  console.log(x) // 正确
}

console.log('-----------------')

// 在块级作用域用声明函数

function f(){console.log('i am outside')}
(function (){
  function f(){
    console.log('i am inside')}
  if (false){
  }
  f()  // 调用f()  ES5 里得到outside  ES6里得到inside

  // 在 ES6 浏览器里面，有自己的行为方式
  // 1. 允许在块作用域内申明函数
  // 2. 函数声明类似于var ，即会提升到全局作用域或函数作用域的头部
  // 同时，函数声明还会提升到所在的块级作用域的头部
}())

console.log('---------')
// ps, ES6 的作用域必须有大括号，否则认为没有
// if (true) let x = 1
// error

/* const 实际保证的是，变量指向的那个内存地址所保存的数据不动
    这对于简单的数据类型（number、string、boolean）可以保证值不变
    但对（object、array） 实际保存的是一个指针，所以内部也可以改变


 */