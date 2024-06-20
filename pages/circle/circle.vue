<template>
	<view class="content">
		<view class="topview"></view>

		<view
			class="Tab colonn"
			:class="{
				bbbg1: isFriendsShow,
				bbbg1: !isFriendsShow
			}"
		>
			<image
				style="width: 750rpx"
				:style="{
					height: jiaonang.height + jiaonang.top + 'px'
				}"
				class="topview"
			></image>

			<!-- src="http://ysv.zjhaly.top/chulaiwan/active/qztop.png" -->
			<view class="colonn bacdaas" style="position: relative; top: -10rpx">
				<!--  :class="{
				'guanzhutxtbgP':!isFriendsShow,
			}"  -->
				<view class="h-30"></view>
				<view class="roww">
					<view class="Tab_view" @click="Tab_zuixin">
						<view class="" style="z-index: 10" :class="{ Tabtext: TabTrue }">最新动态</view>
						<view class="quan" style="z-index: 0" v-show="TabTrue"></view>
					</view>
					<view class="Tab_view" @click="Tab_guanzhu">
						<view class="" style="z-index: 10" :class="{ Tabtext: !TabTrue }">关注好友</view>
						<view class="quan1" style="z-index: 0" v-show="!TabTrue"></view>
					</view>
					<image class="quanzi" @click="release()" src="../../static/clickquanzi.png" mode=""></image>
				</view>
				<view class="h-30"></view>
			</view>
		</view>

		<!-- 圈子来消息 -->
		<view class="colonn quanzibei">
			<view class="toptitle" style="margin-top: -20rpx">
				<view class="FriendView">
					<view v-if="FriendList.length > 0" class="Friend_view" v-for="(Fitem, Findex) in FriendList" :key="Findex" @click.stop="navzhongxin(Fitem.id)">
						<image
							class="Friendheadimg headerimg"
							fade-in="true"
							:class="{ FriendSex0: Fitem.base_sex == 0, FriendSex1: Fitem.base_sex == 1 }"
							:src="Fitem.headimg + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
							lazy-load
							mode=""
						></image>
						<image class="Friendjia" v-if="Friendfollow.includes(Fitem.id)" src="../../static/yiguan.png" mode=""></image>
						<image class="Friendjia" lazy-load v-else @click.stop="FriendFollow(Fitem.id)" src="../../static/weiguan.png" mode=""></image>
						<view class="Friendnickname">{{ Fitem.nickname }}</view>
					</view>
				</view>
			</view>

			<view class="Massage" style="margin-top: 20rpx" v-if="MassageList.headimg" @click="notification()">
				<view class="MassageView">
					<image class="MassageImg" :src="MassageList.headimg + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'" mode=""></image>
					<view class="Massagename">{{ MassageList.num }}条新消息</view>
				</view>
			</view>

			<!-- <view class="Massage" style="margin-top: 20rpx;" @click="notification()">
				<view class="MassageView">
					<image class="MassageImg"  mode=""></image>
					<view class="Massagename">33条新消息</view>
				</view>
			</view> -->
		</view>

		<view class="h-30"></view>

		<!-- 最新动态 -->
		<view class="plist" v-if="TabTrue">
			<!--width::250,height:250,
			width:140 height::300,长图
			width:250,height:110宽图
			-->
			<view
				class="MomentView"
				:style="{
					background: Mitem.is_vip == 2 ? 'linear-gradient(to bottom, #FDECBC, #FFF8E5, #FFFFFF,#FFFFFF)' : 'white'
				}"
				v-for="(Mitem, Mindex) in MomentList"
				:key="Mindex"
				@click.stop="navDetail(Mitem.moments_no)"
			>
				<view style="display: flex" class="roww center_center">
					<image
						class="MomentImg"
						@click.stop="navzhongxin(Mitem.uuid)"
						:src="Mitem.headimg + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
						mode=""
					></image>
					<view class="w-20"></view>
					<view class="MomentRight">
						<!-- 名称个签 关注 -->
						<view class="MomentNickname">
							<view class="colonn">
								<view class="roww center_center">
									<view class="Moment_title">{{ Mitem.nickname }}</view>

									<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 297@2x.png" class="w-98 h-40 m-left-24" v-if="Mitem.is_vip == 1"></image>
									<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 298@2x.png" class="w-98 h-40 m-left-24" v-if="Mitem.is_vip == 2"></image>

									<image v-if="Mitem.is_auth == 1" src="https://ta.imjiayi.com/upload/upload/2@2x.png" class="w-30 h-30 m-left-15"></image>

									<image
										v-if="Mitem.is_avatar == 1 && Mitem.base_sex == 1"
										class="w-30 h-30 m-left-15"
										src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png"
									></image>
									<image
										v-if="Mitem.is_avatar == 1 && Mitem.base_sex == 0"
										class="w-30 h-30 m-left-15"
										src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png"
									></image>

									<view class="allline"></view>
								</view>

								<view class="h-10"></view>
								<view class="Moment_base_sign">{{ Mitem.base_sign ? Mitem.base_sign : '出来玩就现在~' }}</view>
							</view>
							<view class="MomentIS" @click.stop="follow(Mitem.uuid, Mindex)" v-if="Mitem.is_follow == 0 && uid !== Mitem.uuid">关注</view>
							<image
								class="w-25 h-25"
								v-else-if="uid == Mitem.uuid"
								@click.stop="delDongtai(Mitem, Mindex)"
								src="https://ta.imjiayi.com/upload/upload//Component 128@2x.png"
							></image>
						</view>
					</view>
				</view>
				<view class="mtcontent">
					<view class="MomentText">{{ Mitem.text }}</view>
					<view class="" style="display: flex; flex-wrap: wrap; width: 584rpx">
						<view v-if="Mitem.type == 2">
							<!-- <video @click.stop=""  :src="Mitem.video_xcx[0].imgUrl" ></video> -->

							<videos
								:videoUrl="Mitem.video_xcx[0].imgUrl"
								:width="Mitem.video_xcx[0].width_b"
								:height="Mitem.video_xcx[0].height_b"
								:imgUrl="Mitem.video_xcx[0].imgUrl"
								:videoImg="Mitem.video_xcx[0].video_img"
							></videos>
						</view>
						<view v-else>
							<!-- <image class="MomentPhoto4" v-if="Mitem.photo.length==4"
							@click.stop="previewImage(Mitem.photo,Mindex,MMindex)"
							v-for="(MMitem,MMindex) in Mitem.photo" :key="MMindex" :src="MMitem.imgUrl"
							mode="aspectFill"></image> -->
							<!-- Mitem.photo.length>=4 -->
							

							<!-- <image class="MomentPhoto5 headerimg" 
						lazy-load @click.stop="previewImage(Mitem.photo,Mindex,MMindex)"
							v-if="Mitem.photo.length>1&&Mitem.photo.length<4" v-for="(MMitem,MMindex) in Mitem.photo"
							:key="MMindex" :src="MMitem.imgUrl+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'" 
							mode="aspectFill"></image> -->

							<!-- 宽图 -->
							<image 
								class="MomentPhoto headerimg"
								lazy-load
								style="width: 250px; height: 110px"
								@click.stop="previewImage(Mitem.photo, Mindex, MMindex)"
								v-if="Mitem.photo.length == 1 && MMitem.width > MMitem.height && MMitem.width > 250"
								v-for="(MMitem, MMindex) in Mitem.photo"
								:key="MMindex"
								:src="MMitem.imgUrl + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
								mode="widthFix"
							></image>
							<!-- 长图 -->
							<image
								class="MomentPhoto headerimg"
								lazy-load
								style="width: 140px; height: 300px"
								@click.stop="previewImage(Mitem.photo, Mindex, MMindex)"
								v-if="Mitem.photo.length == 1 && MMitem.width < MMitem.height && MMitem.height > 300"
								v-for="(MMitem, MMindex) in Mitem.photo"
								:key="MMindex"
								:src="MMitem.imgUrl + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
								mode="heightFix"
							></image>
							<!-- 宽高相等 -->
							<image
								class="MomentPhoto headerimg"
								lazy-load
								style="width: 240px; height: 240px"
								@click.stop="previewImage(Mitem.photo, Mindex, MMindex)"
								v-if="Mitem.photo.length == 1 && MMitem.width == MMitem.height"
								v-for="(MMitem, MMindex) in Mitem.photo"
								:key="MMindex"
								:src="MMitem.imgUrl + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
							></image>
							<!-- <image class="MomentPhoto" @click.stop="previewImage(Mitem.photo,Mindex,MMindex)"
							v-if="Mitem.photo.length==1 && MMitem.width<250 && MMitem.height<250"
							v-for="(MMitem,MMindex) in Mitem.photo" :key="MMindex" :src="MMitem.imgUrl"
							mode="heightFix"></image> -->
							<view class="huanhang w-440" v-if="Mitem.photo.length == 4">
								<image
									lazy-load
									class="MomentPhoto4"
									@click="previewImage(Mitem.photo, Mindex, MMindex)"
									v-for="(MMitem, MMindex) in Mitem.photo"
									:key="MMindex"
									:src="MMitem.imgUrl + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
									mode="aspectFill"
								></image>
							</view>
							<view class="w-620 huanhang" v-else-if="Mitem.photo.length > 1">
								<image
									class="MomentPhoto5"
									lazy-load
									@click.stop="previewImage(Mitem.photo, Mindex, MMindex)"
									v-for="(MMitem, MMindex) in Mitem.photo"
									:key="MMindex"
									:src="MMitem.imgUrl + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
									mode="aspectFill"
								></image>
							</view>
						</view>
					</view>
					<!-- 地址信息 -->
					<view class="Address" v-if="Mitem.address">
						<image class="AddressImg" src="../../static/white_address.png" mode=""></image>
						<view class="">{{ Mitem.address }}</view>
					</view>
					<!-- 兴趣标签 -->
					<scroll-view class="Marks" scroll-x="true">
						<view class="MarksView" v-for="(Marksitem, Marksindex) in Mitem.marks" :key="Marksindex">
							{{ Marksitem }}
						</view>
					</scroll-view>
					<!-- 时间点赞 -->
					<view class="Time">
						<view class="TimeText">{{ Mitem.time_show }}</view>
						<view class="TimeView">
							<view class="TimeLink roww center_center">
								<image class="TimeImg" src="../../static/pinglun.png" mode=""></image>
								<view class="w-15"></view>
								<view class="">{{ Mitem.comment_num }}</view>
							</view>
							<view class="w-30"></view>
							<view class="TimeLink roww center_center" @click.stop="MomentLike(Mitem.moments_no, Mindex, 1)">
								<image v-if="Mitem.is_like == 0" class="TimeImg" src="../../static/xin.png" mode=""></image>
								<image v-if="Mitem.is_like == 1" class="TimeImg" src="../../static/hxin.png" mode=""></image>
								<view class="w-15"></view>
								<view class="">{{ Mitem.like_num }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 关注好友列表 -->
		<view class="plist" v-if="!TabTrue">
			<!--width::250,height:250,
			width:140 height::300,长图
			width:250,height:110宽图
			-->
			<view class="MomentView" v-for="(Mitem, Mindex) in MomentListtow" :key="Mindex" @click="navDetail(Mitem.moments_no)">
				<view style="display: flex">
					<image
						class="MomentImg"
						@click.stop="navzhongxin(Mitem.uuid)"
						:src="Mitem.headimg + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
						mode=""
					></image>
					<view class="MomentRight">
						<!-- 名称个签 关注 -->
						<view class="MomentNickname">
							<view class="">
								<!-- <view class="Moment_title">{{Mitem.nickname}}{{Mitem.type}}</view> -->

								<view class="roww center_center">
									<view class="Moment_title">{{ Mitem.nickname }}</view>

									<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 297@2x.png" class="w-98 h-40 m-left-24" v-if="Mitem.is_vip == 1"></image>
									<image src="https://ta.imjiayi.com/upload/upload/huiyuan/Component 298@2x.png" class="w-98 h-40 m-left-24" v-if="Mitem.is_vip == 2"></image>

									<image v-if="Mitem.is_auth == 1" src="https://ta.imjiayi.com/upload/upload/2@2x.png" class="w-30 h-30 m-left-15"></image>
									<image
										v-if="Mitem.is_avatar == 1 && Mitem.base_sex == 1"
										class="w-30 h-30 m-left-15"
										src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png"
									></image>
									<image
										v-if="Mitem.is_avatar == 1 && Mitem.base_sex == 0"
										class="w-30 h-30 m-left-15"
										src="https://ta.imjiayi.com/upload/upload/huiyuan/%E8%85%BE%E8%AE%AF%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81@2x.png"
									></image>
									<view class="allline"></view>
								</view>

								<view class="Moment_base_sign">{{ Mitem.base_sign ? Mitem.base_sign : '出来玩就现在~' }}</view>
							</view>
							<view class="MomentIS" @click.stop="follow(Mitem.uuid, Mindex)" v-if="Mitem.is_follow == 0 && uid !== Mitem.uuid">关注</view>

							<image
								class="w-40 h-40"
								v-else-if="uid == Mitem.uuid"
								lazy-load
								@click.stop="delDongtai(Mitem, Mindex)"
								src="https://ta.imjiayi.com/upload/upload//Component 128@2x.png"
							></image>
						</view>
					</view>
				</view>
				<view class="mtcontent">
					<view class="MomentText">{{ Mitem.text }}</view>
					<view class="" style="display: flex; flex-wrap: wrap; width: 584rpx">
						<view v-if="Mitem.type == 2">
							<!-- <video @click.stop=""  :src="Mitem.video_xcx[0].imgUrl" ></video> -->

							<videos
								:videoUrl="Mitem.video_xcx[0].imgUrl"
								:width="Mitem.video_xcx[0].width_b"
								:height="Mitem.video_xcx[0].height_b"
								:imgUrl="Mitem.video_xcx[0].imgUrl"
								:videoImg="Mitem.video_xcx[0].video_img"
							></videos>
						</view>
						<view v-if="Mitem.type == 1">
							
							<view class="huanhang w-620">
								<image
									class="MomentPhoto5"
									v-if="Mitem.photo.length > 4"
									@click.stop="previewImage(Mitem.photo, Mindex, MMindex)"
									v-for="(MMitem, MMindex) in Mitem.photo"
									lazy-load
									:key="MMindex"
									:src="MMitem.imgUrl + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
									mode="aspectFill"
								></image>
							</view>

							<image
								class="MomentPhoto5 headerimg"
								@click.stop="previewImage(Mitem.photo, Mindex, MMindex)"
								v-if="Mitem.photo.length > 1 && Mitem.photo.length < 4"
								v-for="(MMitem, MMindex) in Mitem.photo"
								:key="MMindex"
								lazy-load
								:src="MMitem.imgUrl + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
								mode="aspectFill"
							></image>
							<!-- 宽图 -->
							<image
								class="MomentPhoto headerimg"
								style="width: 250px; height: 110px"
								@click.stop="previewImage(Mitem.photo, Mindex, MMindex)"
								v-if="Mitem.photo.length == 1 && MMitem.width > MMitem.height && MMitem.width > 250"
								v-for="(MMitem, MMindex) in Mitem.photo"
								lazy-load
								:key="MMindex"
								:src="MMitem.imgUrl + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
								mode="widthFix"
							></image>
							<!-- 长图 -->
							<image
								class="MomentPhoto headerimg"
								style="width: 240px; height: 240px"
								@click.stop="previewImage(Mitem.photo, Mindex, MMindex)"
								v-if="Mitem.photo.length == 1 && MMitem.width < MMitem.height && MMitem.height > 300"
								v-for="(MMitem, MMindex) in Mitem.photo"
								lazy-load
								:key="MMindex"
								:src="MMitem.imgUrl + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
								mode="heightFix"
							></image>
							<view class="huanhang w-440" v-if="Mitem.photo.length == 4">
								<image
									lazy-load
									class="MomentPhoto4"
									@click="previewImage(Mitem.photo, Mindex, MMindex)"
									v-for="(MMitem, MMindex) in Mitem.photo"
									:key="MMindex"
									:src="MMitem.imgUrl + '?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
									mode="aspectFill"
								></image>
							</view>
							
						</view>
					</view>
					<!-- 地址信息 -->
					<view class="Address" v-if="Mitem.address">
						<image class="AddressImg" src="../../static/white_address.png" mode=""></image>
						<view class="">{{ Mitem.address }}</view>
					</view>
					<!-- 兴趣标签 -->
					<scroll-view class="Marks" scroll-x="true">
						<view class="MarksView" v-for="(Marksitem, Marksindex) in Mitem.marks" :key="Marksindex">
							{{ Marksitem }}
						</view>
					</scroll-view>
					<!-- 时间点赞 -->
					<view class="Time">
						<view class="TimeText">{{ Mitem.time_show }}</view>
						<view class="TimeView">
							<view class="TimeLink">
								<image class="TimeImg" src="../../static/pinglun.png" mode=""></image>
								<view class="">{{ Mitem.comment_num }}</view>
							</view>
							<view class="TimeLink" @click.stop="MomentLike(Mitem.moments_no, Mindex, 2)">
								<image v-if="Mitem.is_like == 0" class="TimeImg" src="../../static/xin.png" mode=""></image>
								<image v-if="Mitem.is_like == 1" class="TimeImg" src="../../static/hxin.png" mode=""></image>
								<view class="">{{ Mitem.like_num }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部tabbar -->
		<view class="tabbar">
			<view class="tabbar_for" v-for="(item, index) in tabbarlist" :key="index" @click.stop="navswich(item.id)">
				<image class="tabbar_img" :class="{ tabbar_img_3: item.id == 2 }" :src="item.img" mode=""></image>
				<view class="tabbar_name" :class="{ tabbar_active: item.id == 3 }">
					<block v-if="index != 2">{{ item.name }}</block>
				</view>
			</view>
		</view>

		<!-- 	<image src="https://ta.imjiayi.com/upload/upload/Component 302@2x.png" class="w-126 h-126 myxaiosa" @click="showApp"
		></image>
		 -->
		<loadApp v-if="showApp" @closeClick="showLoadApp"></loadApp>

		<image src="https://ta.imjiayi.com/upload/upload/Component 302@2x.png" class="w-126 h-126 myxaiosa" @click="showLoadApp()"></image>
	</view>
</template>

<script>
export default {
	data() {
		return {
			jiaonang: {},
			isFriendsShow: true, //是否显示朋友列表

			// 接口接收数组
			FriendList: [],
			MassageList: {},
			MomentList: [],
			MomentListtow: [],
			// 圈子顶部推荐判断数组
			Friendfollow: [],
			// Tab切换
			TabTrue: true,
			// 请求条件
			page: 1,
			page1: 1,
			baseurl: getApp().globalData.baseurl,
			token: getApp().globalData.token,
			uid: getApp().globalData.uuid,
			// 底部tabbar
			tabbarlist: [
				{
					id: 0,
					img: '../../static/TabImg/tabbar11.png',
					name: '首页'
				},
				{
					id: 1,
					img: '../../static/TabImg/tabbar22.png',
					name: '活动'
				},
				{
					id: 2,
					img: '../../static/TabImg/fabu.png',
					name: '发布'
				},
				{
					id: 3,
					img: '../../static/TabImg/quanzi.png',
					name: '圈子'
				},
				{
					id: 4,
					img: '../../static/TabImg/tabbar3.png',
					name: '我的'
				}
			],

			showApp: false
		};
	},
	onLoad() {
		var token = uni.getStorageSync('token');
		if (token) {
			this.token = token;
		}
		var token = uni.getStorageSync('token');
		if (token) {
			this.tokenValue = uni.getStorageSync('token');
		}
		uni.hideTabBar({
			animation: false
		});
	},
	onPageScroll(res) {
		console.log('页面华东', res);
		if (res.scrollTop == 0) {
			this.isFriendsShow = true;
		} else if (res.scrollTop > 200) {
			this.isFriendsShow = false;
		}
	},
	mounted() {
		console.error('mountedmounted');
		if (this.token) {
			this.getFriend();
			this.getMassage();
			this.getmomentTow();
		}

		this.getmoment();
	},
	onPullDownRefresh() {
		this.isFriendsShow = true;
		// this.getmoment();
		this.page = 1;
		this.page1 = 1;
		this.MomentList = [];
		this.MomentListtow = [];
		// this.getmomentTow();

		if (this.token) {
			this.getFriend();
			this.getMassage();
			this.getmomentTow();
		}

		this.getmoment();
		setTimeout((res) => {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	onReachBottom() {
		this.isFriendsShow = false;
		this.getmoment();

		if (this.token) {
			this.getmomentTow();
		}
	},
	onShow() {
		var token = uni.getStorageSync('token');
		if (token) {
			this.tokenValue = uni.getStorageSync('token');
			this.token = uni.getStorageSync('token');
		}
		console.error('onShowonShow');
		this.getIsToken();
	},
	methods: {
		getIsToken() {
			var token = uni.getStorageSync('token');
			var url = '/api/IosVisitor/checkToken';
			uni.request({
				url: this.baseurl + url,
				method: 'POST',
				data: {
					token: token,
					city: uni.getStorageSync('citySel')
				},
				header: {
					xcx: 1,
					token: token
				},
				success: (res) => {
					var data = res.data;
					if (data.code == 0) {
						getApp().globalData.token = null;
						this.token = null;
						uni.removeStorageSync('token');
					}
					this.onshowPage();
				},
				fail: () => {},
				complete: () => {}
			});
		},
		onshowPage() {
			this.getMassage();
			this.getJiaonang();
		},

		hideview() {},
		showLoadApp() {
			this.showApp = !this.showApp;
		},

		getJiaonang() {
			const jn = wx.getMenuButtonBoundingClientRect();
			this.jiaonang = jn;
		},
		showApp() {
			uni.showToast({
				title: '完整功能请下载APP',
				icon: 'none'
			});
		},
		//
		delDongtai(info, index) {
			uni.showModal({
				title: '提示',
				content: '确定要删除动态吗',
				success: (res) => {
					if (res.confirm) {
						this.delDongtaiDa(info, index);
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		delDongtaiDa(info, index) {
			uni.request({
				url: this.baseurl + '/api/moments/momentsDel',
				method: 'POST',
				header: {
					xcx: 1,
					token: this.token
				},
				data: {
					moments_no: info.moments_no,
					city: uni.getStorageSync('citySel')
				},
				success: (res) => {
					console.log(res);
					if (res.data.code == 1) {
						uni.showToast({
							title: '删除成功',
							icon: 'none'
						});
						this.delDataDongtai(info, index);
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		delDataDongtai(info, index) {
			var TabTrue = this.TabTrue;
			var list = [];
			if (TabTrue) {
				list = this.MomentList;
			} else {
				list = this.MomentListtow;
			}
			var listNow = [];
			for (var a = 0; a < list.length; a++) {
				if (index != a) {
					listNow.push(list[a]);
				}
			}
			if (TabTrue) {
				this.MomentList = listNow;
			} else {
				this.MomentListtow = listNow;
			}
			this.$forceUpdate();
		},
		// 关注最新切换
		Tab_zuixin() {
			this.TabTrue = true;
		},
		Tab_guanzhu() {
			if (this.token) {
				this.TabTrue = false;
			} else {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				setTimeout((res) => {
					uni.reLaunch({
						url: '/pages/Login/Login'
					});
				}, 1000);
			}
		},
		getFriend() {
			uni.request({
				url: this.baseurl + '/api/moments/friend',
				method: 'POST',
				header: {
					xcx: 1,
					token: this.token
				},
				data: {
					city: uni.getStorageSync('citySel')
				},
				success: (res) => {
					// console.log("顶部推荐", res.data.data);
					this.FriendList = res.data.data;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		// 获取未读数量
		getMassage() {
			if (!this.token) {
				return;
			}
			uni.request({
				url: this.baseurl + '/api/userMessage/getUserMessageUnRead',
				method: 'POST',
				header: {
					xcx: 1,
					token: this.token
				},
				data: {
					city: uni.getStorageSync('citySel')
				},
				success: (res) => {
					// console.log("未读消息", res);

					if (res.data.code == 1001) {
						uni.showToast({
							title: '请先登录',
							icon: 'none'
						});
						setTimeout((res) => {
							uni.reLaunch({
								url: '/pages/Login/Login'
							});
						}, 1000);
					} else if (res.data.code == 1) {
						this.MassageList = res.data.data.maessage1;
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},

		// 获取最新动态
		getmoment() {
			var url = '/api/moments/momentsList';
			if (!this.tokenValue) {
				url = '/api/IosVisitor/momentsList';
			}

			uni.request({
				url: this.baseurl + url,
				method: 'POST',
				header: {
					xcx: 1,
					token: this.token
				},
				data: {
					page: this.page++,
					num: 3,
					type: 1,
					video: 1,
					city: uni.getStorageSync('citySel')
				},
				success: (res) => {
					console.log('圈子列表', res);
					let list = res.data.data;
					for (let i = 0; i < list.length; i++) {
						list[i].photo = list[i].photo.map((item) => {
							return JSON.parse(item);
						});
					}

					for (var a = 0; a < list.length; a++) {
						if (list[a].video_xcx.length > 0) {
							if (list[a].video_xcx[0].width < list[a].video_xcx[0].height) {
								list[a].video_xcx[0].width_b = 300;
								list[a].video_xcx[0].height_b = (300 / list[a].video_xcx[0].width) * list[a].video_xcx[0].height;
							} else {
								list[a].video_xcx[0].width_b = 600;
								list[a].video_xcx[0].height_b = (600 / list[a].video_xcx[0].width) * list[a].video_xcx[0].height;
							}
						}
					}

					this.MomentList = this.MomentList.concat(list);
					console.log('更新之后圈子列表', this.MomentList);
				},
				fail: () => {},
				complete: () => {}
			});
		},
		// 获取关注好友圈子
		getmomentTow() {
			var url = '/api/moments/momentsList';
			if (!this.tokenValue) {
				url = '/api/IosVisitor/momentsList';
			}

			uni.request({
				url: this.baseurl + url,
				method: 'POST',
				header: {
					xcx: 1,
					token: this.token
				},
				data: {
					page: this.page1++,
					num: 3,
					type: 2,
					city: uni.getStorageSync('citySel')
				},
				success: (res) => {
					// console.log("圈子列表", res);
					let list = res.data.data;
					for (let i = 0; i < list.length; i++) {
						list[i].photo = list[i].photo.map((item) => {
							return JSON.parse(item);
						});
					}
					this.MomentListtow = this.MomentListtow.concat(list);
					// console.log("更新之后圈子列表", this.MomentListtow);
				},
				fail: () => {},
				complete: () => {}
			});
		},

		// 预览图片
		previewImage(Mitem, MMitem, MMindex) {
			console.log(Mitem, MMitem, MMindex);
			let urls = [];
			Mitem.forEach((item) => {
				return urls.push(item.imgUrl);
			});
			console.log(urls);
			uni.previewImage({
				current: MMindex,
				urls: urls,
				success(res) {
					console.log(res);
				}
			});
		},
		// 顶部推荐关注
		FriendFollow(uuid) {
			var token = uni.getStorageSync('token');
			if (!token) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				setTimeout((res) => {
					uni.reLaunch({
						url: '/pages/Login/Login'
					});
				}, 1000);
				return;
			}

			var loginInfo = uni.getStorageSync('loginInfo');
			if (loginInfo) {
				if (loginInfo.status == 0) {
					uni.showToast({
						title: '请先完善信息',
						icon: 'none'
					});
					setTimeout((res) => {
						uni.navigateTo({
							url: '/pages_yindao/yindao1/yindao1'
						});
					}, 1000);
					return false;
				}
			}
			// includes
			uni.request({
				url: this.baseurl + '/api/user/follow',
				method: 'POST',
				header: {
					xcx: 1,
					token: this.token
				},
				data: {
					uuid,
					city: uni.getStorageSync('citySel')
				},
				success: (res) => {
					// console.log("关注", res);
					if (res.data.data == 1) {
						// console.log("关注成功");
						this.Friendfollow.push(uuid);
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		// 圈子列表是否关注
		follow(uuid, Mindex) {
			var token = uni.getStorageSync('token');
			if (!token) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				setTimeout((res) => {
					uni.reLaunch({
						url: '/pages/Login/Login'
					});
				}, 1000);
				return;
			}

			var loginInfo = uni.getStorageSync('loginInfo');
			if (loginInfo) {
				if (loginInfo.status == 0) {
					uni.showToast({
						title: '请先完善信息',
						icon: 'none'
					});
					setTimeout((res) => {
						uni.navigateTo({
							url: '/pages_yindao/yindao1/yindao1'
						});
					}, 1000);
					return false;
				}
			}

			uni.request({
				url: this.baseurl + '/api/user/follow',
				method: 'POST',
				header: {
					xcx: 1,
					token: this.token
				},
				data: {
					uuid,
					city: uni.getStorageSync('citySel')
				},
				success: (res) => {
					console.log('关注', res);
					if (res.data.data == 1) {
						console.log('关注成功');
						this.MomentList[Mindex].is_follow = 1;
						console.log(this.MomentList);
						let acc = uuid;
						this.MomentList.filter((item, index) => {
							console.log(item.uuid == uuid, index);
							if (item.uuid == uuid) {
								this.MomentList[index].is_follow = 1;
							}
						});
					} else {
						console.log('取消关注成功');
						this.MomentList.filter((item, index) => {
							console.log(item.uuid == uuid, index);
							if (item.uuid == uuid) {
								this.MomentList[index].is_follow = 0;
							}
						});
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		// 圈子点赞
		MomentLike(moments_no, Mindex, type) {
			var token = uni.getStorageSync('token');
			if (!token) {
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				setTimeout((res) => {
					uni.reLaunch({
						url: '/pages/Login/Login'
					});
				}, 1000);
				return;
			}

			var loginInfo = uni.getStorageSync('loginInfo');
			if (loginInfo) {
				if (loginInfo.status == 0) {
					uni.showToast({
						title: '请先完善信息',
						icon: 'none'
					});
					setTimeout((res) => {
						uni.navigateTo({
							url: '/pages_yindao/yindao1/yindao1'
						});
					}, 1000);
					return false;
				}
			}

			if (type == 1) {
				uni.request({
					url: this.baseurl + '/api/moments/momentsLike',
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token
					},
					data: {
						moments_no,
						city: uni.getStorageSync('citySel')
					},
					success: (res) => {
						console.log('喜欢', res.data.data);
						if (res.data.data == 1) {
							this.MomentList[Mindex].is_like = 1;
							this.MomentList[Mindex].like_num += 1;
						} else if (res.data.data == 0) {
							this.MomentList[Mindex].is_like = 0;
							this.MomentList[Mindex].like_num -= 1;
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
						token: this.token
					},
					data: {
						moments_no,
						city: uni.getStorageSync('citySel')
					},
					success: (res) => {
						console.log('喜欢', res.data.data);
						if (res.data.data == 1) {
							this.MomentListtow[Mindex].is_like = 1;
							this.MomentListtow[Mindex].like_num += 1;
						} else if (res.data.data == 0) {
							this.MomentListtow[Mindex].is_like = 0;
							this.MomentListtow[Mindex].like_num -= 1;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		// 跳转至圈子详情
		navDetail(moments_no) {
			uni.navigateTo({
				url: `../../pages_quanzi/criclleDetal/criclleDetal?moments_no=${moments_no}`,
				success: (res) => {},
				fail: () => {},
				complete: () => {}
			});
			console.log(11);
		},
		// 跳转到发布圈子
		release() {
			uni.navigateTo({
				url: '../../pages_quanzi/release/release',
				success: (res) => {},
				fail: () => {},
				complete: () => {}
			});
		},
		// tabbar跳转
		navswich(ID) {
			if (ID == 0) {
				uni.switchTab({
					url: '../index/index'
				});
			} else if (ID == 1) {
				uni.switchTab({
					url: '../activity/activity'
				});
			} else if (ID == 2) {
				// uni.navigateTo({
				// 	url: '../../page_release/Group/Group',
				// 	success: res => {},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
				uni.navigateTo({
					url: '../Group/Group',
					success: (res) => {},
					fail: () => {},
					complete: () => {}
				});
			} else if (ID == 3) {
				uni.switchTab({
					url: '../circle/circle'
				});
			} else if (ID == 4) {
				uni.switchTab({
					url: '../my/my'
				});
			}
		},
		// 跳转至个人中心
		navzhongxin(uuid) {
			uni.navigateTo({
				url: '/pages_wode/PersonalCenter/PersonalCenter?uuid=' + uuid,
				success: (res) => {},
				fail: () => {},
				complete: () => {}
			});
		},
		notification() {
			uni.navigateTo({
				url: '/pages_wode/notification/notification',
				success: (res) => {},
				fail: () => {},
				complete: () => {}
			});
		}
	}
};
</script>

<style scoped>
@import url(circle.css);
</style>
