const array = [
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'lisi' }
]
// 使用两层循环去，复杂度：o(n^2)
// 限制是不能使用let命名
/* function unique(arr) {
    console.log(new Date().valueOf())
    let res = []
    for(var i = 0,len = arr.length; i < len; i++){
        for (var j = 0, reslen = res.length; j < reslen; j++){
            if(arr[i].name === res[j].name){
                break;
            }
        }
        // 说明循环完了
        if (j === reslen){
            res.push(arr[i])
        }
    }
    console.log(new Date().valueOf())

    return res
} */
function unique(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++){
        let j = 0
        for(; j < res.length;j++){
            if (arr[j].name === arr[i].name){
                break
            }
        }
        if(j === res.length){
            res.push(arr[i])
        }
    }
    return res
}
console.log(unique(array)) 

// splice
/* function unique(ar r) {
    console.log(new Date().valueOf())
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            // i+1 代表后一个数，所以前一个数与后一个数作比较，若相同就删除第二个数，
            // 因为删除了所以长度减小，j也减小了
            if (arr[j].name === arr[i].name) {
                arr.splice(j, 1)
                j--
                len--
            }
        }
    }
    console.log(new Date().valueOf())
    return arr
} */







