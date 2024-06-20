<template>
	<view>
		<view class="colonn">
			<image src="https://ta.imjiayi.com/upload/upload/每日签到_slices/jinbi@2x.png" class="w-750 h-730"
				style="z-index: 10;" mode="aspectFill"></image>
			<view class="colonn center_center" style="margin-top: -730rpx;z-index: 100;">
				<view class="h-110"></view>
				<image class="w-200 h-56"
					src="https://ta.imjiayi.com/upload/upload/每日签到_slices/meiriqiandao@2x.png"></image>
				<view class="h-20"></view>
				<view class="roww w-750 center_center">
					<view class="w-38"></view>
					<image class="w-344 h-59"
						src="https://ta.imjiayi.com/upload/upload/每日签到_slices/jinbijini@2x.png"></image>
					<view class="allline"></view>
					<view class="colonn pore h-180">
						<image src="https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 19@2x.png"
							style="right: 0rpx;top: 0rpx;" class="w-158 h-90 poab"></image>
						<view class="h-20"></view>
						<image src="https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 18.png"
							style="right: 0rpx;bottom: 0rpx;" class="w-246 h-90 poab"></image>
					</view>
				</view>
				<view class="roww w-750">
					<view class="w-38"></view>
					<view class="roww pore w-260 h-53">
						<image class="w-260 h-53 poab" style="top: 0rpx;left: 0rpx;"
							src="https://ta.imjiayi.com/upload/upload/每日签到_slices/tianji 2@2x.png"></image>
						<view class="roww w-260 h-53 poab"
							style="top: 0rpx;left: 0rpx;font-size: 25rpx;line-height: 53rpx;z-index: 100;">
							<view class="w-50"></view>
							<view style="font-weight: bold;color: white;width: 200rpx;">当前金币：{{userInfo.base_gold}}</view>
						</view>
					</view>
					<view class="allline"></view>
				</view>
				<view class="h-25"></view>
				<view class="qiandoayouliview colonn">
					<view class="roww duiqi">
						<view class="qiandaoyoulitxt">签到有礼</view>
						<view class="w-20"></view>
						<view class="lianxuqiandao">连续签到</view>
						<view class="lianxuqiandao" style="color: #F8B800;">7天</view>
						<view class="lianxuqiandao">，可得</view>
						<view class="lianxuqiandao" style="color: #F8B800;">大礼包</view>
					</view>
					<view class="h-26"></view>
					<view class="roww">
						<view class="oneview pore " @click.stop="toQiandao(qdInfo[0])">
							
							<image v-if="qdInfo[0].is_bq==1" :src="bgWeek[2]"
								class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
							<image v-else-if="qdInfo[0].is_sign==1" :src="bgWeek[0]"
								class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								<image v-else-if="qdInfo[0].is_sign==0" :src="bgWeek[1]"
									class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								
								
							<view class="w-173 h-198 poab center_center colonn" style="top: 0rpx;left: 0rpx;">
								
								<view class="zhouyi" style="color: #494949;" v-if="qdInfo[0].is_bq==1">周一</view>
								<view class="zhouyi" v-else-if="qdInfo[0].is_sign==1">周一</view>
								<view class="zhouyi" style="color: #A36545;" v-else-if="qdInfo[0].is_sign==0">周一</view>
								
								<image class="w-160 h-106" v-if="qdInfo[0].is_bq==1"
									:src="bgWeek[7]">
									<image class="w-160 h-106" v-else
										:src="bgWeek[6]">
								</image>
								
								<view class="yiqiandaoBq" v-if="qdInfo[0].is_bq==1" >补签</view>
								<view class="yiqiandao" v-else-if="qdInfo[0].is_sign==1" >已签到</view>
								<view class="yiqiandao" style="color: #A36545;"  v-else-if="qdInfo[0].is_sign==0" >+{{qdInfo[0].gold}}金币</view>
							</view>
						</view>
						<view class="w-26"></view>
						<view class="oneview1 pore "  @click.stop="toQiandao(qdInfo[1])">
							<image v-if="qdInfo[1].is_bq==1" :src="bgWeek[5]"
								class="w-362 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
							<image v-else-if="qdInfo[1].is_sign==1" :src="bgWeek[3]"
								class="w-362 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								<image v-else-if="qdInfo[1].is_sign==0" :src="bgWeek[4]"
									class="w-362 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								
								
							<view class="w-362 h-198 poab center_center colonn" style="top: 0rpx;left: 0rpx;">
								
								<view class="zhouyi" style="color: #494949;" v-if="qdInfo[1].is_bq==1">周二</view>
								<view class="zhouyi" v-else-if="qdInfo[1].is_sign==1">周二</view>
								<view class="zhouyi" style="color: #A36545;" v-else-if="qdInfo[1].is_sign==0">周二</view>
								
								
								<image class="w-160 h-106" v-if="qdInfo[1].is_bq==1"
									:src="bgWeek[7]">
									<image class="w-160 h-106" v-else
										:src="bgWeek[6]">
								</image>
								
								<view class="yiqiandaoBq" v-if="qdInfo[1].is_bq==1" >补签</view>
								<view class="yiqiandao" v-else-if="qdInfo[1].is_sign==1" >已签到</view>
								<view class="yiqiandao" style="color: #A36545;"  v-else-if="qdInfo[1].is_sign==0" >+{{qdInfo[1].gold}}金币</view>
							</view>
						</view>
					</view>
					<view class="h-34"></view>
					<view class="roww"  @click.stop="toQiandao(qdInfo[2])">
						<view class="oneview pore ">
							<image v-if="qdInfo[2].is_bq==1" :src="bgWeek[2]"
								class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
							<image v-else-if="qdInfo[2].is_sign==1" :src="bgWeek[0]"
								class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								<image v-else-if="qdInfo[2].is_sign==0" :src="bgWeek[1]"
									class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
									
							<view class="w-173 h-198 poab center_center colonn" style="top: 0rpx;left: 0rpx;">
								
								<view class="zhouyi" style="color: #494949;" v-if="qdInfo[2].is_bq==1">周三</view>
								<view class="zhouyi" v-else-if="qdInfo[2].is_sign==1">周三</view>
								<view class="zhouyi" style="color: #A36545;" v-else-if="qdInfo[2].is_sign==0">周三</view>
								
								
								
								<image class="w-160 h-106" v-if="qdInfo[2].is_bq==1"
									:src="bgWeek[7]">
									<image class="w-160 h-106" v-else
										:src="bgWeek[6]">
								</image>
								
								
								<view class="yiqiandaoBq" v-if="qdInfo[2].is_bq==1" >补签</view>
								<view class="yiqiandao" v-else-if="qdInfo[2].is_sign==1" >已签到</view>
								<view class="yiqiandao" style="color: #A36545;"  v-else-if="qdInfo[2].is_sign==0" >+{{qdInfo[2].gold}}金币</view>
							</view>
						</view>
						<view class="w-26"></view>
						<view class="oneview pore "  @click.stop="toQiandao(qdInfo[3])">
							<image v-if="qdInfo[3].is_bq==1" :src="bgWeek[2]"
								class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
							<image v-else-if="qdInfo[3].is_sign==1" :src="bgWeek[0]"
								class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								<image v-else-if="qdInfo[3].is_sign==0" :src="bgWeek[1]"
									class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
									
							<view class="w-173 h-198 poab center_center colonn" style="top: 0rpx;left: 0rpx;">
								
								<view class="zhouyi" style="color: #494949;" v-if="qdInfo[3].is_bq==1">周四</view>
								<view class="zhouyi" v-else-if="qdInfo[3].is_sign==1">周四</view>
								<view class="zhouyi" style="color: #A36545;" v-else-if="qdInfo[3].is_sign==0">周四</view>
								
								
								
								
								<image class="w-160 h-106" v-if="qdInfo[3].is_bq==1"
									:src="bgWeek[7]">
									<image class="w-160 h-106" v-else
										:src="bgWeek[6]">
								</image>
								
								<view class="yiqiandaoBq" v-if="qdInfo[3].is_bq==1" >补签</view>
								<view class="yiqiandao" v-else-if="qdInfo[3].is_sign==1" >已签到</view>
								<view class="yiqiandao" style="color: #A36545;"  v-else-if="qdInfo[3].is_sign==0" >+{{qdInfo[3].gold}}金币</view>
							</view>
						</view>
						<view class="w-26"></view>
						<view class="oneview pore "  @click.stop="toQiandao(qdInfo[4])">
							<image v-if="qdInfo[4].is_bq==1" :src="bgWeek[2]"
								class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
							<image v-else-if="qdInfo[4].is_sign==1" :src="bgWeek[0]"
								class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								<image v-else-if="qdInfo[4].is_sign==0" :src="bgWeek[1]"
									class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								
								
								
							<view class="w-173 h-198 poab center_center colonn" style="top: 0rpx;left: 0rpx;">
								
								<view class="zhouyi" style="color: #494949;" v-if="qdInfo[4].is_bq==1">周五</view>
								<view class="zhouyi" v-else-if="qdInfo[4].is_sign==1">周五</view>
								<view class="zhouyi" style="color: #A36545;" v-else-if="qdInfo[4].is_sign==0">周五</view>
								
								
								
								
								<image class="w-160 h-106" v-if="qdInfo[4].is_bq==1"
									:src="bgWeek[7]">
									<image class="w-160 h-106" v-else
										:src="bgWeek[6]">
								</image>
								
								<view class="yiqiandaoBq" v-if="qdInfo[4].is_bq==1" >补签</view>
								<view class="yiqiandao" v-else-if="qdInfo[4].is_sign==1" >已签到</view>
								<view class="yiqiandao" style="color: #A36545;"  v-else-if="qdInfo[4].is_sign==0" >+{{qdInfo[4].gold}}金币</view>
							</view>
						</view>
					</view>
					<view class="h-34"></view>
					<view class="roww">
						<view class="oneview pore "  @click.stop="toQiandao(qdInfo[5])">
							<image v-if="qdInfo[5].is_bq==1" :src="bgWeek[2]"
								class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
							<image v-else-if="qdInfo[5].is_sign==1" :src="bgWeek[0]"
								class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								<image v-else-if="qdInfo[5].is_sign==0" :src="bgWeek[1]"
									class="w-173 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								
								
								
							<view class="w-173 h-198 poab center_center colonn" style="top: 0rpx;left: 0rpx;">
								<view class="zhouyi" style="color: #494949;" v-if="qdInfo[5].is_bq==1">周六</view>
								<view class="zhouyi" v-else-if="qdInfo[5].is_sign==1">周六</view>
								<view class="zhouyi" style="color: #A36545;" v-else-if="qdInfo[5].is_sign==0">周六</view>
								
								
								
								<image class="w-160 h-106" v-if="qdInfo[5].is_bq==1"
									:src="bgWeek[7]">
									<image class="w-160 h-106" v-else
										:src="bgWeek[6]">
								</image>
								
								<view class="yiqiandaoBq" v-if="qdInfo[5].is_bq==1" >补签</view>
								<view class="yiqiandao" v-else-if="qdInfo[5].is_sign==1" >已签到</view>
								<view class="yiqiandao" style="color: #A36545;"  v-else-if="qdInfo[5].is_sign==0" >+{{qdInfo[5].gold}}金币</view>
							</view>
						</view>
						<view class="w-26"></view>
						<view class="oneview1 pore "  @click.stop="toQiandao(qdInfo[6])">
							
							
							<image v-if="qdInfo[6].is_bq==1" :src="bgWeek[5]"
								class="w-362 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
							<image v-else-if="qdInfo[6].is_sign==1" :src="bgWeek[3]"
								class="w-362 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								<image v-else-if="qdInfo[6].is_sign==0" :src="bgWeek[4]"
									class="w-362 h-198 poab" style="top: 0rpx;left: 0rpx;"></image>
								
								
								
							<view class="w-362 h-198 poab center_center colonn" style="top: 0rpx;left: 0rpx;">
								<view class="zhouyi" style="color: #494949;" v-if="qdInfo[6].is_bq==1">周天</view>
								<view class="zhouyi" v-else-if="qdInfo[6].is_sign==1">周天</view>
								<view class="zhouyi" style="color: #A36545;" v-else-if="qdInfo[6].is_sign==0">周天</view>
								
								
								
								
								<image class="w-160 h-106" v-if="qdInfo[6].is_bq==1"
									:src="bgWeek[7]">
									<image class="w-160 h-106" v-else
										:src="bgWeek[6]">
								</image>
								
								<view class="yiqiandaoBq" v-if="qdInfo[6].is_bq==1" >补签</view>
								<view class="yiqiandao" v-else-if="qdInfo[6].is_sign==1" >已签到</view>
								<view class="yiqiandao" style="color: #A36545;"  v-else-if="qdInfo[6].is_sign==0" >+{{qdInfo[6].gold}}金币</view>
							</view>
						</view>
					</view>
				</view>

				<image src="https://ta.imjiayi.com/upload/upload/每日签到_slices/5742@2x.png"
					class="w-676 h-100 m-top-24 m-bottom-24 "
					@click.stop="tovip"
					></image>
				<view class="jinbijiangliview colonn">
					<view class="jinbijianglitxt">金币奖励</view>
					<view class="roww" style="padding-bottom: 30rpx;margin-top:30rpx;"
					v-for="(item,index) in listFuli"
					>
						<image class="w-72 h-72 m-right-15"
							:src="item.icon"></image>
						<view class="colonn">
							<view class="roww duiqi">
								<view class="meiriqiandoa">{{item.title}}</view>
								<view class="w-20"></view>
								<image src="https://ta.imjiayi.com/upload/upload/每日签到_slices/35876.png"
									class="w-32 h-32"></image>
								<view class="w-5"></view>
								<view class="hsuangbeijinbi">{{item.money}}</view>
							</view>
							<view  class="jieshi">
								{{item.jieshi}}
							</view>
						</view>
					</view>
				</view>
				<view class="h-70"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listFuli:[
					{
						'icon':'https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 15.png',
						'title':'每日签到',
						'money':'双倍金币',
						'jieshi':'签到获得的金币可在商城内兑换道具'
					},
					{
						'icon':'https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 16.png',
						'title':'发布活动 ',
						'money':'+50',
						'jieshi':'发布一场活动，活动顺利结束完成评价后 可获得50金币，会员用户双倍'
					},
					{
						'icon':'https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 17.png',
						'title':'参加活动',
						'money':'+30',
						'jieshi':'参加一场活动，活动顺利结束完成评价后 可获得30金币，会员用户双倍'
					}
				],
				
				bgWeek:[
					// 黑，黃 ，灰
					'https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 20@2x.png',
					'https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 22@2x.png',
					'https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 23@2x.png',
					
					// 黑，黃 ，灰
					'https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 25@2x.png',
					'https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 21@2x.png',
					'https://ta.imjiayi.com/upload/upload/每日签到_slices/Component 24@2x.png',
					
					
					'https://ta.imjiayi.com/upload/upload/%E6%AF%8F%E6%97%A5%E7%AD%BE%E5%88%B0_slices/35879@2x.png',
					'https://ta.imjiayi.com/upload/upload/%E6%AF%8F%E6%97%A5%E7%AD%BE%E5%88%B0_slices/520 (1)@2x.png'
					
				],
				
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				qdInfo:[],
				userInfo:{}
			}
		},
		onLoad(){
			this.userInfo=uni.getStorageSync("userInfo")
			this.getQiandao();
		},
		methods: {
			// 点击签到
			toQiandao(info){
				
				if(info.is_sign==1){
					return false;
				}
				
				// 创建一个当前日期对象
				var today = new Date();
				// 将时间部分设为零点
				today.setHours(0, 0, 0, 0);
				
				// 获取今天零点的时间戳（单位：毫秒）
				var timestamp = today.getTime()/1000;
				if(timestamp<info.time){
					return false;
				}
				
				
				var data={
						'gold':info.gold,
						'time':info.time,
						'type':info.is_bq==1?2:1,
						city:uni.getStorageSync("citySel"),
					}
				uni.request({
					url: this.baseurl + '/api/userSign/userSignDo',
					method: 'POST',
					data:data,
					header: {
						xcx:1,
						token: this.token
					},
					success: res => {
						if(res.data.code==1){
							if(data.type==1){
								uni.showToast({
									title:"签到成功",
									icon:"none"
								})
							}else if(data.type==2){
								uni.showToast({
									title:"补签成功",
									icon:"none"
								})
							}
							this.getQiandao()
						}else if(res.data.code==0){
							uni.showToast({
								title:res.data.info,
								icon:"none"
							})
						} else{
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
			// 获取签到数据列表
                getQiandao(){
					uni.request({
						url: this.baseurl + '/api/userSign/getUserProp',
						method: 'POST',
						data:{
							city:uni.getStorageSync("citySel"),
						},
						header: {
							xcx:1,
							token: this.token
						},
						success: res => {
							if(res.data.code==1){
								this.qdInfo=res.data.data;
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
				tovip(){
					uni.navigateTo({
						url:"/pages_wode/vip/vip"
					})
				},
		}
	}
</script>

<style>
	@import url(qiandao.css);
</style>