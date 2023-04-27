<script>
	export default {
		onLaunch: function() {
			
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	@import "uview-ui/index.scss";
	// 设置整个项目的背景色
	page {
		background-color: #eee;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	
	.container {
		padding: 0 16rpx;
		line-height: 45rpx;
	}
	
	.nav {
		background-color: white;
	}
	
	.bar {
		padding: 0 16rpx;
	}
	
	.btn {
		width: 100% !important;
	}
	
	.u-card {
		margin-left: 0 !important;
		margin-right: 0 !important;
	}
	
	.title {
		font-size: 32rpx;
		font-weight: 700;
		color: #5b5a5a;
	}
	
	.search {
		padding: 16rpx 0;
	}
	
	.radius {
		border-radius: 24rpx;
	}
	
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 90rpx;
		display: flex;
		padding: 0 16rpx;
		background-color: white;
	}
	
	.u-form-item--left {
		// align-items: flex-start !important;
	}
</style>
