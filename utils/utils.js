export const forEach = (data = {}, fn) => {
	Object.keys(data).forEach(key => fn(key, data[key]))
}

export const nav = (to, data= {}, type="navigateTo") => {
	console.log(to);
	
	let cur = getCurrentPages()
	
	console.log(cur);
	
	uni.setStorageSync("from", '/pages/index/index')
	if(cur[0].route == 'pages/service/index' || cur[0].route == 'pages/index/index') uni.setStorageSync("from", '/' + cur[0].route)
	
	data = JSON.stringify(data)
	
	uni[type]({
		url: to + "?data=" + data
	})
}

export const back = () => {
	nav(uni.getStorageSync("from"), "", 'switchTab')
}