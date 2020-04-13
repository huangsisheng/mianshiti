let s = new String('hello world')
console.log(s)
// 因为构造函数 创建出来的是一个封装了基本类型值的封装对象 而不是字符串基本类型
typeof s // 返回对象的子类型， 是'object' 而非 'string'
s instanceof String // true 
Object.prototype.toString.call(s) //"[object String]"

new Boolean(false) //true 因为new Boolean() 始终返回true

/* [undefined, undefined, undefined] 可以想象成apply中有一个for循环 
    arr[0]、arr[1]、arr[2]第二个参数是传递给Array的参数，相当于创建一个长度为3的函数
    且每一项没有值*/
Array.apply(null, { length: 3 }) 

let sym = Symbol('my symbol')
sym             //Symbol(my symbol)
sym.toString()  //"Symbol(my symbol)"
typeof sym      // "symbol"
let objOfsym = { } 
objOfsym[sym] = '{aa}' //{ Symbol(my symbol): "{aa}" } 