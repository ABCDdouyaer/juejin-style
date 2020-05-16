/*
 * @Author: Jiraiya
 * @Date: 2020-05-15 16:28:41
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 19:26:08
 * @Description: 
 */ 
const fun = {

    tag: 'Function',
    static: [{
            title: 'arguments',
            content: [],
        },
        {
            title: 'caller | length',
            content: [
                '返回调用该函数的函数',
                '返回函数形参个数',
            ],
        },
        {
            title: 'length',
            content: [
                '返回调用该函数的函数'
            ],
        },
        {
            title: 'name',
            content: [
                'foo: 普通函数 | 推断函数',
                'anonymous: 构造函数',
                'bound foo | set foo | get foo : bind | set | get',
                'logs Foo: class'
            ],
        },
    ],

    pro: [{
            title: 'apply',
            content: [],
        },
        {
            title: 'bind',
            content: [],
        },
        {
            type: ['es6'],
            title: 'toString',
            content: [
                'toString()方法返回函数代码本身，以前会省略注释和空格。'
            ],
        },
    ]
}

export default fun;