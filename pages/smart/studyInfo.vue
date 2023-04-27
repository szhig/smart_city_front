<template>
	<view class="container">
		<u-navbar :title="query.name"></u-navbar>
		
		
		<view class="">
			<video :src="require('../../static/smart/study/video01.mp4')" controls style="width: 100%;" v-show="query.index == 1"></video>
			<video :src="require('../../static/smart/study/video02.mp4')" controls style="width: 100%;" v-show="query.index == 2"></video>
			<video :src="require('../../static/smart/study/video03.mp4')" controls style="width: 100%;" v-show="query.index == 3"></video>
		</view>
		
		<view class="footer">
			<u-search placeholder="说点什么..." :show-action="false"></u-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				query: {}
			}
		},
		methods: {
			
		},
		onLoad(optins) {
			this.query = JSON.parse(optins.data)
		}
	}
</script>

<style>

</style>
