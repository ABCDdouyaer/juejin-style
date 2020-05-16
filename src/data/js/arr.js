/*
 * @Author: Jiraiya
 * @Date: 2020-05-15 16:29:03
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 19:25:57
 * @Description: 
 */ 
const arr = {
    tag: 'Array',
    static: [
        {
            type: ['es6'],
            title: 'from',
            content: [
                'Array.from(arrayLike[, mapFn[, thisArg]])',
                '类数组和迭代器[map方法 [map方法的this]]',
                '从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例'
            ]
        },
        {
            type: ['es6'],
            title: 'isArray',
            content: [
            ]
        },
        {
            type: ['es6'],
            title: 'of',
            content: [
                '一个整数参数则返回[num], Array返回[ <7 empty items> ] of返回[ 7 ]'
            ]
        },
        {
            title: 'Symbol.species',
            content: [
                '返回Array的构造函数',
                'Array[Symbol.species] === Array'
            ]
        },
    ],
    pro: [
        {
            title: 'concat',
            content: [
                '不改变原数组，返回新数组'
            ]
        },
        {
            title: 'join',
            content: []
        },
        {
            title: 'reverse',
            content: []
        },
        {
            title: 'slice',
            content: []
        },
        {
            title: 'splice',
            content: [
                'array.splice(start[, deleteCount[, item1[, item2[, ...]]]])'
            ]
        },
        {
            title: 'sort',
            content: [
                '1变换位置，0和-1不动'
            ]
        },
        {
            title: 'pop | shift',
            content: [
                '返回删除的元素'
            ]
        },
        {
            title: 'push | unshift',
            content: [
                '返回数组的长度'
            ]
        },
        {
            title: 'indexOf | lastIndexOf',
            content: []
        },
        {
            type: ['es6'],
            title: 'includes',
            content: [
                'arr.includes(valueToFind[, fromIndex])',
                '与indexOf区别，NaN相等 ±0不等'
            ]
        },
        {
            type: ['es6'],
            title: 'copyWithin',
            content: [
                'arr.copyWithin(target[, start[, end]])',
                'target: 开始复制到的位置, start|end 开始结束需要复制的位置',
                '浅复制数组的一部分到同一数组中的另一个位置，并返回它，会改变原数组',
            ]
        },
        {
            type: ['es6', 'es6', 'es6'],
            title: 'entries | values | keys',
            content: [
                '返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对',
            ]
        },
        {
            title: 'every | some | filter | map | forEach | reduce | reduceRight',
            content: []
        },
        {
            type: ['es6'],
            title: 'fill',
            content: [
                'arr.fill(value[, start[, end]])',
                '返回修改后的数组，会改变原数组'
            ]
        },
        {
            type: ['es6', 'es6'],
            title: 'find | findIndex',
            content: [
                '返回符合条件的第一个元素/下标',
            ]
        },
        {
            type: ['es6'],
            title: 'flatMap',
            content: [
                '参数类似map的回调函数',
                '将类似map的返回数组铺平',
            ]
        },
        {
            title: 'toString | toLocaleString',
            content: [
                '返回逗号分隔的字符串',
            ]
        },
        {
            title: 'Symbol.iterator',
            content: [
                '返回一个生成器函数，调用返回vaules的迭代器',
            ]
        },
        {
            title: 'Symbol.unscopables',
            content: [
                'ES6新增的属性在with上面未绑定被包含在该属性中',
            ]
        },
    ]
}

export default arr;