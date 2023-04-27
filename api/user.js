import Request from "../utils/request.js"
let request  = new Request().http

export const login = (data) =>request({
	url:'/prod-api/api/login',
	method: 'post',
	data: data
})

export const userInfo = (data) =>request({
	url:'/prod-api/api/common/user/getInfo',
	method: 'get',
	data: data
})

export const editInfo = (data) =>request({
	url:'/prod-api/api/common/user',
	method: 'put',
	data: data
})

export const modifyPwd = (data) =>request({
	url:'/prod-api/api/common/user/resetPwd',
	method: 'put',
	data: data
})

export const feedback = (data) =>request({
	url:'/prod-api/api/common/feedback',
	method: 'post',
	data: data
})

export const charge = (data) =>request({
	url:'/prod-api/api/common/balance/recharge',
	method: 'post',
	data: data
})

export const orders = (data) =>request({
	url:'/prod-api/api/bus/order/list',
	method: 'get',
	data: data
})