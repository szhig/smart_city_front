<template>
	<view class="container">
		<u-navbar title="找房子" :customBack="back"></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="nav bar radius">
			<view class="search">
				<u-search v-model="keyword" @search="nav('/pages/house/search', {
					keyword: keyword
				})"></u-search>
			</view>
		</view>
		
		<u-gap></u-gap>
		
		<view class="">
			<u-tabs :list="cate" :current="current" @change="change"></u-tabs>
		</view>
		
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
				list:[],
				cate:[{
					name:'二手'
				}, {
					name:'租房'
				}, {
					name:'楼盘'
				}, {
					name:'中介'
				}],
				current:0,
				keyword: ''
			}
		},
		methods: {
			getList() {
				list({
					houseType: this.cate[this.current].name
				}).then(res =>{
					this.list = res.rows
					this.list.forEach(item => item.pic = this.$http + item.pic)
				})
			},
			change(index) {
				this.current = index
				this.getList()
			}
		},
		onLoad() {
			this.getList()
		}
	}
</script>

<style>

</style>
