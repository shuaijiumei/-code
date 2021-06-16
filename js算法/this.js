let o = {
    sayHi: function(param) {
        console.log(this); // 指向 o 这个对象
    }

}

o.sayHi()

setTimeout(() => {
    console.log(this);
}, 1000)