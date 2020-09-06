/* *********** 工具函数、算法 ************ */

/**
 * 为什么说函数是javascript的一等公民？
 * 编程语言中，一等公民可以作为函数参数，可以作为函数返回值，也可以赋值给变量。 
 * 而javascript中的函数具备以上所有特性
**/


/** 
 * 考察 数组去重、排序、对象映射关系
**/
// 取100以内随机做转换
// 如把[2,3,60,67,45,43] -> [[2,3],[43,45],[60,67]]
(function (len) {
    // 1.获得随机数数组
    let arr = []
    for (let i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }

    // 2.数组排序
    arr.sort((a, b) => a - b)

    // 3.数组去重
    arr = Array.from(new Set(arr))

    // 4.数组映射为对象
    let subArr = [],
        map = {};
    arr.forEach((item) => {
        let key = Math.floor(item / 10)
        if (!map[key]) {
            map[key] = []
        }
        map[key].push(item)
    })

    // 5.获得新数组
    for (let k in map) {
        subArr.push(map[k])
    }

    return subArr
})(10)
/* End */

/* 对象键名 Start */
// 考察：对象键名只能为字符串和symbol，以及键名会调用toString()方法
// example 1
var a = {}, b = '123', c = 123;
a[b] = 'b';
a[c] = 'c';
// key: '123'
console.log(a[b]); // 'c'

// example 2
var a = {}, b = Symbol('123'), c = Symbol('123');
a[b] = 'b';
a[c] = 'c';
console.log(a[b]); // 'b'

// example 3
var a = {}, b = { key: '123' }, c = { key: '456' };
a[b] = 'b';
a[c] = 'c';
// key: [obejct Obejct]
console.log(a[b]); // 'b'
/* 对象键名 End */


/* 测试for 与 forEach性能 Start */
/**
 * for循环性能优于forEach
 * 猜想：因为for循环没有额外的函数调用栈以及上下文；
 *       而forEach中有回调函数执行，也就存在函数调用栈以及上下文，可能会造成性能消耗
 **/
let len = 10000
let arrA = Array(len).fill(0)
console.log('** for循环start **')
console.time()
for (let i = 0; i <= len; i++) {
    arrA.push(i)
}
console.timeEnd()

let len = 10000
let arrB = Array(len).fill(0)
console.log('** forEach循环start **')
console.time()
arrB.forEach((item) => {
    arrB.push(item)
})
console.timeEnd()
/* 测试for 与 forEach性能 End */


/* 测试数组取值性能 Start */
/**
 * 取第一个元素和第10万个元素：
 * 数组是一种特殊的对象，使用下标取值实际上就是通过hash精确去查找对应的值，因此时间消耗差不多
 **/
let arrC = new Array(100000).fill(1)
console.time()
console.log(arrC[0])
console.timeEnd()

console.time()
console.log(arrC[99999])
console.timeEnd()
/* 测试数组取值性能 End */


/* 旋转数组 Start */
/**
 * 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
 * 输出: [5, 6, 7, 1, 2, 3, 4]
 **/
function rotateArr(arr, k) {
    let len = arr.length
    // 输入的反转数可能大于数组长度，所以对其取余
    if (len < k) {
        k = k % len
    }
    console.log('k:' + k)
    // 考察数组的删除添加方法
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}
console.log(
    rotateArr([1, 2, 3, 4, 5, 6, 7], 21)
)
/* 旋转数组 End */

/* 对称数 Start */
/**
 * 打印出 1 - 10000 之间的所有对称数: 131、 282
 * 主要考察:类型转换（数字->字符串->数组）数组reverse()、join()方法
 **/
function symmetricNum() {
    return [...Array(10000).keys()].filter((item) => {
        return item.toString().length > 1 && item === Number(item.toString().split('').reverse().join(''))
    })
}
/* 对称数 End */


/* 移动零 Start */
/**
 * 1.必须在原数组上操作，不能拷贝额外的数组。
 * 2.尽量减少操作次数。
 **/
function moveZero(arr) {
    // 解决有连续0的时候
    let j = 0
    for (let i = 0; i < arr.length - j; i++) {
        if (arr[i] === 0) {
            arr.push(0)
            arr.splice(i, 1)
            // 使数组的长度保持不变
            i--
            j++
        }
    }
    return arr
}
console.log(moveZero([0, 2, 4, 0, 6, 7, 0, 0, 0, 9, 10]))
/* 移动零 End */


/* 数组中 两数之和 Start */
/**
 * 1.给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 2.你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 例子：给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 **/
// 考察数组 对象映射关系
function arrNoAnd(arr, target) {
    let len = arr.length,
        map = {};
    for (let i = 0; i < len; i++) {
        map[arr[i]] = i
    }

    for (let j = 0; j < len; j++) {
        let d = target - arr[j]
        if (map[d]) {
            return [j, map[d]]
        }
    }
    return new Error('404 Not Found')

}
console.log(arrNoAnd([2, 3, 4, 10, 2], 6))

/* 数组中 两数之和 End */


/* 任意给定两个数组，求其中位数 */
function getMedian(arr1, arr2) {
    let array = [...arr1, ...arr2].sort((a, b) => a - b)
    let len = array.length
    if (len % 2 === 0) { // 偶数
        return (array[len / 2] + array[len / 2 - 1]) / 2
    } else { // 奇数
        return array[Math.floor(len / 2)]
    }
}
getMedian([1, 2, 3, 7], [9, 8, 4, 5, 6])



/* 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度 */
let list = [
    { id: 1, name: '部门A', parentId: 0 },
    { id: 2, name: '部门B', parentId: 0 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 1 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
    { id: 7, name: '部门G', parentId: 2 },
    { id: 8, name: '部门H', parentId: 4 }
];

/* const convert = list => {
    let map = new Map();
    let result = []

    // 映map
    list.forEach(el => {
        map.set(el.id, el);
    });

    list.forEach(el => {
        let parent = map.get(el.parentId);
        console.log(list, parent)
        if (!parent) {
            el.children = []
            return
        }
        if (parent.hasOwnProperty('children')) {
            parent.children.push(el);
        } else {
            parent['children'] = [];
            parent.children.push(el);
        }
    });
    for (let i = 0; i < list.length; i++) {
        const el = list[i];
        if (el.parentId === 0) {
            result.push(el)
        }
    }
    return result
};

convert(list) */
// 利用递归

function array2Tree(data, parentId = '') {
    let tree = [];
    let temp;
    data.forEach((item) => {
        if (item.parentId == parentId) {
            let obj = item;
            temp = array2Tree(data, item.id);
            if (temp.length > 0) {
                obj.children = temp;
            }
            tree.push(obj);
        }
    })
    return tree;
}


array2Tree(list)



/* 查询字符串转对象 Start */
function url2obj() {
    const _url = location.search
    return _url.replace(/(^\?)|($&)/g, '').split('&').reduce((prev, cur) => {
        const [k, v] = cur.split('=')
        prev[k] = decodeURIComponent(v)
        return prev
    }, {})
}
/* 查询字符串转对象 End */


/* 对象转查询字符串 Start */
function obj2url(value = {}) {
    const _obj = value
    return Object.keys(_obj).length > 0 ? '?' + Object.entries(_obj).map((ele) => {
        let [k, v] = ele
        let str = `${k}=${encodeURIComponent(v)}`
        return str
    }).join('&') : ''
}
console.log(obj2url({ age: 27, name: "YZW" }));
/* 对象转查询字符串 End */


/* 判断数据类型 Start */
/**
 * 可判断类型：undefined、null、string、number、
 * boolean、array、object、symbol、date、regexp、
 * function、asyncfunction、arguments、set、map、weakset、weakmap
 **/
function dataTypeJudge(val, type) {
    const dataType = Object.prototype.toString.call(val).replace(/\[object (\w+)\]/, '$1').toLowerCase()
    return type ? type === dataType : dataType;
}
// $1-$9 匹配满足条件的值
console.log(dataTypeJudge("young")); // "string"
console.log(dataTypeJudge(20190214)); // "number"
console.log(dataTypeJudge(true)); // "boolean"
console.log(dataTypeJudge([], "array")); // true
console.log(dataTypeJudge({}, "array")); // false
/* 判断数据类型 End */


/* 判断小数是否相等 Start */
/** 
 * 因为使用 IEEE 754 双精度存储会有精度损失， 
 * 故判断两值的差是否等于小于一个极小数
 **/

Number.EPSILON = (function () { // 解决兼容性问题,自执行函数
    return Number.EPSILON ? Number.EPSILON : Math.pow(2, -52)
})()
function numbersEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON
}
numbersEqual(0.1 + 0.2, 0.3)
/* 判断小数是否相等 End */


[3, 2, 1].reduce(Math.pow) // 9
// Math.pow(3,2)
// Math.pow(9,1)

/* 隐式类型转换 Start */
/**
 * 1.已知if条件判断中，除undefined、null、false、0、""、NaN 基本类型外都判断为真
 * 2.当使用==判断会隐式类型转换，引用类型与boolean值比较会把引用类型转换为值类型，
 *   这里[0] -> 0; 0 == true -> false
 **/
var a = [0];
if (a) {
    console.log(a == true);
} else {
    console.log("wut");
}
/* 隐式类型转换 End */


/* 一道容易被人轻视的面试题 Start */
/** 
 * 解析地址：https://www.jb51.net/article/79437.htm
 * 运算符优先级：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * 此题主要考察 this指向、原型、变量声明提升、运算符优先级、继承、全局变量污染等等
 **/
function Foo() {
    getName = function () { alert(1); };
    return this;
}
Foo.getName = function () { alert(2); };
Foo.prototype.getName = function () { alert(3); };
var getName = function () { alert(4); };
function getName() { alert(5); }

//请写出以下输出结果：
Foo.getName(); // 访问静态方法： 2

/* 变形为： 
    function Foo() {
        getName = function () { alert(1); };
        return this;
    }
    var getName ;
    function getName() { alert(5); }

    Foo.getName = function () { alert(2); };
    Foo.prototype.getName = function () { alert(3); };
    getName = function () { alert(4); }
*/
getName(); // 变量什么提升： 4

Foo().getName(); // 执行构造函数，访问构造函数中的方法： 1
getName(); // 访问构造函数中的getName将外部的方法覆盖并返回this==当前实例： 1 
new Foo.getName(); // .运算符优先级高于new操作符： 2
new Foo().getName(); // -> 访问原型： 3
new new Foo().getName(); // new ((new Foo()).getName)()： 3
// 2 -> 4 -> 1 -> 1 -> 2 -> 3 -> 3
/* 一道容易被人轻视的面试题 End */

/************* 易错题 Start ***************/

/************** 易错题 End ****************/

function test() {
    console.debug(this)
    console.log(this)
}
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// this指向谁？
test.call({ name: 'zs' }) // { name: 'zs' }
test.call(Object) // function Object(){}
test.call(null)   // window
test.call(undefined) // window


let person = {
    name: '张三'
}
let proxy = new Proxy(person, {
    get: function (target, proKey) {
        if (proKey in target) {
            return target[proKey]
        } else {
            throw new ReferenceError('not exist')
        }
    }
})
proxy.name




