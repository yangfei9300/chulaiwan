<template>
	<view>
		<image src="https://ta.imjiayi.com/upload/upload/支付会员_slices/APP商家入驻 8@2x.png" mode="widthFix"
			class="w-750"></image>
		<view class="colonn center_center">
			<view class="h-42"></view>
			<view class="addshoptxt">填写店铺信息</view>
			<view class="h-30"></view>
			<view class="ipnytbigviwe colonn center_center">
				<view class="roww center_center">
					<view class="leftitle">店铺名称：</view>
					<view class="asad roww center_center">
						<view class="w-20"></view>
						<input class="plas" v-model="form.shop_name" placeholder-class="plas" placeholder="建议填写店名全称" />
						<view class="w-20"></view>
						<view class="allline"></view>
					</view>
				</view>

				<view class="h-16"></view>
				<view class="roww center_center">
					<view class="leftitle">所在行业：</view>
					<picker range-key="name" :range="type" @change="typeChange">
						<view class="asad roww center_center">
							<view class="w-20"></view>
							<view class="fs-30" v-if="form.industry==''"> 请选择所在行业</view>
							<view class="fs-30" v-else>{{form.industry}} </view>
							<view class="allline"></view>
							<image class="w-28 h-28"  src="https://ta.imjiayi.com/upload/upload/右箭头.png"></image>
							<view class="w-20"></view>
						</view>
					</picker>
					
				</view>
				<view class="h-16"></view>
				<view class="roww center_center">
					<view class="leftitle">联系方式：</view>
					<view class="asad roww center_center">
						<view class="w-20"></view>
						<input class="plas"  v-model="form.phone"  placeholder-class="plas" placeholder="请填写电话" />
						<view class="w-20"></view>
						<view class="allline"></view>
					</view>
				</view>
			</view>
			<view class="h-40"></view>
			<view class="tijiaoss" @click.stop="toSubmit">提交</view>
			<!-- <view class="roww center_center m-top-25" style="color: aliceblue;">
				<image src="https://ta.imjiayi.com/upload/upload/支付会员_slices/Component 78.png"
					class="w-32 h-32"></image>
				<view class="w-20"></view>
				<view class="fs-30">商家入住电子协议</view>
			</view> -->
			<view class="h-25"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				form:{
					'shop_name':'',
					'industry':'',
					'phone':'',
					city:uni.getStorageSync("citySel"),
				},
				type:""
			}
		},
		onLoad(){
			setTimeout(res=>{
				this.getShopa();
			},500)
		},
		methods: {
			typeChange(res){
				this.form.industry=this.type[parseInt(res.detail.value)].name
			},
			// /api/shop/shopEnter  商家入住接口
			toSubmit(){
				if(!this.isSUbmit()){
					return false;
				}
				uni.request({
					url: this.baseurl + '/api/shop/shopEnter',
					method: 'POST',
					data: this.form,
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						if(res.data.code==1){
							uni.showToast({
								title:"提交成功，请等待审核",
								icon:"none"
							})
							setTimeout(res=>{
								uni.switchTab({
									url:"/pages/my/my"
								})
							},1000)
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:"none"
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			isSUbmit(){
				if(this.form.shop_name==""){
					uni.showToast({
						title:"请输入店铺名称",
						icon:"none"
					})
					
					return false;
				}
				if(this.form.industry==""){
					uni.showToast({
						title:"请选择行业",
						icon:"none"
					})
					return false;
				}
				if(this.form.phone==""){
					uni.showToast({
						title:"请选择电话",
						icon:"none"
					})
					return false;
				}
				return true;
			},
			getShopa(){
				uni.request({
					url: this.baseurl + '/api/shop/shopIndustry',
					method: 'POST',
					data: {
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						console.log("地噶啥",res);
						this.type=res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	@import url(shopAdd.css);
</style>