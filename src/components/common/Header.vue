<template>
    <div class="header">
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-row>
                    <el-col :span="4" style="display: flex">
                        <span style="font-size:18px;">
                            后台管理系统
                        </span>
                        <div v-model="isCollapse" style="display: inline-block;">
                            <span @click="CollapseChange" class="CollapseChange">
                                <i class="el-icon-s-fold"></i>
                            </span>
                        </div>
                    </el-col>
                    <el-col :span="16" >
                        <ul class="header-msg">
                            <li>设备总数:2</li>
                            <li>在线数:2</li>
                            <li>离线数:0</li>
                            <li>禁用数:0</li>
                            <li>故障数:0</li>
                            <li>缺货设备数:1</li>
                            <li>未启用设备数:0</li>
                        </ul>
                    </el-col>
                    <el-col :span="4">
                        <ul class="header-right">
                            <li><i class="el-icon-message-solid" style="font-size:24px;color:#F56C6C;padding-top:18px;"></i></li>
                            <li>
                                <el-dropdown trigger="click" @command="handleCommand">
                                    <div style="display: flex;">
                                        <img src="../../../public/21351124.jpeg">
                                        <span>用户名：root</span>
                                    </div>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item command="loginout">退出</el-dropdown-item>
                                        <el-dropdown-item command="chakan">查看</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </el-header>
        </el-container>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        components: {

        },
        data() {
            return {
                isCollapse:false,
                username:'',
            };
        },
        created(){
            this.getLogin();
            this.getData();
        },
        methods: {
            CollapseChange(){
                if(this.isCollapse){
                    this.isCollapse = false;
                    this.$store.commit('newIsCollapse',this.isCollapse);
                }else{
                    this.isCollapse = true;
                    this.$store.commit('newIsCollapse',this.isCollapse);
                }
            },
            handleCommand(command){
                //console.log(command)
            },
            getLogin(){
                this.http.post(this.Api.login,{
                    password:'root',
                    username:'root'
                }).then(response =>{
                    this.username = response.data.data.username;
                    console.log(this.username);
                }).catch(function (error) {
                    console.log(error);
                });
            },
            getData(){
                this.http.get(this.Api.statisticsDeviceCount,{}).then(response =>{
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        computed: {

        }
    }

</script>
<style scoped>
    .CollapseChange{
        display:inline-block;
        width:60px;
        height:60px;
        text-align:center;
        font-size:24px;
    }
    .CollapseChange>i{
        cursor: pointer;
        margin-left:22px;
    }
    .header-msg,.header-right{
        overflow: hidden;
        padding-left:20px;
    }
    .header-msg li{
        float: left;
        padding:0px 8px;
        font-size:14px;
        margin-top:18px;
    }
    .header-right li{
        float:left;
        padding:0px 8px;
        font-size:14px;
    }
    .header-right li:nth-child(2){
        max-height:60px;
        padding-top:5px;
    }
    .el-dropdown{
        height:54px;
        display: flex;
    }
    .el-dropdown span{
        margin-left:10px;
        cursor: pointer;
    }
    .header-right li:nth-child(2) img{
        width:50px;
        height:50px;
        border-radius: 50%;
        cursor: pointer;
    }
</style>
