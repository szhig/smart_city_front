<template>
	<view class="container">
		<u-navbar title="搜索结果"></u-navbar>
		
		<view class="">
			<u-card v-for="(item,index) in list" :key="item.id" :border="false">
				<view class="" slot="head">
					<u-row>
						<u-col :span="4">
							<u-lazy-load :image="item.imgUrl" height="180" img-mode="aspectFill"></u-lazy-load>
						</u-col>
						<u-col :span="8">
							<view class="title">
								{{item.name}}
							</view>
							<view class="">
								评分：
								<text style="color: #ff9900;">
									{{item.score}}
								</text>
							</view>
							<view class="">
								配送时间：{{item.deliveryTime}}分钟
							</view>
						</u-col>
					</u-row>
				</view>
				<view class="" slot="body">
					<u-row>
						<u-col :span="2">
							
						</u-col>
						<u-col :span="10">
							<u-card v-for="(product,index) in item.productList" :show-head="false">
								<view class="" slot="body">
									<u-row>
										<u-col :span="4">
											<u-lazy-load :image="product.imgUrl" height="140" img-mode="aspectFill"></u-lazy-load>
										</u-col>
										<u-col :span="8">
											<view class="title">
												{{product.name}}
											</view>
											<view class="">
												<text style="font-size: 32rpx;color: red;">
													&yen;{{product.price}}
												</text>
											</view>
										</u-col>
									</u-row>
								</view>
							</u-card>
						</u-col>
					</u-row>
				</view>
			</u-card>
		</view>
	</view>
</template>

<script>
	import { search } from "../../api/takeout.js"
	export default {
		data() {
			return {
				list: [],
				query: {}
			}
		},
		methods: {
			getList() {
				search({
					keyword: this.query.keyword
				}).then(res => {
					this.list = res.rows
					this.list.forEach(item => {
						item.imgUrl = this.$http + item.imgUrl
						item.productList.forEach(product => {
							product.imgUrl = this.$http + product.imgUrl
						})
					})
				})
			}
		},
		onLoad(options) {
			this.query = JSON.parse(options.data)
			this.getList()
		}
	}
</script>

<style scoped>
	.container >>> .u-card__body {
		padding: 10rpx !important;
	}
</style>
