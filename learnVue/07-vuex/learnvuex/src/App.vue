<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.count}}</h2>
    <button @click="plus">+</button>
    <button @click="down">-</button>
    <tby/>
  </div>
</template>

<script>

import Tby from './components/Tby.vue';

export default {
  name: 'App',
  components:{
    Tby
  },
  data(){
    return{
      message:'app 组件',
      count:0
    }
  },
  methods:{
    plus:function(){
      this.count++;
    },
    
    down:function(){
      this.count--;
    }
  }
}
</script>

<style>

</style>
