<template>
	<view class="content">
		<!-- 背景图片 -->
		<image v-if="token" class="Mybeijing" @click="Show=true" 
		:src="UserInfo.base_bgi+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'" mode=""></image>
		<image v-else class="Mybeijing" @click="Show=true"
		:src="Bgi[0]+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'" mode=""></image>
		
		
		<image class="RightTopGren" @click="NavCenter" 
		src="http://ysv.zjhaly.top/chulaiwan/my/gerenzhongxin.png" mode=""></image>
		<view class="RightTop">
			<image class="RightTopImg" @click="Edit()" src="../../static/My/bianji1.png" mode=""></image>
			<image class="RightTopImg" @click="NavGo(3)" src="../../static/My/tongzhi.png" mode=""></image>
		</view>
		<view class="MyView">
			<view class="Avatar">
				<view class="AvatarTow colonn center_center" @click="FanAvatar(UserInfo.headimg)">
					<image class="AvatarImg" 
					style="border-radius: 50%;"
					:src="UserInfo.headimg" v-if="UserInfo.headimg" mode="aspectFill"></image>
					<image class="AvatarImg"
					src="/static/1696918010078.jpg" v-else mode="aspectFill"></image>
					
					
 					<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 297@2x.png"
 					class="w-118 h-50 " style="margin-top:-20rpx;"  v-if="UserInfo.is_vip==1"
 					></image>
 					<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 298@2x.png"
 					class="w-118 h-50 "  style="margin-top:-20rpx;"   v-if="UserInfo.is_vip==2"
 					></image>
					
					
					<!-- <image class="AvatarKuang" src="../../static/My/touxiangkuang.png" mode=""></image> -->
					<!-- <view class="renzhengView" v-if="UserInfo.is_auth==0">
						<image class="renzheng" src="../../static/My/renzheng.png" mode=""></image>
						<view class="">暂未认证</view>
					</view>
					<view class="renzhengView" v-if="UserInfo.is_auth==1">
						<image class="renzheng" src="../../static/My/yirenzheng.png" mode=""></image>
						<view class="">已认证</view>
					</view> -->
					
				</view>
				<view class="AvatarRight">
					<!-- 关注粉丝 -->
					<view class="AvatarView">
						<view class="AvatarViewContent" @click="NavFollow">
							<view class="AvatarNum">{{UserInfo.follow}}</view>
							<view class="AvatarTitle">关注</view>
						</view>
						<view class="AvatarViewContent" @click="NavFans">
							<view class="AvatarNum">{{UserInfo.fans}}</view>
							<view class="AvatarTitle">粉丝</view>
						</view>
						<view class="AvatarViewContent" @click="NavActivity">
							<view class="AvatarNum">{{UserInfo.base_liveness}}</view>
							<view class="AvatarTitle">活跃度</view>
						</view>

					</view>
					<!-- 签名昵称 -->
					<view class="" v-if="UserInfo.nickname">
						<view class="AvatarName">
							<view class="AvatarNameName">{{UserInfo.nickname}}</view>
							<image v-if="UserInfo.is_vip==1" class="AvatarXVIP" src="../../static/My/XVIP.png" mode="">
							</image>
						</view>
						<view class="AvatarName" @click="Edit()">
							<view class="AvatarNametitle">{{UserInfo.base_sign?UserInfo.base_sign:'出来玩就现在~'}}</view>
							<image class="Avatarbinaji" src="../../static/My/bianji.png" mode=""></image>
						</view>
					</view>
					<view class="" v-else>
						<view class="AvatarName">
							<view  style="background-color: #F8B800;padding:10rpx 25rpx;font-size:30rpx;	border-radius: 20rpx;position: relative;bottom: 20rpx;left:25rpx;" @click="toLogin">点击登录</view>
						</view>
						
					</view>
				</view>
			</view>
			<!-- 会员中心 -->
			<image class="VIP" @click.stop="toVip()" style="width: 694rpx;height: 104rpx;" 
			src="https://jiayiwangluo.oss-cn-beijing.aliyuncs.com/page/user_img1.png" mode=""></image>
			<!-- <image class="VIP"  @click.stop="toshop"  src="https://ta.imjiayi.com/upload/upload/商家入驻 6@2x.png"
			 style="width: 694rpx;height: 104rpx;margin-top:20rpx;"  
			 mode=""></image> -->
			<!-- 八大跳转 -->
			<!-- Nav -->
			<view class=" huanhang ">
				<block v-if="isShenhe==1">
					<view class="NavView" v-for="(Nav,Navindex) in MYNav"
					:key="Navindex" @click="NavGo(Nav.id)">
						<image class="NavImg" :src="Nav.img" mode=""></image>
						<view class="NavName">{{Nav.name}}</view>
					</view>
				</block>
				<block v-else>
					<view class="NavView" v-for="(Nav,Navindex) in MYNav"
					:key="Navindex" @click="NavGo(Nav.id)" v-if="Navindex!=5">
						<image class="NavImg" :src="Nav.img" mode=""></image>
						<view class="NavName">{{Nav.name}}</view>
					</view>
				</block>
				
			</view>
			<!-- 往期活动 -->
			<image class="Wangqi" src="https://jiayiwangluo.oss-cn-beijing.aliyuncs.com/page/user_img2.png" mode="" @click="unavPast()"></image>
		</view>
		<!-- 背景图片更换弹窗 -->
		<view class="TT" v-if="Show" @click="Show=false"></view>
		<view class="TTView" v-if="Show">
			<view class="TTViewTitle">默认封面</view>
			<scroll-view class="Scroll" scroll-x="true">
				<view class="ScrollView" v-for="(item,index) in Bgi" :key="index">
					<image class="ScrollImg" @click="OnBgi(item)" :src="item" mode=""></image>
					<image class="Scrollxuanzhong" v-if="item==UserInfo.base_bgi" src="../../static/My/xuanzhong.png"
						mode=""></image>
				</view>
			</scroll-view>
			<view class="MyBtnView">
				<image @click="OnMyBtn" class="MyBtn" src="../../static/My/zidingyiBtn.png" mode="widthFix"></image>
			</view>
		</view>
		<!-- 底部tabbar -->
		<view class="tabbar" style="z-index:100 ;">
			<view class="tabbar_for" v-for="(item,index) in tabbarlist" :key="index" @click="navswich(item.id)">
				<image class="tabbar_img" :class="{tabbar_img_3:item.id==2}" :src="item.img" mode=""></image>
				<view class="tabbar_name" :class="{tabbar_active:item.id==4}">
				<block v-if="index!=2">{{item.name}}</block>
				</view>
			</view>
		</view>
		
		<!-- <image src="https://ta.imjiayi.com/upload/upload/Component 302@2x.png" class="w-126 h-126 myxaiosa" @click="showApp"
		></image> -->
		
		<loadApp v-if="showApp"  @closeClick="showLoadApp"></loadApp>
		
		
		<image src="https://ta.imjiayi.com/upload/upload/Component 302@2x.png"
			class="w-126 h-126 myxaiosa" @click="showLoadApp()"></image>
		
		
	</view>
</template>

<script>
	import uploadImg from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				uuid: getApp().globalData.uuid,
				// 背景图组
				Bgi: [],
				// 个人信息
				UserInfo: [],
				// 八个按钮
				MYNav: [{
						id: 1,
						img: '../../static/My/huodong.png',
						name: '活动中心',
					},
					{   
						id: 2,
						img: '../../static/My/qiandao.png',
						name: '签到',
					},
					{
						id: 3,
						img: '../../static/My/xiaoxi.png',
						name: '消息通知',
					},
					{
						id: 4,
						img: 'https://ta.imjiayi.com/upload/upload/Component 138@2x.png',
						name: '钱包',
					},
					
					{
						id: 9,
						img: 'https://ta.imjiayi.com/upload/upload/Component 134@2x.png',
						name: '商城',
					},{
						id: 5,
						img: '../../static/My/shiming.png',
						name: '实名认证',
					},
					{
						id: 7,
						img: '../../static/My/system.png',
						name: '系统设置',
					},{
						id: 6,
						img: '../../static/My/fankui.png',
						name: '意见反馈',
					},
				],
				// 底部tabbar
				tabbarlist: [{
						id: 0,
						img: "../../static/TabImg/tabbar11.png",
						name: "首页"
					},
					{
						id: 1,
						img: "../../static/TabImg/tabbar22.png",
						name: "活动"
					},
					{
						id: 2,
						img: "../../static/TabImg/fabu.png",
						name: "发布"
					},
					{
						id: 3,
						img: "../../static/TabImg/quanzi1.png",
						name: "圈子"
					},
					{
						id: 4,
						img: "../../static/TabImg/tabbar33.png",
						name: "我的"
					},
				],
				Show: false,
				
				
				showApp:false,
				isShenhe:"",
			}
		},
		onShow() {
				this.getShenhe();
			// var token=uni.getStorageSync("token");
			// if(token){
			// 	this.token=token;
			// 	this.getUserInfo();
			// }else
			// {
			// 	uni.showToast({
			// 		title:"请先登录",icon:"non",  
			// 	})e 
			// 	setTimeout(res => {
			// 		uni.navigateTo({
						
			// 			url:"/pages/Login/Login"
			// 		})  从
			// 	}, 1000)  吃饭
			var token=uni.getStorageSync("token");
			if(token){
				this.token=token;
			}
				this.getIsToken()
			// }
			
		},
		
		mounted() {
			this.getIsToken()
			this.getBgi();
			// if(this.token){
			// 	this.getUserInfo();
			// }
		},
		onLoad() {
		
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
			
			toLogin(){
						uni.navigateTo({
							
							url:"/pages/Login/Login"
						})  
			},
			hideview(){},
			showLoadApp(){ 
				this.showApp=!this.showApp;
			},
			
			toRemaaa(){
				uni.navigateTo({
					url:"/pages_wode/shimingRenzheng/shimingRenzheng"
				})
			},
			
			toshop(){
				uni.navigateTo({
					url:"/pages1/shopAdd/shopAdd"
				})
			},
			toVip(){
				uni.navigateTo({
					url:"/pages_wode/vip/vip"
				})
			},
			// showApp(){
			// 	uni.showToast({
			// 		title:"APP",
			// 		icon:"none"
			// 	})
			// },
			// 八大板块跳转
			NavGo(id){
				console.log(id)
				if(id==1){
					uni.navigateTo({
						url: '../../pages_wode/action/action',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}else if(id==2){
					
					uni.navigateTo({
						url: '/pages1/qiandao/qiandao',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}else if(id==3){
					uni.navigateTo({
						url: '../../pages_wode/notification/notification',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					
				}else if(id==4){
					
				}else if(id==5){
					this.showLoadApp();
					
					return false;
					let user=this.UserInfo;
					// uni.navigateTo({
					// 	url: `../../pages_wode/RealName/RealName?headimg=${user.headimg}&&name=${user.nickname}&&is_auth=${user.is_auth}`,
					// 	success: res => {},
					// 	fail: () => {},
					// 	complete: () => {}
					// });
					this.toRemaaa();
				}else if(id==6){
					uni.navigateTo({
						url: '../../pages_wode/Feedback/Feedback',
						success: res => {},
						fail: () => {},
						complete: () => {}  
					});
				}else if(id==7){
					uni.navigateTo({
						url: '../../pages_wode/system/system',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}else if(id==9){
					// uni.showToast({
					// 	title:"敬请期待",
					// 	icon:"none"
					// })
					this.showLoadApp();
				}
			},
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
						this.getUserInfo();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 个人信息
			getUserInfo() {
				var url=this.baseurl + '/api/user/getUserInfo';
				var token=uni.getStorageSync("token")
				if(!token){
					url=this.baseurl + '/api/IosVisitor/getUserInfo';
				}
				var uuid=uni.getStorageSync("uuid");
				uni.request({
					url: url,
					method: 'POST',
					data: {
						uuid: uuid,city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log("个人信息", res);
						this.UserInfo = res.data.data;
						uni.setStorageSync("userInfo",this.UserInfo)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 背景图组
			getBgi() {
				var url = '/api/user/userBgi';
				if (!this.tokenValue) {
					url = "/api/IosVisitor/userBgi";
				}
				
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log("背景图组", res);
						this.Bgi = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 更换背景图片
			OnBgi(Src) {
				this.UserInfo.base_bgi = Src;
				uni.showLoading({
					mask: true,
					title: '加载中...'
				});
				
				
				var url = '/api/user/userBgiEdit';
				if (!this.tokenValue) {
					url = "/api/IosVisitor/userBgiEdit";
				}
				
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						base_bgi: Src,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("修改背景图片", res);
						this.Show = false;
						uni.hideLoading();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 更换自定义背景图片
			OnMyBtn() {
				let _this = this;
				if (_this.UserInfo.is_vip == 1) {
					// 可以更换背景图片
					uni.chooseImage({
						count: 1,
						sourceType: 'album',
						success(res) {
							console.log("选择图片", res);
							res.tempFilePaths[0];
							uni.showLoading({
								mask: true,
								title: '正在更换',
							});
							uploadImg(res.tempFilePaths[0], 'image/xcx/',
								result => {
									console.log("上传图片", result);
									
									var url = '/api/user/userBgiEdit';
									if (!this.tokenValue) {
										url = "/api/IosVisitor/userBgiEdit";
									}
									
									uni.request({
										url: _this.baseurl + url,
										method: 'POST',
										header: {
											xcx:1,
											token: _this.token
										},
										data: {
											base_bgi: result
										},
										success: res => {
											console.log("修改背景图片", res);
											_this.UserInfo.base_bgi = result;
											_this.Show = false;
											uni.hideLoading();
										},
										fail: () => {},
										complete: () => {}
									});
								})
						}
					})
				} else if (_this.UserInfo.is_vip == 0) {
					// 不可更换
					uni.showToast({
						title: '请开通VIP解锁此功能',
						mask: true,
						icon: 'error',
					});
				}
			},
			// 跳转至关注列表
			NavFollow(){
				uni.navigateTo({
					url: '../../pages_wode/follow/follow',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转至粉丝列表
			NavFans(){
				uni.navigateTo({
					url: '../../pages_wode/Fans/Fans',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转至活跃度
			NavActivity(){
				// is_vip=${UserInfo.is_vip}&&headimg=${UserInfo.headimg}&&nickname=${UserInfo.nickname}&&base_liveness=${UserInfo.base_liveness}
				let User=JSON.stringify(this.UserInfo)
				uni.navigateTo({
					url: `../../pages_wode/Activity/Activity?UserInfo=${User}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			Edit(){
				
				
				
				
				// 跳转至编辑资料页
				let User=JSON.stringify(this.UserInfo);
				uni.navigateTo({
					url: '../../pages_wode/userInfoEdit/userInfoEdit?UserInfo='+User,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转往期活动列表
			unavPast(){
				uni.navigateTo({
					url: '/pages_wode/PastActlist/PastActlist',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// tabbar跳转
			navswich(ID) {
				if (ID == 0) {
					uni.switchTab({
						url: '../index/index'
					})
				} else if (ID == 1) {
					uni.switchTab({
						url: '../activity/activity'
					})
				} else if (ID == 2) {
					uni.navigateTo({
						url: '../Group/Group',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					// uni.switchTab({
					// 	url: ''
					// })
				} else if (ID == 3) {
					uni.switchTab({
						url: '../circle/circle'
					})
				} else if (ID == 4) {
					uni.switchTab({
						url: '../my/my'
					})
				}

			},
			// 放大头像
			FanAvatar(headimg){
				let oss=[headimg];
				uni.previewImage({
					urls:oss,
					
					success(res) {
						console.log(res);
					}
					
				})
			},
			// 跳转至个人中心
			NavCenter(){
				uni.navigateTo({
					url: '/pages_wode/PersonalCenter/PersonalCenter?uuid='+this.uuid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	.NavName{
		font-size: 25rpx;
		margin-top: 15rpx;
	}
	.myxaiosa{
		position: fixed;right: 30rpx;bottom: 180rpx;z-index: 1000;
	}
	/* 个人中心 */
	.RightTopGren{
		    position: absolute;
		    top: 188rpx;
		    right: 0rpx;
		    width: 180rpx;
		    height: 61rpx;
	}
	/* 右上角按钮图片 */
	.RightTopImg {
		width: 52rpx;
		height: 54rpx;
	}

	.RightTop {
		position: absolute;
		top: 32rpx;
		right: 20rpx;
		width: 120rpx;
		display: flex;
		justify-content: space-between;
	}

	/* 实名认证 */
	.renzhengView {
		display: flex;
		align-items: center;
		font-size: 20rpx;
		position: absolute;
		border-radius: 34rpx;
		background: #414141;
		color: #FFFFFF;
		width: 124rpx;
		text-align: center;
		justify-content: center;
		align-items: center;
		left: 26rpx;
		bottom: -9rpx;

	}

	.renzheng {
		width: 20rpx;
		height: 20rpx;
		margin-right: 4rpx;
	}

	/* 自定义背景按钮 */
	.MyBtn {
		height: 110rpx;
		width: 100%;
	}

	.MyBtnView {
		padding: 0 40rpx;
		margin: 50rpx 0;
	}

	/* 背景图片更换 */
	.Scrollxuanzhong {
		width: 74rpx;
		height: 54rpx;
		position: absolute;
		right: 0;
		bottom: 12rpx;
	}

	.ScrollImg {
		width: 320rpx;
		height: 210rpx;
		border-radius: 22rpx;
	}

	.ScrollView {
		position: relative;
		margin-right: 24rpx;
		display: inline-block;

	}

	.Scroll {
		white-space: nowrap;
		padding-left: 40rpx;
	}

	.TTViewTitle {
		font-size: 40rpx;
		text-align: center;
		margin: 44rpx 0;
		font-weight: 800;
	}

	.TTView {
		background-color: white;
		height: 590rpx;
		border-radius: 50rpx 50rpx 0 0;
		z-index: 26;
		position: fixed;
		bottom: 49px;
		left: 0;
		right: 0;
		animation: KK 1s linear;

	}

	@keyframes KK {
		from {
			transform: translateY(1000px);
		}

		to {
			transform: translateY(0px);
		}
	}

	.TT {
		position: fixed;
		background: rgba(0, 0, 0, 0.3);
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 25;

	}

	/* 头像关注 */

	.AvatarTow {
		position: relative;
	}

	.AvatarName {
		font-size: 32rpx;
	}

	.AvatarNametitle {
		font-size: 28rpx;
		color: #555555;
	}

	.AvatarViewContent {
		text-align: center;
	}

	.AvatarTitle {
		font-size: 28rpx;
		color: white;
	}

	.AvatarNum {
		color: white;
		font-size: 32rpx;
		font-weight: bold;
	}

	.AvatarName {
		display: flex;
		align-items: center;
	}

	.Avatarbinaji {
		width: 28rpx;
		height: 28rpx;
		margin-left: 6rpx;
	}

	.AvatarXVIP {
		width: 70rpx;
		height: 32rpx;
		margin-left: 6rpx;
	}

	.AvatarView {
		display: flex;
		justify-content: space-around;
	}

	.AvatarRight {
		width: 518rpx;
		display: flex;
		height: 211rpx;
		flex-direction: column;
		justify-content: space-between;
	}

	.AvatarKuang {
		width: 204rpx;
		height: 221rpx;
		left: -14rpx;
		position: absolute;
		top: -36rpx;
	}

	.AvatarImg {
		width: 180rpx;
		height: 180rpx;
		border-radius: 50%;
		background-image: url(https://ta.imjiayi.com/upload/upload/5015958ebefce13cb9afaf4ee8efa32.png);
		background-size: 100% 100%;
	}

	.Avatar {
		height: 221rpx;
		display: flex;
		align-items: center;
		position: absolute;
		top: -112rpx;
	}

	/* 八大跳转 */
	.NavImg {
		width: 70rpx;
		height: 64rpx;
	}

	.NavView {
		text-align: center;
		/* width: 160rpx; */
		width: 25%;
		margin: 24rpx 0;
	}

	.Nav {
		display: flex;
		flex-wrap: wrap;
		width:25%;
	}

	/* 会员中心 */
	.VIP {
		width: 100%;
		height: 104.92rpx;
		margin-top: 50rpx;
	}

	/* 往期活动 */
	.Wangqi {
		width: 100%;
		height: 276rpx;
	}

	/* 背景 */
	.MyView {
		background-color: white;
		border-radius: 60rpx 60rpx 0 0;
		/* width: 100%; */
		/* height: 600rpx; */
		z-index: 21 !important;
		padding: 114rpx 40rpx 0 40rpx;
		position: relative;
	}

	/* 背景图片 */
	.Mybeijing {
		width: 100%;
		height: 500rpx;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 0 !important;
	}

	.content {
		padding-top: 400rpx;
		padding-bottom: 200rpx;
	}
</style>
