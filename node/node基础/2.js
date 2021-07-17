/**
 * Author: TBY on 2021-07-08
 * note 笔记
 * tips 特别注意
 * example 例子
 */

let fs = require('fs')

// note 阻塞代码实例
// example
// let data = fs.readFileSync('input.txt')
//
// console.log(data.toString())
// console.log('over')

// note 非阻塞代码
//example

fs.readFileSync('input.txt',function (err,data){

  console.log(data.toString())
})

console.log('over')