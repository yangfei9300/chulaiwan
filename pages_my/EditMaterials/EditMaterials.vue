<template>
	<view class="content">
		<view class="" style="    display: flex;
    justify-content: center;">
			<u-avatar :src="src" shape="circle" size="100" @click="avatarclick"></u-avatar>
		</view>
		<view class="data_name">
			<view class="data_name1">
				<view class="namev">昵称</view>
				<view class="namev_1">
					<input class="input" type="text" :value="username" @input="oninput" />
				</view>
			</view>
			<view class="data_name2">
				<view class="namev">个性签名</view>
				<view class="namev_1">
					<input class="input" type="text" :value="usergeqian" @input="ongeqian" />
				</view>
			</view>
			<view class="data_name1">
				<view class="namev">性别</view>
				<view class="">
					<picker @change="sexPickerChange" style="font-size: 30rpx;" :value="sex" :range="array">
						<view class="uni-input">{{array[sex]}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="data_name">
			<view class="data_name1" >
				<view class="namev">所在地</view>
				<view class="namev_1">
					<picker  mode="region" :value="address" @change="regionchange">
						<view>{{address}}</view>
					</picker>
					<!-- <input class="input" type="text" :value="address" />
					<image class="bianjiimg" src="../static/bianjiimg.png" mode=""></image> -->
				</view>
			</view>
			<view class="data_name2">
				<view class="namev">电话号码</view>
				<view class="">{{phone}}</view>
			</view>
			<view class="data_name2" @click="show = true">
				<view class="namev">生日</view>
				<view class="">
					<picker mode="date" v-if="birthday!==''" :value="birthday" start="1880-1-1" end="2028-1-1"
						@change="Datechange">
						<view class="uni-input">{{birthday}}</view>
					</picker>
					<picker mode="date" v-else :value="birthday" start="1880-1-1" end="2028-1-1" @change="Datechange">
						<view class="uni-input">{{birthday+'选择生日'}}</view>
					</picker>
				</view>
			</view>
			<view class="data_name2">
				<view class="namev">星座</view>
				<view class="">{{base_con}}</view>
			</view>
			<view class="data_name1">
				<view class="namev">信誉积分</view>
				<view class="">100</view>
			</view>

		</view>
		<view class="data_biaoqian">
			<view class="namev">我的标签</view>
		</view>
		<view class="data_biaoqian2">
			<view v-if="marks.length==0" class="data_biaoqian2_1" @click="onlabel">添加标签</view>
			<view v-else class="data_biaoqian2_1" @click="onlabel">
				<view class="" v-for="(item,index) in marks">{{item}}</view>
			</view>
		</view>
		<view class="btn_v">
			<button class="btn" @click="onxinxi">保存</button>
		</view>
	</view>
</template>

<script>
	import uploadFile from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'

	export default {
	
		data() {
			return {
				names: false,
				maskCloseAble: true,
				str: '',
				defaultValue: '',
				startDate: '1550-1-1',
				endDate: '2050-1-1',
				array: ["男", "女"],
				// 日
				day:'',
				// 月份
				yue:'',
				sex: 0,
				token: '',
				uuid: '',
				// 头像
				src: '',
				// 姓名
				username: '',
				// 个签
				usergeqian: "",
				// 手机号
				phone: "",
				// 地址
				address: 'shandongsheng ',
				// 生日
				birthday: '',
				// 星座
				base_con: '',
				// 标签
				marks: [],
				show: false,
				value1: Number(new Date()),
			}
		},
		onLoad() {
			this.token = uni.getStorageSync('token');
			this.uuid = uni.getStorageSync('uuid');
			this.baseurl = getApp().globalData.baseurl;
			// 获取信息
		},
		mounted() {
			this.gerenxinxi();
			// 使用Switch进行星座判断
			
		},
		
		methods: {
			// 地区
			regionchange(region) {
				console.log(region.detail.value[0]);
				this.address=region.detail.value[0]+region.detail.value[1]+region.detail.value[2];
			},
			// 性别
			sexPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			gerenxinxi() {
				uni.request({
					url: this.baseurl + '/api/user/getUserInfo',
					method: 'POST',
					data: {
						uuid: this.uuid,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log('个人信息',res);
						let ress = res.data.data;
						this.username = ress.nickname;
						this.src = ress.headimg;
						this.sex = ress.base_sex;
						this.address = ress.base_address;
						this.marks = ress.base_marks;
						this.phone = ress.phone;
						this.birthday = ress.base_birthday;
						this.base_con = ress.base_con;
						this.usergeqian = ress.base_sign;
						console.log(this.marks);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			onxinxi() {
				uploadFile(this.src, 'image/xcx/',
					result => {
						console.log(result);
						this.src = result;

						uni.request({
							url: this.baseurl + '/api/user/userInfoEdit',
							method: 'POST',
							header: {
								xcx:1,
								token: this.token
							},
							data: {
								nickname: this.username,
								headimg: this.src,
								base_marks: ["出来玩", "出来玩", "出来玩", "出来玩"], //this.marks
								base_sex: this.sex,
								base_address: this.address, //this.address
								phone: this.phone,
								base_birthday: this.birthday,
								base_con: '巨蟹座', //this.con
								
								city:uni.getStorageSync("citySel"),
								base_sign: this.usergeqian
							},
							success: res => {
								console.log(res);
								uni.showModal({
									title: '编辑资料',
									content: res.data.info,
									showCancel: false,
									cancelText: '',
									confirmText: '确定',
									success: res => {},
									fail: () => {},
									complete: () => {}
								});
							},
							fail: () => {},
							complete: () => {}
						});
					}
				)
				// uni.request({
				// 	url: this.baseurl + '/api/user/userInfoEdit',
				// 	method: 'POST',
				// 	header: {
				// 		token: this.token
				// 	},
				// 	data: {
				// 		nickname: this.username,
				// 		headimg: this.src,
				// 		base_marks: this.marks,
				// 		base_sex: 1,
				// 		base_address: this.address,
				// 		phone: this.phone,
				// 		base_birthday: this.birthady,
				// 		base_con: this.con,
				// 		base_sign: this.usergeqian
				// 	},
				// 	success: res => {
				// 		console.log(res);
				// 	},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
			},
			// 选择时间
			Datechange(Dates) {
				console.log(Dates);
				this.birthday = Dates.detail.value;
				this.yue=this.birthday.slice(5,7);
				this.day=this.birthday.slice(8,10);
				switch (this.yue) {
					case "01":
						if (this.day > 19) {
							this.base_con = "水瓶座";
						} else this.base_con = "摩羯座";
						break;
					case "02":
						if (this.day > 18) {
							this.base_con = "双鱼座";
						} else this.base_con = "水瓶座";
						break;
					case "03":
						if (this.day > 20) {
							this.base_con = "白羊座";
						} else this.base_con = "双鱼座";
						break;
					case "04":
						if (this.day > 19) {
							this.base_con = "金牛座";
						} else this.base_con = "白羊座";
						break;
					case "05":
						if (this.day > 20) {
							this.base_con = "双子座";
						} else this.base_con = "金牛座";
						break;
					case "06":
						if (this.day > 21) {
							this.base_con = "巨蟹座";
						} else this.base_con = "双子座";
						break;
					case "07":
						if (this.day > 22) {
							this.base_con = "狮子座";
						} else this.base_con = "巨蟹座";
						break;
					case "08":
						if (this.day > 22) {
							this.base_con = "处女座";
						} else this.base_con = "狮子座";
						break;
					case "09":
						if (this.day > 22) {
							this.base_con = "天秤座";
						} else this.base_con = "处女座";
						break;
					case "10":
						if (this.day > 23) {
							this.base_con = "天蝎座"
						} else this.base_con = "天秤座";
						break;
					case "11":
						if (this.day > 20) {
							this.base_con = "射手座";
						} else this.base_con = "天蝎座";
						break;
					case "12":
						if (this.day > 21) {
							this.base_con = "摩羯座";
						} else this.base_con = "射手座";
						break;
				
				}
				console.log(this.yue,this.day);
			},
			// 选择标签
			onlabel() {
				uni.navigateTo({
					url: '../label/label',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 个签更换
			ongeqian(g) {
				console.log(g.detail.value);
				this.usergeqian = g.detail.value;
			},
			// 名称更换
			oninput(e) {
				console.log(e.detail.value);
				this.username = e.detail.value;
			},
			// 头像更换
			avatarclick() {
				let _this = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res.tempFilePaths[0]);
						_this.src = res.tempFilePaths[0];

					}
				})
			},
			modify() {
				uni.request({
					url: this.baseurl + '/api/user/userInfoEdit',
					method: 'POST',
					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.bianjiimg {
		width: 25rpx;
		height: 25rpx;
		margin-left: 5rpx;
	}

	.namev_1 {
		display: flex;
		align-items: flex-end;
	}

	.namev {
		font-weight: 600;
	}

	.btn_v {
		display: flex;
		justify-content: center;
	}

	.btn {
		color: white;
		background-color: #FFC803;
		width: 60%;
		margin: 20rpx 0;
	}

	/* 标签部分 */
	.data_biaoqian2 {
		background: white;
		text-align: center;
		width: 100%;
		height: 250rpx;
		align-items: center;
		display: flex;
		justify-content: center;
		border-radius: 20rpx;
		margin: 40rpx 0;
	}

	.data_biaoqian {
		display: flex;
		justify-content: left !important;
	}

	/* 编辑资料姓名个签部分 */
	.input {
		text-align: end;
	}

	.data_name2 {
		display: flex;
		justify-content: space-between;
		margin: 0 30rpx;
		padding: 30rpx 0;
		border-bottom: 1rpx solid #9999;
		border-top: 1rpx solid #9999;
	}

	.data_name1 {
		display: flex;
		justify-content: space-between;
		margin: 0 30rpx;
		padding: 30rpx 0;

	}

	.data_name {
		background-color: white;
		border-radius: 20rpx;

		margin: 50rpx 0;
		/* height: 300rpx; */
	}

	.content {
		background-color: #F8F8F8;
		padding: 20rpx;
	}
</style>
