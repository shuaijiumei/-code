/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */

interface CompFunc{
    (source:string,subString:string):boolean
}
let myComp :CompFunc = function (src,sub):boolean{
    return src.length>sub.length
}
console.log(myComp('21312','13412341'))