<template>
	<view class="content">
		<!-- 未实名认证 -->
		<view class="" v-show="show1">
		<view class="va">
			<input class="aaas" style="border-bottom: 1rpx solid #F2F2F2;" placeholder-class="aaa" type="text" value=""
				placeholder="姓名"  v-model="username"/>
			<input class="aaas" placeholder-class="aaa" type="text" maxlength="18" value="" placeholder="身份证号" v-model="card_no" />
		</view>
		<button class="btns" @click="userAuth">确定</button>			
		</view>
		<!-- 已实名认证 -->
		<view class="" v-show="show2">
			<view class="va">
				<input disabled="true" class="aaas1" style="border-bottom: 1rpx solid #F2F2F2;" placeholder-class="aaa" type="text" value=""
					placeholder="姓名"  v-model="yusername"/>
				<input disabled="true" class="aaas1" placeholder-class="aaa" type="text" maxlength="18" value="" placeholder="身份证号" v-model="ycard_no" />
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
			baseurl:"",
			token:'',
			show1:false,
			show2:false,
			card_no:null,
			username:null,
			ycard_no:null,
			yusername:null,
			}
		},
		onLoad() {
			this.token=uni.getStorageSync('token');
			console.log(this.token);
			this.baseurl=getApp().globalData.baseurl;
			console.log(this.baseurl);
			this.getAuth();
		},
		methods: {
			getAuth(){
				uni.request({
					url: this.baseurl+'/api/user/getUserAuth',
					method: 'POST',
					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					header:{
						token:this.token
					},
					success: res => {
						console.log(res);
						let nickname=res.data.data
						if(nickname.username=="" && nickname.card_no==null){
							this.show1=true;
							this.show2=false;
						}else {
							this.show1=false;
							this.show2=true;
							this.ycard_no=nickname.card_no;
							this.yusername=nickname.username;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
		userAuth(){
			console.log(this.username);
			console.log(this.card_no.length);
			if(this.username!=='',this.card_no.length==18){
				uni.request({
					url: this.baseurl+'/api/user/userAuth',
					method: 'POST',
					data: {username:this.username,card_no:this.card_no,
					
					city:uni.getStorageSync("citySel"),
					},
					header:{
						token:this.token,
					},
					success: res => {
						console.log(res);
					},
					fail: () => {},
					complete: () => {}
				});
			}else{
				console.log('cuowu ');
			}
		
		}
		}
	}
</script>

<style scoped>
	.btns{
	    background-color: #FFC803;
	    width: 60%;
	    color: white;
	    /* font-size: 31rpx; */
	    margin-top: 50%;
	}
	.va{
		border-radius:20rpx;
		background: white;
		margin: 50rpx 20rpx;
	}
	/deep/.aaa {
		color: #000000;
		font-size: 36rpx;
		align-items: center;
		font-weight: 600;
	}
	.aaas1{
		font-weight: 600;
		padding-left: 20rpx;
		height: 120rpx;
		font-size: 36rpx;
		color: #9999;
		align-items: center;
	}
	.aaas {
		font-weight: 600;
		padding-left: 20rpx;
		height: 120rpx;
		font-size: 36rpx;
		align-items: center;
	}

	.content {
		background: #FAFAFA;
		height: 100vh;
	}
</style>
