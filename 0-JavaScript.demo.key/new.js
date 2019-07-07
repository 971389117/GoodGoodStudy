function Vehicle(){
    this.price=1000;
}
Vehicle.prototype={
    name:'大苹果'
}
let v=new Vehicle()
console.log(v.price,v.name)

// 1.创建一个空对象
// 2.将空对象的原型,指向构造函数的 prototype 属性
// 3.将这个空对象赋值给函数内部的 this 关键字
// 4.开始执行构造函数内部的代码
