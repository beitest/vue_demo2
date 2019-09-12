<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import bus from '../../assets/js/bus.js';
    export default {
        data(){
            return {
                collapse: false
            }
        },
        components:{
            vHead, vSidebar
        },
        created(){
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })

            // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
            // bus.$on('tags', msg => {
            //     let arr = [];
            //     for(let i = 0, len = msg.length; i < len; i ++){
            //         msg[i].name && arr.push(msg[i].name);
            //     }
            //     this.tagsList = arr;
            // })
        }
    }
</script>
<style>
    /*设置新增广告页右侧偏移  start*/
    .ad-add-container .el-form-item__content,.ad-add-container .el-form-item__error{
        padding-left:30px;
    }
    /*设置新增广告页选择上传视频按钮右侧偏移  end*/
    .ad-add .el-upload--text{
        border:none;
        height:auto;
        text-align: left;
    }
    /*全局设置弹框header底部一像素*/
    .el-dialog__header{
        border-bottom: 1px solid #dddddd;
    }

</style>
