<template>
	<view class="container">
		<u-navbar title="外卖点餐" :customBack="back"></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="nav bar radius">
			<u-row>
				<u-col :span="4" style="text-align: center;">
					<u-icon name="map-fill" color="#2979ff" :label="city" @click="nav('/pages/takeout/citys')"></u-icon>
				</u-col>
				<u-col :span="8">
					<view class="search">
						<u-search :show-action="false" v-model="keyword" @search="nav('/pages/takeout/search', {
							keyword: keyword
						})"></u-search>
					</view>
				</u-col>
			</u-row>
		</view>
		
		<u-gap></u-gap>
		
		<view class="">
			<u-swiper :list="swiper" height="350" effect3d></u-swiper>
		</view>
		
		<u-gap></u-gap>
		
		<view class="nav bar radius">
			<u-grid :border="false" :col="5">
				<u-grid-item v-for="(item,index) in theme" :key="item.id" @click="nav('/pages/takeout/theme', {
					name: item.themeName,
					id: item.id
				})">
					<u-avatar :src="item.imgUrl"></u-avatar>
					{{item.themeName}}
				</u-grid-item>
			</u-grid>
		</view>
		
		<view class="">
			<u-card :border="false" v-for="(item,index) in near" :key="item.id" :show-head="false">
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
		
		<TabkeBar :current="0"></TabkeBar>
	</view>
</template>

<script>
	import { swiper, theme, near } from "../../api/takeout.js"
	import TabkeBar from "../../components/TakeBar.vue"
	export default {
		data() {
			return {
				swiper: [],
				theme: [],
				near: [],
				city: "",
				keyword: ""
			}
		},
		methods: {
			getSwiper(){
				swiper().then(res => {
					this.swiper = res.rows
					this.swiper.forEach(item => item.image = this.$http + item.advImg)
				})
			},
			getTheme() {
				theme().then(res => {
					this.theme = res.data
					this.theme.forEach(item => item.imgUrl = this.$http + item.imgUrl)
				})
			},
			getNear() {
				near().then(res => {
					this.near = res.rows
					this.near.forEach(item => item.imgUrl = this.$http + item.imgUrl)
				})
			}
		},
		onLoad() {
			this.getNear()
			this.getSwiper()
			this.getTheme()
		},
		onShow() {
			this.city = uni.getStorageSync("city") || '长沙'
		},
		components: {
			TabkeBar
		}
	}
</script>

<style>

</style>
