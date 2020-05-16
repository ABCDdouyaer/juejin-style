/*
 * @Author: Jiraiya
 * @Date: 2020-05-15 16:45:19
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 19:26:17
 * @Description: 
 */ 
export default {
    tag: 'Number',
    static: [
        {
            type: ['es6'],
            title: 'EPSILON',
            content: [
                '等于2^-52',
                '表示两个数是否相等Math.abs(x - y) < Number.EPSILON'
            ]
        },
        {
            title: 'MAX_SAFE_INTEGER | MIN_SAFE_INTEGER | MAX_VALUE | MIN_VALUE',
            content: [
                '安全数范围[-2^53+1, 2^53-1]',
                'js所能表示的最大和最小值 待研究'
            ]
        },
        {
            title: 'NEGATIVE_INFINITY | POSITIVE_INFINITY | NaN',
            content: [
                '-Infinity | Infinity | NaN',
            ]
        },
        {
            type: ['es6', 'es6', 'es6', 'es6'],
            title: 'isFinite | isInteger | isNaN | isSafeInteger',
            content: [
                '是否有穷',
                '是整数',
                '是否为NaN',
                '是安全整数'

            ]
        },
        {
            type: ['es6', 'es6'],
            title: 'parseFloat | parseInt',
            content: [
                '字符串解析为数',
                '解析不了返回NaN',
            ]
        },
    ],
    pro: [
        {
            title: 'toExponential',
            content: [
                '指数形式表示数'
            ]
        },
        {
            title: 'toFixed',
            content: [
                '小数点后数字的个数；介于 0 到 20 （包括）之间'
            ]
        },
        {
            title: 'toPrecision',
            content: [
                '以指定的精度返回该数值对象的字符串表示'
            ]
        },
        {
            title: 'toString | toLocaleString',
            content: []
        },
        {
            title: 'valueOf',
            content: []
        },
    ]
}