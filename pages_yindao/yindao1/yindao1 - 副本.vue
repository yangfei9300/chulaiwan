<template>
	<view class="content">
		<image class="yindao2" src="http://image.imjiayi.com/01 1@2x.png" mode="widthFix"></image>
		<image class="yindao1" src="http://ysv.zjhaly.top/chulaiwan/login/yindao1.png" mode="widthFix"></image>
		<view class="yindao3">
			<input class="nicheng" type="text" placeholder="想一个好听的昵称吧" placeholder-style="color:#f8b800;" v-model="nickname" />
			<view class="sex_view">
				<image class="sex" v-if="sex==1" src="../../static/Login/nxx.png" mode="aspectFill" @click="sex=1;"></image>
				<image class="sex" v-if="sex==1" src="../../static/Login/nw.png" mode="aspectFill" @click="sex=0"></image>
				<image class="sex" v-if="sex==0" src="../../static/Login/nwx.png" mode="aspectFill" @click="sex=1"></image>
				<image class="sex" v-if="sex==0" src="../../static/Login/nx.png" mode="aspectFill" @click="sex=0"></image>
			</view>
			<button class="btn" @click="onbtn">下一步</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			sex:1,
			nickname:'',
			}
		},
		watch:{
			sex(old,vld){
				// console.log(old)
			}
		},
		methods: {
		onbtn(){
			let get =getApp().globalData.reg; 
			get.nickname=this.nickname;
			get.base_sex=this.sex;
			console.log(get.nickname.length, get.base_sex)
			
			if(get.nickname.length>0 && (get.base_sex==0 ||get.base_sex==1)){
				uni.navigateTo({
					url: '../yindao2/yindao2',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				// uni.reLaunch({
				// 	url: '/pages/Login/Login'
				// })
			}else{
				uni.showToast({
					title: '请完善昵称',
					icon: 'none', //将值设置为 success 或者 ''
					duration: 2000 //持续时间为 2秒
				})
			}
		
		}
		}
	}
</script>

<style scoped>
	.btn{
		width: 376rpx;
		height: 76rpx;
		color: white;
		margin-top: 64rpx;
		background: #000000;
		box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.05);
		border-radius: 8rpx;
		opacity: 1;
		display: flex;
		align-items: center;
		/* text-align: center; */
		justify-content: center;
	}
	.sex{
		width: 274rpx;
		height: 90rpx;
	}
	.sex_view{
		display: flex;
		    justify-content: space-between;
			margin-top: 64rpx;
	}
	.nicheng{
		width: 558rpx;
		height: 90rpx;
		border-radius: 50rpx;
		font-size: 32rpx;
		color: #F8B800;
		background-color: #000000;
		text-align: center;
	}
	.yindao3{
		position: absolute;
		top: 640rpx;
		left: 98rpx;
		right: 98rpx;
		/* background-color: #007AFF; */
	}
	.yindao1 {
		width: 200rpx;
		height: 194rpx;
		right: 0;
		position: absolute;
		top: 0;
	}

	.yindao2 {
		width:326rpx;
		height: 194rpx;
		position: absolute;
		top: 138rpx;
		left: 78rpx;

	}

	.content {
		position: relative;
	}
</style>
