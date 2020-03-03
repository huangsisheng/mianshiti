const array = [1,2,1,4,2]

function unique(arr) {
    let res = []
    for(let i = 0, len = arr.length; i < len; i++){
        if (res.indexOf(arr[i]) === -1){
            res.push(arr[i])
        }
    }
    return res
}
console.log(unique(array))