<template>
    <div id="index">
        <el-aside :width="isCollapse?'':''">
            <div style="height: 100px;line-height: 100px;color: azure" v-if="!isCollapse">后台管理系统</div>
            <div style="height: 100px;line-height: 100px;color: azure" v-if="isCollapse">see</div>
            <div style="background: #021123;">
                <el-menu
                        :default-active="this.$store.state.defaultActives"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        router
                        @close="handleClose"
                        :collapse="isCollapse"
                        background-color="#021123"
                        unique-opened
                        text-color="#fff"
                        :default-openeds="this.$store.state.defaultOpened"
                        style="border:none"
                        active-text-color="#ffd04b">
                    <menuTree :childMenu="userInfo.showMenuList"></menuTree>
                </el-menu>
            </div>
        </el-aside>
    </div>
</template>

<script>
    import menuTree from './menutree'
    export default {
        name: "index",
        components:{
            menuTree
        },
        data(){
            return{
                userInfo:JSON.parse(this.$common.getStore('userInfo')),
            }
        },
        props:['isCollapse'],
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpens(val){
                console.log(val);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    };
</script>

<style lang="scss">
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    %w100 {
         width: 100%;
     }

    .el-dropdown-link {
        cursor: pointer;
        /*color: #409EFF;*/
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    %h100 {
         height: 100%;
     }
    html, body, #index, .el-container, #asideNav, ul.el-menu {
    @extend %h100;
    }
#index{
    height: 100%;
}
    .nowrap{
        display: flex;
        flex-wrap: nowrap;
    }
    .allFlexBet{
        display: flex;
        justify-content: space-between;
    }
.el-aside {
    background-color: #03152a;
    color: #333;
    text-align: center;
    overflow-y: hidden;
    height: 100%;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}
.nowrap{
    display: flex;
    flex-wrap: nowrap;
}
.allFlexBet{
    display: flex;
    justify-content: space-between;
}
.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>