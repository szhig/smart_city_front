<template>
	<view class="container">
		<u-navbar></u-navbar>
		
		<view class="nav bar">
			<view class="title" style="text-align: center;padding: 40rpx 0;">
				{{query.name}}
			</view>
			<view class="">
				<u-lazy-load :image="query.imgUrl"></u-lazy-load>
			</view>
			<view class="">
				<u-parse :html="query.desc" :tag-style="{'p': 'text-indent:2em;line-height:85rpx'}"></u-parse>
			</view>
			
			<view class="" style="text-align: right;padding-right: 20rpx;">
				<u-button type="warning" size="mini" @click="signup" :disabled="sign">{{sign ? '已报名' : '报名'}}</u-button>
			</view>
			
			<u-gap></u-gap>
		</view>
		
		<u-gap></u-gap>
		
		<view class="">
			<u-section title="活动留言" :right="false" color="#fa3435"></u-section>
		</view>
		
		<u-gap></u-gap>
		
		<view class="nav bar">
			<u-input type="textarea" v-model="text"></u-input>
		</view>
		
		<u-gap></u-gap>
		
		<view class="btn">
			<u-button type="primary" size="medium" @click="pub" class="btn">发布</u-button>
		</view>
		
		<u-gap></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sign: false,
				text: ""
			}
		},
		methods: {
			signup() {
				this.sign = true
				uni.showToast({
					title: '报名成功'
				})
			},
			pub() {
				let texts = uni.getStorageSync("texts") || []
				texts.push(this.text)
				uni.setStorageSync("texts", texts)
				
				this.text = ""
				
				uni.showToast({
					title: '发布成功'
				})
			}
		},
		onLoad(options) {
			this.query = JSON.parse(options.data)
		}
	}
</script>

<style>

</style>
