const array = [1,2,1,4,3,4,'9']
function unique(arr) {
    let res = []
    let sortedArr = arr.concat().sort()
    let seen = ''  //保存上一个数组元素
    for(let i = 0,len = sortedArr.length; i < len; i++){
        if(!i || seen !== sortedArr[i]){ //首个元素或者不等于后一个元素
            res.push(sortedArr[i])
        }
        seen = sortedArr[i]
    }
    return res
}
console.log(unique(array))