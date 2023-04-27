<template>
	<view class="container">
		<u-navbar title="个人中心" :is-back="false"></u-navbar>
		
		<view class="" style="text-align: center;">
			<u-card :border="false">
				<view class="" slot="head">
					<u-avatar :src="user.avatar" size="160"></u-avatar>
				</view>
				<view class="" slot="body">
					<view class="title">
						{{user.nickName}}
					</view>
					<view class="">
						{{user.phonenumber}}
					</view>
				</view>
			</u-card>
		</view>
		
		<view class="nav bar radius">
			<u-cell-group>
				<u-cell-item v-for="(item,index) in oper" :key="item.name" :title="item.name" :icon="item.icon"
					@click="nav(item.page)"
				></u-cell-item>
			</u-cell-group>
		</view>
		
		<u-gap></u-gap>
		
		<view class="btn">
			<u-button type="error" size="medium" @click="logout" class="btn">退出</u-button>
		</view>
		
	</view>
</template>

<script>
	import { userInfo } from "../../api/user.js"
	export default {
		data() {
			return {
				user: {},
				oper: [{
					name: '个人信息',
					icon: 'info',
					page:'/pages/person/info'
				},{
					name: '订单列表',
					icon: 'order',
					page:'/pages/person/order'
				},{
					name: '修改密码',
					icon: 'edit-pen',
					page:'/pages/person/modifyPwd'
				},{
					name: '意见反馈',
					icon: 'info-circle',
					page:'/pages/person/feedback'
				},{
					name: '个人账户',
					icon: 'account',
					page:'/pages/person/account'
				},{
					name: '网络设置',
					icon: 'setting',
					page:'/pages/person/network'
				}]
			}
		},
		methods: {
			getInfo() {
				userInfo().then(res =>{
					this.user = res.user
					this.user.avatar = this.$http + this.user.avatar
					console.log(this.user);
				})
			},
			logout() {
				uni.removeStorageSync("token")
				uni.redirectTo({
					url: '/pages/index/index'
				})
			}
		},
		onLoad() {
			this.getInfo()
		}
	}
</script>

<style scoped>
	.u-card {
		background-color: transparent !important;
	}
	
	
 	.container >>> .u-avatar__img {
		box-shadow: 10rpx 10rpx 20rpx #bbb !important;
	}
</style>
