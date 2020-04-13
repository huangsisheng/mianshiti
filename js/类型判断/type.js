// 中卷 第一部分 第二章
let n = 0,m = '11', s = 'str';
console.log(+m) // 11
console.log(n + m) // '011'

0 === -0        // true
Object.is(0,-0) // false

let arr = [1,2,3]
function fn(x) {
    // x.length = 0
    // x 是 arr的一个副本 引用复制
    x.push(4,5,6)
    console.log(x)
}
console.log(arr)
fn(arr)
