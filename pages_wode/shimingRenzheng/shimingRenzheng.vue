<template>
	<view>
		<view class="colonn center_center" v-if="isShenhe==1">
			<view class="h-30"></view>
			<view class="itemview colonn">
				<view class="roww">
					<image class="imasww m-right-20" :src="userInfo.headimg"></image>
					<view class="colonn h-112 rowsa">
						<view class="zhenshiview">真人实名认证</view>
						<view class="roww center_center">
							<view class="nickanme">{{userInfo.nickname}}</view>
							<image  v-if="userInfo.is_auth==1"
							src="https://ta.imjiayi.com/upload/upload/2@2x.png" 
							class="w-30 h-30 m-left-15"></image>
							
							<image  v-if="userInfo.is_avatar==1&&userInfo.base_sex==1" 
							class="w-30 h-30 m-left-15"
							src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png"
							 >
							</image>
							<image  v-if="userInfo.is_avatar==1&&userInfo.base_sex==0"
							class="w-30 h-30 m-left-15"
							src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png"
							 >
							</image>
							<view class="allline"></view>
							
						</view>
					</view>
				</view>
				<view class="h-42"></view>
				<view class="colonn">
					<view class="roww">
						<image class="w-40 h-40"
							src="https://ta.imjiayi.com/upload/upload/未认证_slices/提示 8@2x.png"></image>
						<view class="w-18"></view>
						<view class="togaanau">提高安全性，为线下聚会保驾护航</view>
					</view>
					<view class="h-16"></view>
					<view class="roww">
						<image class="w-40 h-40"
							src="https://ta.imjiayi.com/upload/upload/未认证_slices/177会员、vip (1) 6@2x.png"></image>
						<view class="w-18"></view>
						<view class="togaanau">实名认证成功后平台赠送7天vip</view>
					</view>
				</view>
				<view class="h-38"></view>
				<view class="renzhnegsucc" v-if="userInfo.is_auth==1">认证成功</view>
				<view class="renzhnegsucc1" v-else @click.stop="torenzhneg">立即认证</view>
			</view>
			<view class="h-30"></view>
			<view class="itemview colonn">
				<view class="roww">
					<image class="imasww m-right-20" :src="userInfo.headimg"></image>
					<view class="colonn h-112 rowsa">
						<view class="zhenshiview">真人头像认证</view>
						<view class="roww center_center">
							<view class="nickanme">{{userInfo.nickname}}</view>
							<image  v-if="userInfo.is_auth==1"
							src="https://ta.imjiayi.com/upload/upload/2@2x.png" 
							class="w-30 h-30 m-left-15"></image>
							
							<image  v-if="userInfo.is_avatar==1&&userInfo.base_sex==1" 
							class="w-30 h-30 m-left-15"
							src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png"
							 >
							</image>
							<image  v-if="userInfo.is_avatar==1&&userInfo.base_sex==0"
							class="w-30 h-30 m-left-15"
							src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png"
							 >
							</image>
							<view class="allline"></view>
						</view>
					</view>	</view>
				<view class="h-42"></view>
				<view class="colonn">
					<view class="roww">
						<image class="w-40 h-40"
							src="https://ta.imjiayi.com/upload/upload/未认证_slices/提示 8@2x.png"></image>
						<view class="w-18"></view>
						<view class="togaanau">提高真实性和可信度，跟“照骗”说拜拜</view>
					</view>
					<view class="h-16"></view>
					<view class="roww">
						<image class="w-40 h-40"
							src="https://ta.imjiayi.com/upload/upload/未认证_slices/177会员、vip (1) 6@2x.png"></image>
						<view class="w-18"></view>
						<view class="togaanau">实名认证成功后平台赠送7天vip</view>
					</view>
					<view class="h-16"></view>
					<view class="roww">
						<image class="w-40 h-40"
							src="https://ta.imjiayi.com/upload/upload/未认证_slices/225默认头像 2@2x.png"></image>
						<view class="w-18"></view>
						<view class="togaanau">请确保认证照片与您的头像均为本人</view>
					</view>
				</view>
				<view class="h-38"></view>
				<view class="renzhnegsucc" v-if="userInfo.is_avatar==1">认证成功</view>
				<view class="renzhnegsucc1" v-else
				@click.stop="selimg"
				>立即认证</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uploadImage from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	export default {
		data() {
			return {
				userInfo:{},
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				isShenhe:"",
			}
		},
		onLoad() {
			this.userInfo=uni.getStorageSync("userInfo")
		},
		onShow() {
			this.getShenhe();
		},
		methods: {
			getShenhe(){
				var url = "https://ta.imjiayi.com/api/version/xcx";
				uni.request({
					url:  url,
					method: 'POST',
					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						console.log("是否",res);
						// this.isShenhe=2;
						this.isShenhe=res.data.data;
						
					},
					fail: () => {},
					complete: () => {}
				});
			},
			selimg(){
				uni.chooseImage({
					count:1,
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						this.uploadimg(tempFilePaths[0])
					}
				});
			},
			uploadimg(img){
				uploadImage(img, 'image/xcx/',
					result => {
						console.log("上海传结果",result)
						this.torenzhengTouxiang(result)
					}
				)
			},
			torenzhengTouxiang(avatar){
				uni.request({
					url: this.baseurl + '/api/user/userAvatar',
					method: 'POST',
					data: {
						avatar:avatar,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token,
					},
					success: res => {
						if(res.data.code==1){
							uni.showToast({
								title:"头像提交成功",
								icon:'none'
							})
						}else if(res.data.code==0){
							uni.showToast({
								title:res.data.info,
								icon:'none'
							})
						}else {
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			torenzhneg(){
				uni.navigateTo({
					url:"/pages_wode/RealName/RealName?headimg="+this.userInfo.headimg+"&nickname="+this.userInfo.nickname+"&is_auth="+this.userInfo.is_auth
				})
			},
		}
	}
</script>

<style>
	@import url(shimingRenzheng.css);
</style>