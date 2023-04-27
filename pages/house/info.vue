<template>
	<view class="container">
		<u-navbar title=""></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="nav">
			<u-lazy-load :image="info.pic"></u-lazy-load>
			<view class="bar">
				<view class="title">
					{{info.sourceName}}
				</view>
				<view class="content">
					<view class="">
						房源面积：{{info.areaSize}}
					</view>
					<view class="">
						房源单价：
						<text style="font-size: 32rpx; color: red;">
							&yen;{{info.price}}
						</text>
					</view>
					<view class="">
						<u-tag mode="dark" :text="info.houseType"></u-tag>
					</view>
					<view class="">
						<u-parse :html="info.description" :tag-style="{'p': 'text-indent:2em;'}"></u-parse>
					</view>
				</view>
			</view>
		</view>
		
		<u-gap></u-gap>
		
		<view class="btn">
			<u-button  type="primary" size="medium" @click="nav('', {}, 'navigateBack')" class="btn">主页</u-button>
		</view>
	</view>
</template>

<script>
	import { info } from "../../api/house.js"
	export default {
		data() {
			return {
				query: {},
				info: {}
			}
		},
		methods: {
			getInfo() {
				info(this.query.id).then(res =>{
					this.info = res.data
					this.info.pic = this.$http + this.info.pic
				})
			}
		},
		onLoad(options) {
			this.query = JSON.parse(options.data)
			this.getInfo()
		}
	}
</script>

<style scoped>
	.content {
		text-indent: 2em;
		line-height: 55rpx;
	}
	
	.u-tag {
		text-indent: 0em;
	}
</style>
