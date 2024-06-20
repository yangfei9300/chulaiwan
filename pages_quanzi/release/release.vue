<template>
	<view>
		<view class="" style="margin: 0rpx 15rpx;">
			<textarea :border="none" :height="160" v-model="value1" placeholder="请输入内容" />
			<view class="" style="margin-top: 40rpx;">
				<view>
					<block v-if="videoIs">
						<view class="up_view" v-for="(item,index) in fileList6" :key='index'>
							<view class="up_slid1" @click.stop="detail(index)">x</view>
							<video class="up_img" :src="item.imgUrl" mode=""></video>
						</view>   
						<image v-if="fileList6.length<1" src="../static/upload.png" mode="widthFix"
							style="width: 160rpx;height: 160rpx;margin: 10rpx 20rpx;" @click="uploadsSel">
						</image>
					</block>
					<block v-else>
						<view class="up_view" v-for="(item,index) in fileList6" :key='index'>
							<view class="up_slid" @click="detail(index)">x</view>
							<image class="up_img" :src="item.imgUrl" mode=""></image>
						</view>
						<image v-if="fileList6.length<9" src="../static/upload.png" mode="widthFix"
							style="width: 160rpx;height: 160rpx;margin: 10rpx 20rpx;" @click="uploadsSel">
						</image>
					</block>
					
					
				</view>
			</view>
			<view class="">
				<view class="httitle">#添加话题</view>
				<view class="HuatiView">
					<view class="huati1" @click="TrueMarks=true">#自定义</view>
					<scroll-view class="huati" scroll-x="true">
						<view class="huati1" v-for="(item,index) in biaoqianlist"
							:class="{huati2:Pushlist.includes(item.name)}" :key="index" @click="HuatiPush(item.name)">
							{{item.name}}
						</view>
					</scroll-view>
				</view>
				<view class="MarksView" v-if="TrueMarks" @click.stop="TrueMarks=false">
					<view class="MarksBorder" @click.stop="TrueMarks=true">
						<view class="MarksTitle">自定义话题</view>
						<textarea class="MarksText" v-model="MarksValue" value="" :auto-focus="true" :fixed="true"
							:height="125" placeholder="#输入话题" />
						<view class="MarksBtn" @click.stop="onBtnMarks()">保存</view>
					</view>
				</view>
			</view>
			<view class="">
				<view class="httitle">
					<image class="wzimg" src="../../static/index/address.png" mode=""></image>
					你在哪里
				</view>
				<scroll-view class="huatia" scroll-x="true">
					<view class="huati1" :class="{huati2:addlist==item.name}" v-for="(item,index) in wzlist"
						@click="AddPush(item.name)" :key="index">{{item.name}}</view>
				</scroll-view>
			</view>
			<view class="">
				<button class="btno" type="default" v-if="fileList6.length>0||value1.length>0"
					@click="onfabu">发布</button>
				<button class="btno" style="background-color:#D6D6D6;" type="default" v-else 
				@click="onfabu">发布</button>
			</view>

		</view>
	</view>
</template>

<script>
	import uploadImage from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	import Amap from '../../libs/amap-wx.130.js'
	export default {
		data() {
			return {
				// 请求参数
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				fileList6: [],
				tptrue: false,
				// 自定义话题
				MarksValue: '',
				TrueMarks: false,
				tempurl: '',
				Pushlist: [],
				addlist: '',
				biaoqianlist: [],
				wzlist: [],
				value1: '',
				count: 4,
				value: 2,
				osslist: [],
				
				videoIs:false,
			}
		},
		onLoad() {
			this.myAmapFun = new Amap.AMapWX({
				key: getApp().globalData.key
			});
		},
		mounted() {
			// this.osskey();
			const that = this;
			that.myAmapFun.getPoiAround({
				success: function(data) {
					console.log(data);
					that.wzlist = data.markers;
					//成功回调
				},
				fail: function(info) {
					//失败回调
					console.log(info)
				}
			});
			this.Marks();
		},
		methods: {
			isVideoJudge(){
				var fileList6=this.fileList6;
				if(fileList6.length>0){
					if(fileList6[0].imgUrl.indexOf("mp4")>=0){
						this.videoIs=true;
					}
				}else{
					this.videoIs=false;
				}
				
			},
			// 发布活动
			onfabu() {
				let thisnow = this;
				if (this.value1 != '' && this.fileList6.length > 0) {
					//支持多图上传
					for (var i = 0; i < this.fileList6.length; i++) {
						//显示消息提示框
						uni.showLoading({
							mask: true
						})
						let imglinshi = this.fileList6[i].imgUrl;

						console.log("结果====", imglinshi);

						//上传图片
						//图片路径可自行修改
						uploadImage(this.fileList6[i].imgUrl, 'image/xcx/',
							result => {
								if (result.indexOf("mp4") < 0) {
									console.log("上传图片结果",result)
								
								uni.getImageInfo({
									src: imglinshi,
									success: (res) => {
										let _this = this;
										// console.log(res, "获取图片信息")
										if (_this.fileList6.length < 9) {
											let Imginfo = {
												width: res.width,
												height: res.height,
												imgUrl: result
											};

											_this.osslist.push(JSON.stringify(Imginfo));
											console.log("图片信息对象", _this.osslist)
											if (this.value1 != '' && _this.osslist.length == _this
												.fileList6.length) {
												console.log(111);
												uni.request({
													url: this.baseurl +
														'/api/moments/momentsShare',
													method: 'POST',
													data: {
														text: this.value1,
														photo: this.osslist,
														marks: this.Pushlist,
														address: this.addlist,
														city: uni.getStorageSync("citySel"),
													},
													header: {
														xcx: 1,
														token: this.token,
													},
													success: res => {
														console.log("图片文字都不能为空", res);
														uni.reLaunch({
															url: '../../pages/circle/circle'
														})
													},
													fail: () => {},
													complete: () => {}
												});
											}
										}
									},
									complete: (res) => {
										console.log("结尾", res);
									}
								})
								}else{
									let Imginfo = this.fileList6[0];
									Imginfo.video_img='';
									Imginfo.imgUrl=result;
									Imginfo.type='2';
									// this.osslist.push(JSON.stringify(Imginfo));
									uni.request({
										url: this.baseurl +
											'/api/moments/momentsShare',
										method: 'POST',
										data: {
											text: this.value1,
											// photo: this.osslist,
											marks: this.Pushlist,
											address: this.addlist,
											'video':JSON.stringify(Imginfo),
											'type':'2',
											city: uni.getStorageSync("citySel"),
										},
										header: {
											xcx: 1,
											token: this.token,
										},  
										success: res => {
											console.log("图片文字都不能为空", res);
											uni.reLaunch({
												url: '../../pages/circle/circle'
											})
										},
										fail: () => {},
										complete: () => {}
									});
								}
								
								
								// this.osslist.push(result);
								uni.hideLoading();
								// console.log(this.osslist);


							}
						)

					}
				} else if (this.value1 != '' && this.fileList6.length == 0) {
					uni.request({
						url: this.baseurl + '/api/moments/momentsShare',
						method: 'POST',
						data: {
							text: this.value1,
							photo: [],
							marks: this.Pushlist,
							address: this.addlist,

							city: uni.getStorageSync("citySel"),
						},
						header: {
							xcx: 1,
							token: this.token,
						},
						success: res => {
							console.log("图片文字都不能为空", res);
							uni.reLaunch({
								url: '../../pages/circle/circle'
							})
						},
						fail: () => {},
						complete: () => {}
					});
				} else if (this.value1 == '' && this.fileList6.length > 0) {
					//支持多图上传
					for (var i = 0; i < this.fileList6.length; i++) {
						//显示消息提示框
						uni.showLoading({
							mask: true
						})
						let imglinshi = this.fileList6[i].imgUrl;
						//上传图片
						//图片路径可自行修改
						uploadImage(this.fileList6[i].imgUrl, 'image/xcx/',
							result => {
								console.log(imglinshi, '临时路径')
								console.log("结果", result);
								console.log("结果1", result.indexOf("mp4"));
								// console.log("oss", result);
								if (result.indexOf("mp4") < 0) {


									uni.getImageInfo({
										src: imglinshi,
										success: (res) => {
											console.log(res)
											let _this = this;
											// console.log(res, "获取图片信息")
											if (_this.fileList6.length < 9) {
												let Imginfo = {
													width: res.width,
													height: res.height,
													imgUrl: result
												};

												_this.osslist.push(JSON.stringify(Imginfo));
												console.log("图片信息对象", _this.osslist)
												if (this.value1 != '' || this.osslist.length == this
													.fileList6
													.length) {
													console.log(111);
													uni.request({
														url: this.baseurl +
															'/api/moments/momentsShare',
														method: 'POST',
														data: {
															text: this.value1,
															photo: this.osslist,
															marks: this.Pushlist,
															address: this.addlist,

															city: uni.getStorageSync("citySel"),
														},
														header: {
															xcx: 1,
															token: this.token,
														},
														success: res => {
															console.log("图片文字都不能为空", res);
															uni.reLaunch({
																url: '../../pages/circle/circle'
															})
														},
														fail: () => {},
														complete: () => {}
													});
												}
											}
										},
									})
								} else {

									let Imginfo = this.fileList6[0];
									Imginfo.video_img='';
									Imginfo.imgUrl=result;
									Imginfo.type='2';
									// this.osslist.push(JSON.stringify(Imginfo));
									uni.request({
										url: this.baseurl +
											'/api/moments/momentsShare',
										method: 'POST',
										data: {
											text: this.value1,
											// photo: this.osslist,
											marks: this.Pushlist,
											address: this.addlist,
											'video':JSON.stringify(Imginfo),
											'type':'2',
											city: uni.getStorageSync("citySel"),
										},
										header: {
											xcx: 1,
											token: this.token,
										},  
										success: res => {
											console.log("图片文字都不能为空", res);
											uni.reLaunch({
												url: '../../pages/circle/circle'
											})
										},
										fail: () => {},
										complete: () => {}
									});




								}


							// this.osslist.push(result);
							uni.hideLoading();
							// console.log(this.osslist);


						}
					)

				}
			} else if (this.value1 == '' && this.fileList6.length == 0) {
				console.log("内容都为空");
				// uni.showModal({
				// 	content: "图片或文字至少有一样",
				// })
				uni.showToast({
					title: "请编辑圈子内容！",
					icon: "none"
				})
			}


			// if (this.value1 != '' && this.fileList6.length > 0) {

			// 	//支持多图上传
			// 	for (var i = 0; i < this.fileList6.length; i++) {
			// 		//显示消息提示框
			// 		uni.showLoading({
			// 			mask: true
			// 		})

			// 		//上传图片
			// 		//图片路径可自行修改
			// 		uploadImage(this.fileList6[i].imgUrl, 'image/xcx/',
			// 			result => {
			// 				console.log("oss", result);
			// 				// this.osslist.push(result);
			// 				uni.hideLoading();
			// 				console.log(this.osslist);
			// 				if (this.value1 !== "" || this.osslist.length == this.fileList6.length) {
			// 					uni.request({
			// 						url: this.baseurl + '/api/moments/momentsShare',
			// 						method: 'POST',
			// 						data: {
			// 							text: this.value1,
			// 							photo: this.osslist,
			// 							marks: this.Pushlist,
			// 							address: this.addlist[0]
			// 						},
			// 						header: {
			// 							token: this.token,
			// 						},
			// 						success: res => {
			// 							console.log("图片文字都不能为空", res);
			// 						},
			// 						fail: () => {},
			// 						complete: () => {}
			// 					});
			// 				}

			// 			}
			// 		)

			// 	}

			// } else if (this.value1 != "") {

			// 	uni.request({
			// 		url: this.baseurl + '/api/moments/momentsShare',
			// 		method: 'POST',
			// 		data: {
			// 			text: this.value1,
			// 			photo: this.osslist,
			// 			marks: this.Pushlist,
			// 			address: this.addlist[0]
			// 		},
			// 		header: {
			// 			token: this.token,
			// 		},
			// 		success: res => {
			// 			console.log("文字不能为空", res);
			// 		},
			// 		fail: () => {},
			// 		complete: () => {}
			// 	});

			// } else if (this.fileList6.length > 0) {
			// 	//支持多图上传
			// 	for (var i = 0; i < this.fileList6.length; i++) {
			// 		//显示消息提示框
			// 		uni.showLoading({
			// 			mask: true
			// 		})

			// 		//上传图片
			// 		//图片路径可自行修改
			// 		uploadImage(this.fileList6[i].imgUrl, 'image/xcx/',
			// 			result => {
			// 				console.log("oss", result);
			// 				// this.fileList6[i].imgUrl=result;
			// 				// this.osslist.push(this.fileList6[i]);
			// 				uni.hideLoading();
			// 				console.log(this.fileList6[i]);
			// 				if (this.value1 !== "" || this.osslist.length == this.fileList6.length) {
			// 					uni.request({
			// 						url: this.baseurl + '/api/moments/momentsShare',
			// 						method: 'POST',
			// 						data: {
			// 							text: this.value1,
			// 							photo: this.osslist,
			// 							marks: this.Pushlist,
			// 							address: this.addlist[0]
			// 						},
			// 						header: {
			// 							token: this.token,
			// 						},
			// 						success: res => {
			// 							console.log("图片不能为空", res);
			// 						},
			// 						fail: () => {},
			// 						complete: () => {}
			// 					});
			// 				}

			// 			}
			// 		)

			// 	}
			// }

		},
		// 删除图片
		detail(index) {
			this.fileList6.splice(index, 1)
			this.isVideoJudge();
		},
		uploadsSel() {
			if(this.fileList6.length==0){
				uni.showActionSheet({
					itemList: ['照片', '视频'],
					success: (res) => {
						if (res.tapIndex == 0) {
							this.uploads();
						} else {
							this.uploadVideo();
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			}else{
				this.uploads();
			}
			
			
		},
		uploadVideo() {
			uni.chooseVideo({
				sourceType: ['camera', 'album'],
				success: (res) => {
					console.log("res.tempFilePath;", res)
					if (res) {
						let Imginfo = {
							width: res.width,
							height: res.height,
							imgUrl: res.tempFilePath,
							imgVideo:res.thumbTempFilePath,
						};
						this.fileList6.push(Imginfo);
						console.log("选择的视频",this.fileList6)
						this.isVideoJudge();
					}
				}
			});
		},
		uploads() {
			let _this = this;
			uni.chooseImage({
				count: 9-this.fileList6,
				success(res) {
					
					for(var a=0;a<res.tempFilePaths.length;a++){
						uni.getImageInfo({
							src: res.tempFilePaths[a],
							success: (res) => {
								// console.log(res, "获取图片信息")
								if (_this.fileList6.length < 9) {
									let Imginfo = {
										width: res.width,
										height: res.height,
										imgUrl: res.path
									};
									_this.fileList6.push(Imginfo);
								}
								_this.isVideoJudge();
							},
						})
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
			console.log("图片", event)
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
		HuatiPush(item) {
			if (this.Pushlist.includes(item)) {
				let index = this.Pushlist.indexOf(item)
				this.Pushlist.splice(index, 1)
				console.log(this.Pushlist);
			} else {
				this.Pushlist.push(item)
			}
		},
		AddPush(item) {
			this.addlist = item;

			// if(this.addlist.includes(item) && this.addlist.length==1){
			// let index=this.addlist.indexOf(item)
			// this.addlist.splice(index,1)
			// console.log(this.addlist);
			// }else{
			// 	this.addlist.push(item)
			// }
		},
		// 圈子话题
		Marks() {
			uni.request({
				url: this.baseurl + '/api/moments/momentsMarks',
				method: 'POST',
				header: {
					xcx: 1,
					token: this.token
				},
				data: {
					city: uni.getStorageSync("citySel"),
				},
				success: res => {
					console.log("话题", res);
					this.biaoqianlist = res.data.data;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		// 自定义话题保存
		onBtnMarks() {

			let value = {
				name: "#" + this.MarksValue
			};
			this.biaoqianlist.unshift(value);
			this.Pushlist.push("#" + this.MarksValue)
			this.TrueMarks = false;
			console.log(this.biaoqianlist, this.TrueMarks);
		}
	}
	}
</script>

<style scoped lang="scss">
	// 自定义话题
	.MarksBtn {
		font-size: 32rpx;
		color: white;
		background-color: #F8B800;
		position: absolute;
		right: 32rpx;
		bottom: 25rpx;
		padding: 6rpx 44rpx;
		border-radius: 8rpx;

	}

	.MarksText {
		border-radius: 16rpx;
		background: #F6F6F6;
		width: auto;
		padding-top: 10rpx;
		padding-left: 10rpx;
	}

	.MarksTitle {
		font-size: 32rpx;
		margin-bottom: 20rpx;
	}

	.MarksView {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}

	.MarksBorder {
		width: 504rpx;
		height: 400rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 40rpx 32rpx;
		position: relative;

	}

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
.up_slid1 {
		// color: white;
		position: absolute;
		right: -40rpx;
		top: -40rpx;
		width: 70rpx;
		height: 70rpx;
		text-align: center;
		line-height: 70rpx;
		
	}
	.up_img {
		width: 160rpx;
		height: 160rpx;
		margin: 10rpx 20rpx;
		border-radius: 20rpx;
	}

	/* 话题 */
	.btno {
		background-color: #f8b800;
		color: white;
		position: absolute;

		font-family: Inter-Regular, Inter;
		font-size: 52rpx;
		bottom: 0;
		left: 0;
		right: 0;
		height: 130rpx;
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

	.huati2 {
		background-color: #F8B800;
		color: white !important;
		border: none !important;
	}

	.huati1 {
		padding: 5rpx 15rpx;
		border-radius: 10rpx;
		border: 1rpx solid #9999;
		color: #9999;
		margin: 10rpx 15rpx;
		font-size: 25rpx;
		display: inline-block;
		white-space: nowrap;
	}

	.HuatiView {
		display: flex;
		align-items: center;
	}

	.huatia {
		display: flex;
		white-space: nowrap;
	}

	.huati {
		display: flex;
		white-space: nowrap;
		width: 536rpx;
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