<template>
	<view>
		<view class="login_view">
			<image class="login_logo" src="../../static/index/denglulogo.png" mode=""></image>
			<view class="login_title">
				选择你喜欢的类型
			</view>
			<!-- <view class="login_title_2">
				珍惜每一次相遇
			</view> -->
		</view>
		<view class="Like">
			<view class="Like_for" v-for="item in likes">
				<view class="Like_item">
					<image class="Like_item_image" :src="item.cover1" mode=""></image>
					<view class="checkview">
						<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
							<u-checkbox shape="circle" labelColor="#FFFFFF" inactiveColor="#ffffff 20%"
								activeColor="#f8b800" :key="index" :label="item.name" :name="item.name">
							</u-checkbox>
						</u-checkbox-group>
					</view>
				</view>
				<view class="Like_items_view" style="">
					<view class="Like_items_item">
						{{item.remark}}
					</view>
				</view>
			</view>
		</view>
		<button class="Like_btn" @click="Like_btnclick">下一步</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: '',
				token: '',
				likes: [{
						image: "../../static/indeximg/商家推荐01.png",
						title: "喝酒",
						title1: ["喝酒", "喝酒", "喝酒", "喝酒", "喝酒", "喝酒", ],
						id: 1
					},

				],
				nickname: '',
				base_con: '',
				base_sex: '',
				headimg: '',
				base_birthday: '',
				base_interest: [],
			}
		},
		onLoad(options) {
			console.log(options);
			this.baseurl = getApp().globalData.baseurl;
			this.token = uni.getStorageSync('token');
			this.headimg = options.headimg;
			this.nickname = options.nickname;
			this.base_con = options.base_con;
			this.base_sex = options.base_sex;
			this.base_birthday = options.base_birthday;
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
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log(res);
						this.likes = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			checkboxChange(n) {
				console.log('change', n[0]);
				if (n[0] != undefined) {
					this.base_interest.push(n[0]);
				}
				console.log(this.base_interest);

			},
			Like_btnclick() {
				uni.request({
					url: this.baseurl + '/api/login/reg',
					method: 'POST',
					data: {
						nickname: this.nickname,
						base_sex: this.base_sex,
						base_birthday: this.base_birthday,
						headimg: this.headimg,
						base_con: this.base_con,
						base_interest: this.base_interest,
						city:uni.getStorageSync("citySel"),
					},
					header:{token:this.token},
					success: res => {
						console.log(res);
					},
					fail: () => {},
					complete: () => {}
				});
				// uni.switchTab({
				// 	url:'../index/index'
				// })
			}
		}
	}
</script>

<style scoped>
	.Like_item_image {
		width: 100%;
		height: 276rpx;
	}

	.Like_btn {
		width: 80%;
		height: 66rpx;
		color: white;
		background: #FFC803;
		box-shadow: 0rpx 0rpx 30rpx 1rpx rgba(0, 0, 0, 0.0500);
		border-radius: 15rpx;
		opacity: 1;
		margin-bottom: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.Like_items_item {
		margin: 5rpx 10rpx;
		color: rgba(171, 171, 171, 1);
	}

	.Like_items_view {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	/deep/ .u-checkbox-group--column {
		position: absolute;
		bottom: 0rpx;
		background: rgba(0, 0, 0, 0.7000);
		/* width: 100%; */
		left: 0;
		right: 0;
		height: 30rpx;
		padding: 10rpx;
		color: white;
	}

	.checkview {
		position: relative;
	}

	.Like_for {
		width: 300rpx;
		position: relative;
		/* background-color: #007AFF; */
		margin-bottom: 106rpx;
	}

	.Like {
		padding: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	/* logo */
	.login_view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 128rpx;
		margin-bottom: 116rpx;
	}

	.login_logo {
		width: 130rpx;
		height: 130rpx;

	}

	.login_title {
		font-size: 43rpx;
		font-weight: 600;
		margin: 10rpx 0;

	}

	.login_title_2 {
		font-size: 36rpx;
		color: #A7A7A7;
		font-weight: 600;
	}
</style>
