<template>
	<view class="content">
		<swiper class="Shoop_swiper" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="Shoop_swiper_image" src="../../static/indeximg/banner.png" mode=""></image>
				</view>
			</swiper-item>

		</swiper>
		<view class="Shoop_money">
			<view class="Shoop_moneyview">
				<image class="Shoop_money_image" src="../static/juan.png" mode=""></image>
				<view class="Shoop_money_view">{{moneylist.base_coupon}}</view>
			</view>
			<view class="Shoop_moneyview">
				<image class="Shoop_money_image" src="../static/jinbi.png" mode=""></image>
				<view class="Shoop_money_view">{{moneylist.base_gold}}</view>
			</view>
		</view>
		<view class="">道具兑换</view>
		<view class="Shoop_prop">
			<view class="Shoop_prop_for" v-for="(item,index) in Proplist" :key="index">
				<image class="Shoop_for_bj" src="../static/propbj.png" mode=""></image>
				<image class="Shoop_for_djimg" :src="item.img" mode=""></image>
				<view class="Shoop_for_title">{{item.name}}</view>
				<view class="Shoop_for_money">{{item.money}}点券</view>
				<view class="Shoop_for_prop" @click="duihuan(item.id)">兑换</view>
			</view>
			
		</view>
		<view class="">道具背包</view>
		<view class="">
			<view class="Jl_view" v-for="(Useritem,Userindex) in UserProplist" :key='Userindex'>
				<image class="Jl_avatar" :src="Useritem.img" mode="aspectFit"></image>
				<view class="Jl_content">
					<view class="Jl_right">
						<text class="Jl_right_title">{{Useritem.name}}</text>
						<text class="Jl_right_num">x{{Useritem.num}}</text>
				<!-- 		<image class="Jl_right_image" src="../../static/index/denglulogo.png" mode=""></image>
						<text class="Jl_right_jf">神秘礼包</text> -->
					</view>
					<view class="Jl_right_content">{{Useritem.remark}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			baseurl:'',
			token:'',
			moneylist:[],
			Proplist:[],
			UserProplist:[],
			}
		},
		mounted() {
			this.baseurl=getApp().globalData.baseurl;
			this.token=uni.getStorageSync('token');
			// 金币点券
			this.money();
			// 道具列表
			this.Prop();
			this.UserProp();
		},
		methods: {
			// 获取道具数量
			UserProp(){
				uni.request({
					url: this.baseurl+'/api/userProp/getUserProp',
					method: 'POST',
					header:{token:this.token},
					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("会员道具数量",res);
						this.UserProplist=res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 兑换道具
			duihuan(id){
				uni.request({
					url:this.baseurl+'/api/propOrder/propPay',
					method: 'POST',
					data: {id,city:uni.getStorageSync("citySel"),},
					header:{token:this.token},
					success: res => {
						console.log(res);
						uni.showModal({
							title: '兑换提醒',
							content: res.data.info,
							showCancel: false,
							cancelText: '取消',
							confirmText: '确定',
							success: res => {
								if(res.confirm){
									console.log("确定",res);
								}else if(res.cancel){
									console.log('取消',res);
								}
							},
							fail: () => {},
							complete: () => {}
						});
					},
					fail: () => {},
					complete: () => {}
				});
			},
		// 道具列表
		Prop(){
			uni.request({
				url: this.baseurl+'/api/Prop/getProp',
				method: 'POST',
				header:{token:this.token},
				data: {
					
					city:uni.getStorageSync("citySel"),
				},
				success: res => {
					console.log("道具列表",res);
					this.Proplist=res.data.data;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		// 金币点券
		money(){
			uni.request({
				url: this.baseurl+'/api/userProp/getUserCredit',
				method: 'POST',
				header:{
					token:this.token,
				},
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
		}
		}
	}
</script>

<style>
	.Jl_right_num{
		    margin-left: 10rpx;
		    color: #F8B800;
	}
	.Jl_right_content {
		font-size: 24rpx;
		color: #C7C7C7;
		width: 535rpx;
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
		align-items: center;
		border-bottom: 1rpx solid #9999;
		padding: 20rpx 0;
	}

	.Jl_avatar {
		    width: 120rpx;
		    height: 106rpx;
		
	}

	.Shoop_for_djimg {
		height: 142rpx;
		width: 232rpx;
		position: absolute;
		top: 44rpx;

	}

	.Shoop_for_money {
		position: absolute;
		color: white;
		bottom: 67rpx;
		right: 45rpx;
		font-size: 24rpx;
	}

	.Shoop_for_title {
		position: absolute;
		bottom: 67rpx;
		left: 45rpx;
		font-size: 28rpx;
		color: white;
	}

	.Shoop_for_prop {
		width: 132rpx;
		height: 40rpx;
		background: #F8B800;
		border-radius: 50px 50px 50px 50px;
		opacity: 1;
		text-align: center;
		margin-top: 11rpx;
		color: white;
		font-size: 28rpx;
	}

	.Shoop_for_bj {
		width: 90%;
		height: 230rpx;
	}

	.Shoop_prop_for {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		flex-direction: column;
		border-radius: 20rpx;
		width: 48%;
		height: 300rpx;
		padding: 5rpx;
		margin: 20rpx 0rpx;
		background-image: linear-gradient(to bottom, rgba(255, 244, 222, 1), rgba(255, 223, 131, 1), rgba(255, 223, 131, 1));
	}

	.Shoop_prop {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.Shoop_money_image {
		width: 100rpx;
		height: 100rpx;
	}

	.Shoop_moneyview {
		background-image: linear-gradient(to left, rgba(248, 184, 0, 0.1000), rgba(248, 184, 0, 0.1000));
		width: 320rpx;
		height: 140rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* padding: 20rpx; */
		border-radius: 50rpx;
	}

	.Shoop_money {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0;
	}

	.Shoop_swiper_image {
		width: 100%;
		height: 300rpx;
	}

	.Shoop_swiper {
		height: 300rpx;
	}

	.content {
		padding: 20rpx 40rpx;
	}
</style>
