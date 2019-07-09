// 布尔
let isDone: boolean = false;

// 数字
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

// 字符串
let myName: string = `Gene`

// 数组
let listA: number[] = [1, 2, 3, 4]
let listB: Array<number> = [1, 2, 3, 4] //数组泛型

// 元组
let x: [string, number] = ['hello', 18]
console.log(x[0], x[1])

// 枚举
enum Color { Red, Green, Blue }
let c: Color = Color.Green

// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// void
function warnUser(): void {
    console.log("This is my warning message");
}

// never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// Object
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error


// 类型断言
let someValue:any='this is a string'
// 告诉 typescript:"hi,兄弟,someValue 就是字符串类型"
let strLengthA:number=(<string>someValue).length

let strLengthB:number=(someValue as string).length
