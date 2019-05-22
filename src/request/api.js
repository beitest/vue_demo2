/*--------api接口-------*/

const BaseURL = "http://39.105.124.108";//测试
//const baseURL = "http://47.92.220.18";//正式
// const httpIp = "http://localhost";
const port = "8080";
const hot = BaseURL + ":" + port;


//登录
const login = hot + '/login';

//登出
const logout = hot + '/logout';


//获取广告列表
const adList = hot + '/queryAdvertisePage';

//删除广告
const deleteAd = hot + '/advertiesementDelete';

//获取广告详情
const getAdById = hot + '/getAdvertiseById';

//保存广告
const saveAd = hot + '/advertiesementSave';

//更新广告
const updateAd = hot + '/advertiesementModify'

//发布广告
const sendAd = hot + '/advertiesementPublish';


const getBindedDevicesByAdvertiseId = hot + '/getBindedDevicesByAdvertiseId';
const operationDeviceRelationAdvertise = hot + '/operationDeviceRelationAdvertise';


//上传图片
const uploadImg = hot + '/uploadImg';
//上传视频
const uploadVideo = hot + '/uploadVideo';


//合伙人列表
const getPartnerList = hot + '/findPageByAccountQueryVo';

//获取合伙人详情
const getAccount = hot + '/queryAccountInfoById';
const saveAccount = hot + '/saveAccount';
const updateAccount = hot + '/updateAccount';
const deleteAccount = hot + '/deleteAccountById';


//查询设备
const getDeviceList = hot + '/findPageByDeviceQueryVo';
const saveDevice = hot + '/saveDevice';
const getDeviceById = hot + '/getDeviceById';
const updateDevice = hot + '/updateDevice';
const queryAccountList = hot + '/queryAccountList';
const deleteDevice = hot + '/deleteDeviceById';
const getBoxList = hot + '/queryDeviceBoxByDeviceId';
const updateBox = hot + '/updateDeviceBox';
const deleteBox = hot + '/clearPerfumeInfoByDeviceBoxId?';
const updateDeviceStatusByDeviceId = hot + '/updateDeviceStatusByDeviceId?';


//香水
const getPerfumeList = hot + '/findPageByPerfumeQueryVo';
const deletePerfume = hot + '/deletePerfumeById';
const getPerfume = hot + '/getPerfumeById';
const addPerfume = hot + '/addPerfume';
const updatePerfume = hot + '/updatePerfume';


//apk管理
const getApkList = hot + '/queryApkUpdatePage';
const uploadApk = hot + '/uploadApk';
const saveApk = hot + '/saveApkUpdate';
const getApkInfo = hot + '/getApkUpdateById';
const updateApk = hot + '/updateApkUpdate';
const deleteApk = hot + '/deleteApkUpdateById';
const canclePublish = hot + '/canclePublish';
const publishApk = hot + '/publishNewVersion';


//物资管理
const getMaterialList = hot + '/queryPurchasePerfumeRecordPage';
const getMaterialInfo = hot + '/getPurchasePerfumeRecordById';
const addMaterial = hot + '/addPurchasePerfumeRecord';
const updateMaterial = hot + '/updatePurchasePerfumeRecord';
const deleteMaterial = hot + '/deletePurchasePerfumeRecordById';


const getPurchasePerfumeList = hot + '/getPurchasePerfumeRecordItemByRecodId';
const deleteeRecordItemById = hot + '/deletePurchasePerfumeRecordItemById';
const saveRecordItem = hot + '/savePurchasePerfumeRecordItem';
const updateRecordItem = hot + '/updatePurchasePerfumeRecordItem';




const getDeviceListByAccountId = hot + '/queryAllByDeviceIdOrAccountId';
const operationOnRelation = hot + '/operationOnRelation';



const getDeviceSale = hot + '/getDeviceSaleRecordByDevice';
const getDeviceSlotSale = hot + '/getAllDeviceBoxSaleStatisticByDevice';
const getPerfumeSale = hot + '/getPerfumeBrandSaleStatistic';
const getPartnerSale = hot + '/getDeviceSaleStatistic';
const getSaleAmount = hot + '/getSaleAmountStatistic';




const statisticsDeviceCount = hot + '/statisticsDeviceCount';



const getMsgCount = hot + '/getUnreadedMsgCount';
const getMsgList = hot + '/getAlerMessageList';
const readedMessage = hot + '/readedMessage';



const orderList = hot + '/queryOrderPage';


const passwdResetSaveApply = hot + '/passwdReset/saveApply';
const resetList = hot + '/passwdReset/queryPasswdApplyPage';
const resetPsw = hot + '/passwdReset/changePasswd';


const updateDeviceRelationAccount = hot + '/updateDeviceRelationAccountByDeviceId';



export default {
    BaseURL,
    login,
    logout,
    adList,
    deleteAd,
    getAdById,
    saveAd,
    updateAd,
    sendAd,
    uploadImg,
    uploadVideo,
    getPartnerList,
    getAccount,
    saveAccount,
    updateAccount,
    deleteAccount,
    getDeviceList,
    saveDevice,
    getDeviceById,
    updateDevice,
    queryAccountList,
    getPerfumeList,
    deletePerfume,
    getPerfume,
    addPerfume,
    updatePerfume,
    getApkList,
    uploadApk,
    saveApk,
    getApkInfo,
    updateApk,
    deleteApk,
    canclePublish,
    publishApk,
    getMaterialList,
    getMaterialInfo,
    addMaterial,
    updateMaterial,
    deleteMaterial,
    deleteDevice,
    getBoxList,
    updateBox,
    deleteBox,
    getDeviceListByAccountId,
    operationOnRelation,
    getPurchasePerfumeList,
    deleteeRecordItemById,
    saveRecordItem,
    updateRecordItem,
    getDeviceSale,
    getPerfumeSale,
    getPartnerSale,
    getBindedDevicesByAdvertiseId,
    operationDeviceRelationAdvertise,
    updateDeviceStatusByDeviceId,
    statisticsDeviceCount,
    getDeviceSlotSale,
    getSaleAmount,
    getMsgCount,
    getMsgList,
    readedMessage,
    orderList,
    passwdResetSaveApply,
    resetList,
    resetPsw,
    updateDeviceRelationAccount
}
