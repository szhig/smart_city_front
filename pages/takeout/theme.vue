<template>
	<view class="container">
		<u-navbar :title="query.name"></u-navbar>
		
		<view class="">
			<u-card :border="false" v-for="(item,index) in list" :key="item.id" :show-head="false">
				<view class="" slot="body">
					<u-row>
						<u-col :span="4">
							<u-lazy-load :image="item.imgUrl" height="220" img-mode="aspectFill"></u-lazy-load>
						</u-col>
						<u-col :span="8">
							<view class="title">
								{{item.name}}
							</view>
							<view class="">
								评分：
								<text style="color: #ff9900;">{{item.score}}</text>
							</view>
							<view class="">
								月销量：{{item.saleQuantity}}
							</view>
							<view class="">
								到店距离：{{item.distance}}
							</view>
							<view class="">
								人均消费：
								<text style="color: red; font-size: 32rpx;">{{item.avgCost}}</text>
							</view>
						</u-col>
					</u-row>
				</view>
			</u-card>
		</view>
	</view>
</template>

<script>
	import { list } from "../../api/takeout.js"
	export default {
		data() {
			return {
				list: [],
				query: {}
			}
		},
		methods: {
			getList() {
				list({
					themeId: this.query.id
				}).then(res => {
					this.list = res.rows
					this.list.forEach(item => item.imgUrl = this.$http + item.imgUrl)
				})
			}
		},
		onLoad(options) {
			this.query = JSON.parse(options.data)
			this.getList()
		}
	}
</script>

<style>

</style>
