<template>
	<view class="container">
		<u-navbar title="网络设置"></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="nav bar">
			<u-form label-width="150">
				<u-form-item label="ip">
					<u-input placeholder="请输入ip地址" v-model="ip"></u-input>
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
	export default {
		data() {
			return {
				ip: ''
			}
		},
		methods: {
			loginHandler() {
				uni.showToast({
					title: '设置成功'
				})
				uni.setStorageSync("ip", this.ip)
			}
			
		}
	}
</script>

<style>

</style>
