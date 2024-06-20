<template>
	<view>
		<view class="tab">
			<view class="xddw" @click="moneywall(1)">
				<view class="tab1" :class="{tt:t1==true}">点券</view>
				<view class="tab3" v-show="t1"></view>
				<view class="" v-if=""></view>
			</view>
			<view class="xddw" @click="moneywall(2)">
				<view class="tab2" :class="{tt:t2==true}">金币</view>
				<view class="tab4" v-show="t2"></view>
			</view>
		</view>
		<!-- 消息通知 -->
		<view class="" v-show="t1">
			<view class="win1" v-for="(t2,t2index) in list1" :key="t2index">
				<view class="win2">
					<view class="win2_1">{{t2.name}}</view>
					<view class="win2_2">{{t2.shijian}}</view>
				</view>
				<view class="win5">
					<view class="win5_1">{{t2.money}}</view>
					<view class="win5_2">{{t2.zhuangtai}}</view>
				</view>
			</view>
		</view>
		<!-- 系统通知 -->
		<view class="" v-show="t2">
			<view class="win1" v-for="(t2,t2index) in list1" :key="t2index">
				<view class="win2">
					<view class="win2_1">{{t2.name}}</view>
					<view class="win2_2">{{t2.shijian}}</view>
				</view>
				<view class="win5">
					<view class="win5_1">{{t2.money}}</view>
					<view class="win5_2">{{t2.zhuangtai}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t1: true,
				t2: false,
				baseurl:'',
				token:'',
				page:1,
				num:10,
				// 系统通知
				list1: [
					{
					name: " 信誉积分修复卡",
					shijian: "05-24 22:42",
					money: "-18",
					zhuangtai: "支出"
				},
				{
					name: " 信誉积分修复卡",
					shijian: "05-24 22:42",
					money: "-18",
					zhuangtai: "支出"
				},
				{
					name: " 信誉积分修复卡",
					shijian: "05-24 22:42",
					money: "-18",
					zhuangtai: "支出"
				},
				{
					name: " 信誉积分修复卡",
					shijian: "05-24 22:42",
					money: "-18",
					zhuangtai: "支出"
				},
				 ]
			}
		},
		mounted() {
			this.baseurl=getApp().globalData.baseurl;
			this.token=uni.getStorageSync('token');
		},
		methods: {
		moneywall(type){
			if(type==1){
				uni.request({
					url: this.baseurl+'/api/credit/getUserBill',
					method: 'POST',
					header:{
						token:this.token,
					},
					data: {
						page:this.page,num:this.num,type:type,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log(res);
						this.t1=true;
						this.t2=false;
					},
					fail: () => {},
					complete: () => {}
				});
			}else if(type==2){
				uni.request({
					url: this.baseurl+'/api/credit/getUserBill',
					method: 'POST',
					header:{
						token:this.token,
					},
					data: {
						page:this.page,num:this.num,type:type,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log(res);
						this.t1=false;
						this.t2=true;
					},
					fail: () => {},
					complete: () => {}
				});
			}
			
		}
		}
	}
</script>

<style scoped>
	/* 系统消息 */
	.win5_2 {
		color: #A7A7A7;
	}

	.win5_1 {
		color: #F8B800;
	}

	.win5 {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;

	}

	.win4 {
		font-size: 22rpx;
		color: #f8b800;
	}

	.win3 {
		font-weight: 500;

	}

	.win2_2 {
		color: #B8B8B8;
		font-size: 28rpx;

	}

	.win2_1 {
		font-size: 32rpx;
		font-weight: 600;
	}

	.win1 {
		display: flex;
		justify-content: space-between;
		margin: 0rpx 25rpx;
		border-top: 1rpx solid #F1F1F1;
		border-bottom: 1rpx solid #F1F1F1;
		padding: 25rpx 0;
		align-items: center;
	}

	/* 消息通知 */
	.tab {
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: 20rpx 100rpx;
	}

	.tt {
		font-weight: 600;
	}

	.xddw {
		position: relative;
	}

	.tab3 {
		background: rgba(248, 184, 0, 0.5);
		width: 35rpx;
		height: 35rpx;
		border-radius: 50%;
		position: absolute;
		top: 0rpx;
		left: -10rpx;
	}

	.tab4 {
		background: rgba(248, 184, 0, 0.5);
		width: 35rpx;
		height: 35rpx;
		border-radius: 50%;
		position: absolute;
		top: 0rpx;
		left: -10rpx;
	}

	.gzview {
		background: #f8b800;
		color: white;
		border-radius: 20rpx;
		width: 100rpx;
		font-size: 24rpx;
		text-align: center;
		padding: 5rpx;
	}

	.tz {
		display: flex;
		margin: 0 20rpx;
		border-top: 1rpx solid #F1f1f1;
		margin: 0 20rpx;
		padding: 10rpx 0rpx;
	}

	.tz6 {
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tz5 {
		color: #A7A7A7;
	}

	.tz3 {
		color: #A7A7A7;
	}

	.tz2 {
		width: 65%;
	}

	.tz1 {
		width: 15%;
		display: flex;
		justify-content: center;
	}

	.tzimg1 {
		width: 100rpx;
		height: 100rpx;
	}

	.tzimg {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
</style>
