<template>
	<view class="content">
		<view class="dp">
			驻扎店铺(<text class="dp1">3350</text>)
		</view>
		<view class="dp2">
			<u--input placeholder="请输入内容" border="surround" shape="circle" v-model="value" clearable prefixIcon="search"
				@change="change"></u--input>
		</view>

		<view class="">
			<view class="tjv1" v-for="(itemas,indexas) in shangjialist" @click="MerDetail(itemas.shop_no)">
				<view class="tjv2">
					<view class="tjv3">
						<image class="tjv4" :src="itemas.cover" mode="aspectFill"></image>

					</view>
					<view class="tjv6">
						<view class="tjv7">{{itemas.name}}</view>
						<view class="tjv5">
							<u-rate :count="5" :size="12" v-model="itemas.grade" readonly
								activeColor="#F8B800" inactiveColor="#F8B800"></u-rate>
							<view class="" style="color: #f8b800;font-size: 22rpx;margin-left: 10rpx;">¥{{itemas.money}}
							</view>
						</view>
						<view class="tjv8">
							<view class="tjv9">
								<view class="tjv10" :class="{redmei:indexasd==2}"
									v-for="(itemasd,indexasd) in itemas.marks" :key="indexasd">{{itemasd}}</view>
							</view>
						</view>
						<view class="tjv20">
							<view class="tjv23">{{itemas.address}}</view>
							<view class="tjv11">
								距离 : {{itemas.distance}}
							</view>
						</view>
						<view class="tjv12">
							<view class="tjv13">
								<image v-for="(plitem,plindex) in itemas.imgs " :key="plindex" class="tjv14"
									:class="{outimg:plindex>=1 , outimgs:plindex>=2}" :src="plitem" mode=""></image>
							</view>
							<view class="tjv15">{{itemas.pinglun}}</view>
						</view>
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
				baseurl: "",
				token: "",
				list1: [],
				// 经度
				lat: "",
				// 纬度
				lng: "",
				shangjialist: [],
				list222: [],
			}
		},
		mounted() {
			this.baseurl = getApp().globalData.baseurl;
			this.token = uni.getStorageSync('token');
			this.location();
			this.business();
		},
		methods: {
			business(lat, lng) {
				console.log(lat + "经度");
				console.log(lng + "纬度");
				uni.request({
					url: this.baseurl + '/api/shop/shopList',
					method: 'POST',
					data: {
						page: 1,
						num: 10,
						cate_id: 1,
						sort: 1,
						lat: lat,
						lng: lng,
						money_max: '',
						money_min: '',
						keywords: '',
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log(res);
						this.shangjialist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			}, // 位置信息
			location() {
				let that = this;
				uni.getFuzzyLocation({
					type: 'wgs84',
					success: function(res) {
						that.lat = res.longitude;
						console.log(that.lat);
						that.lng = res.latitude
						console.log(that.lng);
						that.business(that.lat, that.lng);
					}
				});
			},
			// 商家详情
			MerDetail(shop_no) {
				
				uni.navigateTo({
					url: '../MerchantDetails/MerchantDetails?shop_no='+shop_no+"&lat="+this.lat+'&lng='+this.lng,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.dp {
		margin: 10rpx;
		font-size: 30rpx;
	}

	.dp1 {
		color: #F8B800;
	}

	.dp2 {
		margin: 10rpx;
	}

	/* 商家推荐 */

	.tjv1 {
		border-radius: 20rpx;
		background-color: white;
		padding: 15rpx;
		margin: 30rpx 0;
	}

	.tjv2 {
		display: flex;
		/* justify-content: space-around; */
	}

	.tjv3 {}

	.tjv4 {
		width: 240rpx;
		height: 200rpx;

	}

	.tjv5 {
		text-align: center;
		display: flex;
		// flex-direction: column;

		align-items: center;
	}

	.tjv6 {
		width: 100%;
		font-size: 25rpx;
		overflow: hidden;
		margin-left: 20rpx;
	}

	.tjv7 {
		font-weight: 600;
		font-size: 30rpx;
	}

	.tjv8 {
		display: flex;
		margin-bottom: 10rpx;
		align-items: center;
	}

	.tjv9 {
		display: flex;
	}

	.tjv10 {
		background-color: #f8b800;

		font-weight: 100;
		font-size: 20rpx;
		padding: 5rpx;
		text-align: center;
		width: 70rpx;
		color: white;
		margin-right: 10rpx;
	}

	.tjv11 {
		margin-left: 20rpx;
		font-size: 22rpx;
		position: absolute;
		font-weight: 400;
		right: 20rpx;

	}

	.redmei {
		background-color: #D24E15;
	}

	.tjv12 {
		display: flex;
		align-items: center;
		margin-top: 15rpx;
	}

	.tjv13 {}

	.tjv14 {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50rpx;
	}

	.outimg {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50rpx;
		position: relative;
		left: -16rpx;
	}

	.outimgs {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50rpx;
		position: relative;
		left: -32rpx;

	}

	.tjv15 {
		margin-left: 15rpx;
		font-size: 24rpx;
		font-weight: 400;
		overflow: hidden;
		width: 300rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		position: absolute;
		right: 46rpx;
		color: #D24E15;
	}

	.tjv16 {
		align-items: baseline;
		display: flex;
		margin-top: 15rpx;
		/* flex-direction: row; */
		/* justify-content: space-around; */
	}

	.tjv17 {
		font-size: 28rpx;
		color: #f8b800;
		font-weight: 400;
	}

	.tjv18 {
		margin-left: 25rpx;
		color: #9999;
		font-size: 20rpx;
		font-weight: 400;
	}

	.tjv19 {
		border: 1rpx dashed #eeedf1e8;
		width: 100%;
		margin: 24.5rpx 0;
	}

	.tjv20 {
		display: flex;
		align-items: center;
		position: relative;

		>view {
			color: #9999;
			font-size: 24rpx;
			align-items: center;
		}
	}

	.tjv21 {
		width: 30rpx;
		height: 30rpx;
	}

	/deep/.tjv22 {
		margin: -4rpx 10rpx 0 10rpx;
	}

	.content {
		padding: 20rpx 0;
		background-color: #FAFAFA;
	}
</style>
