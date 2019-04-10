//问题1 大于10的数据去重
//01.原始数据
var arr = [1, 2, 3, 4, 46, 78, 45, 67, 5, 10];
//02.转换成set集合去重
let s1 = new Set(arr);

let s2 = new Set();
//遍历s1取出值大于10的数据
s1.forEach((number) => {
    if (number > 10) {
        s2.add(number)
    }
})
s2

//2、取二组集合的交集
var arr1 = [1, 2, 3, 4, 46, 78, 45, 67, 5, 10];
var arr2 = [1, 99, 35, 48, 67, 78, 45, 67, 5, 10];
let s1 = new Set(arr1);
let s2 = new Set(arr2);
let s3 = new Set();
s1.forEach((number) => {
    if (s2.has(number)) {
        s3.add(number)
    }
})
s3

//3.取二组集合的并集
var arr1 = [1, 2, 3, 4, 46, 78, 45, 67, 5, 10];
var arr2 = [1, 99, 35, 48, 67, 78, 45, 67, 5, 10];
let s1 = new Set(arr1);
let s2 = new Set(arr2);
s1.forEach((number) => {
    s2.add(number);
})
s2
