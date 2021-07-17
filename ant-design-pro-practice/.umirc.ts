import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{},
  fastRefresh: {},
  routes:[
    {
      path:'/',
      component:'@/layouts',
      routes: [
        {
          path:'/',
          redirect:'/user'
        },
        {
          path:'/user',
          name:'个人信息',
          icon:'crown',
          component:'@/pages/User'
        },
        {
          path:'/tools',
          component: '@/pages/Tools'
        },
        {
          path: '/newPerson',
          component: '@/pages/NewPerson'
        },
        {
          path:'/Weather',
          component: '@/pages/Weather'
        }
      ]
    }
  ]
});
