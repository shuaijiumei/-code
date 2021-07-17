/**
 * Author: TBY on 2021-07-08
 * note 笔记
 * tips 特别注意
 * example 例子
 */

const express = require('express')

let app = express()
const list = [
  {
      "air":"15",
      "air_level":"优",
      "air_tips":"空气很好，可以外出活动，呼吸新鲜空气，拥抱大自然！",
      "pm25":"8",
      "pm25_desc":"优",
      "pm10":"10",
      "pm10_desc":"优",
      "o3":"47",
      "o3_desc":"优",
      "no2":"12",
      "no2_desc":"优",
      "so2":"8",
      "so2_desc":"优",
      "co": "1",
      "co_desc": "优",
      "kouzhao":"无需戴口罩",
      "waichu":"适宜外出",
      "yundong":"适宜运动",
      "kaichuang":"适宜开窗",
      "jinghuaqi":"关闭净化器",
      "cityid":"101271201",
      "city":"内江",
      "cityEn":"neijiang",
      "country":"中国",
      "countryEn":"China"
}

]

app.get('/home',function (req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.send(list)


})
app.listen(9000,function (){
  console.log('server running at 9000')
})