<template>
	<view>
		<view class="colonn center_center huuibeijing"
		  style="z-index: 500000;"
		  @click.stop="hideview"
		@touchmove="preventTouchMove"
		
		
		>
			<view class="pore w-440 h-466">
				<image
				class="w-440 h-466 poab"
				style="top: 0rpx;left: 0rpx;"
				src="https://ta.imjiayi.com/upload/upload/小程序下载弹窗_slices/消息提醒精美弹窗UI 9@2x.png"></image>
				<image  @click.stop="closeClick()"
				class="w-48 h-48 poab"
				style="top: 20rpx;right: 20rpx;"
				src="https://ta.imjiayi.com/upload/upload/小程序下载弹窗_slices/Component 412@2x.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"loadApp",
		props: {
			
		},
		data() {
			return {
			};
		},
		methods:{
			closeClick(){
				this.$emit('closeClick', {})
			},
			hideview(){
				
			},
			preventTouchMove()
			 { },
		}
	}
</script>

<style>

</style>