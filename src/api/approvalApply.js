import http from "./config/restful"


// 查询所有员工列表
export const employee = token => http.get(`/user/employee`, token)


// 申请类别的api ------------------------------------------------------------------
// 办公申请
/**
 * @param data
 * */
export const officeCreate = data => http.post(`apply/office/createOrUpd`, data)

// 请假类别
export const leaveCreate = data => http.post(`apply/leave/createOrUpd`, data)

// 差旅类别
export const travelCreate = data => http.upload(`/apply/travel/createOrUpd`, data);