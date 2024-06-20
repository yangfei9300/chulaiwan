<template>
	<view class="content">
		<!-- 选择分类 -->
		<view class="Fromzx">
			<view class="Fromzx1">选择分类</view>
			<view class="Fromzx1_1" @click="navwact">
				<view class="fenleititle">选择分类</view>
				<view class="fenleiright">
					<view class="" v-if="fenleiname.length>0">{{fenleiname}}</view>
					<image class="From3_8" src="../../static/indeximg/yjt.png" mode=""></image>
				</view>
				<!-- 	<u-collapse accordion style="background: white;">
					<u-collapse-item align="right" :isLink="true" :border="false" title="选择分类" :value="fenleiname">
						<view class="" v-for="(item,index) in fenleilist" @click="onfenlei(item.name,item.id)">
							{{item.name}}
						</view>
					</u-collapse-item>
				</u-collapse> -->
			</view>

		</view>
		<!-- 填写标题 -->
		<view class="From">
			<view class="From1">填写标题</view>
			<view class="From1_1">
				<u-textarea v-model="value2" autoHeight placeholder="请输入活动标题" placeholderClass="textinput" count
					:maxlength="30"></u-textarea>
			</view>

		</view>
		<!-- 选择封面 -->
		<view class="From2">
			<view class="From2_1">选择封面</view>
			<view class="From2_2">
				<view class="From2_3">封面</view>
				<view class="">
					<image style="width: 50px;height: 50px;" @click="upload" :src="coverlist" mode=""></image>
					<!-- 	<u-upload width="50" height="50" deletable previewImage @afterRead="afterRead" @delete="deletePic"
						:fileList="fileList1" name="1" multiple :maxCount="1">
					</u-upload> -->
				</view>
			</view>

		</view>
		<view class="From3">
			<view class="From3_1">时间地址</view>
			<!-- 开始时间 -->
			<view class="From3_2" @tap="show">
				<view class="From3_3">
					<view class="From3_4">开始时间</view>
				</view>
				<view class="From3_6">
					<view class="From3_7">{{shijian}}</view>
					<image class="From3_8" src="../../static/indeximg/yjt.png" mode=""></image>
				</view>
			</view>
			<xp-picker class="sjpick" ref="picker" @confirm="shijiana" mode="ymdhi" :value="ks"></xp-picker>
			<!-- 结束时间 -->
			<view class="From3_2" @tap="showjs">
				<view class="From3_3">
					<view class="From3_4">结束时间</view>
				</view>
				<view class="From3_6">
					<view class="From3_7">{{shijian}}</view>
					<image class="From3_8" src="../../static/indeximg/yjt.png" mode=""></image>
				</view>
			</view>
			<xp-picker class="jspick" :value="js" ref="picker1" @confirm="shijiana1" mode="ymdhi"></xp-picker>

			<!-- 选择地址 -->
			<view class="From3_2" @click="GoMapShowS">
				<view class="From3_3">
					<view class="From3_4">活动地址</view>
				</view>
				<view class="From3_6">
					<view class="From3_7">{{address}}</view>
					<image class="From3_8" src="../../static/indeximg/yjt.png" mode=""></image>
				</view>

			</view>
			<u-popup :show="GoMapShow" :round="10" closeable @close="close1">
				<view style="padding: 0 50rpx;">
					<view class="up_title">选择地址</view>
					<view class="">
						<view class="up_content" @click="navup(0)">
							<view class="up_content1">
								<image class="up_content1_image" src="../static/zidingyiweizhi.png" mode=""></image>
								<view class="up_content1_view">选择商家</view>
							</view>
							<image class="From3_8" src="../../static/indeximg/yjt.png" mode=""></image>
						</view>
						<view class="solid"></view>
						<view class="up_content" @click="navup(1)">
							<view class="up_content1">
								<image class="up_content1_image" src="../static/zidingyiweizhi.png" mode=""></image>
								<view class="up_content1_view">自定义位置</view>
							</view>
							<image class="From3_8" src="../../static/indeximg/yjt.png" mode=""></image>
						</view>
					</view>
				</view>
			</u-popup>

		</view>
		<view class="From4">
			<view class="From4_1">要求限制</view>
			<view class="From4_2">
				<view class="From3_22" @click="showrs=true">
					<view class="From3_3">
						<view class="From3_4">活动人数</view>
						<!-- <view class="From3_5">{{shijian}}</view> -->
					</view>
					<view class="From3_6">
						<view class="From3_7">{{renshu}}</view>
						<image class="From3_8" src="../../static/indeximg/yjt.png" mode=""></image>
					</view>
				</view>
				<u-popup :show="showrs" @close="close" @open="open">
					<view style="    padding: 40rpx;">
						<view class="xztit">
							<view class="">限制人数</view>
							<view class="xx" @click="showrs=false">X</view>
						</view>
						<view class="">
							<view class="tc">
								<view class="tc1">
									<image class="tcimg" src="../../static/releaseimg/jingzhunrenshu.png" mode="">
									</image>
									<view class="tcrs">精准人数</view>
								</view>
								<view class="">
									<label class="radio">
										<radio value="" :checked="acc" @click="asc(1)" /><text></text>
									</label>
								</view>
							</view>
							<view class="jzrstc" v-if="acc">
								<view class="jzrstc1" v-for="(item,index) in list" :key="index">
									<view class="jzrstc2" :class="{active:tccurrent==index}" @click="tcys(index,item)">
										{{item}}
									</view>
								</view>
							</view>
						</view>
						<view class="hengxian"></view>
						<view class="">
							<view class="tc">
								<view class="tc1">
									<image class="tcimg" src="../../static/releaseimg/jingzhunrenshu.png" mode="">
									</image>
									<view class="tcrs">区间人数</view>
								</view>
								<view class="">
									<label class="radio">
										<radio value="" :checked="acc1" @click="asc1(2)" /><text></text>
									</label>
								</view>
							</view>
							<view class="jzrstc" v-if="acc1">
								<view class="jzrstc11" v-for="(item,index) in list1" :key="index">
									<view class="jzrstc2" :class="{active:tccurrent==index}" @click="tcys(index,item)">
										{{item}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</u-popup>
				<view class="jf">
					<view class="jf1">信誉积分</view>
					<view class="jf2" style="display: flex;">
						<view class="jf3" @click="xinyushow=true" :class="{jf33:ac==0}">{{xinyujifen}}</view>
						<u-picker :show="xinyushow" :columns="xinyulist" @confirm="confirmxinyu"></u-picker>
					</view>
				</view>
				<view class="jf" style="display: flex;justify-content: space-between;">
					<view class="">性别</view>
					<view class="" style="display: flex;">
						<view class="jf3" @click="accsex(0)" :class="{jf33:sex==0}">不限</view>
						<view class="jf3" @click="accsex(1)" :class="{jf33:sex==1}">男</view>
						<view class="jf3" @click="accsex(2)" :class="{jf33:sex==2}">女</view>
					</view>
				</view>
				<view class="jf" style="display: flex;justify-content: space-between;">
					<view class="">用户身份</view>
					<view class="" style="display: flex;">
						<view class="jf3" @click="accvip(0)" :class="{jf33:vips==0}">不限制</view>
						<view class="jf3" @click="accvip(1)" :class="{jf33:vips==1}">会员</view>
					</view>
				</view>
				<view class="jf" style="display: flex;justify-content: space-between;">
					<view class="qkview">
						<view class="">付款方式</view>
						<view class="fukuanfangshi">
							<view class="jfq" @click="accqk(1)" :class="{jfqk:qk==1}">AA</view>
							<view class="jfq" @click="accqk(2)" :class="{jfqk:qk==2}">免费</view>
							<view class="jfq" @click="accqk(3)" :class="{jfqk:qk==3}">男A女免</view>
							<view class="jfq" @click="accqk(4)" :class="{jfqk:qk==4}">女A男免</view>
							<view class="jfq" @click="accqk(5)" :class="{jfqk:qk==5}">请客</view>
						</view>

					</view>
				</view>
				<view class="jf" style="display: flex;justify-content: space-between;" @click="showmoney=true">
					<view class="">人均消费</view>
					<view class="">{{moneys}}<text style="color: #A7A7A7;">元</text></view>
				</view>
			</view>
		</view>
		<view class="From5">
			<u-textarea class="textare" v-model="value1" placeholder="请输入内容" :border="surround" :height="100">
			</u-textarea>
			<view class="" style="display: flex;flex-wrap: wrap;">
				<image v-for="(item,index) in tplist" :src="item" mode=""
					style="width: 59px;height: 59px;margin: 10px;"></image>
				<image v-if="tplist.length<4" style="width: 59px;height: 59px;margin: 10px;"
					src="../../static/indeximg/upload.png" mode="" @click="tpclick"></image>
			</view>

		</view>
		<!-- 时间选择器 -->

		<!-- <view @tap="show">开启</view>
		<view @tap="show1">开启</view> -->
		<view class="From6">
			<view class="From6_1" @click="Groupfabu()">发布</view>
		</view>
	</view>
</template>

<script>
	import uploadImage from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	import crypto from './crypto-js/aes.js';
	import {
		Base64
	} from './base64.js';
	// 计算签名。
	// function 
	export default {
		data() {
			return {
				addresstype:0,
				// 活动详情图本地
				tplist: [],
				// 详情图
				content_img: [],
				// 封面图
				cover: '',
				coverlist: '../../static/indeximg/upload.png',
				// 开始时间
				ks: '',
				kstime: '',
				//结束时间
				js: '',
				jstime: '',
				// 店铺分类
				addtype: '',
				// 店铺编号
				shop_no: '',
				// 商家地址名称
				addname: '',
				// 商家详细地址
				add_detail: '',
				// 商家纬度
				sjlat: '',
				// 商家经度
				sjlng: '',
				// 人数类型1精准2区间
				p_num_type: '',
				// 分类id
				cate_id: null,
				oss: [],
				fenleilist: [],
				baseurl: '',
				token: '',
				// 分类名称
				fenleiname: '',
				address: "",
				renshu: "",
				xinyujifen: "不限制",
				xinyushow: false,
				// 选择位置弹出层
				GoMapShow: false,
				xinyulist: [
					["不限制", "99", "98", "97", "96", "95", "94", "93", "92", "91", "90", "89", "88", "87", "86", "85",
						"84", "83", "82", "81", "80",
					]
				],
				// 限制人数
				tccurrent: 0,
				list: [
					"1人", "2人", "3人", "4人", "5人", "6人", "7人", "8人",
				],
				list1: [
					"2-4人", "4-6人", "6-8人"
				],
				acc: false,
				acc1: false,
				showrs: false,
				// 时间选择
				showsj: false,
				shijian: "",


				// ------------------------
				value2: "",
				fileList1: [],
				ac: 0,
				sex: 0,
				vips: 0,
				moneys: "50",
				qk: 0,
				columns: [
					['1:00', '2:00', '3:00']
				],
				columnss: [
					['50', '100', '200', '300', '400', '500', '600']
				],
				showmoney: false,
				showSex: false,

				shijian: "",

				radio: '',
				switchVal: false
			}
		},
		watch: {


		},
		onShow() {
			uni.$on('shangjia', function(e) {
				console.log(e);
			})
			uni.$on('name', function(name) {
				console.log(name.name);
				this.fenleiname = name.name;
			})
			uni.$on('zdxz',function(zdxz){
				console.log(zdxz);
			})
		},

		mounted() {
			this.baseurl = getApp().globalData.baseurl;
			this.token = uni.getStorageSync('token');
			this.getoss();
			this.fenleis();
		},
		methods: {
			// 发布
			Groupfabu() {
				// if (this.cate_id.length != 0 && this.value2.length != 0 && this.coverlist.length != 0 &&
				// 	this.kstime.length != 0 && this.jstime > 0 && this.add_type != '' &&
				// 	this.p_num_type.length != 0 && this.xinyujifen.length > 0 && this.sex.length > 0 &&
				// 	this.vip.length > 0 && this.qk.length > 0 && this.moneys.length > 0 && this.value1.length != 0 && this
				// 	.coverlist.length != 0 &&
				// 	this.tplist.length > 0

				// ) 
					//支持多图上传
					for (var i = 0; i < this.tplist.length; i++) {
						//显示消息提示框
						uni.showLoading({
							mask: true
						})

						//上传图片
						//图片路径可自行修改
						uploadImage(this.tplist[i], 'image/xcx/',
							result => {
								console.log("oss", result);
								this.content_img.push(result);
								uni.hideLoading();
								console.log(this.content_img);
								if (this.tplist.length == this.content_img.length) {
									console.log(111);
									uploadImage(this.coverlist, 'image/xcx/',
										res => {
											console.log("第二遍阿里", res);
											this.cover=res;
											if (this.cover!='') {
												uni.request({
													url: this.baseurl + '/api/actDo/actCreate',
													method: 'POST',
													header: {
														xcx:1, 
														token: this.token,
														city:uni.getStorageSync("citySel")
														
													},
													data: {
														cate_id: this.cate_id,
														title: this.value2,
														cover: this.cover,
														s_time: this.kstime,
														e_time: this.jstime,
														add_type: this.addtype,
														shop_no: this.shop_no,
														add_name: this.addname,
														add_detail: this.add_detail,
														lng: this.sjlng,
														lat: this.sjlat,
														p_num_type: this.p_num_type,
														// 精准
														p_num_acc: this.renshu,
														// 区间
														p_num_sec: this.qujianrenshu,
														credit: this.xinyujifen,
														sex: this.sex,
														vip: this.vips,
														pay_type: this.qk,
														money: this.moneys,
														content_text: this.value1,
														content_img: this.content_img,
						city:uni.getStorageSync("citySel"),
													},
													success: res => {
														console.log('发布成功', res);
													},
													fail: () => {},
													complete: () => {}
												});
											}
										})
								}

							}
						)

					}
				


				// uni.navigateTo({
				// 	url: '../business/business',
				// 	success: res => {},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
			},
			GoMapShowS(){
				this.GoMapShow=true
			},
			// 时间选择
			show1() {
				this.$refs.picker1.show()
			},
			shijiana1(s) {
				console.log('1', s)
				this.js = s.value;
				this.jstime = s.timestamp;
			},
			show() {
				this.$refs.picker.show()
			},
			shijiana(s) {
				console.log(s)
				this.ks = s.value;
				this.kstime = s.timestamp;
			},
			// 选择分类
			navwact() {
				this.addresstype=1;
				uni.navigateTo({
					url: '../../pages/release/release',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 计算签名

			getoss() {
				uni.request({
					url: this.baseurl + '/sts-server/sts.php',
					method: 'POST',
					data: {},
					header: {
						xcx:1, 
						token: this.token,
					},
					success: res => {
						console.log(res);
						this.oss = res.data;

					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 上传图片
			upload() {
				let that = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res.tempFilePaths[0]);
						that.coverlist=res.tempFilePaths[0];
						console.log(that.coverlist);
						// this.coverlist[0].push(res.tempFilePaths)


					}
				})
			},
			// 分类
			onfenlei(name, id) {
				this.fenleiname = name;
				console.log(id);
			},
			fenleis() {

				uni.request({
					url: this.baseurl + '/api/act/actCate',
					method: 'POST',
					header: {
						xcx:1, 
						token: this.token,
					},
					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log(res);
						this.fenleilist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			navup(n) {
				this.addtype = n;
				if (n == 0) {
					uni.navigateTo({
						// 选择商家
						url: '../business/business',
						// 商家详情
						// url:'../MerchantDetails/MerchantDetails',
						// 活动发布
						// url: '../PublishActivities/PublishActivities',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else if (n == 1) {
					uni.navigateTo({
						url: '../address/address',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}
			},
			open() {
				// console.log('open');
			},
			close1() {
				this.GoMapShow = false;
				// console.log('close');
			},
			// 信誉
			confirmxinyu(e) {
				console.log('confirm', e.value[0])
				if (e.value[0] == '不限制') {
					this.xinyujifen = 0;
					this.xinyushow = false
				} else {

					this.xinyujifen = e.value[0];
					this.xinyushow = false
				}
			},
			// 位置选择
			GoMap() {
				let that = this;
				uni.authorize({
					scope: 'scope.userLocation',
					success(res) {
						uni.chooseLocation({
							success(res) {
								console.log(res);
								console.log('位置名称：' + res.name);
								that.address = res.name;
								console.log('详细地址：' + res.address);
								console.log('纬度：' + res.latitude);
								console.log('经度：' + res.longitude);
							}
						})

					}
				})

			},
			// 人数选择
			tcys(e, f) {
				if (this.p_num_type == 1) {
					// 精准人数
					this.renshu = f;
				} else if (this.p_num_type == 2) {
					this.qujianrenshu = f;
				}

				this.tccurrent = e;
				console.log(e, f);
			},
			asc(e) {
				this.p_num_type = e;
				if (this.acc == true) {
					this.acc = false
					this.acc1 = true
				} else {
					this.acc = true
					this.acc1 = false
				}
			},
			asc1(e) {
				this.p_num_type = e;
				if (this.acc1 == true) {
					this.acc1 = false
					this.acc = true
				} else {
					this.acc1 = true
					this.acc = false
				}
			},
			open() {
				// console.log('open');
			},
			close() {
				this.showrs = false
				// console.log('close');
			},
			// 时间选择
			// changeHandler(e) {
			// 	const {
			// 		columnIndex,
			// 		value,
			// 		values, // values为当前变化列的数组内容
			// 		index,
			// 		// 微信小程序无法将picker实例传出来，只能通过ref操作
			// 		picker = this.$refs.uPicker
			// 	} = e
			// 	// 当第一列值发生变化时，变化第二列(后一列)对应的选项
			// 	if (columnIndex === 0) {
			// 		// picker为选择器this实例，变化第二列对应的选项
			// 		picker.setColumnValues(1, this.columnData1[index])
			// 	}
			// },
			confirm1(e) {
				console.log('confirm', e.value)

				this.shijian = e.value[0] + e.value[1],
					this.showsj = false
			},

			acc(e) {
				console.log(e)
				this.ac = e;
			},
			accqk(e) {
				console.log(e)
				this.qk = e;
			},
			accsex(e) {
				console.log(e)
				this.sex = e;
			},
			accvip(e) {
				console.log(e)
				this.vips = e;
			},
			// 上传时间
			confirm(e) {
				console.log('confirm', e.value[0])
				this.shijian = e.value[0];
				this.showSex = false;
			},
			confirms(e) {
				this.moneys = e.value[0];
				this.showmoney = false
			},
			// 上传活动图片
			tpclick() {
				let _this = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res.tempFilePaths[0]);
						_this.tplist.push(res.tempFilePaths[0]);
						console.log(_this.tplist);
					}
				})
			},


		}
	}
</script>

<style scoped lang="scss">
	// 穿透时间选择按钮
	/deep/ .xp-button--confirm {
		background-color: #F8B800;
	}

	.jspick {
		position: absolute;
		right: 55rpx;
		top: 138rpx;

	}

	.sjpick {
		position: absolute;
		right: 55rpx;
		top: 62rpx;
	}

	.fenleiright {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	// 选择地址
	.solid {
		border: 1rpx solid rgba(227, 227, 227, 1);
		margin: 50rpx 0;
	}

	.up_title {
		text-align: center;
		margin-top: 25rpx;
		margin-bottom: 25rpx;
		font-size: 32rpx;
		font-weight: 600;
	}

	.up_content1_image {
		width: 50rpx;
		height: 50rpx;
	}

	.up_content1_view {
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 600;
		margin-left: 20rpx;

	}

	.up_content1 {
		display: flex;
		align-items: center;
	}

	.up_content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	// 付款方式
	.fukuanfangshi {
		display: flex;
		flex-wrap: wrap;
		margin: 30rpx 0;
	}

	.jfq {
		border: 1rpx solid #9999;
		border-radius: 20rpx;
		padding: 5rpx 22rpx;
		font-size: 22rpx;
		margin: 0rpx 10rpx;
		text-align: center;
		color: #A7A7A7;

	}

	.jfqk {
		border: none;
		border-radius: 20rpx;
		background-color: #f8b800;
		color: white;
	}

	/deep/ .textinput {
		color: #575757;
	}

	/deep/ .u-collapse {
		background-color: white;
	}

	/deep/ .u-line {
		border: none !important;
	}

	/deep/ .u-cell__body {
		padding: 20rpx 0 !important;
	}

	/deep/ .u-cell__title-text {
		font-size: 16px !important;
		font-weight: 600;
		line-height: 22px;
		color: #575757 !important;
	}

	// 新增活动分类
	.Fromzx1_1 {
		padding: 20rpx;
		background: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.Fromzx1 {
		font-size: 30rpx;
		font-weight: 600;
		// background: white;
		// padding: 20rpx;
		border-radius: 20rpx;
	}

	.Fromzx {
		margin: 15rpx 0rpx;

	}

	// 人数限制
	.hengxian {
		border-bottom: 1rpx solid #e3e3e3;
		height: 1rpx;
		margin-top: 48rpx;
		margin-bottom: 10rpx;
	}

	.jzrstc2 {
		width: 100rpx;
		text-align: center;
		border-radius: 20rpx;
	}

	.jzrstc1 {
		flex: 20%;
		display: flex;
		justify-content: center;
		margin: 10rpx;
	}

	.jzrstc11 {
		flex: 20%;
		display: flex;
		justify-content: center;
		margin: 10rpx;
		position: relative;
		left: -25rpx;
	}

	.jzrstc {
		display: flex;
		flex-wrap: wrap;
	}

	.active {
		background-color: #F8B800;
		color: white;
	}

	.tcimg {
		width: 50rpx;
		height: 50rpx;
	}

	.tc1 {
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
	}

	.tc {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.xztit {
		display: flex;
		justify-content: center;
		position: relative;
		margin-bottom: 20rpx;
	}

	.xx {
		position: absolute;
		right: 0rpx;
	}

	.From6 {}

	.From5 {
		border-radius: 20rpx;
		background-color: white;
	}

	.textare {
		border-radius: 20rpx;
	}

	.jf3 {
		border: 1rpx solid #9999;
		border-radius: 20rpx;
		padding: 5rpx 22rpx;
		font-size: 22rpx;
		margin: 0rpx 10rpx;
		color: #A7A7A7;
	}

	.jf33 {
		border: none;
		border-radius: 20rpx;
		background-color: #f8b800;

		color: white;

	}

	.qkview {
		// display: flex;
	}

	.jf2 {
		display: flex;
	}

	.jf {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 0;
		border-bottom: 0.5rpx solid #F2F2F2;
	}

	.From6_1 {
		background-color: #FFC803;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 66rpx;
		width: 346rpx;
		border-radius: 58rpx;
		color: white;
		margin-top: 50rpx;
	}

	.From6 {
		display: flex;
		justify-content: center;
	}

	.From4_2 {
		background: white;
		padding: 20rpx;
		border-radius: 20rpx;
	}

	.From4_1 {
		font-size: 30rpx;
		font-weight: 600;
	}

	.From4 {
		margin: 15rpx 0rpx;
	}

	.From3_8 {
		width: 36rpx;
		height: 36rpx;
	}

	.From3_6 {
		display: flex;
		align-items: center;

		>image {
			width: 30rpx;
			height: 30rpx;
		}
	}

	.From3_3 {
		display: flex;
	}

	.From3_22 {
		background: white;
		// padding: 20rpx;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.From3_2 {
		background: white;
		padding: 20rpx;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.From3_1 {
		font-size: 30rpx;
		font-weight: 600;
	}

	.From3 {
		margin: 15rpx 0rpx;
		position: relative;
	}

	.From2_3 {
		color: #575757;
		font-size: 32rpx;
		font-size: 600;
	}

	.From2_2 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// margin: 15rpx 0rpx;
		padding: 20rpx;
		background: white;
		// /* padding: 20rpx; */
		border-radius: 20rpx;
	}

	.From2_1 {
		font-size: 30rpx;
		font-weight: 600;
	}

	.From2 {
		// display: flex;
		// justify-content: space-between;
		// align-items: center;
		margin: 15rpx 0rpx;
		// background: white;
		/* padding: 20rpx; */
		// border-radius: 20rpx;
	}

	.From1_1 {
		background: white;
		padding: 20rpx;
		border-radius: 20rpx;
	}

	.From1 {
		font-size: 30rpx;
		font-weight: 600;
	}

	.From {
		margin: 15rpx 0rpx;
	}

	.content {
		padding: 20rpx 20rpx 40rpx 20rpx;
		background-color: #FAFAFA;
		position: relative;
	}
</style>
