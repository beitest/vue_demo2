<template>
    <div class="login">
        <div class="box">
            <el-form :model="ruleForm" ref="ruleForm" :rules="rules" status-icon label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="input" v-model="ruleForm.username" autocomplete="off" @keyup.enter.native="login"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" @keyup.enter.native="login"></el-input>
                </el-form-item>

                <div class="remember_psw">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <span>记住密码</span>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="login">登陆</el-button>
                    <p class="forget_psw" @click="dialogFormVisible=true">忘记密码</p>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog title="重置密码申请" :visible.sync="dialogFormVisible" width="35%">
            <el-form ref="form" :model="form" :label-width="'120px'" :rules="rules2">
                <el-form-item label="上级用户名：" prop="bossUsername">
                    <el-input v-model="form.bossUsername" placeholder="请输入上级用户名"/>
                </el-form-item>
                <el-form-item label="用户名：" prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名"/>
                </el-form-item>
                <el-form-item label="真是姓名：" prop="realName">
                    <el-input v-model="form.realName" placeholder="请输入真实姓名"/>
                </el-form-item>

                <el-form-item label="电话号码：" prop="mobile">
                    <el-input v-model="form.mobile" placeholder="请输入电话号码"/>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="opDialogOk">提交申请</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data(){
            return {
                checked:false,
                dialogFormVisible: false,
                form:{},
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
                    ]
                },
                rules2: {
                    bossUsername: [
                        {required: true, message: '请输入上级用户名', trigger: 'blur'},
                    ],
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    realName: [
                        {required: true, message: '请输入真实姓名', trigger: 'blur'},
                    ],
                    mobile: [
                        {required: true, message: '请输入电话号码', trigger: 'blur'},
                    ]
                }
            }
        },
        created(){
            //获取登录用户名、密码
            let loginInfos = JSON.parse(window.localStorage.getItem('loginInfos'));
            if(loginInfos && loginInfos.username && loginInfos.password){
                this.ruleForm.username = loginInfos.username;
                this.ruleForm.password = loginInfos.password;
                this.checked = true;
            }else{
                this.checked = false;
            }
        },
        methods:{
            login(){
                this.$refs['ruleForm'].validate((value) =>{
                    if(value){
                        this.http.post(this.Api.login,this.ruleForm).then(response =>{
                            if(response && response.data.code ==0){
                                if(this.checked){
                                    //保存密码
                                    window.localStorage.setItem('loginInfos', JSON.stringify(this.ruleForm))
                                }else{
                                    window.localStorage.removeItem('loginInfos')
                                }
                                if(this.$route.query.redirect){ //如果存在参数
                                    let redirect = this.$route.query.redirect;
                                    this.$router.push(redirect);//则跳转至进入登录页前的路由
                                }else{
                                    this.$router.push('/Home');//否则跳转至首页
                                }
                                window.localStorage.setItem('userInfos', JSON.stringify(response.data.data));
                            }else{
                                this.$router.push('/login')
                            }
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }
                })
            },
            opDialogOk(){

            }
        }
    }
</script>

<style scoped>
        .login{
            width: 100%;
            height: 100%;
            position: relative;
            top: 0;
            left: 0;
            background: url("../../assets/img/bg2.jpeg") no-repeat;
            background-size: cover;
        }
        .box{
            border: 1px solid #ccc;
            background-color: #fff;
            padding: 20px;
            width: 300px;
            height: 300px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin:auto;
        }



</style>