/* 
    https://www.cnblogs.com/onepixel/articles/7674659.html
    选择排序 时间复杂度：o(n^2)
    工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，
    再从剩余未排序元素中继续寻找最小（大）元素，
    然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。
*/
/*const arr = [2, 3, 1, -1,5, 6, 0]
console.log(selectSort(arr))
function selectSort(arr) {
    let [len,minIndex] = [arr.length,null]
    for (let i = 0; i < len - 1; i++) {  //len - 1避免重复选择最后一个数
        minIndex = i  //最小值索引
        for(let j = i + 1; j < len;j++){ //i + 1避免重复取arr[i]
            if(arr[j] < arr[minIndex]){
                minIndex = j   //找出最小值的索引
            }
        }
        // 将取出的最小的数与当前位置做交换
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }   
    return arr
} */
const arr = [
    { age: 19 },
    { age: 15 },
    { age: 23 },
    { age: 2 },
    { age: 55 }
]
console.log(selectSort(arr))

function selectSort(arr) {
    let [len, minIndex] = [arr.length, null]
    for (let i = 0; i < len - 1; i++) {
        minIndex = i //假设，标记当前的数为最小
        for (let j = i + 1; j < len; j++) { // i+1 ：前面的已经排好序
            //找出真正最小的数
            if (arr[minIndex].age > arr[j].age) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}