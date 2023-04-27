<template>
	<view class="">
		<u-navbar title='选择城市'></u-navbar>
		
		<view class="nav bar">
			<u-index-list :scrollTop="scrollTop">
				<view v-for="(item, index) in citys" :key="index">
					<u-index-anchor :index="item.label" />
					<view class="list-cell" v-for="city in item.data">
						{{city}}
					</view>
				</view>
			</u-index-list>
		</view>
	</view>
</template>

<script>
	import { city } from "../../api/city.js"
	export default {
		data() {
			return {
				citys: [],
				scrollTop: 0
			}
		},
		methods: {
			getCity() {
				city().then(res => {
					this.citys = res.data
					this.citys = this.sort()
					console.log(this.citys)
				})
			},
			sort() {
				let segs = []
				let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
				let zh = '啊巴擦达额发噶哈鸡喀拉马那哦怕七让撒他哇西呀咋'.split("")
				console.log(letter);
				console.log(zh);
				
				letter.forEach((item, index) => {
					let cur = { label: item, data: []}
					
					this.citys.forEach(city => {
						if(city.name.localeCompare(zh[index]) > 0 && city.name.localeCompare(zh[index + 1]) < 0) {
							cur.data.push(city.name)
						}
					})
					
					cur.data.sort(function(a, b){
						return a.localeCompare(b)
					})
					segs.push(cur)
				})
				
				return segs
			}
		},
		onLoad() {
			this.getCity()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style>

</style>
