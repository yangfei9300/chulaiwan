<template>
	<view class="content">
		<!-- 参与人数 -->
		<view class="scrollContent">
			<scroll-view class="scroll" scroll-x="true">
				<view class="scroll_view" v-for="(item,index) in list.team" :key='index'>
					<view class="scrollDelect" v-if="item.is_report==1">{{item.base_credit}}</view>
					<image class="scroll_headimg" :src="item.headimg" mode=""></image>
					<view class="scroll_faqi" v-if="index==0">发起人</view>
					<view class="scroll_nickname">{{item.nickname}}</view>
				</view>

			</scroll-view>
			<view class="scroll_view">
				<image class="scroll_jubao" src="../static/jubao.png" mode=""></image>
				<view class="scroll_nickname">举报</view>
			</view>
		</view>
		<!-- 商家信息 -->
		<view class="Shop">
			<image class="Shop_headimg" :src="list.cover" mode=""></image>
			<view class="Shop_Right">
				<view class="Shop_title">{{list.title}}</view>
				<view class="Shop_str">
					<view class="Shop_cate">{{list.cate}}</view>
					<view class="Shop_time">{{list.time_str}}</view>
				</view>
				<view class="Shop_money">{{list.money}}</view>
			</view>
		</view>
		<!-- 活跃与积分 -->
		<view class="actv">
			<view class="actvview">
				<view class="">
					<view class="actvname">获得活跃度</view>
					<view class="actvcontent">20</view>
				</view>
				<image class="actvimg" src="../static/Evalue/huoyue.png" mode=""></image>
			</view>
			<view class="actvview">
				<view class="">
					<view class="actvname">获得金币</view>
					<view class="actvcontent">20</view>
				</view>
				<image class="actvimg" src="../static/Evalue/jinbi.png" mode=""></image>
			</view>
		</view>
		<!-- 商家信息 -->
		<view class="ShopAdd">
			<view class="ShopAddOne">
				<view class="ShopAddOnetitle">商家信息</view>
				<view class="ShopAddOneright">举报商家</view>
			</view>
			<view class="">
				<view class="ShopAddname">{{list.add_name}}</view>
				<view class="ShopAdddetal">{{list.add_detail}}</view>
			</view>
		</view>
		<!-- 商家评论 -->
		<view class="value">
			<textarea class="valuetext" v-model="text" name="" id="" placeholder="啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊" cols="30"
				rows="10"></textarea>
			<view class="" style="    display: flex;">
				<image v-if="photo.length>0" class="Shopimg" :src="item" @click="choose" mode=""
					v-for="(item,index) in photo" :key="index"></image>
				<image v-if="photo.length<3" class="Shopimg" @click="choose" src="../static/Evalue/Shopimg.png" mode="">
				</image>
			</view>
			<view class="pj">
				<text class="pjtext">整体评价</text>
				<uni-rate v-model="valuerate" @change="onChange"></uni-rate>
			</view>
		</view>
		<button class="btn" @click="tijiao">提交</button>
	</view>
</template>

<script>
	import upimg from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				act_no: '',
				list: [],
				// 评分
				valuerate: '',
				text: '',
				photo: [],
				acc: [],
			}
		},
		onLoad(options) {
			this.act_no = options.act_no;
		},
		mounted() {
			this.getInfo();
		},
		methods: {
			getInfo() {
				uni.request({
					url: this.baseurl + '/api/ActGroup/myActInfo',
					method: 'POST',
					data: {
						act_no: this.act_no,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log(res);
						this.list = res.data.data
					},
					fail: () => {},
					complete: () => {}
				});
			},
			onChange(e) {
				console.log(e)
				this.valuerate = e.value
			},
			choose() {
				let _this = this;
				uni.chooseImage({
					count: 3,
					success(res) {
						console.log(res.tempFilePaths);
						_this.photo = res.tempFilePaths
					}
				})
			},
			tijiao() {
				uni.showLoading({
					mask: true,
					title: '正在提交',
				})
				if (this.photo.length > 0 && this.text.length > 0 && this.valuerate > 0) {
					for (let i = 0; i < this.photo.length; i++) {
						upimg(this.photo[i], 'image/xcx/', result => {
							console.log(result);
							this.acc.push(result)
							if (this.acc.length == this.photo.length) {
								uni.request({
									url: this.baseurl + '/api/actGroup/shopCommentDo',
									method: 'POST',
									header: {
										xcx:1,
										token: this.token
									},
									data: {
										img: this.acc,
										text: this.text,
										grade: this.valuerate,
										act_no: this.act_no,
										shop_no: this.list.shop_no,
										
										city:uni.getStorageSync("citySel"),
									},
									success: res => {
										console.log(res);
										uni.showToast({
											title: res.data.info,
											icon: 'none',
											mask: true,
											success() {
												uni.navigateBack({
													delta: 1,
												});
											}
										});
										
									},
									fail: () => {},
									complete: () => {}
								});
							}
						});
						console.log(this.acc.length == this.photo.length);

					}
				} else {
					uni.showToast({
						title: '检查填写内容',
						icon: 'none',
						mask: true,
					});
				}


				console.log(this.acc)
			}
		}
	}
</script>

<style scoped>
	.pjtext{
		margin-right: 10rpx;
	}
	.pj{
		display: flex;
		    align-items: center;
		    font-size: 24rpx;
	}
	/* 商家位置信息 */
	.btn {
		width: 682rpx;
		height: 110rpx;
		background: #FFC803;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
		border-radius: 24rpx;
		opacity: 1;
		font-size: 52rpx;
		color: white;
		margin: 32rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.valuetext {
		width: 100%;
	}

	.value {
		box-shadow: 0 0 15rpx 0rpx rgba(0, 0, 0, 0.1);
		background: white;
		padding: 24rpx;
	}

	.Shopimg {
		width: 164rpx;
		height: 164rpx;
		margin: 10rpx;
	}

	.ShopAdddetal {
		font-size: 28rpx;
	}

	.ShopAddname {
		font-size: 32rpx;
		font-weight: 600;
		margin-top: 30rpx;
	}

	.ShopAddOneright {
		color: #B8B8B8;
		font-size: 24rpx;
	}

	.ShopAddOnetitle {
		font-size: 36rpx;
		font-weight: 600;
	}

	.ShopAddOne {
		display: flex;
		justify-content: space-between;
		border-bottom: 1rpx solid #F2F2F2;
		padding: 28rpx 0;
	}

	.ShopAdd {
		box-shadow: 0 0 15rpx 0rpx rgba(0, 0, 0, 0.1);
		border-radius: 20rpx;
		background: white;
		height: 240rpx;
		padding: 0 30rpx;
		margin: 32rpx 0;
	}

	/* 活跃金币 */
	.actvcontent {
		font-size: 32rpx;
	}

	.actvname {
		font-size: 28rpx;
		color: #848484;
	}

	.actvview {
		display: flex;
		align-items: center;
		/* border: 1rpx solid #999; */
		width: 320rpx;
		height: 120rpx;
		justify-content: center;
		box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
		border-radius: 16rpx;
	}

	.actvimg {
		width: 84rpx;
		height: 84rpx;
		margin-left: 50rpx;
	}

	.actv {
		display: flex;
		justify-content: space-between;
	}

	/* 商家信息 */
	.Shop_Right {
		margin-left: 12rpx;
	}

	.Shop_money {
		font-size: 28rpx;
		color: #F8B800;
		font-weight: 600;
	}

	.Shop_time {
		font-size: 24rpx;
		margin-left: 12rpx;
	}

	.Shop_cate {
		padding: 4rpx 8rpx;
		background: #F8b800;
		color: white;
		font-size: 24rpx;
		border-radius: 8rpx;

	}

	.Shop_str {
		display: flex;
		align-items: center;
		margin: 18rpx 0;
	}

	.Shop_title {
		font-size: 32rpx;
	}

	.Shop_headimg {
		width: 208rpx;
		height: 176rpx;
	}

	.Shop {
		box-shadow: 0 0 30rpx 0 rgba(17, 17, 17, 0.05);
		display: flex;
		align-items: center;
		padding: 22rpx;
		border-radius: 20rpx;
		margin: 32rpx 0;
	}

	/* 参与人数 */
	.scroll_jubao {
		width: 88rpx;
		height: 88rpx;
	}

	.scrollDelect {
		font-size: 28rpx;
		padding: 0rpx 7rpx;
		width: 44rpx;
		color: white;
		border-radius: 20rpx;
		background: #F10000;
		position: absolute;
		left: 20rpx;
		top: 0rpx;
	}

	.scroll_nickname {
		width: 88rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 24rpx;
	}

	.scroll_faqi {
		font-size: 20rpx;
		color: white;
		background: #F8B800;
		padding: 5rpx 10rpx;
		position: absolute;
		top: 80rpx;
		left: 8rpx;
		border-radius: 20rpx;

	}

	.scroll_headimg {
		width: 88rpx;
		height: 88rpx;
		border: 4rpx solid #F8B800;
		border-radius: 50%;
	}

	.scroll_view {
		display: inline-block;
		position: relative;
		text-align: center;
		margin-right: 12rpx;
		padding-top: 13rpx;
	}

	.scroll {
		white-space: nowrap;
		width: 620rpx;

	}

	.scrollContent {
		display: flex;
		/* align-items: center; */
		justify-content: space-between;
	}

	.content {
		padding: 0 34rpx;

		font-family: Inter-Regular, Inter;
	}
</style>
