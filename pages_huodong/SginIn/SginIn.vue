<template>
	<view class="content">
		<view class="Sgin">
			<view class="SginTitle">{{list.title}}</view>
			<canvas canvas-id="qrcode"></canvas>
			<view class="SginTow">
				赶快<text style="color: #F8B800;">扫一扫</text>一起玩耍吧~
			</view>
		</view>
	</view>
</template>

<script>
	import uQRCode from '../../components/uqrcode.js'
	export default {
		data() {
			return {
				// act_no: '',
				list: [],

			}
		},
		onLoad(options) {
			this.list = JSON.parse(options.list);
			console.log(this.list);
		},
		mounted() {
			this.qrFun();
		},
		methods: {
			// 生成二维码
			qrFun() {
				uQRCode.make({
					canvasId: 'qrcode',
					componentInstance: this,
					text: this.list.act_no,
					size: 220,
					margin: 0,
					backgroundColor: '#ffffff',
					foregroundColor: '#000000',
					fileType: 'png',
					errorCorrectLevel: uQRCode.errorCorrectLevel.H,
					success: res => {
						// console.log("二维码图片",res);
					}
				})

			}
		}
	}
</script>

<style scoped>
	canvas {
		width: 220px;
		height: 220px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.SginTow {
		font-size: 32rpx;
		margin: 20rpx 0;
	}

	.SginTitle {
		font-size: 40rpx;
		margin: 30rpx 0;
	}

	.Sgin {
		    padding: 20rpx 0;
		background-color: white;
		border-radius: 20rpx;
		box-shadow: 0px 0px 15px 0px rgba(17, 17, 17, 0.05);
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.content {
		padding: 80rpx 100rpx;
		background: #FAFAFA;
    height: 100vh;
		font-family: Inter-Regular, Inter;
	}
</style>
