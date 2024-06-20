<template>
	<view class="content">
		<image class="BJ" src="../static/huoyue/huoyueBJ.png" mode=""></image>
		<view class="BJview">
			<image class="BJheadimg" :src="UserInfo.headimg" mode=""></image>
			<view class="BJName">
				<view class="BJName_nickname">
					<view class="">{{UserInfo.nickname}}</view>
					<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 297@2x.png"
					class="w-86 h-40 m-left-24"  v-if="UserInfo.is_vip==1"
					></image>
					<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 298@2x.png"
					class="w-86 h-40 m-left-24"   v-if="UserInfo.is_vip==2"
					></image>
					<!-- <image class="BJVIP" src="../../static/My/XVIP.png" mode=""></image> -->
				</view>
				<view class="BJName_TEXT">
					我的活跃度：<text class="BJName_TEXT_text">{{UserInfo.base_liveness}}</text>
				</view>
			</view>
		</view>
		<view class="Activ">
			<view class="Activ_ri">日常任务</view>
			<view class="" style="display: flex; margin: 46rpx 0;" v-for="(item,index) in list" :key="index">
				<image class="img" :src="item.img" ></image>
				<view class="" style="width: 100%;">
					<view class="Title w-600">
						<view class="Title_left">{{item.title}}</view>
						<view class="Title_right">
							<image class="huangxin" src="../static/huoyue/huangxin.png" mode=""></image>
							<view class="">{{item.num}}</view>
						</view>
					</view>
					<view class="desc txts">{{item.describe}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				UserInfo: [],
				list: [{
						img: '../static/huoyue/dongtai.png',
						title: '发布动态',
						num: '+20',
						describe: '每日发布的前三条动态每条可+20活跃度哦， 快去跟大家分享生活吧'
					},
					{
						img: '../static/huoyue/fenxiang.png',
						title: '活动分享',
						num: '+20',
						describe: '给他人动态评论可+20活跃度，上限50'
					},
					{
						img: '../static/huoyue/pinglun.png',
						title: '评论',
						num: '+20',
						describe: '给他人动态评论可+20活跃度，上限50'
					},
					{
						img: '../static/huoyue/dianzan.png',
						title: '获赞',
						num: '+20',
						describe: '已发布的动态每获得20点赞，您可增加1活跃度'
					},
					{
						img: '../static/huoyue/fabu.png',
						title: '发布活动',
						num: '+20',
						describe: '发起一场活动完成评价后可获得20活跃度， 快去召集伙伴一起出来玩吧',
					},
					{
						img: '../static/huoyue/huozan.png',
						title: '参加活动',
						num: '+20',
						describe: '参加一场活动完成评价后可获得20活跃度， 可以去活动大厅寻找喜欢的队伍哦'
					},
				],
			}
		},
		
		onLoad(options) {
			// console.log(options.UserInfo);
			this.UserInfo = JSON.parse(options.UserInfo)
			console.log(this.UserInfo);
		},
		methods: {

		}
	}
</script>

<style scoped>
	.desc{
		color: #C7C7C7;
		font-size: 28rpx;
		    margin-top: 8rpx;
			width:550rpx;
	}
	.huangxin {
		width: 53rpx;
		height: 53rpx;
	}

	.Title_right {
		width: 120rpx;
		height: 50rpx;
		background: #F8B800;
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		font-size: 26rpx;
		font-weight: 400;

	}

	.Title_left {
		font-size: 32rpx;
	}

	.Title {
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.img {
		width: 64rpx;
		height: 64rpx;
		margin-right: 12rpx;
	}

	.Activ_ri {
		font-size: 36rpx;
		font-weight: 800;
		font-family: Inter-Bold, Inter;
	}

	.Activ {
		/* height: 500rpx; */
		/* background-color: #000000; */
		border-radius: 100rpx 100rpx 0 0;
		background: #FCF8F0;
		padding: 72rpx 48rpx;
	}

	/* 背景头像活跃度 */
	.BJName_TEXT_text {
		font-size: 52rpx;

		color: #FFFFFF;
		font-family: Inter-Regular, Inter;
		font-weight: 800;
	}

	.BJName_TEXT {
		font-size: 28rpx;
		font-weight: 300;
		font-family: Inter-Light, Inter;
		color: #FFFFFF;
		display: flex;
		align-items: center;

	}

	.BJName_nickname {
		display: flex;
		align-items: center;
		font-size: 36rpx;
		color: white;
		font-weight: 800;

	}

	.BJVIP {
		width: 90rpx;
		height: 40rpx;
		margin-left: 10rpx;
	}

	.BJheadimg {
		width: 124rpx;
		height: 124rpx;
		border-radius: 50%;
		margin-right: 14rpx;
	}

	.BJview {
		display: flex;
		align-items: center;
		position: absolute;
		top: 206rpx;
		left: 48rpx;

	}

	.BJ {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 528rpx;
		width: 100%;
		z-index: -1;
	}

	.content {
		padding: 380rpx 0 0 0;

		font-family: Inter-Regular, Inter;
	}
</style>
