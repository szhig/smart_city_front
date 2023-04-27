<template>
	<view class="container">
		<u-navbar title="数据分析" :is-back="false"></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="nav bar">
			<qiun-data-charts type="column" :chartData="takeoutData"></qiun-data-charts>
		</view>
		
		<u-gap></u-gap>
		
		<view class="nav bar">
			<qiun-data-charts type="line" :chartData="lineData" :opts="opts"></qiun-data-charts>
		</view>
		
		<u-gap></u-gap>
		
		<view class="nav bar">
			<qiun-data-charts type="pie" :chartData="postData"></qiun-data-charts>
		</view>
		
		<u-gap></u-gap>
		
		<view class="nav bar">
			<qiun-data-charts type="bar" :chartData="parkData"></qiun-data-charts>
		</view>
	</view>
</template>

<script>
	import QiunDataCharts from "../../uni_modules/qiun-data-charts/qiun-data-charts.vue"
	import { history, post, takeout, line} from "../../api/analyse.js"
	export default {
		data() {
			return {
				takeoutData: {
					categories: [],
					series: [{
						name: '月销量',
						data: []
					}, {
						name: '评分',
						data:[]
					}]
				},
				lineData: {
					categories: [],
					series: [{
						name: '停车时间',
						data: [],
						format: 'yAxisDemo2'
					}]
				},
				postData: {
					series: [{
						name: '岗位分析',
						data:[]
					}]
				},
				parkData: {
					categories:[],
					series: [{
						name: '停车次数',
						data: []
					}]
				},
				opts: {
					yAxis: {
						data: [{
							format: 'yAxisDemo2'
						}]
					}
				}
			}
		},
		methods: {
			getTakeout() {
				takeout().then(res => {
					res.rows.length = 5
					setTimeout(() => {
						res.rows.forEach(item => {
							this.takeoutData.categories.push(item.name)
							this.takeoutData.series[0].data.push(item.saleQuantity)
							this.takeoutData.series[1].data.push(item.score)
						})
					}, 1000)
				})
			},
			getLine() {
				line().then(res =>{
					setTimeout(() =>{
						res.rows.forEach(item => {
							this.lineData.categories.push(item.name)
							this.lineData.series[0].data.push(new Date("2002-12-2 " + item.endTime).getTime())
						})
					}, 1000)
				})
			},
			getPost() {
				post().then(res => {
					setTimeout(() => {
						let names = []
						res.rows.forEach(item => names.push(item.professionName))
						
						names = new Set(names)
						
						names.forEach(name => {
							let count = 0
							res.rows.forEach(item =>{
								if(item.professionName == name) count++
							})
							this.postData.series[0].data.push({
								name: name,
								value: count
							})
						})
					}, 1000)
				})
			},
			getPark() {
				history({
					parkName: '天津市邦仓储威物流停车场'
				}).then(res => {
					setTimeout(() =>{
						let months = [1,2,3,4,5,6,7,8,9,10,11,12]
						
						months.forEach(month => {
							let count = 0
							res.rows.forEach(item => {
								if(month == new Date(item.entryTime).getMonth() + 1) count++
							})
							this.parkData.categories.push(month)
							this.parkData.series[0].data.push(count)
						})
					}, 1000) 
				})
			}
		},
		components: {
			QiunDataCharts
		},
		onLoad() {
			this.getTakeout()
			this.getPark()
			this.getPost()
			this.getLine()
		}
	}
</script>

<style>

</style>
