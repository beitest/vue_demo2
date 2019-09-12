<template>
    <div class="header" :style="'background:'+bgColor">
        <div class="logo">水媒机管理系统</div>
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i :class="collapseIcon"></i>
        </div>
        <div class="select-theme" style="float:left;margin-left:30px;">
            <el-dropdown trigger="click" placement="bottom" @command="themeCommand" style="cursor: pointer">
                <i style="color:pink;font-size:20px;" class="iconfont-shui icon-shui-zhuti"></i>
                <el-dropdown-menu slot="dropdown" style="margin-top:-10px;">
                    <el-dropdown-item command="theme1" class="theme-item theme-item1"></el-dropdown-item>
                    <el-dropdown-item command="theme2" class="theme-item theme-item2"></el-dropdown-item>
                    <div>
                        <el-dropdown-item command="theme3" class="theme-item theme-item3"></el-dropdown-item>
                        <el-dropdown-item command="theme4" class="theme-item theme-item4"></el-dropdown-item>
                    </div>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="user-info" >
            <el-dropdown trigger="click" @command="handleCommand" style="cursor: pointer">
            <span class="el-dropdown-link">
              <div>
                   <img class="header_img" :src="loginData.headImgUrl"/>
                       <span >用户名：{{loginData.username}}</span>
              </div>

                    </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                    <!--<el-dropdown-item command="reset_pw">修改密码</el-dropdown-item>-->
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <!--<div class="bellBox">
            <i class="el-icon-bell"></i>
            <span v-if="showBellHint" class="bell_hint">&nbsp;</span>
        </div>-->
    </div>
</template>
<script>
    import bus from '../../assets/js/bus.js';
    export default {
        data() {
            return {
                collapseIcon:'el-icon-s-fold',
                bgColor:'#324157',
                outVisible:false,
                showBellHint: false,
                collapse: false,
                loginData:{},
                data: {
                    exceptionCount: 0,
                    forbiddenCount: 0,
                    onlineCount: 0,
                    outStoreCount: 0,
                    totoalCount: 0,
                    unOnlineCount: 0,
                    unactiveCount: 0
                }
            }
        },
        created(){
            this.loginData = JSON.parse(localStorage.getItem('loginData'));
        },
        computed:{

        },
        methods: {
            // 侧边栏折叠
            collapseChage(){
                if(!this.collapse){
                    this.collapseIcon = 'el-icon-s-unfold';
                }else{
                    this.collapseIcon = 'el-icon-s-fold';
                }
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    this.logout();
                }
            },
            themeCommand(command){
                if(command == 'theme1'){
                    this.bgColor = '#1673a7';
                }else if(command == 'theme2'){
                    this.bgColor = '#324157';
                }else if(command == 'theme3'){
                    this.bgColor = '#222222';
                }else if(command == 'theme4'){
                    this.bgColor = '#6a4a22';
                }
                bus.$emit('bgColor', this.bgColor);
            },
            logout(){
                this.$confirm('确认要退出登陆吗？')
                    .then(_ => {
                        this.http.get(this.$Api.logout).then(resp=>{
                            if(resp.data.code === 200){
                                localStorage.removeItem('ms_username')
                                this.$router.push('/login');
                            }

                        })
                    })
                    .catch(_ => {

                    });
            },
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size: 22px;
        line-height: 60px;
        color: #fff;
        /*background: #222222;*/
    }
    .collapse-btn{
        float: left;
        margin-left:5px;
        padding: 0 10px;
        cursor: pointer;
        line-height: 60px;
    }

    .logo {
        display: inline-block;
        margin-left: 10px;
        float: left;
    }

    .overview {
        display: inline-block;
        float: right;
        margin-right: 80px;
        margin-top: 20px;
        color: white;
        font-size: 14px;
    }

    .user-info {
        display: inline-block;
        float: right;
        margin-right: 50px;
    }

    .header_img {
        /*margin-right: 10px;*/
        /*margin-top: 10px;*/
        position: absolute;
        top: 2px;
        left: -60px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .el-dropdown {
        color: white;
    }

    .bellBox {
        position: relative;
        float: right;
        margin-right: 80px;
        cursor: pointer;
    }

    .bell_hint {
        position: absolute;
        width: 10px;
        height: 10px;
        background: red;
        border-radius: 50%;
        right: 0;
        top: 20px;
    }
    .theme-item{
        display: inline-block;
        padding:0px;
        margin:0px 5px;
        width:50px;
        height:36px;
    }
    .theme-item.theme-item1{
        background: #2a88bd;
    }
    .theme-item.theme-item2{
        background: #324157;
    }
    .theme-item.theme-item3{
        background: #222222;
    }
    .theme-item.theme-item4{
        background: #6a4a22;
    }

</style>
