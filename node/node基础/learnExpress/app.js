/**
 * Author: TBY on 2021-07-08
 * note 笔记
 * tips 特别注意
 * example 例子
 */

let express = require('express')

const app = express()

app.get('/',function (req,res){
  res.sendFile('C:\\Users\\74051\\Desktop\\-code\\node\\node基础\\learnExpress\\homePage.html')
  res.status(200)
})

let server = app.listen(8081,function (){
  let host = server.address().address
  let port = server.address().port

  console.log(`app running at ${host} : ${port}`)
})
