<template>
	<view class="content">
		<view class="">
			<swiper style="height: 400rpx;margin: 10rpx 20rpx;" next-margin="40rpx" :indicator-dots="false" circular
				:autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in list1.slider" :key="index" @click="aaa(index)">
					<view class="swiper-item">
						<image :src="item" mode="" @click="aaa(index)"></image>
						<view class="swiperv1">
							<view class="swiperv2">
								<image class="swiperv3" src="../../static/releaseimg/guankan.png" mode=""></image>
								<view class="swiperv4">{{list1.sign_num}}次</view>
							</view>
							<view class="swiperv2">
								<image class="swiperv3" src="../../static/releaseimg/tupian.png" mode=""></image>
								<view class="swiperv4" >{{tpsl}}</view>
							</view>
						</view>
					</view>
				</swiper-item>

			</swiper>
		</view>
		<view class="" >
			<view class="Group1">
				<view class="">
					<view class="Group2">{{list1.name}}</view>
					<u-rate :count="5" :size="18" :value="list1.grade" readonly activeColor="#F8B800"
						inactiveColor="#F8B800">
					</u-rate>
				</view>
				<view class="Group3">
					发起活动
				</view>

			</view>
			<view class="Group4"></view>
			<view class="Group5">
				<view class="Group6">
					<text>营业时间</text>
					<text>:</text>
					<text> {{list1.open_hours}}</text>
					<text>{{item.shijian1}}</text>
				</view>
				<view class="Group7">
					<text v-for="(itemas,indexas) in list1.marks" :key="indexas"
						:class="{tve:indexas==2}">{{itemas}}</text>

				</view>
			</view>
			<view class="Group4"></view>
			<view class="Group8">
				<view class="Group9">
					<view class="Group10">{{list1.address}}</view>
					<view class="Group11">距您当前位置 <text>{{(julis/1000).toFixed(2)}}</text>公里,预计需要<text>{{(shijian/60).toFixed(0)}}</text>分钟	</view>
				</view>
				<view class="Group12">
					<view class="Group13">
						<image class="Groupimg" src="../../static/releaseimg/dizhi.png" mode=""></image>
						<view class="">导航</view>
					</view>
					<view class="Group14">
						<image class="Groupimg" src="../../static/releaseimg/phone.png" mode=""></image>
						<view class="">电话</view>
					</view>
				</view>
			</view>
			<view class="Group15"></view>
		</view>
		<!-- 用户评论 -->
		<view class="Dve1">
			<view class="Dve2">用户评论(<text class="Dve3">9999</text>)</view>
			<view class="Dve4" v-for="(item,index) in pllist" :key="index">
				<view class="Dve5">
					<image class="imgs" :src="item.images" mode=""></image>
				</view>
				<view class="Dve6">
					<view class="Dve7">{{item.name}}</view>
					<view class="Dve8">{{item.pinglun}}</view>
					<u-rate :allowHalf="true" :value="item.value" :count="5" :size="15" readonly activeColor="#F8B800"
						inactiveColor="#F8B800">
					</u-rate>
					<view class="Dve9">
						<view class="Dve10">
							<image v-for="(items,indexs) in item.imgs" class="Dveimg" :src="items" mode=""></image>
						</view>
					</view>
					<view class=""></view>

				</view>
				<view class="Dve11">{{item.shijian}}</view>
			</view>


		</view>
		<!-- <view class="btn">选定商家</view> -->


	</view>
</template>
	
<script>
	import AMAP from '../../libs/amap-wx.130.js'
	export default {
		data() {
			return {
				key:'bf84d9693654c4dbc667a2c462ebdca4',
				baseurl: '',
				token: '',
				// 商家经纬度
				slat:'',
				slng:'',
				// 自己经纬度
				zlat:'',
				zlng:'',
				slider: [],
				tpsl:'',
				// 距离
				julis:'',
				shijian:'',
				titlelist: [{
					title: "后海五号酒吧后海五号酒吧",
					value: "4.5",
					shijian: "周一至周天",
					shijian1: "09:00-01:00",
					biaoqian: ["酒吧", "自由行", "8.8折"],
					address: "高新区-汉峪金谷",
					juli: "12Km",
				}],
				pllist: [{
						images: "../../static/indeximg/Ellipse%2091.png",
						name: "名字",
						pinglun: "老板人很好欧耶",
						value: "3",
						imgs: ["../../static/indeximg/商家推荐03.png", "../../static/indeximg/商家推荐03.png",
							"../../static/indeximg/商家推荐03.png",
						],
						shijian: "4月30日"
					},
					{
						images: "../../static/indeximg/Ellipse%2091.png",
						name: "名字",
						pinglun: "老板人很好欧耶",
						value: "3",
						imgs: ["../../static/indeximg/商家推荐03.png", "../../static/indeximg/商家推荐03.png",
							"../../static/indeximg/商家推荐03.png",
						],
						shijian: "4月30日"
					},
					{
						images: "../../static/indeximg/Ellipse%2091.png",
						name: "名字",
						pinglun: "老板人很好欧耶",
						value: "3",
						imgs: ["../../static/indeximg/商家推荐03.png", "../../static/indeximg/商家推荐03.png",
							"../../static/indeximg/商家推荐03.png",
						],
						shijian: "4月30日"
					},
				],
				// 轮播图
				list1: [],
				urls2: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',

				],
			}
		},
		onLoad(options) {
			this.baseurl = getApp().globalData.baseurl;
			this.token = uni.getStorageSync('token');
			// console.log(options.shop_no,lat,lng);
			// 详情页面
			this.shopdetail(options.shop_no, options.lat, options.lng);
			this.pinglun(options.shop_no);
			this.zlat=getApp().globalData.lat;
			this.zlng=getApp().globalData.lng;
			this.slat=options.lat;
			this.slng=options.lng;
		},
		mounted() {
			// this.getlocation();
			this.addxinxis();
			this.pinglun()
		},
		methods: {
			// getlocation(){
			// 	let _this=this;
			// 	let Amap=new AMAP.AMapWX({key:_this.key});
			// 	console.log(Amap);
			// 	Amap.getRegeo({
			// 		success: (res) => {
			// 			    console.log(res, res[0].regeocodeData.formatted_address)
			// 				_this.zlat=res[0].latitude;
			// 				_this.zlng=res[0].longitude;
			// 				// this.addxinxi(res[0].latitude,res[0].longitude,this.slat,this.slng)
			// 			},
			// 			fail: (err) => {
			// 				console.log(err)
			// 			}
			// 	})
			// },
			pinglun(shop_no){
				uni.request({
					url: this.baseurl+'/api/shop/shopCommentList',
					method: 'POST',
					header:{xcx:1,token:this.token},
					data: {shop_no,page:1,num:20,
					city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("评论列表",res);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			addxinxis(){
				let _this=this;
				console.log(_this.zlat,_this.zlng,_this.slng);
				let Amap=new AMAP.AMapWX({key:_this.key});
				 Amap.getDrivingRoute({
					 origin:_this.zlng+','+_this.zlat,
					 destination:_this.slng+','+_this.slat,
					 success(data){
						 console.log("距离计算",data.paths[0].distance);
						 _this.julis=data.paths[0].distance;
						 _this.shijian=data.paths[0].duration;
					 }
				 })
			},
			
			shopdetail(shop_no, lat, lng) {
				uni.request({
					url: this.baseurl + '/api/shop/shopInfo',
					method: 'POST',
					header: {
						xcx:1, 
						token: this.token
					},
					data: {
						shop_no,
						lng,
						lat,
						city:uni.getStorageSync("citySel")
					},
					success: res => {
						let that=this;
						console.log("商家详情",res);
						
						that.list1=res.data.data;
						// console.log(that.list1.slider.length);
						that.tpsl=that.list1.slider.length;
						// res.data.data.slider.forEach((item,index)=>{
						// 	console.log(item);
						// 	this.slider.push(item);

						// 	console.log(this.slider);
						// })
					},
					fail: () => {},
					complete: () => {}
				});
			},
			aaa(e) {
				uni.previewImage({
					current: e,
					urls: this.list1.slider.map(item => item),
					loop: true,
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.swiperv2 {
		display: flex;
		align-items: center;
		margin-right: 15rpx;
		font-size: 22rpx;
		background-color: #00000050;
		padding: 5rpx 10rpx;
		border-radius: 20rpx;
	}

	.swiperv3 {
		width: 25rpx;
		height: 25rpx;
		margin: 5rpx;
	}

	.btn {
		height: 80rpx;
		background-color: #f8b800;
		color: white;
		font-size: 40rpx;
		position: fixed;
		bottom: 10rpx;
		left: 105rpx;
		right: 105rpx;
		/* text-align: center; */
		align-items: center;
		display: flex;
		justify-content: center;
		border-radius: 20rpx;

	}

	.Dveimg {
		width: 30%;
		height: 160rpx;
		margin: 8rpx;
	}

	.Dve11 {
		width: 15%;
		font-size: 20rpx;
		color: #6C6C6C;
	}

	.Dve10 {
		display: flex;
		flex-wrap: wrap;
	}

	.Dve6 {
		width: 70%;
	}

	.Dve5 {
		width: 15%;
		text-align: center;
	}

	.Dve4 {
		display: flex;
		margin-bottom: 20rpx;
	}

	.Dve2 {
		margin-left: 20rpx;
		margin-bottom: 15rpx;
	}

	.Dve3 {
		color: #F8B800;
	}

	/deep/ {
		.tp {
			width: 50rpx;
			height: 100rpx;
		}
	}

	.imgs {
		width: 70rpx;
		height: 70rpx;
	}

	.Groupimg {
		width: 40rpx;
		height: 40rpx;
	}

	.Group1 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 20rpx;
	}

	.Group2 {
		font-size: 30rpx;
		font-weight: 900;
		margin-bottom: 20rpx;
	}

	.Group3 {
		background-color: #f8b800;
		border-radius: 55rpx 0rpx 0rpx 55rpx;
		padding: 20rpx 30rpx 20rpx 30rpx;
		width: 70rpx;
		color: white;
		font-size: 28rpx;
		font-weight: 600;

	}

	.Group4 {
		border-bottom: 5rpx solid #E4E4E4;
		/* width: 80%; */
		margin: 20rpx;
	}

	.Group5 {

		margin-left: 20rpx;

	}

	.Group6 {
		margin-top: 10rpx;

		>text {
			margin-right: 10rpx;
		}
	}

	.Group7 {
		margin-top: 10rpx;

		>text {
			background-color: #f8b800;
			color: white;
			border: 10rpx;
			padding: 5rpx 10rpx;
			font-size: 24rpx;
			align-items: center;
			margin-right: 10rpx;
		}

		.tve {
			background-color: #D24E15;
		}
	}


	.Group8 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0rpx 20rpx;
	}

	.Group11 {
		>text {
			color: #F8B800;
		}
	}

	.Group12 {
		display: flex;
	}

	.Group13 {
		text-align: center;
		margin: 0rpx 30rpx;

		>image {
			width: 40rpx;
			height: 40rpx;
		}
	}

	.Group14 {
		text-align: center;
	}

	.Group15 {
		border-bottom: 22rpx solid #E4E4E4;
		/* width: 80%; */
		margin: 20rpx;
	}

	.swiperv1 {
		position: absolute;
		right: 20rpx;
		display: flex;
		bottom: 20rpx;
		color: white;
	}

	.swiper-item {
		width: 100%;
		position: relative;

		>image {
			width: 98%;
			height: 390rpx;
			border-radius: 20rpx;
		}
	}

	.content {
		padding-bottom: 90rpx;
	}
</style>
