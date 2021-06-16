class Star {
    //构造函数，创建实例的时候会自动执行的函数
    constructor(name, lover) {
        //因为是实例化时的调用所以this指向new 的实例
        //这里的this指向我创造的实例，并且给他赋值
        this.name = name
        this.lover = lover
    }

    // 添加方法
    sing() {
        console.log('我的爱人~' + this.lover);
    }
}
let tby = new Star('谭博尹', 'hx')

// console.log(tby.name + '的爱人是' + tby.lover);

// tby.sing()


// 类的继承

class Hgy extends Star {
    constructor(name, lover) {
        // 这样子this是指向子类的，数据并没有传到父类里面
        // this.name = name 
        // this.lover = lover

        super(name, lover); //调用了父类中的构造函数，数据就传到父类里面了
    }
}

let hgy_test = new Hgy('胡光耀', 'ldh')
    // 想调用父类里面的方法，参数必须传到父类里面
    // hgy_test.sing()


// super 关键字调用父类的普通函数

class Father {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    say() {
        console.log('我是爹');
    }
    sum() {
        return this.x + this.y
    }
}

class Son extends Father {
    constructor(x, y) {
        super(x, y) // 把参数传递过去后就可以使用父类的方法了,必须在子类之前调用
        this.x = x
        this.y = y

    }

    say() {
        // console.log('我是儿子');
        // super. 直接调用父类中的函数
        super.say()
    }
    sub() {
        return this.x - this.y
    }
}

let hwy = new Son(2, 4);
// 1.继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就执行子类的
// 2. 如果子类没有，就去查找父类有没有这个方法，如果有就执行父类的方法
// 3. 就近原则
// hwy.say();

console.log(hwy.sum() + '这是儿子' + hwy.sub());