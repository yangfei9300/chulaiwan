<template>
	<view class="content">
		<view class="Title">
			<view class="">商家列表</view>
			<view class="TitleFu">(优惠商家暂限济南)</view>
		</view>
		<view class="Sear">
			<view class="Searleft">
				<image class="SearImg" src="../../static/serach.png" mode=""></image>
				<input type="text" value="搜索商家" />
			</view>
			<view class="Searright" @click="ONtrue=true">
				<view class="SearrightView">{{business_area}}</view>
				<image class="SearrightImg" src="../../static/shaixuanhui.png" mode=""></image>
			</view>
		</view>
		<view class="achd" v-for="(item,index) in sjlist" :key="index"
			@click="SJDetail(item.shop_no,item.lat,item.lng)">
			<image class="sjimg" :src="item.cover" mode=""></image>
			<view class="sj_view">
				<view class="sj_title">
					<image class="marks1img" v-if="item.marks1=='精选'" src="../../static/jingxuan.png" mode=""></image>
					<image class="marks1img" v-if="item.marks1=='巨惠'" src="../../static/juhui.png" mode="">
					</image>
					<image class="marks1img" v-if="item.marks1=='新店'" src="../../static/xindian.png" mode=""></image>
					<view class="sj_name">
						{{item.name}}
					</view>
				</view>

				<view class="sj_rate">
					<uni-rate :count="5" readonly activeColor="#f8b800" inactiveColor="#f8b800" :value="item.grade"
						size="16" gutter="3" />
					<text
						style="color: #F8B800;font-size: 12px; font-weight: 600;font-family: Inter-Regular, Inter;">{{item.money}}</text>
				</view>
				<view class="sj_marks">
					<view class="sjbq">{{item.marks[0]}}</view>
					<view class="sjbq1">{{item.discounts==0?'独家特惠':item.discounts}}</view>
				</view>
				<view class="sj_address">
					<text>{{item.business_area}}</text>
					<text>1.1km</text>
				</view>
				<view class="achd11">
					<view class="sj_juqing">
						<image v-for="(items,indexs) in item.group" :key="indexs" :class="{sj_group1:indexs>0}"
							class="sj_group" :src="items.headimg" mode="">
						</image>
						<view class="sj_text">{{item.text}}</view>
					</view>
					<view class="sjachd131">{{itme.text}}</view>
				</view>
				<!-- <view class="achd14">去组队{{index}}</view> -->
			</view>
		</view>
		<view class="Onquan" v-if="ONtrue">
			<view class="OnView">
				<view class="OnTitle">
					<view class="">商圈选择</view>
					<view class="OnX">X</view>
				</view>
				<scroll-view scroll-y style="height: 700rpx;width: 622rpx;">
					<view class="OnName">
						<view class="Onname" :class="{ClickName:item.name==business_area}"
							v-for="(item,index) in shopquanlist" :key="index" @click="clickquan(item.name)">{{item.name}}
						</view>
					</view>
				</scroll-view>
				

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				lat: getApp().globalData.lat,
				lng: getApp().globalData.lng,
				sjlist: [],
				ONtrue: true,
				shopquanlist: [],
				// 商圈
				business_area: "热门商圈",
				cate_id:'',
			}
		},
		onLoad(options) {
		console.log(options.cate_id);
			this.cate_id=options.cate_id;
		},
		mounted() {
			this.shop();
			this.shopquan();
		},
		methods: {
			shopquan() {
				uni.request({
					url: this.baseurl + '/api/shop/shopBusinessArea',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log(res);
						this.shopquanlist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			shop() {
				uni.request({
					url: this.baseurl + '/api/shop/shopList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						cate_id: this.cate_id,
						sort: this.numbee,
						lat: this.lat,
						lng: this.lng,
						business_area: this.business_area,
						money_max: this.max,
						money_min: this.min,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("商家列表", res);
						this.sjlist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 选择商圈
			clickquan(name) {
				this.business_area = name;
				this.ONtrue = false;
				this.shop();
			},
			SJDetail(shop_no) {
				uni.navigateTo({
					url: `../shangjiaAddressDetail/shangjiaAddressDetail?shop_no=${shop_no}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	/* 商圈弹窗 */
	.OnX {
		position: absolute;
		right: 0;
		font-size: 31rpx;
		top: 14rpx;

	}

	.OnTitle {
		position: relative;
		display: flex;
		justify-content: center;
		font-size: 48rpx;
		margin: 20rpx 0;
	}

	.ClickName {
		background: rgba(248, 184, 0, 0.1) !important;
		border: 1px solid #F8B800 !important;
		color: #F8B800;
	}

	.Onname {
		width: 290rpx;
		height: 68rpx;
		font-size: 28rpx;
		background: #F6F6F6;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 6rpx;
		margin: 16rpx 0;
		border: 1px solid #F6F6F6;

	}

	.OnName {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.OnView {
		background-color: white;
		animation: KK 1s linear;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		border-radius: 50rpx 50rpx 0 0;
		padding: 0 64rpx;

	}

	.Onquan {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);
	}

	@keyframes KK {
		from {
			transform: translateY(1000px);
		}

		to {
			transform: translateY(0);
		}
	}

	/* 商圈 */
	.SearrightView {
		font-size: 32rpx;
		white-space: nowrap;
		width: 175rpx;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.SearrightImg {
		width: 28rpx;
		height: 31rpx;
	}

	.Searright {
		display: flex;
		align-items: center;
	}

	/* 搜索 */
	.Searleft {
		width: 462rpx;
		border: 1rpx solid #E9e9e9;
		border-radius: 50rpx;
		height: 48rpx;
		display: flex;
		align-items: center;
	}

	.SearImg {
		width: 36rpx;
		height: 36rpx;
		margin: 0 18rpx;
	}

	.Sear {
		display: flex;
		justify-content: space-between;
	}

	.TitleFu {
		color: #939393;
		font-size: 28rpx;
	}

	.Title {
		display: flex;
		align-items: center;
		font-size: 32rpx;
		margin-bottom: 22rpx;
		margin-top: 48rpx;
	}

	.achd131 {
		position: absolute;
		right: 0rpx;
		bottom: 15rpx;
		color: #9999;
	}

	.achd11 {
		display: flex;
		position: relative;
		align-items: center;
	}

	.sjbq2 {
		background-color: #f8b800;
		color: white;
		font-size: 20rpx;
		padding: 4rpx 7rpx;
		margin: 10rpx 10rpx 10rpx 0rpx;
	}

	.sjbq1 {
		margin-left: 10rpx;
		background: #D24E15;
		padding: 4rpx 12rpx 4rpx 8rpx;
		border-radius: 2px 2px 2px 2px;
		color: white;
		font-size: 20rpx;
	}

	.sjbq {
		font-size: 20rpx;
		border-radius: 2px 2px 2px 2px;
		opacity: 1;
		color: #F8B800;
		padding: 4rpx 12rpx 4rpx 8rpx;
		border: 1px solid #F8B800;
	}

	.sj_rate {
		margin-left: -2px;
		display: flex;
		flex-direction: row;
		margin-top: 4rpx;
		margin-bottom: 4rpx;
	}

	.marks1img {
		width: 64rpx;
		height: 32rpx;
	}

	.sj_juqing {
		display: flex;
		align-items: center;
	}

	.sj_group1 {
		margin-left: -20rpx;
	}

	.sj_group {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50rpx;
	}

	.sj_text {
		width: 330rpx;
		font-size: 24rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-left: 10rpx;
		color: #D24E15;
	}

	.sj_address {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #939393;
		font-size: 24rpx;
		font-family: Inter-Regular, Inter;
		margin: 4rpx 0;
	}

	.sj_marks {
		display: flex;
		align-items: center;
	}

	.sj_title {
		display: flex;
		align-items: center;
	}

	.sj_name {
		width: 348rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
		margin-left: 8rpx;
	}

	.sj_view {
		padding-left: 10rpx;

	}

	.sjimg {
		width: 192rpx;
		height: 192rpx;
	}

	.achd {
		display: flex;
		position: relative;
		border-radius: 20rpx;
		background-color: white;
		box-shadow: 0px 0px 15px 0px rgba(17, 17, 17, 0.06);
		margin: 20rpx 0;
		padding: 20rpx;
		border: 1rpx solid #F2F2F2;
	}

	.content {
		padding: 0 40rpx 0 36rpx;
	}
</style>
