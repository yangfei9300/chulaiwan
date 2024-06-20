<template>
	<view class="content">
		
		<view class="topivew"
		:style="{
			'height':(jnSize.height+jnSize.top+20)+'px'
		}"
		>
			<view class="roww rowsb pore"
			:style="{
				top:(jnSize.top+10)+'px',
			}"
			style="padding:0rpx 25rpx;"
			>
				<image @click.stop="backb" src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (6).png" class="w-40 h-40"></image>
				<view style="font-weight: bold;" class="">系统通知</view>
				<image src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (6).png" 
				class="w-40 h-40  yincang1"></image>
			</view>
		</view>
		
		<view
		:style="{
			'height':(jnSize.height+jnSize.top+20)+'px'
		}"
		></view>
		<image class="w-750 h-490" src="https://ta.imjiayi.com/upload/upload/未标题-102@2x.png"></image>
		
		<view style="margin-top:-490rpx;">
			<view class="Past "
			 v-for="(item,index) in list" :key="index" @click="NavDetail(item.id)">
				<image class="PastCover" :src="item.cover" mode=""></image>
				<view class="PastRight colonn rowsb h-200">
					<view class="PastRight_Title">{{item.title}}</view>
					<view class="PastRight_address">地址:{{item.address}}</view>
			
					<view class="PastRight_flex">
						<view class="PastRight_flex_left">
							<image class="PastRight_flex_left_img" src="../static/wangqiNum.png" mode=""></image>
							<view class="">{{item.user_num}}人</view>
						</view>
						<view class="PastRight_right">{{item.cate}}</view>
					</view>
			
					<view class="PastRight_date  roww ">
						<view style="line-height: 40rpx;">{{item.date}}</view>
						<view class="allline"></view>
						<view class="TimeLink roww center_center">
							<image class="TimeImg" src="../../static/pinglun.png" mode=""></image>
							<view class="">{{item.comment_num}}</view>
						</view>
						<view class="w-40"></view>
						<view class="TimeLink roww center_center" >
							<image  class="TimeImg" src="../../static/xin.png" mode="">
							</image>
							<view class="">{{item.like_num}}</view>
						</view>
						<view class="w-20"></view>
					</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				page: 1,
				list: [],
				
				
				shebeiInfo: {},
				jnSize: {},
			}
		},
		onLoad() {
			this.getNiaonang();
		},
		onPullDownRefresh() {
			this.page = 1,
				this.list = [],
				this.getPast();
		},
		onReachBottom() {
			this.getPast();
		},
		mounted() {
			
		},
		onShow() {
			this.getIsToken();
		},
		methods: {
			onshowPage() {
				this.getPast()
			},  
			getIsToken() {
				var token=uni.getStorageSync("token")
				var url = "/api/IosVisitor/checkToken";
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						'token': token,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: token
					},
					success: res => {
						var data = res.data;
						if (data.code == 0) {
							getApp().globalData.token = null;
							this.token = null;
							uni.removeStorageSync("token");
						}
						if(data.data.is_reg==0){
							uni.setStorageSync("loginInfo",{'status':0})
						}
						this.onshowPage();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
			
			backb(){
				uni.navigateBack({
					delta:1
				})
			},
			getNiaonang() {
				const res = wx.getMenuButtonBoundingClientRect()
				this.jnSize = res;
				console.log(res.width)
				console.log(res.height)
				console.log(res.top)
				console.log(res.right)
				console.log(res.bottom)
				console.log(res.left)
				wx.getSystemInfo({
					success: (res) => {
					this.shebeiInfo=res;  
					}
				});
			},
			getPast() {
				
				var url = '/api/act/pastActList';
				if (!this.tokenValue) {
					url = "/api/IosVisitor/pastActList";
				}
				
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						page: this.page++,
						num: 100,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						console.log(res);
						if (res.data.data.length > 0) {
							this.list = this.list.concat(res.data.data);
							uni.stopPullDownRefresh();
						} else {
							this.page -= 1;
							uni.stopPullDownRefresh();
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			NavDetail(id) {
				uni.navigateTo({
					url: '/pages_wode/PastDetail/PastDetail?id=' + id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	
	.topivew{
		background-image: url(https://ta.imjiayi.com/upload/upload/未标题-101@2x.png);
		background-size: 100% 100%;
		width: 750rpx;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
	}
	.xiaoxiiew{
		background-image: url(https://ta.imjiayi.com/upload/upload/未标题-102@2x.png);
		background-size: 100% 100%;
		width: 750rpx;
	}
	
	.TimeImg {
		width: 38rpx;
		height: 38rpx;
		margin-right: 4rpx;
	}
	.PastRight_right {
		padding: 6rpx 14rpx;
		color: white;
		font-size: 28rpx;
		border-radius: 8rpx;
		background: #F8B800;
	}

	.PastRight_flex_left_img {
		width: 27rpx;
		height: 27rpx;
	}

	.PastRight_flex_left {
		display: flex;
		align-items: center;
		padding: 6rpx 14rpx;
		color: white;
		font-size: 28rpx;
		background: #D24E15;
		border-radius: 8rpx;
		margin-right: 12rpx;
	}

	.PastRight_flex {
		display: flex;
		/* margin-top: 20rpx; */
	}

	.PastRight_date {
		width: 454rpx;
		height: 34rpx;
		font-size: 28rpx;
		color: #676767;
		line-height: 32rpx;
	}

	.PastRight_address {
		margin: 0rpx 0;
		width: 374rpx;
		height: 34rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: #676767;
		line-height: 32rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.PastRight_Title {
		width: 348rpx;
		height: 38rpx;
		font-size: 32rpx;
		font-weight: 400;
		color: #111111;
		line-height: 38rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.PastRight {
		margin-left: 10rpx;
		font-family: Inter-Regular, Inter;
	}

	.PastCover {
		width: 240rpx;
		height: 200rpx;
		border-radius: 12rpx;
	}

	.Past {

		background: #FFFFFF;
		padding: 18rpx;
		box-shadow: 0px 0px 15px 0px rgba(17, 17, 17, 0.06);
		border-radius: 10px 10px 10px 10px;
		display: flex;
		margin: 16rpx 0;
	}

	.content {
		background-color: #FFFFFF;
		padding: 0rpx 0rpx;
	}
</style>