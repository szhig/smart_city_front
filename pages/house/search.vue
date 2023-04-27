<template>
	<view class="container">
		<u-navbar title='搜索结果'></u-navbar>
		
		<view class="">
			<u-card :border="false" v-for="(item,index) in list" :key="item.id" :show-head="false" @click="nav('/pages/house/info', {
				id: item.id
			})">
				<view class="" slot="body">
					<u-row>
						<u-col :span="4">
							<u-lazy-load :image="item.pic" height="200" img-mode="aspectFill"></u-lazy-load>
						</u-col>
						<u-col :span="8">
							<view class="">
								<view class="title u-line-2">
									{{item.sourceName}}
								</view>
								<view class="">
									房源面积：{{item.areaSize}}
								</view>
								<view class="">
									价格：
									<text style="color: red; font-size: 32rpx;">
										&yen;{{item.price}}
									</text>
								</view>
							</view>
						</u-col>
					</u-row>
				</view>
			</u-card>
		</view>
	</view>
</template>

<script>
	import { list } from "../../api/house.js"
	export default {
		data() {
			return {
				query: {},
				list: []
			}
		},
		methods: {
			getList() {
				list({
					sourceName: this.query.keyword
				}).then(res => {
					this.list =res.rows
					this.list.forEach(item => item.pic = this.$http + item.pic)
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
