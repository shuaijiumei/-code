/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */

let passcode = '123'

class Employee {
    protected _fullName!: string

    get fullName():string{
        return this._fullName
    }

    set fullName(newName:string){
        if (passcode && passcode == "123"){
            this._fullName = newName
        }
        else {
            console.log('error! you can not do it')
        }
    }
}

let e1 = new Employee()
e1.fullName = 'tby'
if (e1.fullName){
    console.log(e1.fullName)
}