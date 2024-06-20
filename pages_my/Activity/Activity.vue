<template>
	<view>
		<view class="back">
			<view class="avatar">
				<image class="avatarimg" src="../../static/indeximg/Ellipse%2090.png" mode=""></image>
				<view class="avatarname">王有志</view>
			</view>
			<view class="jindu">
				<view class="huoyue"><text class="huoyue1">3798</text><text class="huoyue2">活跃度</text></view>
				<progress style="height: 30rpx;" border-radius="20" stroke-width="16" percent="30" activeColor="#FFFFFF"
					backgroundColor="#FFE392 " />
			</view>
		</view>
		<view class="renwutitle">
			日常任务
		</view>
		<view class="">
			<view class="jl" >
				<view class="jl2" >
					<image class="renwuimg" src="../../static/myimg/fabudongtaiimg.png"></image>
				</view>
				<view class="jl3" >
					<view class="jl4">
						<text class="jl5" >发布动态</text>
						<text class="jl6" >❤</text>
						<text class="jl7" >+20</text>
					</view>
					<view class="textvalue">发布活动欧耶撒四类得话语已u欧皇biu截个图科技卡号比较快给他空间阿尔寇</view>
				</view>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style scoped>
	.jl{
		display: flex; margin: 20rpx;
	}
	.jl2{
		width: 10%;
	}
	.jl3{
		width: 80%;margin-left: 20rpx;
	}
	.jl5{
		font-size: 28rpx;font-weight: 600;
	}
	.jl6{
		color: #f8B800;
		margin: 0rpx 10rpx;
	}
	.jl7{
		color: #f8B800;
	}
	.textvalue {
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		/* vertical-align: 2; */
		-webkit-line-clamp: 2;
		font-size: 20rpx;
		color: #C7C7C7;
	}

	.renwutitle {
		margin-left: 20rpx;
		font-size: 32rpx;
		font-weight: 600;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}

	.renwuimg {
		width: 80rpx;
		height: 65rpx;
	}

	.huoyue2 {
		font-size: 30rpx;
		font-weight: 600;
		margin-left: 10rpx;
	}

	.huoyue1 {
		font-size: 48rpx;
		font-weight: 600;
	}

	.avatarname {
		font-size: 32rpx;
		margin-left: 20rpx;
		font-weight: 600;
	}

	.jindu {
		position: absolute;
		left: 30rpx;
		bottom: 20rpx;
		right: 20rpx;
	}

	.back {
		height: 300rpx;
		background: linear-gradient(205deg, #F8B800 0%, #FFE8A6 100%);
		border-radius: 20rpx;
		opacity: 1;
		padding: 0 30rpx;
		margin: 0 20rpx;
		position: relative;
	}

	.avatarimg {
		width: 100rpx;
		height: 100rpx;
	}

	.avatar {
		display: flex;
		align-items: center;
		padding-top: 30rpx;
	}
</style>
