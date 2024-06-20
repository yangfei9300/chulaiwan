<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="">
			<swiper class="swiper" :indicator-dots="true" next-margin="40px" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in swiperlist" :key="index">
					<view class="swiperView">
						<image class="swiperImg" :src="item" mode="" @click="previewImage(index)"></image>
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
		<image class="clickhuodong" src="../static/clickhuodong.png" mode=""></image>
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
					<view class="phone_business_area">{{list.business_area}}</view>
					<view class="phone_km">据您当前位置<text class="phoneText">{{list.distance}}km</text></view>
				</view>
				<view class="phoneView">
					<view class="phone" @click="openLocation(list.lat,list.lng,list.name,list.address)">
						<image class="phoneImg" src="../static/daohang.png" mode=""></image>
						<view class="">导航</view>
					</view>
					<view class="phone" @click="onPhone(list.shop_phone)">
						<image class="phoneImg" src="../static/phone.png" mode=""></image>
						<view class="">电话</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 粗线 -->
		<view class="bordersize"></view>
		<!-- 用户评论 -->
		<view class="comment">
			<view class="user">用户评论<text class="usernum">({{comments}})</text></view>
			<view class="Comment" v-for="(comment,commentindex) in comlist" :key="commentindex">
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
						<image class="Comment_viewimg_img" :src="commentimg" mode=""
							v-for="(commentimg,commentimgindex) in comment.img" :key="commentimgindex"></image>
					</view>
				</view>

			</view>
		</view>
		<button type="default" class="btn" @click="xuanze">选定商家</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
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

			}
		},
		onLoad(options) {
			this.shop_no = options.shop_no;

		},
		mounted() {
			// 商家信息
			this.getDetail();
			// 商家评论总条数
			this.commentLength();
			// 商家评论列表
			this.commentList();

		},
		methods: {
			// 详情接口
			getDetail() {
				uni.request({
					url: this.baseurl + '/api/shop/shopInfo',
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
				uni.request({
					url: this.baseurl + '/api/shop/shopCommentTotal',
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
				uni.request({
					url: this.baseurl + '/api/shop/shopCommentList',
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
			// 距离计算
			space(lat1, lng1, lat2, lng2) {
				// console.log(lat1, lng1, lat2, lng2)
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
					latitude:lat,
					longitude:lng,
					address:address,
					name:name,
					success(res) {
						console.log("查看地图位置",res);
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
			},
			xuanze(){
				let page=getCurrentPages();
				let opage=page[page.length-3];
				console.log(opage.$vm);
				opage.$vm.AddressBottom=false;
				opage.$vm.addname=this.list.name;
				opage.$vm.addDetail=this.list.detail_address;
				opage.$vm.shop_no=this.shop_no;
				opage.$vm.lng=this.list.lng;
				opage.$vm.lat=this.list.lat;
				uni.navigateBack({
					delta: 2
				});
				
				console.log(opage)
			}
		}
	}
</script>

<style scoped>
	.btn{
		width: 600rpx;
		    position: fixed;
		    left: 20rpx;
		    right: 20rpx;
		    bottom: 20px;
		    height: 110rpx;
		    color: white;
		    /* background: #F8B800; */
		    background: #FFC803;
		    font-size: 52rpx;
		    display: flex;
		    align-items: center;
		    text-align: center;
		    justify-content: center;
		    border-radius: 24rpx;
	
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
		bottom: 28rpx;
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
		height: 438rpx;
		padding-left: 36rpx;
	}
	.content{
		width: 100%;
		    overflow: hidden;
		
	}
</style>
