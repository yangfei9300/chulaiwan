<template>
	<view class="content">
		<view class="BJview">
			<image class="yindao1" src="../../static/Login/yindao1.png" mode="widthFix"></image>
			<image v-if="headimg" class="TPSC" :src="headimg" mode="" @click="choose"></image>
			<image v-else class="TPSC" src="../../static/Login/TPSC.png" mode="" @click="choose"></image>
			<view class="upphoto">上传头像</view>
		</view>
		<view class="pickerview">
			<view class="address">
				<view class="address_title">所在地</view>
				<picker mode="region" @change="yearChange">
					<view class="address_name">{{ timetext }} </view>
				</picker>
			</view>
		</view>
		<!-- 年龄 星座 -->
		<view class="age">
			<view class="ageview">
				<view class="">生日（年龄大于18岁）</view>
				<view class="ageconst">{{constellation}}</view>
			</view>
		</view>

		<view class="">
			<picker-view v-if="true" :indicator-style="indicatorStyle" :value="value" @change="bindChange"
				class="picker-view">
				<picker-view-column>
					<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
				</picker-view-column>
			</picker-view>
		</view>
		<button class="btn" @click="onbtn">下一步</button>
		<view style="height: 100rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			for (let i = 1990; i <= date.getFullYear() + 1; i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			return {
				timetext: '请选择地区',
				constellation: "天蝎座",
				// 年月日
				value: [years.length - 2, month - 1, day - 1],
				years,
				year,
				months,
				month,
				days,
				day,
				indicatorStyle: `height: 50px;`,
				headimg: '',
			}
		},
		mounted() {
			// 一进入显示当前日期的星座
			this.xingzuo();
		},
		methods: {
			yearChange(e) {
				console.log(e)
				this.timetext = e.detail.value[0] + e.detail.value[1] + e.detail.value[2];
			},
			// 时间选择
			bindChange(e) {
				const val = e.detail.value;
				this.year = this.years[val[0]];
				this.month = this.months[val[1]];
				this.day = this.days[val[2]];
				console.log(this.year + '' + this.month + '' + this.day + '')
				const lastDay = (this.day <= 30),
					FebDay = (this.day <= 29);
				switch (this.month) {
					case 1: //1月星座
						if (this.day <= 19) {
							this.constellation = '摩羯座';
						} else if (this.day >= 20) {
							this.constellation = '水瓶座';
						}
						break;
					case 2: //2月星座
						if (this.day <= 18) {
							this.constellation = '水瓶座';
						} else if (this.day >= 18 && FebDay) {
							this.constellation = '双鱼座';
						}
						break;
					case 3: //3月星座
						if (this.day <= 20) {
							this.constellation = '双鱼座';
						} else if (this.day >= 21) {
							this.constellation = '白羊座';
						}
						break;
					case 4: //4月星座
						if (this.day <= 19) {
							this.constellation = '白羊座';
						} else if (this.day >= 20 && lastDay) {
							this.constellation = '金牛座';
						}
						break;
					case 5: //5月星座
						if (this.day <= 20) {
							this.constellation = '金牛座';
						} else if (this.day >= 21) {
							this.constellation = '双子座';
						}
						break;
					case 6: //6月星座
						if (this.day <= 21) {
							this.constellation = '双子座';
						} else if (this.day >= 22 && lastDay) {
							this.constellation = '巨蟹座';
						}
						break;
					case 7: //7月星座
						if (this.day <= 22) {
							this.constellation = '巨蟹座';
						} else if (this.day >= 23) {
							this.constellation = '狮子座';
						}
						break;
					case 8: //8月星座
						if (this.day <= 22) {
							this.constellation = '狮子座';
						} else if (this.day >= 23) {
							this.constellation = '处女座';
						}
						break;
					case 9: //9月星座
						if (this.day <= 22) {
							this.constellation = '处女座';
						} else if (this.day >= 23 && lastDay) {
							this.constellation = '天秤座';
						}
						break;
					case 10: //10月星座
						if (this.day <= 23) {
							this.constellation = '天秤座';
						} else if (this.day >= 24) {
							this.constellation = '天蝎座';
						}
						break;
					case 11: //11月星座
						if (this.day <= 22) {
							this.constellation = '天蝎座';
						} else if (this.day >= 23 && lastDay) {
							this.constellation = '射手座';
						}
						break;
					case 12: //12月星座
						if (this.day <= 21) {
							this.constellation = '射手座';
						} else if (this.day >= 22) {
							this.constellation = '摩羯座';
						}
						break;
				}
			},
			//默认星座选择
			xingzuo() {
				const lastDay = (this.day <= 30),
					FebDay = (this.day <= 29);
				switch (this.month) {
					case 1: //1月星座
						if (this.day <= 19) {
							this.constellation = '摩羯座';
						} else if (this.day >= 20) {
							this.constellation = '水瓶座';
						}
						break;
					case 2: //2月星座
						if (this.day <= 18) {
							this.constellation = '水瓶座';
						} else if (this.day >= 18 && FebDay) {
							this.constellation = '双鱼座';
						}
						break;
					case 3: //3月星座
						if (this.day <= 20) {
							this.constellation = '双鱼座';
						} else if (this.day >= 21) {
							this.constellation = '白羊座';
						}
						break;
					case 4: //4月星座
						if (this.day <= 19) {
							this.constellation = '白羊座';
						} else if (this.day >= 20 && lastDay) {
							this.constellation = '金牛座';
						}
						break;
					case 5: //5月星座
						if (this.day <= 20) {
							this.constellation = '金牛座';
						} else if (this.day >= 21) {
							this.constellation = '双子座';
						}
						break;
					case 6: //6月星座
						if (this.day <= 21) {
							this.constellation = '双子座';
						} else if (this.day >= 22 && lastDay) {
							this.constellation = '巨蟹座';
						}
						break;
					case 7: //7月星座
						if (this.day <= 22) {
							this.constellation = '巨蟹座';
						} else if (this.day >= 23) {
							this.constellation = '狮子座';
						}
						break;
					case 8: //8月星座
						if (this.day <= 22) {
							this.constellation = '狮子座';
						} else if (this.day >= 23) {
							this.constellation = '处女座';
						}
						break;
					case 9: //9月星座
						if (this.day <= 22) {
							this.constellation = '处女座';
						} else if (this.day >= 23 && lastDay) {
							this.constellation = '天秤座';
						}
						break;
					case 10: //10月星座
						if (this.day <= 23) {
							this.constellation = '天秤座';
						} else if (this.day >= 24) {
							this.constellation = '天蝎座';
						}
						break;
					case 11: //11月星座
						if (this.day <= 22) {
							this.constellation = '天蝎座';
						} else if (this.day >= 23 && lastDay) {
							this.constellation = '射手座';
						}
						break;
					case 12: //12月星座
						if (this.day <= 21) {
							this.constellation = '射手座';
						} else if (this.day >= 22) {
							this.constellation = '摩羯座';
						}
						break;
				}
			},
			// 选择头像
			choose() {
				let _this = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res.tempFilePaths[0])
						_this.headimg = res.tempFilePaths[0];
					}
				})
			},
			onbtn() {
				let get = getApp().globalData.reg;
				// 头像
				get.headimg = this.headimg;
				// 星座
				get.base_con = this.constellation;
				// 生日
				get.base_birthday = this.year + '-' + this.month + '-' + this.day;
				// 地址
				get.base_address = this.timetext;
				console.log(get)
				if (get.headimg.length > 0 && get.base_con.length > 0 && get.base_birthday.length > 0 && get.base_address
					.length > 0 && get.base_address != '请选择地区'){
						uni.navigateTo({
							url: '../yindao4/yindao4?type=0',
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
					}else{
						uni.showToast({
							title: '请完善信息',
							mask: true,
							icon: 'none'
						});
					}
			}
		}
	}
</script>

<style scoped>
	.upphoto{
		position: absolute;
		top: 32%;
		left: 37%;
	}
	.btn {
		width: 376rpx;
		height: 76rpx;
		color: white;
		margin-top: 84rpx;
		background: #000000;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
		border-radius: 8rpx;
		opacity: 1;
		display: flex;
		align-items: center;
		/* text-align: center; */
		justify-content: center;
	}

	.picker-view {
		/* width: 100%; */
		height: 300rpx;
		margin-top: 20rpx;
		padding-left: 98rpx;
		padding-right: 96rpx;
	}

	.item {
		height: 31px;
		font-size: 52rpx;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.ageconst {
		color: #F8B800;
	}

	.ageview {
		display: flex;
		justify-content: space-between;
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
		/* padding-bottom: 24rpx; */
		/* border-bottom: 1rpx solid #EEEEEE; */
	}

	.age {
		padding-left: 74rpx;
		padding-right: 66rpx;
		margin-top: 80rpx;
		margin-bottom: 78rpx;
		/* background-color: #007AFF; */
	}

	.address_name {
		color: #F8B800;
	}

	.address {
		display: flex;
		justify-content: space-between;
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
		padding-bottom: 24rpx;
		border-bottom: 1rpx solid #EEEEEE;

	}

	.pickerview {
		padding-left: 74rpx;
		padding-right: 66rpx;
		/* background-color: #007AFF; */
	}

	.TPSC {
		position: absolute;
		top: 156rpx;
		left: 234rpx;
		right: 272rpx;
		width: 224rpx;
		height: 224rpx;
		border-radius: 50%;
	}

	.yindao1 {
		width: 200rpx;
		height: 194rpx;
		right: 0;
		position: absolute;
		top: 0;
	}

	.BJview {
		height: 500rpx;
	}

	.content {
		position: relative;
	}
</style>
