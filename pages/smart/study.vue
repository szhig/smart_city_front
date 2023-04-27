<template>
	<view class="container">
		<u-navbar title='党员学习'></u-navbar>
		
		<u-gap height="16"></u-gap>
		
		<view class="">
			<u-subsection :list="cate" :current="current" @change="change"></u-subsection>
		</view>
		
		<view class="">
			<view class="" v-if="current == 0">
				<u-card :border="false" v-for="(item,index) in list" :key="item.name">
					<view class="" slot="head">
						<u-row>
							<u-col :span="4">
								<u-lazy-load :image="item.imgUrl" height="180" img-mode="aspectFill"></u-lazy-load>
							</u-col>
							<u-col :span="8">
								<view class="title">
									{{item.name}}
								</view>
								<view class="">
									学习进度：
									<text style="color: #fa3534;">{{item.per}}%</text>
								</view>
								<view class="u-line-2">
									<u-parse :html="item.desc"></u-parse>
								</view>
							</u-col>
						</u-row>
					</view>
					<view class="" slot="body">
						<u-button type="error" size="medium" class="btn" @click="nav('/pages/smart/studyInfo', {
							name: item.name,
							index: item.index
						})">继续学习</u-button>
					</view>
				</u-card>
			</view>
			<view class="" v-else>
				<u-gap></u-gap>
				<u-gap></u-gap>
				<u-gap></u-gap>
				<u-gap></u-gap>
				<u-gap></u-gap>
				<u-gap></u-gap>
				<u-gap></u-gap>
				<u-empty text="暂无学习内容"></u-empty>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cate: [{
					name: '党内学习'
				}, {
					name: '党外学习'
				}],
				current: 0,
				list: [{
					name: 'xxx1',
					imgUrl: require('../../static/smart/study/1.jpg'),
					per: '89',
					index: 1,
					desc: '　太平养老保险股份有限公司(简称“太平养老”)成立于2004年，是中管金融机构中国太平保险集团有限责任公司旗下专业经营养老金业务和员工福利保障业务的重要子公司，也是我国首家国有专业养老保险公司，服务网络覆盖全国。于2019年5月7日，组织培训并开始使用先锋党建信息化平台(以下简称：党建平台)。从5月7日平台上线以来，公司党委高度重视，迅速启动，有重点、有计划有序推进平台应用各项工作。'
				}, {
					index: 2,
					name: 'xxx2',
					imgUrl: require('../../static/smart/study/2.jpg'),
					per: '54',
					desc: '2017年3月，中国石油启动党建信息化平台建设，运用互联网、云计算、大数据等新一代信息技术，构建全覆盖、全过程、全维度的党建信息化平台，实现“党组建网、党委用网、支部上网、党员在网“，打造互联网上的红色精神家园，开启中国石油“互联网+党建”新模式，中国石油党建工作进入线上线下良性互动、融合发展的新阶段。　　按照“总体规划、分步实施、快速迭代”的模式，历经需求分析、专家论证、方案设计、产品开发、实施推广等阶段，2017年10月9日上线试运行，2018年7月实现全集团上线应用，2019年4月石油党建1.0峻工验收，2019年9月启动石油党建2.0建设，从“互联网+党建”向“智慧党建”跨越 。'
				}]
			}
		},
		methods: {
			change(index) {
				this.current = index
			}
		}
	}
</script>

<style>

</style>
