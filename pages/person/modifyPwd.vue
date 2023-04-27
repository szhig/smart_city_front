<template>
	<view class="container">
		<u-navbar title="修改密码" ></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="nav bar">
			<u-form label-width="150">
				<u-form-item label="原密码">
					<u-input placeholder="请输入原密码" type="password" v-model="pwd.oldPassword"></u-input>
				</u-form-item>
				<u-form-item label="新密码">
					<u-input placeholder="请输入新密码" type="password" v-model="pwd.newPassword"></u-input>
				</u-form-item>
			</u-form>
		</view>
		
		<u-gap></u-gap>
		
		<view class="btn">
			<u-button type="primary" size="medium" @click="loginHandler" class="btn">修改</u-button>
		</view>
	</view>
</template>

<script>
	import  { modifyPwd} from "../../api/user.js"
	export default {
		data() {
			return {
				pwd: {
					oldPassword:'',
					newPassword:''
				}
			}
		},
		methods: {
			loginHandler() {
				modifyPwd(this.pwd).then(res => {
					if(res.code == 200) {
						uni.showToast({
							title: '修改成功'
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
