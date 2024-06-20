<template>
	<view class="content">
		<!-- <view class="hd">
			<view class="hd_relavt">
				<view class="hdv2" v-show="v1"></view>
				<view class="hdv1" :class="{onhd:v1}" @click="hdclick">活动</view>
			</view>
			<view class="hd_relavt">
				<view class="hdv2" v-show="v2"></view>
				<view class="hdv1" :class="{onhd:v2}" @click="hd1click">商家</view>
			</view>

		</view> -->
		<!-- 活动 -->
		<view class="">
			<view class="search1" @click="Address()">
				<view class="search2">
					<image class="searchimg" src="../../static/serach.png" mode=""></image>
					<input class="" type="text" placeholder="请输入要搜索的活动" value="" v-model="searchs" />
				</view>
				<!-- @click="Address" -->
				<!-- <view class="search3">
					<image class="qhv3" src="../../static/qiehuan.png" mode="" @click="styleqh" v-if="show2">
					</image>
					<image class="qhv3" src="../../static/qiehuan.png" mode="" @click="styleqh1" v-else></image>
					<image class="qhv4" src="../../static/shaixuan.png" @click="guize=true" mode=""></image>
				</view> -->
			</view>
	<!-- 		<view class="qhv1">
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="0">
					<view class="scroll-view-item_H uni-bg-red" @click="scrollindex(0,1)" :class="{active:current===0}">
						最新</view>
					<view v-for="(item,index) in list11" :key="index" :class="{active:current===item.id}"
						@click="scrollindex(item.id,1)" id="demo1" class="scroll-view-item_H uni-bg-red">
						{{item.name}}
					</view>

				</scroll-view>
			</view> -->

			<!-- 列表 -->
			<view class="" v-show="hdong">
				<view class="" v-show="show2">
					<view class="achd" v-for="(item,index) in list111" :key="index" @click="ActiveDetail(item.act_no)">
						<image class="achd1" :src="item.cover" mode=""></image>
						<view class="achd2">
							<view class="achd3">
								{{item.title }}
							</view>
							<view class="achd4">地址 : {{item.add_name}}</view>
							<view class="achd5">
								<view class="achd6">
									<image class="achd7" src="../../static/index/naozhong.png" mode=""></image>
									<view class="achd8">{{item.date}}</view>
									<view class="achd8">{{item.week}}</view>
									<view class="achd8">{{item.time}}</view>
								</view>
								<view class="achd10">{{item.money}}</view>
							</view>
							<view class="achd11">
								<view class="achd12">
									<image v-for="(items,indexs) in item.group" :key="indexs" class="achd13"
										:src="items.headimg" mode="">
									</image>
								</view>
								<view class="achd131">{{item.p_num_str}}</view>
							</view>
							<image class="tag" v-if="item.tag=='去组队'" src="../static/zudui.png" mode=""></image>
							<image class="tag" v-if="item.tag=='已满员'" src="../static/manyuan.png" mode=""></image>
						</view>
					</view>
				</view>

				<view class="" v-show="show1">
					<view class="wall">
						<view class="left">
							<view class=" text-center" v-for="(item, index) in list111" :key="index" v-if="index%2==0">
								<view class="left_zview">

									<!-- <image class="tag" v-if="item.tag=='去组队'" src="../static/zudui.png" mode=""></image>
								<image class="tag" v-if="item.tag=='已满员'" src="../static/manyuan.png" mode=""></image> -->
									<image class="sj_left_img" :src="item.cover" mode=""></image>
									<view class="pop">
										<image style="width: 40rpx;height: 40rpx;" src="../../static/index/naozhong.png"
											mode=""></image>
										<view class="" style="display: flex;">
											<view class="">{{item.date}}</view>
											<view class="" style="display: flex;">
												<view class="">{{item.week}}</view>
												<view class="">{{item.time}}</view>
											</view>

										</view>
									</view>
									<view class="txttitle">
										<view class="" style="display: flex;">
											<view class="text_money" style="color: #f8b800;">{{item.money}}</view>
											<view class="txttitle1">{{item.title}}</view>
										</view>
										<view class="txttitle2">地址 : {{item.add_name+''+item.add_detail}}</view>
									</view>
									<view class=""
										style="align-items: center;display: flex; justify-content: space-between; margin: 0rpx 10rpx;">
										<view class="">
											<image v-for="(items,indexs) in item.group" :key="indexs"
												:class="{dos:indexs===0 }" class="achd13" :src="items.headimg" mode="">
											</image>
										</view>
										<view class="zudui">{{item.p_num_str}}</view>
									</view>
								</view>

							</view>
						</view>
						<view class="left">
							<view class=" text-center" v-for="(item, index) in list111" :key="index" v-if="index%2==1">
								<view class="left_zview">

									<!-- <image class="tag" v-if="item.tag=='去组队'" src="../static/zudui.png" mode=""></image>
								<image class="tag" v-if="item.tag=='已满员'" src="../static/manyuan.png" mode=""></image> -->
									<image class="wall_right_img" :src="item.cover" mode=""></image>
									<view class="pop">
										<image style="width: 40rpx;height: 40rpx;" src="../../static/index/naozhong.png"
											mode=""></image>
										<view class="" style="display: flex;">
											<view class="">{{item.date}}</view>
											<view class="" style="display: flex;">
												<view class="">{{item.week}}</view>
												<view class="">{{item.time}}</view>
											</view>

										</view>
									</view>
									<view class="txttitle">
										<view class="" style="display: flex;">
											<view class="text_money" style="color: #f8b800;">{{item.money}}</view>
											<view class="txttitle1">{{item.title}}</view>
										</view>
										<view class="txttitle2">地址 : {{item.add_name+''+item.add_detail}}</view>
									</view>
									<view class=""
										style="align-items: center;display: flex; justify-content: space-between; margin: 0rpx 10rpx;">
										<view class="">
											<image v-for="(items,indexs) in item.group" :key="indexs"
												:class="{dos:indexs===0 }" class="achd13" :src="items.headimg" mode="">
											</image>
										</view>
										<view class="zudui">{{item.p_num_str}}</view>
									</view>
								</view>

							</view>
						</view>

					</view>
				</view>
			</view>
			<!-- 商家 -->
			<view class="" v-show="sjia">
				<!-- 列表 -->
				<view class="" v-show="show2">
					<view class="achd" v-for="(item,index) in sjlist" :key="index"
						@click="SJDetail(item.shop_no,item.lat,item.lng)">
						<image class="sjimg" :src="item.cover" mode=""></image>
						<view class="sj_view">
							<view class="sj_title">
								<image class="marks1img" v-if="item.marks1=='精选'" src="../../static/jingxuan.png"
									mode=""></image>
								<image class="marks1img" v-if="item.marks1=='巨惠'" src="../../static/juhui.png" mode="">
								</image>
								<image class="marks1img" v-if="item.marks1=='新店'" src="../../static/xindian.png"
									mode=""></image>
								<view class="sj_name">
									{{item.name}}
								</view>
							</view>

							<view class="sj_rate">
								<uni-rate :count="5" readonly activeColor="#f8b800" inactiveColor="#f8b800"
									:value="item.grade" size="16" gutter="3" />
								<text
									style="color: #F8B800;font-size: 12px; font-weight: 600;font-family: Inter-Regular, Inter;">{{item.money}}</text>
							</view>
							<view class="sj_marks">
								<view class="sjbq">{{item.marks[0]}}</view>
								<view class="sjbq1">{{item.discounts}}</view>
							</view>
							<view class="sj_address">
								<text>{{item.business_area}}</text>
								<text>1.1km</text>
							</view>
							<view class="achd11">
								<view class="sj_juqing">
									<image v-for="(items,indexs) in item.group" :key="indexs"
										:class="{sj_group1:indexs>0}" class="sj_group" :src="items.headimg" mode="">
									</image>
									<view class="sj_text">{{item.text}}</view>
								</view>
								<view class="sjachd131">{{itme.text}}</view>
							</view>
							<!-- <view class="achd14">去组队{{index}}</view> -->
						</view>
					</view>
				</view>
				<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
				<view class="" v-show="show1">
					<view class="wall">
						<view class="left">
							<view class=" text-center" v-for="(item, index) in sjlist" :key="index" v-if="index%2==0">
								<view class="sj_zview">
									<image class="sj_left_img" :src="item.cover" mode=""></image>
									<view class="">
										<view class="sjviews">
											<view class="sj_left_title">
												<image class="marks1img" v-if="item.marks1=='精选'"
													src="../../static/jingxuan.png" mode=""></image>
												<image class="marks1img" v-if="item.marks1=='巨惠'"
													src="../../static/juhui.png" mode="">
												</image>
												<image class="marks1img" v-if="item.marks1=='新店'"
													src="../../static/xindian.png" mode=""></image>
												<view class="sj_left_name">{{item.name}}</view>
											</view>

											<view class="sj_marks">
												<view class="sjbq">{{item.marks[0]}}</view>
												<view class="sjbq1">{{item.discounts}}km</view>
											</view>
											<view class="adds_names">
												<text>{{item.business_area}}</text>
												<text>{{item.distance}}</text>
											</view>
											<view class="rate">
												<uni-rate :count="5" :size="12" v-model="item.grade" readonly
													activeColor="#F8B800" inactiveColor="#F8B800" />
												<view class="" style="color: #f8b800;font-size: 22rpx;">
													{{item.money}}
												</view>
											</view>
										</view>
									</view>

								</view>

							</view>
						</view>
						<view class="left">
							<view class=" text-center" v-for="(item, index) in sjlist" :key="index" v-if="index%2==1">
								<view class="sj_zview">
									<image class="sj_right_img" :src="item.cover" mode=""></image>
									<view class="">
										<view class="sjviews">
											<view class="sj_left_title">
												<image class="marks1img" v-if="item.marks1=='精选'"
													src="../../static/jingxuan.png" mode=""></image>
												<image class="marks1img" v-if="item.marks1=='巨惠'"
													src="../../static/juhui.png" mode="">
												</image>
												<image class="marks1img" v-if="item.marks1=='新店'"
													src="../../static/xindian.png" mode=""></image>
												<view class="sj_left_name">{{item.name}}</view>
											</view>

											<view class="sj_marks">
												<view class="sjbq">{{item.marks[0]}}</view>
												<view class="sjbq1">{{item.discounts}}</view>
											</view>
											<view class="adds_names">
												<text>{{item.business_area}}</text>
												<text>{{item.distance}}km</text>
											</view>
											<view class="rate">
												<uni-rate :count="5" :size="12" v-model="item.grade" readonly
													activeColor="#F8B800" inactiveColor="#F8B800" />
												<view class="" style="color: #f8b800;font-size: 22rpx;">
													{{item.money}}
												</view>
											</view>
										</view>
									</view>

								</view>

							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部弹框 -->
		<view class="poupv" v-show="guize">
			<view class="poup">
				<view class="poup1">
					<view class="Xx" @click="guize=false">X</view>
					<view class="poup2">全部筛选</view>
					<view class="poup3">
						<view class="poup4">
							<image class="poupimg" src="../../static/index/paixu.png" mode=""></image>
							<view class="" style="display: flex;flex-direction: column;">
								<view class="">智能排序</view>
								<view class="poup5">
									<view class="poup6" @click="numpaixu(1)" :class="{actives:numbee===1}">不限</view>
									<view class="poup6" @click="numpaixu(2)" :class="{actives:numbee===2}">离我最近</view>
									<view class="poup6" @click="numpaixu(3)" :class="{actives:numbee===3}">最新发布</view>
									<view class="poup6" @click="numpaixu(4)" :class="{actives:numbee===4}">最近场次</view>
								</view>
							</view>
						</view>
						<view class="" style="padding: 20rpx;">
							<view class=""
								style="width: 100%;height: 1rpx; border-bottom: 1rpx solid #e3e3e3;margin: 20rpx 0;">
							</view>
						</view>

						<view class="poup4">
							<image class="poupimg" src="../../static/index/paixu.png" mode=""></image>
							<view class="" style="display: flex;flex-direction: column;">
								<view class="">人均消费</view>
								<view class="poup5">
									<view class="poup6" @click="moneypaixu(1)" :class="{actives:moneybee===1}">不限</view>
									<view class="poup6" @click="moneypaixu(2)" :class="{actives:moneybee===2}">50¥以下
									</view>
									<view class="poup6" @click="moneypaixu(3)" :class="{actives:moneybee===3}">50~100¥
									</view>
									<view class="poup6" @click="moneypaixu(4)" :class="{actives:moneybee===4}">100~150¥
									</view>
								</view>
								<view class="zdy">
									<text class="zdy1">自定义</text><text class="zdy2">:</text>
									<!-- <u-input class="aaaaaas"  shape="circle" placeholder="请输入内容" border="surround" clearable></u-input> -->
									<input class="zdy3" type="text" :value="min" />
									<text class="zdy4">~</text>
									<input class="zdy3" type="text" :value="max" />
									<!-- <u-input shape="circle" placeholder="请输入内容" border="surround" clearable></u-input> -->
									<!-- <input style="width: 30rpx;" type="text" value="qqq" /> -->
								</view>
							</view>
						</view>


					</view>

				</view>
				<view class="btn">
					<view class="btn1" @click="guize=false">取消</view>
					<view class="btn2" @click="btnclick">确定</view>
				</view>
			</view>
		</view>
		<!-- 底部弹框 -->
		
	</view>
</template>

<script>
	// import uWatefall from "../../components/u-waterfall/u-waterfall.vue"
	export default {
		// components: {
		// 	uWatefall
		// },
		data() {
			return {
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				lat: getApp().globalData.lat,
				lng: getApp().globalData.lng,
				// 最大小金额
				min: '',
				max: '',
				// 活动
				hdong: true,
				sjia: false,
				show1: false,
				show2: true,
				v1: true,
				v2: false,
				// 搜索
				searchs: "",
				guize: false,
				current: 0,
				numbee: 1,
				moneybee: 1,
				list111: [],
				sjlist: [],
				list11: [],
				sort:"",
				cate_id:'',
				page:1,
				page1:1,
				// 底部tabbar
				tabbarlist: [{
						id: 0,
						img: "../../static/TabImg/tabbar11.png",
						name: "首页"
					},
					{
						id: 1,
						img: "../../static/TabImg/tabbar2.png",
						name: "活动"
					},
					{
						id: 2,
						img: "../../static/TabImg/fabu.png",
						name: "发布"
					},
					{
						id: 3,
						img: "../../static/TabImg/quanzi1.png",
						name: "圈子"
					},
					{
						id: 4,
						img: "../../static/TabImg/tabbar3.png",
						name: "我的"
					},
				],
				
				activityTypeInfo:{},//活动类型详情
			}
		},
		onLoad(options) {
			this.numbee = options.sort;
			this.current = options.id;
			uni.setNavigationBarTitle({
				title:uni.getStorageSync("activityTypeInfo").name
			})
		},
		mounted() {
			this.actCate();
			this.tapclick();
			console.log(this.lat, this.lng);
		},
		onPullDownRefresh() {
			this.page=1;
			this.page1=1;
			this.list111=[];
			this.sjlist=[];
			this.tapclick();
		},
		onReachBottom() {
			this.tapclick();
		},
		watch: {
			searchs(newval, oldval) {
				uni.request({
					url: this.baseurl + '/api/act/actList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						cate_id: this.current,
						sort: this.numbee,
						lat: this.lat,
						lng: this.lng,
						keywords: newval,
					},
					success: res => {
						console.log("活动列表", res);
						this.list111 = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
				uni.request({
					url: this.baseurl + '/api/shop/shopList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						cate_id: this.current,
						sort: this.numbee,
						lat: this.lat,
						lng: this.lng,
						keywords: newval,
						money_max: this.max,
						money_min: this.min
					},
					success: res => {
						console.log("商家列表", res);
						this.sjlist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
		},
		methods: {
			// 跳转到活动详情
			navdetal(e) {
				uni.navigateTo({
					url: '../ToParticipateIn/ToParticipateIn?act_no=' + e,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			tapclick() {
				uni.request({
					url: this.baseurl + '/api/act/actList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						cate_id: this.current,
						sort: this.numbee,
						lat: this.lat,
						lng: this.lng,
						page:this.page++,
						num:20,
					},
					success: res => {
						console.log("活动列表", res);
						this.list111 = this.list111.concat(res.data.data) ;
					},
					fail: () => {},
					complete: () => {}
				});
				uni.request({
					url: this.baseurl + '/api/shop/shopList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						cate_id: this.current,
						sort: this.numbee,
						lat: this.lat,
						lng: this.lng,
						money_max: this.max,
						money_min: this.min,
						page:this.page1++,
						num:20,
					},
					success: res => {
						console.log("商家列表", res);
						this.sjlist =this.sjlist.concat(res.data.data) ;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 筛选条件
			numbees(type) {
				this.numbee = type;
			},
			// 活动列表
			actList() {

			},
			// 活动分类
			actCate() {
				uni.request({
					header: {
						xcx:1,
						token: this.token
					},
					url: this.baseurl + '/api/act/actCate',
					method: 'POST',
					data: {
						page: 1,
						num: 10,

					},
					success: res => {
						console.log(res);
						this.list11 = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			Address() {
				uni.navigateTo({
					url: '../activityaddress/activityaddress',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 样式列表切换
			styleqh() {
				this.show2 = false;
				this.show1 = true;
			},
			styleqh1() {
				this.show2 = true;
				this.show1 = false;
			},
			scrollindex(id, type) {
				this.current = id;
				uni.request({
					url: this.baseurl + '/api/act/actList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						cate_id: this.current,
						sort: this.numbee,
						lat: this.lat,
						lng: this.lng,
					},
					success: res => {
						console.log("活动列表", res);
						this.list111 = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
				uni.request({
					url: this.baseurl + '/api/shop/shopList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						cate_id: this.current,
						sort: this.numbee,
						lat: this.lat,
						lng: this.lng,
						money_max: this.max,
						money_min: this.min
					},
					success: res => {
						console.log("商家列表", res);
						this.sjlist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});

				console.log(this.current)
			},
			hdclick() {
				this.v1 = true;
				this.v2 = false;
				this.hdong = true;
				this.sjia = false;
			},
			hd1click() {
				this.v1 = false;
				this.v2 = true;
				this.hdong = false;
				this.sjia = true;
			},
			// 筛选排序
			numpaixu(type) {
				this.numbee = type;
			},
			moneypaixu(type) {
				this.moneybee = type;
				if (type == 1) {
					this.min = '';
					this.max = '';
				} else if (type == 2) {
					this.min = 0;
					this.max = 50;
				} else if (type == 3) {
					this.min = 50;
					this.max = 100;
				} else if (type == 4) {
					this.min = 100;
					this.max = 150;
				}
			},
			// 确定筛选
			btnclick() {
				if (this.numbee == 2) {
					uni.request({
						url: this.baseurl + '/api/act/actList',
						method: 'POST',
						header: {
							xcx:1,
							token: this.token
						},
						data: {
							cate_id: this.current,
							sort: this.numbee,
							lat: this.lat,
							lng: this.lng,
							money_max: this.max,
							money_min: this.min,
						},
						success: res => {
							console.log("活动列表", res);
							this.list111 = res.data.data;
							this.guize = false;
						},
						fail: () => {},
						complete: () => {}
					});
				} else {
					uni.request({
						url: this.baseurl + '/api/act/actList',
						method: 'POST',
						header: {
							xcx:1,
							token: this.token
						},
						data: {
							cate_id: this.current,
							sort: this.numbee,
							lat: this.lat,
							lng: this.lng,
							money_max: this.max,
							money_min: this.min,
						},
						success: res => {
							console.log("活动列表", res);
							this.list111 = res.data.data;
							this.guize = false;
						},
						fail: () => {},
						complete: () => {}
					});
				}
				uni.request({
					url: this.baseurl + '/api/shop/shopList',
					method: 'POST',
					header: {
						xcx:1,
						token: this.token
					},
					data: {
						cate_id: this.current,
						sort: this.numbee,
						lat: this.lat,
						lng: this.lng,
						money_max: this.max,
						money_min: this.min,
					},
					success: res => {
						console.log("商家列表", res);
						this.sjlist = res.data.data;
						this.guize = false;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转至商家详情
			SJDetail(shop_no, lat, lng) {
				uni.navigateTo({
					url: `../../pages_huodong/Detail/Detail?shop_no=${shop_no}&lat=${lat}&lng=${lng}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转至活动详情
			ActiveDetail(act_no) {

				uni.navigateTo({
					url: `../../pages_huodong/ActivityDetail/ActivityDetail?act_no=${act_no}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// tabbar跳转
			navswich(ID) {
				if (ID == 0) {
					uni.switchTab({
						url: '../index/index'
					})
				} else if (ID == 1) {
					uni.switchTab({
						url: '../activity/activity'
					})
				} else if (ID == 2) {
					uni.navigateTo({
						url: '../Group/Group',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
					// uni.switchTab({
					// 	url: '../release/release'
					// })
				} else if (ID == 3) {
					uni.switchTab({
						url: '../circle/circle'
					})
				} else if (ID == 4) {
					uni.switchTab({
						url: '../my/my'
					})
				}

			}

		}
	}
</script>

<style scoped>
	/* 商家瀑布流 */
	.sj_zview {
		overflow: hidden;
		height: auto;
		box-shadow: 0px 4px 20px 0px rgba(175, 175, 175, 0.1);
	}

	.sj_left_name {
		font-size: 28rpx;
		width: 100px;
		white-space: nowrap;
		overflow: hidden;
		font-weight: 600;
		text-overflow: ellipsis;
	}

	.sj_left_title {
		display: flex;
		align-items: center;
	}

	.sj_right_img {
		width: 324rpx;
		height: 346rpx;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
	}

	.sj_left_img {

		width: 324rpx;
		height: 298rpx;
		border-radius: 10rpx 10rpx 0rpx 0rpx;

	}

	.sj_rate {
		margin-left: -2px;
		display: flex;
		flex-direction: row;
		margin-top: 4rpx;
		margin-bottom: 4rpx;
	}

	.sjimg {
		width: 192rpx;
		height: 192rpx;
	}

	.sj_juqing {
		display: flex;
		align-items: center;
	}

	.sj_group1 {
		margin-left: -20rpx;
	}

	.sj_group {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50rpx;
	}

	.sj_text {
		width: 330rpx;
		font-size: 24rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-left: 10rpx;
		color: #D24E15;
	}

	.sj_address {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #939393;
		font-size: 24rpx;
		font-family: Inter-Regular, Inter;
		margin: 4rpx 0;
	}

	.sj_marks {
		display: flex;
		align-items: center;
	}

	.sj_title {
		display: flex;
		align-items: center;
	}

	.sj_name {
		width: 348rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
		margin-left: 8rpx;
	}

	.sj_view {
		padding-left: 10rpx;

	}

	.marks1img {
		width: 64rpx;
		height: 32rpx;
	}

	.tag {
		width: 104rpx;
		height: 40rpx;
		position: absolute;
		right: 0rpx;
		bottom: 0;

	}

	/* 瀑布流 */
	.left_zview {
		position: relative;
		width: 100%;
		height: auto;
		background: white;

		box-shadow: 0px 6px 20px 0px rgba(175, 175, 175, 0.14);
	}

	.right_zview {
		position: relative;
		width: 100%;
		height: auto;
	}

	.sj_wall_left_img {
		width: 100%;
		height: 350rpx;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
	}

	.sj_wall_right_img {
		width: 100%;
		height: 400rpx;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
	}

	.sjviews {
		padding: 10rpx 15rpx;
	}

	.adds_names {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #9999;
		margin-top: 10rpx;
	}

	.titles {
		font-size: 24rpx;
		font-weight: 600;
	}

	.marks {
		background: #F8B800;
		color: white;
		font-size: 20rpx;
		padding: 2rpx 15rpx;
		/* width: 70rpx; */
		margin-right: 20rpx;
		margin-top: 10rpx;

	}

	.rate {
		display: flex;
		align-items: center;
	}

	.wall {
		display: flex;
		justify-content: space-around;
	}

	.wall_left_img {
		width: 324rpx;
		height: 276rpx;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
	}

	.wall_right_img {
		width: 324rpx;
		height: 342rpx;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
	}

	.left {
		width: 324rpx;
		overflow: hidden;
		/* height: 92px; */
	}

	,
	.right {
		width: 324rpx;
		display: inline-block;
		vertical-align: top;
		border-radius: 20rpx;
	}

	.poupimg {
		height: 50rpx;
		width: 50rpx;
	}

	.zdy {
		display: flex;
		margin-left: 50rpx;
		margin-top: 15rpx;
	}

	.zdy1 {}

	.zdy2 {
		margin: 0rpx 10rpx;
	}

	.zdy3 {
		width: 200rpx;
		background: #F6F6F6;
		border-radius: 20rpx;
		padding-left: 10rpx;
	}

	.zdy4 {}

	.aaaaaas {
		width: 50rpx;
	}

	/* 商家 */
	.sjachd131 {
		position: absolute;
		right: 0rpx;
		bottom: 10rpx;
		color: #9999;

	}

	.add_km {
		display: flex;
		justify-content: space-between;
		color: #9999;
		font-size: 24rpx;
		margin: 10rpx 0;
	}

	.sjachd13 {
		width: 40rpx;
		height: 40rpx;
		border-radius: 40rpx;
		margin-right: -20rpx;

	}

	.sjbq2 {
		background-color: #f8b800;
		color: white;
		font-size: 20rpx;
		padding: 4rpx 7rpx;
		margin: 10rpx 10rpx 10rpx 0rpx;
	}

	.sjbq1 {
		margin-left: 10rpx;
		background: #D24E15;
		padding: 4rpx 12rpx 4rpx 8rpx;
		border-radius: 2px 2px 2px 2px;
		color: white;
		font-size: 20rpx;
	}

	.sjbq {
		font-size: 20rpx;
		border-radius: 2px 2px 2px 2px;
		opacity: 1;
		color: #F8B800;
		padding: 4rpx 12rpx 4rpx 8rpx;
		border: 1px solid #F8B800;
	}

	.sjachd4 {
		margin-left: -2px;
		display: flex;
		flex-direction: row;

	}

	/* 底部弹框 */
	.btn1 {
		width: 50%;
		border-radius: 0;
		border: none;
		/* text-align: center; */
		background-color: #9999;
		color: white;
		align-items: center;
		display: flex;
		padding: 20rpx;
		justify-content: center;
		color: #000000;
	}

	.btn2 {
		width: 50%;
		border-radius: 0;
		border: none;
		padding: 20rpx;
		/* text-align: center; */
		background-color: #F8B800;
		color: white;
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.btn {
		display: flex;
		margin-top: 50rpx;
		/* 		position: absolute;
		left: 0;
		right: 0;
		bottom: 0; */
	}

	.Xx {
		position: absolute;
		top: 0;
		right: 25rpx;
	}

	.poup {
		/* width: 100%; */
		height: 700rpx;
		padding: 10rpx;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
		background-color: white;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.poupv {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		height: 100%;
		width: 100vw;
		background-color: #9999;
		opacity: 1;
	}

	.poup1 {
		position: relative;
	}

	.poup2 {
		text-align: center;
		margin-top: 20rpx;
	}

	.poup4 {

		display: flex;

	}

	.poup5 {
		display: flex;
		align-items: center;
		margin-top: 15rpx;
		/* margin-left: 30rpx; */
		font-size: 30rpx;
		/* justify-content: center;	 */
	}

	.poup6 {
		margin-left: 25rpx;
		/* margin: 10rpx 20rpx; */
		padding: 5rpx 10rpx;
	}

	.actives {
		background-color: #F8B800;
		color: white;
		border-radius: 40rpx;
		text-align: center;
		padding: 10rpx 20rpx;
	}

	/* 底部弹框 */
	/* 瀑布 */
	.hdzds {
		position: absolute;
		right: 30rpx;
		top: 20rpx;
		color: white;
		font-size: 18rpx;
		border-radius: 20rpx;
		background: linear-gradient(178.62deg, #E9BE5D 1.16%, #FF3D00 98.83%);
		padding: 8rpx 15rpx;

	}

	.zudui {
		color: #9999;
		font-size: 20rpx;
	}

	.zuduiv1 {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0rpx 10rpx;
		padding-bottom: 10rpx;
	}

	.txttitle22 {
		font-size: 20rpx;
		color: #9999;
	}

	.txttitle2 {
		font-size: 20rpx;
		color: #9999;
		margin: 12rpx 0rpx;
		width: 304rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.text_money {
		width: 64rpx;
		height: 32rpx;
		font-size: 24rpx;
		text-align: center;
		font-family: Inter-Regular, Inter;
		color: #E13600;
		background: rgba(225, 54, 0, 0.1);
		border-radius: 3px 3px 3px 3px;
		opacity: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #E13600;

	}

	.txttitle1 {
		font-size: 28rpx;
		width: 228rpx;
		font-weight: 600;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-left: 10rpx;
	}

	.textimg1 {
		width: 330rpx;
		height: 450rpx;
	}

	.textimg {
		width: 330rpx;
	}

	.text-center1 {
		/* margin: 15rpx 15rpx 30rpx 15rpx; */
		background-color: white;
		border-radius: 20rpx;
		border: 1rpx solid #F2F2F2;
	}

	.text-center {
		/* margin: 15rpx; */
		background-color: white;
		border-radius: 20rpx;
		border: 1rpx solid #F2F2F2;
		margin: 20rpx 0;
	}

	.pop99 {
		text-align: left;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.pop11 {
		display: flex;
	}

	.pop10 {
		display: flex;
		align-items: center;
		margin: 0rpx 20rpx;
	}

	.pop55 {
		display: flex;
		align-items: center;
	}

	.pop5 {
		width: 40rpx;
		height: 40rpx;
	}

	.pop4 {
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: absolute;
		bottom: 145rpx;
		left: 20rpx;
		right: 20rpx;
		background-color: white;
		border-radius: 20rpx;
		border: 1rpx solid #9999;
	}

	.pop3 {
		width: 100%;
		height: 240rpx;
	}

	.pop2 {
		width: 48%;
		background-color: white;
		margin: 10rpx 0;
		position: relative;
		height: 410rpx;
	}

	.over {
		margin-bottom: 70rpx;
	}

	.txttitle {
		margin-left: 10rpx;
		margin-top: 30rpx;
	}

	.pop1 {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		justify-content: space-around;
		position: relative;
	}

	.pop {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
		border-radius: 100rpx;
		position: absolute;
		left: 10rpx;
		right: 10rpx;
		bottom: 148rpx;
		box-shadow: 7rpx 7rpx 21rpx #9999;
		font-size: 23rpx;
		padding: 10rpx;
	}

	/* 瀑布 */
	.rows13 {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}

	.rows10 {
		display: flex;
	}

	.rows7 {
		margin-top: 25rpx;
		margin-left: 10rpx;
	}

	.rows6 {
		display: flex;
		align-items: center;
	}

	/* 	.rows5{
		display: flex;
		    background-color: white;
		    position: absolute;
		    top: 263rpx;
		    left: 20rpx;
		    right: 20rpx;
		    border-radius: 20rpx;
		    align-items: center;
		    justify-content: space-around;
	} */
	.rows3 {
		width: 30rpx;
		height: 30rpx;
	}

	.rows2 {
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: white;
		position: absolute;
		top: 243rpx;
		border-radius: 20rpx;
		right: 10rpx;
		left: 10rpx;
	}

	.rows1 {
		width: 100%;
		height: 300rpx;
	}

	/deep/ .u-row {
		display: flex;
		flex-flow: column wrap;
		/* column-gap: 0.1em; */

	}

	.wrap {
		padding: 12px;
	}

	.demo-layout {
		/* height: 25px; */
		border-radius: 4px;
		position: relative;
		margin: 10rpx;
		width: calc(100%/2-10rpx);
	}

	.bg-purple {
		background: #CED7E1;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	/* AC活动 */
	.dos {}



	.doss1 {
		position: relative;
		left: -32rpx;
	}

	.achd {
		display: flex;
		position: relative;
		border-radius: 20rpx;
		background-color: white;
		box-shadow: 0px 0px 15px 0px rgba(17, 17, 17, 0.06);
		margin: 20rpx 0;
		padding: 20rpx;
		border: 1rpx solid #F2F2F2;
	}

	.achd1 {
		width: 208rpx;
		height: 218rpx;
	}

	.achd2 {
		position: relative;
		margin-left: 20rpx;
		width: 65%;
	}

	.achd3 {
		font-size: 32rpx;
		font-weight: 600;
		font-family: Inter-Regular, Inter;
		white-space: nowrap;
		width: 418rpx;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.achd131 {
		position: absolute;
		right: 0rpx;
		bottom: 15rpx;
		color: #9999;
	}

	.achd4 {
		color: #939393;
		font-size: 24rpx;
		font-family: Inter-Regular, Inter;
		white-space: nowrap;
		width: 408rpx;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.achd5 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.achd6 {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 10rpx 0;
	}

	.achd7 {
		width: 36rpx;
		height: 36rpx;

	}

	.achd8 {
		margin: 0 5rpx;
		font-size: 32rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
	}

	.achd9 {}

	.achd10 {

		width: 100rpx;
		overflow: hidden;
		text-align: right;
		font-size: 28rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 800;
		color: #F8B800;
	}

	.achd11 {
		display: flex;
		position: relative;
		align-items: center;
	}

	.achd12 {}

	.achd13 {
		width: 44rpx;
		height: 44rpx;
		border-radius: 40rpx;
		margin-right: -20rpx;
	}

	.achd14 {
		position: absolute;
		right: 0rpx;
		font-size: 16rpx;
		color: white;
		bottom: 0rpx;
		/* background-color: #f8b800; */
		border-radius: 20rpx;
		padding: 10rpx 20rpx;



		background: linear-gradient(178.62deg, #E9BE5D 1.16%, #FF3D00 98.83%);
		/* padding: 8rpx 15rpx; */

	}

	.achd15 {}

	.achd16 {}

	.achd17 {}

	.achd18 {}

	/* 切换样式 */
	.qhv1 {
		display: flex;
		align-items: center;

	}

	.qhv2 {
		font-size: 37rpx;
	}

	.qhv3 {
		width: 44rpx;
		height: 44rpx;
		margin-top: 5rpx;
		margin-left: 26rpx;
		margin-right: 20rpx;
	}

	.qhv33 {
		width: 30rpx;
		height: 30rpx;
		margin-top: 5rpx;
		margin-left: 5rpx;
		margin-right: 5rpx;
	}

	.qhv4 {
		width: 44rpx;
		height: 44rpx;
		margin-top: 5rpx;
	}

	/* 搜索框 */
	.search1 {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 20rpx;
	}

	.searchimg {
		width: 28rpx;
		height: 28rpx;
		margin-right: 10rpx;
	}

	.search2 {
		/* width: 516rpx; */
		width: 630rpx;
		height: 54rpx;
		background: #F5F5F5;
		border-radius: 57px 57px 57px 57px;
		font-size: 28rpx;
		padding-left: 10rpx;
		display: flex;
		align-items: center;

	}

	.search3 {
		display: flex;
		align-items: center;
	}

	.search4 {
		width: 30rpx;
		height: 30rpx;
		margin-right: 5rpx;
		margin-left: 5rpx;
	}

	.search5 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		max-width: 180rpx;
	}

	/* 活动商家 */
	.hd {
		display: flex;
		flex-direction: row;
		justify-content: center;
		text-align: center;
		position: relative;
		padding: 20rpx 0rpx;
	}

	.hdv1 {
		margin: 0rpx 40rpx;
		font-size: 40rpx;
	}

	.onhd {
		font-weight: 600;
		font-family: Inter-Regular, Inter;
	}

	.hd_relavt {
		position: relative;
	}

	.hdv2 {
		width: 40rpx;
		height: 40rpx;
		background: rgba(248, 184, 0, 0.5);
		position: absolute;
		left: 33rpx;
		border-radius: 50rpx;

	}



	.scroll-view_H {
		white-space: nowrap;
		/* width: 85%; */
	}

	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	/* scroll滑动模块 */
	.scroll-Y {
		height: 300rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100rpx;
		color: #2E2E2E;
		background-color: rgba(163, 163, 163, 0.08);
		border-radius: 35rpx;
		text-align: center;
		padding: 10rpx;
		margin: 20rpx 10rpx;
	}

	.active {
		background-color: rgba(248, 184, 0, 0.2);
		color: #F8B800;
	}

	.content {
		padding: 0 40rpx 200rpx 36rpx;
	}
</style>
