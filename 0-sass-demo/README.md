## 使用变量

```css
$highlight-color:#f90;
$highlight-border:1px solid $highlight-color;
.selected{
    $width:100px;
    width:$width;
    border:$highlight-border;
}
```
## 嵌套 CSS 规则

## 导入 SASS 文件

## 静默注释

## 混合器

利用混合器，可以很容易地在样式表的不同地方共享样式。如果你发现自己在不停地重复一段样式，那就应该把这段样式构造成优良的混合器，尤其是这段样式本身就是一个逻辑单元，比如说是一组放在一起有意义的属性。

判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。如果你能找到一个很好的短名字来描述这些属性修饰的样式，比如rounded-cornersfancy-font或者no-bullets，那么往往能够构造一个合适的混合器。如果你找不到，这时候构造一个混合器可能并不合适。
## 使用选择权继承精简 CSS
