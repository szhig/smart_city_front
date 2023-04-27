<template>
	<view class="container">
		<u-navbar title="意见反馈" ></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="nav bar">
			<u-form label-width="150">
				<u-form-item label="反馈标题">
					<u-input placeholder="请输入反馈标题" v-model="feedback.title"></u-input>
				</u-form-item>
				<u-form-item label="反馈内容">
					<u-input placeholder="请输入反馈内容" v-model="feedback.content" type="textarea"></u-input>
				</u-form-item>
			</u-form>
		</view>
		
		<u-gap></u-gap>
		
		<view class="btn">
			<u-button type="primary" size="medium" @click="loginHandler" class="btn">提交</u-button>
		</view>
	</view>
</template>

<script>
	import  { feedback} from "../../api/user.js"
	export default {
		data() {
			return {
				feedback: {
					title:'',
					content:''
				}
			}
		},
		methods: {
			loginHandler() {
				feedback(this.feedback).then(res => {
					if(res.code == 200) {
						uni.showToast({
							title: '修改成功'
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
