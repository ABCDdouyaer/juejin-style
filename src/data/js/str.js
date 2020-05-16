/*
 * @Author: Jiraiya
 * @Date: 2020-05-15 16:28:46
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 19:26:55
 * @Description: 
 */ 
const str = {

    tag: 'String',
    static: [{
            title: 'fromCharCode',
            content: []
        },
        {

            type: ['es6'],
            title: 'fromCodePoint',
            content: [
                '识别大于0xFFFF的码点'
            ]
        },
        {
            type: ['es6'],
            title: 'raw',
            content: [
                '斜杠被转义',
                '用于模板字符的处理'
            ]
        },

    ],

    pro: [{
            type: [, , 'es6'],
            title: 'charAt | charCodeAt | codePointAt | normalize',
            content: [
                'charAt不支持负数，超出0~len-1返回空字符串'
            ]
        },
        {
            type: [, 'es6'],
            title: 'concat | includes |  slice',
            content: []
        },
        {
            type: ['es6', 'es6'],
            title: 'startsWith | endsWith',
            content: [
                'string.startsWith(searchvalue, start)',
                'start不支持负数'
            ]
        },
        {
            title: 'indexOf | lastIndexOf',
            content: [
                'string.indexOf(searchvalue,start)'
            ]
        },
        {
            type: ['es6', 'es6'],
            title: 'padStart | padEnd',
            content: []
        },
        {
            type: [, , , 'es6', 'es6'],
            title: 'trim | trimLeft | trimRight| trimStart | trimEnd',
            content: []
        },
        {
            title: 'search',
            content: [
                '同indexOf',
                '返回匹配到的子字符串的起始位置',
                '不存在返回-1'
            ]
        },
        {
            title: 'replace',
            content: [
                '第二个参数为函数，入参为（匹配到的子串，...正则括号匹配到的，偏移量）'
            ]
        },
        {
            type: [, 'es6'],
            title: 'match | matchAll',
            content: [
                'match返回匹配结果数组或者null',
                'matchAll返回匹配到结果及其分组捕获组的迭代器'
            ]
        },
        {
            title: 'localeCompare',
            content: []
        },
        {
            title: 'repeat',
            content: []
        },
        {
            title: 'split',
            content: []
        },
        {
            type: ['rubbit'],
            title: 'subStr | subString',
            content: []
        },
        {
            title: 'toLocaleLowerCase | toLowerCase',
            content: []
        },
        {
            title: 'toLocaleUpperCase | toUpperCase',
            content: []
        },
        {
            title: 'length',
            content: []
        },
        {
            title: 'Symbol.iterator',
            content: [
                '返回迭代器数组'
            ]
        },
    ]
}

export default str;