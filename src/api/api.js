// 统一接口地址
import http from "./restfulType"


// // 用户登录
// /**
//  * @ params fromData
//  * */
// export const login = data => http.post(`/user/login`, data)
//
// // 用户退出
// export const logout = token => http.post(`/user/logout`, token)


// 企业首页 页面api-------------------------------



// COM api




// 办公管理 ---> 提交
/**
 * @param data
 * */
export const officeSubmit = data => http.post(`apply/office/submitToApprove`, data)

// 办公管理 ---> 删除
/**
 * @param id
 * */
export const officeDelete = id => http.delete(`apply/office/delete/${id}`)


// 申请管理---差旅管理-------------------------------------------
export const travelDelete = id => http.delete(`apply/travel/delete/${id}`)


// 省市级数据
export const city = data => http.get(`/user/area`, data)

export const userInfo = data => http.get(`/user/info`)





// 类别管理的API  ------------------------------------------------------------------
// 办公管理 ---> 数据list
export const officeList = data => http.get(`apply/office/list`, data)

// 请假管理
export const leaveList = data => http.get(`apply/leave/list`, data)

// 出差管理
export const travelList = data => http.get(`apply/travel/list`, data)


// 审批管理 ------------------------------------------------------------------

// 一审数据
export const FirstInstance = data => http.get(`approve/one/list`, data)

// 一审通过  需要数据的
export const FirstPass = data => http.post(`approve/one/pass`, data)

// 一审拒绝
export const FirstReject = data => http.post(`approve/one/reject`, data)


// 档案管理    ------------------------------------------------------------------
export const docList = data => http.get(`doc/list/`, data)

// 生成凭证
export const CreateDoc = data => http.post(`doc/createFile`, data)

// 下载凭证
export const DownloadDoc = data => http.get(`doc/download`, data)

// 权限管理   ------------------------------------------------------------------

export const createUser = data => http.post(`permission/createUser`, data)

// 员工列表
export const UserList = data => http.get(`user/list`, data)

// 删除用户
export const RemoveUser =data => http.delete(`permission/removeUser/${data}`)

// 审批元权限处理
export const PermissionList =data=>http.get(`permission/list`, data)