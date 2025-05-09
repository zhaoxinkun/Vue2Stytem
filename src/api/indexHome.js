import http from "@/api/config/restful";

// 查询用户分布
export const employMap = token => http.get(`/user/employ-map`, token)