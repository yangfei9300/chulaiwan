<template>
	<view class="content">
		<image class="cover" :src="list.cover" mode=""></image>
		<view class="DetailView">
			<view class="DetailTop">
				<view class="Detailaddress">{{list.title}}</view>
				<view class="DetailDate">
					<view class="DetailDate_title">活动时间:</view>
					<view class="DetailDate_time">{{list.date}}</view>
				</view>
				<view class="DetailDate">
					<view class="DetailDate_title">活动地址:</view>
					<view class="DetailDate_time">{{list.address}}</view>
				</view>
				<view class="DetailDate">
					<view class="DetailDate_title">活动人员&nbsp;&nbsp;:&nbsp;&nbsp;({{list.user_num}}人)</view>
					<view class="DetailDate_time">{{list.user}}</view>
				</view>
			</view>

			<!-- 粗线 -->
			<view class="cuxian"></view>
			<view class="DetailContext">
				<view class="" v-html="list.content"></view>
			</view>
			<view class="DetailBottom">
				<view class="DetailBottom_Left">{{list.create_at}}</view>
				<view class="DetailBottom_Right">
					<view class="DetailBottom_RightView">
						<image class="linkImg" src="../../static/pinglun.png" mode=""></image>
						<view class="">{{list.comment_num}}</view>
					</view>
					<view class="DetailBottom_RightView" @click="MomentLike()">
						<image class="linkImg" v-if="list.is_like==1" src="../static/hxin.png" mode=""></image>
						<image class="linkImg" v-if="list.is_like==0" src="../static/xin.png" mode=""></image>
						<view class="">{{list.like_num}}</view>
					</view>
				</view>
			</view>
			<view class="DetailPeople">
				<image class="DetailPeopleIMG" src="../static/hxin.png" mode=""></image>
				<scroll-view class="DetailPeopleScoll" scroll-x="true">
					<image class="Detailheadimg" @click="geren(Likeitem.uuid)" v-for="(Likeitem,Likeindex) in list.like_list" :src="Likeitem.headimg"
						mode=""></image>
				</scroll-view>
			</view>
			<view class="cuxian"></view>
			<!-- 评论列表 -->
			<view class="Com">
				<view class="Com_title">评论</view>
				<view class="ComView" v-for="(Comitem,Comindex) in CommentList" :key="Comindex">
					<image class="ComImg" @click="geren(Comitem.uuid)" :src="Comitem.headimg" mode=""></image>
					<view class="ComRight">
						<view class="ComNickname">{{Comitem.nickname}}</view>
						<view class="ComMent">{{Comitem.comment}}</view>
						<view class="ComNickname">{{Comitem.create_at}}</view>
					</view>
				</view>
			</view>
			<!-- 回复评论 -->
			<view class="ReplyComment">
				<input class="ReplyComment_input" placeholder="请输入要评论的内容" type="text" adjust-position="true"
					v-model="commentValue" value="" />
				<view class="ReplyComment_btn" @click="fubs()">发送</view>
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
				id: '',
				page: 1,
				list: [],
				CommentList: [],
				commentValue: "",
			}
		},
		onLoad(options) {
			this.id = options.id;
		},
		mounted() {
			// this.getInfo();
			// this.comlist()
		},
		onPullDownRefresh() {
			this.page=1;
			this.list=[];
			this.CommentList=[];
			this.getInfo();
			this.comlist();
			uni.stopPullDownRefresh();
		},
		onReachBottom() {
			this.comlist();
		},
		onShow() {
			this.getIsToken();
		},
		methods: {
			onshowPage(){
				this.getInfo();
				this.comlist()
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
			
			
			getInfo() {
				
				var url = '/api/act/pastActInfo';
				if (!this.tokenValue) {
					url = "/api/IosVisitor/pastActInfo";
				}
				
				uni.request({
					url: this.baseurl +url,
					method: 'POST',
					data: {
						id: this.id,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log(res);
						this.list = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			comlist() {
				uni.request({
					url: this.baseurl + '/api/act/pastActCommentList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						page: this.page++,
						num: 100,
						id: this.id,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log(res)
						this.CommentList = this.CommentList.concat(res.data.data);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			//分享
			onShareAppMessage(res) {
			
					if (res.from === 'button') {// 来自页面内分享按钮
					console.log(res.target)
					}
					return {
					title: '往期活动',
					 imageUrl:"https://jiayiwangluo.oss-cn-beijing.aliyuncs.com/image/xcx/171151604849876.png",
					path: '/pages_wode/PastDetail/PastDetail?id='+this.id
					}
				},
			// 圈子点赞
			MomentLike() {
				uni.request({
					url: this.baseurl + '/api/act/pastActLike',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						id: this.id,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("喜欢", res.data.data);
						if (res.data.data == 0) {
							this.list.is_like = res.data.data
							this.list.like_num -= 1
							uni.request({
								url: this.baseurl + '/api/act/pastActInfo',
								method: 'POST',
								data: {
									id: this.id,
									
									city:uni.getStorageSync("citySel"),
								},
								header: {
									xcx:1,
									token: this.token
								},
								success: res => {
									console.log(res);
									this.list.like_list = res.data.data.like_list;
								},
								fail: () => {},
								complete: () => {}
							});

						} else if (res.data.data == 1) {
							this.list.is_like = res.data.data;
							this.list.like_num += 1;

							uni.request({
								url: this.baseurl + '/api/act/pastActInfo',
								method: 'POST',
								data: {
									id: this.id,
									
									city:uni.getStorageSync("citySel"),
								},
								header: {
									xcx:1,
									token: this.token
								},
								success: res => {
									console.log(res);
									this.list.like_list = res.data.data.like_list;
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
			// 发送评论
			fubs() {
				uni.request({
					url: this.baseurl + '/api/act/pastActCommentDo',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					// comment_id一级回复,back_id二级回复comment回复内容,moments_no回复的圈子编号
					data: {
						id: this.id,
						comment: this.commentValue,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("直接发表", res)
						this.commentValue = '';
						this.placeholder = " ";
						this.page = 1;
						this.CommentList=[];
						this.comlist()
					},  
					fail: () => {},
					complete: () => {}
				});


			},
			// 查看主页
			geren(uuid){
				uni.navigateTo({
					url: '/pages_wode/PersonalCenter/PersonalCenter?uuid='+uuid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
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
		border-bottom: 1rpx solid #f3f3f3;
		padding-bottom: 26rpx;
		margin-bottom: 26rpx;


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

	/* 时间排列 */
	.DetailBottom_RightView {
		display: flex;
		align-items: center;
		margin-left: 15rpx;
	}

	.DetailBottom_Right {
		display: flex;
		align-items: center;
	}

	.DetailBottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 34rpx;
		margin: 18rpx 0;
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

	/* 评论 */
	.linkImg {
		width: 48rpx;
		height: 48rpx;
		margin-right: 4rpx;
	}

	.DetailContext {
		padding: 0 34rpx;
	}

	/* 粗线 */
	.cuxian {
		width: 100%;
		height: 16rpx;
		background: #F6F6F6;
		border-radius: 0px 0px 0px 0px;
		opacity: 1;
		margin: 44rpx 0;
	}

	/* 上半部分 */
	.DetailDate_time {
		/* height: 38rpx; */
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #676767;
		line-height: 38rpx;
	}

	.DetailDate_title {
		height: 44rpx;
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 600;
		color: #000000;
		line-height: 42rpx;
		margin-bottom: 10rpx;
	}

	.DetailDate {
		padding: 16rpx 0;
		border-bottom: 1rpx solid #F2F2F2;
	}

	.Detailaddress {
		height: 48rpx;
		font-size: 40rpx;
		font-family: Inter-Bold, Inter;
		font-weight: bold;
		color: #000000;
		line-height: 46rpx;
		text-align: center;
	}

	.DetailTop {
		padding-left: 34rpx;
		padding-right: 34rpx;
	}

	.DetailView {
		/* height: 500rpx; */
		/* width: 100%; */
		border-radius: 80rpx;
		background-color: white;

		padding-top: 78rpx;
	}

	.cover {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 580rpx;
		z-index: -1;
	}

	.content {
		padding-top: 430rpx;
	}
</style>
