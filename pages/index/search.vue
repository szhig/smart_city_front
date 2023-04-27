<template>
	<view class="container">
		<u-navbar title='搜索结果'></u-navbar>
		
		<view class="">
			<u-card :border="false" v-for="(item,index) in newsList" :key="item.id">
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
	import { newsList } from "../../api/common.js"
	export default {
		data() {
			return {
				query: {},
				newsList: []
			}
		},
		methods: {
			getList() {
				newsList({
					title: this.query.keyword
				}).then(res => {
					this.newsList =res.rows
					this.newsList.forEach(item => item.cover = this.$http + item.cover)
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
