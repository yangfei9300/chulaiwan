<template>
	<view class="content">
		<view class="login_view">
			<image class="login_logo" src="../../static/index/denglulogo.png" mode=""></image>
			<view class="login_title">
				欢迎使用出来玩
			</view>
			<view class="login_title_2">
				珍惜每一次相遇
			</view>
		</view>
		<view class="login_input">
			<input class="login_input_1" type="number" value="" placeholder="请输入您的手机号" v-model="phone" />
			<u-input class="login_input_1" placeholder="验证码" border="bottom" v-model="code">
				<template slot="suffix">
					<u-toast ref="uToast"></u-toast>
					<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-code>
					<button class="code_btn" @tap="getCode(phone)" :text="tips">{{tips}}</button>
				</template>
			</u-input>
		</view>
		<button class="login_btn" @click="guide(phone,code)">登录</button>
	</view>
</template>

<script>
	export default {
		options: {
			styleIsolation: 'shared'
		}, //解决/deep/不生效**
		data() {
			return {
				tips: 'daojishi',
				phone: null,
				code:1234,
				baseurl: 'http://ta.imjiayi.com',
				// refCode: null,
				seconds: 60,
			}
		},
		methods: {
			// 验证手机号
			phnumber(e) {
				return /^1[3-9]\d{9}$/.test(e);
			},
			// 验证码
			codeChange(text) {
				this.tips = text;
			},
			getCode(e) {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					console.log(e);
					uni.showLoading({
						title: '正在获取验证码'
					})

					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖

						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				uni.$u.toast('倒计时结束');
			},
			start() {
				uni.$u.toast('倒计时开始');
			},

			guide(e,f) {
				
				uni.request({
					url: this.baseurl+'/api/login/login',
					method: 'POST',
					data: {type:"phone",phone:e,code:f,
					city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log(res);
						let ress=res.data;
						if(ress.info=='登陆成功'){
							uni.setStorage({
								key:'token',
								data:ress.data.token,
								success(res) {
									console.log(res);
									if(res.errMsg=='setStorage:ok'){
										uni.navigateTo({
											url: '../guide/guide',
											success: res => {},
											fail: () => {},
											complete: () => {}
										});
									}
									
								}
							});
						}
					
						
					},
					fail: () => {},
					complete: () => {}
				});
				
			}
		}
	}
</script>

<style scoped lang="scss">
	/deep/ .code_btn {
		background: #f8b800 !important;
		color: white !important;
		font-size: 24rpx;
	}

	/deep/ .login_input_1 {
		// width: 80%;
		border-bottom: 1rpx solid #dadbde;
		margin: 20rpx 0;
		padding-left: 12rpx !important;
		padding-top: 20rpx !important;
		padding-bottom: 20rpx !important;
		font-size: 36rpx !important;

	}

	.login_input {
		margin-top: 120rpx;
		margin-left: 10%;
		margin-right: 10%;
		margin-bottom: 120rpx;
	}

	.login_btn {
		width: 80%;
		height: 72rpx;
		color: white;
		background: #FFC803;
		box-shadow: 0rpx 0rpx 30rpx 1rpx rgba(0, 0, 0, 0.0500);
		border-radius: 15rpx;
		opacity: 1;
		margin-top: 180rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login_view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.login_logo {
		width: 130rpx;
		height: 130rpx;

	}

	.login_title {
		font-size: 43rpx;
		font-weight: 600;
		margin: 10rpx 0;

	}

	.login_title_2 {
		font-size: 36rpx;
		color: #A7A7A7;
		font-weight: 600;
	}

	.content {
		padding: 128rpx 0rpx 0rpx 0rpx;
	}
</style>
