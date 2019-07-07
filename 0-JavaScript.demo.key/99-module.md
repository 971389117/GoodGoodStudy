
```js
export var firstName = "我";
export var lastName = "哎";


var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {
    firstName,
    lastName,
    year
};

export function multiply(x, y) {
    return x * y;
};

function v1() {
    ...
}

function v2() {
    ...
}

export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
};


// 注意：动态改变。500 毫秒后改变 export foo 的值
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);


// IMPORT

import {firstName, lastName, year} from './profile.js';
import { lastName as surname } from './profile.js';

// 改写导入的值
import {a} from './xxx.js'
a = {}; // Syntax Error : 'a' is read-only;
import {a} from './xxx.js'
a.foo = 'hello'; // 合法操作

// 注意，import命令具有提升效果，会提升到整个模块的头部，{{首先执行}}。 被导入的模块都会被自动执行
foo();
import { foo } from 'my_module';

// 可以省略.js
import {myMethod} from 'util';

// 整体加载
    // circle.js

export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}
    // main.js
import { area, circumference } from './circle';

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
// 或
import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));


// export-default.js
export default function () {
  console.log('foo');
}

// import-default.js
import customName from './export-default';
customName(); // 'foo'
```
