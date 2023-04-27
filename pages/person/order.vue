<template>
	<view class="container">
		<u-navbar title='订单列表'></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="">
			<u-tabs :list="cate" :current="current" @change="change"></u-tabs>
		</view>
		
		<view class="">
			<u-card :border="false" v-for="(item,index) in orders">
				<view class="" slot="head">
					<view class="" style="display: flex;justify-content: space-between;">
						<view class="">
							订单号：{{item.orderNum}}
						</view>
						<view class="">
							{{item.createTime}}
						</view>
					</view>
				</view>
				<view class="" slot="body">
					<view class="title">
						{{item.start}} -- {{item.end}}
					</view>
					<u-gap height="16"></u-gap>
					<view class="">
						价格：
						<text style="font-size: 32rpx;color: #fa3435;">
							&yen;{{item.price}}
						</text>
					</view>
				</view>
				<view class="" slot="foot" style="text-align: right;">
					<u-button type="warning" size="mini">支付</u-button>
				</view>
			</u-card>
		</view>
	</view>
</template>

<script>
	import { orders } from "../../api/user.js"
	export default {
		data() {
			return {
				orders: [],
				current: 0,
				cate: [{
					name: '未支付',
					status: 0
				}, {
					name: '已支付',
					status: 1
				}]
			}
		},
		methods: {
			getOrder() {
				orders({
					status: this.cate[this.current].status
				}).then(res => {
					this.orders = res.rows
				})
			},
			change(index) {
				this.current = index
				this.getOrder()
			}
		},
		onLoad() {
			this.getOrder()
		}
	}
</script>

<style scoped>
	.u-tabs {
		background-color: transparent !important;
	}
</style>
