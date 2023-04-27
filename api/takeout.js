import Request from "../utils/request.js"
let request  = new Request().http

export const swiper = (data) =>request({
	url:'/prod-api/api/takeout/rotation/list',
	method: 'get',
	data: data
})

export const theme = (data) =>request({
	url:'/prod-api/api/takeout/theme/list',
	method: 'get',
	data: data
})

export const near = (data) =>request({
	url:'/prod-api/api/takeout/seller/near',
	method: 'get',
	data: data
})

export const list = (data) =>request({
	url:'/prod-api/api/takeout/seller/list',
	method: 'get',
	data: data
})

// export const swiper = (data) =>request({
// 	url:'',
// 	method: 'get',
// 	data: data
// })

export const search = (data) =>request({
	url:'/prod-api/api/takeout/search',
	method: 'get',
	data: data
})