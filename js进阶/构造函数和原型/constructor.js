function Star(name, age) {
    // 构造函数的属性和方法成为成员
    this.name = name
    this.age = age

}
// 将方法添加到构造函数的原型对象中，这样就可以实现多个实例对象公用该方法，节省内存
Star.prototype.sing = function() {
    console.log('i can sing');
}

// 对象原型(__proto__) 和构造函数原型对象(prototype)里面都有一个constructor属性，我们称为
// 构造函数，因为它指回构造函数本身
// constructor 主要用于记录该对象引用于哪个构造函数,可以用来定义它指回原来构造的函数


Star.prototype = {
    // 用一个对象对原型对象进行赋值时，会将原来的对象覆盖，所以需要用construtor来指回构造函数
    constructor: Star,
    sing: function() {
        console.log('i can sing');
    },
    dance: function() {
        console.log('i can dance');
    }

}