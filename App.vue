<script>
	export default {      
		globalData:{
			baseurl:'https://ta.imjiayi.com',
			imgurl:'http://ysv.zjhaly.top',
			// 高德地图key
			key:'bf84d9693654c4dbc667a2c462ebdca4',
			token:uni.getStorageSync('token'),
			uuid:uni.getStorageSync('uuid'),
			lat:uni.getStorageSync('lat'),
			lng:uni.getStorageSync('lng'),
			// 注册
			reg:{
				nickname:'',
				base_sex:'',
				base_birthday:'',
				headimg:'',
				base_con:'',
				base_address:'',
				base_interest:[],
				// 标签
				base_marks:[],
			}, 
		},  
		onLaunch: function(res) {
			console.error("选择成功",res);
			var citySel=uni.getStorageSync("citySel");
			if(!citySel){  
				uni.setStorageSync("citySel","济南市");
			}
			
			console.log("餐撒胡",res);
			// wx.getLocation({
			//  type: 'wgs84',
			//  success (res) {
			// 	 uni.setStorageSync("lat",res.latitude);
			// 	 uni.setStorageSync("lng",res.longitude);  
			//  },
			//  complete: (res) => {
			//  }
			// })
			uni.login({
				success:(res)=> {
					uni.request({
						url: this.globalData.baseurl + '/api/login/getOpenid',
						method: 'POST',
						data: {
							code:res.code,
						city:uni.getStorageSync("citySel"),
						},
						header: {
							xcx: 1,
						},
						success: res => {
							console.log("openid",res);
							uni.setStorageSync("openid",res.data.openid)
						},
						fail: () => {},
						complete: () => {}
					});
				}
			})   
		},  
		onShow: function() {
			console.log(this.globalData.token)
			setTimeout(res => {
				this.toshnegji();
			}, 1000)
			// if(!this.globalData.token){
			// 	uni.reLaunch({
			// 		url:'/pages/Login/Login'
			// 	})
			// }
			// uni.request({
			
			// 	url: this.globalData.baseurl + '/api/act/actCate',
			// 	method: 'POST',
			// 	header: {
			// 		xcx:1,
			// 		token: this.globalData.token
			// 	},
			// 	data: {
			// 		page: 1,
			// 		num: 1
			// 	},
				
			// 	success: res => {
			// 		console.log("活动分类111", res);
			// 		if(res.data.code==1001){
			// 			uni.reLaunch({
			// 				url:'/pages/Login/Login'
			// 			})
			// 		}
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			toshnegji() {
				if (wx.canIUse('getUpdateManager')) {
					const updateManager = wx.getUpdateManager()
					updateManager.onCheckForUpdate(function(res) {
						console.log('onCheckForUpdate====', res)
						// 请求完新版本信息的回调
						if (res.hasUpdate) {
							console.log('res.hasUpdate====')
							updateManager.onUpdateReady(function() {
								wx.showModal({
									title: '更新提示',
									content: '新版本已经准备好，是否重启应用？',
									success: function(res) {
										console.log('success====', res)
										// res: {errMsg: "showModal: ok", cancel: false, confirm: true}
										if (res.confirm) {
											// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
											updateManager.applyUpdate()
										}
									}
								})
							})
							updateManager.onUpdateFailed(function() {
								// 新的版本下载失败
								wx.showModal({
									title: '已经有新版本了哟~',
									content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
								})
							})
						}
					})
				}
			},
		}  
	}
</script>

<style lang="scss">
	
	@import url("/style/style.css");
	@import url("/style/style_rpx.css");
	@import "/style/ty_style_scss.scss";
	@import url("/style/animate.css");
	
	::-webkit-scrollbar{ display:none;}    
	
	.myxaiosa{
		position: fixed;right: 30rpx;bottom: 180rpx;z-index: 1000;
	}
	/*每个页面公共css */
	/* // 底部导航栏 */
	.tabbar_name {
		color: #A7A7A7;
		font-size: 24rpx;
	}
	
	.tabbar_active {
		color: #F8B800;
	}
	
	.tabbar_img {
		width: 48rpx;
		height: 45rpx;
	}
	
	.tabbar_img_3 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		background: white;
		left: 25rpx;
		top: -60rpx;
		padding: 10rpx;
		border-radius: 65rpx;
		border-top: 1rpx solid #f1f1f1;
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
		border-top: 1rpx solid #F1F1F1;
		box-shadow: 0 0 35rpx 0 #F9F9F9;
	}
</style>
