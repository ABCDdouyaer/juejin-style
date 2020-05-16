/*
 * @Author: Jiraiya
 * @Date: 2020-05-15 16:31:03
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 19:27:03
 * @Description: 
 */ 
const sym = {
    tag: 'Symbol',
    es6: true,
    static: [
        {
            title: 'asyncIterator',
            content: [
                '异步迭代对象调用的方法',
                'for await ...of'
            ]
        },
        {
            title: 'hasInstance',
            content: [
                'instanceof 调用的内部方法',
            ]
        },
        {
            title: 'isConcatSpreadable',
            content: [
                '控制数组的concat方法是否展开',
            ]
        },
        {
            title: 'iterator',
            content: [
                '为对象定义迭代器方法',
            ]
        },
        {
            title: 'match | matchAll | replace | search | split',
            content: [
                '调用字符串的这些方法，会获取对应内置函数的返回值',
            ]
        },
        {
            title: 'species',
            content: [
                '更改衍生对象的构造器函数',
            ]
        },
        {
            title: 'toPrimitive',
            content: [
                '对象被转为基本类型的时候会获取该方法的返回值，入参number/string/default',
            ]
        },
        {
            title: 'toStringTag',
            content: [
                '指定Object.prototype.toString的返回值第二个内容 [object Array]',
            ]
        },
        {
            title: 'unscopables',
            content: [
                '指向一个对象，该对象的属性里包含被with排除的属性',
            ]
        },
        {
            title: 'for',
            content: [
                '有key直接用没有则注册表创建',
            ]
        },
        {
            title: 'keyFor',
            content: [
                '返回Symbol的key',
            ]
        },
    ],
    pro: [
        {
            title: 'description',
            content: [
                '同keyFor'
            ]
        },
        {
            title: 'toString',
            content: [
                `Symbol('key')`
            ]
        },
        {
            title: 'valueOf',
            content: [
            ]
        },
        {
            title: 'toPrimitive',
            content: [
            ]
        }
    ]
}

export default sym;