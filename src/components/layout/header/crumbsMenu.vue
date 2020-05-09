<template>
    <div class="crumbsMenu">
        <transition-group appear tag='div' name="el-zoom-in-top">
            <div class="childMenu transition-box" :class="item.selected?'childMenuBg':'childMenuBgs'" v-for="(item,index) in HistoryList" :key="index" @click="toHref(item.path)">
                {{item.name}}
                <i class="el-icon-error closeButton" v-if="item.path!='/sys/index'" @click.stop="removeChild(item.path)"></i>
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "crumbsMenu",
        data(){
            return{
                HistoryList:this.$store.state.crumbsShowList.list,
                clickState:true,
            }
        },
        methods:{
            toHref(href){
                if (this.$router.history.current.fullPath!=href){
                    this.$router.push(href);
                    this.$store.commit('changeSelected',href);
                }

            },
            removeChild(path){
                let list = this.$store.state.crumbsShowList.list
                this.$store.commit('changeSelected',path);
                    for (let i=0;i<list.length;i++){
                        if (JSON.stringify(list[i]).indexOf(path)!==-1){
                            if (this.$router.history.current.fullPath!=path){
                                console.log('删除非本路由');
                                this.$store.commit('removeShowList',i);
                                this.$store.commit('changeSelected',this.$router.history.current.fullPath);
                            }else{
                                console.log('删除本路由');
                                this.$store.commit('removeShowList',i);
                                this.$store.commit('changeSelected',this.$store.state.crumbsShowList.list[i-1].path);
                                this.$router.push(
                                    this.$store.state.crumbsShowList.list[i-1].path
                                )
                            }
                        }
                    }
            }
        }
    };
</script>

<style scoped>
    .crumbsMenu{
        display: flex;
        flex-wrap: nowrap;
    }
    .crumbsMenu>div{
        display: flex;
        flex-wrap: nowrap;
    }
.childMenu{

    border-radius: 4px;
    height: 28px;
    /*min-width: 80px;*/
    padding: 0 15px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    margin: 5px;
    transition: all .1s linear;
    cursor: pointer;
}
.childMenuBg{
    background: #a0cfff
}
    .childMenuBgs{
        background: #409eff;
}
.childMenu:hover{
    background: #a0cfff;
}
    .closeButton:hover{
        color: red;
    }
    .transition-box {
        border-radius: 4px;
        /*background-color: #409EFF;*/
        text-align: center;
        color: #fff;
        box-sizing: border-box;
        /*margin-right: 20px;*/
    }
</style>