<template>
	<view>
		<view class="tab">
			<view class="xddw" @click="t1=true;t2=false">
				<view class="tab1" :class="{tt:t1==true}">消息列表</view>
				<view class="tab3" v-show="t1"></view>
				<view class="" v-if=""></view>
			</view>
			<view class="xddw" @click="t1=false;t2=true">
				<view class="tab2" :class="{tt:t2==true}">系统通知</view>
				<view class="tab4" v-show="t2"></view>
			</view>
		</view>
		<!-- 消息通知 -->
		<view class="" v-show="t1">
			<view class="tz" v-for="(item,index) in list" :key="index">
				<!-- 头像 -->
				<view class="tz1">
					<image class="tzimg" :src="item.image" mode=""></image>
				</view>
				<!-- 名字 内容 时间 -->
				<view class="tz2">
					<view class="tz3">{{item.name}}</view>
					<view class="tz4" v-for="(items,indexs) in item.notice" :key="indexs">
						<view class="tz4_1">{{items}}</view>
					</view>
					<view class="tz5">{{item.time}}</view>
				</view>
				<!-- 封面图 -->
				<view class="tz6">
					<image v-if="item.image1" class="tzimg1" :src="item.image1" mode=""></image>
					<view v-if="item.guanzhu" class="gzview">{{item.guanzhu}}</view>
				</view>
			</view>
		</view>
		<!-- 系统通知 -->
		<view class="" v-show="t2">
			<view class="win1" v-for="(t2,t2index) in list1" :key="t2index">
				<view class="win2">
					<view class="win3" v-for="(t2s,t2indexs) in t2.title" :key="t2indexs" :class="{win4:t2indexs==1}">
						{{t2s}}</view>
				</view>
				<view class="win5">{{t2.time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl:'',
				token:'',
				t1: true,
				t2: false,
				list: [{
						image: "../../static/indeximg/会员排名01.png",
						name: "王有志",
						notice: ["赞了你", ],
						time: "下午 6:10",
						image1: "../../static/indeximg/hypm05.png"
					},
					{
						image: "../../static/indeximg/会员排名01.png",
						name: "王有志",
						notice: ["评论了你", "我叫王有志今年超有志", ],
						time: "下午 6:10",
						image1: "../../static/indeximg/hypm05.png"
					},
					{
						image: "../../static/indeximg/会员排名01.png",
						name: "王有志",
						notice: ["关注了你", ],
						time: "下午 6:10",
						image1: "",
						guanzhu: "回关"
					},
				],
				// 系统通知
				list1: [{
						title: ["版本更新"],
						time: "2022-10-11",
					},
					{
						title: ["会员即将到期", "已剩余5天"],
						time: "2022-10-11"
					},
					{
						title: ["充值成功"],
						time: "2022-10-11"
					},
					{
						title: ["充值失败"],
						time: "2022-10-11"
					},
				]
			}
		},
		onLoad() {
			this.token=uni.getStorageSync('token');
			this.baseurl=getApp().globalData.baseurl;
		},
		mounted() {
			// 消息列表
			this.getusermassage();
		},
		methods: {
			getusermassage() {
				uni.request({
					url: this.baseurl + '/api/userMessage/getUserMessage',
					method: 'POST',
					data: {
						page: 1,
						num: 20,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	/* 系统消息 */
	.win5 {
		color: #A7A7A7;
	}

	.win4 {
		font-size: 22rpx;
		color: #f8b800;
	}

	.win3 {
		font-weight: 500;

	}

	.win1 {
		display: flex;
		justify-content: space-between;
		margin: 0rpx 25rpx;
		border-top: 1rpx solid #F1F1F1;
		border-bottom: 1rpx solid #F1F1F1;
		padding: 25rpx 0;
	}

	/* 消息通知 */
	.tab {
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: 20rpx 100rpx;
	}

	.tt {
		font-weight: 600;
	}

	.xddw {
		position: relative;
	}

	.tab3 {
		background: rgba(248, 184, 0, 0.5);
		width: 35rpx;
		height: 35rpx;
		border-radius: 50%;
		position: absolute;
		top: 0rpx;
		left: -10rpx;
	}

	.tab4 {
		background: rgba(248, 184, 0, 0.5);
		width: 35rpx;
		height: 35rpx;
		border-radius: 50%;
		position: absolute;
		top: 0rpx;
		left: -10rpx;
	}

	.gzview {
		background: #f8b800;
		color: white;
		border-radius: 20rpx;
		width: 100rpx;
		font-size: 24rpx;
		text-align: center;
		padding: 5rpx;
	}

	.tz {
		display: flex;
		margin: 0 20rpx;
		border-top: 1rpx solid #F1f1f1;
		margin: 0 20rpx;
		padding: 10rpx 0rpx;
	}

	.tz6 {
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tz5 {
		color: #A7A7A7;
	}

	.tz3 {
		color: #A7A7A7;
	}

	.tz2 {
		width: 65%;
	}

	.tz1 {
		width: 15%;
		display: flex;
		justify-content: center;
	}

	.tzimg1 {
		width: 100rpx;
		height: 100rpx;
	}

	.tzimg {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}
</style>
