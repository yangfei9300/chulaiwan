<template>
	<view class="content">
		<view class="inputs">
			<image class="serach" src="../static/serach.png" mode=""></image>
			<input type="text" value="" v-model="keywords" />
		</view>
		<view class="address1" v-show="showwords">
			<view class="address2" v-for="(item,index) in list" :key="index" @click="POI(item.latitude,item.longitude)">
				<view class="address3">{{item.name}}</view>
				<view class="address4">{{item.address}}</view>
			</view>
		</view>
		<view class="address1" v-show="!showwords">
			<view class="address2" v-for="(item,index) in wordslist" :key="index"
				@click="POI(item.latitude,item.longitude)">
				<view class="address3">{{item.name}}</view>
				<view class="address4">{{item.address}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Amap from '../../libs/amap-wx.130.js'
	export default {
		data() {
			return {
				list: [],
				wordslist: [],
				myAmapFun: null,
				keywords: '',
				showwords: true,
			}
		},


		onLoad() {
			this.myAmapFun = new Amap.AMapWX({
				key: getApp().globalData.key
			});
			uni.getSetting({
				success: (res) => {
					// res.authSetting['scope.userLocation'] === undefined  表示 初始化进入，从未授权
					// res.authSetting['scope.userLocation'] === true       表示 已授权
					// res.authSetting['scope.userLocation'] === false      表示 授权拒绝
					if (res.authSetting['scope.userLocation'] === undefined) {
						console.log("弹出位置授权框")

					} else if (res.authSetting['scope.userLocation'] === true) {
						console.log("已经授权")
					} else if (res.authSetting['scope.userLocation'] === false) {
						console.log("弹出允许授权设置框")
					}
				}
			});
		},
		mounted() {
			const that = this;
			that.myAmapFun.getPoiAround({
				data:{
					
				},
				success: function(data) {
					console.log(data);
					that.list = data.markers;
					//成功回调
				},
				fail: function(info) {
					//失败回调
					console.log(info)
				}
			})
		},
		watch: {
			keywords(val, old) {
				console.log(val);
				let location=`${getApp().globalData.lng},${getApp().globalData.lat}`;
				let that=this;
				if(val!=''){
					this.showwords=false;
					that.myAmapFun.getInputtips({
						keywords: val,
						location: location,
						success: function(data) {
							console.log(data)
							that.wordslist=data.tips;
					
						}
					})
				}else{
					this.showwords=true;
				}
				
			}
		},
		methods: {


		}
	}
</script>

<style scoped>
	.serach{
		width: 28rpx;
		height: 28rpx;
		    margin-left: 32rpx;
		    margin-right: 16rpx;
	}
	.inputs{
		width: 678rpx;
		height: 58rpx;
		border-radius: 57px 57px 57px 57px;
		opacity: 1;
		border: 1px solid #EAEAEA;
		display: flex;
		align-items: center;
		    margin-bottom: 36rpx;
		
	}
	/* 地址信息 */

	.address2 {
		border-bottom: 1rpx solid #F2F2F2;
		border-top: 1rpx solid #F2F2F2;
		background-color: white;
		padding: 30rpx 0rpx;
	}


	.address4 {
		font-size: 24rpx;
		/* FONT-WEIGHT: 00; */
		color: #939393;
		margin-top: 5rpx;
	}

	/* 搜索框 */
	

	.search3 {
		display: flex;
		align-items: center;
	}

	.search4 {
		width: 30rpx;
		height: 30rpx;
	}

	.content {
		background-color: #FFFFFF;
		padding: 36rpx;
	}
</style>
