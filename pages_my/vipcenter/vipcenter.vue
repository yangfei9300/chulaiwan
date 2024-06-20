<template>
	<view>
		<view class='content'>
		<image class='back1' src="../static/12200@2x.png" mode=""></image>
		<view class="" style="padding: 20rpx;">
			<view class="" style="position: relative;">
				<image style="width: 100%; height: 240rpx;  margin-top: 80rpx;" src="https://ta.imjiayi.com/upload/upload/hybj.png"
					mode=""></image>
				<view class="">
					<view class="" style="display: flex;position:absolute;align-items: center;top: 135rpx;left: 20rpx;">
						<image style="width: 140rpx;height: 140rpx;border-radius: 100rpx;"
							src="../../static/indeximg/会员排名02.png" mode=""></image>
						<view class="" style="margin-left: 20rpx;">
							<view class="">小刚子</view>
							<view class="">奥利给</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 会员奖励内容 -->
			<view class="" style="background-image: linear-gradient(white ,#FCEEC7 30%,white);">
				<view class="jl">
					<view class="biaoshi" >|</view>
					<view class="jl_content" >
						<view class="jl_content1">活跃度</view>
						<view class="jl_content2">发布/参加活动可获得双倍活跃度</view>
					</view>
					<view class="jl_btn" >
						<view class="jl_btn1">
							使用
						</view>
					</view>
				</view>
				<view class="jl">
					<view class="biaoshi" >|</view>
					<view class="jl_content" >
						<view class="jl_content1">活跃度</view>
						<view class="jl_content2">发布/参加活动可获得双倍活跃度</view>
					</view>
					<view class="jl_btn" >
						<view class="jl_btn1">
							使用
						</view>
					</view>
				</view>
				<view class="jl">
					<view class="biaoshi" >|</view>
					<view class="jl_content" >
						<view class="jl_content1">活跃度</view>
						<view class="jl_content2">发布/参加活动可获得双倍活跃度</view>
					</view>
					<view class="jl_btn" >
						<view class="jl_btn1">
							使用
						</view>
					</view>
				</view>
				<view class="jl">
					<view class="biaoshi" >|</view>
					<view class="jl_content" >
						<view class="jl_content1">活跃度</view>
						<view class="jl_content2">发布/参加活动可获得双倍活跃度</view>
					</view>
					<view class="jl_btn" >
						<view class="jl_btn1">
							使用
						</view>
					</view>
				</view>
			</view>
			<button class="vbtn">开通VIP权限1</button>
	
			
		</view>
		</view>
	</view>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	page{
		
	}
	.content{
		padding: 0 30rpx;
		background-color: linear-gradient(#35322F,#1C1B18) ;
		height:100%;
	}
	.back1{
		height: 248rpx;
		position: absolute;
		left: 0;
		top: 204rpx;
		right: 0;
		z-index: -1;
	}
	.vbtn{
		background: linear-gradient(90deg, #FCD7A0 0%, #FCDA80 100%);
		    border-radius: 40rpx;
		    color: #674000;
		    margin-top: 200rpx;
		    font-size: 36rpx;
		    font-weight: 600;
		
	}
	.jl_content2{
		    margin-top: 21rpx;
	}
	.jl_content1{
		
	}
	.jl{
	        display: flex;
	        padding: 30rpx 10rpx;
	        border-bottom: 5rpx solid #E4E4E4;
	
	}
	.jl_btn1{
		    background-color: #FCDA80;
		    border-radius: 40rpx;
		    padding: 10rpx 10rpx;
		    width: 100%;
	}
	.jl_btn{
		     width: 15%;
		     text-align: center;
		     display: flex;
		     align-items: center;
	}
	.jl_content{
		width: 85%;
	}
.biaoshi{
	    width: 3%;
	    text-align: center;
	    font-weight: 600;
	    color: #f8b800;
}
</style>
