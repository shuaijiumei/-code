// 创造对象

// 1. new Object
let obj1 = new Object()

// 2. 字面量创建
let obj2 = {}

// 3. 使用构造函数
function Star(name, age) {
    // 构造函数的属性和方法成为成员
    this.name = name
    this.age = age

    // this.sing = function() {
    //         console.log('i can sing');
    //     }
}
// 将方法添加到构造函数的原型对象中，这样就可以实现多个实例对象公用该方法，节省内存
Star.prototype.sing = function() {
    console.log('i can sing');
}

let ldh = new Star('ldh', 40)
console.log(ldh);
// 系统会帮我在对象身上添加一个 __proto__ 指向我们构造函数的原型对象 prototype
// 调用方法时，现在ldh本身寻找，要是没有，则去__proto__里面即 构造函数的原型对象里去找