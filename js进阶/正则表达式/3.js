// 量词符
// 让限定的字符重复多少次

// * 重复出现 0 次 或 很多次 
let rg = /^[a-z]*$/
console.log(rg.test('asdasdw'));
console.log('--------------');
// + 重复出现 1 次 或 很多次  >= 1才行
let rg1 = /^a+$/
console.log(rg1.test('aaaaa'));
console.log('----------');
// ? 允许重复 1 次 或者 0 次 （有没有都可以）
let rg2 = /^a?$/
console.log(rg2.test('a'));
console.log('----------');

// {3} 就是重复 3 次 严格重复 3 次
let rg3 = /^a{3}$/
console.log(rg3.test('aaaa'));
console.log('----------');

// {3,} 大于等于三次  {3,10} 大于等于 3 次 小于 10 次