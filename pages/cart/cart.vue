<template>
	<view class="content">
		<view class="center">
			<view class="tab">
				<view class="" style="padding-left: 24rpx; font-size: 42rpx;font-weight: 800;">活动分类</view>
				<view class="tabitem" v-for="(item,index) in actelist" :class="{acc:arr.includes(item.name)}"
					@click="biaoqian(item.name,item.id)">
					<image class="acteimg" :src="item.cover" mode="aspectFill"></image>
					<view class="acte_view">
						<view class="acte_name">{{item.name}}</view>
						<view class="acte_remark">{{item.remark}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
  
<script>
	import uploadImage from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				actelist: [],
				arr: [],
			}
		},
		mounted() {
			// 获取标签
			this.acte();
		},
		methods: {
			// 获取标签
			acte() {
				uni.request({
					url: this.baseurl + '/api/act/actCate',
					method: 'POST',
					data:{
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1, 
						token: this.token
					},
					success: res => {
						console.log(res);
						this.actelist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			biaoqian(name, id) {
				let pages = getCurrentPages();
				// 当前页页面实例
				// let nowPage = pages[ pages.length - 1]; 

				// 上一页页面实例
				let prevPage = pages[pages.length - 2];
				console.log(prevPage.$vm);
				prevPage.$vm.cate_name = name;
				prevPage.$vm.cate_id = id;
				uni.navigateBack({
					delta: 1,

				});
				// console.log(item)
				// let oaa = this.arr.includes(item);
				// console.log(oaa)
				// if (!oaa) {
				// 	this.arr.push(item);
				// 	console.log(this.arr)
				// } else if (oaa) {
				// 	let plice = this.arr.findIndex(res => {
				// 		return res == item;
				// 	});
				// 	if (plice != -1) {
				// 		console.log('不等于-1')
				// 		this.arr.splice(plice, 1);
				// 	} else if (plice == -1) {
				// 		console.log("等于-1")
				// 	}
				// 	console.log(plice)
				// }

			},

		}
	}
</script>

<style scoped>
	.btn {
		/* width: 376rpx; */
		height: 104rpx;
		color: white;
		margin-top: 84rpx;
		margin-bottom: 40rpx;
		background: #000000;
		font-size: 52rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: Inter-Regular, Inter;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
		border-radius: 8rpx;
		opacity: 1;
	}

	.acte_remark {
		font-size: 26rpx;
		color: #575757;
		margin-top: 14rpx;
	}

	.acte_name {
		font-size: 44rpx;
		font-family: Inter-Regular, Inter;
	}

	.acte_view {
		margin-left: 34rpx;
	}

	.acteimg {
		width: 226rpx;
		height: 154rpx;
		border-radius: 20rpx;
	}

	.tabitem {
		display: flex;
		align-items: center;
		border: 1rpx solid rgba(255, 255, 255, 0);
		margin-bottom: 14rpx;
		padding: 16rpx 20rpx 20rpx 24rpx;
	}


	.acc {

		border: 1px solid #F8B800;
		border-radius: 20rpx;
		background: #FFFFFF;
		color: #F8B800;
		font-weight: 800;
	}

	.title {
		padding-left: 26rpx;
		margin-bottom: 32rpx;
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
	}

	.center {
		padding-left: 36rpx;
		padding-right: 36rpx;
		margin-top: 54rpx;
	}
</style>
