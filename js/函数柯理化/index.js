/* 
    函数柯理化：参数复用，本质上降低通用性，提高适用性。
*/

// 第一版
/* var curry = function (fn) {
    // [].slice.call(arguments, 1);   arguments作为被处理的参数，从索引1开始截取
    var args = [].slice.call(arguments, 1); // [1,2]
    console.log(args)
    return function () {
        // 将args转换为数组
        console.log(arguments) // 当前函数执行上下文 没有传递参数，所以 arguments --> []
        var newArgs = args.concat([].slice.call(arguments));
        console.log(newArgs) //this --> global
        return fn.apply(this, newArgs);
    };
};

function add(a, b) {
    return a + b;
}
// var addCurry = curry(add, 1, 2);
// addCurry() // 3 */


function sub_curry(fn) {
    return function () {
        return fn()
    }
}

function curry(fn, length) {
    length = length || 4;
    return function () {
        if (length > 1) {
            return curry(sub_curry(fn), --length)
        }
        else {
            return fn()
        }
    }
}

var fn0 = function () {
    console.log(1)
}

var fn1 = curry(fn0)

fn1()()()() // 1