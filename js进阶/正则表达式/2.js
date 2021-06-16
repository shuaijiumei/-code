// 字符类 []

let rg = /[abc]/ // 只要包含有 abc中任何一个都返回true
    // console.log(rg.test('cnds'));

let rg1 = /^[abc]$/ //只有是 a或b或c 只有这三个字母才返回 true

// console.log(rg1.test('aa'));
// console.log(rg1.test('a'));
// console.log(rg1.test('b'));
// console.log(rg1.test('c'));
// console.log(rg1.test('abc'));

let rg2 = /^[a-f]$/ // a 到 f 的英文字符都ok

// console.log(rg2.test('d'));

// 字符组合

let rg3 = /^[a-zA-Z0-9_-]$/ // 包含a-z A-Z _ - 字符任何一个
    // console.log(rg3.test('-'));

// 在[^a-z] 表示不能取a-z
let rg4 = /^[^a-zA-Z0-9_-]$/
console.log(rg4.test('a'));