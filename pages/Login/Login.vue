<template>
	<view>
		<view class="poab" style="background-color: #F6F6F6;width:750rpx;height: 100vh;" ></view>
		<image class="BJimg" src="http://image.imjiayi.com/01 1@2x.png" mode="widthFix"></image>
		<view class="Login_redio">
			<view class="Logo_view">
				<image class="Logo" src="http://image.imjiayi.com/02 23@2x.png" mode=""></image>
			<!-- 	<view class="Logo_hello">HELLO !</view>
				<view class="Logo_place">欢迎登录出来玩</view> -->
			</view>
			<view class='phone roww center_center' style="width: 680rpx;">
				<view class="w-20"> </view>
				<input  type="number" class="allline" maxlength="11" placeholder="请输入手机号" v-model="phone" />
				<view class="w-20"> </view>
			</view>
			
			<view class='phone roww center_center' style="width: 680rpx;">
				<view class="w-20"> </view>
				<input  type="number" class="allline" maxlength="6"  placeholder="验证码"  v-model="code" />
				<view class="code" v-show="codeshow" @click="getcode(phone)">获取验证码</view>
				<view class="code" v-show="!codeshow">{{count}}s后重新获取</view>
				<view class="w-20"> </view>
			</view>  
			<view class="colonn center_center">
				<button class="btn" @click="onLogin(phone,code)">登录</button>
				<!-- <view class="roww fs-30 center_center">
					<image class="w-36 h-36 " @click="isreadCLick" v-if="isread" src="/static/xuanzhaa.png"></image>
					<view class="w-36 h-36 "  @click="isreadCLick"  v-else style="border:1px solid #AFAFAF;border-radius: 3rpx;"></view>
					<view class="w-15"></view>
					<view style="color: #999;">已阅读并同意</view>
					<view @click.stop="toXIeyi(2)">《用户协议》</view>
					<view  style="color: #999;">和</view>
					<view @click.stop="toXIeyi(1)">《隐私政策》</view>
				</view> -->
				<view class="h-70"></view>
				<view class="roww pore center_center  w-750"  style="bottom: 100rpx;">
					<!-- <image    src="https://ta.imjiayi.com/upload/upload/weixin.png" 
					class="w-70 h-70 poab"
					style="left: 340rpx;top: 60rpx;"
					></image> -->
					<view class="w-260 h-55" style="text-align: center;color: blue;">手机号授权登录</view>
					<button class="poab w-260 h-55 yincang1"
					style="left: 245rpx;top: 0rpx;" open-type="getPhoneNumber" @getphonenumber="getphone"
					></button>
				</view>
			</view>
			
		</view>  
		
		
		
	</view>
</template>

<script>
	import Amap from '../../libs/amap-wx.130.js'
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				codeshow: true,
				code: '',
				// 1234
				phone: '',
				// 13964020790
				count: '',
				timer: null,
				lat: '',
				lnt: '',
				
				isread:false,
			}
		},
		// onShow() {
		// 	this.getUserInfo();
		// },
		mounted() {
			this.getlocation();
		},
		methods: {
			getphone(res){
				// api/login/getPhone
				var obg={
					code:"",   
					xcx:1,
					encryptedData:res.detail.encryptedData,  
					iv:res.detail.iv, 
				}
				uni.login({
					success: (res) => {
						console.log("从大打算",res)
						obg.code=res.code;
						this.getWxPhone(obg);   
					}
				})
			},
			
			getWxPhone(obg){
				obg.city=uni.getStorageSync("citySel")
				uni.request({
					url: this.baseurl + '/api/login/getPhone',
					method: 'POST',
					data:obg,
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						if (res.data.code == 1){
							this.loginResult(res);
						} else {
							uni.showToast({
								icon: 'error',
								title: res.data.info,
								duration: 2000
							})
						}
						
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
			isreadCLick(){
				this.isread=!this.isread;
			},
			
			toXIeyi(type){
				uni.navigateTo({
					url:"/pages_wode/xieyi/xieyi?type="+type
				})
			},
			// 获取验证码
			getcode(phone) {
				console.log(this.baseurl);
				const time_count = 60;
				if (phone.length == 11) {
					uni.request({
						url: this.baseurl + '/api/sms/send_code',
						method: 'POST',
						data: {
							phone: this.phone,
							code_type: 0,
							city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log(res)
							if (res.data.code == 0) {
								uni.showToast({
									title: res.data.info,
									icon: 'error', //将值设置为 success 或者 ''
									duration: 2000 //持续时间为 2秒
								})
							} else if (res.data.code == 1) {
								if (!this.timer) {
									this.count = time_count;
									this.codeshow = false;
									this.timer = setInterval(() => {
										if (this.count > 0 && this.count <= time_count) {
											this.count--;
										} else {
											this.codeshow = true;
											clearInterval(this.timer);
											this.timer = null;
										}
									}, 1000)
								}
							}
						},
						fail: () => {},
						complete: () => {}
					});
				} else {
					uni.showToast({
						title: '请检查手机号',
						icon: 'error', //将值设置为 success 或者 ''
						duration: 2000 //持续时间为 2秒
					})
				}

			},
			onLogin(phone, code) {
				
				// if(!this.isread){
				// 	uni.showToast({
				// 		title:"请先阅读相关协议",
				// 		icon:"none"
				// 	})
				// 	return false;
				// }
				
				if (phone.length == 11 && code.length > 0) {
					uni.request({
						url: this.baseurl + '/api/login/login',
						method: 'POST',
						data: {
							type: 'phone',
							phone,
							code,
							xcx:1,
							openid1:uni.getStorageSync("openid"),
							city:uni.getStorageSync("citySel"),
						},
						success: res => {
							this.onLogin1(phone,code);
						},
						fail: () => {},
						complete: () => {}
					});
				}
			},
			onLogin1(phone, code) {
				
				// if(!this.isread){
				// 	uni.showToast({
				// 		title:"请先阅读相关协议",
				// 		icon:"none"
				// 	})
				// 	return false;
				// }
				
				if (phone.length == 11 && code.length > 0) {
					uni.request({
						url: this.baseurl + '/api/login/login',
						method: 'POST',
						data: {
							type: 'phone',
							phone,
							code,
							xcx:1,
							openid1:uni.getStorageSync("openid"),
							city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log(res)
							if (res.data.code == 1) {
								this.loginResult(res);
								// getApp().globalData.token = res.data.data.token;
								// getApp().globalData.uuid = res.data.data.uuid;
								// uni.setStorageSync("token",res.data.data.token)
								// uni.setStorageSync("uuid",res.data.data.uuid)
								
								// uni.setStorageSync("loginInfo",res.data.data)
								// console.log("dayin diah",res.data)
								
								// // return 
								// if (res.data.data.status == 1) {
								// 	console.log('已注册1',res.data.data)
								// 	// 已注册
								// 	uni.reLaunch({
								// 		url: '/pages/index/index'
								// 	})  
								// } else if (res.data.data.status == 0) {
								// 	// 未注册
								// 	console.log('未注册0');
								// 	uni.navigateTo({
								// 		url: '../../pages_yindao/yindao1/yindao1',
								// 		success: res => {},
								// 		fail: () => {},
								// 		complete: () => {}
								// 	});
								// }
							} else {
								uni.showToast({
									icon: 'error',
									title: res.data.info,
									duration: 2000
								})
							}
						},
						fail: () => {},
						complete: () => {}
					});
				}
			},
			
			loginResult(res){
				getApp().globalData.token = res.data.data.token;
				getApp().globalData.uuid = res.data.data.uuid;
				uni.setStorageSync("token",res.data.data.token)
				uni.setStorageSync("uuid",res.data.data.uuid)
				
				uni.setStorageSync("loginInfo",res.data.data)
				console.log("dayin diah",res.data)
				
				// return 
				if (res.data.data.status == 1) {
					console.log('已注册1',res.data.data)
					// 已注册
					uni.reLaunch({
						url: '/pages/index/index'
					})  
				} else if (res.data.data.status == 0) {
					// 未注册
					console.log('未注册0');
					uni.navigateTo({
						url: '../../pages_yindao/yindao1/yindao1',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}
			},
			
			getlocation() {
				let _this = this;
				const map = new Amap.AMapWX({
					key: 'bf84d9693654c4dbc667a2c462ebdca4'
				});
				console.log(map);
				map.getRegeo({
					success: res => {
						console.log(res);
						getApp().globalData.lat = res[0].latitude;
						getApp().globalData.lng = res[0].longitude;
						uni.setStorage({
							key:'lat',
							data:res[0].latitude,
							success() {
							}
						})
						uni.setStorage({
							key:'lng',
							data:res[0].longitude,
							success() {
							}
						})
					},
					fail:err => {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: red;
	}
	.phone {
		height: 120rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		/* opacity: 1; */
		margin: 0 38rpx 24rpx 38rpx;
		color: #000;
		font-weight: bold;
		font-size: 35rpx;
		padding:0rpx 20rpx;
	}
	
	.phone1 {
		width: 622rpx;
		height: 120rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		/* opacity: 1; */
		margin: 0 38rpx 24rpx 38rpx;
		color: #000;
		font-weight: bold;
		font-size: 35rpx;
		padding:0rpx 20rpx;
	}
	
	.btn {
		width: 680rpx;
		color: white;
		height: 100rpx;
		background: #000;
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		margin-top: 126rpx;
		margin-bottom: 63rpx;
	}

	.code {
		background-color: #000000;
		
		color: #F8B800;
		font-size: 28rpx;
		padding: 10rpx 12rpx;
		border-radius: 10rpx;
		    white-space: nowrap;
	}

	.Login_input {
		border-bottom: 1rpx solid #999;
		display: flex;
		justify-content: space-between;
		padding: 10rpx;
		margin: 50rpx 0;
	}

	.Logo_place {
		font-family: Inter-Regular, Inter;
		font-size: 36rpx;
		font-weight: 800;
	}

	.Logo_hello {
		font-size: 56rpx;
		font-weight: 800;
		font-family: Inter-Regular, Inter;
	}

	/* .Logo_view {
		position: relative;
		top: -20rpx;
	} */

	.Logo {
		width: 480rpx;
		height: 237.99rpx;
		margin-left: 38rpx;
	}

	.Login_redio {
		border-radius: 60rpx 60rpx 0 0;
		/* margin-top: -50rpx; */
		z-index: 6;
		position: absolute;
		/* padding: 0 74rpx; */
		top: 154rpx;

	}

	.BJimg {
		width: 100%;
		/* height: 667rpx; */
		display: flex;
		position: relative;
		z-index: 5;

	}
</style>
