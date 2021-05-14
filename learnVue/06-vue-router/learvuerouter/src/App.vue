<template>
  <div id="app">
    <router-link to="/home" tag="button" >首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link  v-bind:to="'/user/'+ userId " >用户</router-link>
    <button @click="profileClick" >档案</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'shuaijiumei',
    }
  },
  methods:{
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'hx',
        tel:123431
        }
      })
    },
  }

}
</script>

<style>
.active{
  color: brown;
  outline: none;
  text-decoration: none;
}

</style>
