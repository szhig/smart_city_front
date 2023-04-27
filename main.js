import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
import { nav ,back } from "utils/utils.js"

Vue.use(uView)
Vue.prototype.nav = nav
Vue.prototype.back = back
Vue.prototype.$http = "http://124.93.196.45:10001"
Vue.prototype.$upload = "http://124.93.196.45:10001/prod-api/common/upload" 
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	mounted() {
		uni.getSystemInfo().then(res => {
			Vue.prototype.statusBarHeight = res[1].statusBarHeight
		})
	}
})
app.$mount()
