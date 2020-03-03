const array = [
    { name: 'zhangsan' },
    { name: 'lisi' },
    { name: 'zhangsan' },
    { name: 'lisi' }
]
// 使用两层循环去，复杂度：o(n^2)
function unique(arr) {
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
    return res
}
console.log(unique(array))