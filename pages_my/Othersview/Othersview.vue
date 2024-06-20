<template>
	<view>
		<view class="" style="position: relative;">
			<image class="bjtp" src="https://ta.imjiayi.com/upload/upload/bjtp.png" mode="">
				<view class="zdy"
					:class="{zdy1:index==0,zdy2:index==1,zdy3:index==2,zdy4:index==3,zdy5:index==4,zdy6:index==5,}"
					v-for="(item,index) in biaoti" :key="index">{{item}}</view>
				<view class="renzheng">
					<image class="renzhengimg" src="../../static/myimg/认证%20(1)%2023.png" mode=""></image>
					<text class="renzheng_text">暂未认证</text>
				</view>
				<view class="guanzhu1">
					<view class="">999</view>
					<view class="">粉丝</view>
				</view>
				<view class="guanzhu2">
					<view class="">999</view>
					<view class="">粉丝</view>
				</view>
				<view class="guanzhu3">
					<view class="">999</view>
					<view class="">粉丝</view>
				</view>
			</image>
			<image class="touxiang" src="../../static/indeximg/Ellipse%2092.png" mode=""></image>
			<!-- 动态相关 -->
			<view class="xbbj" style="border-radius: 20rpx;position: absolute;height: 500rpx;">
				<view class="name">
					<view class="name_1">
						<view class="name_2">张艺兴</view>
						<view class="name_3">Svip</view>
					</view>
					<view class="name_4">关注</view>
				</view>
				<view class="gqian">赶快编辑个性签名吧~</view>
				<view class="ziliaoview">
					<image class="seximg" src="../../static/myimg/男%2018.png" mode=""></image>
					<view class="diqu">济南市历下区</view>
					<view class="xingzuo">天蝎座</view>
				</view>
				<view class="dt_fenge">动态</view>
				<view class="dt_content">
					<view class="" style="width: 12%;">
						<image class="dtavatar_img" src="../../static/indeximg/Ellipse%2091.png" mode=""></image>
					</view>
					<view class="" style="width: 88%;">
						<view class="dtavatar_name">梓曦</view>
						<!-- 时间与签名 -->
						<view class="qianming">
							<text>13:00</text>
							<text>要早睡不然木得仙气~</text>
						</view>
						<view class="neirong">你在看啥子?</view>
						<view class="tppl_img">
							<image class="dttp_img" src="../../static/indeximg/自由行.png" mode=""></image>
						</view>
						<view class="address_xinxi">
							<image class="address_img" src="../../static/releaseimg/地址%20(2).png" mode=""></image>
							<view class="address_title">汉峪金谷A3-1</view>
						</view>
						<view class="bianqian">
							<view class="biaoqian_title">#粗来玩</view>
						</view>
						<!-- 点赞 评论 与聊天 -->
						<view class="hudong">
							<view class="hudong_view">
								<image class="hudong_img" src="../../static/indeximg/tabbar22.png" mode=""></image>
								<view class="hudong_shuliang">99+</view>
							</view>
							<view class="hudong_view">
								<image class="hudong_img" src="../../static/indeximg/tabbar22.png" mode=""></image>
								<view class="hudong_shuliang">99+</view>
							</view>
							<view class="hudong_view">
								<image class="hudong_img" src="../../static/indeximg/tabbar22.png" mode=""></image>
								<view class="hudong_shuliang">99+</view>
							</view>
						</view>
					</view>
				</view>
				<view class="dt_content">
					<view class="" style="width: 12%;">
						<image class="dtavatar_img" src="../../static/indeximg/Ellipse%2091.png" mode=""></image>
					</view>
					<view class="" style="width: 88%;">
						<view class="dtavatar_name">梓曦</view>
						<!-- 时间与签名 -->
						<view class="qianming">
							<text>13:00</text>
							<text>要早睡不然木得仙气~</text>
						</view>
						<view class="neirong">你在看啥子?</view>
						<view class="tppl_img">
							<image class="dttp_img" src="../../static/indeximg/自由行.png" mode=""></image>
						</view>
						<view class="address_xinxi">
							<image class="address_img" src="../../static/releaseimg/地址%20(2).png" mode=""></image>
							<view class="address_title">汉峪金谷A3-1</view>
						</view>
						<view class="bianqian">
							<view class="biaoqian_title">#粗来玩</view>
						</view>
						<!-- 点赞 评论 与聊天 -->
						<view class="hudong">
							<view class="hudong_view">
								<image class="hudong_img" src="../../static/indeximg/tabbar22.png" mode=""></image>
								<view class="hudong_shuliang">99+</view>
							</view>
							<view class="hudong_view">
								<image class="hudong_img" src="../../static/indeximg/tabbar22.png" mode=""></image>
								<view class="hudong_shuliang">99+</view>
							</view>
							<view class="hudong_view">
								<image class="hudong_img" src="../../static/indeximg/tabbar22.png" mode=""></image>
								<view class="hudong_shuliang">99+</view>
							</view>
						</view>
					</view>
				</view>
				<view class="dt_content">
					<view class="" style="width: 12%;">
						<image class="dtavatar_img" src="../../static/indeximg/Ellipse%2091.png" mode=""></image>
					</view>
					<view class="" style="width: 88%;">
						<view class="dtavatar_name">梓曦</view>
						<!-- 时间与签名 -->
						<view class="qianming">
							<text>13:00</text>
							<text>要早睡不然木得仙气~</text>
						</view>
						<view class="neirong">你在看啥子?</view>
						<view class="tppl_img">
							<image class="dttp_img" src="../../static/indeximg/自由行.png" mode=""></image>
						</view>
						<view class="address_xinxi">
							<image class="address_img" src="../../static/releaseimg/地址%20(2).png" mode=""></image>
							<view class="address_title">汉峪金谷A3-1</view>
						</view>
						<view class="bianqian">
							<view class="biaoqian_title">#粗来玩</view>
						</view>
						<!-- 点赞 评论 与聊天 -->
						<view class="hudong">
							<view class="hudong_view">
								<image class="hudong_img" src="../../static/indeximg/tabbar22.png" mode=""></image>
								<view class="hudong_shuliang">99+</view>
							</view>
							<view class="hudong_view">
								<image class="hudong_img" src="../../static/indeximg/tabbar22.png" mode=""></image>
								<view class="hudong_shuliang">99+</view>
							</view>
							<view class="hudong_view">
								<image class="hudong_img" src="../../static/indeximg/tabbar22.png" mode=""></image>
								<view class="hudong_shuliang">99+</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				biaoti: ["#天眼玩家", "#天眼玩家", "#天眼玩家", "#天眼玩家", "#酒吧原住居民", "#天眼玩家"]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
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

	/* 动态图片img */
	.dttp_img {
		width: 200rpx;
		height: 200rpx;
		margin: 5rpx;
	}

	.dt_content {
		display: flex;
		margin: 40rpx 0;
	}

	/* 动态分割 */
	.dt_fenge {
		display: flex;
		background: #F6F6F6;
		/* color: white; */
		font-size: 36rpx;
		font-weight: 600;
		padding-left: 40rpx;

	}

	/* 资料信息 */
	.ziliaoview {
		display: flex;
		align-items: center;
	}

	/* 性别图片 */
	.diqu {
		color: #555555;
		font-size: 22rpx;
		background: #F6F6F6;
		padding: 5rpx;
		margin: 0 10rpx 20rpx 0;

	}

	.xingzuo {
		color: #555555;
		font-size: 22rpx;
		background: #F6F6F6;
		padding: 5rpx;
		margin: 0 10rpx 20rpx 0;

	}

	.seximg {
		width: 20rpx;
		height: 20rpx;
		background: #F6F6F6;
		padding: 5rpx;
		margin: 0 10rpx 20rpx 0;
	}



	/* 动态头像 */
	.dtavatar_img {
		width: 70rpx;
		height: 70rpx;
	}

	.dtavatar_name {
		font-size: 24rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 600;
	}

	.name {
		display: flex;
		justify-content: space-between;
	}

	.name_1 {
		display: flex;

		>.name_2 {
			font-size: 28rpx;
			font-weight: 600;
		}

		>.name_3 {
			font-size: 20rpx;
			font-family: Inter-Regular, Inter;
			font-weight: 600;
			color: #F8B800;
			background: rgba(248, 184, 0, 0.2);
			border-radius: 30rpx;
			padding: 5rpx 15rpx;
			margin-left: 20rpx;

		}


	}

	.name_4 {
		font-size: 20rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 600;
		color: white;
		background: #F8B800;
		border-radius: 30rpx;
		padding: 5rpx 15rpx;
		margin-left: 20rpx;
	}

	.guanzhu3 {
		position: absolute;
		display: flex;
		flex-direction: column;
		color: white;
		top: 245rpx;
		right: 120rpx;
	}

	.guanzhu2 {
		position: absolute;
		display: flex;
		flex-direction: column;
		color: white;
		top: 245rpx;
		left: 375rpx;
	}

	.guanzhu1 {
		position: absolute;
		display: flex;
		flex-direction: column;
		color: white;
		top: 245rpx;
		left: 195rpx;
	}

	.guanzhu {
		position: absolute;
		display: flex;
		flex-direction: column;
		color: white;
	}

	.touxiang {
		width: 150rpx;
		height: 150rpx;
		position: absolute;
		left: 20rpx;
		top: 240rpx;
		z-index: 1;
	}

	/* 下半部分背景 */
	.xbbj {
		border-radius: 10px;
		position: absolute;
		height: 250px;
		top: 337rpx;
		background: white;
		left: 0;
		right: 0;
		padding-top: 80rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;

	}

	.bjtp {
		// position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		right: 0;
		height: 350rpx;
		z-index: -1;
	}
</style>
