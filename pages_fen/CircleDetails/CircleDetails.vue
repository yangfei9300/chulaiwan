<template>
	<view>
		<view class="pl" v-for="(item,index) in pllist" :key="index">
			<!-- 头像 -->
			<view class="pl1">
				<image class="pl2" :src="item.avatar" mode=""></image>
			</view>
			<!-- 评论 -->
			<view class="pl3">
				<view class="pl4">{{item.name}}</view>
				<view class="pl5">
					<view class="pl6">{{item.shijian}}</view>
					<view class="pl7">{{item.qianming}}</view>
				</view>
				<!-- 内容 -->
				<view class="">
					<view class="pl9">{{item.title}}</view>
				</view>
				<view class="pl8">
					<image class="pl10" :src="item.image" mode=""></image>
					<image class="pl10" :src="item.image" mode=""></image>
					<image class="pl10" :src="item.image" mode=""></image>
				</view>
				<!-- 地址 -->
				<view class="pl12">
					<image class="pl13" src="../../static/index/address.png" mode=""></image>
					<view class="pl14">{{item.address}}</view>
				</view>
				<!-- 标签 -->
				<view class="pl15" >
					<view class="pl16" v-for="(items,indexs) in item.biaoqian">{{items}}</view>
				</view>
				<view class="pl17">
					<view class="pl18"  v-for="(itemas,indexas) in item.pluns">
						<image class="pl19" src="../../static/index/naozhong.png" mode=""></image>
						<view class="pl20">{{itemas}}</view>
					</view>
				</view>
			</view>
			<!-- 关注 -->
			<view class="pl11">关注</view>
		</view>
		<view class="detailpl">
			评论
		</view>
		<view class="detailv1">
			<view class="detailv2">
				<image class="detaiplimg" src="../../static/indeximg/hypm05.png" mode=""></image>
			</view>
			<view class="detailv3">
				<view class="detailv4">name</view>
				<view class="detailv5">10:22</view>
				<view class="detailv6">不错不错味道好极了</view>
			</view>
		</view>
		<view class="">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pllist:[
					{
						avatar:"../../static/indeximg/Ellipse%2090.png",
						name:"小绿人",
						shijian:"2021-1-1 10:22",
						qianming:"做人如果没梦想那跟咸鱼有什么区别",
						title:"我是一只酸菜鱼,又酸又菜有多余",
						image:"../../static/indeximg/最新活动02.png",
						address:"汉峪金谷",
						biaoqian:["#出来玩","#可爱猫咪","#出来玩"],
						pluns:["99+","99+","99+"]
						
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	/* detail评论 */
	.detailv6{
		color: #000000;
		    margin-top: 20rpx;
	}
	.detailv3{
		color: #9999;
	}
	.detailv2{
		width: 15%;
		text-align: center;
	}
	.detailv1{
		display: flex;
		    border-bottom: 1rpx solid #9999;
		    padding-bottom: 30rpx;
		    margin-left: 20rpx;
		    margin-right: 20rpx;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
		
	}
	.detaiplimg{
		    width: 80rpx;
		    border-radius: 50rpx;
		    height: 80rpx;
	}
	.detailpl{
		    padding: 16rpx;
		    background-color: #F6F6F6;
	}
/* 评论 */
	.pl{
		    display: flex;
		    margin: 15rpx 10rpx 50rpx 10rpx;
	}
	.pl4{
		    font-weight: 600;
	}
	.pl1{
		width: 10%;
		
	}
	.pl2{
		width: 70rpx;
		height: 70rpx;
	}
	.pl3{
		    width: 75%;
	}
	.pl13{
		    width: 20rpx;
		    height: 20rpx;
	}
	.pl14{
	    font-size: 20rpx;
	    color: #999;	
		margin-left: 5rpx;
	}
	.pl5{
		display: flex;
		color: #9999;
		    font-size: 18rpx;
	}
	.pl7{
		    margin-left: 10rpx;
			
	}
	.pl8{
		    display: flex;
		    justify-content: flex-start;
		    flex-wrap: wrap;
	}
	
	.pl9{
		    font-size: 25rpx;
			    margin: 10rpx 0;
	}
	.pl10{
	    width: 32%;
	    height: 240rpx;
	    margin-right: 6rpx;
	}
	.pl10 :nth-last-child(1):first-child{
		width: 100%;
	}
	.pl11{
		width: 10%;
		height: 36rpx;
		    background-color: #f8b800;
		    display: flex;
		    color: white;
		    justify-content: center;
		    align-items: center;
		    border-radius: 20rpx;
		    font-size: 20rpx;
		    padding: 2rpx 10rpx;
	}
	.pl12{
		display: flex;
		    align-items: center;
			    margin: 10rpx 0;

	}
	.pl13{
		  width: 25rpx;
		      height: 25rpx;
	}
	.pl15{
		display: flex;
	}
	.pl16{
		background-color: #FFF8E4;
		    color: #F8B800;
		    border-radius: 10rpx;
		    padding: 5rpx 15rpx;
		    font-size: 25rpx;
			margin-right: 20rpx;
	}
	.pl17{
		display: flex;
		    justify-content: space-between;
			margin-top: 20rpx;
	}
	.pl18{
		display: flex;
		align-items: center;
	}
	.pl19{
		    width: 30rpx;
		    height: 30rpx;
	}
</style>
