<template>
	<view class="container">
		<u-navbar title="账户余额"></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="nav bar">
			<u-form label-width="150">
				<u-form-item label="充值金额">
					<u-input placeholder="请输入充值金额" v-model="money"></u-input>
				</u-form-item>
			</u-form>
		</view>
		
		<u-gap height="16"></u-gap>
		
		<view class="">
			<u-grid :border="false">
				<u-grid-item v-for="(item,index) in cate" :class="current == index ? 'cur' : 'normal'" @click="current == index ? current = cate.length : current = index">
					<text style="color: red;">
						&yen;{{item.money}}
					</text>
				</u-grid-item>
			</u-grid>
		</view>
		
		<u-gap></u-gap>
		
		<view class="btn">
			<u-button type="primary" size="medium" @click="loginHandler" class="btn">充值</u-button>
		</view>
	</view>
</template>

<script>
	import { charge } from "../../api/user.js"
	export default {
		data() {
			return {
				cate: [{
					money: 10
				}, {
					money: 20
				}, {
					money: 50
				}, {
					money: 100
				}, {
					money: 200
				}, {
					money: 500
				}],
				current: 7,
				money: undefined
			}
		},
		methods: {
			loginHandler() {
				if(this.money < 0 && this.current >= this.cate.length) {
					uni.showToast({
						title: '请选择充值金额'
					})
					return
				}
				
				let money = 0
				if(this.money) {
					money = this.money
				} else {
					money = this.cate[this.current].money
				}
				
				charge({
					money: money
				}).then(res =>{
					if(res.code == 200) {
						uni.showToast({
							title: '充值成功'
						})
					}
				})
			}
		}
	}
</script>

<style scoped>
	.normal {
		border: 1px solid white !important;
	}
	
	.cur {
		border: 1px solid red;
	}
</style>
