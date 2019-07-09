// 布尔
var isDone = false;
// 数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var myName = "Gene";
// 数组
var listA = [1, 2, 3, 4];
var listB = [1, 2, 3, 4]; //数组泛型
// 元组
var x = ['hello', 18];
console.log(x[0], x[1]);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// void
function warnUser() {
    console.log("This is my warning message");
}
// never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// 类型断言
var someValue = 'this is a string';
// 告诉 typescript:"hi,兄弟,someValue 就是字符串类型"
var strLengthA = someValue.length;
var strLengthB = someValue.length;
