<template>
	<view class="content">
		<view class="pagensa"></view>

		<view class="topima pore">
			<image :src="Image[0]" style="width: 750rpx;height: 750rpx;"></image>
			<view class="poab colonn " style="top: 0rpx;left: 0rpx;width: 750rpx;height: 750rpx;">
				<view class="colonn" style="margin-left: 44rpx;">
					<view style="height: 182rpx;"></view>
					<view class="bianjiziliao">编辑资料</view>
					<view style="height: 12rpx;"></view>
					<view style="font-size: 32rpx;">请编辑您的个人头像、</view>
					<view style="font-size: 32rpx;">
						出生日期(大于18岁)以及所在地</view>
					<view style="height:160rpx;"></view>


					<view class="uploadview roww center_center">
						<view class="colonn center_center"  @click.stop="choose1">
							<image style="width: 196rpx;height: 196rpx;margin-top: -130rpx;"
								:src="inputnf.base_sex==1?Image[1]:Image[2]" v-if="headimg==''"></image>

							<image style="width: 196rpx;height: 196rpx;margin-top: -130rpx;border-radius: 50%;"
								 :src="headimg" v-else></image>

							<view style="height: 24rpx;"></view>
							<view style="color: #AFAFAF;">上传头像</view>
						</view>
					</view>


				</view>
			</view>
		</view>




		<!-- 年龄 星座 -->
		<view class="colonn pore xingzuo">
			<view class="age">
				<view class="ageview">
					<view class="fs-30" style="color: #999999;">生日（年龄大于18岁）</view>
					<view class="allline"></view>
					<view class="ageconst fs-30">{{constellation}}</view>
				</view>
			</view>
			<view class="h-60"></view>
			<view class=" ">
				<picker-view v-if="true" :indicator-style="indicatorStyle" :value="value" @change="bindChange"
					class="picker-view   ">
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
		</view>

		<view style="height: 25rpx;"></view>

		<view class="colonn pore xingzuo" style="padding:0rpx 0rpx;">
			<!-- <view class="age">
				<view class="ageview">
					<view class="fs-30" style="color: #999999;">生日（年龄大于18岁）</view>
					<view class="allline"></view>
					<view class="ageconst fs-30">{{constellation}}</view>
				</view>
			</view> -->

			<view class="colonn center_center" style="z-index: 1000;">
				<picker mode="region" @change="yearChange">
					<view style="width:662rpx;height:100rpx;background-color: white;padding:38rpx 22rpx;"
						class="roww center_center">
						<view>所在地</view>
						<view class="allline"></view>
						<view style="font-size: 30rpx;">{{timetext}}</view>
						<image src="/static/right.png" style="width: 40rpx;height: 40rpx;"></image>
					</view>
				</picker>
			</view>

		</view>








		<view style="height: 50rpx;"></view>

		<view class="colonn center_center">
			<!-- <view class="shurukuangs roww center_center">
					<view class="w-20"></view>
					<input class="inputpla"  maxlength="10" placeholder-class="inputpla" placeholder="想一个好听的昵称吧"  />
					<view class="allline"></view>
				</view> -->
			<view style="height: 116rpx;"></view>
			<view class="xiayibu" @click="onbtn">下一步</view>
			<view style="height: 116rpx;"></view>
		</view>

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
			for (let i = 1930; i <= date.getFullYear() + 1; i++) {
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


				Image: [
					'https://ta.imjiayi.com/upload/upload/chongfu/01 1@2x.png',
					'https://ta.imjiayi.com/upload/upload/chongfu/4444@2x.png', //男
					'https://ta.imjiayi.com/upload/upload/chongfu/06@2x.png', //女
				],


				inputnf: {}, //之前填的信息
			}
		},
		mounted() {
			// 一进入显示当前日期的星座
			this.xingzuo();
		},
		onLoad() {
			this.inputnf = getApp().globalData.reg;
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
			choose1() {
				console.log("头像选择结果");
				let _this = this;
				
				uni.chooseMedia({
					count: 1,
					success(res) {
						console.log("阿达",res);
								_this.headimg = res.tempFiles[0].tempFilePath;
					},
					complete: (res) => {
						console.log("阿达",res);
					}
				});
				
				// uni.chooseMedia({
				// 	count: 1,
				// 	  mediaType: ['image'],
				// 	  sourceType: ['album', 'camera'],
				// 	success(res) {    
				// 		console.log(res.tempFilePaths[0])
				// 		_this.headimg = res.tempFilePaths[0];
				// 	},
				// 	fail:res=>{
				// 		console.log("头像选择失败",res);
				// 	},
				// 	complete:res=>{
				// 		console.log("头像选择结果",res);
				// 	}
				// })
				
				
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
					.length > 0 && get.base_address != '请选择地区') {
					uni.navigateTo({
						url: '../yindao4/yindao4?type=0',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else {
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
	@import url(yindao3.css);
</style>