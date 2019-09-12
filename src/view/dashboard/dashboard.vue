<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-pie-chart"></i> 数据统计</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-row :gutter="20" class="container-main1-box">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <el-col :span="3">
                            <div class="forst-main">
                                <i class="el-icon-menu"></i>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="second-main">
                                <div class="second-main-box">
                                    <p class="second-main-p1">设备总数（台）</p>
                                    <p class="second-main-p2">{{dashboardData.deviceCount}}</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="second-main">
                                <div class="second-main-box">
                                    <p class="second-main-p1">在线设备（台）</p>
                                    <p class="second-main-p2">{{dashboardData.onlineDeviceCount}}</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="3"><div></div></el-col>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <el-col :span="3">
                            <div class="forst-main">
                                <i class="el-icon-user"></i>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="second-main">
                                <div class="second-main-box">
                                    <p class="second-main-p1">会员总数（人）</p>
                                    <p class="second-main-p2">{{dashboardData.vipCustomerCount}}</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="second-main">
                                <div class="second-main-box">
                                    <p class="second-main-p1">今日新增（人）</p>
                                    <p class="second-main-p2">{{dashboardData.vipCustomerCountToday}}</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="3"><div></div></el-col>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <el-col :span="3">
                            <div class="forst-main">
                                <i class="el-icon-tickets"></i>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="second-main">
                                <div class="second-main-box">
                                    <p class="second-main-p1">今日订单数量</p>
                                    <p class="second-main-p2"><span>{{dashboardData.todayOrderCount}}</span></p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="second-main">
                                <div class="second-main-box">
                                    <p class="second-main-p1">今日订单总额（元）</p>
                                    <p class="second-main-p2"><span>{{dashboardData.todayOrderAmount}}</span></p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="3"><div></div></el-col>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <el-col :span="3">
                            <div class="forst-main">
                                <i class="el-icon-s-finance"></i>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="second-main">
                                <div class="second-main-box">
                                    <p class="second-main-p1">账户余额（元）</p>
                                    <p class="second-main-p2"><span>{{dashboardData.amount}}</span></p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="second-main">
                                <div class="second-main-box">
                                    <p class="second-main-p1">今日营收（元）</p>
                                    <p class="second-main-p2"><span>{{dashboardData.todayTurnover}}</span></p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="3"><div></div></el-col>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20" class="highcharts-box">
                <div class="daterange-box">
                    <span style="color:#6b6868;margin-right:50px;">订单趋势图</span>
                    <el-date-picker
                        v-model="timearr2"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        format="yyyy-MM-dd"
                        :picker-options="pickerOptions"
                        @change="timeSlotChange2">
                    </el-date-picker>
                </div>
                <el-col :span="24">
                    <x-charts id="high" class="high" :option="option2"></x-charts>
                </el-col>
            </el-row>
            <el-row :gutter="20" class="highcharts-box">
                <div class="daterange-box">
                    <span style="color:#6b6868;margin-right:50px;">设备销售量占比图</span>
                    <el-date-picker
                        v-model="timearr1"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        format="yyyy-MM-dd"
                        :picker-options="pickerOptions"
                        @change="timeSlotChange1">
                    </el-date-picker>
                </div>
                <el-col :span="24">
                    <x-charts id="highcharts" class="high" :option="option1"></x-charts>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    // 导入chart组件
    import XCharts from '../../components/common/charts.vue'
    export default {
        components: {
            XCharts
        },
        data() {
            return {
                dashboardData:{},
                timearr1:'',
                timearr2:'',
                end:'',
                start:'',
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, /*{
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }*/]
                },
                option1:{},
                option2:{},
            }
        },
        created(){
            this.end = new Date();
            this.start = new Date();
            this.start.setTime(this.start.getTime() - 3600 * 1000 * 24 * 7);
            this.timearr1 = [this.start,this.end];
            this.timearr2 = [this.start,this.end];

            this.getDashboard();
            this.timeSlotChange1();
            this.timeSlotChange2();
        },
        methods:{
            getDashboard(){
                // let obj={
                //     params:{}
                // }
                this.http.get(this.$Api.getDashboard).then(response=>{
                    if(response.data.code ===200){
                        this.dashboardData = response.data.content;
                    }
                })
            },
            timeSlotChange1(){
                this.http.get(this.$Api.getDeviceSaleStatistic+'?startTime='+this.timearr1[0].getTime()+'&endTime='+this.timearr1[1].getTime()).then(response=>{
                    if(response.data.code ===200){
                        let dataBox = [];
                        response.data.content.forEach(value => {
                            dataBox.push({name:value.deviceName,y:value.saleNum});
                        });
                        this.option1 = {
                            credits: { enabled: false },//HighCharts去掉底部水印链接
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: null,
                                plotShadow: false,
                                type: 'pie'
                            },
                            title: {
                                text: ''
                            },
                            subtitle: {
                                // text: '数据来源: WorldClimate.com'
                            },
                            /*xAxis: {
                                // categories: [],
                                crosshair: true
                            },*/
                            yAxis: {
                                min: 0,
                                title: {
                                    text: '销售量 (件)'
                                }
                            },
                            tooltip: {
                                // head + 每个 point + footer 拼接成完整的 table
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f} (件)</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                            },
                            plotOptions: {
                                pie: {
                                    allowPointSelect: true,
                                    cursor: 'pointer',
                                }
                            },
                            series: [{
                                name: '销售量',
                                data: dataBox
                            }]
                        }
                    }
                })
            },
            timeSlotChange2(){
                this.http.get(this.$Api.getOrderStatistic+'?startTime='+this.timearr2[0].getTime()+'&endTime='+this.timearr2[1].getTime()).then(response=>{
                    if(response.data.code ===200){
                        let xdata = [];
                        let orderAmountArr = [];
                        response.data.content.forEach(value => {
                            xdata.push((value.date.split(" ")[0].split("-")[1]+'/'+value.date.split(" ")[0].split("-")[2]));
                            orderAmountArr.push(value.orderNum);
                        });
                        this.option2 = {
                            credits: { enabled: false }, //HighCharts去掉底部水印链接
                            chart: {
                                type: 'line'
                            },
                            title: {
                                text: ''
                            },
                            subtitle: {
                                // text: '数据来源: WorldClimate.com'
                            },
                            xAxis: {
                                categories: xdata,
                                crosshair: true
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: '订单数量'
                                }
                            },
                            tooltip: {
                                // head + 每个 point + footer 拼接成完整的 table
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f} (件)</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    borderWidth: 0
                                }
                            },
                            series: [{
                                name: '订单数量',
                                data: orderAmountArr
                            }]
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .container-main1-box{
        margin-bottom: 10px;
        border-bottom: 1px solid #ededed;
    }
    .highcharts-box{
        margin-top:20px;
        margin-bottom: ;
        border: 1px solid #adbac7;
    }
    .daterange-box{
        height:auto;
        padding:2px;
       background: #adbac7;
    }
    .bg-purple {
        background: #3d536b;
    }
    .grid-content {
        border-radius: 4px;
        height: 100px;
        text-align: center;
        margin-bottom: 20px;
    }
    .forst-main{
        font-size:40px;
        color:#00d1b2;
        height:100px;
        line-height:100px;
    }
    .second-main{
        heihgt:100px;
    }
    .second-main-box{
        padding:20px 0px;
    }
    .second-main-p1{
        font-size:16px;
        color:#00d1b2
    }
    .second-main-p2{
        font-size:30px;
        font-weight: bold;
        color:#00d1b2;
        margin-top:10px;
    }
</style>
