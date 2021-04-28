<template>
  <div>
  <h2 class="title">
    {{message}}
  </h2>
  <button @click="btn1">按钮</button>
  <cpn-1></cpn-1>
  </div>
</template>

<script>
import Cpn1 from './Cpn1.vue';

export default {
  name:'App',
  components:{
    Cpn1
  },
 data() {
    return {
       message: 'i love hx'
      }
    },
    methods: {
        btn1() {
            console.log('hello');
        }
    }
}
</script>

<style>
.title{
  color: darkgrey;
}

</style>