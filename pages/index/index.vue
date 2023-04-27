<template>
	<view class="container">
		<u-gap :height="statusBarHeight * 2"></u-gap>
		
		<view class="nav bar radius">
			<view class="search">
				<u-search v-model="keyword" @search="nav('/pages/index/search', {
					keyword: keyword
				})"></u-search>
			</view>
		</view>
		
		<u-gap></u-gap>
		
		<view class="">
			<u-swiper :list="swiper" height="350" effect3d @click="to"></u-swiper>
		</view>
		
		
		<u-gap></u-gap>
		
		<u-section title="应用服务" :right="false" color="#2979ff"></u-section>
		
		<u-gap></u-gap>
		
		
		
		<view class="nav bar radius">
			<u-grid :border="false" :col="5">
				<u-grid-item v-for="(item,index) in serviceAll" :key="item.id" @click="nav('/pages/' + item.link)">
					<u-avatar :src="item.imgUrl" size="70"></u-avatar>
					<text style="font-size: 20rpx;">
						{{item.serviceName}}
					</text>
				</u-grid-item>
				
				<u-grid-item  @click="nav('/pages/service/index', {}, 'switchTab')">
					<u-avatar :src="require('../../static/more.png')" size="70"></u-avatar>
					<text style="font-size: 20rpx;">
						更多服务
					</text>
				</u-grid-item>
			</u-grid>
		</view>
		
		<u-gap></u-gap>
		
		<u-section title="热门主题" :right="false" color="#2979ff"></u-section>
		
		<view class="hot">
			<u-row>
				<u-col :span="6" v-for="(item,index) in hot">
					<u-card :border="false" @click="nav('/pages/index/info', {
						id: item.id
					})">
						<view class="" slot="head">
							<u-lazy-load :image="item.cover" height="180" img-mode="aspectFill"></u-lazy-load>
						</view>
						<view class="u-line-1 title" slot="body">
							{{item.title}}
						</view>
					</u-card>
				</u-col>
			</u-row>
		</view>
		
		<u-gap></u-gap>
		
		<u-section title="新闻资讯" :right="false" color="#2979ff"></u-section>
		
		<u-gap></u-gap>
		
		<view class="">
			<u-tabs :list="newsCate" :current="current" @change="change"></u-tabs>
		</view>
		
		<view class="">
			<u-card :border="false" v-for="(item,index) in newsList" :key="item.id" @click="nav('/pages/index/info', {
				id: item.id
			})">
				<view class="title" slot="head">
					{{item.title}}
				</view>
				<view class="" slot="body">
					<u-row>
						<u-col :span="4">
							<u-lazy-load :image="item.cover" height="180" img-mode="aspectFill"></u-lazy-load>
						</u-col>
						<u-col :span="8">
							<view class="u-line-3">
								<u-parse :html="item.content"></u-parse>
							</view>
						</u-col>
					</u-row>
				</view>
				<view class="" slot="foot">
					<u-row>
						<u-col :span="4">
							<u-icon name="chat" :label="item.commentNum"></u-icon>
						</u-col>
						<u-col :span="4">
							<u-icon name="thumb-up" :label="item.likeNum"></u-icon>
						</u-col>
						<u-col :span="4">
							{{item.publishDate}}
						</u-col>
					</u-row>
				</view>
			</u-card>
		</view>
	</view>
</template>

<script>
	import { swiper, serviceAll, newsCate, newsList } from "../../api/common.js"
	export default {
		data() {
			return {
				keyword: '',
				swiper:[],
				serviceAll:[],
				hot:[],
				queryParams: {
					type:0
				},
				newsCate: [],
				current:0,
				newsList: []
			}
		},
		methods: {
			getSwiper(){
				swiper().then(res =>{
					this.swiper  =res.rows
					this.swiper.forEach(item => {
						item.image = this.$http + item.advImg
					})
				})
			},
			getService(){
				serviceAll().then(res => {
					this.serviceAll = res.rows
					this.serviceAll.forEach(item => {
						item.imgUrl = this.$http + item.imgUrl
					})
					this.serviceAll.length = 9
				})
			},
			getNewsCate() {
				newsCate().then(res => {
					this.newsCate = res.data
					this.queryParams.type = this.newsCate[this.current].id
					this.getList()
				})
			},
			getList() {
				newsList(this.queryParams).then(res => {
					this.newsList = res.rows
					this.newsList.forEach(item => item.cover = this.$http + item.cover)
				})
			},
			getHot(){
				newsList({
					hot: 'Y'
				}).then(res =>{
					this.hot = res.rows
					this.hot.forEach(item => item.cover = this.$http + item.cover)
				})
			},
			change(index) {
				this.current = index
				this.queryParams.type = this.newsCate[index].id
				this.getList()
			},
			to(index) {
				this.nav('/pages/index/info', {
					id: this.swiper[index].id
				})
			}
		},
		onLoad() {
			this.getSwiper()
			this.getService()  
			this.getNewsCate()
			this.getHot()
		}
	}
</script>

<style>
	.container {
	}
	
	.u-tabs {
		background-color: transparent !important;
	}
	
	.hot >>> .u-card__head {
		padding: 0 !important;
	}
</style>

 