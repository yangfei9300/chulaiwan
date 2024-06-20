<template>
	<view>
		<view class="listview roww">
			<image class="leftimg"></image>
			<view class="colonn">
				<view class="topname">下午有没有出来一起健身的</view>
				<view class="diqu">地址：高新区-汉峪金谷</view>
				<view class="roww center_center">
					<image src="https://ta.imjiayi.com/upload/upload/Component 15@2x.png" class="w-40 h-40 m-right-10"></image>
					<view class="fs-32">03-12  周二 12:00</view>
					<view class="allline"></view>
					<view class="mianfei">免费</view>
				</view>
				<view class="roww m-top-10">
					<view class="headerimg"></view>
					<view class="headerimg headerimg1"></view>
					<view class="headerimg headerimg1"></view>
					<view class="allline"></view>
					<view>8/10</view>
				</view>
				<view class="h-10"></view>
				<view class="roww endend">
					<image src="/static/zudui.png" class="w-104 h-40"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"heng_activity",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.listview{
	height: 274rpx;
	background: #FFFFFF;
	box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(17,17,17,0.06);
	border-radius: 20rpx 20rpx 20rpx 20rpx;
	opacity: 1;
	padding:20rpx;
}
.leftimg{
	width: 208rpx;
	height: 238rpx;
	background-color: red;
	margin-right:15rpx;
}
.topname{
	width: 424rpx;
	height: 38rpx;
	font-size: 32rpx;
	font-family: Inter-Regular, Inter;
	font-weight: bold;
	color: #111111;
	line-height: 38rpx;
}
.diqu{
	height: 30rpx;
	font-size: 24rpx;
	font-family: Inter-Regular, Inter;
	font-weight: 400;
	color: #939393;
	line-height: 28rpx;
	margin:10rpx 0rpx;
}
.mianfei{
	height: 36rpx;
	font-size: 28rpx;
	font-family: Inter-Regular, Inter;
	font-weight: 400;
	color: #F8B800;
	line-height: 33rpx;
	-webkit-text-stroke: 1px #F8B800;
	text-stroke: 1px #F8B800;
}
.headerimg{
	width: 50rpx;
	height: 50rpx;
	border-radius: 50%;
	border: 2px solid red;
	background-color: #939393;
}
.headerimg1{
	margin-left: -25rpx;
}
</style>