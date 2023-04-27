<template>
	<view class="container">
		<u-navbar title="全部服务" :is-back="false"></u-navbar>
		
		<u-gap></u-gap>
		
		<view class="nav bar radius">
			<u-grid :border="false" :col="5">
				<u-grid-item v-for="(item,index) in serviceAll" :key="item.id" @click="nav('/pages/' + item.link)">
					<u-avatar :src="item.imgUrl" size="80"></u-avatar>
					<text style="font-size: 20rpx;">
						{{item.serviceName}}
					</text>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	import {serviceAll} from "../../api/common.js"
	export default {
		data() {
			return {
				serviceAll: []
			}
		},
		methods: {
			getService(){
				serviceAll().then(res => {
					this.serviceAll = res.rows
					this.serviceAll.forEach(item => {
						item.imgUrl = this.$http + item.imgUrl
					})
				})
			},
		},
		onLoad() {
			this.getService()
		}
	}
</script>

<style>

</style>
