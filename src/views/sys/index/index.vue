<template>
    <div id="index">
        <el-container>
            <asideNav :isCollapse="isCollapse"></asideNav>
            <el-container>
                <el-header height="100px">
                    <headerTop :isCollapse="isCollapse" @changeisCollapse="changeisCollapse"></headerTop>
                </el-header>
                <el-main>
                        <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    import asideNav from '../../../components/layout/aside'
    import headerTop from '../../../components/layout/header'
    export default {
        name: "index",
        data(){
            return{
                userInfo:JSON.parse(this.$common.getStore('userInfo')),
                isCollapse:false,
            }
        },
        components:{
            asideNav,
            headerTop
        },
        created(){
            this.$router.push('/sys/index')
        },
        methods: {
            changeisCollapse(){
                this.isCollapse = !this.isCollapse
            }
        }
    };
</script>

<style  lang="scss">
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
    *{padding: 0;margin: 0}
    .el-aside {
        background-color: #03152a;
        color: #333;
        text-align: center;
        overflow-y: hidden;
    }
    .exitButton{
        >div{
            margin-right: 30px;
        }
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }
    .el-header{
        padding: 0;
        /*>div{*/
            /*display: flex;*/
            /*flex-wrap: nowrap;*/
        /*}*/
    }
    body > .el-container {
        /*margin-bottom: 40px;*/
        width: 100%;
        display: flex;
        flex-wrap: wrap;
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