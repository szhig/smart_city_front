<template>
	<view class="container">
		<u-navbar title="个人信息" ></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="nav bar">
			<u-form label-width="150">
				<u-form-item label="用户名">
					<u-upload :action="$upload" :header=" {
						'Authorization' : token
					}" :file-list="filelist" :max-count="1" @on-success="success"></u-upload>
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
					<u-input placeholder="请输入密码" v-model="user.phonenumber"></u-input>
				</u-form-item>
				<u-form-item label="身份证号">
					<u-input placeholder="请输入密码" v-model="card" @focus="isEdit = true" @blur="isEdit=false"></u-input>
				</u-form-item>
			</u-form>
		</view>
				
		<u-gap></u-gap>
		
		
		<view class="btn">
			<u-button type="primary" size="medium" @click="loginHandler" class="btn">修改</u-button>
		</view>
	</view>
</template>

<script>
	import {  userInfo, editInfo} from "../../api/user.js"
	export default {
		data() {
			return {
				user: {},
				token: '',
				filelist: [],
				showCard:"",
				isEdit: false
			}
		},
		methods: {
			getUser() {
				userInfo().then(res =>{
					this.user=  res.user
					this.filelist.push({
						url:this.$http + this.user.avatar
					})
					this.showCard = this.getCard()
					
					console.log(this.user);
				})
			},
			getCard(){
				return this.user.idCard.slice(0, 4) + "*********" + this.user.idCard.slice(this.user.idCard.length - 4 , this.user.idCard.length)
			},
			loginHandler() {
				editInfo(this.user).then(res =>{
					if(res.code == 200) {
						uni.showToast({
							title: '保存成功'
						})
					}
				})
			},
			success(res) {
				console.log(res);
				this.user.avatar = '/prod-api' + res.fileName
			}
		},
		computed: {
			card: {
				get() {
					if(this.isEdit) {
						return this.user.idCard
					} else {
						return this.showCard
					}
				},
				set(value) {
					if(this.isEdit) {
						this.user.idCard = value
						this.showCard =  this.getCard()
					}
				}
			}
		},
		onLoad() {
			this.getUser()
			this.token = uni.getStorageSync("token")
		}
	}
</script>

<style>

</style>
