<template>
	<view>
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
				<view style="font-weight: bold;" class="">往期活动</view>
				<image src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (6).png" 
				class="w-40 h-40 yincang1"></image>
			</view>
		</view>
		
		<view class="colonn" >
			<view class="topivew1"
			:style="{
				'height':(jnSize.height+jnSize.top+40)+'px'
			}"
			></view>
			<image class="w-750 h-490" style="margin-top: -10rpx;"
			src="https://ta.imjiayi.com/upload/upload/未标题-29563@2x.png"></image>
			<view class="colonn" style="padding: 20rpx;margin-top: -500rpx;">
				<view class="roww" style="margin-bottom: 52rpx;" v-for="(item,index) in wqActivityList"
				@click.stop="toInfo(item)"
				>
					<image class="ledrimg" mode="aspectFill"  :src="item.cover"></image>
					<view class="colonn">
						<view class="titlea txtShowLength">
							{{item.title}}
						</view>
						<view style="height: 18rpx;"></view>
						<view class="jieshis">{{item.address}}</view>
						<view style="height: 18rpx;"></view>
						<view class="roww">
							<view class="renview center_center roww">
								<image  src="/static/wodeicon.png" style="width: 30rpx;height: 30rpx;"></image>
								<view class="">{{item.user_num}}人</view>
							</view>
							<view style="width: 20rpx;"></view>
							<view class="renview center_center roww" style="background-color: #F8B800;">
								<view class="">{{item.cate}}</view>
							</view>
						</view>
						<view style="height: 18rpx;"></view>
						<view class="roww">
							<view class="sadsrs">{{item.date}}</view>
							<view class="allline"></view>
							<view class="roww center_center" style="font-size: 28rpx;">
								<image src="/static/pinglun.png" style="width: 38rpx;height: 38rpx;"></image>
							<view style="width: 5rpx;"></view>
								<view
								style="color: #A8A8A8;"
								>{{item.comment_num}}+</view>
							</view>
							<view style="width: 15rpx;"></view>
							<view class="roww center_center" style="font-size: 28rpx;">
								<image src="/static/Component 122@2x.png" style="width: 38rpx;height: 38rpx;"></image>
							<view style="width: 5rpx;"></view>
								<view
								style="color: #A8A8A8;"
								>{{item.like_num}}+</view>
							</view>
						</view>
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
					jnSize: {},
					shebeiInfo:{},
					
					wqActivityList:[],
					baseurl: getApp().globalData.baseurl,
					token: getApp().globalData.token,
			}
		},
		onLoad() {
			this.getNiaonang();
			this.getWqActivity();
		},
		onShareAppMessage:function(res) {
		    if (res.from == 'button') {
		        console.log(res.target, res)
		    }  
		    return {
		   //    title:this.wqActivityList[0].title,
			  // imageUrl:this.wqActivityList[0].cover,
		   //     path:'/pages1/wqActivity/wqActivity?id='+this.wqActivityList[0].id,//这里是被分享的人点击进来之后的页面
		    title:"往期活动",
		    imageUrl:"https://jiayiwangluo.oss-cn-beijing.aliyuncs.com/image/xcx/171151604849876.png",
		     path:'/pages1/activityWQList/activityWQList?id='+this.wqActivityList[0].id,//这里是被分享的人点击进来之后的页面
			}
		},
		 onShareTimeline: function () { 
		      return {
		        title:"往期活动",
		        imageUrl:"https://jiayiwangluo.oss-cn-beijing.aliyuncs.com/image/xcx/171151604849876.png",
		         path:'/pages1/activityWQList/activityWQList?id='+this.wqActivityList[0].id//这里是被分享的人点击进来之后的页面
		      }
		  },
		methods: {
			
			toInfo(item){
				uni.navigateTo({
					url:"/pages1/wqActivity/wqActivity?id="+item.id
				})
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
			// 获取往期列表哦
			getWqActivity() {
				var url = "/api/act/pastActList";
				if (!this.tokenValue) {
					url = "/api/IosVisitor/pastActList";
				}
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						'token': this.token,
						'num':100000,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						var data = res.data;
						if (data.code == 1) {
							console.log("往期活动", res);
							this.wqActivityList = res.data.data;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
		}
	}
</script>

<style>
@import url(activityWQList.css);
</style>
