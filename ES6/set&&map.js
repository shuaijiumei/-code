/**
 * Author: TBY on 2021-07-03
 * note 笔记
 * tips 特别注意
 * example 例子
 */


const s = new Set()

let arr = [2,31,214,21,3,41,3,1,21]
// note 1. 不会出现重复值
arr.forEach(x=>s.add(x))

console.log(s)

// note 2.set函数可以接受具有iterable接口的数据解构作为参数
// example one
const set1 = new Set([1,2,3,4,2,3])  // note 可以赋给重复值，自动筛查
console.log(set1)
// example two 可以接收类数组
// example 利用set结构对数组和字符串去重
let arr2 = [21,123,23,123,23,124,null,null,23,34,53,3145,'1'] //note 去重的时候不会发生类型转换，所以'1'和 1 都输出
arr2 = [...new Set(arr2)]
console.log(arr2)
let str = `sfalkfklajfqwop`
str = [...new Set(str)].join('')
console.log(str)
// tips 两个对象总是不相等的
let set3 = new Set()
set3.add({})
set3.add({})
console.log(set3.size)  // len = 2 证明不相等


/*
note   set实例 的方法
  1. 操作方法
    Set.prototype.add(value) 添加某个值返回Set结构本身
    Set.prototype.delete(value) 删除某个值，返回一个boolean ？ ‘成功’ ： ‘失败’
    Set。prototype。has(value) 是否有这个值 返回一个boolean ？‘有’：‘无’
    Set。prototype。clear() 清除所有成员，没有返回值
  2.遍历方法
    Set.prototype.keys()：返回键名的遍历器
    Set.prototype.values()：返回键值的遍历器
    Set.prototype.entries()：返回键值对的遍历器
    Set.prototype.forEach()：使用回调函数遍历每个成员
 */
console.log('----------------遍历方法--------------')
let set_new = new Set(['red','green','blue'])
console.log('keys--------')
for (let item of set_new.keys()) console.log(item)
console.log('values--------')
for (let item of set_new.values()) console.log(item)
console.log('entries--------')
for (let item of set_new.entries()) console.log(item)
console.log('forEach----------')
// note forEach() 可以直接对每个成员进行操作 no return
set_new.forEach((value,key)=> console.log(key+':'+value))

/* note WeakSet
*   WeakSet 跟Set很类似，但里面只能存放对象
*   ？？？ 大大的疑惑
*/
console.log('------------------map--------------')
/*  note Map
*   tips 为了解决对象的键只能是字符串的问题而引出的结构
*   tips 有点像python的字典
* */

// example one
const m = new Map()
const key_obj = {
  name:'handsome',
  id:Math.random()
}
// 设置键值对
m.set(key_obj,'person')
console.log(m.get(key_obj))
// example two
const map = new Map([
    ['name','tby'],
    ['id',Math.random()]
])
console.log(map.get('id'))

