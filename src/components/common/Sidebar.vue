<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" :background-color="bgColor"
                 text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router><!--:collapse="collapse"-->
            <!--<template v-for="item in items">
              <template v-if="item.subs">
                <el-submenu :index="item.index" :key="item.index">
                  <template slot="title">
                    <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                  </template>
                  <template v-for="subItem in item.subs">
                    <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                      <template slot="title">{{ subItem.title }}</template>
                      <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                        {{ threeItem.title }}
                      </el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                      {{ subItem.title }}
                    </el-menu-item>
                  </template>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.index" :key="item.index">
                  <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                </el-menu-item>
              </template>
            </template>-->
            <template v-for="item in resourceTree">
                <template>
                    <el-submenu :index="item.name" >
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.name }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.childrenNode" :key="i" :index="subItem.page">{{ subItem.name}}</el-menu-item>
                    </el-submenu>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script>
    import bus from '../../assets/js/bus.js';
    export default {
        data() {
            return {
                collapse: false,
                resourceTree:[],
                bgColor:'#324157',
                // items: [
                //     {
                //         icon: 'el-icon-user',
                //         index: 'userlist',
                //         title: '用户管理',
                //         // subs: [
                //         //     {
                //         //         index: 'userlist',
                //         //         title: '用户列表',
                //         //     },
                //         //     {
                //         //         index: 'useradd',
                //         //         title: '新增用户',
                //         //     }
                //         // ]
                //     },
                //     {
                //         icon: 'el-icon-s-grid',
                //         index: 'account_list',
                //         title: '账号管理',
                //     },
                //     {
                //         icon: 'el-icon-picture',
                //         index: 'adlist',
                //         title: '广告管理',
                //         /*subs: [
                //             {
                //                 index: 'adlist',
                //                 title: '广告列表',
                //             },
                //             {
                //                 index: 'adadd',
                //                 title: '广告创建',
                //             }
                //         ]*/
                //     },
                //     {
                //         icon: 'el-icon-pie-chart',
                //         index: 'datacharts',
                //         title: '数据统计',/*
                // subs: [
                //     {
                //         index: 'datacharts',
                //         title: '数据统计',
                //     }
                // ]*/
                //     },
                //     {
                //         icon: 'el-icon-mobile-phone',
                //         index: 'apk_list',
                //         title: 'APK管理',
                //         /*subs: [
                //             {
                //                 index: 'apk_list',
                //                 title: 'APK列表',
                //             },
                //             {
                //                 index: 'apk_info',
                //                 title: '新增APK',
                //             }
                //         ]*/
                //     },
                //     {
                //         icon: 'el-icon-coin',
                //         index: 'role_list',
                //         title: '角色管理',
                //     },
                //     {
                //         icon: 'el-icon-circle-plus-outline',
                //         index: 'resources',
                //         title: '新增资源',
                //     },
                //     {
                //         icon: 'el-icon-message',
                //         index: 'reset_list',
                //         title: '修改密码',
                //         /*subs: [
                //             {
                //                 index: 'reset_list',
                //                 title: '申请列表',
                //             },
                //         ]*/
                //     },
                // ]

            }
        },
        created() {
            //通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
            bus.$on('bgColor', msg => {
                this.bgColor = msg;
            })
            this.getMenu();
        },
        methods: {
            getMenu() {

                this.http.get(this.$Api.getTree).then(response => {
                    if (response.data.code === 200) {
                        this.resourceTree = response.data.content;
                    }

                })
            },
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 60px;
        bottom:0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 180px;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>
