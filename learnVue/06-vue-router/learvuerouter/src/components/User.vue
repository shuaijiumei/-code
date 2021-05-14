<template>
  <div>
    <h2>我是用户详细信息</h2>
    <p>{{ userId }}</p>
  </div>
</template>

<script>
export default {
  name:'User',
    computed:{
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style>

</style>