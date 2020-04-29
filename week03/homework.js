// 1
function convertNumberToString(number, x = 10) {
    var integer = Math.floor(number)
    var fraction = null
    if (x === 10) fraction = ('' + number).match(/\.\d*/)[0]
    var string = ''
    while (integer > 0) {
        string = integer % x + string
        integer = Math.floor(integer / x)
    }
    return fraction ? string + fraction : string
}
//   2
function convertStringToNumber(string, radix = 10) {
    const rep = /^[0-9]{1,}(\.[0-9]{1,})?$/;
    if (typeof string === "string" && rep.test(string)) {
        if (radix > 10 || radix < 2) {
            return
        }
        let chars = string.split('')
        let number = 0
        let i = 0
        while (i < chars.length && chars[i] != '.') {
            number *= radix
            number += chars[i].codePointAt(0) - '0'.codePointAt(0)
            i++;
        }
        if (chars[i] === '.') {
            i++
        }
        let fraction = 1
        while (i < chars.length) {
            fraction /= radix
            number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction
            i++
        }
        return number;
    }
    return new Error('无法转换')
}
//   3
/* 对象的特殊属性
JS中的对象本质上就是一个若干个无序的键值对组成的集合。每个键值对就是对象的属性或方法。而对象中的每个属性都对应着有属性描述符，属性描述符分为数据描述符和存储描述符。属性描述符又包含了以下几个属性。

数据描述符和存取描述符均具有以下可选键值：

configurable
当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，也能够被删除。默认为 false。 enumerable 当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。 数据描述符同时具有以下可选键值：

value
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。

writable
当且仅当该属性的 writable 为 true 时，该属性才能被赋值运算符改变。默认为 false。 存取描述符同时具有以下可选键值：

get
一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值。默认为 >undefined。

set
一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值>分配给该属性。默认为 undefined。

call
视为函数Function

Construct
可以被new 操作符调用，根据new的规则返回对象。

DefineOwnProperty
callee
视为函数参数对对象，伪数组 caller

GetPrototypeOf
对应getPrototypeOf方法 获取对象原型

SetPrototypeOf
对应setPrototypeOf方法 设置对象原型

GetOwnProperty
getOwnPropertyDescriptor 获取对象私有属性的描述列表

HasProperty
hasOwnProperty 私有属性判断

IsExtensible
isExtensible对象是否可扩展

PreventExtensions
preventExtension控制对象是否可以添加属性

DefineOwnProperty
defineProperty 定义对象属性

Delete
delete 操作符

OwnPropertyKeys
Object.keys() Object.entries() Object.values()

Module
视为一个引入的模块

Exports
视为一个导出的模块 */