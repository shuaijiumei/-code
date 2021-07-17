// async function newToAsync(){
//   return 'hello, async'
// }
//
// newToAsync().then( res =>{
//   console.log(res)
// })

// function takeSomeTime(){
//   return new Promise(resolve => {
//     setTimeout(()=>{
//       console.log('hello async')
//         },1000
//     )
//   })
// }
//
// async function test(){
//   const asy = await takeSomeTime()
//   console.log(asy)
// }
// test()

// tips attention

function takeSomeTime(n){
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(n+200)
    },n)
  })
}
function step1 (n){
  console.log(`step1 with ${n}`)
  return takeSomeTime(n)
}
function step2 (n){
  console.log(`step2 with ${n}`)
  return takeSomeTime(n)
}
function step3 (n){
  console.log(`step3 with ${n}`)
  return takeSomeTime(n)
}

// here promise
function doItP(){
  console.time('doIt')
  const time1 = 300
  step1(time1)
      .then(time2 => step2(time2))
      .then(time3 => step3(time3))
      .then(res=>{
        console.log(`result is ${res}`)
        console.timeEnd('doIt')
      })
}
// doItP()

// here async

async function doItA(){
  console.time('doItA')
  const time1 = 300
  const time2 = await step1(time1)
  const time3 = await step2(time2)
  let res = await step3(time3)
  console.log(`result is ${res}`)
  console.timeEnd('doItA')
}

// doItA()

// here throw error

function throwError(){
  setTimeout(()=>{
    return new Error('error here')
  },1000)
}
async function show(){
  try{
    const msg = await throwError()
    console.log(msg)
  }catch (e){
    console.log(e)
  }
}


