<template>
	<view class="container">
		<u-navbar title="投递记录"></u-navbar>
		
		
		<view class="">
			<u-card :border="false" v-for="(item,index) in list">
				<view class="" slot="head">
					<view class="title">
						{{item.postName}}
					</view>
					<view class="">
						公司：{{item.companyName}}
					</view>
					<view class="">
						投递时间：{{item.satrTime}}
					</view>
				</view>
			</u-card>
		</view>
		
		<tabbar :current="1"></tabbar>
	</view>
</template>

<script>
	import Tabbar from "../../components/Tabbar.vue"
	import { history } from "../../api/job.js"
	import { userInfo } from "../../api/user.js"
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {
			getUser() {
				userInfo().then(res =>{
					this.user = res.user
					this.getHistory()
				})
			},
			getHistory(){
				history(
					{
						userId: this.user.userId
					}
				).then(res => {
					this.list = res.rows
					console.log(this.list);
				})
			}
		},
		components: {
			Tabbar
		},
		onLoad() {
			this.getUser()
		}
	}
</script>

<style>

</style>
