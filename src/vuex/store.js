import Vue from 'vue'
import Vuex from 'vuex'
import common from '../api/common'

Vue.use(Vuex);
//state相当于Vuex中的集中变量存储仓库 组件中调用这些变量的方式 this.$store.state.属性
const state={
    crumbsShowList:{
        list:[{name:'首页',path:'/sys/index',icon:null,selected:true},]
    },
    crumbs:[
        {
            name:'用户管理',
            path:'/user_management',
            icon:null,
            children:[
                {
                    name:'用户列表',
                    path:'/user_management/user_list',
                    icon:null,
                    children:[]
                }
            ]
        },
        {
            name:'权限管理',
            path:'/auth_management',
            icon:null,
            children:[
                {
                    name:'权限列表',
                    path:'/auth_management/auth_list',
                    icon:null,
                    children:[]
                }
            ]
        },
        {
            name:'菜单管理',
            path:'/menu_management',
            icon:null,
            children:[
                {
                    name:'菜单列表',
                    path:'/menu_management/menu_list',
                    icon:null,
                    children:[]
                }
            ]
        },
        {
            name:'字典管理',
            path:'/dict_management',
            icon:null,
            children:[
                {
                    name:'字典列表',
                    path:'/dict_list',
                    icon:null,
                    children:[{
                        name:'字典控制',
                        path:'/dict_management/dict_cont',
                        icon:null,
                        children:[]
                    }]
                }
            ]
        }
    ], //全权限用户
    consumer:[{
        name:'用户管理',
        path:'/user_management',
        icon:null,
        children:[
            {
                name:'用户列表',
                path:'/user_management/user_list',
                icon:null,
                children:[]
            }
        ]
    },], // 普通用户
    examUser:[
        {
            name:'用户管理',
            path:'/user_management',
            icon:null,
            children:[
                {
                    name:'用户列表',
                    path:'/user_management/user_list',
                    icon:null,
                    children:[]
                }
            ]
        },
        {
            name:'字典管理',
            path:'/dict_management',
            icon:null,
            children:[
                {
                    name:'字典列表',
                    path:'/dict_list',
                    icon:null,
                    children:[{
                        name:'字典控制',
                        path:'/dict_management/dict_cont',
                        icon:null,
                        children:[]
                    }]
                }
            ]
        }
    ], // 查阅权限用户
    loginState:false,
    defaultOpened:[],
    defaultActives:''
};

//mutations 是Vuex中更改集中变量仓库中变量的唯一方法
//注意，如果想要在mutations中改变state的变量，必须传带参数state 作为上下文的形式使用
//调用方式 this.$store.commit('方法名',传递的变量)
const mutations={
    changeDefaultOpen(state,val){
        let valus = val.meta.parentPath
        state.defaultActives = valus.length>0?val.path:state.defaultActives = '2';
        state.defaultOpened = valus
    },
    userLogin(state,val) {
        let data = {}
        switch (val.username) {
            case 'admin':
                data.showMenuList = state.crumbs;
                data.userRole = '超级管理员';
                data.userName = '尼古拉斯·赵四';
                break;
            case 'consumer':
                data.showMenuList = state.consumer;
                data.userRole = '普通用户';
                data.userName = '尼古拉斯·小怪兽';
                break;
            case 'examuser':
                data.showMenuList = state.examUser;
                data.userRole = '查阅权限用户';
                data.userName = '尼古拉斯·奥特曼';
                break;
        }
        common.setStore('userInfo',data)
    },
    crumbsShowList(state,val){
        state.crumbsShowList.list.map(item=>{
            item.selected = false
        })
        state.crumbsShowList.list.push(val)
    },
    removeShowList(state,val){
        console.log('移除按钮');
        state.crumbsShowList.list.splice(val,1);
    },
    changeSelected(state,path){
        let list = state.crumbsShowList.list;
        for (let i=0;i<list.length;i++){
            if (JSON.stringify(list[i]).indexOf(path)!==-1){
                list[i].selected = true
            }else{
                list[i].selected = false
            }
        }
    }
}
//允许在actions中异步调用mutations的方法改变state的变量
//已context作为上下文带动变量，拿取state方法为context.state
//组件中调用方式为 this.$store.dispatch('mutations中方法名',变量)

const actions = {
    userLogin(context,val){
        context.commit('userLogin',val)
    },
    crumbsShowList(context,val){
        if (JSON.stringify(context.state.crumbsShowList).indexOf(val.path)===-1) {
            let dot = {name:val.name,path:val.path,icon:null,selected:true};
            context.commit('crumbsShowList',dot)
        }else{
            context.commit('changeSelected',val.path)
        }
    },
}
//Vuex中的计算属性
const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})