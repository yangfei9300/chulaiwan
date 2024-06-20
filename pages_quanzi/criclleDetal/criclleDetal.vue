<template>
	<view class="">
		<view class="Detail"
		:style="{
				'background':list.vip_code==2?'linear-gradient(to bottom, #FDECBC, #FFF8E5, #FFFFFF,#FFFFFF)':'white'
		}"
		>
			<image class="Detail_headimg" :src="list.headimg" mode=""></image>
			<view class="Detail_right">
				<view class="roww center_center">
					<view class="roww allline center_center">
						<view class="Detail_nickname">{{list.nickname}}</view>
						<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 297@2x.png"
						class="w-98 h-40 m-left-24"  v-if="list.vip_code==1"
						></image>
						<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 298@2x.png"
						class="w-98 h-40 m-left-24"   v-if="list.vip_code==2"
						></image>
						
						<image  v-if="list.is_auth==1" 
						src="https://ta.imjiayi.com/upload/upload/2@2x.png" 
						class="w-30 h-30 m-left-15"></image>
						<image  v-if="list.is_avatar==1&&list.base_sex==1" 
						class="w-30 h-30 m-left-15"
						src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png"
						 >
						</image>
						<image  v-if="list.is_avatar==1&&list.base_sex==0"
						class="w-30 h-30 m-left-15"
						src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png"
						 >
						</image>
						
						<view class="allline"></view>
						<view class="MomentIS" @click.stop="follow(list.uuid)" v-if="list.is_follow==0 && uid!==list.uuid">关注
						</view>
					</view>
					
				</view>
				<view class="Detail_time">
					<text>{{list.base_sign?list.base_sign:'出来玩就现在~'}}</text>
				</view>
				<view class="Detail_text">{{list.text}}</view>
				<view class="">
					<!-- <image class="MomentPhoto4" v-if="list.photo.length==4"
						@click.stop="previewImage(list.photo,Mindex)" v-for="(Mlist,Mindex) in list.photo" :key="Mindex"
						:src="Mlist.imgUrl" mode="aspectFill">
					</image> -->
					<block v-if="list.photo&&list.photo.length>0">
					
					
					<view style="width: 620rpx;" v-if="list.photo.length>=4">
						<image class="MomentPhoto5"  @click.stop="previewImage(list.photo,Mindex)"
							v-for="(Mlist,Mindex) in list.photo" :key="Mindex" :src="Mlist.imgUrl" mode="aspectFill">
						</image>
					</view>
					
					<image class="MomentPhoto5" @click.stop="previewImage(list.photo,Mindex)"
						v-if="list.photo.length>1&&list.photo.length<4" v-for="(Mlist,Mindex) in list.photo"
						:key="Mindex" :src="Mlist.imgUrl" mode="aspectFill"></image>
					<!-- 宽图 -->
					<image class="MomentPhoto" style="width: 250px;height:110px ;"
						@click.stop="previewImage(list.photo,Mindex)"
						v-if="list.photo.length==1 && Mlist.width>Mlist.height && Mlist.width>250"
						v-for="(Mlist,Mindex) in list.photo" :key="Mindex" :src="Mlist.imgUrl" mode="widthFix">
					</image>
					<!-- 长图 -->
					<image class="MomentPhoto" style="width: 140px;height:300px ;"
						@click.stop="previewImage(list.photo,Mindex)"
						v-if="list.photo.length==1 && Mlist.width<Mlist.height && Mlist.height>300"
						v-for="(Mlist,Mindex) in list.photo" :key="Mindex" :src="Mlist.imgUrl" mode="heightFix">
					</image>
					<!-- 宽高相等 -->
					<image class="MomentPhoto" style="width: 140px;height:300px ;"
						@click.stop="previewImage(list.photo,Mindex)"
						v-if="list.photo.length==1 && Mlist.width==Mlist.height " v-for="(Mlist,Mindex) in list.photo"
						:key="Mindex" :src="Mlist.imgUrl" mode="heightFix">
					</image>
					</block>
					<!-- <video v-if="list.type==2"
					:src="list.video_xcx[0].imgUrl" 
					:style="{
						''
					}"
					></video> -->
					<view style="height: 20rpx;"></view>
					<videos
					 v-if="list.type==2"
					 
					 :videoUrl="list.video_xcx[0].imgUrl"
					:width="list.video_xcx[0].width_b"
					:height="list.video_xcx[0].height_b"
					:imgUrl="list.video_xcx[0].imgUrl"
					:videoImg="list.video_xcx[0].video_img"
					></videos>
					
				</view>
				<view class="Detail_address" v-if="list.address">
					<image class="addressImg" src="../static/white_address.png" mode=""></image>
					<text>{{list.address}}</text>
				</view>
				<scroll-view class="Detail_Marks" scroll-x style="width: 620rpx;">
					<view class="Marksitem" v-for="(AKitem,AKindex) in list.marks" :key="AKindex">{{AKitem}}</view>
				</scroll-view>
				<view class="h-20"></view>
				<view class="Detail_Like">
					<view class="fs-25" style="color: #777777;">{{list.time_show}}</view>
					<view class="allline"></view>
					<view class="Detail_LikeView">
						<image class="Detail_LikeImg" src="../static/pinglun.png" mode=""></image>
						<view class="">{{list.comment_num}}</view>
					</view>
					<view class="w-25"></view>
					<view class="Detail_LikeView" @click="MomentLike(list.moments_no)">
						<image v-if="list.is_like==0" class="Detail_LikeImg" src="../static/xin.png" mode=""></image>
						<image v-if="list.is_like==1" class="Detail_LikeImg" src="../static/hxin.png" mode=""></image>
						<view class="">{{list.like_num}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="DetailPeople">
			<image class="DetailPeopleIMG" src="../static/hxin.png" mode=""></image>
			<scroll-view class="DetailPeopleScoll" scroll-x="true">
				<image class="Detailheadimg" @click.stop="toUserInfo(Likeitem)" v-for="(Likeitem,Likeindex) in list.likePeople" :src="Likeitem.headimg"
					mode=""></image>
			</scroll-view>
		</view>
		<!-- 粗线 -->
		<view class="cuxian"></view>
		<!-- 评论列表 -->
		<view class="Com">
			<view class="Com_title">评论</view>
			<view class="ComView" v-for="(Comitem,Comindex) in CommentList" :key="Comindex"
			@longpress.stop="delLongClick(Comitem)"
			>
				<image class="ComImg" :src="Comitem.headimg" mode=""
				@click.stop="toUserInfo(Comitem)"
				></image>
				<view class="ComRight">
					<view class="ComNickname">{{Comitem.nickname}}</view>
					<view class="ComMent">{{Comitem.comment}}</view>
					<view class="pinglun">
						<text>{{Comitem.time_show}}</text>
						<text class='huifu' @click="CommentDo(1,Comitem.id,Comitem.id,Comitem.nickname)">
							回复</text>
					</view>
					<!-- 楼中楼回复 -->
					<view class="ComView" v-for="(Sitem,Sindex) in Comitem.son" :key="Sindex"
					@longpress.stop="delLongClick(Sitem)"
					>
						<image class="ComImg" @click.stop="toUserInfo(Sitem)" :src="Sitem.headimg" mode=""></image>
						<view class="ComRight">
							<view class="ComNickname" v-if="Sitem.back.length>0">{{Sitem.nickname}}回复{{Sitem.back}}
							</view>
							<view class="ComNickname" v-else>{{Sitem.nickname}}</view>
							<view class="ComMent">{{Sitem.comment}}</view>
							<view class="pinglun">
								<text>{{Sitem.time_show}}</text>
								<text class='huifu' @click="CommentDo(2,Sitem.comment_id,Sitem.id,Sitem.nickname)">
									回复</text>
							</view>
							<!-- <view class="">
								<text @click="CommentDo(2,Sitem.comment_id,Sitem.id,Sitem.nickname)">{{Sitem.time_show}}
									回复</text>
							</view> -->
							<!-- 		<view class="" v-for="(Sitem,Sindex) in Comitem.son" :key="Sindex">
								<image :src="Sitem.headimg" mode=""></image>
								<view class=""></view>
							</view> -->
						</view>
					</view>
					<!-- 		<view class="" v-for="(Sitem,Sindex) in Comitem.son" :key="Sindex">
						<image :src="Sitem.headimg" mode=""></image>
						<view class=""></view>
					</view> -->
				</view>
			</view>
			
			<view class="colonn center_center" v-if="CommentList.length<=0">
				<view class="h-50"></view>
				<image src="https://ta.imjiayi.com/upload/upload/空空如也.png" class="w-210 h-238"></image>
				<view class="m-top-35 fs-28" style="color: #999999;">空有空的好</view>
			</view>
			
		</view>
		<!-- 回复评论 -->
		<view class="ReplyComment">
			<input v-if="placeholder.length>0" class="ReplyComment_input p-left-15" :placeholder="placeholder" type="text"
				adjust-position="true" v-model="commentValue" value="" placeholder-class="fs-25 p-left-15" />
			<input v-else class="ReplyComment_input" placeholder="" type="text" adjust-position="true"
				v-model="commentValue" value="" />
			<view class="ReplyComment_btn" @click="fubs()">发送</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 请求条件
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				moments_no: null,
				page: 1,
				type: 0,
				commentValue: "",
				id: '',
				back_id: '',
				placeholder: '机会来了！马上发言',
				// 接收数据
				list: [],
				CommentList: [],
				
				uid:getApp().globalData.uuid,
				
				pingjiaClick:true,
			}
		},
		onLoad(options) {
			console.log(options);
			this.moments_no = options.moments_no;
		},
		mounted() {
			this.getmoments();
			this.getComment();
		},
		onPullDownRefresh() {
			this.page = 1;
			// 刷新评论列表
			this.getComments();
			// 刷新详情
			this.getmoments();
		},
		onReachBottom() {
			this.getComment()
		},
		methods: {
			delLongClick(info){
				uni.showModal({
					title: '提示',
					content: '确认要删除吗',
					success:  (res)=> {
						if (res.confirm) {
							this.delComment(info);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			
			delComment(info){
				
				
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
					url: this.baseurl + '/api/moments/momentsCommentDel',
					method: 'POST',
					header: {
						xcx:1, 
						token: this.token
					},
					data: {
						comment_id:info.id,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("关注", res);
						if (res.data.code == 1) {
							uni.showToast({
								title:"删除成功",
								icon:'none'
							})
							setTimeout(res=>{
								this.shauxinComm();
							},1000)
						} 
					},
					fail: () => {},
					complete: () => {}
				});
			},
			shauxinComm(){
				this.page = 1;
				// 刷新评论列表
				this.getComments();
				// 刷新详情
				this.getmoments();
			},
			// 圈子列表是否关注
			follow(uuid) {
				uni.request({
					url: this.baseurl + '/api/user/follow',
					method: 'POST',
					header: {
						xcx:1, 
						token: this.token
					},
					data: {
						uuid,
							city:uni.getStorageSync("citySel")
					},
					success: res => {
						console.log("关注", res);
						if (res.data.data == 1) {
							uni.showToast({
								title:"关注成功",
								icon:'none'
							})
							this.list.is_follow=1;
						} 
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
			toUserInfo(info){
				uni.navigateTo({
					url:"/pages_wode/PersonalCenter/PersonalCenter?uuid="+info.uuid
				})
			},
			// 评论列表
			getComments() {

				uni.request({
					url: this.baseurl + '/api/moments/momentsComment',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						moments_no: this.moments_no,
						page: this.page++,
						num: 20,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("圈子详情回复", res.data.data);
						this.CommentList = res.data.data;
						this.id = res.data.data.id;
						uni.stopPullDownRefresh()
					},
					fail: () => {},
					complete: () => {}
				});
			},
			getComment() {

				uni.request({
					url: this.baseurl + '/api/moments/momentsComment',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						moments_no: this.moments_no,
						page: this.page++,
						num: 20,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("圈子详情回复", res.data.data);
						if (res.data.data.length == 0) {
							this.page -= 1;
						} else {
							this.CommentList = this.CommentList.concat(res.data.data);
							this.id = res.data.data.id;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 详情
			getmoments() {
				uni.request({
					url: this.baseurl + '/api/moments/momentsInfo',
					method: 'POST',
					header: {
						
						xcx:1,
						token: this.token
					},
					data: {
						moments_no: this.moments_no,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("圈子详情", res.data.data);
						this.list = res.data.data;
						if(this.list.photo){
							this.list.photo = this.list.photo.map(item => {
								return JSON.parse(item)
							})
						}
						
						var video_xcx=this.list.video_xcx;
							if(video_xcx.length>0){
								if(video_xcx[0].width<video_xcx[0].height){
									video_xcx[0].width_b=300;
									video_xcx[0].height_b=(300/video_xcx[0].width)*video_xcx[0].height;
								}else{
									video_xcx[0].width_b=600;
									video_xcx[0].height_b=(600/video_xcx[0].width)*video_xcx[0].height;
								}
							}
						
						this.list.video_xcx=video_xcx;
						
						console.log("更新后的详情", this.list);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 回复评论
			CommentDo(type, id, back_id, placeholder) {
				this.type = type;
				this.id = id;
				this.back_id = back_id;
				this.placeholder = `回复 : ${placeholder}`
			},
			// 发送评论
			fubs() {
				
				
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
				if(!this.pingjiaClick){
					uni.showToast({
						title:"请勿连续点击",
						icon:'none'
					})
					return false;
				}
				this.pingjiaClick=false;
				setTimeout(res=>{
					this.pingjiaClick=true;
				},1000)
				
				if(this.commentValue==""){
					uni.showToast({
						title:"请输入评价内容",
						icon:'none'
					})
					return false;
				}
				if (this.type == 0) {
					uni.request({
						url: this.baseurl + '/api/moments/momentsCommentDo',  
						method: 'POST',
						header: {     
							xcx:1,
							token: this.token
						},
						// comment_id一级回复,back_id二级回复comment回复内容,moments_no回复的圈子编号
						data: {
							moments_no: this.moments_no,
							comment: this.commentValue,
							
							city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log("直接发表", res)
							this.commentValue = '';
							this.placeholder = " ";
							this.shauxinComm()
						},
						fail: () => {},
						complete: () => {}
					});
				} else if (this.type == 1) {
					uni.request({
						url: this.baseurl + '/api/moments/momentsCommentDo',
						method: 'POST',
						header: {
							xcx:1,
							token: this.token
						},
						// comment_id一级回复,back_id二级回复comment回复内容,moments_no回复的圈子编号
						data: {
							moments_no: this.moments_no,
							comment_id: this.id,
							back_id: this.back_id,
							comment: this.commentValue,
							
							city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log("回复一级", res)
							this.commentValue = '';
							this.placeholder = " ";
							this.type = 0;
							this.shauxinComm()
						},
						fail: () => {},
						complete: () => {}
					});
				} else if (this.type == 2) {
					uni.request({
						url: this.baseurl + '/api/moments/momentsCommentDo',
						method: 'POST',
						header: {
							xcx:1,
							token: this.token
						},
						// comment_id一级回复,back_id二级回复comment回复内容,moments_no回复的圈子编号
						data: {
							moments_no: this.moments_no,
							comment_id: this.id,
							back_id: this.back_id,
							comment: this.commentValue,

						city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log("回复二级", res)
							this.type = 0;
							this.commentValue = '';
							this.placeholder = " ";
							this.shauxinComm()
						},
						fail: () => {},
						complete: () => {}
					});
				}
			},
			// 圈子点赞
			MomentLike(moments_no) {
				
				
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
					url: this.baseurl + '/api/moments/momentsLike',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						moments_no,	city:uni.getStorageSync("citySel")
					},
					success: res => {
						console.log("喜欢", res.data.data);
						if (res.data.data == 0) {
							this.list.is_like = res.data.data
							this.list.like_num -= 1
							uni.request({
								url: this.baseurl + '/api/moments/momentsInfo',
								method: 'POST',
								header: {
									xcx:1,
									token: this.token
								},
								data: {
									moments_no: this.moments_no,
									
									city:uni.getStorageSync("citySel"),
								},
								success: res => {
									console.log("圈子详情", res.data.data);
									this.list.likePeople = res.data.data.likePeople;
								},
								fail: () => {},
								complete: () => {}
							});
						} else if (res.data.data == 1) {
							this.list.is_like = res.data.data;
							this.list.like_num += 1;
							uni.request({
								url: this.baseurl + '/api/moments/momentsInfo',
								method: 'POST',
								header: {
									xcx:1,
									token: this.token
								},
								data: {
									moments_no: this.moments_no,
									
									city:uni.getStorageSync("citySel"),
								},
								success: res => {
									console.log("圈子详情", res.data.data);
									this.list.likePeople = res.data.data.likePeople;
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
			// 预览图片
			previewImage(Mitem, Mindex) {
				console.log(Mitem, Mindex);
				let urls = [];
				Mitem.forEach(item => {
					return urls.push(item.imgUrl);
				})
				console.log(urls);
				uni.previewImage({
					current: Mindex,
					urls: urls,
					success(res) {
						console.log(res);
					}
				})
			},
		}
	}
</script>

<style scoped>
	/* 昵称签名 */
	.MomentIS {
		border-radius: 8rpx;
		padding: 4rpx 20rpx;
		color: #FFFFFF;
		font-family: Inter-Regular, Inter;
		background: #F8B800;
		font-size: 30rpx;
		line-height: 50rpx;
	}
	
	.pinglun{
		font-size: 28rpx;
		color: #AEAEAE;
	}
	.huifu{
		margin-left:12rpx;
	}
	/* 回复评论 */
	.ReplyComment_btn {
		width: 164rpx;
		height: 72rpx;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #F8B800;
		border-radius: 16rpx;
	}

	.ReplyComment_input {
		border: 1rpx solid #999;
		background: #F6F6F6;
		width: 500rpx;
		height: 72rpx;
		border-radius: 16rpx;
	}

	.ReplyComment {
		display: flex;
		align-items: center;
		padding-left: 40rpx;
		padding-right: 26rpx;
		justify-content: space-between;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 10rpx;
		

	}

	/* 评论 */
	.ComMent {
		font-size: 32rpx;
		color: #3A3A3A;
		margin-top: 14rpx;
	}

	.ComNickname {
		color: #AEAEAE;
		font-size: 28rpx;
	}

	.ComRight {
		margin-left: 16rpx;
	}

	.ComImg {
		width: 68rpx;
		height: 68rpx;
		border-radius: 50%;
	}

	.ComView {
		display: flex;
		/* border-bottom: 1rpx solid #f3f3f3; */
		padding-bottom: 26rpx;
		/* margin-bottom: 26rpx; */
		margin-top: 26rpx;

	}

	.Com_title {
		font-size: 32rpx;
		font-weight: 800;
		margin: 24rpx 0;
	}

	.Com {
		padding-left: 30rpx;
		padding-right: 30rpx;
		padding-bottom: 36rpx;
	}

	/* 粗线 */
	.cuxian {
		height: 16rpx;
		background: #F6F6F6;
	}

	/* 点赞排列头像 */
	.Detailheadimg {
		width: 64rpx;
		height: 64rpx;
		display: inline-block;
		border-radius: 50%;
		margin-right: 16rpx;
	}

	.DetailPeopleScoll {
		white-space: nowrap;
		width: 550rpx;
		height: 64rpx;
	}

	.DetailPeopleIMG {
		width: 48rpx;
		height: 48rpx;
		margin-right: 24rpx;
	}

	.DetailPeople {
		display: flex;
		align-items: center;
		background: #F3F3F3;
		border-radius: 16rpx;
		padding: 10rpx 30rpx;
		margin-top: 22rpx;
		margin-bottom: 48rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}

	/* 点赞 */
	.Detail_LikeImg {
		width: 48rpx;
		height: 48rpx;
		margin-right: 4rpx;
	}

	.Detail_LikeView {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		color: #A8A8A8;
		margin-right: 20rpx;
	}

	.Detail_Like {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	/* 标签 */
	.Marksitem {
		padding: 6rpx 20rpx;
		border-radius: 8rpx;
		background-color: #f5f5f5;
		color: #000000;
		margin-right: 16rpx;
		display: inline-block;
		font-size: 25rpx;
	}

	.Detail_Marks {
		white-space: nowrap;
	}

	/* 位置信息 */
	.addressImg {
		width: 30rpx;
		height: 30rpx;
		margin-right: 4rpx;
	}

	.Detail_address {
		color: #A8A8A8;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		margin: 16rpx 0;
	}

	/* 昵称 时间 个签 */
	.Detail_text {
		font-size: 32rpx;
		margin-top: 20rpx;
	}

	.Detail_time {
		font-size: 28rpx;
		color: #A8A8A8;
		width: 600rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.Detail_nickname {
		font-size: 32rpx;
	}

	/* 发布图片 */
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

	/* 头像 */
	.Detail_headimg {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		margin-right: 10rpx;
	}

	/* 详情右侧内容 */
	.Detail_right {
		width: 600rpx;
	}

	.Detail {
		display: flex;
		padding-left: 30rpx;
		padding-right: 30rpx;
		padding-top: 20rpx;
	}

	.content {

		font-family: Inter-Regular, Inter;

	}
</style>
