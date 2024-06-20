<template>
	<!-- 聊天 -->
	<view class="consult">
		<!-- 图文 -->
		<view class="xqvv" v-if="list!==[]">
			<view class="" style="width: 13%;text-align: center;">
				<image class="xqimg" :src="list.headimg" mode=""></image>
			</view>
			<view class="" style="width: 87%;">
				<view class="xqv">
					<view class="xqv1">
						<view class="xqv2">
							<view class="xqv3">{{list.nickname}}</view>
							<view class="xqv4">
								<!-- 时间 -->
								<view class="xqv5">{{list.create_at}}</view>
								<view class="xqv6">{{list.base_sign}}</view>
							</view>
						</view>
					</view>
					<view class="xqv7" v-if="list.is_follow==0">关注</view>
				</view>
				<view class="xqv8">{{list.text}}</view>
				<view class="tp_view" >
					
					<image v-for="(items,indexs) in list.photo" :key="indexs"
						:class="{acsd:list.photo.length==1,acsd1:list.photo.length==2,acsd2:list.photo.length==3,acsd3:list.photo.length>=3,}"
						class="pl10" :src="items" mode="aspectFill" @click.stop="proimg(list.photo,indexs)"></image>
				</view>
				<view class="xqv9">
					<image class="xqimg2" src="../../static/index/address.png" mode=""></image>
					<view class="xqv10">{{list.address}}</view>
				</view>
				<view class="">
					<text class="huati" v-for="(item,index) in list.marks">#{{item}}</text>
				</view>
				<view class="xqv11">
					<view class="xqv12">
						<image class="xqimg3" src="../static/circle/pllogo1.png" mode=""></image>
						<view class="xqv13">{{list.comment_num}}</view>
					</view>
					<view class="xqv12">
						<image v-show="list.is_like==0" class="xqimg3" src="../static/circle/ax1.png" mode=""></image>
						<image v-show="list.is_like==1" class="xqimg3" src="../static/crcle/ax.png" mode=""></image>
						<view class="xqv13">{{list.like_num}}</view>
					</view>
				</view>

			</view>
		</view>
		<!-- 留灰色 -->
		<view class="huise"></view>
		<!-- 评论 -->
		<view class="aca1">
			<view class="aca2">评论</view>
		</view>
		<!-- 	<view class="aca3">
			<view class="aca4" >
				<image class="aca5" src="../../static/indeximg/Ellipse%2090.png" mode=""></image>
			</view>
			<view class="aca6" >
				<view class="aca7">汉峪</view>
				<view class="aca8">12:24</view>
				<view class="aca9">嗨害嗨</view>
			</view>
		</view> -->
		<view class="">
			<view class="aca3" v-for="(plitem,plindex) in pllist" :key="plindex">
				<view class="aca4">
					<image class="aca5" :src="plitem.headimg" mode=""></image>
				</view>
				<view class="aca6">
					<view class="aca7">{{plitem.nickname}}</view>
					<view class="aca9">{{plitem.comment}}</view>
					<view class="aca8"><text>{{plitem.time_show}}</text><text @click="btn(plitem.id,1)">回复</text></view>
					<!-- 评论 -->
					<view class="pinglun" v-for="(lzlitme,lzlindex) in plitem.son" :key="lzlindex">
						<view class="">
							<image class="pinglun_img" :src="lzlitme.headimg" mode=""></image>
						</view>
						<view class="">
							<view class="pinglun_name">{{lzlitme.nickname}}<text v-if="lzlitme.back">回复{{lzlitme.back}}</text></view>
							<view class="pinglun_content">{{lzlitme.comment}}</view>
							<view class="pinglun_time"><text>{{lzlitme.time_show}}</text><text
									@click="btn1(plitem.id,lzlitme.id,2)">回复</text>
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
		<!-- 评论功能 -->
		<view class="plgn">
			<input class="inputsy" :focus="ipt" @blur="btns" type="text" value="" ref="ipt" />
			<button class="pinglunbtn" @click="fssbtn">评论</button>
		</view>

		<!-- 	<view class="aca3">
			<view class="aca4" >
				<image class="aca5" src="../../static/indeximg/Ellipse%2090.png" mode=""></image>
			</view>
			<view class="aca6" >
				<view class="aca7">汉峪</view>
				<view class="aca8">12:24</view>
				<view class="aca9">嗨害嗨</view>
			</view>
		</view> -->



		<!-- 聊天记录 -->
		<!-- <chat-content></chat-content> -->
		<!-- 键盘 -->
		<!-- 	<view :class="['keyboard',useful_flag?'keyboard-active':'']">
			<view :class="['keyboard-tup',active_Up?'active-tup':'']">
				<input v-model="value" :focus="cursor" :cursor="resStart" @keyboardheightchange.stop="openinput"
					@blur="cursorss" @confirm="startSearch" />
				<image @click="openUseful(1)" class="plus-circle" src="../../static/circle/xiaolian.png" mode="">
				</image> -->
		<!-- <image class="useful" src="../../static/index/address.png" mode="" @click="openUseful(2)">
				</image> -->
		<!-- 	<view class="" @click="openUseful(2)">评论</view>
			</view> -->
		<!--常用语  -->
		<!-- <view class="useful-content" v-if="useful_expression === 2">
				<view class="useful-content-xiaoxi" v-for="item in 9">你好，可以帮我推荐几个兼职任务吗？</view>
			</view> -->
		<!-- 表情 -->
		<!-- <view class="expression" v-if="useful_expression === 1">
				<scroll-view class="emojis_scroll" :scroll-x="false" :scroll-y="true">
					<view v-for="item in emojis" :key="item.emojis" class="emoji"
						@click="ChooseToLook(`${item.emoji}`)">
						{{item.emoji}}
					</view>
				</scroll-view>
			</view>
		</view> -->
		<!-- 蒙板 -->
		<!-- <view class="shade" v-show="show" @click="close"></view> -->
		<!-- <navigator url="../xc/xc">下次</navigator> -->
		<!-- <u-album :urls="urls1" keyName="src2" :rowCount="3" ></u-album> -->
		<!-- <image src="../../static/activity/shaixuan.png" mode=""></image> -->
	</view>
</template>

<script>
	import chatContent from '../chatContent.vue'
	export default {
		components: {
			chatContent
		},
		data() {
			return {
				baseurl: '',
				token: '',
				list: [],
				pllist: [],
				// 输入框焦点
				plneirong:'',
				ipt: false,
				id:'',
				id1:'',
				type:'',
				time: '',
				show: false,
				cursor: false, //是否聚焦
				value: '',
				moments_no: '',
				active_Up: false,
				resStart: 0, //input光标位置
				useful_flag: false, //控制动画效果
				useful_expression: 2, //2默认表情,1常用语
				emojis: [{
						emoji: '😃'
					},
					{
						emoji: '🤣'
					}, //真机才能看见效果
					{
						emoji: '😁'
					},
					{
						emoji: '😆'
					},
					{
						emoji: '😅'
					}
				],
				zf: [{
						image: "../../static/index/naozhong.png",
						name: "99+"
					},
					{
						image: "../../static/index/naozhong.png",
						name: "99+"
					}
				],
				urls2: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				],
			}
		},
		onLoad(options) {
			console.log(options.moments_no);
			this.moments_no = options.moments_no;
			this.baseurl = getApp().globalData.baseurl;
			this.token = uni.getStorageSync('token');
		},
		mounted() {
			this.moments_no_detail();
			this.momentsComment_pinglun();
		},
		watch: {
			useful_flag: {
				handler(newval, oldval) {
					this.show = newval
				}
			}
		},
		methods: {
			// 预览图片
			proimg(img, id) {
				uni.previewImage({
					current: id,
					urls: img,
				})
			
			},
			// 发送评论
			fssbtn() {
				if(this.type==1){
					uni.request({
						url: this.baseurl + '/api/moments/momentsCommentDo',
						method: 'POST',
						header: {
							token: this.token
						},
						// back2级评论
						data: {
							moments_no: this.moments_no,
							comment:this.plneirong,
							comment_id:this.id,
							city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log("回复一级", res);
							this.momentsComment_pinglun();
						},
						fail: () => {},
						complete: () => {}
					});
				}else if(this.type==2){
					uni.request({
						url: this.baseurl + '/api/moments/momentsCommentDo',
						method: 'POST',
						header: {
							xcx:1,
							token: this.token
						},
						// back2级评论
						data: {
							moments_no: this.moments_no,
							comment:this.plneirong,
							comment_id:this.id,
							back_id:this.id1,
							city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log("回复二级", res);
							this.momentsComment_pinglun();
						},
						fail: () => {},
						complete: () => {}
					});
				}
			
			},
			// 输入框失去焦点时让ipt变为falsevalue内容同步到本地
			btns(even) {
				this.ipt = false;
				console.log("输入框失去焦点", even.detail.value);
				this.plneirong=even.detail.value;
			},
			// 点击按钮调起输入框
			btn(id,type) {
				// this.$refs.ipt.Focus();
				this.ipt = true;
				console.log("id:",id,"type:",type);
				this.id=id;
				this.type=type;
			},
			btn1(id,id1,type){
				// this.$refs.ipt.Focus();
				this.ipt = true;
				console.log("id:",id,"id1:",id1,"type:",type);
				this.id=id;
				this.id1=id1;
				this.type=type;
			},
			momentsComment_pinglun() {
				uni.request({
					url: this.baseurl + '/api/moments/momentsComment',
					method: 'POST',
					data: {
						moments_no: this.moments_no,
						page: 1,
						num: 20,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log("评论列表", res);
						this.pllist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			moments_no_detail() {
				uni.request({
					url: this.baseurl + '/api/moments/momentsInfo',
					method: 'POST',
					data: {
						moments_no: this.moments_no,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log("圈子详情", res);
						this.list = res.data.data;
						let date = new Date(res.data.data.create_at)
						let Y = date.getFullYear() + '-'
						let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() +
							1) + '-'
						let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
						let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
						let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ''
						let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
						this.list.create_at = h + m;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 软键盘弹起，获取到焦点
			openinput(event) {
				// 解决软键盘遮挡input输入框
				this.active_Up = true //初始化
				if (event.detail.height != 0) {
					this.active_Up = true
				} else {
					this.active_Up = false
				}
				return false
			},
			// 失去焦点时获取当前光标的位置
			cursorss(event) {
				this.active_Up = false
				this.cursor = false; //取消聚焦
				this.resStart = event.target.cursor //保存光标位置
			},
			ChooseToLook(val) {
				// 返回获取从0到光标位置的字符串
				let str = this.value.substring(0, this.resStart)
				// 将表情插入指定位置
				this.value = this.value.replace(str, str + val)
				// 光标向后移动两位
				this.resStart += 2; //光标加2(表情是占两个位置)
				this.cursor = true //设置聚焦
			},
			close() {
				this.show = false;
				this.useful_flag = false
			},
			// 打开常用语
			openUseful(e) {
				if (this.useful_flag) {
					if (this.useful_expression === e) {
						// 如果已经打开过常用语
						this.useful_expression = e
						this.useful_flag = false //关闭
					} else {
						this.useful_expression = e
					}
				} else {
					this.useful_expression = e
					this.useful_flag = true //开启动画
				}
			},
			// 软键盘按下确定的事件监听
			startSearch() {
				console.log(1111)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tp_view{
		display: flex;
		flex-wrap: wrap;
	}
	.pl10 {
		width: 32%;
		height: 240rpx;
		margin-right: 6rpx;
	}
	
	.acsd {
		width: 500rpx;
		height: 375rpx;
	}
	
	.acsd1 {
		width: 260rpx;
		height: 260rpx;
		margin: 5rpx;
	}
	
	.acsd2 {
		width: 30%;
		height: 180rpx;
		margin: 10rpx;
	}
	
	.acsd3 {
		width: 200rpx;
		height: 200rpx;
		margin: 5rpx;
	
	}
	.plgn {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 20rpx;
		width: 100%;
	}

	.pinglunbtn {
		background-color: #f8b800;
		color: white;
		font-size: 20rpx;
		display: flex;
		width: 100rpx;
		justify-content: center;
		align-items: center;
	}

	.inputsy {
		background: rgba(246, 246, 246, 1);
		width: 75%;
		border-radius: 10rpx;
	}

	.huati {
		font-size: 24rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		color: #F8B800;
		background-color: rgba(255, 248, 228, 1);
		font-size: 24rpx;

		padding: 0 15rpx;
		margin-right: 15rpx;
	}

	// 评论
	.pinglun_time {
		color: #9999;
		font-size: 27rpx;
	}

	.pinglun_content {
		font-size: 28rpx;
	}

	.pinglun_name {
		font-size: 24rpx;
		color: #9999;
	}

	.pinglun_img {
		width: 50rpx;
		height: 50rpx;

		border-radius: 50%;
	}

	.pinglun {
		display: flex;
	}

	.album {
		@include flex;
		align-items: flex-start;

		&__avatar {
			background-color: $u-bg-color;
			padding: 5px;
			border-radius: 3px;
		}

		&__content {
			margin-left: 10px;
			flex: 1;
		}
	}

	.huise {
		width: 100%;
		height: 50rpx;
		background-color: #f6f6f6;
	}

	.aca8 {
		color: #9999;
		font-size: 27rpx;
	}

	.aca7 {
		color: #9999;
		font-size: 27rpx;
	}

	.aca6 {
		width: 87%;
		margin-top: 10rpx;
	}

	.aca5 {
		width: 70rpx;
		height: 70rpx;

		border-radius: 50%;
	}

	.aca4 {
		text-align: center;
		width: 13%;
	}

	.aca3 {
		display: flex;
		margin: 20rpx 0rpx;
	}

	.aca2 {
		margin-left: 2%;
		font-weight: 900;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.xqvv {
		display: flex;
	}

	.xqimg3 {
		width: 30rpx;
		height: 30rpx;
	}

	.xqimg2 {
		width: 30rpx;
		height: 30rpx;
	}

	.xqv13 {
		color: #9999;
		margin: 0 10rpx;
	}

	.xqv12 {
		display: flex;
		align-items: center;
		// margin: 10rpx 20rpx;
	}

	.xqv11 {
		display: flex;
		justify-content: flex-end;
		margin-right: 25rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.xqv10 {
		color: #9999;
		font-size: 25rpx;
		margin-left: 5rpx;
	}

	.xqv9 {
		display: flex;
		align-items: center;

		margin-top: 15rpx;
	}

	.xqv8 {
		margin: 10rpx 25rpx 10rpx 0rpx;

	}

	.xqv7 {
		background-color: #f8b800;
		color: white;
		padding: 7rpx 20rpx;
		font-size: 20rpx;
		border-radius: 20rpx;
	}

	.xqv5 {
		margin-right: 10rpx;
	}

	.xqv4 {
		display: flex;
		color: #9999;
	}

	.xqv2 {
		// margin-left: 10rpx;
	}

	.xqv1 {

		display: flex;

	}

	.xqv {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-right: 25rpx;
	}

	.xqimg {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
	}

	// 底部表情+评论
	.consult {
		// background-color: #EFEFEF;

		padding-top: 30rpx;
		padding-bottom: 144rpx;

		.shade {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, .4);
			position: absolute;
			top: 0;
			left: 0;
		}

		.keyboard-active {
			bottom: 0 !important;
		}

		.keyboard {
			position: fixed;
			bottom: -488rpx;
			transition: bottom .3s;
			z-index: 999;
			width: 100%;
			padding-bottom: 20rpx;

			.expression {
				height: 488rpx;
				background-color: #FAFAFA;

				.emojis_scroll {
					display: block;
					float: left;
					width: 100%;
					height: 400rpx;
					padding-left: 25rpx;
				}

				.emoji {
					display: block;
					float: left;
					width: 100rpx;
					height: 100rpx;
					font-size: 70rpx;
					text-align: center;
				}
			}

			.useful-content {
				height: 488rpx;
				background-color: #FAFAFA;
				overflow-y: auto;

				.useful-content-xiaoxi {
					height: 104rpx;
					text-align: center;
					line-height: 104rpx;
					border-bottom: 1rpx solid #F3F3F3;
				}
			}

			/deep/.keyboard-tup {
				display: flex;
				align-items: center;
				padding: 0 50rpx;

				.uni-input-input {
					background: #FFFFFF;
					padding: 0 20rpx;
				}

				.plus-circle {
					width: 56rpx;
					height: 56rpx;
					margin: 0 20rpx;
				}

				.useful {
					width: 64rpx;
					height: 64rpx;
					color: #333333;
				}

				input {
					width: 490rpx;
					height: 60rpx;
					box-sizing: border-box;
					border-radius: 10rpx;
					background-color: #f6f6f6;
					border: 1rpx solid #f6f6f6;
					padding-bottom: 20rpx;
					padding-left: 20rpx;
				}

				// height: 115rpx;
				background-color: white;
			}

			.active-tup {
				height: 130rpx;
				padding: 50rpx 50rpx 70rpx !important;
			}
		}
	}
</style>
