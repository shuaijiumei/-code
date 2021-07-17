/**
 * Author: TBY on 2021-07-06
 * note 笔记
 * tips 特别注意
 * example 例子
 */
import {defineConfig} from "umi";

export default defineConfig({
  routes:[
    {
      path:'/',exact:true,component:'@/pages/index'
    },
    {
    path:'/home',exact:true,component:'@/pages/Home'
    },
    {
      path:'/profile',exact:true,component:'@/pages/Profile'
    },
    {
      path:'/articles',exact:true,component:'@/pages/Articles'
    }
  ],
  dva:{
    immer:true,
    hmr:false
  }
})
