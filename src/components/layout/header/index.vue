<template>
    <div class="index">
            <div style="height: 60px;line-height: 60px;border-bottom: 1px solid #ccc;" class="nowrap allFlexBet">
                <div @click="changeisCollapse" style="margin-left: 20px;cursor: pointer;line-height: 69px"><i class="fa fa-bars fa-2x"></i></div>
                <div style="margin-right: 40px" class="nowrap allFlexBet exitButton">
                    <div>
                        <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
                            <i class="fa fa-arrows-alt fa-1.5x" style="cursor: pointer" aria-hidden="true" @click="handleFullScreen"></i>
                        </el-tooltip>
                    </div>
                    <div style="color: #606266">{{userInfo.userRole}}</div>
                    <div>
                        <el-dropdown @command="handleCommand">
                                  <span class="el-dropdown-link" style="color: #606266">
                                    {{userInfo.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                                  </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="a">基本资料</el-dropdown-item>
                                <el-dropdown-item command="b" style="border-bottom: 1px solid rgba(0,0,0,0.1)">修改密码</el-dropdown-item>
                                <el-dropdown-item command="c">退出登陆</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div>
                        <img src="./headers.jpg" style="width: 40px;height: 40px;border-radius: 8px;margin-top: 10px" alt="">
                    </div>
                </div>
            </div>
            <div style="height: 40px;line-height: 40px" class="smallList">
                <crumbsMenu></crumbsMenu>
            </div>
    </div>
</template>

<script>
    import crumbsMenu from './crumbsMenu'
    export default {
        name: "index",
        components:{
            crumbsMenu
        },
        data(){
            return{
                userInfo:JSON.parse(this.$common.getStore('userInfo')),
                fullscreen: false,
            }
        },
        props:['isCollapseo'],
        methods:{
            handleCommand(command) {
                let str = '';
                switch (command) {
                    case 'a':
                        str = '基本资料';
                        break;
                    case 'b':
                        str = '修改密码';
                        break;
                    case 'c':
                        this.exitLogin();
                        break;
                }
                // this.$message(str);
            },
            exitLogin(){
                this.$common.removeStore('loginState')
                this.$router.push('/login')
            },
            changeisCollapse(){
                this.$emit('changeisCollapse')
            },
            handleFullScreen() {
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            },
        }
    };
</script>

<style lang="scss">
    .index{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        >div{
            width: 100%;
        }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    %w100 {
        width: 100%;
    }

    .el-dropdown-link {
        cursor: pointer;
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
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }
    .el-header{
        padding: 0;
    }
    .nowrap{
        display: flex;
        flex-wrap: nowrap;
    }
    .allFlexBet{
        display: flex;
        justify-content: space-between;
    }
</style>