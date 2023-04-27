<template>
	<view class="container">
		<u-navbar></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="nav bar">
			<view class="title" style="text-align: center;padding: 40rpx 0;">
				{{info.title}}
			</view>
			<view class="">
				<u-parse :html="info.content" :domain="$http" :tag-style="{'p':'text-indent: 2em;line-height: 55rpx','img': 'display:block'}"></u-parse>
			</view>
		</view>
		
		<u-gap height="16"></u-gap>
	</view>
</template>

<script>
	
	import { newsInfo } from "../../api/common.js"
	export default {
		data() {
			return {
				info: {},
				query: {}
			}
		},
		methods: {
			getInfo() {
				newsInfo(this.query.id).then(res => {
					this.info = res.data
				})
			}
		},
		onLoad(options) {
			this.query = JSON.parse(options.data)
			this.getInfo()
		}
	}
</script>

<style>

</style>
