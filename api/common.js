import Request from "../utils/request.js"
let request  = new Request().http

export const swiper = (data) =>request({
	url:'/prod-api/api/rotation/list',
	method: 'get',
	data: data
})


export const serviceAll = (data) =>request({
	url:'/prod-api/api/service/list',
	method: 'get',
	data: data
})


export const newsCate = (data) =>request({
	url:'/prod-api/press/category/list',
	method: 'get',
	data: data
})


export const newsList = (data) =>request({
	url:'/prod-api/press/press/list',
	method: 'get',
	data: data
})

export const newsInfo = (data) =>request({
	url:'/prod-api/press/press/' + data,
	method: 'get'
})