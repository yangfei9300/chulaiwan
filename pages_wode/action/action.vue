<template>
	<view class="content">
		<view class="action">
			<view class="actionView" @click="show=true">
				<view v-if="show" class="huang"></view>
				<view class="" :class="{actionTrue:show}">已参加</view>
			</view>
			<view class="actionView" @click="show=false">
				<view v-if="!show" class="huang"></view>
				<view class="" :class="{actionTrue:!show}">已发布</view>
			</view>
		</view>
		<view class="" v-if="show">
			<view class="Act" v-for="(item,index) in list" :key="index" @click="Detail(item.act_status,item.act_no)">
				<image class="ActImg" mode="aspectFill" :src="item.cover"></image>
				<view class="ActRight">
					<!-- 标题 -->
					<view class="ActRight_title">{{item.title}}</view>
					<!-- 地址 -->
					<view class="ActRight_address">地址 : {{item.add_name}}</view>
					<!-- 时间金额 -->
					<view class="ActRight_time">
						<view class="ActRight_time_left">
							<image class="ActRight_time_Img" src="../static/time.png" mode=""></image>
							<view class="ActRight_time_name">{{item.date+' '+item.week+'  '+item.time}}</view>
						</view>
						<view class="ActRight_time_money">{{item.money}}</view>
					</view>
					<!-- 参与人数 -->
					<view class="Group">
						<view class="Group_left">
							<image class="group_img" :src="group.headimg" mode=""
								v-for="(group,groupindex) in item.group" :key="groupindex"></image>
						</view>
						<view class="Group_right">{{item.p_num_str}}</view>
					</view>
					<!-- 当前状态 -->
					<view class="status0" v-if="item.act_status==0">待开场</view>
					<view class="status1" v-if="item.act_status==1">进行中</view>
					<view class="status2" v-if="item.act_status==2">已结束</view>
					<view class="statusyqx" v-if="item.act_status==3">已取消</view>
					<view class="statusdpj" v-if="item.act_status==4">待评价</view>
				</view>
			</view>
		</view>
		<view class="" v-if="!show">
			<view class="Act" v-for="(item,index) in list1" :key="index" @click="Detail(item.act_status,item.act_no)">
				<image class="ActImg" :src="item.cover" mode=""></image>
				<view class="ActRight">
					<!-- 标题 -->
					<view class="ActRight_title">{{item.title}}</view>
					<!-- 地址 -->
					<view class="ActRight_address">地址 : {{item.add_name}}</view>
					<!-- 时间金额 -->
					<view class="ActRight_time">
						<view class="ActRight_time_left">
							<image class="ActRight_time_Img" src="../static/time.png" mode=""></image>
							<view class="ActRight_time_name">{{item.date+' '+item.week+'  '+item.time}}</view>
						</view>
						<view class="ActRight_time_money">{{item.money}}</view>
					</view>
					<!-- 参与人数 -->
					<view class="Group">
						<view class="Group_left">
							<image class="group_img" :src="group.headimg" mode=""
								v-for="(group,groupindex) in item.group" :key="groupindex"></image>
						</view>
						<view class="Group_right">{{item.p_num_str}}</view>
					</view>
					<!-- 当前状态 -->
					<view class="status0" v-if="item.act_status==0">待开场</view>
					<view class="status1" v-if="item.act_status==1">进行中</view>
					<view class="status2" v-if="item.act_status==2">已结束</view>
					<view class="statusyqx" v-if="item.act_status==3">已取消</view>
					<view class="statusdpj" v-if="item.act_status==4">待评价</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				list: [],
				list1: [],
				page: 1,
				page1: 1,
				show: true,
			}
		},
		mounted() {
			this.getactlist();
			this.getactlist1();
		},
		onPullDownRefresh() {
			this.page = 1;
			this.page1 = 1;
			this.getactlist();
			this.getactlist1();
		},
		onReachBottom() {
			this.getactlist();
			this.getactlist1();
		},
		methods: {
			Detail(status, act_no) {
				if (status == 0) {
					uni.navigateTo({
						url: '/pages_huodong/ActivityDetail/ActivityDetail?act_no=' + act_no,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else if (status == 1) {
				uni.navigateTo({
					url: '/pages_huodong/ActivityDetail/ActivityDetail?act_no=' + act_no,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});

				} else if (status == 2) {
				uni.showToast({
					title: '活动已结束',
					icon: 'none'
				});
				} else if (status == 3) {
					uni.showToast({
						title: '活动已取消',
						icon: 'none'
					});
				} else if (status == 4) {
				uni.navigateTo({
					url: '/pages_wode/Evaluate/Evaluate?act_no='+act_no,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				}
			},
			getactlist1() {
				uni.request({
					url: this.baseurl + '/api/act/myActList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						page: this.page1++,
						num: 100,
						type: 2,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("我发布的", res);
						this.list1 = this.list1.concat(res.data.data);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			getactlist() {
				uni.request({
					url: this.baseurl + '/api/act/myActList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						page: this.page++,
						num: 100,
						type: 1,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("我参加的", res);
						this.list = this.list.concat(res.data.data);
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	/* 当前状态 */
	.status4 {
		position: absolute;
		bottom: 10rpx;
		right: 22rpx;
		/* background: green; */
		padding: 5rpx 15rpx;
		border-radius: 60rpx;
		height: 30rpx;
		font-size: 25rpx;
		color: #D24E15;
		background: #FFD5C3;
	}

	.status3 {
		position: absolute;
		bottom: 10rpx;
		right: 22rpx;
		/* background: green; */
		padding: 5rpx 15rpx;
		border-radius: 60rpx;

		background: #EDEDED;
		color: #878787;
	}
	
	.statusyqx {
			position: absolute;
			bottom: 10rpx;
			right: 22rpx;
			border-radius: 60rpx;background: #EDEDED;
		color: #878787;
			padding: 9rpx 16rpx;
		
			font-size: 20rpx;
		}

	.status2 {
		position: absolute;
		bottom: 10rpx;
		right: 22rpx;
		/* background: green; */
		padding: 5rpx 15rpx;
		border-radius: 60rpx;

		color: #BD00FF;

		background: #F3D1FF;
	}

	.status1 {
		position: absolute;
		bottom: 10rpx;
		right: 22rpx;
		/* background: green; */
		padding: 5rpx 15rpx;
		border-radius: 60rpx;

		background: #FBEDCD;

		color: #FFB100;
	}
.statusdpj {
		position: absolute;
		bottom: 10rpx;
		right: 22rpx;
		border-radius: 60rpx;background: #FFD5C3;
	color: #D24E15;
		padding: 9rpx 16rpx;
	
		font-size: 20rpx;
	}
	.status0 {
		position: absolute;
		bottom: 10rpx;
		right: 22rpx;
		border-radius: 60rpx;
		background: #E6FCC2;
		color: #71B600;
		
		padding: 9rpx 16rpx;
	
		font-size: 20rpx;
	}

	/* 参与人数 */
	.Group_right {
		font-size: 24rpx;
		color: #939393;
	}

	.group_img {
		margin-right: -22rpx;
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
	}

	.Group_left {
		display: flex;
		align-items: center;
		position: relative
	}

	.Group {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* 参与时间*/
	.ActRight_time_money {
		font-size: 28rpx;
		color: #F8B800;
	}

	.ActRight_time_name {
		font-size: 20rpx;
	}

	.ActRight_time_Img {
		width: 32rpx;
		height: 32rpx;
	}

	.ActRight_time_left {
		display: flex;
		align-items: center;
	}

	.ActRight_time {
		display: flex;
		justify-content: space-between;
		margin: 8rpx 0;
	}

	.ActRight_address {
		font-size: 24rpx;
		color: #939393;
		white-space: nowrap;
		width: 410rpx;
		overflow: hidden;
		text-overflow: ellipsis;

		margin: 8rpx 0;

	}

	.ActRight_title {
		font-size: 32rpx;
		font-weight: 800;
		white-space: nowrap;
		width: 410rpx;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.ActRight {
		margin-left: 12rpx;
		font-family: Inter-Regular, Inter;
	}

	.ActImg {
		width: 208rpx;
		height: 218rpx;
	}

	.Act {
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(17, 17, 17, 0.05);
		border-radius: 20rpx;
		margin: 16rpx 0;
		padding: 18rpx 22rpx;
		display: flex;
		position: relative;
	}

	.actionTrue {
		font-weight: 800;
	}

	.actionView {
		display: flex;
		align-items: center;
		position: relative;
	}

	.huang {
		width: 36rpx;
		height: 36rpx;
		background-color: rgba(248, 184, 0, 0.4);
		position: absolute;
		border-radius: 50%;
		top: -5rpx;
		left: -10rpx;
	}

	.action {
		display: flex;
		justify-content: space-around;
		font-size: 32rpx;
	}

	.content {
		padding: 40rpx;
	}
</style>
