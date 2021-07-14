async function newToAsync(){
  return 'hello, async'
}

newToAsync().then( res =>{
  console.log(res)
})