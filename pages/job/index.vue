<template>
	<view class="container">
		<u-navbar title="找工作" :customBack="back"></u-navbar>
		
		<u-gap></u-gap>
		
		<view class="">
			<u-swiper :list="swiper" height="350" effect3d></u-swiper>
		</view>
		
		<u-gap></u-gap>
		
		<view class="radius nav bar">
			<view class="search">
				<u-search v-model="queryParams.name" @search="search"></u-search>
			</view>
		</view>
		
		<u-gap></u-gap>
		
		<view class="nav bar radius">
			<u-grid :border="false" :col="3">
				<u-grid-item v-for="(item,index) in cate" :key="item.id" @click="cateGet(item)">
					{{item.professionName}}
				</u-grid-item>
			</u-grid>
		</view>
		
		<view class="">
			<u-card :border="false" v-for="(item,index) in list" :key="item.id" @click="nav('/pages/job/info', {
				id: item.id
			})">
				<view class="title" slot="head">
					{{item.name}}
				</view>
				<view class="" slot="body">
					<view class="u-line-2">
						岗位职责：{{item.obligation}}
					</view>
					<view class="">
						公司地点：{{item.address}}
					</view>
					<view class="">
						薪资待遇：
						<text style="font-size: 32rpx;color: red;">
							{{item.salary}}
						</text>
					</view>
				</view>
			</u-card>
		</view>
		<tabbar :current="0"></tabbar>
	</view>
</template>

<script>
	import { cate, list } from "../../api/job.js"
	import {swiper} from "../../api/common.js"
	import Tabbar from "../../components/Tabbar.vue"
	export default {
		data() {
			return {
				cate: [],
				list: [],
				queryParams: {
					name: undefined,
					professionId: undefined
				},
				swiper: []
			}
		},
		methods: {
			getCate() {
				cate().then(res =>{
					this.cate = res.rows
					this.cate.length = 9
				})
			},
			getList() {
				list(this.queryParams).then(res => {
					this.list = res.rows
				})
			},
			getSwiper() {
				
				swiper().then(res => {
					this.swiper = res.rows
					this.swiper.forEach(item => item.image = this.$http + item.advImg)
				})
			},
			cateGet(item) {
				this.queryParams.professionId = item.id
				this.getList()
			},
			search() {
				this.getList()
			}
		},
		onLoad() {
			this.getSwiper()
			this.getCate()
			this.getList()
		},
		components: {
			Tabbar
		}
	}
</script>

<style>

</style>
