<template>
<div>
  <h2>我喜欢{{lover}}</h2>
  <p>何欣喜欢我啦</p>
</div>
</template>

<script>
export default {
  name:'Cpn1',
  data(){
    return{
      lover:'何欣'
    }
  }
}
</script>

<style>
h2{
  color: chartreuse;
}
p{
  color: palevioletred;
}

</style>