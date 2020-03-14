
/* 
https://www.cnblogs.com/onepixel/articles/7674659.html
冒泡排序：
比较两个相邻元素的大小，做位置调整
*/
const arr = [2, 3, 1, 5, 6, 0]
console.log(bubleSort(arr))
/* function bubleSort(arr) {
    const len = arr.length
    console.log(len)
    for(let o = len; o >= 2; o--){ //遍历次数 右 --> 左 6、5、4、3、2 直到 o>=2停止
        // len-2倒数第二个，自动与最后一个元素比较
        console.log('o:'+o)
        for(let i = 0; i <= o-1 ; i++){
            if(arr[i] > arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i+1], arr[i]]  
            }
        }
    }
    return arr
} */
// 复杂度：o(n^2) 两层循环

function bubleSort(array) {
    let len = array.length
    // 外层循环控制比较次数
    for (let i = 0; i < len - 1; i++) { //len-1:最后一个数会自动比较
        // 内层循环进行两两对比
        for (let j = 0; j < len - 1 - i; j++) {  //len - 1 - i同理
            console.log('i:' + i, 'jj:' + j)
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array
}










