/*
1. for(;;){}
2. for(in){}
3. for(of){}
4. 数组专用.forEach((value,index,arr)=>{})
5. 将类数组转换成数组
*/

let arr = [1, 2, 3]

// 一、 最传统的 for 循环
// 作用于数组或有数字键的对象 简单方便
console.log('最传统的 for 循环')

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

console.log("=====================")

// 二、比较传统的 forIn 循环
// 作用于数组或对象，获取 key 值 会获得父亲的属性, ？枚举？
console.log('比较传统的 forIn 循环')

for (const index in arr) {
    if (arr.hasOwnProperty(index)) {
        const element = arr[index];
        console.log(element)
    }
}

console.log("=====================")
// 三、新贵 forOf 循环
// 作用于数组或对象，获取 value 值 ？作用于所有可迭代的对象？
console.log('新贵 forOf 循环')

for (const value of arr) {
        console.log(value)
}
console.log("=====================")



// 四、相对简单的 forEach
console.log('相对简单的 forEach')

arr.forEach(value => {
    console.log(value)
});

console.log('只对数组起作用，是数组的语法糖')
console.log("=====================")

// 五、将类数组转换成数组
console.log('将类数组转换成数组');

// (function sum(){console.log(123)}())
// !function sum(){console.log(213)}()
(function sum(){
    console.log('---传统的ES 5---');
    Array.prototype.forEach.call(arguments,(valueArray)=>{
        console.log(valueArray)
    });

    console.log('---新奇的ES 6 解构赋值---');
    [...arguments].forEach(value=>{console.log(value)})

    console.log('---新奇的ES 6 数组扩展---');
    Array.from(arguments).forEach(value=>{console.log(value)})
})(arr)

// 六、 传说中的 Iterator 对象 与 一点儿解构赋值
let o={...arr}
let a=[...arr]
