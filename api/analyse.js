import Request from "../utils/request.js"
let request  = new Request().http

export const takeout = (data) =>request({
	url:'/prod-api/api/takeout/seller/list',
	method: 'get',
	data: data
})

export const line = (data) =>request({
	url:'/prod-api/api/bus/line/list',
	method: 'get',
	data: data
})

export const history = (data) =>request({
	url:'/prod-api/api/park/lot/record/list',
	method: 'get',
	data: data
})

export const post = (data) =>request({
	url:'/prod-api/api/job/post/list',
	method: 'get',
	data: data
})