<template>
    <div class="login">
        <div class="box">
            <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="password" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data(){
            return {
                ruleForm: {
                    username: '',
                    pass: '',
                    checkPass: '',
                },
            }
        },
        methods:{
            login(){
                this.$router.push('/Home')
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