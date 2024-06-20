<template>
	<view class="content">
		<!-- 分类 -->

		<view class="cation" @click="navcart">
			<view class="cationView">
				<image class="Icon" src="../../static/fenllei.png" mode=""></image>
				<view class="cationTitle">选择分类</view>
			</view>
			<view class="cationTowView">
				<view class="cationTowtitle">选择分类</view>
				<view class="cationTowRight">
					<view class="cationTowname" v-if="cate_name">{{cate_name}}</view>
					<image class="cationTowjiantou" src="../../static/right.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 标题 -->
		<view class="Title">
			<view class="TitleView">
				<image class="Icon" src="../../static/biaoti.png" mode=""></image>
				<view class="cationTitle">填写标题</view>
			</view>
			<view class="TitleTowView">
				<input type="text" v-model="TitleValue" value="" :maxlength="30" placeholder="请输入标题" />
				<view class="TitleTowRight">
					{{TitleValue.length}}/30
				</view>
			</view>
		</view>
		<!-- 标题 -->
	<!-- 	<view class="cover">
			<view class="coverView">
				<image class="Icon" src="../../static/fengmian.png" mode=""></image>
				<view class="cationTitle">选择封面</view>
			</view>
			<view class="coverTowView" @click="CoverChoose">
				<view class="">封面</view>
				<image class="coverImg" v-if="Cover" :src="Cover" mode=""></image>
				<image class="coverImg" v-else src="../../static/fengmian1.png" mode=""></image>
			</view>
		</view> -->
		<!-- 时间地址 -->
		<view class="Time">
			<view class="TimeView">
				<image class="Icon" src="../../static/shijian.png" mode=""></image>
				<view class="cationTitle">时间地址</view>
			</view>
			<view class="TimeTowView">
				<view class="TimeLast" @click="is_kai_time=true">
					<view class="TimeLast_Title"  >开始时间</view>
					<view class="">{{year}}.{{month}}.{{day}} {{hour}}:{{Minute}}</view>
				</view>
				<view class="TimeLast" @click="is_kai_time1=true">
					<view class="TimeLast_Title" >结束时间</view>
					<view class="" >{{year1}}.{{month1}}.{{day1}} {{hour1}}:{{Minute1}}</view>
				</view>
				<view class="TimeLast" @click="openAddress()">
					<view class="TimeLast_Title">活动地址</view>
					<view class="TimeLast_right">
						<view class="TimeLast_name" v-if="addname">{{addname}}</view>
						<image class="cationTowjiantou" src="../../static/right.png" mode=""></image>
					</view>
				</view>
			</view>

		</view>
		<!-- 要求限制 -->
		<view class="limit">
			<view class="limitView">
				<image class="Icon" src="../../static/xianzhi.png" mode=""></image>
				<view class="cationTitle">要求限制</view>
			</view>
			<view class="limitTowView">
				<view class="limitLast" @click="TrueBottom=true">
					<view class="">设置人数</view>
					<view class="limitRight">
						<view class="" v-if="RenNum || RenNumT">{{RenNum || RenNumT}}</view>
						<image class="rightIcon" src="../../static/right.png" mode=""></image>
					</view>
				</view>
				<!-- <view class="limitLast">
					<view class="">信誉积分</view>
					<view class="" v-if="credit==0" @click="Truecredit=true">不限制</view>
					<view class="" v-else @click="Truecredit=true">{{creditText}}</view>
				</view> -->
				<view class="limitLast">
					<view class="">性别</view>
					<view class="limitSex">
						<view class="limitSexView1" @click="this.sex=0" :class="{limitSexView:sex==0}">不限</view>
						<view class="limitSexView1" @click="this.sex=1" :class="{limitSexView:sex==1}">男</view>
						<view class="limitSexView1" @click="this.sex=2" :class="{limitSexView:sex==2}">女</view>
					</view>
				</view>
				<view class="limitLast">
					<view class="">用户身份</view>
					<view class="limitVIP">
						<view class="limitVIPView1" :class="{limitVIPView:VIP==0}" @click="this.VIP=0">不限</view>
						<view class="limitVIPView1" :class="{limitVIPView:VIP==1}" @click="this.VIP=1">会员</view>
					</view>
				</view>
				<view class="limitMoneyLast">
					<view class="">付款方式</view>
					<view class="limitMoney">
						<view class="limitMoneyView1" :class="{limitMoneyView:pay_type==1}" @click="this.pay_type=1">AA
						</view>
						<view class="limitMoneyView1" :class="{limitMoneyView:pay_type==2}" @click="this.pay_type=2">免费
						</view>
						<view class="limitMoneyView1" :class="{limitMoneyView:pay_type==3}" @click="this.pay_type=3">
							男A女免</view>
						<view class="limitMoneyView1" :class="{limitMoneyView:pay_type==4}" @click="this.pay_type=4">
							女A男免</view>
						<view class="limitMoneyView1" :class="{limitMoneyView:pay_type==5}" @click="this.pay_type=5">我请客
						</view>
					</view>
				</view>
				<view class="limitLast">
					<view class="">人均</view>
					<view class="limitMoney">
						<input class="limitMoneyInput" type="text" v-model="money" value="" />
						<view class="">元</view>
					</view>
				</view>

			</view>
		</view>
		<!-- 据介绍活动 -->
		<view class="introduce">
			<textarea class="introducetext" value="" v-model="Detail" placeholder="请输入简介" />
			<scroll-view class="introduceScroll" scroll-x="true">
				<view class="OSSView" v-for="(item,index) in OSSlist" :key="index">
					<view class="OSSX" @click="onOSSdelete(index)">x</view>
					<image class="introduceupload" :src="item" mode=""></image>
				</view>
				<image class="introduceupload" @click="chooseImg" src="../../static/upload.png" mode=""></image>
			</scroll-view>
			<view class="introduceView">
			</view>
		</view>
		<view class="btn" @click="onbtn">发布</view>
		<!-- 活动人数 -->
		<view class="upBottom" v-if="TrueBottom">
			<view class="popBottom">
				<view class="UP_title">限制人数</view>
				<view class="UP_View" @click="RenTrue=true">
					<view class="UP_left">
						<image class="UP_leftImg" src="../../static/renshu.png" mode=""></image>
						<view class="">精准人数</view>
					</view>
					<image class="cationTowjiantou" src="../../static/right.png" mode=""></image>

				</view>
				<view class="RenView" v-if="RenTrue">
					<view class="RenItem" v-for="item in 9" :key="item" @click="onRen(item+2,1)">{{item+2}}人</view>

				</view>
				<view class="UP_View" @click="RenTrue=false">
					<view class="UP_left">
						<image class="UP_leftImg" src="../../static/renshu1.png" mode=""></image>
						<view class="">大概人数</view>
					</view>
					<image class="cationTowjiantou" src="../../static/right.png" mode=""></image>

				</view>
				<view class="RenView" v-if="!RenTrue">
					<view class="RenItem1" @click="onRen('2~4',2)">2~4人</view>
					<view class="RenItem1" @click="onRen('4~6',2)">4~6人</view>
					<view class="RenItem1" @click="onRen('6~10',2)">6~10人</view>
					<view class="RenItem1" @click="onRen('11~15',2)">11~15人</view>
				</view>
			</view>
		</view>
		<!-- 活动地址选择 -->
		<view class="upBottom" @click="AddressBottom=false" v-if="AddressBottom">
			<view class="popBottom">
				<view class="UP_title">活动地址</view>
				<view class="UP_View" @click.stop="navAddress(1)">
					<view class="UP_left">
						<image class="UP_leftImg" src="../../static/shangpu.png" mode=""></image>
						<view class="">选择商家</view>
					</view>
					<image class="cationTowjiantou" src="../../static/right.png" mode=""></image>

				</view>

				<view class="UP_View" @click.stop="navAddress(2)">
					<view class="UP_left">
						<image class="UP_leftImg" src="../../static/zidingyiweizhi.png" mode=""></image>
						<view class="">自定义位置</view>
					</view>
					<image class="cationTowjiantou" src="../../static/right.png" mode=""></image>

				</view>

			</view>
		</view>
		<!-- 选择时间 -->
		<view class="pickerceng" v-if="is_kai_time" @click="is_kai_time=false">
			<view class="pickerView">
				<picker-view :indicator-style="indicatorStyle" :value="value" @change.stop="bindChange"
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
					<picker-view-column>
						<view class="item" v-for="(item,index) in hours" :key="index">{{item}}时</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in Minutes" :key="index">{{item}}分</view>
					</picker-view-column>
				</picker-view>
				<button type="default" @click="is_kai_time=false">确定</button>
			</view>

		</view>
		<view class="pickerceng" v-if="is_kai_time1" @click="is_kai_time1=false">
			<view class="pickerView">
				<picker-view :indicator-style="indicatorStyle" :value="value1" @change.stop="bindChange1"
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
					<picker-view-column>
						<view class="item" v-for="(item,index) in hours" :key="index">{{item}}时</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in Minutes" :key="index">{{item}}分</view>
					</picker-view-column>
				</picker-view>
				<button type="default" @click="is_kai_time1=false">确定</button>
			</view>
		</view>
		<!-- 信誉积分 -->
		<view class="pickerceng" v-if="Truecredit" @click="Truecredit=false">
			<view class="pickerView">
				<picker-view :indicator-style="indicatorStyle" :value="value3" @change.stop="creditChange"
					class="picker-view">
					<picker-view-column>
						<view class="item">不限制</view>
						<view class="item" v-for="(item,index) in creditlist" :key="index">{{item}}分</view>
					</picker-view-column>
				</picker-view>
				<button type="default" @click="is_kai_time=false">确定</button>
			</view>

		</view>
	</view>
</template>

<script>
	import uploadImage from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	export default {
		data() {
			const date = new Date()
			// 年
			const years = []
			const year = date.getFullYear()
			const year1 = date.getFullYear()
			// // 月
			const months = []
			const month = date.getMonth() + 1
			const month1 = date.getMonth() + 1
			// // 日
			const days = []
			const day = date.getDate()
			const day1 = date.getDate()
			// // 时
			const hours = []
			const hour = date.getHours()+1
			const hour1 = date.getHours()+1
			// // 分
			const Minutes = []
			const Minute = date.getMinutes()
			const Minute1 = date.getMinutes()
			// 时间戳
			const s_time = parseInt(date.getTime()/1000);
			const e_time = parseInt(date.getTime()/1000);
			for (let i = 2016; i <= date.getFullYear() + 5; i++) {
				years.push(i)
			}
			for (let i = 0; i <= 24; i++) {
				hours.push(i)
			}
			for (let i = 0; i <= 60; i++) {
				Minutes.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			console.log(years)
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				years,
				year,
				year1,
				months,
				month,
				month1,
				days,
				day,
				day1,
				hour,
				hour1,
				hours,
				Minutes,
				Minute,
				Minute1,
				value: [7, month - 1, day - 1, hour, Minute],
				value1: [7, month1 - 1, day1 - 1, hour1, Minute1],
				visible: true,
				indicatorStyle: `height: 50px;`,
				is_kai_time: false,
				is_kai_time1: false,
				// 分类
				cate_id: '',
				cate_name: '',
				// 标题
				TitleValue: '',
				// 封面图
				Cover: '',
				// 活动开始时间戳
				s_time,
				// 活动结束时间戳
				e_time,
				// 人数选择
				RenTrue: true,
				p_num_type: null,
				// 精准
				RenNum: '',
				// 区间
				RenNumT: '',
				TrueBottom: false,
				// 信誉分选择
				credit: 0,
				creditText: '不限制',
				creditlist: ["99", "98", "97", "96", "95", "94", "93", "92", "91", "89", "88", "87", "86", "85",
					"84", "83", "82", "81", "80"
				],
				value3: [],
				Truecredit: false,
				// 性别选择
				sex: '0',
				// 会员选择
				VIP: '0',
				pay_type: '1',
				
				// 地址选择
				AddressBottom: false,
				add_type: null,
				addname: '',
				addDetail: '',
				lat: '',
				lng: '',
				// 余额
				money: '',
				// 上传图片
				OSSlist: [],
				ASSlist: [],
				// 活动简介
				Detail: '',

			}
		},

		methods: {
			// 选择分类
			navcart() {
				uni.navigateTo({
					url: '../cart/cart',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 选择封面
			CoverChoose() {
				let _this = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log("选择封面图片", res);
						_this.Cover = res.tempFilePaths[0];
					}
				})
			},
			// 人数选择
			onRen(num, type) {
				this.p_num_type = type;
				if (type == 1) {
					this.RenNum = num;
					this.RenNumT = '';
					this.TrueBottom = false;
				} else if (type == 2) {
					this.RenNumT = num;
					this.RenNum = '';
					this.TrueBottom = false;
				}
			},
			// 商家选择
			navAddress(type) {
				this.add_type = type;
				if (type == 1) {
					uni.navigateTo({
						url: '../shangjiaAddress/shangjiaAddress?cate_id=' + this.cate_id,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else if (type == 2) {
					uni.navigateTo({
						url: '../Groupaddress/Groupaddress',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}
			},
			// 信誉积分
			creditChange(e) {
				let val = e.detail.value[0];
				console.log(val);
				switch (val) {
					case 0:
						this.credit = 0;
						this.creditText = "不限制";
						this.value3 = [val];
						break
					case 1:
						this.credit = 99;
						this.creditText = "99分";
						this.value3 = [val];
						break
					case 2:
						this.credit = 98;
						this.creditText = "98分";
						this.value3 = [val];
						break
					case 3:
						this.credit = 97;
						this.creditText = "97分";
						this.value3 = [val];
						break
					case 4:
						this.credit = 96;
						this.creditText = "96分";
						this.value3 = [val];
						break
					case 5:
						this.credit = 95;
						this.creditText = "95分";
						this.value3 = [val];
						break
					case 6:
						this.credit = 94;
						this.creditText = "94分";
						this.value3 = [val];
						break
					case 7:
						this.credit = 93;
						this.creditText = "93分";
						this.value3 = [val];
						break
					case 8:
						this.credit = 92;
						this.creditText = "92分";
						this.value3 = [val];
						break
					case 9:
						this.credit = 91;
						this.creditText = "91分";
						this.value3 = [val];
						break
					case 10:
						this.credit = 89;
						this.creditText = "89分";
						this.value3 = [val];
						break
					case 11:
						this.credit = 88;
						this.creditText = "88分";
						this.value3 = [val];
						break
					case 12:
						this.credit = 87;
						this.creditText = "87分";
						this.value3 = [val];
						break
					case 13:
						this.credit = 86;
						this.creditText = "86分";
						this.value3 = [val];
						break
					case 14:
						this.credit = 85;
						this.creditText = "85分";
						this.value3 = [val];
						break
					case 15:
						this.credit = 84;
						this.creditText = "84分";
						this.value3 = [val];
						break
					case 16:
						this.credit = 83;
						this.creditText = "83分";
						this.value3 = [val];
						break
					case 17:
						this.credit = 82;
						this.creditText = "82分";
						this.value3 = [val];
						break
					case 18:
						this.credit = 81;
						this.creditText = "81分";
						this.value3 = [val];
						break
					case 19:
						this.credit = 80;
						this.creditText = "80分";
						this.value3 = [val];
						break


				}
			},
			// 选择活动地址
			openAddress() {
				if (this.cate_name.length > 0) {
					this.AddressBottom = true;
				} else {
					uni.showToast({
						title: '请选择分类',
						mask: true,
						icon: 'none'
					});
				}
			},
			//选择图片
			chooseImg() {
				let _this = this;
				uni.chooseImage({
					count: 9,
					success(res) {
						console.log("选择图片九张", res);
						res.tempFilePaths.forEach(item => {
							_this.OSSlist.push(item);
						})
					}
				});
			},
			// 删除图片
			onOSSdelete(index) {
				this.OSSlist.splice(index, 1)
			},
			// 选择时间
			bindChange: function(e) {
				let val = e.detail.value
				console.log(val)
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
				this.hour = this.hours[val[3]]
				this.Minute = this.Minutes[val[4]]
				console.log("年",this.year);
				console.log("yue",this.month);
				console.log("日",this.day);
				console.log("是",this.hour);
				console.log("分",this.Minute);
				let time = this.year + '-' + this.month + '-' + this.day + ' ' + this.hour + ':' + this.Minute;
				console.log("date",time);
				let date = new Date(this.year,this.month-1,this.day,this.hour,this.Minute);
				console.log("date1",date);
				this.s_time = parseInt(date.getTime()/1000);
				console.log("结束",this.s_time);
			},
			bindChange1: function(e) {
				let val = e.detail.value
				console.log(val)
				this.year1 = this.years[val[0]]
				this.month1 = this.months[val[1]]
				this.day1 = this.days[val[2]]
				this.hour1 = this.hours[val[3]]
				this.Minute1 = this.Minutes[val[4]]
				let time = this.year1 + '-' + this.month1 + '-' + this.day1 + ' ' + this.hour1 + ':' + this.Minute1;
				let time1 = this.year1 + '-' + this.month1 + '-' + this.day1 + '-' + this.hour1 + ':' + this.Minute1+':'+'58';
				console.log(time);
				let date = new Date(this.year1,this.month1-1,this.day1,this.hour1,this.Minute1);
				console.log(date);
				this.e_time = parseInt(date.getTime()/1000);
				console.log( "开始",this.e_time);
			},
			onbtn() {

				uni.showLoading({
					mask: true,
					title: "正在发布",
				})
				let cover = '';
				console.log(this.cate_id != '' , this.TitleValue.length > 0 , this.Cover.length > 0 , this.s_time > 0 , this
					.e_time > 0 , this.add_type != "" , this.addname.length > 0 , this.addDetail.length > 0 ,this
					.lat > 0 , this.lng > 0 , this.p_num_type != '' , this.creditText != '' , this.sex != "" , this
					.VIP !=
					"" , this.pay_type != '' , this.money != '' , this.Detail.length > 0 , this.OSSlist.length );
					
					// --------------
				if (this.cate_id != '' && this.TitleValue.length > 0  && this.s_time > 0 && this
					.e_time > 0 && this.add_type != "" && this.addname.length > 0 && this.addDetail.length > 0 && this
					.lat > 0 && this.lng > 0 && this.p_num_type != ''  && this.sex != "" && this
					.VIP !=
					"" && this.pay_type != '' && this.money != '' && this.Detail.length > 0 && this.OSSlist.length > 0) {
					// 上传封面图片
					// uploadImage(this.Cover, 'image/xcx/',
					// 	result => {
					// 		console.log('oss', result);
					// 		cover = result;
					// 		console.log("封面", cover);
					// 	});
					setTimeout(() => {
						
						this.OSSlist.map(item => {
							uploadImage(item, 'image/xcx/',
								result => {
									console.log(result);
									this.ASSlist.push(result)
									console.log(this.ASSlist.length == this.OSSlist.length);
									if (this.ASSlist.length == this.OSSlist.length) {
										console.log(this.baseurl);
										uni.request({
											url: this.baseurl+'/api/actDo/actCreate',
											header: {
												xcx:1,
												token: this.token
											},
											method: 'POST',
											data: {
												// 分类id
												cate_id: this.cate_id,
												// 标题
												title: this.TitleValue,
												// 封面图
												// cover: cover,
												// 开始时间
												s_time: this.s_time,
												// 结束时间
												e_time: this.e_time,
												// 活动地址状态
												add_type: this.add_type,
												// 商铺编号
												shop_no: this.shop_no,
												// 地址名称
												add_name: this.addname,
												// 详细地址
												add_detail: this.addDetail,
												// 经度
												lng: this.lng,
												// 纬度
												lat: this.lat,
												// 人数选择
												p_num_type: this.p_num_type,
												p_num_acc: this.RenNum,
												p_num_sec: this.RenNumT,
												// 信誉积分
												// credit: this.creditText,
												// 性别
												sex: this.sex,
												// 是否VIP
												vip: this.VIP,
												// 付款方式
												pay_type: this.pay_type,
												money: this.money,
												content_text: this.Detail,
												content_img: this.ASSlist,
												city:uni.getStorageSync("citySel"),
											},
											success: res => {
												console.log("发布活动", res);
												uni.hideLoading();
												uni.showToast({
													title:res.data.info,
													mask:true,
													icon:'none',
													success() {
														uni.navigateBack({
															delta: 1,
														});
													}
												});
												
											},
											fail: () => {},
											complete: () => {}
										});
									}
									// console.log(oSSlist);
								})
						});
					}, 2000)
					// 上传详情图片

				} else {
					uni.showToast({
						title: '请仔细检查所填内容',
						mask: true,
						icon: 'none'
					});
				}

				// /api/actDo/actCreate

			}
		}
	}
</script>

<style scoped>
	.OSSX {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		right: 9rpx;
		top: 6rpx;
		color: white;
		font-size: 25rpx;
		background-color: rgba(1, 1, 1, 0.5);

	}

	.OSSView {
		position: relative;
		display: inline-block;
	}

	/* 活动图片 */
	.introduceScroll {
		white-space: nowrap;
	}

	/* 人数 */
	.RenItem1 {
		font-size: 28rpx;
		/* padding: 8rpx 40rpx; */
		white-space: nowrap;
		/* border: 1rpx solid #999; */
		margin: 10rpx 3rpx;
		text-align: center;

	}

	.RenItem {
		font-size: 28rpx;
		padding: 8rpx 40rpx;
		white-space: nowrap;
		/* border: 1rpx solid #999; */
		margin: 10rpx 3rpx;
		text-align: center;

	}

	.RenView {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	/* 选择活动弹窗 */
	.UP_leftImg {
		width: 56rpx;
		height: 57rpx;
	}

	.UP_left {
		display: flex;
		align-items: center;
	}

	.UP_View {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 40rpx 0;
	}

	.UP_title {
		text-align: center;
		font-size: 32rpx;
	}

	.popBottom {
		/* height: 500rpx; */
		background-color: white;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 25rpx 50rpx;
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		z-index: 999;
		/* 调用动画 */
		animation-name: upBottom;
		/* 持续时间 */
		animation-duration: 2s;
	}

	.upBottom {
		background-color: rgba(0, 0, 0, 0.3);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 12;
	}

	@keyframes upBottom {
		from {
			transform: translateY(1000rpx);
		}

		to {
			transform: translateY(0rpx);
		}
	}

	/* 介绍活动 */
	.introduceupload {
		width: 118rpx;
		height: 118rpx;
		border-radius: 16rpx;
		margin-right: 10rpx;
	}

	.introducetext {
		width: 100%;
		margin-bottom: 22rpx;
	}

	.introduce {
		background-color: white;
		margin-top: 32rpx;

	}

	/* 发布按钮 */
	.btn {
		width: 100%;
		height: 130rpx;
		font-size: 52rpx;
		background-color: #F8b800;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
		left: 0;
		rightt: 0;
		z-index: 10;
	}

	/* 要求限制 */
	.limitMoneyInput {
		text-align: end;
		width: 80rpx;
	}

	.limitMoneyView {

		background-color: #F8B800 !important;
		color: white !important;
		border: 1rpx solid white !important;

	}

	.limitMoneyView1 {
		font-size: 30rpx;
		padding: 6rpx 20rpx;
		text-align: center;
		border-radius: 44rpx;
		color: #A7A7A7;
		border: 1rpx solid #F2F2F2;
		margin-right: 16rpx;
		margin-bottom: 22rpx;
		margin-top: 20rpx;
	}

	.limitMoney {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.limitMoneyLast {
		padding: 50rpx 0rpx;

		border-bottom: 1rpx solid #F2F2F2;
	}

	.limitVIPView {
		background-color: #F8B800 !important;
		color: white !important;
		border: 1rpx solid white !important;
	}

	.limitVIPView1 {
		font-size: 30rpx;
		padding: 6rpx 20rpx;
		width: 64rpx;
		height: 44rpx;
		text-align: center;
		border-radius: 44rpx;
		border: 1rpx solid #F2F2F2;
		color: #A7A7A7;
		margin-left: 16rpx;
	}

	.limitVIP {
		display: flex;
		align-items: center;
	}

	.limitSexView {
		background-color: #F8B800 !important;
		color: white !important;
		border: 1rpx solid white !important;
	}

	.limitSexView1 {
		font-size: 30rpx;
		padding: 6rpx 20rpx;
		width: 64rpx;
		height: 44rpx;
		text-align: center;
		border-radius: 44rpx;
		border: 1rpx solid #F2F2F2;
		color: #A7A7A7;
		margin-left: 16rpx;
	}

	.limitSex {
		display: flex;
		align-items: center;
	}

	.rightIcon {
		width: 28rpx;
		height: 30rpx;
	}

	.limitLast {
		padding: 50rpx 0rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1rpx solid #F2F2F2;
	}

	.limit:last-child {
		border-bottom: none;
	}

	.limitRight {
		display: flex;
		align-items: center;
	}

	.limitTowView {
		/* height: 370rpx; */
		background-color: white;
		border-radius: 20rpx;
		padding: 0 30rpx;
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
	}

	.limitView {
		display: flex;
		align-items: center;
		margin: 22rpx 0;
	}

	.limit {}

	/* 时间地址 */
	.TimeLast_jt {}

	.TimeLast_name {}

	.TimeLast_right {
		display: flex;
		align-items: center;
	}

	.TimeLast_Title {
		color: #575757;
	}

	picker-view-column {
		background-color: white;
	}

	.pickerceng {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 20;

	}

	.pickerView {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.picker-view {
		width: 100%;
		height: 400rpx;
		margin-top: 20rpx;
	}

	.item {
		height: 50rpx;
		align-items: center;
		justify-content: center;
		text-align: center;
		display: flex;
	}

	.TimeLast {
		padding: 50rpx 0rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1rpx solid #F2F2F2;
	}

	.TimeLast:last-child {
		border: none;
	}

	.TimeTowView {
		/* height: 370rpx; */
		background-color: white;
		border-radius: 20rpx;
		padding: 0 30rpx;
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
	}

	.TimeView {
		display: flex;
		align-items: center;
	}

	/* 封面 */
	.coverTowView {
		display: flex;
		align-items: center;
		padding: 32rpx 30rpx;
		justify-content: space-between;
		background: white;
	}

	.coverImg {
		width: 60rpx;
		height: 56rpx;
	}

	.coverView {
		display: flex;
		align-items: center;
		margin: 22rpx 0;
	}

	.TimeView {
		display: flex;
		align-items: center;
		margin: 22rpx 0;
	}

	/* 标题 */
	.TitleTowRight {
		font-size: 32rpx;
		color: #575757;
	}

	.TitleTowView {
		display: flex;
		align-items: center;
		padding: 32rpx 30rpx;
		justify-content: space-between;
		background: white;
		font-size: 32rpx;
	}

	.TitleView {
		display: flex;
		align-items: center;
		margin: 22rpx 0;
	}

	/* 分类 */
	.cationTowtitle {
		font-size: 32rpx;
		color: #575757;

		font-family: Inter-Regular, Inter;
	}

	.cationTowname {
		font-size: 32rpx;

		font-family: Inter-Regular, Inter;
	}

	.cationTowjiantou {
		width: 28rpx;
		height: 32rpx;
	}

	.cationTowRight {
		display: flex;
		align-items: center;
	}

	.cationTowView {
		display: flex;
		align-items: center;
		padding: 32rpx 30rpx;
		justify-content: space-between;
		background: white;
	}

	.cationTitle {
		font-size: 40rpx;
		/* font-weight: 800; */

		font-family: Inter-Regular, Inter;
	}

	.cationView {
		display: flex;
		align-items: center;
		margin: 22rpx 0;
	}

	.Icon {
		width: 48rpx;
		height: 48rpx;
	}

	.content {
		background-color: #FAFAFA;
		padding: 0rpx 36rpx 200rpx 36rpx;
	}
</style>
