import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import login from '../views/sys/login/login'
import common from '../api/common'
import vuex from '../vuex/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import index from '../views/sys/index/index'

import layout from '@/views/sys/index' // 主页默认展示
const auth = ()=> import('@/views/auth_management/auth_list'); //权限
const menu = ()=> import('@/views/menu_management/menu_list'); //菜单
const user = ()=> import('@/views/user_management/user_list'); //用户
const dict = ()=> import('@/views/dict_management/dict_cont'); //字典
const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'登陆',
            component:login,
            meta: {
                requireAuth: false
            },
        },{
            path:'/index',
            name:'首页',
            component:index,
            meta: {
                requireAuth: true,
                parentPath: []
            },
            children:[
                    {
                        path:'/sys/index',
                        name:'主页',
                        component:layout,
                        meta: {
                            requireAuth: true,
                            parentPath: []
                        }
                    },
                    {
                        path:'/auth_management/auth_list',
                        name:'权限列表',
                        component:auth,
                        meta: {
                            requireAuth: true,
                            parentPath: ['/auth_management']
                        }
                    },{
                        path:'/dict_management/dict_cont',
                        name:'字典控制',
                        component:dict,
                        meta: {
                            requireAuth: true,
                            parentPath: ['/dict_management','/dict_list']
                        }
                    },{
                        path:'/menu_management/menu_list',
                        name:'菜单列表',
                        component:menu,
                        meta: {
                            requireAuth: true,
                            parentPath: ['/menu_management']
                        }
                    },{
                        path:'/user_management/user_list',
                        name:'用户列表',
                        component:user,
                        meta: {
                            requireAuth: true,
                            parentPath: ['/user_management']
                        }
                    },
                ]
        },
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth){
        const state = common.getStore('loginState');
        if (state){
            NProgress.start()
            vuex.commit('changeDefaultOpen',to);
            vuex.dispatch('crumbsShowList',to);
            next()
        }else{
            next({
                path: '/'
            })
        }
    }else{
        if (to.path!='/'){
            next({
                path: '/'
            })
        } else{
            next()
        }
    }

})

router.afterEach(() =>{
    NProgress.done()
})
export default router;