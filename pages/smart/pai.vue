<template>
	<view class="container">
		<u-navbar title="随手拍"></u-navbar>
		
		<u-gap></u-gap>
		
		<view class="nav bar">
			<u-form label-width="150">
				<u-form-item label="照片">
					<u-upload></u-upload>
				</u-form-item>
				<u-form-item label="问题描述">
					<u-input type="textarea"></u-input>
				</u-form-item>
			</u-form>
		</view>
		
		<u-gap></u-gap>
		
		<view class="btn">
			<u-button type="primary" size="medium" @click="pub" class="btn">反馈</u-button>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			pub() {
				let texts = uni.getStorageSync("texts") || []
				texts.push(this.text)
				uni.setStorageSync("texts", texts)
				
				uni.showToast({
					title: '发布成功'
				})
			}
		}
	}
</script>

<style>

</style>
