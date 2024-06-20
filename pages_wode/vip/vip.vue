<template>
	<view>
		<view class=" colonn pore" :class="{
			'topview1':vipType==1,
			'topview':vipType==0,
		}">
			<view class="w-750  roww rowsb center_center color6_r" style="position: absolute;" :style="{
				height:jnSize.height+'px',
				top:jnSize.top+'px'
			}">
				<image @click.stop="backBtn" class="w-50 h-50 m-left-24"
					src="https://ta.imjiayi.com/upload/upload/VIP_slices/左箭头.png"></image>


				<view class="roww w-300 rowsa">
					<view class="colonn center_center"
					@click.stop="vipQiehuan(0)"
					>
						<view :style="{
							color:vipType==0?'#FFC895':'white'
						}">VIP</view>
						<view :class="{
							'vipxian':vipType==0,
							'vipxian1':vipType==1,
						}"></view>
					</view>
					<view class="colonn center_center"
					@click.stop="vipQiehuan(1)">
						<view :style="{
							color:vipType==1?'#FFC895':'white'
						}">黑钻VIP</view>
						<view :class="{
							'vipxian':vipType==1,
							'vipxian1':vipType==0,
						}"></view>
					</view>
				</view>
				<image class="w-50 h-50 m-right-24 yincang1"
					src="https://ta.imjiayi.com/upload/upload/VIP_slices/左箭头.png"></image>
			</view>
		</view>

		<swiper style="z-index: 1000;background-color: white;margin-top: -90px;" :current="vipType"
		:style="{
			height:(shebeiInfo.screenHeight-90)+'px'
		}"
		@change="vipCHange"
		>
			<swiper-item style="width: 750rpx;">
				<scroll-view scroll-y style="width: 750rpx;background-color: rgba(0, 0, 0, 0);"
				:style="{
					height:(shebeiInfo.screenHeight-90)+'px'
				}"
				>
					<view class="colonn ">
						<view class="roww p-left-30 p-right-30">
							<image :src="userInfo.headimg" class="headerimg w-80 h-80 reaus5_r"></image>
							<view class="w-20"></view>
							<view class="colonn">
								<view class="username txtShowLength">{{userInfo.nickname}}</view>
								<view class="h-10"></view>
								<view class="gongxichenehuiy" v-if="(!userInfo.is_vip||userInfo.is_vip==0)">
									<block v-if="vipType==0">暂未开通VIP特权</block>
									<block v-if="vipType==1">暂未开通黑钻特权</block>  
								</view>
								<view class="gongxichenehuiy" v-if="userInfo.is_vip==1&&vipType==0">恭喜您，您已经是我们的尊享会员</view>
								<!-- <view class="gongxichenehuiy"  v-else>暂未开通VIP特权</view> -->
								<view class="gongxichenehuiy" v-if="userInfo.is_vip==2&&vipType==0">恭喜您，您已经是我们的黑钻会员</view>
								<!-- <view class="gongxichenehuiy"  v-else>暂未开通黑钻特权</view> -->
							</view>
						</view>
						<view class="h-20"></view>

						<view class="roww pore w-690 h-269 m-left-30">
							<image class="w-690 h-269   poab" v-if="vipType==0" style="top:0rpx;left:0rpx;"
								src="https://ta.imjiayi.com/upload/upload/VIP_slices/05@2x.png"></image>
							<image class="w-690 h-269   poab" v-if="vipType==1" style="top:0rpx;left:0rpx;"
								src="https://ta.imjiayi.com/upload/upload/黑钻VIP_slices/02 220202021@2x.png">
							</image>

							<view class="poab fs-28" v-if="vipType==0"
								style="top: 40rpx;right: 30rpx;z-index: 1000;color: #7B4800;">
								{{userInfo.vip_str}}
							</view>
							<view class="poab fs-28" v-else-if="vipType==1"
								style="top: 40rpx;right: 30rpx;z-index: 1000;color: #7B4800;">
								{{userInfo.svip_str}}
							</view>

						</view>

						<view class="asddfdf colonn "
							style="background-color: white;border-radius:42rpx ;margin-top: -150rpx;z-index: 1000;">
							<!-- <view class="zunxiangjianbian roww">
								<view @click.stop="vipTypeCLick(0)" :class="{
								'heizuanVIPno':vipType==1,
								'heizuanVIP':vipType==0,
							}">尊享VIP</view>
								<view @click.stop="vipTypeCLick(1)" :class="{
								'heizuanVIPno':vipType==0,
								'heizuanVIP':vipType==1,
							}">黑钻VIP</view>
							</view> -->
							<view class="h-20"></view>
							<view class="roww rows1 p-left-30 p-right-30">
								<view class="jinqe" v-for="(item,index) in chongzhiList" :style="{
								'background':selindex==index?'linear-gradient(218deg, #FFEFDB 0%, #FADEB6 100%)':'linear-gradient(218deg, #F6F6F6 0%, #F6F6F6 100%)',
							}" @click.stop="selindexClick(index)">
									<view class="colonn center_center pore w-214 h-236">
										<view class="yuekaa">{{item.name}}</view>
										<view class="h-12"></view>
										<view class="roww duiqi " style="color: #7B4800;font-weight: bold">
											<view class="fs-25">￥</view>
											<view class="fs-40">{{item.money}}</view>
										</view>
										<view class="h-20"></view>
										<image class="w-170 h-36"
											src="https://ta.imjiayi.com/upload/upload/VIP_slices/13 6@2x.png">
										</image>
										<view class="lijians">
											立减{{item.money_}}元
										</view>
									</view>
								</view>
							</view>
							<view class="h-48"></view>
							<view class="xufeivip" @click.stop="payAlertShowClick" v-if="vipType==0">
								<block v-if="!userInfo.vip_code||userInfo.vip_code==0">开通</block>
								<block v-if="userInfo.vip_code>0">续费</block>

								VIP特权
							</view>
							<view class="xufeiheisuan" @click.stop="payAlertShowClick" v-if="vipType==1">

								<block v-if="!userInfo.vip_code||userInfo.vip_code==0">开通</block>
								<block v-if="userInfo.vip_code>0">续费</block>

								VIP特权
							</view>


						</view>
						<view class="h-20"></view>
						<view class="fenjiexain"></view>


						



						<view class="colonn p-left-28" style="background-color: white;" v-if="vipType==0">
							<view class="h-34"></view>
							<view class="zhuanshutequantxt">我的专属特权</view>
							<view class="h-28"></view>
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/VIP_slices/06 2@2x.png"
									class="w-76 h-76"></image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">活跃度/金币</view>
									<view class="h-5"></view>
									<view class="tqjieshi">发布/参加活动可获得<span style="color: #7B4800;">双倍金币及活跃度</span>
									</view>
								</view>
							</view>
							<view class="h-50"></view>
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/VIP_slices/946735792.png"
									class="w-76 h-76"></image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">发布活动</view>
									<view class="h-5"></view>
									<view class="tqjieshi">会员用户<span style="color: #7B4800;">发起活动次数不限</span>，非会员每月仅可发布四场
									</view>
								</view>
								<view class="h-50"></view>
							</view>
							<view class="h-50"></view>
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/VIP_slices/946735793.png"
									class="w-76 h-76"></image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">会员身份标识</view>
									<view class="h-5"></view>
									<view class="tqjieshi">可获得金色昵称<span
											style="color: #7B4800;">与VIP标识，</span>会员活动在列表内<text
											style="color: #7B4800;">高亮显示</text></view>
								</view>
								<view class="h-50"></view>
							</view>
							<view class="h-50"></view>
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/VIP_slices/946735794.png"
									class="w-76 h-76"></image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">自定义背景</view>
									<view class="h-5"></view>
									<view class="tqjieshi">设置<span style="color: #7B4800;">自定义背景图，</span>让你的主页更高级</view>
								</view>
								<view class="h-50"></view>
							</view>
							<view class="h-50"></view>
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/VIP_slices/946735795.png"
									class="w-76 h-76"></image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">聊天室</view>
									<view class="h-5"></view>
									<view class="tqjieshi">线上畅聊，会员用户 <span style="color: #7B4800;">限次</span> 无say
										hello（非会 员仅限三句）
									</view>
								</view>
								<view class="h-50"></view>
							</view>
							<view class="h-50"></view>
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/VIP_slices/946735796.png"
									class="w-76 h-76"></image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">补签卡</view>
									<view class="h-5"></view>
									<view class="tqjieshi">会员用户享每月 <span style="color: #7B4800;">3次</span> 免费补签特权</view>
								</view>
								<view class="h-50"></view>
							</view>

							<view class="h-50"></view>
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/VIP_slices/946735797.png"
									class="w-76 h-76"></image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">商家优惠</view>
									<view class="h-5"></view>
									<view class="tqjieshi">发布活动时选用平台商家可享<span style="color: #7B4800;">专属折扣</span></view>
								</view>
								<view class="h-50"></view>
							</view>


						</view>
						<view class="h-130"></view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item style="width: 750rpx;background-color: rgba(0, 0, 0, 0);">
				<scroll-view scroll-y style="width: 750rpx;"
				:style="{ 
					height:(shebeiInfo.screenHeight-90)+'px'
				}"
				>
					<view class="colonn ">
						<view class="roww p-left-30 p-right-30">
							<image :src="userInfo.headimg" class="headerimg w-80 h-80 reaus5_r"></image>
							<view class="w-20"></view>
							<view class="colonn">
								<view class="username txtShowLength">{{userInfo.nickname}}</view>
								<view class="h-10"></view>
								<view class="gongxichenehuiy"  v-if="!userInfo.is_vip||userInfo.is_vip==0">暂未开通VIP特权
								</view>
								<view class="gongxichenehuiy" v-if="userInfo.is_vip==1">恭喜您，您已经是我们的尊享会员</view>
								<view class="gongxichenehuiy" v-if="userInfo.is_vip==2">恭喜您，您已经是我们的黑钻会员</view>
							</view>
						</view>
						<view class="h-20"></view>
			
						<view class="roww pore w-690 h-269 m-left-30">
							<image class="w-690 h-269   poab" v-if="vipType==0" style="top:0rpx;left:0rpx;"
								src="https://ta.imjiayi.com/upload/upload/VIP_slices/05@2x.png"></image>
							<image class="w-690 h-269   poab" v-if="vipType==1" style="top:0rpx;left:0rpx;"
								src="https://ta.imjiayi.com/upload/upload/黑钻VIP_slices/02 220202021@2x.png">
							</image>
			
							<view class="poab fs-28" v-if="vipType==0"
								style="top: 40rpx;right: 30rpx;z-index: 1000;color: #7B4800;">
								{{userInfo.vip_str}}
							</view>
							<view class="poab fs-28" v-else-if="vipType==1"
								style="top: 40rpx;right: 30rpx;z-index: 1000;color: #7B4800;">
								{{userInfo.svip_str}}
							</view>
			
						</view>
			
						<view class="asddfdf colonn "
							style="background-color: white;border-radius:42rpx ;margin-top: -150rpx;z-index: 1000;">
							<view class="zunxiangjianbian roww">
								<view @click.stop="vipTypeCLick(0)" :class="{
								'heizuanVIPno':vipType==1,
								'heizuanVIP':vipType==0,
							}">尊享VIP</view>
								<view @click.stop="vipTypeCLick(1)" :class="{
								'heizuanVIPno':vipType==0,
								'heizuanVIP':vipType==1,
							}">黑钻VIP</view>
							</view>
							<view class="h-20"></view>
							<view class="roww rows1 p-left-30 p-right-30">
								<view class="jinqe" v-for="(item,index) in chongzhiList" :style="{
								'background':selindex==index?'linear-gradient(218deg, #FFEFDB 0%, #FADEB6 100%)':'linear-gradient(218deg, #F6F6F6 0%, #F6F6F6 100%)',
							}" @click.stop="selindexClick(index)">
									<view class="colonn center_center pore w-214 h-236">
										<view class="yuekaa">{{item.name}}</view>
										<view class="h-12"></view>
										<view class="roww duiqi " style="color: #7B4800;font-weight: bold">
											<view class="fs-25">￥</view>
											<view class="fs-40">{{item.money}}</view>
										</view>
										<view class="h-20"></view>
										<image class="w-170 h-36"
											src="https://ta.imjiayi.com/upload/upload/VIP_slices/13 6@2x.png">
										</image>
										<view class="lijians">
											立减{{item.money_}}元
										</view>
									</view>
								</view>
							</view>
							<view class="h-48"></view>
							<view class="xufeivip" @click.stop="payAlertShowClick" v-if="vipType==0">
								<block v-if="!userInfo.vip_code||userInfo.vip_code==0">开通</block>
								<block v-if="userInfo.vip_code>0">续费</block>
								<block v-if="vipType==0">VIP特权</block>
							</view>
							<view class="xufeiheisuan" @click.stop="payAlertShowClick" v-if="vipType==1">
			
								<block v-if="!userInfo.vip_code||userInfo.vip_code==0">开通</block>
								<block v-if="userInfo.vip_code>0">续费</block>
			
								<block v-if="vipType==1">黑钻特权</block>
							</view>
			
			
						</view>
						<view class="h-20"></view>
						<view class="fenjiexain"></view>
			
			
						<view class="colonn p-left-28" style="background-color: white;" v-if="vipType==1">
							<view class="h-34"></view>
							<view class="zhuanshutequantxt">我的专属特权</view>
							<view class="h-28"></view>
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/黑钻VIP_slices/17.png"
									class="w-76 h-76">
								</image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">即刻响应</view>
									<view class="h-5"></view>
									<view class="tqjieshi">平台保障，独特的算法体系，活动发布后， <span style="color: #7B4800;">精准
											匹配高质量玩家</span>，想你所想，懂你所需，<span style="color: #7B4800;">组局成 功率100%</span>
									</view>
								</view>
							</view>
							<view class="h-50"></view>
			
			
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/黑钻VIP_slices/15.png"
									class="w-76 h-76">
								</image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">精准推送</view>
									<view class="h-5"></view>
									<view class="tqjieshi">平台根据您注册时选择喜欢的分类，将您的活动 精准推送至相同爱好玩家，<span
											style="color: #7B4800;">提高活动曝光量</span></view>
								</view>
							</view>
							<view class="h-50"></view>
			
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/黑钻VIP_slices/16.png"
									class="w-76 h-76">
								</image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">活动展示</view>
									<view class="h-5"></view>
									<view class="tqjieshi">活动 <span style="color: #7B4800;">全平台置顶</span> ，在活动列表及首页活动推荐优
										<span style="color: #7B4800;">先高亮展示</span> ，保证活动权重</view>
								</view>
							</view>
							<view class="h-50"></view>
			
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/黑钻VIP_slices/14.png"
									class="w-76 h-76">
								</image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">基础特权</view>
									<view class="h-5"></view>
									<view class="tqjieshi"><span style="color: #7B4800;">享受普通vip的所有权益</span></view>
								</view>
							</view>
							<view class="h-50"></view>
			
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/黑钻VIP_slices/18.png"
									class="w-76 h-76">
								</image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">身份标识</view>
									<view class="h-5"></view>
									<view class="tqjieshi">可获得 <span style="color: #7B4800;">黑金昵称与黑钻vip专属标识</span>，彰显尊贵身
										份</view>
								</view>
							</view>
							<view class="h-50"></view>
			
							<view class="roww">
								<image src="https://ta.imjiayi.com/upload/upload/黑钻VIP_slices/19.png"
									class="w-76 h-76">
								</image>
								<view class="w-18"></view>
								<view class="colonn">
									<view class="tqtitle">专属福利</view>
									<view class="h-5"></view>
									<view class="tqjieshi">平台不定期组织黑钻vip <span style="color: #7B4800;">专属活动和福利</span>
									</view>
								</view>
							</view>
			
						</view>
						<view class="h-130"></view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>




		<view class="huuibeijing" catchtouchmove="preventTouchMove" v-if="payAlertShow">
			<view class="zhifupayVie colonn center_center">

				<view class="h-48"></view>
				<view class="roww rowsb w-660">
					<image src="https://ta.imjiayi.com/upload/upload/支付会员_slices/叉号 (1) 1@2x.png"
						class="w-36 h-36 yincang1"></image>

					<view>续费VIP特权</view>
					<image src="https://ta.imjiayi.com/upload/upload/支付会员_slices/叉号 (1) 1@2x.png"
						class="w-36 h-36" @click.stop="payAlertShowClick"></image>
				</view>
				<view class="h-46"></view>
				<view class="zhifuyue roww w-660">
					支付余额
				</view>
				<view class="h-15"></view>
				<view class="jineee w-660">
					￥{{chongzhiList[selindex].money}}
				</view>
				<view class="h-30"></view>
				<view class="huixas"></view>
				<view class="h-52"></view>
				<view class="zhifufangsi w-660">支付方式</view>
				<view class="h-46"></view>
				<view class="roww w-660 center_center">
					<image class="w-60 h-60" src="https://ta.imjiayi.com/upload/upload/支付会员_slices/微信 1.png">
					</image>
					<view class="w-20"></view>
					<view>微信</view>
					<view class="allline"></view>
					<image class="w-40 h-40"
						src="https://ta.imjiayi.com/upload/upload/支付会员_slices/Component 78.png"></image>
				</view>
				<view class="fenjiexian"></view>
				<!-- <view class="roww w-660 center_center">
					<image class="w-60 h-60"
						src="https://ta.imjiayi.com/upload/upload/支付会员_slices/支付宝 1@2x.png"></image>
					<view class="w-20"></view>
					<view>支付宝</view>
					<view class="allline"></view>
					<image class="w-40 h-40"
						src="https://ta.imjiayi.com/upload/upload/支付会员_slices/Component 78.png"></image>
				</view> -->

				<view class="zhifubt" @click.stop="getPayData">支付</view>

			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,

				selindex: 0, //选中的
				vipType: 0,
				payAlertShow: false,

				chongzhiList: [], //充值列表
				userInfo: {},
				shebeiInfo: {},
				jnSize: {},
			}
		},
		onLoad() {
			this.getNiaonang()
			this.getTaocanList();
			var token = uni.getStorageSync("token");
			if (!token) {
				uni.navigateTo({
					url: "/pages/Login/Login"
				})
			}
			this.userInfo = uni.getStorageSync("userInfo")
		},

		methods: {
			vipQiehuan(index){
				this.vipType=index;
				this.getTaocanList();
			},
			vipCHange(res){
				this.vipType=parseInt(res.detail.current);
				this.getTaocanList();
			},
			
			toWxpay(info) {
				wx.requestPayment({
					timeStamp: info.timeStamp,
					nonceStr: info.nonceStr,
					package: info.package,
					signType: 'MD5',
					paySign: info.paySign,
					success: (res) => {
						if (res.errMsg.indexOf("ok") >= 0) {
							uni.showToast({
								title: "充值成功",
								icon: "nonw"
							})
							setTimeout(res => {
								uni.reLaunch({
									url: "/pages/my/my"
								})
							}, 1000)
						} else {
							uni.showToast({
								title: "充值失败",
								icon: "nonw"
							})
						}
					},
					fail: (res) => {

					}
				})
			},
			// 获取支付参数
			getPayData() {

				var userInfo = uni.getStorageSync("userInfo");
				if (userInfo.phone == "") {
					uni.showToast({
						title: "请完善手机号",
						icon: "nonw"
					})
					return false;
				}

				uni.request({
					url: this.baseurl + '/api/vip/vipBuy',
					method: 'POST',
					data: {
						'pay_type': "3",
						'code': this.chongzhiList[this.selindex].code,
						'phone': userInfo.phone,
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						this.toWxpay(res.data.data)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 选套惨
			selindexClick(index) {
				this.selindex = index;
			},

			backBtn() {
				uni.switchTab({
					url: "/pages/my/my"
				})
			}, // 获取套餐列表
			getTaocanList() {
				uni.request({
					url: this.baseurl + '/api/vip/vipData',
					method: 'POST',
					data: {
						'level': this.vipType == 0 ? '1' : '2',
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						console.log("vip充值列表", res)
						this.chongzhiList = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			//支付框支付
			payAlertShowClick() {
				this.payAlertShow = !this.payAlertShow;
			},
			preventTouchMove() {},
			vipTypeCLick(index) {
				this.vipType = index;
				this.getTaocanList()
			},

			getNiaonang() {
				const res = wx.getMenuButtonBoundingClientRect()
				this.jnSize = res;
				console.log(res.width)
				console.log(res.height)
				console.log(res.top)
				console.log(res.right)
				console.log(res.bottom)
				console.log(res.left)
				wx.getSystemInfo({
					success: (res) => {
					this.shebeiInfo=res;  
					}
				});
			}
		}
	}
</script>

<style>
	@import url(vipS.css);
</style>