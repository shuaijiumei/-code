import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

//实现路由懒加载
const home = () =>
    import ('../components/Home.vue')
const about = () =>
    import ('../components/About.vue')
const User = () =>
    import ('../components/User.vue')


//1.注入插件
Vue.use(Router)

// //2.定义路由
// const routes = [{
//     path: '',
//     component: home,
//     children: [{}]
// }]

// //3.创建router实例
// const router = new VueRouter({
//     routes
// })

// //4.导出router实例
// export default router



export default new Router({
    routes: [

        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home,
            children: [{
                    path: '/',
                    component: () =>
                        import ('../components/HomeNews.vue')

                },
                {
                    path: 'news',
                    component: () =>
                        import ('../components/HomeNews.vue')

                },
                {
                    path: 'message',
                    component: () =>
                        import ('../components/HomeMessage.vue')

                }
            ]
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/user/:userId',
            component: User
        },
        {
            path: '/profile',
            component: () =>
                import ('../components/Profile.vue')
        },

    ],
    mode: 'history',
    linkActiveClass: 'active'
})