// 已知typeof可以判断基本数据类型，Object.prototype.tostring.call()可以判断具体类型
class Type{
    constructor(option){
        this.typeObj = {}
    }
    

}
let typeObj = {}

// 映射js中的数据类型和其他内置对象
"Boolean Number String Function Array Date RegExp Object Error"
.split(' ')
.map((item,index) => {
    // 统一字母大小写
    typeObj[`[object ${item}]`] = item.toLocaleLowerCase()
})

// 因为IE6 中null和undefined会被Object.prototype.toString 识别成 [object Object]！
// null == undefined
function typeFn(obj) {
    if(obj == null){
        return obj + ''
    }
    return typeof obj === 'object' || typeof obj === 'function' ?
                  typeObj[Object.prototype.toString.call(obj)] || 'object' :
                  typeof obj
}

function isFunction(obj) {
    return typeFn(obj) === 'function'
}
function testFn() {}

console.log(isFunction(testFn))

let array = []
function isArray(arr) {
    return Array.isArray(arr) || typeFn(arr)
}
console.log(isArray(array))


