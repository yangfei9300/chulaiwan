<template>
	<view class="content">
		<image class="EditBJ" src="../static/Edit/EditBJ.png" mode=""></image>
		<view class="Editheadimg" @click="choose">
			<image class="Editimage" style="z-index: 1;" src="../static/Edit/headimg.png" mode=""></image>
			<image class="Editimage" :src="UserInfo.headimg" mode=""></image>
			<view class="EditTishi">点击更换头像</view>
		</view>
		<view class="EdtiView">
			<view class="EditName">
				<view class="">昵称</view>
				<input type="text" class="EditInput" v-model="UserInfo.nickname" value="" />
			</view>
			<view class="EditName">
				<view class="">个性签名</view>
				<input type="text" class="EditInput" v-model="UserInfo.base_sign" value="" />
			</view>
			<view class="EditName">
				<view class="">性别</view>
				<view class="EditInput" v-if="UserInfo.base_sex==1">男</view>
				<view class="EditInput" v-if="UserInfo.base_sex==0">女</view>
			</view>
			<view class="EditName">
				<view class="">所在地</view>
				<picker class="EditInput" mode="region" @change="region">
					<view>{{UserInfo.base_address}}</view>
				</picker>
			</view>
			<view class="EditName">
				<view class="">电话号码</view>
				<view class="EditInput">{{UserInfo.phone}}</view>
			</view>
			<view class="EditName">
				<view class="">生日</view>
				<picker class="EditInput" mode="date" @change="bindDateChange">
					<view>{{UserInfo.base_birthday}}</view>
				</picker>
			</view>
			<view class="EditName">
				<view class="">星座</view>
				<view class="EditInput">{{UserInfo.base_con}}</view>
			</view>
			<view class="EditName">
				<view class="">信誉积分</view>
				<view class="EditInput">{{UserInfo.base_credit}}</view>
			</view>
			<view class="EditName" @click="Navinter">
				<view class="">选择分类</view>
				<view class="EditRight">
					<view class="" style="width: 400rpx;">{{UserInfo.base_interest}}</view>
					<image class="EditRightImg" src="../static/Edit/right.png" mode=""></image>
				</view>
			</view>
			<view class="EditName" @click="NavMark">
				<view class="">我的标签</view>
				<view class="EditRight">
					<view class="huanhang " style="display: flex; flex-wrap: wrap;justify-content: flex-end;width:400rpx;"
						v-if="UserInfo.base_marks.length>0">
						<view class="" v-for="(itrm,irdex) in UserInfo.base_marks" :key="index">{{itrm}}</view>
					</view>
					<image class="EditRightImg" src="../static/Edit/right.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 保存按钮-->
		<button @click="OnMyBtn" class="BTN">保存</button>
		<view style="height:50rpx;"></view>
	</view>
</template>

<script>
	import upload from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				UserInfo: [],
			}
		},
		onLoad(options) {
			this.UserInfo = JSON.parse(options.UserInfo);
			console.log(this.UserInfo);
		},
		onShow() {
			console.log("getApp().globalData.reg",getApp().globalData.reg)
			// UserInfo.base_marks
			if(getApp().globalData.reg.base_marks.length>0){
				this.UserInfo.base_marks=getApp().globalData.reg.base_marks;
			}
			
		},  
		methods: {
			// 选择头像
			choose() {
				let _this = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res.tempFilePaths);
						
						upload(res.tempFilePaths[0],'image/xcx/',result=>{
							console.log(result);
							_this.UserInfo.headimg = result;
							uni.request({
								url: _this.baseurl+'/api/user/userHeadimgEdit',
								method: 'POST',
								header:{xcx:1,token:_this.token},
								data: {headimg:result,
								
								city:uni.getStorageSync("citySel"),
								},
								success: res => {
									if(res.data.code==1){
										uni.showToast({
											title: res.data.info,
											mask:true,
											icon:'none'
										});
									}else{
										uni.showToast({
											title: res.data.info,
											mask:true,
											icon:'none'
										});
									}
								},
								fail: () => {},
								complete: () => {}
							});
						})
						
					},
					complete:res=>{
						console.log("头像选择结果",res);
					}
				})
			},
			// 选择地区
			region(e) {
				console.log(e)
				this.UserInfo.base_address = e.detail.value[0] + e.detail.value[1] + e.detail.value[2];
			},
			// 选择生日
			bindDateChange: function(e) {
				let year = e.detail.value.substr(0, 4);
				let yue = e.detail.value.substr(5, 2);
				let day = e.detail.value.substr(8, 2)
				console.log(e.detail.value);
				console.log(year + '年', yue + '月', day + '日');
				this.UserInfo.base_birthday = year + '年' + yue + '月' + day + '日';
				const lastDay = (day <= 30),
					FebDay = (day <= 29);
				switch (yue) {
					case '01': //1月星座
						if (day <= 19) {
							this.UserInfo.base_con = '摩羯座';
						} else if (day >= 20) {
							this.UserInfo.base_con = '水瓶座';
						}
						break;
					case '02': //2月星座
						if (day <= 18) {
							this.UserInfo.base_con = '水瓶座';
						} else if (day >= 18 && FebDay) {
							this.UserInfo.base_con = '双鱼座';
						}
						break;
					case '03': //3月星座
						if (day <= 20) {
							this.UserInfo.base_con = '双鱼座';
						} else if (day >= 21) {
							this.UserInfo.base_con = '白羊座';
						}
						break;
					case '04': //4月星座
						if (day <= 19) {
							this.UserInfo.base_con = '白羊座';
						} else if (day >= 20 && lastDay) {
							this.UserInfo.base_con = '金牛座';
						}
						break;
					case '05': //5月星座
						if (day <= 20) {
							this.UserInfo.base_con = '金牛座';
						} else if (day >= 21) {
							this.UserInfo.base_con = '双子座';
						}
						break;
					case '06': //6月星座
						if (day <= 21) {
							this.UserInfo.base_con = '双子座';
						} else if (day >= 22 && lastDay) {
							this.UserInfo.base_con = '巨蟹座';
						}
						break;
					case '07': //7月星座
						if (day <= 22) {
							this.UserInfo.base_con = '巨蟹座';
						} else if (day >= 23) {
							this.UserInfo.base_con = '狮子座';
						}
						break;
					case '08': //8月星座
						if (day <= 22) {
							this.UserInfo.base_con = '狮子座';
						} else if (day >= 23) {
							this.UserInfo.base_con = '处女座';
						}
						break;
					case '09': //9月星座
						if (day <= 22) {
							this.UserInfo.base_con = '处女座';
						} else if (day >= 23 && lastDay) {
							this.UserInfo.base_con = '天秤座';
						}
						break;
					case 10: //10月星座
						if (day <= 23) {
							this.UserInfo.base_con = '天秤座';
						} else if (day >= 24) {
							this.UserInfo.base_con = '天蝎座';
						}
						break;
					case 11: //11月星座
						if (day <= 22) {
							this.UserInfo.base_con = '天蝎座';
						} else if (day >= 23 && lastDay) {
							this.UserInfo.base_con = '射手座';
						}
						break;
					case 12: //12月星座
						if (day <= 21) {
							this.UserInfo.base_con = '射手座';
						} else if (day >= 22) {
							this.UserInfo.base_con = '摩羯座';
						}
						break;
				}
			},
			// 选择分类
			Navinter() {
				uni.navigateTo({
					url: '../../pages_yindao/yindao4/yindao4?type=1',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 选择标签
			NavMark() {
				uni.navigateTo({
					url: '../../pages_yindao/yindao2/yindao2?type=1',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			OnMyBtn() {
				uni.request({
					url: this.baseurl + '/api/user/userInfoEdit',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token,
					},
					data: {
						nickname: this.UserInfo.nickname,
						headimg: this.UserInfo.headimg,
						base_marks: this.UserInfo.base_marks.join(","),
						base_sex: this.UserInfo.base_sex,
						base_address: this.UserInfo.base_address,
						phone: this.UserInfo.phone,
						base_birthday: this.UserInfo.base_birthday,
						base_con: this.UserInfo.base_con,
						base_sign: this.UserInfo.base_sign,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("修改信息", res);
						if (res.data.code == 1) {
							uni.showToast({
								title: res.data.info,
								mask: true,
								icon: 'none',
							});
							setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})
							},1000)
							
							
						} else if (res.data.code == 0) {
							uni.showToast({
								title: res.data.info,
								mask: true,
								icon: 'none',
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

<style scoped>
	.BTN {
		width: 660rpx;
		height: 110rpx;
		background: #FFC803;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
		border-radius: 12px 12px 12px 12px;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 52rpx;
		margin: 50rpx;

	}

	/* 标签 数组 */
	.EditRightImg {
		width: 36rpx;
		height: 30rpx;
	}

	.EditRight {
		display: flex;
		color: #515151 !important;
		text-align: right;
		width: 421rpx;
		justify-content: flex-end;
		align-items: baseline;
	}

	/* 昵称更换 */
	.EditInput {
		color: #515151 !important;
		text-align: right;
		width: 421rpx;
	}

	.EditName:nth-child(7) {
		border-bottom: 2rpx solid #E7E7E7;
	}

	.EditName:nth-child(3) {
		border-bottom: 2rpx solid #E7E7E7;
	}

	.EditName {
		display: flex;
		justify-content: space-between;
		font-size: 36rpx;
		color: #111111;
		padding: 33rpx 0;
	}

	/* 头像更换 */
	.EditTishi {
		position: absolute;
		top: 195rpx;
		color: #F8B800;
		font-size: 36rpx;
	}

	.Editimage {
		width: 188rpx;
		height: 194rpx;
		border-radius: 50%;
		position: absolute;
	}

	.EditheadimgView {
		position: relative;
	}

	.Editheadimg {
		position: absolute;
		top: 170rpx;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
	}

	/* 背景图片 */
	.EdtiView {
		padding: 242rpx 54rpx 0 54rpx;
		border-radius: 40rpx 40rpx 0 0;
		/* height: 500rpx; */
		background-color: white;
	}

	.EditBJ {
		width: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 376rpx;
		z-index: -1;
	}

	.content {
		padding: 270rpx 0 0 0;

		font-family: Inter-Regular, Inter;
	}
</style>
