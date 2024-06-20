<template>
	<view>
		<!-- 隐私协议 -->
		<web-view v-if="type==1" src="https://ta.imjiayi.com/aggrement/PrivacyAgreement.html"></web-view>
		<web-view v-if="type==3" src="https://ta.imjiayi.com/aggrement/RechargeProtocol.html"></web-view>
		<web-view v-if="type==2" src="https://ta.imjiayi.com/aggrement/index.html"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:Number,
			}
		},
		onLoad(options) {
			this.type=options.type
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
