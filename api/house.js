import Request from "../utils/request.js"
let request  = new Request().http

export const list = (data) =>request({
	url:'/prod-api/api/house/housing/list',
	method: 'get',
	data: data
})

export const info = (data) =>request({
	url:'/prod-api/api/house/housing/' + data,
	method: 'get'
})