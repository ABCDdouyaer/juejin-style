/*
 * @Author: Jiraiya
 * @Date: 2020-05-15 16:28:55
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 19:26:46
 * @Description: 
 */ 
const proxy_reflect = {
    tag: 'Proxy | Reflect',
    es6: true,
    static: [
        {
            title: 'apply',
            content: [
                'Reflect.apply(target, thisArgument, argumentsList)',
                'new Proxy(target, {apply(target, object, args){}})',
                '函数，this, 参数'
            ]
        },
        {
            title: 'constructor',
            content: [
                'Reflect.construct(target, argumentsList[, newTarget])',
                'new Proxy(target, {construct(target, args){}})',
                '构造函数，参数, 调用构造函数的this'
            ]
        },
        {
            title: 'defineProperty',
            content: [
                'Reflect.defineProperty(target, propertyKey, attributes)',
                'new Proxy(target, {defineProperty(target, propKey, propDesc){}})',
                '对象，属性, 属性描述符'
            ]
        },
        {
            title: 'deleteProperty',
            content: [
                'Reflect.deleteProperty(target, propertyKey)',
                'new Proxy(target, {deleteProperty(target, propKey){}})',
                '，返回bool表示是否成功',
            ]
        },
        {
            title: 'get',
            content: [
                'Reflect.get(target, propertyKey[, receiver])',
                'new Proxy(target, {get(target, propKey, receiver){}})',
                '对象，属性，调用的this',
                '获取对象的属性值，'
            ]
        },
        {
            title: 'set',
            content: [
                'Reflect.set(target, propertyKey, value[, receiver])',
                'new Proxy(target, {set(target, propKey, value, receiver){}})',
                '设置对象的属性值，返回bool表示是否成功'
            ]
        },
        {
            title: 'has',
            content: [
                'Reflect.has(target, propertyKey)',
                'new Proxy(target, {has(target, propKey){}})',
                '同in操作符'
            ]
        },
        {
            title: 'getOwnPropertyDescriptor',
            content: [
                'Reflect.getOwnPropertyDescriptor(target, propertyKey)',
                'new Proxy(target, { getOwnPropertyDescriptor(target, propKey){}})',
            ]
        },
        {
            title: 'getPropertyOf',
            content: [
                'Reflect.getPrototypeOf(target)',
                'new Proxy(target, { getPrototypeOf(target){}})',
            ]
        },
        {
            title: 'setPrototypeOf',
            content: [
                'Reflect.setPrototypeOf(target, prototype)',
                'new Proxy(target, { setPrototypeOf(target, proto){}})',
                '返回bool表示是否设置成功'
            ]
        },
        {
            title: 'isExtensible',
            content: [
                'Reflect.isExtensible(target)',
                'new Proxy(target, { isExtensible(target){}})',
                '返回bool'
            ]
        },
        {
            title: 'preventExtensions',
            content: [
                'Reflect.preventExtensions(target)',
                'new Proxy(target, { preventExtensions(target){}})',
                '返回bool表示是否阻止成功'
            ]
        },
        {
            title: 'ownKeys',
            content: [
                'Reflect.ownKeys(target)',
                'new Proxy(target, { ownKeys(target){}})',
                '等同于Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbol'
            ]
        },
    ]
}

export default proxy_reflect;