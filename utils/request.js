export default class Request{
	http(params) {
		let url = params.url,
			method = params.method,
			header = params.header || {},
			data = params.data || {}
		
		method = method.toUpperCase()
		
		if(method == 'POST') {
			// header['content-type'] = 'application/json'
		} else if(method =='GET'){
			// header['content-type'] = 'application/x-www-form-urlencode'
			
			let getData = "?"
			
			url += getData
		}
	
	
		url = (uni.getStorageSync("ip") || "http://124.93.196.45:10001") + url
		header['Authorization'] = uni.getStorageSync("token")
		
		return new Promise((resolve, reject) => {
			uni.request({
				url: url,
				method:method,
				data: data,
				header: header,
				success(res) {
					if(res.data.code == 401) {
						uni.redirectTo({
							url: '/pages/login/login'
						})
						return
					}
					
					if(res.data.code != 200) {
						uni.showToast({
							title: 'err '+ res.data.msg
						})
					}
					
					resolve(res.data)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}
}