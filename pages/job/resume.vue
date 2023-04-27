<template>
	<view class="container">
		<u-navbar title="我的简历"></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="">
			<u-subsection :list="cate" :current="current" @change="change"></u-subsection>
		</view>
		
		<u-gap></u-gap>
		
		<view class="">
			<view class="nav bar" v-if="current == 0">
				<u-form label-width="150">
					<u-form-item label="用户名">
						<u-avatar :src="user.avatar"></u-avatar>
					</u-form-item>
					<u-form-item label="昵称">
						<u-input placeholder="请输入密码" v-model="user.nickName"></u-input>
					</u-form-item>
					<u-form-item label="性别">
						<u-radio-group v-model="user.sex">
							<u-radio name="0">男</u-radio>
							<u-radio name="1">女</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="联系电话">
						<u-input placeholder="请输入密码" v-model="user.phonumber"></u-input>
					</u-form-item>
				</u-form>
			</view>
			
			<view class="" v-else>
				<view class="nav bar">
					<u-form label-width="150">
						<u-form-item label="工作经历">
							<u-input placeholder="请输入工作经历" v-model="resume.experience"></u-input>
						</u-form-item>
						<u-form-item label="最高学历">
							<u-input placeholder="请输入最高学历" v-model="resume.mostEducation"></u-input>
						</u-form-item>
						<u-form-item label="现居住地">
							<u-input placeholder="请输入现居住地" v-model="resume.address"></u-input>
						</u-form-item>
						<u-form-item label="期望职位">
							<u-input placeholder="请输入期望职位" v-model="resume.positionId"></u-input>
						</u-form-item>
						<u-form-item label="期望薪资">
							<u-input placeholder="请输入期望薪资" v-model="resume.money"></u-input>
						</u-form-item>
						<u-form-item label="自我描述">
							<u-input placeholder="请输入自我描述" v-model="resume.individualResume"></u-input>
						</u-form-item>
						<u-form-item label="教育经历">
							<u-input placeholder="请输入教育经历" v-model="resume.education"></u-input>
						</u-form-item>
					</u-form>
				</view>
				
				<u-gap></u-gap>
				
				<view class="btn">
					<u-button type="primary" size="medium" @click="loginHandler" class="btn">登陆</u-button>
				</view>
			</view>
		</view>
		
		<tabbar :current="2"></tabbar>
	</view>
</template>

<script>
	import { userInfo } from "../../api/user.js"
	import { resume, addResume, editResume } from "../../api/job.js"
	import Tabbar from "../../components/Tabbar.vue"
	export default {
		data() {
			return {
				user: {},
				resume: {
					"mostEducation": "博士",
					"education": "本科",
					"address": "北京",
					"experience": "1 年",
					"individualResume": "",
					"money": "7000",
					"positionId": 2,
				},
				cate: [{
					name: '基本信息'
				}, {
					name: '个人简历'
				}],
				current: 0
			}
		},
		methods: {
			getUserInfo() {
				userInfo().then(res => {
					this.user = res.user
					this.user.avatar = this.$http + this.user.avatar
				})
			},
			getResume() {
				resume(this.user.userId).then(res => {
					this.resume = res.data
				})
			},
			loginHandler() {
				if(this.resume.id) {
					editInfo(this.resume).then(res =>{
						if(res.code == 200) {
							uni.showToast({
								title: '保存成功'
							})
						}
					})
				} else {
					addResume(this.resume).then(res => {
						if(res.code == 200) {
							uni.showToast({
								title: '保存成功'
							})
						}
					})
				}
			},
			change(index) {
				this.current = index
				console.log(index);
			}
		},
		components: {
			Tabbar
		},
		onLoad() {
			this.getUserInfo()
		}
	}
</script>

<style>

</style>
