<template>
  <div>
    <h2>我是首页</h2>
    <p>我是内容</p>
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/message">message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Home'
}
</script>

<style>

</style>