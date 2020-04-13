// 不能拷贝对象
// 1.slice()、concat()
/* let array = [1,null,3,'5',{o:'OO'},['arr']]
let newArray = array.slice()
let newArray = array.concat()
let newArray = [...array]
newArray[newArray.length - 2][0] = '111'
newArray[newArray.length - 1][0] = '222'
console.log(newArray,array) */

/* // 2.Object.assign()、展开运算符
const object = {
    item1:'11',    
    item2:'22',    
    item3:['array'],
    fn:function (params) {}    
}

// const newObj = Object.assign({},object)
const newObj = {...object}
newObj.item3[0] = '我是老三'
console.log(newObj, object) */

// 3.实现浅拷贝函数
function shallowCopy(obj) {
    // 只拷贝对象
    if(typeof obj !== 'object')
        return
    let newObj = obj instanceof Array ? [] : {}
    for(let key in obj){
        // 是obj的属性才拷贝
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key]
        }
    }
    return newObj
}
const object = {
    item1: '11',
    item2: '22',
    item3: ['array'],
    fn: function (params) { }
}
console.log(shallowCopy(object))