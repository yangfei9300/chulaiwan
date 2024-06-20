<template>
	<view>
		<view class="login_view">
			<image class="login_logo" src="../../static/index/denglulogo.png" mode=""></image>
			<view class="login_title">
				欢迎使用出来玩
			</view>
			<view class="login_title_2">
				珍惜每一次相遇
			</view>
		</view>
		<view class="guide_view_input">
			<input class="guide_input" type="text" v-model="nickname"  placeholder="输入一个好听的名称吧宝子" />
			<view class="sex_guide">
				<view class="sex_viwe">
					<view class="sexbj" :class="{guideclass:sex==0}" @click="sexclick(0)">
						<image class="sex_img" src="../../static/sex/sex0.png" mode=""></image>
					</view>
					<view class="sex_text">女生</view>
				</view>
				<view class="sex_viwe">
					<view class="sexbj" :class="{guideclass:sex==1}" @click="sexclick(1)">
						<image class="sex_img" src="../../static/sex/sex0.png" mode=""></image>
					</view>
					<view class="sex_text">男生</view>
				</view>
			</view>
			<button class="guide_btn" @click="guidebtn">下一步</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex: 0,
				nickname:'',
			}
		},
		methods: {
			sexclick(sex){
				// 1男0女
				this.sex=sex;
			},
			guidebtn() {
				console.log(this.sex);
				console.log(this.nickname.length);
				if(this.nickname.length>0){
					uni.navigateTo({
						url: '../guide_2/guide_2?sex='+this.sex+'&&nickname='+this.nickname,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}else{
					uni.showModal({
						title: '注册提醒',
						content: '请仔细检查内容是否填写完整',
						showCancel: false,
						cancelText: '取消',
						confirmText: '确定',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}
				
			}
		}
	}
</script>

<style scoped>
	.sexbj {
		background: url(../../static/sex/sexbjhui.png);
		background-size: cover;
		width: 166rpx;
		height: 166rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;

	}
	.guideclass{
			background: url(../../static/sex/sexbjh.png);
			background-size: cover;
			width: 166rpx;
			height: 166rpx;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
	}

	.guide_btn {
		width: 80%;
		height: 66rpx;
		color: white;
		background: #FFC803;
		box-shadow: 0rpx 0rpx 30rpx 1rpx rgba(0, 0, 0, 0.0500);
		border-radius: 15rpx;
		opacity: 1;
		margin-top: 144rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.sex_guide {
		display: flex;
		justify-content: space-between;
		width: 80%;
		margin-top: 100rpx;
	}
	.sex_text{
		    font-size: 36rpx;
		    font-weight: 600;
		    margin-top: 25rpx;
	}
	.sex_viwe {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.sex_img {
		width: 90rpx;
		height: 90rpx;

	}

	.guide_view_input {
		margin-top: 200rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.guide_input {
		border-bottom: 1rpx solid #999;
		width: 80%;
	}

	.login_view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 128rpx;
	}

	.login_logo {
		width: 130rpx;
		height: 130rpx;

	}

	.login_title {
		font-size: 43rpx;
		font-weight: 600;
		margin: 10rpx 0;

	}

	.login_title_2 {
		font-size: 36rpx;
		color: #A7A7A7;
		font-weight: 600;
	}
</style>
