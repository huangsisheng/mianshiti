/* 
我们可以先处理数组中的所有数据，比如将所有的字母转成小写，
然后再传入unique函数，
但是有没有方法可以省掉处理数组的这一遍循环，
直接就在去重的循环中做呢？
*/
// 思路：
// 加一个判断是否排序的参数sort和一处理字母的回调函数indexof
const array = [9, 2, 1, 2, 's', 1, 3, 7, 0, 'S']
function unique(array,isSorted,iteratee) {
    let arr = isSorted ? array.concat().sort() : array
    let res = []
    let seen = []
    for(let i = 0, len = arr.length; i <len; i++){
        let value = arr[i]
        let computed = iteratee ? iteratee(value, i, arr) : value
        if(isSorted){
            if (!i || seen !== computed){
                res.push(value)
            }
            seen = computed
        } else if (iteratee){
            if (seen.indexOf(computed) === -1){
                seen.push(computed)
                res.push(value)
            }
        } else if (res.indexOf(value) === -1) {
            res.push(value)
        }
    }
    return res
}

console.log(unique(array, false, function(item, index, array){
    return typeof item === 'string' ? item.toLocaleLowerCase() : item
}))