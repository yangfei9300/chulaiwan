<template>
	<view>
		<view class="zt">
			<view class="ove" v-show="adv"></view>
			<view class="zt1" :class="{zt2:current==0}" @click="qiehuan2(1)">已参加</view>
			<view class="ove1" v-show="adv1"></view>
			<view class="zt1" :class="{zt2:current==1}" @click="qiehuan2(2)">已发布</view>
			
		</view>
		<view class="huodong_view" v-show="adv">
			<view class="huodong_content" >
				<view class="">
					<image class="huodong_img" src="../../static/indeximg/商家推荐02.png" mode=""></image>
				</view>
				<view class="huodong_neirong">
					<view class="huodong_title">有空一起出来玩</view>
					<view class="huodong_address">地址:汉峪金谷A3-1</view>
					<view class="huodong_time">
						<view class="huodong_time1">
							<image class="huodong_img1" src="../../static/index/naozhong.png" mode="">
							</image>
							<view class="huodong_time2">03-12 周二 12:00</view>
						</view>
						<view class="huodong_money">¥555</view>
					</view>
					<view class="huodong_renshu">
						<view class="">
							<image class="huodong_avatar" src="../../static/indeximg/会员排名01.png"
								mode=""></image>
						</view>
						<view class="">1/3</view>
					</view>
					<view class="huodong_zhuangtai">进行中</view>
				</view>
			</view>
		</view>
		<view class="huodong_view" v-show="adv1">
			<view class="huodong_content" >
				<view class="">
					<image class="huodong_img" src="../../static/indeximg/商家推荐02.png" mode=""></image>
				</view>
				<view class="huodong_neirong">
					<view class="huodong_title">有空一起出来玩</view>
					<view class="huodong_address">地址:汉峪金谷A3-1</view>
					<view class="huodong_time">
						<view class="huodong_time1">
							<image class="huodong_img1" src="../../static/index/naozhong.png" mode="">
							</image>
							<view class="huodong_time2">03-12 周二 12:00</view>
						</view>
						<view class="huodong_money">¥555</view>
					</view>
					<view class="huodong_renshu">
						<view class="">
							<image class="huodong_avatar" src="../../static/indeximg/会员排名01.png"
								mode=""></image>
						</view>
						<view class="">12/3</view>
					</view>
					<view class="huodong_zhuangtai">进行中</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shows1: true,
				shows2: true,
				adv:true,
				adv1:false,
				current:0,
			}
		},
		methods: {
			
			qiehuan2(e){
				if(e==1){
					this.adv=true;
					this.adv1=false;
					this.current=0;
				}else if(e==2){
						this.adv=false;
						this.adv1=true;
						this.current=1;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.ove{
	        background: #F8B800 80%;
	        width: 40rpx;
	        height: 40rpx;
	        opacity: 0.8;
	        position: relative;
	        border-radius: 50rpx;
	        position: absolute;
	        left: 235rpx;
	        top: 25rpx;
	    
	}
	.ove1{
	    background: #F8B800 80%;
	    width: 40rpx;
	    height: 40rpx;
	    opacity: 0.8;
	    position: relative;
	    border-radius: 50rpx;
	    position: absolute;
	    left: 385rpx;
	    top: 25rpx;
	
	}
	
	.zt{
		    display: flex;
		    justify-content: center;
		    position: relative;
		    align-items: center;
		
	}
	.zt1{
		margin:30rpx;
		font-size: 32rpx;
		// font-weight: 600;
	}
	.zt2{
		font-size: 36rpx;
	}
	
	.huodong_zhuangtai{
		    display: flex;
		    width: 120rpx;
		    justify-content: center;
		    background: rgba(233,190,93,0.2000);
		    color: #F8B800;
		    border-radius: 30px 30px 30px 30px;
		    position: absolute;
		    right: 0rpx;
		    bottom: 0;
	}
	.huodong_renshu{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.huodong_avatar {
		width: 50rpx;
		height: 50rpx;
		border-radius: 50rpx;
	}
	
	.huodong_view {
		padding: 20rpx;
		box-shadow: 0 0 15px 1px #0D111111;
	}
	
	.huodong_money {
		font-size: 28rpx;
		color: #F8B800;
	}
	
	.huodong_time2 {
		font-size: 20rpx;
	}
	
	.huodong_time1 {
		display: flex;
		align-items: center;
	}
	
	.huodong_time {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.huodong_title {
		font-size: 32rpx;
		font-weight: 600;
	}
	
	.huodong_address {
		font-size: 24rpx;
		color: #939393;
	}
	
	.huodong_neirong {
		position: relative;
		margin-left: 20rpx;
		width: 100%;
	}
	
	.huodong_img1 {
		width: 30rpx;
		height: 30rpx;
	}
	
	.huodong_img {
		width: 200rpx;
		height: 200rpx;
	}
	
	.huodong_content {
		display: flex;
		width: 100%;
	
	}
	
	.huodong1 {
		display: flex;
		margin-left: 20rpx;
		    margin-top: 20rpx;
		    margin-bottom: 20rpx;
	
		>view {
			margin-right: 20rpx;
		}
	}
	
	.huodong {
		padding: 0 20rpx;
	}
	
	// 信誉积分
	.jifen {
		font-size: 24rpx;
		font-weight: 600;
	}
	
	.zdy {
		position: absolute;
		z-index: 1;
		font-size: 24rpx;
		font-weight: 600;
		color: white;
	}
	
	.zdy1 {
		position: absolute;
		z-index: 1;
		left: 80rpx;
		top: 70rpx;
		background: #1A2A33;
		color: white;
		padding: 5rpx 20rpx;
	
	}
	
	.zdy2 {
		position: absolute;
		z-index: 1;
		left: 280rpx;
		top: 81rpx;
		background: #362942;
		padding: 5rpx 20rpx;
		color: white;
	
	}
	
	.zdy3 {
		left: 480rpx;
		top: 70rpx;
	
		position: absolute;
		z-index: 1;
		padding: 5rpx 20rpx;
		color: white;
		background: #1A2A33;
	
	}
	
	.zdy4 {
		position: absolute;
		z-index: 1;
		left: 130rpx;
		top: 150rpx;
		background: #2C331D;
		padding: 5rpx 20rpx;
	
	}
	
	.zdy5 {
		position: absolute;
		z-index: 1;
		left: 325rpx;
		top: 150rpx;
		background: #362D11;
		padding: 5rpx 20rpx;
	
	}
	
	.zdy6 {
		z-index: 1;
		position: absolute;
		left: 560rpx;
		top: 150rpx;
		background: #2C331D;
		padding: 5rpx 20rpx;
	
	}
	
	// 认证
	.renzheng {
		position: absolute;
		top: 360rpx;
		left: 40rpx;
		background: #414141;
		z-index: 2;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		padding: 5rpx;
	
	}
	
	.renzheng_text {
		font-size: 20rpx;
		color: white;
	}
	
	.renzhengimg {
		width: 30rpx;
		height: 30rpx;
	}
	
	// 个性签名
	.gqian {
		font-size: 24rpx;
		font-weight: 600;
		margin: 15rpx 0;
	}
	
	// 动态内容
	.neirong {
		font-size: 24rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 600;
		color: #3A3A3A;
	}
	
	/* 时间与签名 */
	.qianming {
		margin: 5rpx 0rpx;
		font-size: 24rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 600;
		color: #AEAEAE;
	
		>text {
			margin-right: 5rpx;
		}
	}
	
	/* 互动 */
	.hudong_view {
		display: flex;
		align-items: center;
	}
	
	.hudong_shuliang {
	
		font-size: 24rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 600;
		color: #A8A8A8;
	
	}
	
	.hudong_img {
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}
	
	.hudong {
		display: flex;
		justify-content: space-between;
		margin-top: 10rpx;
	}
	
	/* 标签 */
	.biaoqian {
		display: flex;
	}
	
	.biaoqian_title {
		width: 100rpx;
		font-size: 20rpx;
		color: #F8B800;
		padding: 5rpx 10rpx;
		margin-right: 10rpx;
		background: #FFF8E4;
	}
	
	/* 地址信息 */
	.address_img {
		width: 20rpx;
		height: 20rpx;
	}
	
	.address_title {
		font-size: 24rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 600;
		color: #3A3A3A;
	}
	
	.address_xinxi {
		display: flex;
		align-items: center;
		margin: 7rpx 0;
	}
	
	/* 排练图片 */
	.tppl_img {
		display: flex;
		flex-wrap: wrap;
	
	}
	


</style>
