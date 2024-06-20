<template>
	<view>
		<view class="Realcontent" v-if="is_auth==1">
			<image class="realheadimg" :src="headimg" mode=""></image>
			<view class="Real">真人实名认证</view>
			<view class="Realname">
				<view class="">{{userInfo.nickname}}</view>
				<image class="renzheng" src="../static/yirenzheng.png" mode=""></image>
			</view>
			<view class="realView">
				<view class="realViewName">
					<image class="realIcon" src="../static/Name.png" mode=""></image>
					<view class="">{{list.username}}</view>
				</view>
				<view class="realViewName">
					<image class="realIcon" src="../static/shenfen.png" mode=""></image>
					<view class="">{{list.card_no}}</view>
				</view>
			</view>
			<view class="yirenzhengbtn">
				已认证
			</view>
			<view class="yirenzhengbtn1">
				<view class="yirenzhengbtn1_VIP">VIP</view>
				<view class="yirenzhengbtn1_text">认证成功7天vip已到账</view>
			</view>
		</view>
		<view class="Realcontent" v-if="is_auth==0">
			<image class="realheadimg" :src="headimg" mode=""></image>
			<view class="Real">真人实名认证</view>
			<view class="Realname">
				<view class="">{{userInfo.nickname}}</view>
				<image class="renzheng" src="../static/yirenzheng.png" mode=""></image>
			</view>
			<view class="realView">
				<view class="realViewName1">
					<image class="realIcon" src="../static/Name1.png" mode=""></image>
					<input type="text" v-model="username" placeholder-style="color:#000;" placeholder="姓       名" value="" />
				</view>
				<view class="realViewName1">
					<image class="realIcon" src="../static/shenfen1.png" mode=""></image>
					<input type="text" v-model="card_no" placeholder-style="color:#000;" placeholder="身份证号" value="" />
				</view>
			</view>
			<view class="yirenzhengbtn2" @click="OnBTN">
				立即认证
			</view>
			<view class="yirenzhengbtn1">
				<view class="yirenzhengbtn2_VIP">VIP</view>
				<view class="yirenzhengbtn2_text">实名认证成功后平台赠送7天vip</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				headimg: '',
				nickname: '',
				is_auth: null,
				card_no:'412726199609304110',
				username:'',
				list: [],
				userInfo:{},
				token:"",
			}
		},
		onLoad(options) {
			this.userInfo=uni.getStorageSync("userInfo")
			this.token=uni.getStorageSync("token")
			this.headimg = this.userInfo.headimg;
			this.nickname = this.userInfo.name;
			this.is_auth = this.userInfo.is_auth;
			this.getReal();
		},
		mounted() {
			
		},
		methods: {
			
		
			// 立即认证
			OnBTN(){
				uni.showLoading({
					title: '请稍等',
					mask: false
				});
				if(this.username.length>0 && this.card_no.length==18){
					uni.request({
						url: this.baseurl+'/api/user/userAuth',
						method: 'POST',
						header:{
						xcx:1,
							token:this.token
						},
						
						data: {username:this.username,card_no:this.card_no,
						
						city:uni.getStorageSync("citySel"),
						},
						success: res => {
							if(res.data.code==1){
								uni.showToast({
									title:"提交成功",
									icon:'none'
								})
								uni.navigateBack({
									delta: 1
								});
								uni.hideLoading();
							}else if(res.data.code==0){
								uni.showToast({
									title:res.data.info,
									icon:'none'
								})
								
							}else{
								uni.showToast({
									title:res.data.msg,
									icon:"none"
								})
							}
						},
						fail: () => {},
						complete: () => {
							uni.hideLoading();
						}
					});
				}else{
					uni.hideLoading();
					uni.showToast({
						title: '请仔细检查所填内容',
						mask:true,
						icon:"error"
					});
				}
			},
			getReal() {
				uni.request({
					url: this.baseurl + '/api/user/getUserAuth',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("认证信息", res);
						if(res.data.code==1001){
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}else if(res.data.code==1){
							this.list = res.data.data;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	.yirenzhengbtn2_text {
		font-size: 28rpx;
		color: #999;
		font-weight: 600;
	
	}
	
	.yirenzhengbtn2_VIP {
		    color: #F8b800;
		    background-color: #000;
		font-size: 28rpx;
		font-weight: 800;
		border-radius: 36rpx;
		padding: 3rpx 12rpx;
		margin-right: 12rpx;
	}
	
	.yirenzhengbtn2 {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.yirenzhengbtn2 {
		height: 110rpx;
		background: #F8B800;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.05);
		border-radius: 24rpx;
		font-size: 44rpx;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 166rpx;
		margin-bottom: 16rpx;
		width: 686rpx;
	}
	.yirenzhengbtn1_text {
		font-size: 28rpx;
		color: #999;
		font-weight: 600;

	}

	.yirenzhengbtn1_VIP {
		color: #999;
		background-color: rgba(0, 0, 0, 0.1);
		font-size: 28rpx;
		font-weight: 800;
		border-radius: 36rpx;
		padding: 3rpx 12rpx;
		margin-right: 12rpx;
	}

	.yirenzhengbtn1 {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.yirenzhengbtn {
		height: 110rpx;
		background: #EDEDED;
		box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.05);
		border-radius: 24rpx;
		font-size: 44rpx;
		color: #999999;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 166rpx;
		margin-bottom: 16rpx;
		width: 686rpx;
	}
	.realViewName1 {
		display: flex;
		align-items: center;
		font-size: 36rpx;
		color: #000;
		border-bottom: 4rpx solid #F4F4F4;
		padding: 36rpx 0;
	}
	.realViewName {
		display: flex;
		align-items: center;
		font-size: 36rpx;
		color: #999999;
		border-bottom: 4rpx solid #F4F4F4;
		padding: 36rpx 0;
	}

	.realView {
		border-radius: 44rpx;
		padding: 78rpx 40rpx;
		border: 4rpx solid #F4F4F4;
		margin-top: 78rpx;
		width: 600rpx;

	}

	.realIcon {
		width: 52rpx;
		height: 52rpx;
		margin-right: 22rpx;
	}

	.renzheng {
		width: 36rpx;
		height: 36rpx;
		margin-left: 12rpx;
	}

	.Realname {
		font-size: 36rpx;
		font-weight: 800;
		display: flex;
		align-items: center;
	}

	.Real {
		color: white;
		background-color: #F8B800;
		font-size: 24rpx;
		padding: 6rpx 14rpx;
		border-radius: 10rpx;
		margin-top: 24rpx;
		margin-bottom: 12rpx;

	}

	.realheadimg {
		width: 112rpx;
		height: 112rpx;
		border-radius: 50%;
	}

	.Realcontent {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 72rpx 0rpx;
	}
</style>
