<template>
	<view class="content">
		<view class="search1">
			<view class="search2">
				<u-search :clearabled="true" @change="POImotude()" :showAction="false" placeholder="Search" v-model="searchs"></u-search>
			</view>
			<view class="search3">
				<image class="search4" src="../../static/index/address.png" mode=""></image>
				<view class="search5">汉峪金谷1</view>
			</view>
		</view>
		<view class="address1" >
			<view class="address2" v-for="(item,index) in addres" :key="index" @click="zdback(item.name,item.district+item.address)">
				<view class="address3">{{item.name}}</view>
				<view class="address4">{{item.district+item.address}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Amap from '../../libs/amap-wx.130.js'
	export default {
		data() {
			return {
				addres:[
					
					
				],
				searchs:'地址',
				key:'',
				// 关键词
				keywords:'',
				location:'',
			}
		},
		onLoad() {
			this.POImotude();
			this.location=getApp().globalData.lng+','+getApp().globalData.lat;
		},
		mounted() {
			this.POImotude();
		},
		methods: {
			// POI
			// 获取数据
			POImotude(e){
				console.log(e);
				let _this=this;
				let Mamp=new Amap.AMapWX({key:'bf84d9693654c4dbc667a2c462ebdca4'});
				Mamp.getInputtips({
					keywords:e,
					location:_this.location,
					success:function(res){
						console.log(res);
						_this.addres=res.tips;
					}
				})
			},
			zdback(e,f){
				uni.$emit('zdxz',{
					name:e,
					name1:f
				});
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	/* 地址信息 */
	.address1{}
	.address2{
		border-bottom: 1rpx solid #F2F2F2;
		    border-top: 1rpx solid #F2F2F2;
		    background-color: white;
		    padding: 30rpx 0rpx;
	}
	.address3{}
	.address4{
		font-size: 24rpx;
		    /* FONT-WEIGHT: 00; */
		    color: #939393;
			margin-top: 5rpx;
	}
	
/* 搜索框 */
	.search1 {
		display: flex;
		justify-content: space-between;
		
	}

	.search2 {
		/* width: 50%; */
		width: 500rpx;
	}

	.search3 {
		display: flex;
		align-items: center;
	}

	.search4 {
		width: 30rpx;
		height: 30rpx;
	}
	.content{
		background-color: #FFFFFF;
		padding: 20rpx;
	}
</style>
