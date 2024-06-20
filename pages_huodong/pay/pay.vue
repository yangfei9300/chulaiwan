<template>
	<view>
		<view class="header">
			<image class="cover" :src="list.cover" mode="aspectFill"></image>
		</view>
		<view class="box">
			<view class="basic_View1">
				<view class="theme_view">
					<view class="quan"></view>
					<view class="theme_title">参与信息确认</view>
				</view>
			</view>
			<view class='acinfo'>
				<view>活动：{{list.title}}</view>
				<view>地址：{{list.add_detail}}</view>
				<view>时间：{{list.time_str}}</view>
			</view>
			<view class='tishi'>
				<image class="basic_img" src="../../static/activity/tishi.png" mode=""></image>
				<text>本活动不支持退款 请您合理安排时间</text>
				
			</view>
			<view class='payinfo'>
				<view>支付金额</view>
				<view class="price">￥{{list.money_}}</view>
				
			</view>
			<view class='beizhu'>
				<textarea class="introducetext" value="" v-model="Detail" placeholder="备注:" />
			</view>
			<view class='desc_title'>
				不支持退换说明：
			</view>
			<view class='desc_content'>
			鉴于活动特殊性（具有实效性、唯一性等特征）一旦成功加入，除因不可抗因素导致活动取消或延期，其余情况无法退款，请您在下单时务必仔细核对订单信息，合理安排时间。
			</view>
			<view class='gopay' @click="gopay()">
				确认支付
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
				lat: getApp().globalData.lat,
				lng: getApp().globalData.lng,
				act_no: '',
				distance: 0,
				list: [],
				Detail:'',
				openid:'oWwzJ4iTZojS9CfhGwZkh1_5YdHU'
				
			}
		},
		onLoad(options) {
			console.log(options.act_no);
			this.act_no = options.act_no;
			uni.login({
				success:(res)=> {
					console.log(res);
					this.code = res.code
					this.getOpenid(this.code)
				}
			})
		},
		onShow() {
			this.getDetail();
		},
	
		methods: {
			getOpenid(e){
				uni.request({
					url: this.baseurl + '/api/login/getOpenid',
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token,
					},
					data: {
						code:e,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("openid", res);
						this.openid=res.data.openid
				
					},
					fail: () => {},
					complete: () => {}
				});
				
				
			},
	
			getDetail() {
				uni.request({
					url: this.baseurl + '/api/act/actInfo',
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token
					},
					data: {
						act_no: this.act_no,
						
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						this.list = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			//支付
			gopay() {
				if(!this.Detail){
					uni.showToast({
						title: '请添加备注',
						mask: true,
						icon: 'none'
					});
					return;
				}
				if(!this.openid){
					uni.showToast({
						title: '支付错误',
						mask: true,
						icon: 'none'
					});
					return;
				}
				uni.request({
					url: this.baseurl + '/api/actDo/prepay',
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token
					},
					data: {
						act_no: this.act_no,
						pay_type:3,
						city:uni.getStorageSync("citySel"),
						remark:this.Detail,
						ticket:1,
						openid:this.openid
					},
					success: res => {
						if(res.data.code == 1){
						
							uni.requestPayment({
							    provider: 'wxpay',
							    timeStamp: res.data.data.timeStamp,
							    nonceStr: res.data.data.nonceStr,
							    package: res.data.data.package,
							    signType: res.data.data.signType,
							    paySign: res.data.data.paySign,
							    success: (res) =>{
								
									uni.showToast({
										title:'支付成功',
										icon:'none',
										success() {
											uni.navigateBack({
												delta: 1,
											});
										}
									})
							        console.log('success:' + JSON.stringify(res));
							    },
							    fail: function (err) {
									console.log(err)
									uni.showToast({
										title:'支付失败',
										icon:'none'
									})
							        console.log('fail:' + JSON.stringify(err));
							    }
							});
						}else{
							uni.showToast({
								title:res.data.info,
								icon:'none'
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
		}	
	}
</script>

<style scoped>
	.header{
		height: 580rpx;
	}
	page{
		background-color:#F6F7F9 ;
	}
	
	
	@keyframes OnePOP {
		from {
			transform: translateY(1000rpx);
		}

		to {
			transform: translateY(0rpx);
		}
	}

	.fixed {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
	}

	

	
	
	

	/* 轮播图 */
	.cover {
		width: 100%;
		/* object-fit: cover;
		height: 100%; */
	}
	.acinfo{
		display: block;
		font-size: 32rpx;
		line-height: 38rpx;
		padding: 22rpx 0;
	
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		font-size: 32rpx;
		flex-direction: column;
		-webkit-display: flex;
		justify-content: center;
		line-height: 76rpx;
		padding-left: 24rpx;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	
	.tishi{
		/* width:// 674rpx; */
		height: 78rpx;
		background: #000000;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		display: flex;
		align-items: center;
		padding: 2rpx 0;
	}

	.tishi image{
		width: 52rpx;
		height: 52rpx;
		margin-left: 24rpx;
	}
	.tishi text{
		color: #F8B800;
		font-size: 32rpx;
		padding: 33rpx;

	}
	.payinfo{
		padding: 50rpx 24rpx;
		display: flex;
		justify-content: space-between;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		margin: 30rpx 0;
	}
	
	.payinfo .price{
		color: #D60000;
	}
	.beizhu{
		padding-top: 18rpx;
		padding-left: 26rpx;
		/* width: 674rpx; */
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
	}
	.desc_title{
		    color: #D60000;
		    font-size: 30rpx;
		    margin-top: 32rpx;
		    margin-bottom: 2rpx;
	}
	.desc_content{
		color: #959595;
	}
	.gopay{
		display: flex;
		align-items: center;
		/* text-align: center; */
		/* margin: auto; */
		justify-content: center;
		margin-top: 38rpx;
		font-size: 52rpx;
		color: #FFFFFF;
		width: 674rpx;
		height: 110rpx;
		background: #F8B800;
		border-radius: 24rpx 24rpx 24rpx 24rpx;
	}
	.theme_swiperImg {
		/* height: 508rpx;
		width: 660rpx;
		border-radius: 10rpx; */
		border-radius: 10rpx;
		height: 100%;
	}

	.theme_swiper {
		width: 100%;
		height: 508rpx;
		margin-top: 20rpx;
	}

	/* 主题推荐 */
	.quan {
		width: 40rpx;
		height: 40rpx;
		background: rgba(248, 184, 0, 0.5);
		border-radius: 50rpx;
		position: absolute;
		left: 0;
		top: 0;
	}

	.theme_text {
		font-size: 32rpx;
		font-weight: 400;
		font-family: Inter-Regular, Inter;
		margin-top: 38rpx;
		white-space: pre-line;
	}

	.theme_title {
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		margin-left: 10rpx;
	
	}

	.theme_view {
		display: flex;
		position: relative;
	}

	
	.cuxian1 {
		height: 12rpx;
		background: #F8F8F8;
		margin: 40rpx 0;
	}

	.cuxian {
		height: 12rpx;
		background: #F8F8F8;
		margin: 26rpx 0;
	}

	

	.basic {
		/* padding-left: 30rpx; */
		padding-top: 44rpx;
		/* padding-right: 30rpx; */
		/* background-image: linear-gradient(to right, #FFB15B, #E96535); */
		border-radius: 30pt 30pt 0pt 0pt;
		position: relative;
		top: -96rpx;
	}
	.box{
		border-radius: 16px 16px 0 0;
		position: relative;
		top: -55px;
		background-color: #F6F7F9;
		padding: 52rpx 36rpx;
		 
	}
	.page{
		background-color: #F6F7F9;
	}
</style>
