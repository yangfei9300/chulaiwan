<template>
	<view>
		<view class="" style="position: relative;">
			<image class="Signin_image" src="../static/qiandaobeijing.png" mode="" style="    width: 100%;
    height: 300rpx;"></image>
			<view class="Signin_money">
				<text class="Signin_money_text1" >{{moneylist.base_gold}}</text>
				<text class="Signin_money_text2">金币</text></view>
			<view class="">
				<view class="Singnin_guize">签到规则</view>
				<view class="Singnin_mingxi">明细</view>
			</view>
		</view>
		<view class="Singnin_lianxuview">
			<view class="Singnin_lianxu">
				<view class="Singnin_lianxu_cishu">已连续签到<text>2天</text></view>
				<view class="Singnin_content">
					<view class="Singnin_lianxu_content" v-for="(item,index) in qiandaolist" :key="index">
						<view class="lq">明日领取</view>
						<view class="Singnin_lianxu_border">
							<view class="Singnin_lianxu_time">{{item.week}}</view>
							<image class="Singnin_lianxu_image" src="../../static/index/denglulogo.png" mode=""></image>
							<view class="Singnin_lianxu_jifen">+{{item.gold}}</view>
						</view>
						<view v-if="item.is_sign==0" class="Singnin_lianxu_zhuangtai"
							@click="likeqiandao(item.gold,item.time,1)">签到</view>
						<view v-if="item.is_sign!==1" class="Singnin_lianxu_zhuangtai">已签</view>
						<view v-if="item.is_sign==0&&item.is_bq==0" class="Singnin_lianxu_zhuangtai">补签</view>
						
					</view>
				</view>
  
			</view>
			<!-- 会员中心0 -->
			<view class="" style="position: relative;">
				<view class="Gr13" @click="Vipcenter">
					<image class="Grhybj" src="https://ta.imjiayi.com/upload/upload/hybj.png" mode=""></image>
					<view class="Gr14">
						<image class="Grhytb" src="../../static/myimg/VIP%203.png" mode=""></image>
						<view class="Gr15">会员中心</view>
					</view>
				</view>
			</view>
			<view class="">
				奖励金币
			</view>
			<view class="">
				<view class="Jl_view">
					<image class="Jl_avatar" src="../../static/myimg/签到.png" mode=""></image>
					<view class="Jl_content">
						<view class="Jl_right">
							<text class="Jl_right_title">每日签到</text>
							<image class="Jl_right_image" src="../../static/index/denglulogo.png" mode=""></image>
							<text class="Jl_right_jf">神秘礼包</text>
						</view>
						<view class="Jl_right_content">周一至周日每天签到可领取啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 接口
				baseurl: '',
				// header头部
				token: '',
				// 签到数据
				qiandaolist: [],
				// 金币数据
				moneylist:[],
			}
		},
		onLoad() {
			// 获取token
			this.token = uni.getStorageSync('token');
			// 获取请求地址
			this.baseurl = getApp().globalData.baseurl;
	
		},
		mounted() {
		// 获取签到数据
		this.Signln();
		// 获取金币数据
		this.money();
		},
		methods: {
			// 签到
			likeqiandao(gold, time, type) {
				uni.request({
					url: this.baseurl + '/api/userSign/userSignDo',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token,
					},
					data: {
						gold: gold,
						time: time,
						type: type,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log(res);
						this.moneylist=res.data.data;
						this.money();
						this.Signln();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 获取用户金币
			money() {
				uni.request({
					url: this.baseurl + '/api/userProp/getUserCredit',
					header:{token:this.token,},
					method: 'POST',
					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log(res);
						this.moneylist=res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 获取签到数据
			Signln() {
				uni.request({
					url: this.baseurl + '/api/userSign/getUserProp',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log(res);
						this.qiandaolist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	/* 奖励金币 */
	.Jl_right_content {
		font-size: 24rpx;
		color: #C7C7C7;
		width: 550rpx;
	}

	.Jl_content {
		margin-left: 10rpx;
	}

	.Jl_right_jf {
		font-size: 28rpx;
		font-weight: 600;
		color: #f8b800;
	}

	.Jl_right_title {
		font-size: 32rpx;
		font-weight: 600;

	}

	.Jl_right_image {
		width: 36rpx;
		height: 30rpx;
		margin: 0 10rpx;

	}

	.Jl_right {
		display: flex;
		align-items: center;
	}

	.Jl_view {
		display: flex;
		align-items: end;
		border-bottom: 1rpx solid #9999;
		padding: 20rpx 0;
	}

	.Jl_avatar {
		width: 80rpx;
		height: 60rpx;
	}

	/* 会员中心 */
	.Grvipimg {
		width: 20rpx;
		height: 20rpx;
	}

	.Grhybj {
		width: 90vw;
		height: 160rpx;
		margin: 20rpx 0;
	}

	.Grhytb {
		width: 50rpx;
		height: 50rpx;
	}

	.Gr15 {
		font-size: 44rpx;
		font-weight: 600;
		color: white;
	}

	.Gr14 {
		display: flex;
		align-items: center;
		position: absolute;
		top: 75rpx;
		left: 35rpx;
	}

	.Gr13 {
		position: relative;
	}

	/* 签到 */

	.lq {
		font-size: 10rpx;
		color: white;
		font-weight: 600;
		background: #DEB44E;
		border-radius: 2px 2px 2px 2px;
		width: 50rpx;
	}

	.Singnin_lianxu_cishu {
		font-size: 28rpx;
		font-weight: 600;
		margin: 10rpx;
	}

	.Singnin_content {
		display: flex;
		justify-content: space-around;
	}

	.Singnin_lianxu_zhuangtai {
		font-size: 16rpx;
	}

	.Singnin_lianxu_content {
		/* align-items: center; */
		width: 74rpx;
		text-align: center;
		margin: 20rpx 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.Singnin_lianxu_time {
		font-size: 16rpx;
	}

	.Singnin_lianxu_jifen {
		font-size: 16rpx;
	}

	.Singnin_lianxu_border {
		width: 74rpx;
		height: 100rpx;
		border: 1rpx solid #9999;
		display: flex;
		flex-direction: column;

		background: rgba(222, 180, 78, 0.1400);
		align-items: center;
		border-radius: 10rpx;
	}

	.Singnin_lianxu_image {
		width: 40rpx;
		height: 40rpx;
	}

	.Singnin_lianxu {
		padding: 10rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 20px 0px rgba(156, 156, 156, 0.2000);
		border-radius: 10px 10px 10px 10px;
		opacity: 1;
	}

	.Singnin_lianxuview {
		padding: 20rpx 40rpx;
	}

	.Signin_money_text2 {
		font-size: 36rpx;
		word-break: break-all;
		color: white;
	}

	.Signin_money_text1 {
		font-size: 70rpx;
		color: white;
	}

	.Singnin_mingxi {
		position: absolute;
		bottom: 15rpx;
		right: 80rpx;
		color: white;
		font-weight: 400;
		font-size: 32rpx;

	}

	.Singnin_guize {
		position: absolute;
		bottom: 15rpx;
		left: 100rpx;
		color: white;
		font-weight: 400;
		font-size: 32rpx;

	}

	.Signin_money {
		position: absolute;
		top: 100rpx;
		display: flex;
		justify-content: center;
		left: 250rpx;
		right: 250rpx;
		align-items: baseline;
	}

	.Signin_image {
		width: 100%;
		height: 300rpx;
	}
</style>
