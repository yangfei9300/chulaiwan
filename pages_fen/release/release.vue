<template>
	<view>
		<view class="" style="margin: 0rpx 15rpx;">
			<u-textarea :border="none" :height="160" v-model="value1" placeholder="请输入内容"></u-textarea>
			<view class="" style="margin-top: 15rpx;">
				<!-- 	<u-upload
					:fileList="fileList6"
					@afterRead="afterRead"
					@delete="deletePic"
					name="6"
					multiple
					:maxCount="9"
					width="100"
					height="100"
				>
					<image src="../../static/indeximg/upload.png" 
					mode="widthFix" style="width: 100px;height: 100px;"></image>
				</u-upload> -->
				<view>
					<view class="up_view" v-for="(item,index) in fileList6" :key='index'>
						<view class="up_slid" @click="detail(index)">x</view>
						<image class="up_img" :src="item" mode=""></image>
					</view>
					<image v-if="fileList6.length<9" src="../../static/indeximg/upload.png" mode="widthFix"
						style="width: 200rpx;height: 200rpx;margin: 10rpx 20rpx;" @click="uploads">
					</image>
				</view>

				<!-- 	<image @click="osskey" src="../../static/indeximg/upload.png" mode="widthFix"
					style="width: 200rpx;height: 200rpx;"></image> -->
			</view>
			<view class="">
				<view class="httitle">#添加话题</view>
				<view class="huati">
					<view class="huati1" v-for="(item,index) in biaoqianlist" :key="index">{{item}}</view>
				</view>
			</view>
			<view class="">
				<view class="httitle">
					<image class="wzimg" src="../../static/index/address.png" mode=""></image>
					你在哪
				</view>
				<view class="huati">
					<view class="huati1" v-for="(item,index) in wzlist" :key="index">{{item}}</view>
				</view>
			</view>
			<view class="">
				<button class="btno" type="default" @click="onfabu">发布</button>
			</view>

		</view>
	</view>
</template>

<script>
	import uploadImage from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	export default {
		data() {
			return {
				baseurl: '',
				fileList6: [],
				tptrue: false,
				tempurl: '',
				biaoqianlist: ["#出来玩", "#嗨起来", "#小酒吧", "#室内娱乐", ],
				wzlist: ["汉峪金谷", "舜泰广场", "汉峪A3", ],
				value1: '',
				count: 4,
				value: 2,
				osslist: [],
			}
		},
		onLoad() {
			this.baseurl = getApp().globalData.baseurl;
			this.token = uni.getStorageSync('token');
		},
		mounted() {
			// this.osskey();
		},
		methods: {
			// 发布活动
			onfabu() {
			
				if (this.value1 != '' && this.fileList6.length >0) {
					
					//支持多图上传
					for (var i = 0; i < this.fileList6.length; i++) {
						//显示消息提示框
						uni.showLoading({
							mask: true
						})

						//上传图片
						//图片路径可自行修改
						uploadImage(this.fileList6[i], 'image/xcx/',
							result => {
								console.log("oss", result);
								this.osslist.push(result);
								uni.hideLoading();
								console.log(this.osslist);
								if (this.value1 !== "" || this.osslist.length == this.fileList6.length) {
									uni.request({
										url: this.baseurl + '/api/moments/momentsShare',
										method: 'POST',
										data: {
											text: this.value1,
											photo: this.osslist,
											marks: ['出来玩', '出来玩'],
											address: '汉峪金谷A3-1',
											city:uni.getStorageSync("citySel"),
										},
										header: {
											xcx:1,
											token: this.token,
										},
										success: res => {
											console.log("图片文字都不能为空",res);
										},
										fail: () => {},
										complete: () => {}
									});
								}

							}
						)

					}

				} else if ( this.value1!="") {
				
					uni.request({
						url: this.baseurl + '/api/moments/momentsShare',
						method: 'POST',
						data: {
							text: this.value1,
							photo: this.osslist,
							marks: ['出来玩', '出来玩'],
							address: '汉峪金谷A3-1',
							city:uni.getStorageSync("citySel"),
						},
						header: {
							xcx:1,
							token: this.token,
						},
						success: res => {
							console.log("文字不能为空",res);
						},
						fail: () => {},
						complete: () => {}
					});

				} else if (this.fileList6.length > 0 ) {
					//支持多图上传
					for (var i = 0; i < this.fileList6.length; i++) {
						//显示消息提示框
						uni.showLoading({
							mask: true
						})

						//上传图片
						//图片路径可自行修改
						uploadImage(this.fileList6[i], 'image/xcx/',
							result => {
								console.log("oss", result);
								this.osslist.push(result);
								uni.hideLoading();
								console.log(this.osslist);
								if (this.value1 !== "" || this.osslist.length == this.fileList6.length) {
									uni.request({
										url: this.baseurl + '/api/moments/momentsShare',
										method: 'POST',
										data: {
											text: this.value1,
											photo: this.osslist,
											marks: ['出来玩', '出来玩'],
											address: '汉峪金谷A3-1',
											city:uni.getStorageSync("citySel"),
										},
										header: {
											xcx:1,
											token: this.token,
										},
										success: res => {
											console.log("图片不能为空",res);
										},
										fail: () => {},
										complete: () => {}
									});
								}

							}
						)

					}
				}
 

				// uni.request({
				// 		url: this.baseurl+'/api/moments/momentsShare',
				// 		method: 'POST',
				// 		data: {text:this.value1,photo:this.osslist,marks:['出来玩','出来玩'],address:'汉峪金谷A3-1'},
				// 		header:{
				// 			token:this.token,
				// 		},
				// 		success: res => {
				// 			console.log(res);
				// 		},
				// 		fail: () => {},
				// 		complete: () => {}
				// 	});


			},
			// 删除图片
			detail(index) {
				this.fileList6.splice(index, 1)
			},
			uploads() {
				let _this = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res.tempFilePaths[0]);
						if (_this.fileList6.length < 9) {
							_this.fileList6.push(res.tempFilePaths[0])
						}
					}
				})
			},
			// // 获取osskey
			// osskey() {
			// 	let _this = this;
			// 	uni.chooseImage({
			// 		count: 1, // 默认最多一次选择9张图
			// 		sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
			// 		success: res => {
			// 			// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
			// 			var tempFilePaths = res.tempFilePaths;


			// 			}
			// 		}
			// 	})

			// },
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				console.log(event)
				this.fileList6.push(event.file[0].url);
				// event.map((item)=>{

				// })
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				// let lists = [].concat(event.file)
				// let fileListLen = this[`fileList${event.name}`].length
				// lists.map((item) => {
				// 	this[`fileList${event.name}`].push({
				// 		...item,
				// 		status: 'uploading',
				// 		message: '上传中'
				// 	})
				// })
			},
		}
	}
</script>

<style scoped lang="scss">
	/* 上传图片 */
	.up_view {
		position: relative;
		display: inline-block;

	}

	.up_slid {
		// color: white;
		position: absolute;
		right: 30rpx;
		top: 5rpx;
	}

	.up_img {
		width: 200rpx;
		height: 200rpx;
		margin: 10rpx 20rpx;
	}

	/* 话题 */
	.btno {
		margin-top: 270rpx;
		background-color: #f8b800;
		color: white;
		width: 70%;

	}

	.wzimg {
		width: 25rpx;
		height: 25rpx;
		margin-right: 10rpx;
	}

	.httitle {
		margin: 15rpx;
		font-weight: 600;
	}

	.huati1 {
		padding: 5rpx 15rpx;
		border-radius: 10rpx;
		border: 1rpx solid #9999;
		color: #9999;
		margin: 10rpx 15rpx;
		font-size: 25rpx;

	}

	.huati {
		display: flex;
	}

	.shuru {
		width: 100%;
		height: 70rpx;
	}

	.uploadimg {
		width: 200rpx;
		height: 200rpx;
		border-radius: 20rpx;

	}
</style>
