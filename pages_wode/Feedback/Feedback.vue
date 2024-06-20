<template>
	<view class="content">
		<view class="title">问题描述</view>
		<textarea class="text" v-model="value" value="" placeholder="请填写10个字以上的问题描述，以便我们提供更好的服务" />
		<view class="title">上传图片</view>
		<view class="tupian">
			<image class="shangchuan" @click="choose" :src="item" mode="" v-for="(item,index) in ImgList" :key="index"
				v-if="ImgList"></image>

			<image class="shangchuan" v-if="ImgList.length<3" @click="choose" src="../static/Feedback/shangchaun.png"
				mode=""></image>
		</view>
		<button class="btn" @click="OnBtn()">提交</button>
		<view class="fixed" v-show="show"></view>
		<view class="TC" v-show="show">
			<image class="tijiao" src="../static/Feedback/tijiao.png" mode=""></image>
			<view class="TCTitle">您已提交成功！</view>
			<view class="TCcontent">感谢您的反馈，</view>
			<view class="TCcontent"> 我们将为您提供更好的服务~</view>
			<button type="default" class="TCbtn" @click="Btn()">我知道了</button>
		</view>
	</view>
</template>

<script>
	import uploadimg from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				ImgList: [],
				show:false,
				value: '',
			}
		},
		methods: {
			// 选择图片
			choose() {
				let _this = this;
				uni.chooseImage({
					count: 3,
					success(res) {
						console.log(res.tempFilePaths);
						_this.ImgList = res.tempFilePaths;
					}
				})
			},
			OnBtn() {
				uni.showLoading({
					title: '正在上传',
					icon: "none",
					mask: true
				});
				if (this.value.length > 10 && this.ImgList.length > 0) {
					console.log("有文字有图片");
					let oss = [];
					for (let i = 0; i < this.ImgList.length; i++) {
						console.log(this.ImgList[i]);
						uploadimg(this.ImgList[i], 'img/xcx/', result => {
							console.log(result);
							oss.push(result);
							if (oss.length == this.ImgList.length) {
								uni.request({
									url: this.baseurl + '/api/user/feedBack',
									method: 'POST',
									data: {
										text: this.value,
										img: oss,
										
										city:uni.getStorageSync("citySel"),
									},
									header: {
										xcx:1,
										token: this.token
									},
									success: res => {
										console.log(res);
										uni.hideLoading();
										this.show=true;
										// uni.navigateBack({
										// 	delta: 1
										// });
									},
									fail: () => {},
									complete: () => {}
								});
							}
						})
					};

				} else if (this.value.length > 10 && this.ImgList.length == 0) {
					console.log("有文字没图片")
					uni.request({
						url: this.baseurl + '/api/user/feedBack',
						method: 'POST',
						data: {
							text: this.value,
							
							city:uni.getStorageSync("citySel"),
						},

						header: {
							xcx:1,
							token: this.token
						},
						success: res => {
							console.log(res);
							uni.hideLoading();
							// uni.navigateBack({
							// 	delta: 1
							// });
						},
						fail: () => {},
						complete: () => {}
					});
				} else {
					uni.showToast({
						title: '请仔细检查所填内容',
						icon: "error",
						mask: true,
					});
				}
			},
			// 弹窗成功返回
			Btn(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	.TCbtn {
		margin-top: 40rpx;
		width: 300rpx;
		height: 60rpx;
		background: #FFC803;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
		border-radius: 32rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.TCcontent {
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #A7A7A7;

	}

	.TCTitle {
		font-size: 36rpx;
		color: #111111;
		font-family: Inter-Regular, Inter;
		margin-top: 10rpx;
		margin-bottom: 34rpx;
	}

	.tijiao {
		width: 240rpx;
		height: 240rpx;
		border-radius: 50%;
	}

	.TC {
		width: 530rpx;
		height: 642rpx;
		background-color: white;
		z-index: 10;
		position: absolute;
		top: 25%;
		left: 15%;
		border-radius: 20rpx;
		animation: KK 1s linear;
		text-align: center;
		padding-top: 30rpx;

	}

	.fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(5, 5, 5, 0.5);
	}

	@keyframes KK {
		from {
			transform: translateY(1000rpx);
		}

		to {
			transform: translateY(0rpx);
		}
	}

	.btn {
		width: 676rpx;
		height: 110rpx;
		background: #FFC803;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
		border-radius: 24rpx;
		color: white;
		font-size: 35rpx;
		margin-top: 288rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 32rpx;
		margin-bottom: 30rpx;
	}

	.shangchuan {
		width: 210rpx;
		height: 210rpx;
		margin-right: 15rpx;
		border-radius: 10rpx;

	}

	.tupian {
		display: flex;
		flex-wrap: wrap;
	}

	.text {
		height: 354rpx;
		background: #FBFBFB;
		border-radius: 16rpx;
		width: 100%;
		padding-left: 18rpx;
		padding-top: 20rpx;
		font-size: 32rpx;
	}

	.content {
		padding: 36rpx;
	}
</style>
