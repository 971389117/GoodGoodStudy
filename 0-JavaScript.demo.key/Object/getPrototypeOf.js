// 获取和设置对象原型
let o={}

Object.setPrototypeOf(o,Array)
let proto=Object.getPrototypeOf(o)

console.log(proto)
