/* 
冒泡排序：
比较两个相邻元素的大小，做位置调整

*/
const arr = [2, 3, 1, 5, 6, 0]
bubleSort(arr)
function bubleSort(arr) {
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
}
// 复杂度：o(n^2) 两层循环