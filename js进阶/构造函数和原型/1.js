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

    //1.用this添加的成员成为实例成员
    // 实例成员只能用new出来的实例访问

    // this.sing = function() {
    //         console.log('i can sing');
    //     }
}
// 将方法添加到构造函数的原型对象中，这样就可以实现多个实例对象公用该方法，节省内存
Star.prototype.sing = function() {
    console.log('i can sing');
}

// 2.静态成员 在构造函数本身是添加的成员
// 静态成员只能通过构造函数访问
Star.sex = 'man'
console.log(Star.sex);

let ldh = new Star('ldh', 40)
ldh.sing()


// 2. 一般情况下，我们公共属性定义到构造函数里面，公共方法定义到原型对象身上