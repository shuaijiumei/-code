"use strict";
/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */
var passcode = '123';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "123") {
                this._fullName = newName;
            }
            else {
                console.log('error! you can not do it');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var e1 = new Employee();
e1.fullName = 'tby';
if (e1.fullName) {
    console.log(e1.fullName);
}
