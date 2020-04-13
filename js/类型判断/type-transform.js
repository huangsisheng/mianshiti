// 类型转换
let a = 42
let b = a + '' // '42'隐式强制类型转换
let c = String(a) // '42'显式强制类型转换

/* 
所有安全的JSON值（JSON-safe）都可以使用JSON.stringify(..)字符串化。
安全的JSON值是指能够呈现为有效JSON格式的值。为了简单起见，
我们来看看什么是不安全的JSON值。undefined、function、symbol （ES6+）
和包含循环引用（对象之间相互引用，形成一个无限循环）的对象都不符合JSON 结构标准，
支持JSON的语言无法处理它们。JSON.stringify(..)在对象中遇到undefined、function
和symbol时会自动将其忽略，在数组中则会返回null（以保证单元位置不变）
*/