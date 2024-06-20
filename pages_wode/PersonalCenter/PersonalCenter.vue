<template>
	<view class="content">
		<!-- 背景图片 -->
		<!-- getUserInfo -->
		<image class="Mybeijing" @click="Show=true"
			:src="UserInfo.base_bgi+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'" mode=""></image>

		<view class="MyView">
			<view class="Avatar" v-if="uuid==tuuid">
				<view class="AvatarTow colonn" @click="FanAvatar(UserInfo.headimg)">
					<image class="AvatarImg" :src="UserInfo.headimg" mode="aspectFill"></image>
					<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 297@2x.png"
						class="w-132 h-54 m-left-24" style="margin-top:-30rpx;" v-if="UserInfo.vip_code==1"></image>
					<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 298@2x.png"
						class="w-132 h-54 m-left-24" style="margin-top:-30rpx" v-if="UserInfo.vip_code==2"></image>
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

				</view>
			</view>
			<view class="Avatar" v-else>
				<view class="AvatarTow colonn" @click="FanAvatar(UserInfo.headimg)">
					<image class="AvatarImg" :src="UserInfo.headimg" mode=""></image>

					<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 297@2x.png"
						class="w-132 h-54 m-left-24" style="margin-top:-30rpx;" v-if="UserInfo.vip_code==1"></image>
					<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 298@2x.png"
						class="w-132 h-54 m-left-24" style="margin-top:-30rpx" v-if="UserInfo.vip_code==2"></image>

				</view>
				<view class="AvatarRight">
					<!-- 关注粉丝 -->
					<view class="AvatarView">
						<view class="AvatarViewContent">
							<view class="AvatarNum">{{UserInfo.follow}}</view>
							<view class="AvatarTitle">关注</view>
						</view>
						<view class="AvatarViewContent">
							<view class="AvatarNum">{{UserInfo.fans}}</view>
							<view class="AvatarTitle">粉丝</view>
						</view>
						<view class="AvatarViewContent">
							<view class="AvatarNum">{{UserInfo.base_liveness}}</view>
							<view class="AvatarTitle">活跃度</view>
						</view>

					</view>

				</view>
			</view>
			<!-- 签名昵称 -->
			<view class="" v-if="uuid==tuuid">
				<view class="AvatarName">
					<view class="AvatarNameName">{{UserInfo.nickname}}</view>
					<view class="w-15"></view>
					<image v-if="UserInfo.is_auth==1" src="https://ta.imjiayi.com/upload/upload/2@2x.png"
						class="w-35 h-39"></image>
					<image v-if="UserInfo.is_auth==0"
						src="https://ta.imjiayi.com/upload/upload/腾讯实名认证222@2x.png" class="w-35 h-39"></image>

					<image v-if="UserInfo.is_avatar==1&&UserInfo.base_sex==0" class="w-35 h-39 m-left-15"
						src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png">
					</image>
					<image v-if="UserInfo.is_avatar==1&&UserInfo.base_sex==1" class="w-35 h-39 m-left-15"
						src="https://ta.imjiayi.com/upload/upload/huiyuan/11111111 1@2x.png">
					</image>
				</view>
				<view class="AvatarName">
					<view class="AvatarNametitle">{{UserInfo.base_sign?UserInfo.base_sign:'出来玩就现在~'}}</view>
				</view>
				<view class="">信誉积分 :<text style="color: #F8B800;"> {{UserInfo.base_credit}}</text></view>
				<!-- 性别 地区 星座 -->
				<view class="sex">

					<view style="width: 68rpx;height: 52rpx;background-color: #F995C3;border-radius: 10rpx;"
						class="roww center_center" v-if="UserInfo.base_sex==0">
						<image class="w-32 h-32" src="../static/sex0.png"></image>
					</view>
					<view style="width: 68rpx;height: 52rpx;background-color: #25C0F6;border-radius: 10rpx;"
						class="roww center_center" v-if="UserInfo.base_sex==1">
						<image class="w-32 h-32" src="../static/sex1.png"></image>
					</view>


					<view class="sextitle">{{UserInfo.base_address}}</view>
					<view class="sextitle">{{UserInfo.base_con}}</view>
				</view>
				<view class="Marks">
					<scroll-view scroll-x style="width:670rpx;">
						<view class="roww">
							<view class="MarksView" :style="{background:Marksbac[Mindex]}"
								v-for="(Mitem,Mindex) in UserInfo.base_marks">{{Mitem}}</view>
						</view>
					</scroll-view>

				</view>

				<view class="jichangview rowsa roww fs-30 center_center">
					<view class="w-30"></view>
					<image src="https://ta.imjiayi.com/upload/upload/0@2x.png" class="w-120 h-73"></image>
					<view class="w-20"></view>
					<view>TA在出来玩参与了</view>
					<view class="jiachang">{{UserInfo.act_num}}</view>
					<view>场活动~</view>
					<view class="w-30"></view>
				</view>


			</view>
			<view class="" v-else>
				<view class="AvatarName">
					<view class="AvatarNameName">{{UserInfo.nickname}}</view>
					<view class="w-15"></view>



					<image v-if="UserInfo.is_auth==1" src="https://ta.imjiayi.com/upload/upload/2@2x.png"
						class="w-35 h-39"></image>
					<image v-if="UserInfo.is_auth==0"
						src="https://ta.imjiayi.com/upload/upload/腾讯实名认证222@2x.png" class="w-35 h-39"></image>

					<image v-if="UserInfo.is_avatar==1&&UserInfo.base_sex==0" class="w-35 h-39 m-left-15"
						src="https://ta.imjiayi.com/upload/upload/huiyuan/11111111 1@2x.png">
					</image>
					<image v-if="UserInfo.is_avatar==1&&UserInfo.base_sex==1" class="w-35 h-39 m-left-15"
						src="https://ta.imjiayi.com/upload/upload/huiyuan/11111111 1@2x.png">
					</image>
					<view class="allline"></view>
					<view class="guanzhuno" @click.stop="guanzhuClick" v-if="UserInfo.is_follow==0">关注</view>
					<view class="guanzhua" v-if="UserInfo.is_follow==1">已关注</view>

				</view>
				<view class="AvatarName">
					<view class="AvatarNametitle">{{UserInfo.base_sign?UserInfo.base_sign:'出来玩就现在~'}}</view>
				</view>
				<view class="">信誉积分 :<text style="color: #F8B800;"> {{UserInfo.base_credit}}</text></view>
				<!-- 性别 地区 星座 -->
				<view class="sex">


					<view style="width: 68rpx;height: 52rpx;background-color: #F995C3;border-radius: 10rpx;"
						class="roww center_center" v-if="UserInfo.base_sex==0">
						<image class="w-32 h-32" src="../static/sex0.png"></image>
					</view>
					<view style="width: 68rpx;height: 52rpx;background-color: #25C0F6;border-radius: 10rpx;"
						class="roww center_center" v-if="UserInfo.base_sex==1">
						<image class="w-32 h-32" src="../static/sex1.png"></image>
					</view>



					<view class="sextitle">{{UserInfo.base_address}}</view>
					<view class="sextitle">{{UserInfo.base_con}}</view>
				</view>
				<view class="Marks">
					<view class="MarksView" :style="{background:Marksbac[Mindex]}"
						v-for="(Mitem,Mindex) in UserInfo.base_marks">#{{Mitem}}</view>
				</view>

				<view class="jichangview rowsa roww fs-30 center_center">
					<view class="w-30"></view>
					<image src="https://ta.imjiayi.com/upload/upload/0@2x.png" class="w-120 h-73"></image>
					<view class="w-20"></view>
					<view>TA在出来玩参与了</view>
					<view class="jiachang">{{UserInfo.act_num}}</view>
					<view>场活动~</view>
					<view class="w-30"></view>
				</view>

			</view>

		</view>

		<!-- <view class="h-30"></view> -->

		<view class="MomentView colonn" v-for="(Mitem,Mindex) in momentlist" :key="Mindex"
			@click.stop="navDetail(Mitem.moments_no)" :style="{
					'background':Mitem.is_vip==2?'linear-gradient(to bottom, #FDECBC, #FFF8E5, #FFFFFF,#FFFFFF)':'white'
			}">
			<view class="roww">
				<image class="MomentImg" :src="Mitem.headimg" mode=""></image>
				<!-- 名称个签 关注 -->
				<view class="MomentNickname roww center_center">
					<view class="allline w-500">
						<view class="roww center_center w-500">
							<view class="Moment_title">{{Mitem.nickname}}</view>
							<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 297@2x.png"
								class="w-98 h-40 m-left-24" v-if="Mitem.is_vip==1"></image>
							<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 298@2x.png"
								class="w-98 h-40 m-left-24" v-if="Mitem.is_vip==2"></image>

							<image v-if="Mitem.is_auth==1" src="https://ta.imjiayi.com/upload/upload/2@2x.png"
								class="w-30 h-30 m-left-15"></image>
							<image v-if="Mitem.is_avatar==1&&Mitem.base_sex==1" class="w-30 h-30 m-left-15"
								src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png">
							</image>
							<image v-if="Mitem.is_avatar==1&&Mitem.base_sex==0" class="w-30 h-30 m-left-15"
								src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png">
							</image>
							<view class="allline"></view>
						</view>
						<view class="Moment_base_sign">{{Mitem.base_sign?Mitem.base_sign:'出来玩就现在~'}}</view>
					</view>
					<view class="allline"></view>
					<image class="shanchu" @click.stop="Delect(Mitem.moments_no,Mindex)" v-if="uuid==tuuid"
						src="../../static/shanchu.png" mode=""></image>
				</view>
			</view>
			<view class="MomentRight">

				<view class="MomentText">{{Mitem.text}}</view>
				<view class="" style="display: flex;flex-wrap: wrap; width: 604rpx;">
					<view v-if="Mitem.type==2" @click.stop="aaaaa">
						<video style="background-color: red;border-radius: 20rpx;margin-top:15rpx;"
							:src="Mitem.video_xcx[0].imgUrl" :poster="Mitem.video_xcx[0].video_img" :style="{
								width:Mitem.video_xcx[0].width_b+'rpx',
								height:Mitem.video_xcx[0].height_b+'rpx',
							}" mode="aspectFill"></video>
					</view>
					<view v-else>
						<image class="MomentPhoto4" v-if="Mitem.photo.length==4"
							@click.stop="previewImage(Mitem.photo,Mindex,MMindex)"
							v-for="(MMitem,MMindex) in Mitem.photo" :key="MMindex"
							:src="MMitem.imgUrl+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
							mode="aspectFill"></image>
						<view class="huanhang w-650">
							<image class="MomentPhoto5" v-if="Mitem.photo.length>4"
								@click.stop="previewImage(Mitem.photo,Mindex,MMindex)"
								v-for="(MMitem,MMindex) in Mitem.photo" :key="MMindex"
								:src="MMitem.imgUrl+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
								mode="aspectFill"></image>
						</view>
						<image class="MomentPhoto5" @click.stop="previewImage(Mitem.photo,Mindex,MMindex)"
							v-if="Mitem.photo.length>1&&Mitem.photo.length<4" v-for="(MMitem,MMindex) in Mitem.photo"
							:key="MMindex"
							:src="MMitem.imgUrl+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
							mode="aspectFill"></image>
						<!-- 宽图 -->
						<image class="MomentPhoto" style="width: 250px;height:110px ;"
							@click.stop="previewImage(Mitem.photo,Mindex,MMindex)"
							v-if="Mitem.photo.length==1 && MMitem.width>MMitem.height && MMitem.width>250"
							v-for="(MMitem,MMindex) in Mitem.photo" :key="MMindex"
							:src="MMitem.imgUrl+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
							mode="widthFix">
						</image>
						<!-- 长图 -->
						<image class="MomentPhoto" style="width: 140px;height:300px ;"
							@click.stop="previewImage(Mitem.photo,Mindex,MMindex)"
							v-if="Mitem.photo.length==1 && MMitem.width<MMitem.height && MMitem.height>300"
							v-for="(MMitem,MMindex) in Mitem.photo" :key="MMindex"
							:src="MMitem.imgUrl+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
							mode="heightFix">
						</image>
						<!-- 宽高相等 -->
						<image class="MomentPhoto" style="width: 140px;height:300px ;"
							@click.stop="previewImage(Mitem.photo,Mindex,MMindex)"
							v-if="Mitem.photo.length==1 && MMitem.width==MMitem.height"
							v-for="(MMitem,MMindex) in Mitem.photo" :key="MMindex"
							:src="MMitem.imgUrl+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
							mode="heightFix">
						</image>
					</view>



				</view>
				<!-- 地址信息 -->
				<view class="Address" v-if="Mitem.address">
					<image class="AddressImg" src="../../static/white_address.png" mode=""></image>
					<view class="">{{Mitem.address}}</view>
				</view>
				<!-- 兴趣标签 -->
				<scroll-view class="Marks" scroll-x="true">
					<view class="MarksView1" v-for="(Marksitem,Marksindex) in Mitem.marks" :key="Marksindex">
						{{Marksitem}}
					</view>
				</scroll-view>
				<!-- 时间点赞 -->
				<view class="Time">
					<view class="TimeText">{{Mitem.time_show}}</view>
					<view class="TimeView">
						<view class="TimeLink">
							<image class="TimeImg" src="../../static/pinglun.png" mode=""></image>
							<view class="">{{Mitem.comment_num}}</view>
						</view>
						<view class="w-30"></view>
						<view class="TimeLink" @click.stop="MomentLike(Mitem.moments_no,Mindex,1)">
							<image v-if="Mitem.is_like==0" class="TimeImg" src="../../static/xin.png" mode="">
							</image>
							<image v-if="Mitem.is_like==1" class="TimeImg" src="../../static/hxin.png" mode="">
							</image>
							<view class="">{{Mitem.like_num}}</view>
						</view>
					</view>
				</view>
			</view>

		</view>


		<!-- <image src="https://ta.imjiayi.com/upload/upload/Component 289@2x.png"
			style="position: fixed;left:24rpx;width:702rpx;height: 150rpx;bottom: 50rpx;" 
			@click.stop="showApp"
			v-if="uuid!=tuuid"></image> -->


		<loadApp v-if="showApp" @closeClick="showLoadApp"></loadApp>

		<image src="https://ta.imjiayi.com/upload/upload/Component 311@2x.png"
			style="position: fixed;left:24rpx;width:674rpx;height: 138rpx;bottom: 50rpx;" @click.stop="showLoadApp"
			v-if="uuid!=tuuid"></image>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				uuid: getApp().globalData.uuid,
				tuuid: '',
				UserInfo: [],
				page: 1,
				momentlist: [],

				// 背景颜色
				Marksbac: ['#FFE2E7', '#D8EAFF', '#DAFFE6', '#E6DAFF'],

				showApp: false,
			}
		},
		onLoad(options) {
			// var token = uni.getStorageSync("token");
			// if (!token) {
			// 	uni.showToast({
			// 		title: "请先登录",
			// 		icon: 'none'
			// 	})
			// 	setTimeout(res => {
			// 		uni.reLaunch({
			// 			url: "/pages/Login/Login"
			// 		})
			// 	}, 1000)
			// 	return
			// }

			this.tuuid = options.uuid;
		},
		mounted() {
			console.log("getIsToken",)
			this.getIsToken()
			
		},

		onReachBottom() {
			this.getmomentlist()
		},
		methods: {
			
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
						this.getmomentlist();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
			hideview() {},
			showLoadApp() {
				this.showApp = !this.showApp;
			},
			guanzhuClick() {
				
				
				var token=uni.getStorageSync("token");
				if(!token){
					uni.showToast({
						title:"请先登录",
						icon:"none"
					})
					setTimeout(res=>{
						uni.reLaunch({
							url:"/pages/Login/Login"
						})
					},1000)
				    return     
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
				
				uni.request({
					url: this.baseurl + '/api/user/follow',
					method: 'POST',
					data: {
						uuid: this.tuuid,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						uni.showToast({
							title: "关注成功",
							icon: "none"
						})
						this.UserInfo.is_follow = 1;
					},
					fail: () => {},
					complete: () => {}
				});
			},

			showApp() {
				uni.showToast({
					title: "完整功能请下载APP",
					icon: "none"
				})
			},

			// 个人信息
			getUserInfo() {
				
				var token=uni.getStorageSync("token")
				var url=this.baseurl + '/api/user/getUserInfo';
				if(!token){
					url=this.baseurl + '/api/IosVisitor/getUserInfo';
				}

				uni.request({
					url: url,
					method: 'POST',
					data: {
						uuid: this.tuuid,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						console.log("个人信息", res);
						this.UserInfo = res.data.data;
						uni.setNavigationBarTitle({
							title: this.UserInfo.nickname
						})
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 圈子列表
			getmomentlist() {
				
				var token=uni.getStorageSync("token")
				var url= this.baseurl + '/api/moments/momentsList';
				if(!token){
					url= this.baseurl + '/api/iosVisitor/momentsList';
				}
				
				uni.request({
					url: url,
					method: 'POST',
					data: {
						page: this.page++,
						num: 100,
						tuuid: this.tuuid,
						video: 1,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						if (res.data.data.length > 0) {
							let oss = res.data.data
							for (let i = 0; i < oss.length; i++) {
								oss[i].photo = oss[i].photo.map(item => {
									return JSON.parse(item);
								})
							}
							this.momentlist = this.momentlist.concat(oss);
							var list = this.momentlist
							for (var a = 0; a < list.length; a++) {
								if (list[a].video_xcx.length > 0) {
									if (list[a].video_xcx[0].width < list[a].video_xcx[0].height) {
										list[a].video_xcx[0].width_b = 300;
										list[a].video_xcx[0].height_b = (300 / list[a].video_xcx[0].width) *
											list[a].video_xcx[0].height;
									} else {
										list[a].video_xcx[0].width_b = 600;
										list[a].video_xcx[0].height_b = (600 / list[a].video_xcx[0].width) *
											list[a].video_xcx[0].height;
									}
								}
							}
							this.momentlist = list;
						} else {
							this.page -= 1;
						}
						console.log(res);

						// this.momentlist=this.momentlist.concat()
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 预览图片
			previewImage(Mitem, MMitem, MMindex) {
				console.log(Mitem, MMitem, MMindex);
				let urls = [];
				Mitem.forEach(item => {
					return urls.push(item.imgUrl);
				})
				console.log(urls);
				uni.previewImage({
					current: MMindex,
					urls: urls,
					success(res) {
						console.log(res);
					}
				})
			},
			// 圈子列表是否关注
			follow(uuid, Mindex) {
				uni.request({
					url: this.baseurl + '/api/user/follow',
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token
					},
					data: {
						uuid,
							city:uni.getStorageSync("citySel")
					},
					success: res => {
						console.log("关注", res);
						if (res.data.data == 1) {
							console.log("关注成功");
							this.momentlist[Mindex].is_follow = 1;
							console.log(this.momentlist)
							let acc = uuid
							this.momentlist.filter((item, index) => {
								console.log(item.uuid == uuid, index);
								if (item.uuid == uuid) {
									this.momentlist[index].is_follow = 1
								}
							})
						} else {
							console.log("取消关注成功");
							this.momentlist.filter((item, index) => {
								console.log(item.uuid == uuid, index);
								if (item.uuid == uuid) {
									this.momentlist[index].is_follow = 0
								}
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 圈子点赞
			MomentLike(moments_no, Mindex, type) {
				if (type == 1) {
					uni.request({
						url: this.baseurl + '/api/moments/momentsLike',
						method: 'POST',
						header: {
							xcx: 1,
							xcx: 1,
							token: this.token
						},
						data: {
							moments_no,city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log("喜欢", res.data.data);
							if (res.data.data == 1) {
								this.momentlist[Mindex].is_like = 1;
								this.momentlist[Mindex].like_num += 1;
							} else if (res.data.data == 0) {
								this.momentlist[Mindex].is_like = 0;
								this.momentlist[Mindex].like_num -= 1;
							}
						},
						fail: () => {},
						complete: () => {}
					});
				} else if (type == 2) {
					uni.request({
						url: this.baseurl + '/api/moments/momentsLike',
						method: 'POST',
						header: {
							xcx: 1,
							xcx: 1,
							token: this.token
						},
						data: {
							moments_no,	city:uni.getStorageSync("citySel"),
								city:uni.getStorageSync("citySel")
						},
						success: res => {
							console.log("喜欢", res.data.data);
							if (res.data.data == 1) {
								this.momentlist[Mindex].is_like = 1;
								this.momentlist[Mindex].like_num += 1;
							} else if (res.data.data == 0) {
								this.momentlist[Mindex].is_like = 0;
								this.momentlist[Mindex].like_num -= 1;
							}
						},
						fail: () => {},
						complete: () => {}
					});
				}

			},
			// 删除圈子
			Delect(moments_no, index) {
				uni.showModal({
					title: '删除圈子',
					content: '确定删除该条圈子吗?',
					showCancel: true,
					success: res => {
						console.log(res);
						if (res.confirm) {
							uni.request({
								url: this.baseurl + '/api/moments/momentsDel',
								method: 'POST',
								data: {
									moments_no
								},
								header: {
									token: this.token
								},
								success: res => {

									uni.showToast({
										title: res.data.info,
										mask: true,
										icon: 'none',
									});
									this.momentlist.splice(index, 1)
								},
								fail: () => {},
								complete: () => {}
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转至关注列表
			NavFollow() {
				uni.navigateTo({
					url: '../../pages_wode/follow/follow',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转至粉丝列表
			NavFans() {
				uni.navigateTo({
					url: '../../pages_wode/Fans/Fans',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转至活跃度
			NavActivity() {
				// is_vip=${UserInfo.is_vip}&&headimg=${UserInfo.headimg}&&nickname=${UserInfo.nickname}&&base_liveness=${UserInfo.base_liveness}
				let User = JSON.stringify(this.UserInfo)
				uni.navigateTo({
					url: `../../pages_wode/Activity/Activity?UserInfo=${User}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转至圈子详情
			navDetail(moments_no) {
				uni.navigateTo({
					url: `../../pages_quanzi/criclleDetal/criclleDetal?moments_no=${moments_no}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				console.log(11);
			},
		}
	}
</script>

<style scoped>
	@import url(pcenter.css);

	/* 圈子时间点赞评论 */
	.shanchu {
		width: 28rpx;
		height: 31rpx;
	}

	.TimeLink {
		display: flex;
		align-items: center;
		margin-right: 10rpx;
	}

	.TimeView {
		display: flex;
		align-items: center;
	}

	.TimeImg {
		width: 48rpx;
		height: 48rpx;
		margin-right: 4rpx;
	}

	.TimeText {}

	.Time {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 32rpx;
		color: #A8A8A8;
		margin: 16rpx 0;
	}

	/* 圈子兴趣标签 */
	.MarksView1 {
		background: #FFF8E4;
		color: #F8B800;
		font-size: 24rpx;
		padding: 6rpx 20rpx;
		margin-right: 16rpx;
		display: inline-block;
	}

	.Marks {
		display: flex;
		align-items: center;
		margin: 16rpx 0;
		white-space: nowrap;
	}

	/* 圈子列表地址 */
	.AddressImg {
		width: 30rpx;
		height: 30rpx;
		margin-right: 4rpx;
	}

	.Address {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		color: #A8A8A8;
		margin: 16rpx 0;
	}

	/* 圈子列表 */

	.MomentPhoto {
		width: 196rpx;
		height: 196rpx;
		border-radius: 12rpx;
		margin-right: 7rpx;
		margin-top: 8rpx;
	}

	.MomentPhoto5 {
		width: 196rpx;
		height: 196rpx;
		border-radius: 12rpx;
		margin-right: 7rpx;
		margin-top: 8rpx;
	}

	.MomentPhoto4 {
		width: 196rpx;
		height: 196rpx;
		border-radius: 12rpx;
		margin-right: 8rpx;
		margin-top: 8rpx;
	}

	.photoCSS {
		width: 1000rpx;
		height: 1000rpx;
	}

	.MomentRight {
		width: 600rpx;
		overflow: hidden;
	}

	.MomentImg {
		width: 76rpx;
		height: 76rpx;
		border-radius: 50%;
		margin-right: 10rpx;
	}

	.MomentText {
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
		margin-top: 20rpx;

	}

	.Moment_title {
		font-size: 32rpx;
		font-weight: 800;

		font-family: Inter-Regular, Inter;
	}

	.Moment_base_sign {
		font-size: 28rpx;
		color: #A8A8A8;
		font-family: Inter-Regular, Inter;
	}

	/* 昵称签名 */
	.MomentIS {
		border-radius: 8rpx;
		padding: 4rpx 20rpx;
		color: #FFFFFF;
		font-family: Inter-Regular, Inter;
		background: #F8B800;
	}

	.MomentNickname {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 550rpx;
	}

	.MomentView {
		display: flex;
		margin-bottom: 40rpx;
		padding: 30rpx 28rpx 0 28rpx;
		width: 690rpx;
		margin-left: 30rpx;
		border-radius: 25rpx;
		position: relative;
		left: 10rpx;
	}

	/* 兴趣*/
	.Marks {
		display: flex;
		align-items: center;
		font-size: 24rpx;
	}

	.MarksView:last-child {
		margin-right: 0rpx !important;
	}

	.MarksView {
		background: #FFE2E7;
		padding: 6rpx 28rpx;
		border-radius: 100rpx;
		margin-right: 20rpx;
		white-space: nowrap;

	}

	/* 性别 */
	.sex {
		display: flex;
		align-items: center;
		margin: 14rpx 0 30rpx 0;
		width: 68rpx;
		height: 52rpx;
	}

	.sextitle {
		margin: 0 20rpx;
		background: #F6F6F6;
		/* padding: 6rpx 18rpx; */
		font-size: 28rpx;
		color: #555555;
	}

	.sex1 {

		background: #25C0F6;
		border-radius: 10rpx;
		/* padding: 6rpx 18rpx; */
	}

	.sex0 {
		background: #F995C3;
		border-radius: 10rpx;
		/* padding: 6rpx 18rpx; */
	}

	.sexImg {
		width: 32rpx;
		height: 32rpx;
		padding: 15rpx;
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

	/* 头像关注 */

	.AvatarTow {
		position: relative;
	}

	.AvatarName {
		font-size: 32rpx;
		margin: 12rpx 0rpx;
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
		width: 490rpx;
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
	}

	.Avatar {
		height: 221rpx;
		display: flex;
		align-items: center;
		position: absolute;
		top: -112rpx;
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
		width: 750rpx;
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