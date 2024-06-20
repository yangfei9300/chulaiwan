<template>
	<view class="content">
		<view class="title">请选择标签(最多10个)</view>
		<view class="label_view">
			<view class="label_label">
				<view class="label_label_name" :class="{border_bottom:activ==index}">性格</view>
				<view class="">性格</view>
				<view class="">性格</view>
				<view class="">性格</view>
				<view class="">小众文化</view>
			</view>
			<view class="label_content">
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
				<view class="label_content_name">老实人</view>
			</view>
		</view>
		<button class="btn" :disabled="false"> 保存 (已选0)</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activ: 0,
				index: 0,
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.title {
		font-size: 32rpx;
		color: #111111;
		font-weight: 600;
		padding: 20rpx 0;
	}

	.btn {
		position: absolute;
		bottom: 20%;
		left: 20%;
		right: 20%;
		border-radius: 28rpx;
		color: white;

		background: #FFE898;
		font-size: 40rpx;
		height: 70rpx;
		text-align: center;
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.label_content_name {
		color: #9999;
		border: 1rpx solid #9999;
		margin: 10rpx 14rpx;
		padding: 5rpx 20rpx;
		border-radius: 20rpx;
		font-size: 24rpx;

	}

	.label_content {
		display: flex;
		flex-wrap: wrap;
		margin-top: 25rpx;
		/* justify-content: space-between; */
	}

	.border_bottom {
		border-bottom: 5rpx solid #f8b800;
	}

	.label_label_name {
		font-size: 28rpx;
		font-weight: 600;
		color: #111111;
		padding-bottom: 10rpx;
	}

	.label_label {
		display: flex;
		justify-content: space-between;
		border-bottom: 1rpx solid #9999;
		padding-bottom: 25rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;

	}

	.label_view {
		background: white;
		border-radius: 20rpx;
		padding: 20rpx;
	}

	.content {
		background: #F8F8F8;
		padding: 0 20rpx;
		height: 100vh;
	}
</style>
