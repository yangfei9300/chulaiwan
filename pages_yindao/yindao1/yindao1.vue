<template>
	<view>
		<view
		class="pagensa"  
		></view>
		<view class="topima pore">
			<image :src="Image[0]" style="width: 750rpx;height: 750rpx;"></image>
			<view class="poab colonn " style="top: 0rpx;left: 0rpx;width: 750rpx;height: 750rpx;">
				<view class="colonn" style="margin-left: 44rpx;">
					<view style="height: 182rpx;"></view>
					<view class="bianjiziliao">编辑资料</view>
					<view style="height: 12rpx;"></view>
					<view style="font-size: 32rpx;">请选择您的性别、昵称</view>
					<view style="height: 80rpx;"></view>
					<view class="roww rowsa">
						<view class="colonn center_center" style="opacity: 0.5;"
							:style="{   
								'opacity':sex==1?'1':'0.5'
							}"
							@click.stop="sexChange(1)"
						>
							<image :src="Image[1]" style="width: 196rpx;height: 196rpx;"></image>
							<view style="height: 24rpx;"></view>
							<view>男生</view>
						</view>
						<view class="colonn center_center"
							:style="{
								'opacity':sex==0?'1':'0.5'
							}"
							@click.stop="sexChange(0)"
						>
							<image :src="Image[2]" style="width: 196rpx;height: 196rpx;"></image>
							<view style="height: 24rpx;"></view>
							<view>女生</view>
						</view>  
					</view>
				</view>
			</view>
		</view>
		
		<view class="colonn center_center">
			<view class="shurukuangs roww center_center">
				<view class="w-20"></view>
				<input class="inputpla" v-model="nickname" maxlength="10" placeholder-class="inputpla" placeholder="想一个好听的昵称吧"  />
				<view class="allline"></view>
			</view>
			<view style="height: 116rpx;"></view>
			<view class="xiayibu"  @click="onbtn">下一步</view>
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex: 1,
				nickname: '',
				Image:[
					'https://ta.imjiayi.com/upload/upload/chongfu/01 1@2x.png',
					'https://ta.imjiayi.com/upload/upload/chongfu/4444@2x.png',
					'https://ta.imjiayi.com/upload/upload/chongfu/06@2x.png',
				]
			}
		},
		watch: {
			// sex(old, vld) {
			// 	// console.log(old)
			// }
		},
		methods: {
			sexChange(index){
				this.sex=index;
			},
			onbtn() {
				let get = getApp().globalData.reg;
				get.nickname = this.nickname;
				get.base_sex = this.sex;
				

				if (get.nickname.length > 0 && (get.base_sex == 0 || get.base_sex == 1)) {
					uni.navigateTo({
						url: '../yindao2/yindao2',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else {
					uni.showToast({
						title: '请完善信息',
						icon: 'none', //将值设置为 success 或者 ''
						duration: 2000 //持续时间为 2秒
					})
				}
			}
		}
	}
</script>

<style scoped>
	@import url(yindao1.css);
</style>