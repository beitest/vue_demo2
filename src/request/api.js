
const httpIp = "http://www.iperfumetech.com";//测试
//const httpIp = "http://47.95.200.91";//正式
// const httpIp = "http://localhost";
const port = "9000";
const hot = httpIp + ":"+port;//+port;


//登录
const login = '/waterMachine/backend/backLogin';

//登出
const logout = '/waterMachine/backend/logout';

//获取短信验证码
const getVerifyCode = '/waterMachine/backend/getVerifyCode';
//根据用户名获取手机验证码
const getVerifyCodeByUserName = '/waterMachine/backend/getVerifyCodeByUserName';

//重置密码
const resetPassword = '/waterMachine/backend/resetPassword'


//上传图片
const uploadImg = '/waterMachine/backend/uploadImg';
//上传视频
const uploadVideo = '/waterMachine/backend/uploadVideo';

//广告创建
const adSave = '/waterMachine/backend/advertise/save';
//广告列表
const getAdvertisePage = '/waterMachine/backend/advertise/getAdvertisePage';
//广告详情
const getAdvertiseDetail = '/waterMachine/backend/advertise/getAdvertiseDetail';
//广告编辑
const adEdit = '/waterMachine/backend/advertise/edit';
//广告删除
const adRemove = '/waterMachine/backend/advertise/remove';
//审核广告
const adExamine = '/waterMachine/backend/advertise/checkAdvertismentById';

//APK上传
const uploadApk = '/waterMachine/backend/uploadApk';
//保存APK
const saveApk = '/waterMachine/backend/appVersionUpgrade/save';
//获取APK列表
const getApkList= '/waterMachine/backend/appVersionUpgrade/queryAll';
//应用发布
const getSaveAppPublish = '/waterMachine/backend/appVersionUpgrade/saveAppPublishRecord';
//查询应用发布记录
const getPublishRecordPage = '/waterMachine/backend/appVersionUpgrade/queryAppPublishRecordPage';
//应用发布记录修改
const getModifyAppPublishRecord = '/waterMachine/backend/appVersionUpgrade/modifyAppPublishRecord';
//应用发布记录删除
const getRemoveAppPublishRecordById = '/waterMachine/backend/appVersionUpgrade/removeAppPublishRecordById';

//新增账号
const addAccount = '/waterMachine/backend/sysUser/save';
//获取账号列表
const getAccountList = '/waterMachine/backend/sysUser/queryAll';
//编辑账号
const editAccount = '/waterMachine/backend/sysUser/modifyById';
//获取账号详情
const getAccountDetail= '/waterMachine/backend/sysUser/queryById';
//账号删除
const removeAccount = '/waterMachine/backend/sysUser/removeById';

//设备查询--查询某个代理商未绑定的设备 userType = 1|4
const getQueryAllUnbindByAgent = '/waterMachine/backend/device/queryAllUnbindByAgent';
//查询某个代理商管理员已绑定的设备 userType = 2|3
const getQueryAllBindBySysUserId = '/waterMachine/backend/device/queryAllBindBySysUserId';
//查询某个代理商管理员未绑定的设备 userType = 2|3
const getQueryAllUnBindBySysUserId = '/waterMachine/backend/device/queryAllUnBindBySysUserId';
//批量修改设备的代理商 userType = 1|4    解绑agent=0
const updateAgentBatch = '/waterMachine/backend/device/updateAgentBatch';
//代理商管理员批量关联设备 userType = 2|3
const bindDeviceBatch = '/waterMachine/backend/deviceSysUser/bindDeviceBatch';
//解绑设备 userType = 2|3
const removeBatch = '/waterMachine/backend/deviceSysUser/removeBatch';

//get获取角色列表
const getRoleList = '/waterMachine/backend/permissionRole/getRoleList';
//获取新增角色资源树
const getTree = '/waterMachine/backend/permissionResource/tree';
//const getTree = '/waterMachine/sysUserRole/getRoleResourceByAccountId?accountId=11';
//新增角色
const addRole = '/waterMachine/backend/permissionRole/add';
//角色详情
const getRoleDetail = '/waterMachine/backend/permissionRole/getRoleDetail';
//角色编辑
const  editRole= '/waterMachine/backend/permissionRole/edit';
//删除角色
const delRole = '/waterMachine/backend/permissionRole/remove';

//新增资源
const ResourceAdd = '/waterMachine/backend/permissionResource/add';
//获取资源列表
const getResourceList= '/waterMachine/backend/permissionResource/getResourceList';
//获取资源详情
const getResourceDetail = '/waterMachine/backend/permissionResource/getResourceDetail';
//修改资源
const editResource = '/waterMachine/backend/permissionResource/edit';
//删除资源
const delResource = '/waterMachine/backend/permissionResource/remove';
//父级菜单下拉框
const allResourceList = '/waterMachine/backend/permissionResource/allResourceList';
//控制页面操作按钮接口
const getSubResourceNodeList = '/waterMachine/backend/permissionResource/getSubResourceNodeList';

//设备列表--查询所有绑定和未绑定的设备
const DeviceList = '/waterMachine/backend/device/queryDevicePage';
//设备新增
const DeviceAdd = '/waterMachine/backend/device/save';
//设备修改
const DeviceEdit = '/waterMachine/backend/device/modify';
//设备详情
const DeviceDetail = '/waterMachine/backend/device/queryDeviceDetail';
//设备删除
const DeviceDel = '/waterMachine/backend/device/remove';

//获取省市区
const getGeographyByParentIdAndLevel= '/waterMachine/geography/getGeographyByParentIdAndLevel';
//获取广告列表---下拉框
const getAdvertiseList = '/waterMachine/backend/advertise/getAdvertiseList';
//根据地区筛选设备
const queryRegionDevicePage = '/waterMachine/backend/device/queryRegionDevicePage';
//按地区发布广告
const adPublish = '/waterMachine/backend/advertise/publish';
//设备地图分布信息
const DeviceMap = '/waterMachine/backend/device/queryDeviceMap';
//根据ID查询单个区域(街道详情提示)
const InputTips = '/waterMachine/geography/inputTips';

//商品列表
const goodsList = '/waterMachine/backend/waterSalePrice/querylist';
//商品详情
const goodsDetail = '/waterMachine/backend/waterSalePrice/detail';
//商品新增
const goodsAdd = '/waterMachine/backend/waterSalePrice/save';
//商品修改
const goodsEdit = '/waterMachine/backend/waterSalePrice/edit';
//商品删除
const goodsDel = '/waterMachine/backend/waterSalePrice/remove';

//会员管理列表
const getCustomerList = '/waterMachine/backend/queryCustomerPage';

//订单列表
const getOrderList = '/waterMachine/backend/order/queryOrderPage';
//订单-根据订单号查询订单详情
const getOrderDetail = '/waterMachine/backend/order/queryOrderDetail'

//设备已经绑定商品
const DeviceGoodsById = '/waterMachine/backend/deviceWater/queryByDeviceId';
//设备商品新增
const deviceWaterAdd = '/waterMachine/backend/deviceWater/save';
//设备商品详情
const deviceWaterDetali = '/waterMachine/backend/deviceWater/queryById';
//设备商品删除
const deviceWaterDel = '/waterMachine/backend/deviceWater/removeById';
//设备商品修改
const deviceWaterEdit = '/waterMachine/backend/deviceWater/modify';
//获取该设备未绑定的商品
const deviceUnbindById = '/waterMachine/backend/deviceWater/queryUnbindByDeviceId';
//当前设备绑定的广告
const getAdvertiseListByDeviceId = '/waterMachine/backend/advertise/getAdvertiseListByDeviceId';

//设备注册记录列表
const deviceRegist = '/waterMachine/backend/deviceRegist/queryRecordPage';
//删除设备记录
const deviceRegistRemove = '/waterMachine/backend/deviceRegist/removeById';
//审核设备记录
const deviceExamine = '/waterMachine/backend/deviceRegist/modify';

//分页查询报修记录接口-多条件查询
const getDeviceRepairApplyPage = '/waterMachine/deviceRepair/getDeviceRepairApplyPage';
//故障状态处理接口
const getTroubleShootStatus = '/waterMachine/deviceRepair/troubleShootStatus';
//删除
const removeTroubleShootStatus = '/waterMachine/deviceRepair/removeById';


//dashboard概览统计
const getDashboard = '/waterMachine/backend/statistic/queryAgentOverViewStatistic';
//订单折线图
const getOrderStatistic = '/waterMachine/backend/statistic/queryAgentWholeOrderStatistic';
//代理商所有设备销量统计
const getDeviceSaleStatistic = '/waterMachine/backend/statistic/queryAgentWholeDeviceSaleStatistic';

//代理商所有商品SKU销量统计---数据统计
const getSKUSaleStatistic = '/waterMachine/backend/statistic/getAgentAllProductSKUSaleStatistic';
//按整体日总销量统计
const getDailySaleStatisti = '/waterMachine/backend/getDailySaleStatistic';
//按整体月总销量统计
const getMonthlySaleStatistic = '/waterMachine/backend/getMonthlySaleStatistic';

//财务管理-财务流水
const getAccountFlowPage = '/waterMachine/backend/accountChangeFlow/queryAgentAccountFlowPage';
//财务管理-财务流水
const getMonthLedgerAccount = '/waterMachine/backend/accountChangeFlow/queryAgentMonthLedgerAccount';
//财务管理-查询本月流水
const getAgentMonthFlow = '/waterMachine/backend/accountChangeFlow/queryAgentMonthFlow';
//财务管理-下载指定时间段内的流水Excel文件
const getDownloadAgentAccountFlowExcel = '/waterMachine/backend/accountChangeFlow/downloadAgentAccountFlowExcel';





export default {
    hot,
    httpIp,
    getVerifyCode,
    getVerifyCodeByUserName,
    resetPassword,
    uploadImg,
    uploadVideo,
    login,
    logout,
    adSave,
    getAdvertisePage,
    getAdvertiseDetail,
    adEdit,
    adRemove,
    adExamine,
    uploadApk,
    saveApk,
    getApkList,
    getSaveAppPublish,
    getPublishRecordPage,
    getModifyAppPublishRecord,
    getRemoveAppPublishRecordById,
    getAccountList,
    editAccount,
    getAccountDetail,
    removeAccount,
    getQueryAllUnbindByAgent,
    getQueryAllBindBySysUserId,
    getQueryAllUnBindBySysUserId,
    updateAgentBatch,
    bindDeviceBatch,
    removeBatch,
    addAccount,
    getRoleList,
    getTree,
    addRole,
    allResourceList,
    ResourceAdd,
    editRole,
    getRoleDetail,
    delRole,
    getResourceList,
    getResourceDetail,
    editResource,
    delResource,
    getSubResourceNodeList,
    DeviceList,
    DeviceAdd,
    DeviceEdit,
    DeviceDetail,
    DeviceDel,
    getGeographyByParentIdAndLevel,
    getAdvertiseList,
    queryRegionDevicePage,
    adPublish,
    DeviceMap,
    InputTips,
    goodsList,
    goodsDetail,
    goodsAdd,
    goodsEdit,
    goodsDel,
    getCustomerList,
    getOrderList,
    getOrderDetail,
    deviceWaterAdd,
    deviceWaterEdit,
    deviceWaterDel,
    DeviceGoodsById,
    deviceWaterDetali,
    deviceUnbindById,
    getAdvertiseListByDeviceId,
    deviceRegist,
    deviceRegistRemove,
    deviceExamine,
    getDeviceRepairApplyPage,
    getTroubleShootStatus,
    removeTroubleShootStatus,
    getDashboard,
    getOrderStatistic,
    getDeviceSaleStatistic,
    getSKUSaleStatistic,
    getDailySaleStatisti,
    getMonthlySaleStatistic,
    getAccountFlowPage,
    getMonthLedgerAccount,
    getAgentMonthFlow,
    getDownloadAgentAccountFlowExcel
}
