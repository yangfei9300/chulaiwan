<template>
	<view class="content">
		<view class="BJview" v-if="type==0">
			<image class="yindao2" src="../../static/Component 27@2x.png" mode="widthFix"></image>
			<image class="yindao1" src="../../static/Login/yindao1.png" mode="widthFix"></image>
		</view>
		<view class="center">
			<!-- <view class="title">请选择标签（4个）</view> -->
			<view class="tab">
				<view class="tabitem" v-for="(item,index) in actelist" :class="{acc:arr.includes(item.name)}"
					@click="biaoqian(item.name)">
					<image class="acteimg" :src="item.cover" mode="aspectFill"></image>
					<view class="acte_view">
						<view class="acte_name">{{item.name}}</view>
						<view class="acte_remark">{{item.remark}}</view>
					</view>
				</view>
			</view>
			<button class="btn" @click.stop="onbtn">完成</button>
			<view style="height: 50rpx;"></view>
		</view>
	</view>
</template>

<script>
	import uploadImage from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				actelist: [],
				arr: [],
				type:0,
			}
		},
		onLoad(options) {
			this.type=options.type
		},
		mounted() {
			// 获取标签
			this.acte();
		},
		methods: {
			// 获取标签
			acte() {
				uni.request({
					url: this.baseurl + '/api/act/actCate',
					method: 'POST',
					data:{
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log(res);
						this.actelist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			biaoqian(item) {
				console.log(item)
				let oaa = this.arr.includes(item);
				console.log(oaa)
				if (!oaa) {
					this.arr.push(item);
					console.log(this.arr)
				} else if (oaa) {
					let plice = this.arr.findIndex(res => {
						return res == item;
					});
					if (plice != -1) {
						console.log('不等于-1')
						this.arr.splice(plice, 1);
					} else if (plice == -1) {
						console.log("等于-1")
					}
					console.log(plice)
				}

			},
			onbtn() {
				if(this.type==0){
					let get = getApp().globalData.reg;
					get.base_interest = this.arr;
					if (get.base_interest.length > 0 && get.nickname.length > 0 && (get.base_sex == 0 || get.base_sex == 1) && get.base_birthday.length > 0 && get.headimg.length > 0 && get.base_con.length > 0 && get.base_marks.length == 4) {
						// image/xcx/
						// uni.showToast({
						// 	title:get.headimg
						// })
						uploadImage(get.headimg, 'image/xcx/',
							result => {
								uni.showToast({
									title:result
								})
								console.log("oss", result);
								get.headimg = result;
								uni.hideLoading();
								uni.request({
									url: this.baseurl + '/api/login/reg',
									header: {
										
										token: this.token
									},
									method: 'POST',
									data: {
										nickname: get.nickname,
										base_sex: get.base_sex,
										base_birthday: get.base_birthday,
										headimg: get.headimg,
										base_con: get.base_con,
										base_interest: get.base_interest,
										base_address: get.base_address,
										base_marks: get.base_marks,
										token: this.token,
										xcx:1,
																city:uni.getStorageSync("citySel"),
									},
									success: res => {
										console.log(res)
										if (res.data.info == '引导页内容完成') {
											uni.showToast({
												icon: '',
												title: '注册完成',
												duration: 2000
											});
											uni.removeStorageSync("loginInfo")
											setTimeout(() => {
												
												uni.switchTab({
													url: '/pages/index/index'
												})
											}, 2000)
										}else{
											uni.showToast({
												icon: 'error',
												title: '注册失败即将重新登录注册',
												duration: 2000
											});
											setTimeout(() => {
											uni.navigateTo({
												url: '/pages/Login/Login'
											})
											}, 2000)
										}
									},
									fail: () => {},
									complete: () => {}
								});
							}
						)
					}
				}else if(this.type==1){
					let arr=this.arr.toString()
					let page=getCurrentPages();
					page[page.length-2].$vm.UserInfo.base_interest=arr;
					uni.request({
						url: this.baseurl+'/api/user/userInterestEdit',
						method: 'POST',
						header:{xcx:1,token:this.token},
						data: {xcx:1,base_interest:this.arr,
												city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log(res.data.code==1);
							if(res.data.code==1){
								uni.navigateBack({
									delta: 1
								});
							}
						},
						fail: () => {},
						complete: () => {}
					});
					// console.log(page[page.length-2].$vm);
					
				}
	
			}
		}
	}
</script>

<style scoped>
	.btn {
		width: 376rpx;
		height: 74rpx;
		color: white;
		margin-top: 84rpx;
		margin-bottom: 40rpx;
		background: #000000;
		font-size: 35rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: Inter-Regular, Inter;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
		border-radius: 8rpx;
		opacity: 1;
	}

	.acte_remark {
		font-size: 26rpx;
		color: #575757;
		margin-top: 14rpx;
	}

	.acte_name {
		font-size: 44rpx;
		font-family: Inter-Regular, Inter;
	}

	.acte_view {
		margin-left: 34rpx;
	}

	.acteimg {
		width: 226rpx;
		height: 154rpx;
		border-radius: 20rpx;
	}

	.tabitem {
		display: flex;
		align-items: center;
		border: 1rpx solid rgba(255, 255, 255, 0);
		margin-bottom: 14rpx;
		padding: 16rpx 20rpx 20rpx 24rpx;
	}


	.acc {

		border: 1px solid #F8B800;
		border-radius: 20rpx;
		background: #FFFFFF;
		color: #F8B800;
		font-weight: 800;
	}

	.title {
		padding-left: 26rpx;
		margin-bottom: 32rpx;
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
	}

	.center {
		padding-left: 36rpx;
		padding-right: 36rpx;
		margin-top: 54rpx;
	}

	.yindao1 {
		width: 200rpx;
		height: 330rpx;
		right: 0;
		position: absolute;
		top: 0;
	}

	.yindao2 {
		width: 358rpx;
		height: 250rpx;
		position: absolute;
		top: 138rpx;
		left: 36rpx;

	}

	.BJview {
		height: 365rpx;
		position: relative;
	}

	.content {
		position: relative;
	}
</style>
