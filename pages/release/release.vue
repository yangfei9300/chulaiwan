<template>
	<view class="content">
		<view class="reles1">选择分类</view>
		<view class="reles2" v-for="(item,index) in Catelist" :key="index" @click="Group(item.name,item.id)">
			<image class="reles3" :src="item.cover1" mode=""></image>
			<view class="reles4">
				<view class="reles5">{{item.name}}</view>
				<view class="reles6">
					<view class="reles7">{{item.remark}}</view>
				</view>
			</view>
		</view>
		<!-- 底部tabbar -->
		<!-- 	<view class="tabbar">
			<view class="tabbar_for" v-for="(item,index) in tabbarlist" :key="index" @click="navswich(item.id)">
				<image class="tabbar_img" :class="{tabbar_img_3:item.id==2}" :src="item.img" mode=""></image>
				<view class="tabbar_name" :class="{tabbar_active:item.id==2}">{{item.name}}</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: "",
				baseurl: "",
				Catelist: [
					// 	{
					// 		img: "../../static/indeximg/商家推荐02.png",
					// 		name: "桌游",
					// 		title: ["剧本杀", "三国杀", "狼人杀", "麻将"]
					// 	},
					// 	{
					// 		img: "../../static/indeximg/商家推荐02.png",
					// 		name: "干饭",
					// 		title: ["火锅", "烧烤", "自助", "下午茶"]
					// 	},
					// 	{
					// 		img: "../../static/indeximg/商家推荐02.png",
					// 		name: "酒吧",
					// 		title: ["静吧", "民谣酒吧"]
					// 	},
					// 	{
					// 		img: "../../static/indeximg/商家推荐02.png",
					// 		name: "室内娱乐",
					// 		title: ["密室逃脱", "KTV", "电玩城"]
					// 	},
					// 	{
					// 		img: "../../static/indeximg/商家推荐02.png",
					// 		name: "运动健身",
					// 		title: ["篮球", "足球", "健身房", "游戏"]
					// 	},
					// 	{
					// 		img: "../../static/indeximg/商家推荐02.png",
					// 		name: "自由行",
					// 		title: ["逛街", "探店", "团建", "爬山"]
					// 	},
				],
				// 底部tabbar
				tabbarlist: [{
						id: 0,
						img: "../../static/indeximg/tabbar11.png",
						name: "首页"
					},
					{
						id: 1,
						img: "../../static/indeximg/tabbar22.png",
						name: "活动"
					},
					{
						id: 2,
						img: "../../static/indeximg/fabu.png",
						name: "发布"
					},
					{
						id: 3,
						img: "../../static/indeximg/quanzi1.png",
						name: "圈子"
					},
					{
						id: 4,
						img: "../../static/indeximg/tabbar3.png",
						name: "我的"
					},
				],
			}
		},
		onLoad() {
			this.baseurl = getApp().globalData.baseurl;
			this.token = uni.getStorageSync('token');

		},
		mounted() {
			this.actCate()
		},
		methods: {
			actCate() {
				uni.request({
					url: this.baseurl + '/api/act/actCate',
					method: 'POST',
					data: {
						page: 1,
						num: 6,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token,
					},
					success: res => {
						console.log("分类",res);
						this.Catelist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			Group(name,id) {
				// uni.$emit('name', {
				// 	name: name
				// });
				getApp().globalData.fenleis=name;
				var pages = getCurrentPages();
				var prevPage = pages[pages.length - 2]; //上一个页面

				uni.navigateBack({
					delta: 1,
					success: function() {
						prevPage.$vm.fenleiname = name;
						prevPage.$vm.cate_id = id;
						//触发上个页面的方法
					}
				});
				// uni.navigateTo({
				// 	url: '../../page_release/Group/Group?name='+name,
				// 	// url:"../../page_release/aaaaaaaa/aaaaaaaa",
				// 	// url:'../../page_release/business/business',
				// 	success: res => {},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
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
					uni.switchTab({
						url: '../release/release'
					})
				} else if (ID == 3) {
					uni.switchTab({
						url: '../circle/circle'
					})
				} else if (ID == 4) {
					uni.switchTab({
						url: '../my/my'
					})
				}

			}
		}
	}
</script>

<style scoped lang="scss">
	.reles1 {
		font-weight: 900;
		font-size: 33rpx;
		margin-left: 20rpx;
	}

	.reles2 {
		background-color: white;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		padding: 20rpx;
		margin: 20rpx;
	}

	.reles2:active {
		/* background-color: white;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		padding: 20rpx;
		 margin: 20rpx; */
		border: 1rpx solid #F8B800;

		.reles5 {
			color: #F8B800;
		}
	}

	.reles3 {
		width: 220rpx;
		height: 150rpx;
		border-radius: 20rpx;
	}

	.reles4 {
		margin-left: 40rpx;

	}

	.reles5 {
		font-size: 38rpx;
		font-weight: 900;
		margin-bottom: 10rpx;
	}

	.reles6 {
		display: flex;
	}

	.reles7 {
		margin-right: 20rpx;
		font-size: 28rpx;
	}

	.reles8 {}

	.reles9 {}

	// 底部导航栏
	.tabbar_name {
		color: #A7A7A7;
		font-size: 24rpx;
	}

	.tabbar_active {
		color: #F8B800;
	}

	.tabbar_img {
		width: 50rpx;
		height: 50rpx;
	}

	.tabbar_img_3 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		background: white;
		left: 25rpx;
		top: -40rpx;
		padding: 10rpx;
		border-radius: 65rpx;
	}

	.tabbar_for {
		text-align: center;
		width: 20%;
		padding: 20rpx;
		position: relative;
	}

	.tabbar {
		z-index: 1;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: white;
		display: flex;
		justify-content: space-between;
	}

	.content {
		background-color: #FAFAFA;
		padding-bottom: 200rpx;
	}
</style>
