<template>
	<view class="content">
		<view class="BJview" v-if="type==0">
			<image class="yindao2" src="../../static/Login/yindao.png" mode="widthFix"></image>
			<image class="yindao1" src="../../static/Login/yindao1.png" mode="widthFix"></image>
		</view>
		<view class="center1" :class="{center:type==0}">
			<view class="title1">
				<view class="">请选择标签（4个）</view>
				<view class="" @click="huan">换一批</view>
			</view>
			<view class="tab">
				<view class="tabitem" v-for="(item,index) in marks" :style="{'color':colorArr[index%8]}"
					@click="biaoqian(item.name)">
					{{item.name}}
				</view>
			</view>
		</view>  
		<view class="center">
			<view class="title">已选标签</view>
			<view class="tab">
				<view class="" style="position: relative;" v-for="(item,index) in arr" :key="index">
					<view class="tabitem" :style="{'color':colorArr[index%8]}" @click="biaoqian(item.name)">
						{{item}}
					</view>
					<view class="X" @click="biaoqian(item)">X</view>
				</view>

			</view>
		</view>
		<button class="btn" @click="onbtn" v-if="type==0">下一步</button>
		<button class="btn1" @click="onbtn1" :disabled="this.arr.length>0" v-if="type==1">保存
			&nbsp;&nbsp;(已选 &nbsp;{{arr.length}}&nbsp;)
		</button>
		<view style="height: 150rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
					'#673ab7', '#3f51b5', '#03a9f4',
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
				}

			},
			// 获取标签
			mark() {
				uni.request({
					url: this.baseurl + '/api/user/getUserMark',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log(res);
						this.marks = res.data.data;
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
					uni.navigateTo({
						url: '../yindao3/yindao3?type=0',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}else{
					uni.showToast({
						title: '请选择4个标签',
						icon: 'none', //将值设置为 success 或者 ''
						duration: 2000 //持续时间为 2秒
					})
				}

			},
			onbtn1() {
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
							base_marks: this.arr
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
	.X {
		position: absolute;
		top: -15rpx;
		right: 5rpx;
		background: firebrick;
		color: white;
		border-radius: 50%;
		/* padding: 0 2rpx; */
		width: 36rpx;
		height: 36rpx;
		font-size: 28rpx;
	}

	.btn1 {
		width: 660rpx;
		height: 110rpx;
		background: #FFC803;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
		border-radius: 12px 12px 12px 12px;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 52rpx;
		margin-top: 84rpx;

	}

	.btn {
		width: 376rpx;
		height: 76rpx;
		color: white;
		margin-top: 84rpx;
		background: #000000;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
		border-radius: 8rpx;
		opacity: 1;
		display: flex;
		align-items: center;
		/* text-align: center; */
		justify-content: center;
	}

	.tabitem {
		border-radius: 10rpx;
		border: 1rpx solid #DBDBDB;
		background: #FAFAFA;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 16rpx;
		margin-bottom: 20rpx;
		font-size: 36rpx;
		padding: 14rpx 28rpx;
	}

	.tab {
		padding: 29rpx 31rpx 38rpx;
		/* height: 434rpx; */
		background: #FAFAFA;
		display: flex;
		flex-wrap: wrap;
		/* justify-content: space-between; */
		text-align: center;

	}

	.acc {

		border: 1px solid #F8B800;

		background: #FFFAED;
		color: #F8B800;
	}
   
	.title1 {
		padding-left: 26rpx;
		margin-bottom: 32rpx;
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
		display: flex;
		justify-content: space-between;
	}
	.title1>view:nth-child(2){
		color:#e87f0d;
	}
	.title {
		padding-left: 26rpx;
		margin-bottom: 32rpx;
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
	}

	.center1 {
		padding-left: 36rpx;
		padding-right: 36rpx;
		padding-top: 50rpx;
	}

	.center {
		padding-left: 36rpx;
		padding-right: 36rpx;
		margin-top: 104rpx;
	}

	.yindao1 {
		width: 200rpx;
		height: 330rpx;
		right: 0;
		position: absolute;
		top: 0;
	}

	.yindao2 {
		width: 326rpx;
		height: 232rpx;
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
		background: #F8F8F8;
		padding-bottom: 70rpx;
		height: 100vh;
	}
</style>
