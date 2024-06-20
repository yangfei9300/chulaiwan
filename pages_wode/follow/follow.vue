<template>
	<view class="content">
		<view class="Follow" v-for="(item,index) in list" :key="index">
			<view class="FollowLeft">
				<image class="headimg" :src="item.headimg" mode=""></image>
				<view class="FollowLeftName">
					<view class="" :class="{VIP:item.is_vip==1}">{{item.nickname}}</view>
					<image class="XVIP" v-if="item.is_vip==1" src="../../static/My/XVIP.png" mode=""></image>
				</view>
			</view>

			<view class="Btn" v-if="item.follow_status==1" @click="NoFollow(item.id,index)">互相关注</view>
			<view class="Btn" v-if="item.follow_status==0" @click="NoFollow(item.id,index)">
				取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 关</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				page: 1,
				list: [],
			}
		},
		mounted() {
			this.getFollow()
		},
		onPullDownRefresh() {
			this.page = 1;
			this.getFollow();
		},
		onReachBottom() {
			this.getFollow()
		},
		methods: {
			getFollow() {
				uni.request({
					url: this.baseurl + '/api/user/getFollowList',
					method: 'POST',
					data: {
						page: this.page++,
						num: 100,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log(res);
						this.list = this.list.concat(res.data.data)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			NoFollow(id,index) {
					console.log(index);	
				uni.request({
					url: this.baseurl + '/api/user/follow',
					method: 'POST',
					data: {
						uuid: id,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log("取消关注", res);
						this.list.splice(index,1);				
					},
					fail: () => {},
					complete: () => {}
				});

			}
		}
	}
</script>

<style scoped>
	.Btn {
		width: 160rpx;
		height: 56rpx;
		color: white;
		font-size: 30rpx;
		background: #FFC803;
		border-radius: 6px 6px 6px 6px;
		opacity: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.VIP {

		color: #F8B800 !important;
	}

	.FollowLeftName {
		display: flex;
		align-items: center;
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
	}

	.FollowLeft {
		display: flex;
		align-items: center;
	}

	.XVIP {
		width: 70rpx;
		height: 32rpx;
		margin-left: 12rpx;
	}

	.headimg {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		margin-right: 16rpx;
	}

	.Follow:last-child {
		border-bottom: none !important;
	}

	.Follow {
		display: flex;
		align-items: center;
		justify-content: space-between;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #F1F1F1;
	}

	.content {
		padding: 40rpx;
	}
</style>
