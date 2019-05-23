<template>
    <div class="sidebar">
        <el-menu
                :default-active="onRoutes"
                background-color="#d2dce6"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                active-text-color="#20a0ff"
                unique-opened
                router>
            <template >
                <el-submenu v-for="(item,index) in items" :index="item.index" :key="index">
                    <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </template>
                    <el-menu-item-group class="hidden-div" v-for="(list,i) in item.subs" :key="i">
                        <el-menu-item :index="list.index">{{list.title}}</el-menu-item>
                    </el-menu-item-group>
                    <!--<template v-if="item.subs">-->
                        <!--<el-menu-item-group class="hidden-div" v-for="i in item.subs">-->
                            <!--<el-menu-item :index="i.index">{{i.title}}</el-menu-item>-->
                        <!--</el-menu-item-group>-->
                    <!--</template>-->
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items:[
                    {
                        icon:'el-icon-s-custom',
                        index:'1',
                        title:'用户管理',
                        subs:[
                            {
                                index: 'user-manage-list',
                                title: '用户列表'
                            },
                            {
                                index: 'partner_info',
                                title: '新增合伙人'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: '2',
                        title: '管理员管理',
                        subs: [
                            {
                                index: 'manager_list',
                                title: '管理员列表'
                            },
                            {
                                index: 'manager_info',
                                title: '新增管理员'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '3',
                        title: '设备管理',
                        subs: [
                            {
                                index: 'device_list',
                                title: '设备列表'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-goods',
                        index: '4',
                        title: '香水管理',
                        subs: [
                            {
                                index: 'perfume_list',
                                title: '香水列表'
                            },
                            {
                                index: 'perfume_info',
                                title: '新增香水'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: '5',
                        title: '物资管理',
                        subs: [
                            {
                                index: 'material_list',
                                title: '采购记录'
                            },
                            {
                                index: 'material_info',
                                title: '新增采购记录'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-picture',
                        index: '6',
                        title: '广告管理',
                        subs: [
                            {
                                index: 'ad_list',
                                title: '广告列表'
                            },
                            {
                                index: 'ad_info',
                                title: '新增广告'
                            }
                        ]
                    },

                    {
                        icon: 'el-icon-mobile-phone',
                        index: '7',
                        title: 'APK管理',
                        subs: [
                            {
                                index: 'apk_list',
                                title: 'apk列表'
                            },
                            {
                                index: 'apk_info',
                                title: '新增APK'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-edit-outline',
                        index: '8',
                        title: '数据统计',
                        subs: [
                            {
                                index: 'device_sales',
                                title: '设备月销售统计'
                            },
                            {
                                index: 'perfume_sales',
                                title: '香水销售统计'
                            },
                            {
                                index: 'partner_sales',
                                title: '设备销售统计'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-sold-out',
                        index: '9',
                        title: '订单管理',
                        subs: [
                            {
                                index: 'order_list',
                                title: '订单列表'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-message',
                        index: '10',
                        title: '修改密码申请',
                        subs: [
                            {
                                index: 'reset_list',
                                title: '申请列表'
                            }
                        ]
                    }
                ],
                permissions: [],
                accountType: ''
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            onRoutes() {
                //return this.$route.path.replace('/', '');
                return this.$route.path.split('/').reverse()[0];
            },
            isCollapse(){
                return this.$store.state.isCollapse;
            }
        }
    }
</script>

<style>
    .el-menu-item-group.hidden-div .el-menu-item-group__title{
        display: none;
    }
    .el-submenu{
        width:160px;
    }
</style>
