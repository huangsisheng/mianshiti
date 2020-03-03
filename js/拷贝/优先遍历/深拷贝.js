
// 1. JSON.parse(JSON.stringify())
/* let array = [1,null,3,'5',{o:'OO'}]
let newArray = JSON.parse(JSON.stringify(array))
console.log(newArray) */

// 但是该方法不能拷贝函数
let array = [1, null,undefined, 3, '5', { o: 'OO' }, function () { }, { f: function () { }}]
// let newArray = JSON.parse(JSON.stringify(array))
// console.log(newArray)


function deepCopy(obj) {
    if(typeof obj !== 'object')
        return    
    let newObj = obj instanceof Array ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            // 关键，当判断属性得知还是对象，就递归，直到为非对象
            // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null
            // 因为null可以理解为未创建的对象，常在返回类型应是一个对象，所以特殊处理
            // typeof null = 'object'
            newObj[key] = typeof obj[key] === 'object' ? 
                          obj[key] === null ? 
                          null : 
                          deepCopy(obj[key]) : 
                          obj[key]
        }
    }
    return newObj
}
let deepArray = deepCopy(array)
deepArray[4].o = 0
console.log(deepArray,array)

