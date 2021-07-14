/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */

interface Person{
    color ?:string;
    width ?:number
}

function createPerson(config:Person){
    let c = config.color ? config.color:'tby'
    let w = config.width ? config.width:'200'
    console.log(c)
    console.log(w)
}
createPerson({clolo:'red',width:200})