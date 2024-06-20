<template>
	<view>
		<view class="upload" @click="upload">
			<image v-if="fileList1!=''" class="zdyys" :src="fileList1" mode=""></image>
			<image v-else class="zdyys" src="../../static/sex/sctp.png" mode=""></image>

			<view class="touxiang_title">上传头像</view>
		</view>
		<!-- 年月日 -->
		<view class="guide2">
			<view class="guide2_1">
				<view class="guide2_2">生日(年龄必须大于18周岁)</view>
				<view class="time">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">
							<view class="temvalue">{{value1}}</view>年
							<view class="temvalue">{{value2}}</view>月
							<view class="temvalue">{{value3}}</view>日
						</view>
					</picker>
				</view>
				<view class="">
					<view class="xingzuo_title">星座</view>
					<view class="xingzuo">
						<view class="">
							<image class="xingzuoimg" src="../../static/index/denglulogo.png" mode=""></image>
							<view class="xingzuo_name">
								{{xingzuo}}
							</view>
						</view>
					</view>
				</view>
				<!-- 下一步按钮 -->
				<view class="" style="position: relative;">
					<button class="guide2_btn" @click="guidebtn2">下一步</button>
				</view>
			</view>


		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: '',
				value1: "2021",
				xingzuo: '',
				value2: "10",
				value3: "11",
				date: '',
				sex: '',
				nickname: '',
			}
		},
		onLoad(options) {
			console.log(options.sex, options.nickname);
			this.sex = options.sex;
			this.nickname = options.nickname;
		},
		mounted() {
			switch (this.value2) {
				case "01":
					if (this.value3 > 19) {
						this.xingzuo = "水瓶座";
					} else this.xingzuo = "摩羯座";
					break;
				case "02":
					if (this.value3 > 18) {
						this.xingzuo = "双鱼座";
					} else this.xingzuo = "水瓶座";
					break;
				case "03":
					if (this.value3 > 20) {
						this.xingzuo = "白羊座";
					} else this.xingzuo = "双鱼座";
					break;
				case "04":
					if (this.value3 > 19) {
						this.xingzuo = "金牛座";
					} else this.xingzuo = "白羊座";
					break;
				case "05":
					if (this.value3 > 20) {
						this.xingzuo = "双子座";
					} else this.xingzuo = "金牛座";
					break;
				case "06":
					if (this.value3 > 21) {
						this.xingzuo = "巨蟹座";
					} else this.xingzuo = "双子座";
					break;
				case "07":
					if (this.value3 > 22) {
						this.xingzuo = "狮子座";
					} else this.xingzuo = "巨蟹座";
					break;
				case "08":
					if (this.value3 > 22) {
						this.xingzuo = "处女座";
					} else this.xingzuo = "狮子座";
					break;
				case "09":
					if (this.value3 > 22) {
						this.xingzuo = "天秤座";
					} else this.xingzuo = "处女座";
					break;
				case "10":
					if (this.value3 > 23) {
						this.xingzuo = "天蝎座"
					} else this.xingzuo = "天秤座";
					break;
				case "11":
					if (this.value3 > 20) {
						this.xingzuo = "射手座";
					} else this.xingzuo = "天蝎座";
					break;
				case "12":
					if (this.value3 > 21) {
						this.xingzuo = "摩羯座";
					} else this.xingzuo = "射手座";
					break;

			}
		},
		methods: {
			// 选择图片传给下一个页面
			upload() {
				let _this = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res);
						_this.fileList1 = res.tempFilePaths[0];
						console.log(_this.fileList1);
					}
				})
			},
			// 跳转到下一个页面 喜欢类型页面LinkType
			guidebtn2() {
				if(this.nickname.length>0&&this.sex.length>0&&this.date.length>0&&this.fileList1.length>0&&this.xingzuo.length>0){
					uni.navigateTo({
						url: '../LikeType/LikeType?nickname=' + this.nickname + '&base_sex=' + this.sex +
							'&base_birthday=' + this.date + '&headimg=' + this.fileList1 + '&base_con=' + this.xingzuo,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}else{
					uni.showModal({
						title: '注册提醒',
						content: '请仔细检查内容是否填写完整',
						showCancel: false,
						cancelText: '取消',
						confirmText: '确定',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}
				
			},
			// 生日输入框
			bindDateChange: function(e) {
				// this.date = e.detail.value
				this.date = e.detail.value;
				this.value1 = this.date.slice(0, 4);
				this.value2 = this.date.slice(5, 7);
				this.value3 = this.date.slice(8, 10);
				console.log(this.value1, this.value2, this.value3);
				switch (this.value2) {
					case "01":
						if (this.value3 > 19) {
							this.xingzuo = "水瓶座";
						} else this.xingzuo = "摩羯座";
						break;
					case "02":
						if (this.value3 > 18) {
							this.xingzuo = "双鱼座";
						} else this.xingzuo = "水瓶座";
						break;
					case "03":
						if (this.value3 > 20) {
							this.xingzuo = "白羊座";
						} else this.xingzuo = "双鱼座";
						break;
					case "04":
						if (this.value3 > 19) {
							this.xingzuo = "金牛座";
						} else this.xingzuo = "白羊座";
						break;
					case "05":
						if (this.value3 > 20) {
							this.xingzuo = "双子座";
						} else this.xingzuo = "金牛座";
						break;
					case "06":
						if (this.value3 > 21) {
							this.xingzuo = "巨蟹座";
						} else this.xingzuo = "双子座";
						break;
					case "07":
						if (this.value3 > 22) {
							this.xingzuo = "狮子座";
						} else this.xingzuo = "巨蟹座";
						break;
					case "08":
						if (this.value3 > 22) {
							this.xingzuo = "处女座";
						} else this.xingzuo = "狮子座";
						break;
					case "09":
						if (this.value3 > 22) {
							this.xingzuo = "天秤座";
						} else this.xingzuo = "处女座";
						break;
					case "10":
						if (this.value3 > 23) {
							this.xingzuo = "天蝎座"
						} else this.xingzuo = "天秤座";
						break;
					case "11":
						if (this.value3 > 20) {
							this.xingzuo = "射手座";
						} else this.xingzuo = "天蝎座";
						break;
					case "12":
						if (this.value3 > 21) {
							this.xingzuo = "摩羯座";
						} else this.xingzuo = "射手座";
						break;

				}
			},


		}
	}
</script>

<style lang="scss">
	.uni-input {
		display: flex;
		align-items: center;
	}

	.temvalue {
		border-bottom: 6rpx solid black;
		width: 100rpx;
		display: flex;
		justify-content: center;
		text-align: center;
		letter-spacing: 3px;
		margin-right: 10rpx;
	}

	.guide2_btn {
		// width: 472rpx;
		height: 66rpx;
		color: white;
		background: #FFC803;
		box-shadow: 0rpx 0rpx 30rpx 1rpx rgba(0, 0, 0, 0.0500);
		border-radius: 15rpx;
		opacity: 1;
		margin-bottom: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 126rpx;
		width: 100%;
	}

	.zdyys {

		width: 250rpx;
		height: 250rpx;
		border-radius: 50%;

	}

	.xingzuo_title {
		margin: 20rpx 0;
		font-size: 36rpx;
		font-weight: 600;
	}

	.xingzuo_name {
		font-size: 36rpx;
		font-weight: 600;
		margin-top: 10rpx;
	}

	.xingzuo {
		justify-content: center;
		display: flex;
		text-align: center;
	}

	.xingzuoimg {
		width: 160rpx;
		height: 160rpx;
	}

	.guide2_2 {
		margin-top: 50rpx;
		font-size: 32rpx;
		font-weight: 600;
	}

	.guide2_1 {
		position: absolute;
		left: 10%;
		right: 10%;
		top: 0;
	}

	.guide2 {
		position: relative;
	}

	.time {
		display: flex;
		align-items: center;
		// justify-content: center;
		font-size: 36rpx;
		margin: 20rpx 0;
	}

	.touxiang_title {
		color: #D1D1D1;
		font-size: 32rpx;
		font-weight: 600;
		margin-top: 20rpx;
	}

	.upload {
		display: flex;
		/* justify-content: center; */
		align-items: center;
		flex-direction: column;
		margin-top: 120rpx;
	}
</style>
