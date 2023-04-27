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
					text: '找工作',
					page: '/pages/job/index'
				}, {
					text: '投递记录',
					page: '/pages/job/history'
				}, {
					text: '个人简历',
					page: '/pages/job/resume'
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
