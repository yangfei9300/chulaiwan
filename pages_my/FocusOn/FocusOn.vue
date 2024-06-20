<template>
	<view>
		<view class="tz" v-for="(item,index) in list" :key="index">
			<!-- 头像 -->
			<view class="tz1">
				<image class="tzimg" :src="item.headimg" mode=""></image>
			</view>
			<!-- 名字 内容 时间 -->
			<view class="tz2">
				<view class="tz3">{{item.nickname}}</view>
		
			</view>
			<!-- 封面图 -->
			<view class="tz6">
				<view v-if="item.follow_status==1" class="gzview" @click="onfollow(item.id,index)">互相关注</view>
				<view v-if="item.follow_status==0" class="gzview" @click="onfollow(item.id,index)">取关</view>
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
				list: [
				],
			}
		},
		onLoad() {
			this.baseurl=getApp().globalData.baseurl;
			this.token=uni.getStorageSync('token');
		},
		mounted() {
			this.getFollowList();
		},
		methods: {
			onfollow(id,index){
				uni.request({
					url: this.baseurl+'/api/user/follow',
					method: 'POST',
					data: {uuid:id,
					
					city:uni.getStorageSync("citySel"),
					},
					header:{token:this.token},
					success: res => {
						console.log(res);
						this.list.splice(index,1);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			getFollowList(){
				uni.request({
					url: this.baseurl+'/api/user/getFollowList',
					method: 'POST',
					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					header:{
						token:this.token,
					},
					success: res => {
						console.log(res);
						this.list=res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
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
		    border-top: 1rpx solid #F1f1f1;
		    margin: 0 20rpx;
		    padding: 20rpx 0rpx;
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
		display: flex;
		align-items: center;
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
