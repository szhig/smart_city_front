<template>
	<view class="">
		<u-tabbar :list="list" v-model="cur" @change="change" activeColor="#2979ff"></u-tabbar>
	</view>
</template>

<script>
	export default {
		name:"Tabbar",
		props:['current'],
		data() {
			return {
				list: [{
					text: '首页',
					page: '/pages/takeout/index'
				}, {
					text: '订单',
					page: '/pages/takeout/order'
				}, {
					text: '我的',
					page: '/pages/takeout/person'
				}],
				
				cur: 0
			};
		},
		mounted() {
			this.cur = this.$props.current
		},
		methods: {
			change(index) {
				this.nav(this.list[index].page)
			}
		}
	}
</script>

<style>

</style>
