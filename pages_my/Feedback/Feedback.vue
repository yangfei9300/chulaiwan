<template>
	<view class="content">
		<view class="">意见反馈</view>
		<view class="">
			<u-textarea v-model="value1" height="140" placeholder="请输入您要反馈的内容" count maxlength="300"></u-textarea>
		</view>
		<view class="wz">上传图片</view>
		<view class="">
			<u-upload :fileList="fileList1" :previewFullImage="true" @afterRead="afterRead" @delete="deletePic" name="1"
				multiple :maxCount="9">
				<image src="https://cdn.uviewui.com/uview/demo/upload/positive.png" mode="widthFix"
					style="width: 250px;height: 150px;"></image>
			</u-upload>
		</view>
		<button class="btn" @click="tijiao">提交</button>
		<view class="zhezhao" v-show="shows"></view>
		<view v-show="shows">
		<view class="tanchuang" >
			<image src="../static/fankuitanchuang.png" mode=""></image>
			<view class="tanchuang1">您已提交成功!</view>
			<view class="tanchuang2">感谢您的反馈,</view>
			<view class="tanchuang3">我们将为您提供更好的服务~</view>
			<view class="tanchuang4">我知道了</view>
		</view>			
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: "",
				fileList1: [],
				shows:false,
				shows1:false,
			}
		},
		methods: {
			// 弹窗
			tijiao(){
				this.shows=true;
			},
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},

		}
	}
</script>

<style scoped lang="scss">
	.tanchuang4{
		width: 320rpx;
		    text-align: center;
		    height: 60rpx;
		    background: #FFC803;
		    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.0500);
		    border-radius: 50rpx;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    color: white;
		    margin: 25rpx 0;
	}
	.tanchuang3{
		color: #A7A7A7;
		font-size: 24rpx;
	}
	.tanchuang2{
		    margin-top: 30rpx;
		color: #A7A7A7;
		font-size: 24rpx;
	}
	.tanchuang1{
		font-size: 32rpx;
		    font-weight: 400;
	}
	.zhezhao{
	    width: 100vw;
	    height: 100vh;
	    background-color: #9999;
	    /* z-index: -1; */
	    position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	}
	.tanchuang{
		    background: white;
		    border-radius: 15rpx;
		    display: flex;
		    flex-direction: column;
		    align-items: center;
			    padding: 40rpx 0;
		    position: absolute;
		    top: 25%;
		    left: 15%;
		    right: 15%;
			>image{
				width: 200rpx;
				height: 200rpx;
			}
	}
	.wz{
		    margin: 20rpx 0;
	}
	.btn {
		background: #f8b800;
		color: white;
		width: 80%;
		margin-top: 100rpx;

	}

	.content {
		background: #F6F6F6;
		padding: 20rpx;
		height: 100vh;
	}

	.text {
		color: #9999;
	}
</style>
