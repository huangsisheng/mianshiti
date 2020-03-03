/* 无参数时：Math.max() --> -Infinity; Math.min() --> Infinity
1.如果有任一参数不能被转换为数值，则结果为 NaN。
2.max 是 Math 的静态方法，所以应该像这样使用：Math.max()，而不是作为 Math 实例的方法 
(简单的来说，就是不使用 new )
3.如果没有参数，则结果为 -Infinity (注意是负无穷大)
*/

// 1.原始遍历方法
/* let arr = [1,null,55,9,100],
    result = arr[0]
for(let item of arr){
    result = Math.max(result,item)
}
console.log(result) */

// 2.reduce
/* let arr = [1, null, 55, 9, 100]
function max(prev,next) {
    console.log(prev) 1、1、55、55
    return Math.max(prev, next) 
}
console.log(arr.length > 0 &&arr.reduce(max)) */


// 3.排序
/* let arr = [1, null, 55, 9, 100]
console.log(arr.sort((a,b) => a - b)[arr.length-1]) */

// 4.eval 可以把数组当做参数传递进去，不推荐使用
/* let arr = [1, 55, 9,null, 100] //null 这时候不能被转为数字 
// +隐式类型转换
console.log(eval('Math.max('+ arr +')')) */

// 5.apply  
/* let arr = [1, 55, 9, 101,null]
console.log(Math.max.apply(null,arr)) */

// 6.扩展运算符
/* let arr = [1, 55, 9, 101, null]
console.log(Math.max(...arr)) */



var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]
