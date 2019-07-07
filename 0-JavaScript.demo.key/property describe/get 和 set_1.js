// 使用JavaScript 中的 get 和 set 方法存取变量
// to2:也可以用属性描述对象设置
obj={
    get square(){
        return 'square === '+this._square
    },
    set square(_square){
        this._square=_square
    }
}

obj.square=5
console.log(obj.square)
