/*
 * @Author: Jiraiya
 * @Date: 2020-05-15 16:28:28
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 19:26:28
 * @Description: 
 */ 
const obj = {
    tag: 'Object',
    static: [{
            type: ['es6'],
            title: 'assign',
            content: []
        },
        {
            type: ['es6'],
            title: 'is',
            content: ['修正NaN和±0']
        },
        {
            title: 'create',
            content: ['create(proto[, propertiesObject])']
        },
        {
            title: 'defineProperty | defineProperties',
            content: ['configurable | enumerable | value | writable | get | set']
        },
        {
            type: ['es6', 'es6', 'es6'],
            title: 'entries | values | keys',
            content: []
        },
        {
            type: ['es6'],
            title: 'fromEntries',
            content: ['Map或者二维数组转对象']
        },
        {
            title: 'freeze | isFrozen',
            content: [
                '已冻结的对象不能添加新属性',
                '不能删除已有属性',
                '不能修改已有属性的可枚举/可配置性/可写性/值',
                '原型也不能修改'
            ]
        },
        {
            title: 'seal | isSealed',
            content: [
                '封存对象，阻止添加新属性',
                '将现有所有属性标记为不可配置',
                '当前的值之前如果可写就可以改变'
            ]
        },
        {
            title: 'preventExtensions | isExtensible',
            content: ['对象不可扩展，永远不能再添加新属性']
        },
        {
            type: ['es6', 'es6'],
            title: 'getOwnPropertyDescriptor | getOwnPropertyDescriptors',
            content: ['返回对象自有属性的属性描述符']
        },
        {
            title: 'getOwnPropertyNames',
            content: [
                '返回自身属性包括不可枚举属性组成的数组',
                '不包括Symbol属性'
            ]
        },
        {
            type: ['es6'],
            title: 'getOwnPropertySymbols',
            content: [
                '只返回自身所有Symbol属性组成的数组'
            ]
        },
        {
            type: ['es6', 'es6'],
            title: 'getPrototypeOf | setPrototypeOf',
            content: []
        },
        {
            title: 'prototype',
            content: []
        },
    ],
    pro: [{
            title: '__proto__',
            content: []
        },
        {
            title: 'valueOf',
            content: []
        },
        {
            title: 'constructor',
            content: []
        },
        {
            type: ['rubbit', 'rubbit'],
            title: '__defineGetter__ | __defineSetter__',
            content: [
                'obj.__defineGetter__(prop, func)',
                '当对象的属性被读写时，后面的函数会被调用',
                '函数上下文为该对象'
            ]
        },
        {
            type: ['rubbit', 'rubbit'],
            title: '__lookupGetter__ | __lookupSetter__',
            content: [
                'obj.__lookupGetter__(sprop)',
                '返回对象某个属性的访问器函数'
            ]
        },
        {
            title: 'hasOwnProperty',
            content: []
        },
        {
            title: 'isPrototypeOf',
            content: [
                '测试一个对象是否存在于另一个对象的原型链上',
                '区别于instanceof,object 的原型链是针对 AFunction.prototype 进行检查的，而不是针对 AFunction 本身'
            ]
        },
        {
            title: 'propertyIsEnumerable',
            content: []
        },
        {
            title: 'toLocaleString | toString',
            content: [
                '返回对象字符串[object object]'
            ]
        },
    ]
}

export default obj;