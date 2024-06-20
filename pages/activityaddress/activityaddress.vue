<template>
	<view class="content">
		<view class="search1">
			<view class="search2">
				<u-search :clearabled="true" :showAction="false" placeholder="Search" v-model="searchs"></u-search>
			</view>
			<view class="search3">
				<image class="search4" src="../../static/index/address.png" mode=""></image>
				<view class="search5">汉峪金谷1</view>
			</view>
		</view>
		<view class="address1">
			<view class="address2" v-for="(item,index) in addres" :key="index">
				<view class="address3">{{item.name}}</view>
				<view class="address4">{{item.name1}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addres:[
					{name:"汉峪金谷",name1:"山东省济南市历城区经十路与舜华路交叉口东南角"},
					{name:"汉峪金谷",name1:"山东省济南市历城区经十路与舜华路交叉口东南角"},
					{name:"汉峪金谷",name1:"山东省济南市历城区经十路与舜华路交叉口东南角"},
					{name:"汉峪金谷",name1:"山东省济南市历城区经十路与舜华路交叉口东南角"},
					{name:"汉峪金谷",name1:"山东省济南市历城区经十路与舜华路交叉口东南角"},
					{name:"汉峪金谷",name1:"山东省济南市历城区经十路与舜华路交叉口东南角"},
					{name:"汉峪金谷",name1:"山东省济南市历城区经十路与舜华路交叉口东南角"},
					{name:"汉峪金谷",name1:"山东省济南市历城区经十路与舜华路交叉口东南角"},
					
				]
			}
		},
		methods: {
			
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
