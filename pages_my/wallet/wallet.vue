<template>
	<view>
		
		<view class="bjtp">
			<view class="zd" @click="zhangdan()">
				账单
			</view>
			<image class="wall_bjimg" src="https://ta.imjiayi.com/upload/upload/qianbao.png" mode=""></image>
			<view class="wall_money ">
				<view class="">我的点券</view>
				<view class="wall_money_money">300</view>
			</view>
		</view>
		<!-- 点券充值 -->
		<view class="coupons_fview">
			<view class="coupons_coupons">点券充值</view>
			<view class="coupons">
				<view class="coupons_for" v-for="item in 6" @click="index=item" :class="{avtive:index==item}">
					<view class="coupons_for_item">
						<view class="coupons_for_view">
							<image class="coupons_for_image" src="../../static/index/denglulogo.png" mode=""></image>
							<view class="coupons_for_view2">10</view>
						</view>
						<view class="coupons_for_money">8.00元</view>
					</view>

				</view>
			</view>
			<view class="agreement">充值即代表同意<text>《出来玩充值协议》</text></view>
			<button class="agreement_btn" >充值</button>
			<view class="xinyu_title">购买道具</view>
			<view class="xinyu">
				<view class="xinyu_view" >
					<image class="xinyu_image" src="../../static/index/denglulogo.png" mode=""></image>
				</view>
				<view class="xinyu_view1" >
					<view class="xinyu_view1_1">信誉积分修复卡</view>
					<view class="xinyu_view1_2">使用一张此卡片可修复1信誉积分</view>
				</view>
				<view class="xinyu_view2" >
					<view class="xinyu_view2_2">购买</view>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			index:0,
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success(res) {
					console.log(res);
				}
			})
		},
		methods: {
		zhangdan(){
			uni.navigateTo({
				url: '../money_wall/money_wall',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
		}
	}
</script>

<style scoped lang="scss">
	.zd{
		position: absolute;
		    right: 40rpx;
		    top: 40rpx;
		    color: white;
		    font-size: 32rpx;
		    font-weight: 600;
	}
	.coupons_coupons{
		    margin-bottom: 10rpx;
		    font-size: 36rpx;
		    font-weight: 600;
	}
	.xinyu_view2_2{
		    width: 100rpx;
		    height: 40rpx;
		    background: #FFC803;
			font-size: 24rpx;
		    box-shadow: 0rpx 0rpx 30rpx 1rpx rgba(0,0,0,0.0500);
		    border-radius: 10rpx;
		    color: white;
			    display: flex;
			    align-items: center;
			    justify-content: center;
	}
	.xinyu_view2{
		    width: 20%;
		    text-align: center;
		    display: flex;
		    justify-content: center;
	}
	.xinyu_view1_2{
		font-size: 24rpx;
		color: #C7C7C7;
		font-size: 600;
	}
	.xinyu_view1_1{
		font-size: 32rpx;
		font-weight: 600;
	}
	.xinyu_view1{
		width: 65%;
	}
	.xinyu_view{
		width: 15%;text-align: center;
	}
	.xinyu_image{
		width: 50rpx;
		height: 50rpx;
	}
	.xinyu_title{
		margin-top: 40rpx;
		    font-size: 36rpx;
		    font-weight: 600;
	}
	.xinyu{
		display: flex;
		align-items: center;
		height: 51px;
		border-radius: 20rpx;
		opacity: 1;
		border: 1rpx solid #EDEDED;
	}
	.agreement_btn{
		width: 336rpx;
		height: 58rpx;
		background: #FFC803;
		box-shadow: 0rpx 0rpx 30rpx 2rpx rgba(0,0,0,0.0500);
		border-radius: 32rpx;
		opacity: 1;
		color: white;
		align-items: center;
		    justify-content: center;
		    display: flex;
			    margin-top: 50rpx;
			
	}
	.agreement{
		color: rgba(199,199,199,1);
		font-size: 24rpx;
	}
	.coupons_for_image{
		      width: 40rpx;
		      height: 40rpx;
		      border-radius: 50rpx;
		  
	}
	.coupons_for_money{
		font-size: 28rpx;
		font-weight: 600;
	}
	.coupons_for_view2{
		    font-weight: 600;
		    font-size: 32rpx;
		
	}
	.coupons_for_view{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.coupons_for_item{
		>view{
			    margin-top: 10rpx;
		}
	}
	.coupons_for {
		width: 201rpx;
		height: 100rpx;
		// background-color: #4CD964;
		margin: 10rpx;
		border-radius: 15rpx;
		text-align: center;
		border: 1rpx solid #EDEDED;
	}
.avtive{
		background: rgba(248,184,0,0.0300);
		
		border: 1rpx solid #F8B800;
	}
	.coupons {
		display: flex;
		flex-wrap: wrap;
	}

	.coupons_fview {
		padding: 20rpx 40rpx;
	}

	.wall_money {
		font-size: 40rpx;
		text-align: center;
		color: white;
		position: absolute;
		left: 154rpx;
		top: 164rpx;
		font-weight: 600;

		>.wall_money_money {
			font-size: 70rpx;
		}

		>view {
			margin: 10rpx;
		}
	}

	.wall_bjimg {
		width: 100%;
		height: 388rpx;
	}

	.bjtp {
		position: relative;

	}
</style>
