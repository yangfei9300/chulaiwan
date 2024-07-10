<template>
	<view>
		<!-- <view class="topivew" :style="{
			'background-image': 'url('+activityInfo.cover+')','height':'580rpx',
			'background-size':'100% 100%'
		}">
			
		</view> -->
		
		<image class="topivew" 
		style="width: 750rpx;height: 580rpx;" 
		mode="widthFix" :src="activityInfo.cover"></image>
		
		<view class="colonn dibuoinfoview center_center"
		style="background-color: white;position: relative;top: -100rpx;"
		>
			<view style="height: 38rpx;"></view>
			<view style="font-size: 40rpx;font-weight: bold;">{{activityInfo.title}}</view>
			<view class="colonn" style="width: 750rpx;padding-left: 34rpx;">
				<view style="height: 50rpx;"></view>
				<view class="roww center_center" style="width: 750rpx;">
					<image src="/static/Component 216@2x.png" style="width: 24rpx;height: 38rpx;"></image>
					<view style="width: 12rpx;"></view>
					<view style="color: #4A4A4A;">活动时间：</view>
					<view class="allline"></view>
				</view>
				<view style="height: 12rpx;"></view>
				<view class="roww center_center" style="width: 750rpx;">
					<image src="/static/Component 216@2x.png" class="yincang1" style="width: 24rpx;height: 38rpx;">
					</image>
					<view style="width: 12rpx;"></view>
					<view>{{activityInfo.date}}</view>
					<view class="allline"></view>
				</view>
			</view>
			<view style="height: 12rpx;"></view>
			<view class="huixainss"></view>


			<view class="colonn" style="width: 750rpx;padding-left: 34rpx;">
				<view style="height: 50rpx;"></view>
				<view class="roww center_center" style="width: 750rpx;">
					<image src="/static/Component 216@2x.png" style="width: 24rpx;height: 38rpx;"></image>
					<view style="width: 12rpx;"></view>
					<view style="color: #4A4A4A;">活动地址：</view>
					<view class="allline"></view>
				</view>
				<view style="height: 12rpx;"></view>
				<view class="roww center_center" style="width: 750rpx;">
					<image src="/static/Component 216@2x.png" class="yincang1" style="width: 24rpx;height: 38rpx;">
					</image>
					<view style="width: 12rpx;"></view>
					<view>{{activityInfo.address}}</view>
					<view class="allline"></view>
				</view>
			</view>
			<view style="height: 12rpx;"></view>
			<view class="huixainss"></view>

			<view class="colonn" style="width: 750rpx;padding-left: 34rpx;">
				<view style="height: 50rpx;"></view>
				<view class="roww center_center" style="width: 750rpx;">
					<image src="/static/Component 216@2x.png" style="width: 24rpx;height: 38rpx;"></image>
					<view style="width: 12rpx;"></view>
					<view style="color: #4A4A4A;">活动人员：（{{activityInfo.user_num}}人）</view>
					<view class="allline"></view>
				</view>
				<view style="height: 12rpx;"></view>
				<view class="roww center_center" style="width: 750rpx;">
					<image src="/static/Component 216@2x.png" class="yincang1" style="width: 24rpx;height: 38rpx;">
					</image>
					<view style="width: 12rpx;"></view>
					<view style="width: 650rpx;">{{activityInfo.user}}</view>
					<view class="allline"></view>
				</view>
			</view>
			<view style="height: 44rpx;"></view>
			<view class="cuhuixains"></view>
			<view style="padding:20rpx;">
				<rich-text :nodes="activityInfo.content"></rich-text>
			</view>


			<view class="roww" style="width: 710rpx;">
				<view class="sadsrs">{{activityInfo.create_at}}</view>
				<view class="allline"></view>
				<view class="roww center_center" style="font-size: 28rpx;">
					<image src="/static/pinglun.png" style="width: 38rpx;height: 38rpx;"></image>
					<view style="width: 5rpx;"></view>
					<view style="color: #A8A8A8;">{{activityInfo.comment_num}}+</view>
				</view>
				<view style="width: 15rpx;"></view>
				<view class="roww center_center" style="font-size: 28rpx;"
				@click.stop="dianzanActivity"
				>
					<image v-if="activityInfo.is_like==1" src="/static/Component 130@2x.png" style="width: 38rpx;height: 38rpx;"></image>
					<image v-else src="/static/Component 122@2x.png" style="width: 38rpx;height: 38rpx;"></image>
					<view style="width: 5rpx;"></view>
					<view style="color: #A8A8A8;">{{activityInfo.like_num}}+</view>
				</view>
			</view>
			<view style="height: 20rpx;"></view>
			<view class="peopless roww center_center">
				<view class="w-30"></view>
				<image src="/static/Component 130@2x.png" style="width: 48rpx;height: 48rpx;margin-right: 15rpx;">
				</image>
				<image v-for="(item,index) in activityInfo.like_list" @click="toUserInfo(item)" v-if="index<7" :src="item.headimg"
					class="hewaderimg" mode="aspectFill"></image>
				<view class="allline"></view>
			</view>
			<view style="height: 32rpx;"></view>
			<view class="cuhuixains"></view>
			<view class="colonn">
				<view style="margin-left: 0rpx;margin-top: 38rpx;">评论</view>
				<view style="height: 22rpx;"></view>

				<view class="colonn" v-for="(item,index) in commList">
					<view class="h-20"></view>
					<view class="roww w-650">
						<image :src="item.headimg" mode="aspectFill" class="gwadada"></image>
						<view class="w-20"></view>
						<view class="colonn">
							<view class="username txtShowLength">{{item.nickname}}</view>
							<view style="height: 15rpx;"></view>
							<view class="contess">
								{{item.comment}}
							</view>
							<view style="height: 15rpx;"></view>
							<view class="username txtShowLength">{{item.create_at}}</view>
						</view>
					</view>
					<view style="height: 15rpx;"></view>
					<view class="huixianline"></view>
					<view style="height: 15rpx;"></view>
				</view>

			</view>


		</view>
		<view class="h-100"></view>

		<view class="roww bottomview rowsa">
			<view class="amashsas roww center_center">
				<view class="w-25"></view>
				<view class="mashangfaxian allline roww center_center">
					<input cursor-spacing="20" adjust-position v-model="conetxt" class="allline" style="color: black;" placeholder="请发言!" />
				</view>
				<view class="w-30"></view>
			</view>
			<view class="faonsg" @click.stop="addCome">发送</view>
		</view>
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				jnSize: {},
				shebeiInfo: {},
				options: {},
				activityInfo: {},
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				commList: [], //评价列表
				
				conetxt:"",//评价内容
			}
		},
		onLoad(options) {
			this.options = options;
			this.getIsToken();
			this.getNiaonang();
			this.getInfo();
			this.getCommlist();
		},
		onShareAppMessage:function(res) {
		    if (res.from == 'button') {
		        console.log(res.target, res)
		    }  
		    return {
		      title:this.activityInfo.title,
			  imageUrl:this.activityInfo.cover,
		      path:'/pages1/wqActivity/wqActivity?id='+this.options.id,//这里是被分享的人点击进来之后的页面
		    }
		},
		 onShareTimeline: function () { 
		      return {
		          title:this.activityInfo.title,
		        imageUrl:this.activityInfo.cover,
		        path:'/pages1/wqActivity/wqActivity?id='+this.options.id,//这里是被分享的人点击进来之后的页面
		      }
		  },
		methods: {
			toUserInfo(item){
				uni.navigateTo({
					url:"/pages_wode/PersonalCenter/PersonalCenter?uuid="+item.uuid
				})
			},
			dianzanActivity(){
				if(!this.token){
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					setTimeout(res=>{
						uni.navigateTo({
							url:"/pages/Login/Login"
						})
					},1000)
					return false;
				}
				
				
				
				var loginInfo=uni.getStorageSync("loginInfo");
				if(loginInfo){
					if(loginInfo.status==0){
						uni.showToast({
							title: "请先完善信息",
							icon: "none"
						})
						setTimeout(res => {
							uni.navigateTo({
								url: "/pages_yindao/yindao1/yindao1"
							})
						}, 1000)
						return false;
					}
				}
				
				var url = "/api/act/pastActLike";
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						'id': this.options.id,
						city:uni.getStorageSync("citySel"),
						
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						this.getInfo();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 返回
			backb(){
				uni.navigateBack({
					delta:1
				})
			},
			// 获取token
			getIsToken() {
				var url = "/api/IosVisitor/checkToken";
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						'token': this.token,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						var data = res.data;
						if (data.code == 0) {
							getApp().globalData.token = null;
							this.token = null;
							uni.removeStorageSync("token");
						}
						this.getCommlist();
						this.getInfo();
						setTimeout(res=>{
							this.$forceUpdate();
						},500)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			addCome(){
				if(!this.token){
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					setTimeout(res=>{
						uni.navigateTo({
							url:"/pages/Login/Login"
						})
					},1000)
					return false;
				}
				
				
				var loginInfo=uni.getStorageSync("loginInfo");
				if(loginInfo){
					if(loginInfo.status==0){
						uni.showToast({
							title: "请先完善信息",
							icon: "none"
						})
						setTimeout(res => {
							uni.navigateTo({
								url: "/pages_yindao/yindao1/yindao1"
							})
						}, 1000)
						return false;
					}
				}
				
				
				
				var loginInfo=uni.getStorageSync("loginInfo");
				if(loginInfo){
					if(loginInfo.status==0){
						uni.showToast({
							title: "请先完善信息",
							icon: "none"
						})
						setTimeout(res => {
							uni.navigateTo({
								url: "/pages_yindao/yindao1/yindao1"
							})
						}, 1000)
						return false;
					}
				}
				
				
				
				
				if(this.conetxt==""){
					uni.showToast({
						title: "请输入评价内容",
						icon: 'none'
					})
					return false;
				}
				var url = "/api/act/pastActCommentDo";
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						'id': this.options.id,
						'comment':this.conetxt,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						console.log("asd",res)
						if (res.data.code == 1) {
							uni.showToast({
								title: "评价成功",
								icon: 'none'
							})
							this.conetxt="";
							this.$forceUpdate()
							this.getCommlist();
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 获取评价列表
			getCommlist() {
				var url = "/api/sharePage/pastActCommentList";
				if (!this.token) {
					url = "/api/IosVisitor/pastActCommentList";
				}
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						'token': this.token,
						'id': this.options.id,
						'page':'1',
						num:1000,
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
							this.commList = res.data.data;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 获取活动详情
			getInfo() {
				var url = "/api/act/pastActInfo";
				if (!this.token) {
					url = "/api/IosVisitor/pastActInfo";
				}
				console.log("asd--", url);
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						'token': this.token,
						'id': this.options.id,
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
							this.activityInfo = res.data.data;
						}
					},
					fail: () => {},
					complete: () => {}
				});
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
						this.shebeiInfo = res;
					}
				});
			},
		}
	}
</script>

<style>
	@import url(wqActivity.css);
</style>