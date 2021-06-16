let regexp = new RegExp(/123/)

let rg = /123/ // 只要包含有123都返回true
let str = 123
    // test() 方法，用来检测字符串是否符合正则表达式要求的规范
    // RegExpObj.text(str)
    // console.log(rg.test(str));

// ^ 以什么开头 $以什么结尾
let rg2 = /^abc$/ // 精确匹配字符串
console.log(rg2.test('abcd'));