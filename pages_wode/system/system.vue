<template>
	<view class="content">
		<view class="System">
			<view class="Nav" v-for="(item,index) in list " :key="index" @click="Detail(item.id)">
				<view class="Navleft">
					<image class="Img" :src="item.img" mode=""></image>
					<view class="name">{{item.name}}</view>
				</view>
				<image class="Right" src="../static/system/right.png" mode=""></image>
			</view>
		</view>
		<button type="default" class="btn" @click="Tui">退出登录</button>
		<view class="zhuxiao">确认注销后，7天未登录则注销成功</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				list: [{
					id: 1,
					img: '../static/system/shangjiaruzhu.png',
					name: '商家入驻'
				}, {
					id: 2,
					img: '../static/system/qinglihuancun.png',
					name: '清理缓存'
				}, {
					id: 3,
					img: '../static/system/lianxikefu.png',
					name: '联系客服'
				}, {
					id: 4,
					img: '../static/system/yinsixieyi.png',
					name: '隐私协议'
				}, {
					id: 5,
					img: '../static/system/yonghuxieyi.png',
					name: '用户协议'
				}, {
					id: 6,
					img: '../static/system/chongzhixieyi.png',
					name: '充值协议'
				}, {
					id: 7,
					img: '../static/system/heimingdan.png',
					name: '黑名单'
				}, {
					id: 8,
					img: '../static/system/zhuxiaozhanghao.png',
					name: '注销账号'
				}, ]
			}
		},
		methods: {
			Detail(id) {
				if (id == 1) {
					// 商家入驻
				} else if (id == 2) {
					// 清理缓存
					uni.showLoading({
						mask: true,
						title: '加载中',
					});
					setTimeout(() => {
						uni.showToast({
							mask: true,
							title: '清理完成',
							icon: 'none'
						})
					}, 1000)

				} else if (id == 3) {
					uni.showModal({
						title: '电话',
						content: '0531-88987889',
						showCancel: false,
						cancelText: '',
						confirmText: '好的',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else if (id == 4) {
					// 隐私协议
					uni.navigateTo({
						url: '../xieyi/xieyi?type=1',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});

				} else if (id == 5) {
					// 用户协议
					uni.navigateTo({
						url: '../xieyi/xieyi?type=2',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else if (id == 6) {
					// 充值协议
					uni.navigateTo({
						url: '../xieyi/xieyi?type=3',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else if (id == 7) {
					uni.navigateTo({
						url: '../blacklist/blacklist',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else if (id == 8) {
					uni.showModal({
						title: '注销',
						content: '您确定要注销吗',
						showCancel: true,
						cancelText: '再想想',
						cancelColor: '#1989FA',
						confirmText: '注销',
						confirmColor: '#D24E15',
						success: res => {
							console.log(res);
							if (res.confirm) {
								uni.showLoading({
									mask:true,
									title:'正在注销',
									
								})
								console.log(this.token);
								uni.request({
									url: this.baseurl + '/api/user/unsubscribe',
									method: 'POST',
								header:{xcx:1,token:this.token},
									data: {
										
										city:uni.getStorageSync("citySel"),
									},
									success: res => {
										console.log(res);
										uni.navigateTo({
											url:'../../pages/Login/Login'
										})
									},
									fail: () => {},
									complete: () => {}
								});
							}
						},
						fail: () => {},
						complete: () => {}
					});
				}
			},
			// 退出登录
			Tui() {

				uni.reLaunch({
					url: '../../pages/Login/Login'
				})
			}
		}
	}
</script>

<style scoped>
	.zhuxiao {
		text-align: center;
		color: #666;
		font-size: 24rpx;

	}

	.btn {
		width: 676rpx;
		height: 110rpx;
		background: #FFC803;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
		border-radius: 12rpx;
		margin-top: 50rpx;
		margin-bottom: 15rpx;
		font-size: 30rpx;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Right {
		width: 28rpx;
		height: 28rpx;
	}

	.Img {
		width: 64rpx;
		height: 64rpx;
		margin-right: 18rpx;
	}

	.Navleft {
		display: flex;
		align-items: center;
	}

	.Nav:last-child {
		border-bottom: none !important;
	}

	.Nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 32rpx;
		border-bottom: 1px solid #F2F2F2;
		padding: 32rpx 0;
	}

	.System {
		border-radius: 16rpx;
		padding: 0rpx 24rpx;
		background: #FFFFFF;
	}

	.content {
		background-color: #FAFAFA;
		padding: 36rpx;
		height: 100vh;
		font-family: Inter-Regular, Inter;
	}
</style>
