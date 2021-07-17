"use strict";
/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
function printLabelUseInterface(obj) {
    console.log(obj.label);
}
function sayHello(person) {
    console.log(person.name + 'hello' + person.age ? '' : 'hi' + person.age);
}
sayHello({ name: 'tby' });
