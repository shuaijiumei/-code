/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */


function printLabel(labelledObj:{label:string}){  // note
    console.log(labelledObj.label)
}
// printLabel({label:'lover hx'})

interface LabelledObj{
    label:string
}

function printLabelUseInterface(obj:LabelledObj){
    console.log(obj.label)
}

interface sayHello{
    name:string,
    age?:number
}
function sayHello(person:sayHello){
    console.log(person.name+'hello'+person.age? '':'hi'+person.age)
}
sayHello({name:'tby'})
