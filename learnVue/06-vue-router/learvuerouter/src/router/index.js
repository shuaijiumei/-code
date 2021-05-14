import Vue from 'vue'
import Router from 'vue-router'

//实现路由懒加载
const home = () =>
    import ('../components/Home.vue')
const about = () =>
    import ('../components/About.vue')
const User = () =>
    import ('../components/User.vue')

Vue.use(Router)



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