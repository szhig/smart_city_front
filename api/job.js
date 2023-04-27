import Request from "../utils/request.js"
let request  = new Request().http

export const cate = (data) =>request({
	url:'/prod-api/api/job/profession/list',
	method: 'get',
	data: data
})

export const list = (data) =>request({
	url:'/prod-api/api/job/post/list',
	method: 'get',
	data: data
})

export const info = (data) =>request({
	url:'/prod-api/api/job/post/' + data,
	method: 'get'	
})

export const history = (data) =>request({
	url:'/prod-api/api/job/deliver/list',
	method: 'get',
	data: data
})

export const delivery = (data) =>request({
	url:'/prod-api/api/job/deliver',
	method: 'post',
	data: data
})

export const company = (data) =>request({
	url:'/prod-api/api/job/company/' + data,
	method: 'get'
})

export const resume = (data) =>request({
	url:'/prod-api/api/job/resume/queryResumeByUserId/' + data,
	method: 'get'
})

export const addResume = (data) =>request({
	url:'/prod-api/api/job/resume',
	method: 'post',
	data: data
})

export const editResume = (data) =>request({
	url:'/prod-api/api/job/resume',
	method: 'put',
	data: data
})

