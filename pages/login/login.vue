<template>
	<view class="container">
		<u-navbar title="登陆" :customBack="back"></u-navbar>
		
		<view class="nav bar">
			<u-form label-width="150">
				<u-form-item label="用户名">
					<u-input placeholder="请输入用户名" v-model="user.username"></u-input>
				</u-form-item>
				<u-form-item label="密码">
					<u-input placeholder="请输入密码" v-model="user.password"></u-input>
				</u-form-item>
			</u-form>
		</view>
		
		<view class="btn">
			<u-button type="primary" size="medium" @click="loginHandler" class="btn">登陆</u-button>
		</view>
	</view>
</template>

<script>
	import  {login}  from "../../api/user.js"
	export default {
		data() {
			return {
				user:{
					username: '',
					password:''
				}
			}
		},
		methods: {
			loginHandler() {
				login(this.user).then(res =>{
					if(res.code == 200) {
						uni.setStorageSync("token", res.token)
						uni.showToast({
							title: '登陆成功',
							duration: 1500,
							success() {
								setTimeout(() =>{
									uni.redirectTo({
										url:'/pages/index/index'
									})
								}, 1000)
							}
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
