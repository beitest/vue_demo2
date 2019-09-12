<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入账号">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="verifyCode">
                    <el-input type="input" style="width:59%;float: left;" placeholder="短信验证码" v-model="ruleForm.verifyCode" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-message"></el-button>
                    </el-input>
                    <el-button :disabled="time!=60" style="float: right;" type="primary" @click="getVerifyCodeByUserName">{{btnName}}</el-button>
                </el-form-item>
                <el-form-item>
                    <el-row>
                        <el-col :span="12">
                            <el-checkbox v-model="checked">记住密码</el-checkbox>
                        </el-col>
                        <el-col :span="12" style="text-align: right;">
                            <a href="javascript:;" @click="ForgetPassword">忘记密码?</a>
                        </el-col>
                    </el-row>
                </el-form-item>

                <div class="login-btn">
                    <el-button type="primary" @click="login('ruleForm')">登录</el-button>
                </div>
            </el-form>

            <!--修改密码-->
            <el-dialog title="修改密码" :visible.sync="resetDialog" width="35%">
                <el-form ref="resetForm" :model="resetForm" :label-width="'120px'" :rules="rules2">
                    <el-form-item label="手机号码：" prop="phoneNum">
                        <el-input v-model="resetForm.phoneNum" placeholder="请输入电话号码"/>
                    </el-form-item>
                    <el-form-item label="验证码：" prop="verifyCode">
                        <el-input v-model="resetForm.verifyCode" placeholder="请输入验证码" style="width: 60% !important;"/>
                        <el-button :disabled="time!=60" type="primary" @click="getVerifyCode">{{btnName}}
                        </el-button>

                    </el-form-item>
                    <el-form-item label="新密码：" prop="newPassword">
                        <el-input v-model="resetForm.newPassword" placeholder="请输入新密码"/>
                    </el-form-item>


                </el-form>
                <div class="dialog-footer">
                    <el-button @click="resetDialog = false">取 消</el-button>
                    <el-button type="primary" @click="resetOK">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data: function(){
            let checkPhone = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('手机号不能为空'));
                } else {
                    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                    if (reg.test(value)) {
                        callback();
                    } else {
                        return callback(new Error('请输入正确的手机号'));
                    }
                }
            };
            return {
                checked:false,
                resetDialog:false,
                time:60,
                btnName:'获取验证码',
                ruleForm: {
                    username: '',
                    password: '',
                    verifyCode:''
                },
                resetForm:{
                    phoneNum:'',
                    verifyCode:'',
                    newPassword:'',
                },
                rules: {
                    username: [
                        { required: true, message: '账号不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    verifyCode: [
                        { required: true, message: '短信验证码不能为空', trigger: 'blur' }
                    ],
                },
                rules2: {
                    phoneNum: [
                        { required: true, validator: checkPhone, trigger: 'blur' },
                    ],
                    verifyCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                    newPassword: [
                        { required: true, message: '请输入新密码', trigger: 'blur' }
                    ]
                }

            }
        },
        created(){
            //获取用户名、密码
            let loginData = JSON.parse(window.localStorage.getItem('loginData'));
            if (loginData != undefined && loginData != "" && loginData != null) {
                if (loginData.username != undefined && loginData.username != "" && loginData.username != null) {
                    this.ruleForm.username = loginData.username;
                }
                if (loginData.password != undefined && loginData.password != "" && loginData.username != null) {
                    this.ruleForm.password = loginData.password;
                }
            }
        },
        methods: {
            login(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {//校验表单通过
                        let obj = {
                            username: this.ruleForm.username,
                            password: this.ruleForm.password,
                            verifyCode:this.ruleForm.verifyCode
                            /*params: {
                                username: this.ruleForm.username,
                                password: this.ruleForm.password,
                                verifyCode:this.ruleForm.verifyCode
                            }*/
                        };
                        this.http.get(this.$Api.login, obj).then(response => {
                            if (response.data.code === 200) {
                                console.log(response.data.content)
                                if (this.checked) {
                                    //保存密码
                                    window.localStorage.setItem('loginData', JSON.stringify(this.ruleForm));
                                } else {
                                    window.localStorage.removeItem('loginData');
                                }
                                //登陆成功后的数据用localStorage存，全局可获取
                                window.localStorage.setItem('loginData', JSON.stringify(response.data.content));
                                this.$router.push({path: 'dashboard'})
                            }

                        });
                    }
                });
            },
            ForgetPassword(){
                this.resetDialog = true;
                this.btnName = "获取验证码";
                this.time = 60;
            },
            resetOK(){
                this.$refs['resetForm'].validate((valid) => {
                    if (valid) {//校验表单通过
                        let obj = {
                            params: this.resetForm
                        }
                        this.http.get(this.$Api.resetPassword, this.resetForm).then(response => {
                            console.log(response.data)
                            if (response.data.code === 200) {
                                this.resetDialog = false;
                                this.$message({
                                    type: 'success',
                                    message: '修改成功!'
                                });
                            }
                        }).catch(error => {

                        });
                    }
                });
            },
            getVerifyCode() {//忘记密码获取验证码
                if (this.resetForm.phoneNum == undefined || this.resetForm.phoneNum == '') {
                    this.$message({
                        type: 'error',
                        message: '请先填写手机号码!',

                    });
                    return
                }
                let obj = {
                    phoneNum: this.resetForm.phoneNum
                    /*params: {
                        phoneNum: this.resetForm.phoneNum
                    }*/
                };
                this.http.get(this.$Api.getVerifyCode, obj).then(response => {
                    if (response.data.code === 200) {
                        this.$message({
                            type: 'success',
                            message: '验证码已发送!',

                        });
                        this.setTime()
                    }
                });
            },
            getVerifyCodeByUserName(){//登陆获取验证码
                if (this.ruleForm.username == undefined || this.ruleForm.username == '') {
                    this.$message({
                        type: 'error',
                        message: '请先填写用户名!',

                    });
                    return
                }
                let obj = {
                    username: this.ruleForm.username
                    /*params: {
                        username: this.ruleForm.username
                    }*/
                };
                this.http.get(this.$Api.getVerifyCodeByUserName, obj).then(response => {
                    if (response.data.code === 200) {
                        this.$message({
                            type: 'success',
                            message: '验证码已发送!',

                        });
                        this.setTime()
                    }
                });
            },
            setTime() {

                this.time--;
                if (this.time <= 1) {
                    this.time  = 60;
                    this.btnName = "获取验证码";
                } else {
                    this.btnName = "(" + this.time + ")秒后重试";
                    setTimeout(() => {
                        this.setTime();
                    }, 1000)

                }
            },
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../../assets/img/bg2.jpeg);
        background-size: 100%;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:390px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(155,185,209, 0.9);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>
