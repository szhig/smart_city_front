<template>
	<view class="container">
		<u-navbar title=""></u-navbar>
		<u-gap></u-gap>
		
		<u-section title="招聘信息" color="#2979ff" :right="false"></u-section>
		<view class="nav bar">
			
			<u-card :border="false">
				<view class="" slot="head">
					<view class="title">
						{{info.name}}
					</view>
					
				</view>
				<view class="" slot="body">
					<view class="">
						岗位职责：{{info.obligation}}
					</view>
					<view class="">
						薪资待遇：
						<text style="color: red; font-size: 32rpx;">
							&yen;{{info.salary}}
						</text>
					</view>
					<view class="">
						联系人：{{info.contacts}}
					</view>
					<view class="">
						工作年限：{{info.need}}
					</view>
				</view>
			</u-card>
		</view>
		
		
		<u-section title="公司信息" color="#2979ff" :right="false"></u-section>
		
		<view class="nav bar">
			
			<u-card :border="false">
				<view class="" slot="head">
					<view class="title">
						{{company.companyName}}
					</view>
				</view>
				<view class="" slot="body">
					<view class="" style="text-indent: 2em;">
						{{company.introductory}}
					</view>
				</view>
			</u-card>
		</view>
		
		
		<view class="btn">
			<u-button type="primary" size="medium" @click="loginHandler" class="btn">投递</u-button>
		</view>
	</view>
</template>

<script>
	import { info, company, resume, delivery } from "../../api/job.js"
	import { userInfo } from "../../api/user.js"
	export default {
		data() {
			return {
				user: {},
				info:{},
				query:{},
				resume: {},
				company: {},
				delivery: {
					companyId: 0,
					"companyName": "",
					"money": "",
					"postId": 0,
					"postName": "",
					"remark": "",
					"userId": 0,
					"userName": ""
				}
			}
		},
		methods: {
			getInfo() {
				info(this.query.id).then(res => {
					this.info = res.data
					this.getCompany()
					this.delivery.postName = this.info.name
					this.delivery.postId = this.info.id
				})
			},
			getCompany() {
				company(this.info.companyId).then(res => {
					this.company = res.data
					this.delivery.companyId = this.company.id
					this.delivery.companyName = this.company.companyName
				})
			},
			getUserInfo() {
				userInfo().then(res => {
					this.user=  res.user
					this.getResume()
				})
			},
			getResume() {
				resume(this.user.userId).then(res => {
					this.resume = res.data
					this.delivery.money = this.resume.money
				})
			},
			loginHandler() {
				if(this.resume.experience == "" || this.resume.education == "") {
					this.nav('/pages/job/resume')
					return
				}
				
				delivery(this.delivery).then(res => {
					if(res.code == 200) {
						uni.showToast({
							title: '投递成功'
						})
					}
				})
			}
		},
		onLoad(options) {
			this.query = JSON.parse(options.data)
			this.getInfo()
			this.getUserInfo()
		}
	}
</script>

<style>

</style>
