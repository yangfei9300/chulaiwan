<template>
	<view style="padding: 0 15rpx;">
		<!-- <view class="" v-html="details"></view> -->
		<rich-text :nodes="details" class="conter"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				details:''
			}
		},
		onLoad(options) {
			this.shop_no = options.shop_no;

		},
		mounted() {
			// 商家信息
			this.getDetail();

		},
		methods: {
			// 详情接口
			getDetail() {
				uni.request({
					url: this.baseurl + '/api/page/page',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token,
						city:uni.getStorageSync("citySel"),
					},
					data: {
						code: this.shop_no,
					},
					success: res => {
						uni.setNavigationBarTitle({title:res.data.data.name})
						this.details=res.data.data.content;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
		}
	}
</script>

<style>
</style>