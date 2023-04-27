import Request from "../utils/request.js"
let request  = new Request().http

export const city = (data) =>request({
	url:'/prod-api/api/common/gps/city',
	method: 'get',
	data: data
})