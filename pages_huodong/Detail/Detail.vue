<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="">
			<swiper class="swiper" :indicator-dots="true" next-margin="40px" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in swiperlist" :key="index">
					<view class="swiperView">
						<image class="swiperImg" :src="item" mode="aspectFill" @click="previewImage(index)"></image>
						<view class="swiperAddress">
							<view class="swiperViewImg">
								<image class="swiperImageEye" src="../static/eye.png" mode=""></image>
								<view class="">{{sign_num}}</view>
							</view>
							<view class="swiperViewImg">
								<image class="swiperImageEye" src="../static/album.png" mode=""></image>
								<view class="">{{swiperlist.length}}</view>
							</view>
						</view>

					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 发起活动 -->
		<image class="clickhuodong" @click.stop="toFabu" src="../static/clickhuodong.png" mode=""></image>
		<!-- 商家基本信息 -->
		<view class="shop">
			<view class="shopView">
				<view class="shop_name">{{list.name}}</view>
				<view class="rate">
					<uni-rate :readonly="true" v-model="list.grade" activeColor="#F8B800" allowHalf="true" isFill="true"
						color=" rgba(248,184,0,0.5)"></uni-rate>
					<view class="">{{list.money}}</view>
				</view>
			</view>
			<view class="shopView">
				<view class="shop_open_hours">营业时间 : {{list.open_hours}}</view>
				<view class="marksView">
					<view class="marks" v-for="(item,index) in list.marks" :key="index">{{item}}</view>
					<view class="discounts">{{list.discounts==0?'独家特惠':list.discounts}}</view>
				</view>
			</view>
			<view class="shopPhone"> 
				<view class="shop_open_hours">
					<view class="phone_business_area w-400 txtShowLength1">{{list.address}}{{list.detail_address}}</view>
					<view class="phone_km">据您当前位置<text class="phoneText">{{list.distance}}km</text></view>
				</view>
				<view class="phoneView">
					<view class="phone" @click="openLocation(list.lat,list.lng,list.name,list.address)"
					@longtap="showuquanAlertClick"
					>
						<image class="phoneImg" src="../static/daohang.png" mode=""></image>
						<view class="">导航</view>
					</view>
					<view class="phone" @click="onPhone(list.shop_phone)">
						<image class="phoneImg" src="../static/phone.png" mode=""></image>
						<view class="">电话</view>
					</view>
				</view>
			</view>
			<view class='juban'>
				<image class="play" src="../static/Component 298@2x.png" mode=""></image>
				<text class='huodong'>该商家已成功举办</text><text class='changci'>{{list.act_num}}</text><text class='huodong fs-30'>场活动</text>
			</view>
			<!-- 店内主推 -->
			<view class=''>
				<view class="theme_view">
					<view class="quan"></view>
					<view class="theme_title">店内主推</view>
				</view>
			</view>
			<view class='zhutui'>
				<view class='series' v-for="(item,index) in zhutuilist" :key="index">
					<image class="zhutuiimg" :src="item.cover" mode=""></image>
					<view>
						<view class='topic'>{{item.name}}</view>
						
						<view class='price seventeen'>￥{{item.price}}</view>
						
						<view class='remarks'>{{item.remark}}</view>
						
					</view>
				</view>
			</view>
		</view>
		<!-- 粗线 -->
		<view class="bordersize"></view>
		<!-- 详情介绍 -->
		<view class='shop'>
			<view class="theme_view">
				<view class="quan"></view>
				<view class="theme_title">详细介绍</view>
			</view>
				<image :src="list.content_img" mode="widthFix" style='width: 100%;'></image>
		</view>
		
		<view class="bordersize"></view>
		<!-- 用户评论 -->
		<view class="comment">
			<!-- <view class="user">用户评论<text class="usernum">({{comments}})</text></view> -->
			
			<view class="theme_view">
				<view class="quan"></view>
				<view class="theme_title">用户评论({{comments}})</view>
			</view>
			
			<view class="Comment" v-for="(comment,commentindex) in comlist" :key="commentindex" >
				<image class="Comment_headimg" :src="comment.headimg" mode=""></image>
				<view class="Comment_right">
					<view class="Comment_name">
						<view class="Comment_nickname">
							{{comment.nickname}}
						</view>
						<view class="Comment_create">{{comment.create_at}}</view>
					</view>

					<uni-rate :readonly="true" v-model="comment.grade" activeColor="#F8B800" allowHalf="true"
						isFill="true" color=" rgba(248,184,0,0.5)"></uni-rate>
					<view class="Comment_text">{{comment.text}}</view>
					<view class="Comment_viewimg">
						<image class="Comment_viewimg_img" :src="commentimg" mode="aspectFill"
						@click.stop="showimg(index,comment.img)"
							v-for="(commentimg,commentimgindex) in comment.img" :key="commentimgindex"></image>
					</view>
				</view>

			</view>
		</view>
		
		<!-- 详情介绍 -->
		<view class='shop'>
			<view class="theme_view">
				<view class="quan"></view>
				<view class="theme_title">商家推荐</view>
			</view>
			<view class="roww">
				
				<view class="colonn">
					<view class="shopview1 colonn"
					 v-for="(item,index) in shopList" v-if="index%2==0"
					 @click.stop="toshopinfo(item)"
					>
						<image class="shopimg" :src="item.cover" mode="widthFix"></image>
						<view class="colonn" style="padding:12rpx 22rpx;">
							<view class="roww">
								<image class="juhuiimg" v-if="item.marks1=='巨惠'" src="../static/juhui.png"></image>
								<image class="juhuiimg" v-if="item.marks1=='新店'" src="../static/xindian.png"></image>
								<image class="juhuiimg" v-if="item.marks1=='精选'" src="../static/jingxuan.png"></image>
								<view class="w-10"></view>
								<view class="shopname txtShowLength">{{item.name}}</view>
							</view>
							<view class="h-15"></view>
							<view class="roww">
								<view class="ziyouxing" v-for="(item3,index) in item.marks">{{item3}}</view>
								<view class="w-20"></view>
								<view class="bbzhe">{{item.discounts}}</view>
							</view>
							<view class="h-15"></view>
							<view class="roww">
								<view class="dizhitxt txtShowLength">{{item.business_area}}</view>
								<view class="allline"></view>
								<view class="fs-25" style="color: #939393;">{{item.distance}}km</view>
							</view>
							<view class="roww center_center">
								<image class="w-30 h-30 m-right-10" v-for="(item,index) in item.grade" 
								src="https://ta.imjiayi.com/upload/upload/ZS星星.png"></image>
								<view class="roww jine">
									{{item.money}}
								</view>
								<view class="allline"></view>
							</view>
						</view> 
					</view>
				</view>
				
				<view class="colonn m-left-15">
					<view class="shopview1 colonn"
					 v-for="(item,index) in shopList" v-if="index%2!=0"
					 @click.stop="toshopinfo(item)"
					>
						<image class="shopimg" :src="item.cover" mode="widthFix"></image>
						<view class="colonn" style="padding:12rpx 22rpx;">
							<view class="roww">
								<image class="juhuiimg" v-if="item.marks1=='巨惠'" src="../static/juhui.png"></image>
								<image class="juhuiimg" v-if="item.marks1=='新店'" src="../static/xindian.png"></image>
								<image class="juhuiimg" v-if="item.marks1=='精选'" src="../static/jingxuan.png"></image>
								<view class="w-10"></view>
								<view class="shopname txtShowLength">{{item.name}}</view>
							</view>
							<view class="h-15"></view>
							<view class="roww">
								<view class="ziyouxing" v-for="(item3,index) in item.marks">{{item3}}</view>
								<view class="w-20"></view>
								<view class="bbzhe">{{item.discounts}}</view>
							</view>
							<view class="h-15"></view>
							<view class="roww">
								<view class="dizhitxt txtShowLength">{{item.business_area}}</view>
								<view class="allline"></view>
								<view class="fs-25" style="color: #939393;">{{item.distance}}km</view>
							</view>
							<view class="roww center_center">
								<image class="w-30 h-30 m-right-10" v-for="(item,index) in item.grade" 
								src="https://ta.imjiayi.com/upload/upload/ZS星星.png"></image>
								<view class="roww jine">
									{{item.money}}
								</view>
								<view class="allline"></view>
							</view>
						</view> 
					</view>
				</view>
				
			</view>  
		</view>
		
		
		
		
		
		<view class="colonn center_center huuibeijing" style="z-index: 50000000;" v-if="showuquanAlert">
			<view class="yinsitanh colonn center_center">
				<view style="font-weight: bold;">个人隐私保护提示</view>
				<view style="height: 10rpx;"></view>
				<view style="font-size: 30rpx;">
					我们会按照相关法律法规的规定及<text @click.stop="toyinsi"
						style="color: red;">《出来玩就现在小程序隐私保护指引》</text>，遵守正当合法、必要原则收集和使用你的个人信息。
					为了向你提供正常的服务，我们可能会申请相机、麦克风、存储照片，手机号，当前位置定位等权限，相应权限并不会默认开启或强制收集信息。权限开启后，你可以随时通过设置选项关闭权限。你不同意开启权限，将不会影响其他非相关业务功能的正常使用。
				</view>
				<view style="height: 20rpx;"></view>
				<view class="roww rowsa w-450">
					<view class="notongyi" @click.stop="showuquanAlertClick">不同意</view>
					<view class="tongyi pore roww center_center">
						<div>同意</div>
						<button id="agree-btn" open-type="agreePrivacyAuthorization" @agreeprivacyauthorization="handleAgree"
							class="tongyisa"></button>
					</view>
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showuquanAlert:false,
				
				baseurl: getApp().globalData.baseurl,
				token:  getApp().globalData.token,
				shop_no: '',
				//轮播图查看次数
				sign_num: Number,
				// 评论列表
				comlist: [],
				// 评论总数
				comments: Number,
				lat: getApp().globalData.lat,
				lng: getApp().globalData.lng,
				list: [],
				swiperlist: [],
				zhutuilist:[],
				
				shopList:[],//商家列表

			}
		},
		onLoad(options) {
			
			
			this.getIsToken();
			this.shop_no = options.shop_no;
			setTimeout(res=>{
				this.getShopList();
			},100)
		},
		onShow() {
			setTimeout(res=>{
				this.showpagee();  
			},600)
		},
		mounted() {
			// // 商家信息
			// this.getDetail();
			
			
		},
		methods: {
			handleAgree(res) {
				console.log("handleAgree", res);
				this.showuquanAlert = false;
			
				var lat = uni.getStorageSync("lat")
				if (!lat) {
					this.alertGps()
				} else {
					this.getWeizhi()
				}
			
			},
			showuquanAlertClick() {
				this.showuquanAlert = !this.showuquanAlert;
			},
			toyinsi() {
				// #ifdef  MP-WEIXIN
				wx.openPrivacyContract({
					success: () => {}, // 打开成功
					fail: () => {}, // 打开失败
					complete: () => {}
				})
				// #endif
			},
			showpagee(){
				// #ifdef  MP-WEIXIN
				wx.getPrivacySetting({
					success: res => {
						console.log("是否需要授权：", res.needAuthorization, "隐私协议的名称为：", res.privacyContractName)
						if (!res.needAuthorization) {
							var lat = uni.getStorageSync("lat")
							if (!lat) {
								this.alertGps()
							} else {
								this.getWeizhi()
							}
						} else {
							this.showuquanAlert = res.needAuthorization;
						}
				
				
				
				
					},
					fail: () => {},
					complete: () => {},
				})
				// #endif
			},
			// 位置定位
			alertGps() {
				wx.getSetting({
					success: (res) => {
						console.log("当前设置", res.authSetting)
						console.log("当前设置", JSON.stringify(res))
						var jsonStr = JSON.stringify(res);
						if (jsonStr.indexOf('"scope.userFuzzyLocation":true') >= 0) {
							console.log("直接获取位置")
							this.getWeizhi()
						} else {
							console.log("需要授权获取位置")
							uni.showModal({
								title: '授权',
								content: '需要获取您的位置信息，',
								success: (res) => {
									if (res.confirm) {
										this.getWeizhi();
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
					}
				})
			},
			getWeizhi() {  
				uni.getFuzzyLocation({
					type: 'wgs84',  
					success: (res) => {
						const latitude = res.latitude
						const longitude = res.longitude
						console.log("微信鼎和", res)
						uni.setStorageSync("lat", latitude)
						uni.setStorageSync("lng", longitude)
						getApp().globalData.lat = latitude;  
						getApp().globalData.lng = longitude;
						this.lat = latitude;
						this.lng = longitude;
						
						this.list.distance=this.space(this.lat,this.lng,this.list.lat,this.list.lng).toFixed(2);
			
					},
					fail: res => {
						console.log("定位失败", res)
						// uni.showToast({
						// 	title: "定位失败",
						// 	icon: 'none'
						// })
					},
					complete: res => {
						console.log("结果", res)
					}
				})
			},
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			getIsToken(){
				var url = "/api/IosVisitor/checkToken";
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						'token':this.token,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						var data=res.data;
						if(data.code==0){
							getApp().globalData.token=null;
							this.token=null;
							uni.removeStorageSync("token");
						}
						this.getDetail()
						// 商家评论总条数
						this.commentLength();
						// 商家评论列表
						this.commentList();
						//zhutui
						this.zhutui();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
			toshopinfo(item){
				uni.redirectTo({
					url:"/pages_huodong/Detail/Detail?shop_no="+item.shop_no
				})
			},
			// 获取商家列表
			getShopList(){
				
				
				var token=uni.getStorageSync("token")
				var url=this.baseurl + '/api/shop/shopList';
				if(!token){
					url=this.baseurl + '/api/IosVisitor/shopList';
				}
				
				
				uni.request({
					url: url,
					method: 'POST',
					header: {
						xcx:1,
						token: this.token,
					},
					data: {
						shop_no: this.shop_no,
						'cate_id':this.list.cate_id,
						lat: this.lat,
						lng: this.lng,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						this.shopList=res.data.data;
						
						for(var a=0;a<this.shopList.length;a++) {
							var juli=this.space(this.lat,this.lng,this.shopList[a].lat,this.shopList[a].lng).toFixed(2);
							console.log("距離",juli)
							this.shopList[a].distance=juli;
						}
						
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 发布
			toFabu(){
				uni.navigateTo({
					url:"/pages/Group/Group"
				})
			},
			showimg(index,img){
				uni.previewImage({
					current:index,
							urls: img,
							longPressActions: {
								success: function(data) {
								},
								fail: function(err) {
								}
							}
						});
			},
			// 详情接口
			getDetail() {
				
				
				var token=uni.getStorageSync("token");
				var url=this.baseurl + '/api/shop/shopInfo';
				if(!token){
					url=this.baseurl + '/api/IosVisitor/shopInfo';
				}
				
				uni.request({
					url: url,
					method: 'POST',
					header: {
						xcx:1,
						token: this.token,
					},
					data: {
						shop_no: this.shop_no,
						lat: this.lat,
						lng: this.lng,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						uni.setNavigationBarTitle({
							title:res.data.data.name
						})
						console.log("商家详情", res);
						this.list = res.data.data;
						this.swiperlist = res.data.data.slider;
						this.sign_num = res.data.data.sign_num;
						this.list.distance=this.space(this.lat,this.lng,this.list.lat,this.list.lng).toFixed(2);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 商家评论总条数
			commentLength() {
				
				var token=uni.getStorageSync("token");
				var url=this.baseurl + '/api/shop/shopCommentTotal';
				if(!token){
					url=this.baseurl + '/api/IosVisitor/shopCommentTotal';
				}
				
				uni.request({
					url: url,
					method: 'POST',
					header: {
						xcx:1,
						token: this.token,
					},
					data: {
						shop_no: this.shop_no,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("评论总条数", res);
						this.comments = res.data.data;

					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 商家评论列表
			commentList() {
				
				
				var token=uni.getStorageSync("token")
				var url= this.baseurl + '/api/shop/shopCommentList';
				if(!token){
					url=this.baseurl + '/api/IosVisitor/shopCommentList';
				}
				
				uni.request({
					url: url,
					method: 'POST',
					header: {
						xcx:1,
						token: this.token,
					},
					data: {
						shop_no: this.shop_no,
						page: 1,
						num: 10,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("商家评论列表", res);
						this.comlist = res.data.data;

					},
					fail: () => {},
					complete: () => {}
				});
			},
			//商家主推
			zhutui() {
				
				var token=uni.getStorageSync("token")
				var url=this.baseurl + '/api/shop/shopGoodsList';
				if(!token){
					url=this.baseurl + '/api/IosVisitor/shopGoodsList';
				}
				   
				uni.request({
					url: url,
					method: 'POST',
					header: {
						xcx:1,
						token: this.token,
					},
					data: {
						shop_no: this.shop_no,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("商家评论列表", res);
						this.zhutuilist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 距离计算
			space(lat1, lng1, lat2, lng2) {
				console.error(lat1, lng1, lat2, lng2)
				var radLat1 = lat1 * Math.PI / 180.0;
				var radLat2 = lat2 * Math.PI / 180.0;
				var a = radLat1 - radLat2;
				var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
				var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
					Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
				s = s * 6378.137;
				s = Math.round(s * 10000) / 10000;
				return s // 单位千米
			},
			onShareAppMessage(res) {
				console.log('/pages_huodong/Detail/Detail?shop_no='+this.shop_n,'分享参数')
				if (res.from === 'button') {// 来自页面内分享按钮
				console.log(res.target)
				}
				return {
				title: this.list.name,
				path: '/pages_huodong/Detail/Detail?shop_no='+this.shop_no
				}
			},
			// 拨打电话
			onPhone(phone){
				uni.makePhoneCall({
					phoneNumber:phone+'',
					
					success(res) {
						console.log(res);
					},
				})
			},
			// 导航
			openLocation(lat,lng,name,address){
				
				uni.openLocation({  
					latitude:parseFloat(lat+''),
					longitude:parseFloat(lng+''),  
					address:this.list.address+this.list.detail_address,
					name:this.list.name,
					success(res) {
						console.log("查看地图位置",res);
					},
					fail:res=>{
						console.log("导航失败",res)
						uni.showToast({
							title: "导航失败",
							icon: 'none'
						})
					},
					complete: (res) => {
						console.log("导航打开地图结果",res);
					}
				})
			},
			// 预览图片
			previewImage(index) {
				let that = this
				uni.previewImage({
					urls: that.swiperlist,
					current: index,
					success(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style scoped>
	@import url(detail.css);
	/* 店内主推 */
	.series {
		margin-top: 10px;
		display: flex;
		align-items: center;
	}
	.zhutui{
		
	}
	.zhutuiimg{
		height: 162rpx;
		width: 162rpx;
		border-radius: 12rpx;
		margin-right: 16rpx;
	}
	.topic {
	    font-weight: 600;
	    font-size: 17px;
	}
	.seventeen {
	    font-size: 17px;
	    margin: 2px 0;
	}
	.price {
	    color: #F8B800;
	    /* font-size: 14px; */
	}
	.remarks {
	    color: #9B9B9B;
	    font-size: 16px;
	}
	.quan {
		width: 40rpx;
		height: 40rpx;
		background: rgba(248, 184, 0, 0.5);
		border-radius: 50rpx;
		position: absolute;
		left: 0;
		top: 0;
	}
	.theme_title {
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 800;
		margin-left: 10rpx;
	}
	
	.theme_view {
		display: flex;
		position: relative;
		margin: 34rpx 0;
	}
	.changci{
		display: inline-block;
		background: #fff;
		background-color: #F19450;
		font-size: 18px;
		color: #fff;
		padding: 0px 28rpx;
		border-radius: 10px;
		/* margin: 0 -7rpx; */
		margin-left: 18rpx;
	}
	.juban{
		display: flex;
		align-items: center;
		background: #FFF0DA;
		color: #6B4B10;
	}
	.play{
		    height: 88rpx;
		    width: 148rpx;
	}
	.huodong{
		    margin-left: 18rpx;
			font-size: 30rpx;
	}
	/* 发起活动 */
	.clickhuodong{
		width: 114rpx;
		height: 90rpx;
		position: fixed;
		top: 450rpx;
		right: 0;
	}
	/* 用户评论 */
	.Comment_viewimg {
		display: flex;
		flex-wrap: wrap;
	}

	.Comment_viewimg_img {
		width: 185rpx;
		height: 185rpx;
		border-radius: 16rpx;
		margin-right: 14rpx;
		margin-top: 12rpx;

	}

	.Comment_nickname {}

	.Comment_name {
		font-size: 32rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.Comment_right {
		margin-left: 18rpx;
		width: 600rpx;
	}

	.Comment_create {

		color: #6C6C6C;
	}

	.Comment_text {
		width: 590rpx;
	}

	.Comment_headimg {
		width: 76rpx;
		height: 76rpx;
		border-radius: 50rpx;
	}

	.Comment {
		display: flex;
		padding-bottom: 48rpx;
		border-bottom: 1rpx solid #e4e4e4;
		margin-bottom: 30rpx;
	}

	.user {
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
		display: flex;
		align-items: center;
		margin: 26rpx 0;
	}

	.usernum {
		color: #F8B800;
	}

	.comment {
		padding-left: 36rpx;
		padding-right: 24rpx;
	}

	/* 粗线 */
	.bordersize {
		border: 1rpx solid #F8F8F8;
		width: 100%;
		height: 24rpx;
		background-color: #F8F8F8;
	}

	/* 商家基本信息 */
	.phone_business_area {
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
		color: #111111;
	}

	.phone_km {
		font-size: 28rpx;
		font-family: Inter-Regular, Inter;
		color: #6C6C6C;
	}

	.phoneText {
		color: #F8B800;
		padding-left:10rpx ;
	}

	.phone {
		margin: 0rpx 20rpx;
		text-align: center;
	}

	.phoneView {
		display: flex;
		align-items: center;
	}

	.phoneImg {
		width: 44rpx;
		height: 44rpx;
	}

	.shopPhone {
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.shop_open_hours {
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
	}

	.marks {
		padding: 6rpx 14rpx 6rpx 14rpx;
		background: #F8B800;
		border-radius: 8rpx;
		color: white;
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
	}

	.marksView {
		display: flex;
		align-items: center;
	}

	.discounts {
		padding: 6rpx 14rpx 6rpx 14rpx;
		color: white;
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
		margin-left: 10rpx;
		background: #D24E15;
		border-radius: 8rpx;
	}

	.shop_name {
		font-size: 36rpx;

		color: #111111;
		font-family: Inter-Regular, Inter;
	}

	.rate {
		display: flex;
		align-items: center;
		font-size: 32rpx;
		color: #F8B800;
	}

	.shopView {
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #E4E4E4;
	}

	.shop {
		padding-left: 36rpx;
		padding-right: 36rpx;
	}

	/* 轮播图 */
	.swiperImageEye {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}

	.swiperViewImg {
		display: flex;
		align-items: center;
		padding: 8rpx 16rpx 8rpx 26rpx;
		border-radius: 50rpx;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		margin-right: 14rpx;


	}

	.swiperAddress {
		position: absolute;
		/* bottom: 28rpx; */
		top: 343rpx;
		right: 22rpx;
		display: flex;
		align-items: center;
		font-size: 28rpx;
		font-family: Inter-Regular, Inter;
	}

	.swiperImg {
		width: 98%;
		border-radius: 20rpx;
	}

	.swiperView {
		position: relative;
	}

	.swiper {
		width: 100%;
		padding-left: 36rpx;
		    height: 400rpx;
	}
	.content{
		width: 100%;
		    overflow: hidden;
		
	}
</style>
