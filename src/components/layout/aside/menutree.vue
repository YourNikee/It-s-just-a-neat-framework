<template>
    <fragment>
        <template v-for="(item,index) in childMenu">
            <el-submenu :index="item.path" v-if="item.children.length>0">
                <template slot="title">
                    <i class="fa fa-1.5x" style="margin-right: 5px" :class="item.icon!=null?item.icon:'fa-bars'"></i>
                    <span>{{item.name}}</span>
                </template>
                <menutree :childMenu="item.children"></menutree>
            </el-submenu>
            <el-menu-item v-else :index="item.path">
                <template slot="title">
                    <i class="fa fa-1.5x" style="margin-right: 5px" :class="item.icon!=null?item.icon:'fa-bars'"></i>
                    <span>{{item.name}}</span>
                </template>
            </el-menu-item>
        </template>
    </fragment>
</template>

<script>
    import menutree from './menutree'
    export default {
        name: "menutree",
        components:{
            menutree: menutree
        },
        props:['childMenu']
    };
</script>

<style scoped>

</style>