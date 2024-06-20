<template>
	<view class="content">
		<view class="colonn">
			<view class="pagensa"></view> 
			
			<view class="topima pore">
				<image :src="Image[0]" style="width: 750rpx;height: 750rpx;"></image>
				<view class="poab colonn " style="top: 0rpx;left: 0rpx;width: 750rpx;height: 750rpx;">
					<view class="colonn" style="margin-left: 44rpx;">
						<view style="height: 182rpx;"></view>
						<view class="bianjiziliao">编辑资料</view>
						<view style="height: 12rpx;"></view>
						<view style="font-size: 32rpx;">请选择四个最能描述您的标签</view>
						<view style="height:160rpx;"></view>
					</view>
				</view>
			</view>
			<view class="colonn " style="z-index: 100;width: 662rpx;margin-left: 44rpx;margin-top: -350rpx;">
				<view class="roww">
					<view>请选择标签（4个）</view>
					<view class="allline"></view> 
					<view @click="huan">换一批</view>
				</view>
				<view style="height: 32rpx;"></view>
				<view class="huanhang">
					<view class="tabitem" v-for="(item,index) in marks" 
					:style="{
						'color':colorArr[index%8],
						'background-color':colorArrRgba[index%8],
					}"
						@click="biaoqian(item.name)">
						{{item.name}}
					</view>
				</view>
				<view style="height: 30rpx;"></view>
				<view class="roww">
					<view>已选标签</view>
					<view class="allline"></view> 
					<!-- <view>换一批</view> -->
				</view>
					<view style="height: 32rpx;"></view>
				<view class="huanhang">
					<view class="" style="position: relative;" v-for="(item,index) in arr" :key="index">
						<view class="tabitem" 
						:style="{
							'color':colorArr[index%8],
							'background-color':colorArrRgba[index%8],
						}"
						
						@click="biaoqian(item.name)">
							{{item}}
						</view>
						<view class="X" @click="biaoqian(item)">X</view>
					</view>
				
				</view>
				
				<view style="height: 90rpx;"></view>
				
				<view class="xiayibu" @click="onbtn">下一步</view>
				<view style="height: 45rpx;"></view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				Image: [
					'https://ta.imjiayi.com/upload/upload/chongfu/01 1@2x.png',
					'https://ta.imjiayi.com/upload/upload/chongfu/4444@2x.png', //男
					'https://ta.imjiayi.com/upload/upload/chongfu/06@2x.png', //女
				],
				
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				marks: [],
				arr: [],
				type: 0,
				page: 1,
				page1: 1,
				colorArr: [
					'#f44336', '#9c27b0', '#ff9800', '#2196f3', '#ffeb3b', '#00bcd4', '#8bc34a',
					'#009688', '#4caf50', '#cddc39', '#ffc107', '#ff9800', '#ff5722',
					'#795548', '#9e9e9e', '#e91e63', '#607d8b',
					'#673ab7', '#3f51b5', '#03a9f4','#2196f3',
				],
				colorArrRgba: [
					'rgba(244, 67, 54,0.2)', 
					'rgba(156, 39, 176,0.2)', 
					'rgba(255, 152, 0,0.2)', 
					'rgba(33, 150, 243,0.2)', 
					'rgba(255, 235, 59,0.2)', 
					'rgba(0, 188, 212,0.2)', 
					'rgba(139, 195, 74,0.2)', 
					'rgba(0, 150, 136,0.2)', 
					'rgba(76, 175, 80,0.2)', 
					'rgba(205, 220, 57,0.2)', 
					'rgba(255, 193, 7,0.2)', 
					'rgba(255, 87, 34,0.2)', 
					'rgba(121, 85, 72,0.2)', 
					'rgba(158, 158, 158,0.2)', 
					'rgba(233, 30, 99,0.2)', 
					'rgba(96, 125, 139,0.2)', 
					'rgba(103, 58, 183,0.2)', 
					'rgba(63, 81, 181,0.2)', 
					'rgba(3, 169, 244,0.2)', 
					'rgba(33, 150, 243,0.2)', 
				],
			}
		},
		onLoad(options) {
			this.type = options.type
		},
		mounted() {
			// 获取标签
			this.mark();
		},
		methods: {
			// 换一批
			huan() {
				if (this.page <= this.page1) {
					uni.request({
						url: this.baseurl + '/api/user/getUserMarkNew',
						method: 'POST',
						data: {
							page: this.page++
						},
						header: {
							xcx:1,
							token: this.token
						},
						success: res => {
							console.log("换一批", res.data.data);
							this.marks = res.data.data.list;
							this.page1 = res.data.data.totalPage;
						},
						fail: () => {},
						complete: () => {}
					});
				} else {
					this.page = 1;
					uni.request({
						url: this.baseurl + '/api/user/getUserMarkNew',
						method: 'POST',
						data: {
							page: this.page++,
							
							city:uni.getStorageSync("citySel"),
						},
						header: {
							xcx:1,
							token: this.token
						},
						success: res => {
							console.log("换一批", res.data.data);
							this.marks = res.data.data.list;
							this.page1 = res.data.data.totalPage;
						},
						fail: () => {},
						complete: () => {}
					});
				}

			},
			// 获取标签
			mark() {
				uni.request({
					url: this.baseurl + '/api/user/getUserMark',
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
						if(res.data.code==1){
								this.marks = res.data.data;
						}else{
							uni.showToast({
								title:res.data.info
							})
						}
					
					},
					fail: () => {},
					complete: () => {}
				});
			},
			biaoqian(item) {
				console.log(item)
				let oaa = this.arr.includes(item);
				console.log(oaa)
				if (!oaa && this.arr.length < 4) {
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
				let get = getApp().globalData.reg;
				get.base_marks = this.arr;

				console.log(get);
				if (get.base_marks.length == 4) {
					if(this.type==1){
						this.onbtn1(123);
						// uni.navigateBack({
						// 	delta:1
						// })
					}else{
						uni.navigateTo({
							url: '../yindao3/yindao3?type=0',
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
					}
					
				}else{
					uni.showToast({
						title: '请选择4个标签',
						icon: 'none', //将值设置为 success 或者 ''
						duration: 2000 //持续时间为 2秒
					})
				}

			},
			onbtn1(type) {
				if (this.arr.length > 0) {
					let page = getCurrentPages();
					page[page.length - 2].$vm.UserInfo.base_marks = this.arr;
					uni.request({
						url: this.baseurl + '/api/user/userMarksEdit',
						method: 'POST',
						header: {
							xcx:1,
							token: this.token
						},
						data: {
							base_marks: this.arr,
						city:uni.getStorageSync("citySel"),
						},
						success: res => {
							if (res.data.code == 1) {
								uni.showToast({
									title: res.data.info,
									mask: true,
									icon: 'none',
									success() {
										uni.navigateBack({
											delta: 1
										});
									}
								});
							}
						},
						fail: () => {},
						complete: () => {}
					});

				} else {
					uni.showToast({
						title: '请选择标签',
						mask: true,
						icon: 'none'
					});
				}

			}
		}
	}
</script>

<style scoped>
	@import url(yindao2.css);
</style>
