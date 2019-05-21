<template>
    <div class="bodyBox">
        <el-container>
            <el-header>
                <v-head></v-head>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <v-sidebar></v-sidebar>
                </el-aside>
                <el-container>
                    <transition name="move" mode="out-in">
                        <router-view></router-view>
                    </transition>
                    <!--<el-footer>Footer</el-footer>-->
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';

    export default {
        components:{
            vHead,
            vSidebar
        }
    }
</script>

<style>
    .bodyBox{
        width:100%;
        height:100%;
    }
    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: left;
        line-height: 60px;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: left;
        height:100%;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        height:100%;
    }
    .bodyBox>.el-container.is-vertical{
        height:100%;
    }
</style>
