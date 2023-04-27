<template>
	<view class="container">
		<u-navbar title="建言献策"></u-navbar>
		
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
			<u-button type="primary" size="medium" @click="pub" class="btn">发布</u-button>
		</view>
		
		<u-gap></u-gap>
		
		<view class="">
			<u-section title="历史留言" :right="false" color="#fa3534"></u-section>
			
			<u-gap></u-gap>
			<u-cell-group>
				<u-cell-item v-for="(item,index) in history" :arrow="false">
					{{item}}
				</u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				history: []
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
		},
		onLoad() {
			this.history = uni.getStorageSync("texts") || {}
			console.log(this.history);
		}
	}
</script>

<style>

</style>
