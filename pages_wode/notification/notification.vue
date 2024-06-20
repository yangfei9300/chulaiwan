<template>
	<view class="">
		<view class="topivew"
		:style="{
			'height':(jnSize.height+jnSize.top+20)+'px'
		}"
		>
			<view class="roww rowsb pore"
			:style="{
				top:(jnSize.top+10)+'px',
			}"
			style="padding:0rpx 25rpx;"
			>
				<image @click.stop="backb" src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (6).png" class="w-40 h-40"></image>
				<view style="font-weight: bold;" class="">系统通知</view>
				<image src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (6).png" 
				class="w-40 h-40 yincang1"></image>
			</view>
		</view>
		
		<!-- <view class="action"
		>
			<view class="actionView" @click="show=true">
				<view v-if="show" class="huang"></view>
				<view class="" :class="{actionTrue:show}">消息列表</view>
			</view>
			<view class="actionView" @click="show=false">
				<view v-if="!show" class="huang"></view>
				<view class="" :class="{actionTrue:!show}">系统通知</view>
			</view>
		</view> -->
		<view class="" v-if="show">
			<view class="topivew1"  
			:style="{
				'height':(jnSize.height+jnSize.top+40)+'px'
			}"
			></view>
			<image class="w-750 h-490" style="margin-top: -10rpx;"
			src="https://ta.imjiayi.com/upload/upload/未标题-29563@2x.png"></image>
			<view class="colonn" style="margin-top: -500rpx;">
				<view class="Noti" v-for="(item,index) in list" :key="index" :class="{bac:item.status==0}"
					@click="NavQuanzi(item.moments_no,item.id)">
					<image class="NotiHeadimg" :src="item.headimg" mode=""></image>
					<view class="NotiRight">
						<view class="NotiRightNickname">
							<view class="NotiRightNickname_View">
								<view class="NotiRightNickname_name" :class="{XVIPName:item.is_vip==1}">{{item.nickname}}
								</view>
								<image v-if="item.is_vip==1" class="XVIP" src="../../static/My/XVIP.png" mode=""></image>
							</view>
							<view class="">
								<text>{{item.remark | formatRule}}</text>
							</view>
							<view class="NotiRightTime">{{item.time_show}}</view>
						</view>
						<view class="" v-if="item.right_type==1">
						</view>
						
						<view class="" v-if="item.right_type==3">
							<image class="NotiImgUrl" :src="item.photo.imgUrl" mode="aspectFill"></image>
						</view>
						<view class="" v-if="item.right_type==4">
							<view class="NotiRightText">{{item.text}}</view>
						</view>
						<view class="" v-if="item.right_type==5">
							<image class="NotiImgUrl" :src="item.video.video_img" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="colonn" v-if="!show">
			<view class="roww m-top-20" v-for="(Sitem,Sindex) in list1 " :key="Sindex">
				<image class="X_left_Img" v-if="Sitem.type==1" src="../static/banben.png" mode=""></image>
				<image class="X_left_Img" v-if="Sitem.type==3" src="../static/huiyuan.png" mode=""></image>
				<image class="X_left_Img" v-if="Sitem.type==4" src="../static/huodong.png" mode=""></image>
				<image class="X_left_Img" v-if="Sitem.type==2" src="../static/chongzhi.png" mode=""></image>
				<view class="X_right">
					<!-- 名称时间 -->
					<view class="X_right_title">
						<view class="X_right_type" v-if="Sitem.type==1">系统通知</view>
						<view class="X_right_type" v-if="Sitem.type==2">充值提醒</view>
						<view class="X_right_type" v-if="Sitem.type==3">会员通知</view>
						<view class="X_right_type" v-if="Sitem.type==4">活动通知</view>
						<view class="X_right_time">{{Sitem.time_show}}</view>
					</view>
					<view class="X_right_content">{{Sitem.content}}</view>
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
				shebeiInfo: {},
				jnSize: {},
			}
		},
		mounted() {
			this.getactlist();
			this.getactlist1();
		},
		onShow() {
			this.page = 1;
			this.page1 = 1;
			this.list = [];
			this.list1 = [];
			this.getactlist();
			this.getactlist1();
			this.getNiaonang();
		},
		onPullDownRefresh() {
			this.page = 1;
			this.page1 = 1;
			this.list = [];
			this.list1 = [];
			this.getactlist();
			this.getactlist1();
		},
		onReachBottom() {
			this.getactlist();
			this.getactlist1();
		},
		filters: {
			formatRule(val) {
				return val.replace(/\\n/g, '\n')
			}

		},
		methods: {
			backb(){
				uni.navigateBack({
					delta:1
				})
			},
			getNiaonang() {
				const res = wx.getMenuButtonBoundingClientRect()
				this.jnSize = res;
				console.log(res.width)
				console.log(res.height)
				console.log(res.top)
				console.log(res.right)
				console.log(res.bottom)
				console.log(res.left)
				wx.getSystemInfo({
					success: (res) => {
					this.shebeiInfo=res;  
					}
				});
			},
			// 跳转至圈子
			NavQuanzi(moments_no, id) {
				uni.request({
					url: this.baseurl + '/api/userMessage/messageToRead',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						messageType: 1,
						
						city:uni.getStorageSync("citySel"),
						id,
						moments_no
					},
					success: res => {
						console.log(res);
						uni.request({
							url: this.baseurl + '/api/moments/momentsInfo',
							method: 'POST',
							header: {
								xcx:1,
								token: this.token
							},
							data: {
								moments_no,
								
								city:uni.getStorageSync("citySel"),
							},
							success: res => {
								// console.log(res);
								if (res.data.code == 0) {
									uni.showToast({
										icon: 'none',
										title: res.data.info,
										mask: true,
									})
								} else if (res.data.code == 1) {
									uni.navigateTo({
										url: '../../pages_quanzi/criclleDetal/criclleDetal?moments_no=' +
											moments_no,
										success: res => {},
										fail: () => {},
										complete: () => {}
									});
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
			Detail(status) {
				if (status == 0) {

				} else if (status == 1) {

				} else if (status == 2) {

				} else if (status == 3) {
					uni.showToast({
						title: '活动已取消',
						icon: 'none'
					});
				} else if (status == 4) {

				}
			},
			getactlist1() {
				uni.request({
					url: this.baseurl + '/api/userMessage/sysMessage',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						page: this.page1++,
						num: 100,
						city:uni.getStorageSync("citySel"),

					},
					success: res => {
						console.log("系统消息", res);
						if (res.data.data.length > 0) {
							this.list1 = this.list1.concat(res.data.data);
							console.log(this.list1);
							uni.stopPullDownRefresh();
						} else {
							this.page1 - 1
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			getactlist() {
				uni.request({
					url: this.baseurl + '/api/userMessage/getUserMessage',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						page: this.page++,
						num: 100,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("消息列表", res);
						if (res.data.data.length > 0) {
							this.list = this.list.concat(res.data.data);
							this.list.map((item, index) => {
								if(item.photo){
									this.list[index].photo = JSON.parse(item.photo)
								}
								if(item.video){
									this.list[index].video = JSON.parse(item.video)
								}
								
							});
							uni.stopPullDownRefresh();
							console.log(this.list);
						} else {
							this.page - 1
						}

					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	
	@import url(notification.css);
	
	/* 系统通知 */
	.bac {
		background-color: #F6F6F6;
	}

	.X_right_time {
		color: #A7A7A7;
		font-size: 28rpx;
	}

	.X_right_type {
		font-size: 36rpx;
		font-weight: 800;
	}

	.X_right_content {
		padding-bottom: 34rpx;
		border-bottom: 1rpx solid #F1F1F1;
		font-size: 32rpx;
		color: #A7A7A7;
	}

	.X_right_title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.X_right {
		width: 559rpx;

	}

	.X_left_Img {
		width: 92rpx;
		height: 92rpx;
		border-radius: 50%;
		margin-right: 22rpx;
		margin-left: 30rpx;
	}

	.Xitong {
		display: flex;
		align-items: end;
		padding: 30rpx 0;

	}

	/* 文字 */
	.NotiRightText {
		width: 114rpx;
		height: 100rpx;
		font-size: 28rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #A7A7A7;
		line-height: 32rpx;
		-webkit-background-clip: text;
		overflow: hidden;
	}

	/* 取关 */
	.NotiRightQu {
		width: 150rpx;
		height: 56rpx;
		background: #FFC803;
		border-radius: 12rpx;
		color: white;
		font-size: 32rpx;
		/* font-weight: 800; */
		display: flex;
		align-items: center;
		font-family: Inter-Regular, Inter;
		justify-content: center;
	}

	/* 时间 */
	.NotiRightTime {
		font-size: 32rpx;
		color: #A7A7A7;
	}

	/* VIP标识名称 */
	.NotiRightNickname_name {}

	.NotiRightNickname_View {
		display: flex;
		align-items: center;
		font-size: 36rpx;
		color: #A7A7A7;
	}

	.NotiRightNickname {}

	.XVIPName {
		color: #F8B800 !important;
	}

	.XVIP {
		width: 70rpx;
		height: 32rpx;
		margin-left: 10rpx;
	}

	.NotiRight {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
	}

	.NotiImgUrl {
		width: 120rpx;
		height: 120rpx;
	}

	.NotiHeadimg {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.Noti {
		display: flex;
		padding: 18rpx 0;
		/* border-top: 1rpx solid #F1F1F1; */
		border-bottom: 1rpx solid #F1F1F1;
		padding: 36rpx;
	}

	.actionTrue {
		font-weight: 800;
	}

	.actionView {
		display: flex;
		align-items: center;
		position: relative;
	}

	/* 黄圈 */
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

		margin: 30rpx 0;

	}

	.content {
		padding: 40rpx;
	}
</style>
