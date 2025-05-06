import http from "@/api/config/restful"

// 用户登录
/**
 * @ params fromData
 * */
export const login = data => http.post(`/user/login`, data)

// 用户退出
export const logout = token => http.post(`/user/logout`, token)
