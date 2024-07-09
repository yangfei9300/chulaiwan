<template>
	<view class="">
		<view class="h-40"></view>
		<view class="roww rowsa" style="line-height: 62rpx;">
			<picker :range="fenzhanList" range-key="nickname" @change="cityChange">  
				<view>{{citySel}}  ▼ </view>
			</picker>
			<!-- <image class="souisuoview" src="/staic/sousuoico.jpg"></image> -->
			<image class="souisuoview" src="/static/sousuoico.jpg"></image>
			<image class="dufjis" @click="showLoadApp()" src="/static/fujin.gif"></image>
		</view>
		<view class="h-40"></view>
		<view class="">  
			<swiper
			class="onswiper" 
			previous-margin="20px" next-margin="20px" :indicator-dots="false" autoplay
				:circular="true" :duration="1000">
				<swiper-item @click="herf(item.rule_name,item.rule_data)" v-for="(item,index) in list1" :key="index"
					:class="{acac:index==1}">
					<view class="swiper-item">
						<image lazy-load class="onimg" :src="item.img" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>


		<!-- <text 	user-select>{{wxcode}}</text>
		<input v-model="tokenValue" />
		<button @click="tokenValueBaocun">保存token</button> -->

<view class="content">
	<!-- 轮播图 -->

	<!-- 运动标签 -->
	<view class="picture_v1">
		<view class="picture_v2" v-for="(item,index) in Catelist" :key="index"
			@click="onpicture(item.id,item.sort,item)">
			<image lazy-load class="picture_v3" :src="item.cover" mode=""></image>
			<view class="picture_v4">{{item.name}}</view>
		</view>
	</view>


	<!-- 最新活动 -->
	<view class="activity_v1">
		<view class="activity_v2">
			<image class="activityimg" src="../../static/index/zxhd.png" mode=""></image>
			<view class="activity_v3">最新活动</view>
		</view>
		<view class="">
		</view>
	</view>
	<view class="slidev1 w-674">
		<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="0">
			<view :class="{active:current===0}" @click="scrollindex(0,0,0)" id="demo1"
				class="scroll-view-item_H uni-bg-red">
				最新
			</view>
			<view v-for="(item,index) in Catelist" :key="index" :class="{active:current===index+1}"
				@click="scrollindex(item.id,index+1,0)" id="demo1" class="scroll-view-item_H uni-bg-red">
				{{item.name}}
			</view>

		</scroll-view>
	</view>
	<view class="">
		<view style="margin-top: 30rpx 0;width:674rpx;">
			<scroll-view class="scroll-view_H" style="height: 630rpx;" scroll-x="true" scroll-left="0"
				v-if="list111.length>0">
				<view class="roww">
					<block v-for="(item,index) in list111">
						<block v-if="item.vip_code==2">
							<view class="w-40" v-if="index==1"></view>
							<!-- <view class="w-80" v-if="index>1"></view> -->
							<view class="pore roww " @click="activitys(item.act_no)">
								<image class="donghuabeis"
									src="https://ta.imjiayi.com/upload/upload/黑钻竖版1111111.gif">
								</image>
								<view class="colonn item1view poab">
									<image class="activityImg headerimg" lazy-load
										:src="item.cover+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'"
										mode="aspectFill"></image>
									<view class="timeview roww rowsa center_center" style="background: #FFF0C6;">
										<image class="w-40 h-40"
											src="https://ta.imjiayi.com/upload/upload/Component 15@2x.png">
										</image>
										<view class="timetxt">{{item.date}} {{item.week}} {{item.time}}</view>
									</view>
									<view class="h-15"></view>
									<view class="roww ">
										<view class="w-12"></view>
										<view class="jine">{{item.money}}</view>
										<view class="w-20"></view>
										<view class="activitytime " style="">{{item.title}}</view>
										<view class="w-12"></view>
									</view>
									<view class="h-8"></view>
									<view class="dizhia ">地址：{{item.add_name}}</view>
									<view class="h-5"></view>
									<view class="roww">
										<view class="w-12"></view>
										<block v-for="(item1,index1) in item.group">
											<block v-if="index1<8">
											<image class="headimg headerimg" lazy-load
												:src="item1.headimg+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_5'"
												v-if="index1==0">
											</image>
											<image class="headimg headerimg" style="margin-left: -25rpx;"
												:src="item1.headimg+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_5'"
												lazy-load v-else></image>
												</block>
										</block>

										<view class="allline"></view>
										<view class="renshu">{{item.p_num_str}}</view>
										<view class="w-12"></view>
									</view>
									<view class="h-12"></view>
									<block v-if="item.act_status==1">
										<image
											src="https://ta.imjiayi.com/upload/upload/huiyuan/%E9%BB%91%E9%92%BB%E8%BF%9B%E8%A1%8C%E4%B8%AD.gif"
											class="zudui" style="border-radius: 0rpx;"></image>
									</block>
									<block v-else>
										<image src="https://ta.imjiayi.com/upload/upload/manyuan.png"
											class="zudui" v-if="item.tag=='已满员'"></image>
										<image src="https://ta.imjiayi.com/upload/upload/huiyuan/黑钻进行中.gif"
											class="zudui" v-if="item.tag=='进行中'"></image>
										<image
											src="https://ta.imjiayi.com/upload/upload/huiyuan/1690978759113.png"
											class="zudui" v-if="item.tag=='去组队'"></image>
									</block>



								</view>
							</view>
							<view class="w-40"></view>
							<view class="w-40"></view>
						</block>



						<block v-else-if="item.vip_code==1">
							<view class="w-40" v-if="index!=0"></view>
							<!-- <view class="w-40" v-if="index!=0&&osName=='ios'"></view> -->


							<view class="pore roww " @click="activitys(item.act_no)">
								<view class="colonn item1view12 poab"
									style="background-color: white;border-radius: 30rpx;">
									<image class="activityImg  headerimg" mode="aspectFill"
										:src="item.cover+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_10'">
									</image>
									<view class="timeview1 roww rowsa center_center">
										<view class="timetxt1" style="color: #FFC895;">{{item.date}}
											{{item.week}} {{item.time}}
										</view>
									</view>
									<view class="h-15"></view>
									<view class="roww ">
										<view class="w-12"></view>
										<view class="jine">{{item.money}}</view>
										<view class="w-20"></view>
										<view class="activitytime " style="">{{item.title}}</view>
										<view class="w-12"></view>
									</view>
									<view class="h-8"></view>
									<view class="dizhia ">地址：{{item.add_name}}</view>
									<view class="h-5"></view>
									<view class="roww">
										<view class="w-12"></view>
										<block v-for="(item1,index1) in item.group">
											<block v-if="index1<8">
											<image class="headimg" lazy-load :src="item1.headimg" v-if="index1==0">
											</image>
											<image class="headimg" lazy-load style="margin-left: -25rpx;"
												:src="item1.headimg+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
												v-else></image></block>
										</block>
										<view class="allline"></view>
										<view class="renshu">{{item.p_num_str}}</view>
										<view class="w-12"></view>
									</view>
									<view class="h-12"></view>

									<block v-if="item.act_status==1">
										<image src="https://ta.imjiayi.com/upload/upload/huiyuan/VIP竖版去组队.png"
											class="puvipview"></image>
									</block>
									<block v-else>
										<image src="https://ta.imjiayi.com/upload/upload/huiyuan/VIP竖版已满员.png"
											class="puvipview" v-if="item.tag=='已满员'"></image>
										<image src="https://ta.imjiayi.com/upload/upload/huiyuan/VIP竖版进行中.gif"
											class="puvipview" v-if="item.tag=='进行中'"></image>
										<image src="https://ta.imjiayi.com/upload/upload/huiyuan/VIP竖版去组队.png"
											class="puvipview" v-if="item.tag=='去组队'"></image>
									</block>



								</view>
							</view>
						</block>

						<block v-else>
							<view class="w-40" v-if="index!=0"></view>
							<view class="pore roww " @click="activitys(item.act_no)">
								<view class="colonn item1view12 poab"
									style="background-color: white;border-radius: 30rpx;">
									<image class="activityImg  headerimg" mode="aspectFill"
										:src="item.cover+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'">
									</image>
									<view class="timeview roww rowsa center_center">
										<image class="w-40 h-40"
											src="https://ta.imjiayi.com/upload/upload/Component 15@2x.png">
										</image>
										<view class="timetxt">{{item.date}} {{item.week}} {{item.time}}</view>
									</view>
									<view class="h-15"></view>
									<view class="roww ">
										<view class="w-12"></view>
										<view class="jine">{{item.money}}</view>
										<view class="w-20"></view>
										<view class="activitytime " style="">{{item.title}}</view>
										<view class="w-12"></view>
									</view>
									<view class="h-8"></view>
									<view class="dizhia ">地址：{{item.add_name}}</view>
									<view class="h-5"></view>
									<view class="roww">
										<view class="w-12"></view>
										<block v-for="(item1,index1) in item.group">
											<block v-if="index1<8">
											<image class="headimg" lazy-load
												:src="item1.headimg+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
												v-if="index1==0">
											</image>
											<image class="headimg" lazy-load style="margin-left: -25rpx;"
												:src="item1.headimg" v-else></image>
												</block>
										</block>
										<view class="allline"></view>
										<view class="renshu">{{item.p_num_str}}</view>
										<view class="w-12"></view>
									</view>
									<view class="h-12"></view>

									<block v-if="item.act_status==1">
										<image src="https://ta.imjiayi.com/upload/upload/huiyuan/黑钻进行中.gif"
											class="zudui"></image>
									</block>
									<block v-else>
										<image src="https://ta.imjiayi.com/upload/upload/manyuan.png"
											class="zudui" v-if="item.tag=='已满员'"></image>
										<image src="https://ta.imjiayi.com/upload/upload/huiyuan/黑钻进行中.gif"
											class="zudui" v-if="item.tag=='进行中'"></image>
										<image
											src="https://ta.imjiayi.com/upload/upload/huiyuan/1690978759113.png"
											class="zudui" v-if="item.tag=='去组队'"></image>
									</block>

								</view>
							</view>
						</block>

					</block>

				</view>
			</scroll-view>

			<view v-else class="colonn center_center w-680 asdsad">
				<view class="h-30"></view>
				<image src="https://ta.imjiayi.com/upload/upload/空空如也.png" class="w-210 h-238">
				</image>
				<view class="h-15"></view>
				<view>该分类下暂无活动</view>
				<view>快去发布一个吧</view>
				<view class="h-30"></view>
			</view>

		</view>
	</view>
	<!-- 商家推荐 -->
	<view class="activity_v1">
		<view class="activity_v2">
			<image class="activityimg" src="../../static/index/sjtj.png" mode=""></image>
			<view class="activity_v3">商家推荐</view>
		</view>
	</view>
	<view class="">
		<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="0">
			<view :class="{active:current1===0}" @click="scrollindex(0,0,1)" id="demo1"
				class="scroll-view-item_H uni-bg-red">
				最新
			</view>
			<view v-for="(item,index) in Catelist" :key="index" :class="{active:current1===index+1}"
				@click="scrollindex(item.id,index+1,1)" id="demo1" class="scroll-view-item_H uni-bg-red">
				{{item.name}}
			</view>

		</scroll-view>
	</view>
	<view class="tjv">
		<view class="tjv1" v-for="(itemas,indexas) in shangjialist" :key="indexas">
			<view class="tjv2" @click="shangjiatuijian(itemas.shop_no,itemas.lat,itemas.lng)">
				<view class="tjv3">
					<image class="tjv4 headerimg"
						:src="itemas.cover+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
						mode="aspectFill"></image>
					<view class="tjv5">
						<uni-rate :readonly="true" size="12" :value="5" />

						<view class="" style="color: #f8b800;font-size: 22rpx;">{{itemas.grade}}分</view>
					</view>
				</view>
				<view class="tjv6">
					<view class="tjv7">{{itemas.name}}</view>
					<view class="tjv8">
						<view class="tjv9">
							<view class="tjv10" v-if="itemas.marks[0]">{{itemas.marks[0]}}</view>
							<view :class="{tjv10:itemas.discounts==0,tjv10_10:itemas.discounts!=0}"
								v-if="itemas.discounts">{{itemas.discounts==0?'独家特惠':itemas.discounts}}</view>
						</view>
						<view class="tjv11">
							距离 : {{itemas.distance.toFixed(2)}}公里
						</view>
					</view>
					<view class="group">
						<view class="">
							<image v-if="" class="zuduirstx11" v-for="(item,index) in itemas.group" :src="item.headimg"
								:key="index" :class="{zuduirstx:index>0}" mode=""></image>
						</view>
						<view class="group_text">{{itemas.text}}</view>
					</view>
					<view class="tjv12">
						<view class="tjv13">
							<image v-for="(plitem,plindex) in itemas.imgs " :key="plindex" class="tjv14"
								:class="{outimg:plindex>=1 , outimgs:plindex>=2}" :src="plitem" mode=""></image>
						</view>
						<view class="tjv15">{{itemas.pinglun}}</view>
					</view>
					<view class="tjv16">
						<view class="tjv17">人均消费<text style="margin: 0rpx 5rpx;">:</text><text
								style="color: #f8b800;">{{itemas.money}}</text> </view>
						<view class="tjv18">已成功举办活动<text style="margin: 0rpx 5rpx;">:</text><text
								style="color: #f8b800;"> {{itemas.act_num}}次</text></view>
					</view>
					<view class="tjv19"></view>
					<view class="tjv20">
						<image class="tjv21" src="../../static/index/address.png" mode=""></image>
						<view class="tjv22">|</view>
						<view class="tjv23">所属商圈 : {{itemas.business_area}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	<!-- 会员排名 -->
	<view class="activity_hy">
		<view class="activity_v2">
			<image class="activityimg" src="../../static/index/hyhy.png" mode=""></image>
			<view class="activity_v3">活跃会员</view>
		</view>
	</view>
	<view class="" style="padding-left: 17rpx; padding-right: 55rpx;">
		<view class="" style="overflow: hidden;">
			<swiper style="height: 680rpx;" @change="acccccc" :next-margin="40" :previous-margin="40" current="2"
				:interval="3000" :duration="1000">
				<swiper-item :style="" class="" style="" v-for="(item,index) in paihanglist" :key="index"
					@click="navmy(item.id)">

					<view :class="moveX == index?'nowactive':'notact'" style="position: relative;">
						<!-- x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20 -->
						<image :class="['image']" lazy-load class=" headerimg"
							:src="item.headimg+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
							mode="aspectFill">
						</image>
						<view class="lb">
							<view class="lb1">
								<view class="" style="margin-left: 10rpx;">{{item.nickname}}</view>
								<image class="vip_code" v-if="item.vip_code" src="../../static/index/VIP.png" mode="">
								</image>
								<image class="auth" v-if="item.is_auth" src="../../static/index/auth.png" mode="">
								</image>
							</view>
							<view class="lb2" style="margin-left: 10rpx;">
								<image class="base_sex" v-if="item.base_sex==0" src="../../static/index/sex0.png"
									mode=""></image>
								<image class="base_sex" v-if="item.base_sex==1" src="../../static/index/sex1.png"
									mode=""></image>
								<view class="base_age">. {{item.base_age}}岁 . {{item.base_con}} .
									{{item.base_address}}
								</view>
							</view>
							<view class="lb3" style="margin-left: 10rpx;">
								<view class="interest" v-if="lb_index<3&&lb_item"
									:class="{interestA:lb_item=='运动健身',interestB:lb_item=='室内娱乐',interestC:lb_item=='酒吧',interestD:lb_item=='自由行',interestE:lb_item=='干饭',interestF:lb_item=='桌游',}"
									v-for="(lb_item,lb_index) in item.interest" :key="lb_index">{{lb_item}}
								</view>
							</view>


						</view>
						<view class="lb4">
							<image class="huo" src="../../static/index/huo.png" mode=""></image>
							<view class="">
								{{item.base_liveness}}
							</view>
						</view>
					</view>

				</swiper-item>
			</swiper>
			<!-- 	<z-swiper class="zebraswiper" v-model="paihanglist" :options="options" centeredSlides="true">
						<z-swiper-item v-if="paihanglist" :custom-style="slideCustomStyle"
							v-for="(item,index) in paihanglist">
							<view class="" style="position: relative;">
								<image class="image" :src="item.headimg" mode="aspectFill">
								</image>
								<view class="lb">
									<view class="lb1">
										<view class="">{{item.nickname}}</view>
										<image class="vip_code" v-if="item.vip_code" src="../../static/index/VIP.png"
											mode=""></image>
										<image class="auth" v-if="item.is_auth" src="../../static/index/auth.png"
											mode=""></image>
									</view>
									<view class="lb2">
										<image class="base_sex" v-if="item.base_sex==0"
											src="../../static/index/sex0.png" mode=""></image>
										<image class="base_sex" v-if="item.base_sex==1"
											src="../../static/index/sex1.png" mode=""></image>
										<view class="base_age">. {{item.base_age}}岁 . {{item.base_con}} .
											{{item.base_address}}
										</view>
									</view>
									<view class="lb3">
										<view class="interest" v-if="lb_index<3"
											:class="{interestA:lb_item=='运动健身',interestB:lb_item=='室内娱乐',interestC:lb_item=='酒吧',interestD:lb_item=='自由行',interestE:lb_item=='干饭',interestF:lb_item=='桌游',}"
											v-for="(lb_item,lb_index) in item.interest" :key="lb_index">{{lb_item}}
										</view>
									</view>


								</view>
								<view class="lb4">
									<image class="huo" src="../../static/index/huo.png" mode=""></image>
									<view class="">
										{{item.base_liveness}}
									</view>
								</view>
							</view>

						</z-swiper-item>
					</z-swiper> -->
		</view>
	</view>

	<view style="height: 84rpx;"></view>

	<view v-if="wqActivityList.length>0">


		<!-- 往期活动 -->
		<view class="colonn">
			<view class="roww center_center">
				<image src="/static/Component 344@2x.png" style="width:56rpx;height:56rpx;"></image>
				<view class="wanglaihutxt">往期活动</view>
				<view class="allline"></view>
				<view class="morens" @click.stop="toWqs"> 查看更多>> </view>
				<view style="width: 38rpx;"></view>
			</view>
		</view>
		<view style="height: 38rpx;"></view>

		<view class="colonn">
			<view class="itemwangqiview colonn" v-for="(item,index) in wqActivityList"
				@click.stop="toInfo(item)"
			>
				<view class="imgassa pore">
					<image class="imgassa poab" style="top:0rpx;left:0rpx;" :src="item.cover" mode="aspectFill"></image>
					<view class="poab" style="bottom:20rpx;right:20rpx;">
						<view class="roww">
							<view class="renview center_center roww">
								<image src="/static/wodeicon.png" style="width: 30rpx;height: 30rpx;"></image>
								<view class="">{{item.user_num}}人</view>
							</view>
							<view style="width: 20rpx;"></view>
							<view class="renview center_center roww" style="background-color: #F8B800;">
								<view class="">{{item.cate}}</view>
							</view>
						</view>
					</view>
				</view>
				<view style="padding:10rpx 26rpx;" class="colonn">
					<view class="gouliangs txtShowLength">
						{{item.title}}
					</view>
					<view class="gouliangs txtShowLength" style="color: #676767;font-size: 28rpx;">
						地址：{{item.address}}
					</view>
					<view style="height: 10rpx;"></view>
				</view>
			</view>
		</view>
	</view>

	<view style="height: 100rpx;"></view>




	<!-- 底部tabbar -->
	<view class="tabbar" style="z-index: 2000;">
		<view class="tabbar_for" v-for="(item,index) in tabbarlist" :key="index" @click.stop="navswich(item.id)">
			<image class="tabbar_img" :class="{tabbar_img_3:item.id==2}" :src="item.img" mode=""></image>
			<view class="tabbar_name" :class="{tabbar_active:item.id==0}">
				<block v-if="index!=2">{{item.name}}</block>
			</view>
		</view>
	</view>
	<!-- -->
</view>

<loadApp v-if="showApp" @closeClick="showLoadApp"></loadApp>

<image src="https://ta.imjiayi.com/upload/upload/Component 302@2x.png" class="w-126 h-126 myxaiosa"
	@click="showLoadApp()"
	></image>

<view class="colonn center_center huuibeijing" style="z-index: 50000000;" v-if="showuquanAlert">
	<view class="yinsitanh colonn center_center">
		<view style="font-weight: bold;">个人隐私保护提示</view>
		<view style="height: 10rpx;"></view>
		<view style="font-size: 30rpx;">
			我们会按照相关法律法规的规定及<text @click.stop="toyinsi"
				style="color: red;">《出来玩就现在小程序隐私保护指引》</text>，遵守正当合法、必要原则收集和使用你的个人信息。
			为了向你提供正常的服务，我们可能会申请相机、麦克风、存储照片，手机号，当前位置定位等权限，相应权限并不会默认开启或强制收集信息。权限开启后，你可以随时通过设置选项关闭权限。你不同意开启权限，将不会影响其他非相关业务功能的正常使用。
		</view>
		<view style="height: 20rpx;"></view>
		<view class="roww rowsa w-450">
			<view class="notongyi" @click.stop="showuquanAlertClick">不同意</view>
			<view class="tongyi pore roww center_center">
				<div>同意</div>
				<button id="agree-btn" open-type="agreePrivacyAuthorization" @agreeprivacyauthorization="handleAgree"
					class="tongyisa"></button>
			</view>
		</view>
	</view>
</view>

</view>
</template>
<script>
	import Amap from '../../libs/amap-wx.130.js'

	let privacyHandler = {}

	wx.onNeedPrivacyAuthorization(resolve => {
		console.log("触发：onNeedPrivacyAuthorization", resolve)
		if (typeof privacyHandler === 'function') {
			privacyHandler(resolve)
		}
	})

	export default {
		data() {
			return {
				showuquanAlert: false,

				moveX: 2,
				shangjialist: [],
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				map: null,
				list1: [],
				// 经度
				lat: getApp().globalData.lat,
				// 纬度
				lng: getApp().globalData.lng,
				count: 5,
				value: 2,
				current: 0,
				current1: 0,
				slideCustomStyle: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '36rpx'
				},
				options: {
					effect: 'cards',
					cardsEffect: {
						rotate: false,
						perSlideOffset: 18,
						perSlideRotate: 2,

					},

					// 同时显示数量
					slidesPerView: 1,
					// 默认显示第3个
					initialSlide: 2,
					// 禁止无限滑动
					loop: false,

				},
				paihanglist: [
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg',
					'https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg',
				],
				Catelist: [],
				list111: [],
				list222: [],
				value6: 0,
				// 底部tabbar
				tabbarlist: [{
						id: 0,
						img: "../../static/TabImg/tabbar1.png",
						name: "首页"
					},
					{
						id: 1,
						img: "../../static/TabImg/tabbar22.png",
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
				tokenValue: null,
				wxcode: "",

				showApp: false,


				osName: "", //安卓或者苹果
				wqActivityList: [],
				fenzhanList:[],//分站
				citySel:"济南市",
			}
		},
		onLoad() {
			var citySel=uni.getStorageSync("citySel");
			if(citySel){
				this.citySel=citySel;
			}


			uni.getSystemInfo({

				success: (res) => {
					this.osName = res.osName;
				},
				complete: (res) => {
					console.log("新下", res);
				}

			})


			uni.login({
				complete: (res) => {
					console.log("登录code", res)
					this.wxcode = res.code
				}
			})


			uni.hideTabBar({
				animation: false,
			});




			this.getYejian();
		},
		onShow() {
			this.getIsToken();
		},
		mounted() {
			// 轮播图
			this.slider(this.token);
			// 活动导航
			this.actCate(this.token);
			// 最新活动
			this.act();
			// 商家推荐
			this.business();
			// 排行榜
			this.paihang();
			// 获取奋战
			this.getFenzhan();
		},

		onShareAppMessage(res) {

			return {
				title: '出来玩，就现在！',
				path: '/pages/index/index',
				'imageUrl': 'https://jiayiwangluo.oss-cn-beijing.aliyuncs.com/shop_comment/20240708171949.png'
			}
		},
		onShareTimeline: function () {
		     return {
		     	title: '出来玩，就现在！',
		     	path: '/pages/index/index',
		     	'imageUrl': 'https://jiayiwangluo.oss-cn-beijing.aliyuncs.com/shop_comment/20240708171949.png'
		     }
		 },
		methods: {
			
			cityChange(res){  
				console.log("===cityChange",res);
				var city=this.fenzhanList[parseInt(res.detail.value)].nickname;
				this.citySel=city;
				uni.setStorageSync("citySel",city);
				
				// 轮播图
				this.slider(this.token);
				// 活动导航
				this.actCate(this.token);
				// 最新活动
				this.act();
				// 商家推荐
				this.business();
				// 排行榜
				this.paihang();
				
			},
			
			getFenzhan(){  
				uni.request({
					url: this.baseurl + "/api/area/getCitySite",
					method: 'POST',
					data: {
						'token': this.token,
						num:3,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						console.log("只管女里",res);
						this.fenzhanList=res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
			
			
			
			toInfo(item){
				uni.navigateTo({
					url:"/pages1/wqActivity/wqActivity?id="+item.id
				})
			},
			toWqs(){
				uni.navigateTo({
					url:"/pages1/activityWQList/activityWQList"
				})
			},
			// 获取往期列表哦
			getWqActivity() {
				var url = "/api/act/pastActList";
				if (!this.tokenValue) {
					url = "/api/IosVisitor/pastActList";
				}
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						'token': this.token,
						num:3,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						var data = res.data;
						if (data.code == 1) {
							console.log("往期活动", res);
							this.wqActivityList = res.data.data;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},

			// 位置定位
			alertGps() {

				wx.getSetting({
					success: (res) => {
						console.log("当前设置", res.authSetting)
						console.log("当前设置", JSON.stringify(res))
						var jsonStr = JSON.stringify(res);
						if (jsonStr.indexOf('"scope.userFuzzyLocation":true') >= 0) {
							console.log("直接获取位置")
							this.getWeizhi()
						} else {
							console.log("需要授权获取位置")
							uni.showModal({
								title: '授权',
								content: '需要获取您的位置信息，',
								success: (res) => {
									if (res.confirm) {
										this.getWeizhi();
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
					}
				})


			},

			getWeizhi() {
				// getFuzzyLocation
				// getLocation
				uni.getFuzzyLocation({
					type: 'wgs84',
					success: (res) => {
						const latitude = res.latitude
						const longitude = res.longitude
						console.log("微信鼎和", res)
						uni.setStorageSync("lat", latitude)
						uni.setStorageSync("lng", longitude)
						getApp().globalData.lat = latitude;
						getApp().globalData.lng = longitude;
						this.lat = latitude;
						this.lng = longitude;
						// 活动导航
						this.actCate(this.token);
						// 最新活动
						this.act();
						// 商家推荐
						this.business();

					},
					fail: res => {
						uni.showToast({
							title: "定位失败",
							icon: 'none'
						})
					},
					complete: res => {
						console.log("结果", res)
					}
				})
			},

			getIsToken() {
				var token=uni.getStorageSync("token")
				
				var url = "/api/IosVisitor/checkToken";
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						'token': token,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: token
					},
					success: res => {
						var data = res.data;
						if (data.code == 0) {
							getApp().globalData.token = null;
							this.token = null;
							uni.removeStorageSync("token");
						}
						if(data.data.is_reg==0){
							uni.setStorageSync("loginInfo",{'status':0})
						}
						this.onshowPage();
					},
					fail: () => {},
					complete: () => {}
				});
			},

			onshowPage() {
				var token = uni.getStorageSync("token");
				if (token) {
					this.tokenValue = uni.getStorageSync("token");
				}

				// 最新活动
				this.act();
				// 往期活动
				this.getWqActivity();

				// #ifdef  MP-WEIXIN
				wx.getPrivacySetting({
					success: res => {
						console.log("是否需要授权：", res.needAuthorization, "隐私协议的名称为：", res.privacyContractName)
						if (!res.needAuthorization) {
							var lat = uni.getStorageSync("lat")
							if (!lat) {
								this.alertGps()
							} else {
								this.getWeizhi()
							}
						} else {
							this.showuquanAlert = res.needAuthorization;
						}
					},
					fail: () => {},
					complete: () => {},
				})
				// #endif
			},
			showuquanAlertClick() {
				this.showuquanAlert = !this.showuquanAlert;
			},
			handleAgree(res) {
				console.log("handleAgree", res);
				this.showuquanAlert = false;

				var lat = uni.getStorageSync("lat")
				if (!lat) {
					this.alertGps()
				} else {
					this.getWeizhi()
				}

			},
			privacyHandler() {
				if (wx.getPrivacySetting) {
					wx.getPrivacySetting({
						success: res => {
							console.log("是否需要授权：", res.needAuthorization, "隐私协议的名称为：", res.privacyContractName)
							if (res.needAuthorization) {
								// 其他操作，如显示隐私政策弹窗
							} else {
								this.$emit("agree")
							}
						},
						fail: () => {},
						complete: () => {},
					})
				} else {
					// 低版本基础库不支持 wx.getPrivacySetting 接口，隐私接口可以直接调用
					this.$emit("agree")
				}
			},

			toyinsi() {
				// #ifdef  MP-WEIXIN
				wx.openPrivacyContract({
					success: () => {}, // 打开成功
					fail: () => {}, // 打开失败
					complete: () => {}
				})
				// #endif
			},
			authorization(res) {
				console.log("authorization", res);
			},
			agreeprivacyauthorization(res) {

				// #ifdef  MP-WEIXIN
				wx.getPrivacySetting({
					success: res => {
						console.log(
							res
						) // 返回结果为: res = { needAuthorization: true/false, privacyContractName: '《xxx隐私保护指引》' }
						if (res.needAuthorization) {
							// 需要弹出隐私协议
							this.setData({
								showPrivacy: true
							})
						} else {
							// 用户已经同意过隐私协议，所以不需要再弹出隐私协议，也能调用已声明过的隐私接口
							// wx.getUserProfile()
							// wx.chooseMedia()
							// wx.getClipboardData()
							// wx.startRecord()
						}
					},
					fail: () => {},
					complete: () => {}
				})
				// #endif
			},



			hideview() {},
			showLoadApp() {
				this.showApp = !this.showApp;
			},


			getYejian() {
				wx.getSystemInfo({
					success: function(res) {
						// 判断是否开启了夜间模式
						var nightMode = res.theme === 'dark';
						console.log('夜间模式状态:', nightMode);
					}
				});
			},

			// showApp() {
			// 	uni.showToast({
			// 		title: "完整功能请下载APP",
			// 		icon: "none"
			// 	})
			// },
			tokenValueBaocun() {
				uni.setStorageSync("token", this.tokenValue)
			},



			acccccc(e) {
				console.log(e.detail.current);
				this.moveX = e.detail.current;


			},
			// 最新活动
			act() {
				this.current = 0;


				var url = '/api/act/actList';
				if (!this.tokenValue) {
					url = "/api/IosVisitor/actList";
				}


				uni.request({
					url: this.baseurl + url,
					method: 'POST',

					data: {
						cate_id: 0,
						page: 1,
						num: 20,
						sort: 3,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						this.list111 = res.data.data;

						// this.list111[1].vip_code = 1;

						for (var a = 0; a < this.list111.length; a++) {
							var rennum = this.list111[a].p_num_str.split("/");
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 排行榜
			paihang() {

				var url = '/api/user/userRank';
				if (!this.tokenValue) {
					url = "/api/IosVisitor/userRank";
				}

				uni.request({
					url: this.baseurl + url,
					method: 'POST',

					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token,
					},
					success: res => {
						if (res.data.code == 1001) {
							uni.showToast({
								title: "请先登录",
								icon: 'none'
							})
							setTimeout(res => {
								uni.reLaunch({
									url: "/pages/Login/Login"
								})
							}, 1000)
						} else if (res.data.code == 1) {
							this.paihanglist = res.data.data;
						}

					},
					fail: () => {},
					complete: () => {}
				});
			},


			business() {

				var url = '/api/shop/shopList';
				if (!this.tokenValue) {
					url = "/api/IosVisitor/shopList";
				}



				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token
					},
					data: {
						page: 1,
						num: 3,
						cate_id: 0,
						sort: 3,
						lat: this.lat,
						lng: this.lng,
						money_max: '300',
						money_min: '0',
						keywords: '',
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						// console.log("商家", res);
						this.shangjialist = res.data.data;
						for (let i = 0; i < this.shangjialist.length; i++) {
							let lat1 = this.lat;
							let lng1 = this.lng;
							let lat2 = this.shangjialist[i].lat;
							let lng2 = this.shangjialist[i].lng;
							this.shangjialist[i].distance = this.space(lat1, lng1, lat2, lng2);
							// console.log(this.shangjialist[i].distance);
						}

					},
					fail: () => {},
					complete: () => {}
				});
			},
			space(lat1, lng1, lat2, lng2) {
				// console.log(lat1, lng1, lat2, lng2)
				var radLat1 = lat1 * Math.PI / 180.0;
				var radLat2 = lat2 * Math.PI / 180.0;
				var a = radLat1 - radLat2;
				var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
				var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
					Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
				s = s * 6378.137;
				s = Math.round(s * 10000) / 10000;
				return s // 单位千米
			},
			// 活动分类
			actCate(e) {
				// console.log("活动分类",e);

				var url = '/api/act/actCate';
				if (!this.tokenValue) {
					url = "/api/IosVisitor/actCate";
				}

				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token
					},
					data: {
						page: 1,
						num: 6,
						city:uni.getStorageSync("citySel"),
					},

					success: res => {
						// console.log("活动分类", res);
						this.Catelist = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 位置信息

			// 获取轮播图
			slider(token) {
				var url = "/api/page/homeSlider";
				if (!this.tokenValue) {
					url = "/api/IosVisitor/homeSlider";
				}

				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					data: {
						
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: token
					},
					success: res => {
						// console.log( "轮播图",res.data.data);
						// let over=res.data.data;
						this.list1 = res.data.data;
						// res.data.data.forEach((item) => {
						// 	// console.log(item.img);
						// 	this.list1.push(item.img);
						// 	// console.log(this.list1);
						// })
						// for(let k of over){
						// 	// console.log(k.img);
						// 	this.list1.push(k.img)
						// }
					},
					fail: () => {},
					complete: () => {}
				});
			},
			//跳转详情
			herf(rule_name, rno) {
				var path;
				if (rule_name == 'act') {
					path = '../../pages_huodong/ActivityDetail/ActivityDetail?act_no=';
				} else if (rule_name == 'shop') {
					path = '../../pages_huodong/Detail/Detail?lat=${lats}&lng=${lngs}&shop_no=';
				} else if (rule_name == 'act_show') {
					path = '../../pages_wode/PastDetail/PastDetail?id=';
				} else if (rule_name == 'page') {
					path = '../../pages_huodong/shop/shop?shop_no=';
				}
				console.log(path)
				uni.navigateTo({
					url: `${path}` + rno,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			shangjiatuijian(shop_nos, lats, lngs) {
				uni.navigateTo({
					url: `../../pages_huodong/Detail/Detail?shop_no=${shop_nos}&lat=${lats}&lng=${lngs}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},

			// 六大板块跳转
			onpicture(id, sort, item) {

				uni.setStorageSync("activityTypeInfo", item)

				uni.navigateTo({
					url: `../../pages_huodong/SixModules/SixModules?id=${id}&sort=${sort}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			scrollindex(id, index, type) {
				if (type == 0) {
					this.current = index;

					var url = '/api/act/actList';
					if (!this.tokenValue) {
						url = "/api/IosVisitor/actList";
					}

					uni.request({
						url: this.baseurl + url,
						method: 'POST',
						header: {
							xcx: 1,
							token: this.token
						},
						data: {
							cate_id: id,
							page: 1,
							num: 3,
							sort: 3,
						city:uni.getStorageSync("citySel"),
						},

						success: res => {
							// console.log("最新活动", res);
							this.list111 = res.data.data;
						},
						fail: () => {},
						complete: () => {}
					});
				} else if (type == 1) {
					this.current1 = index;
					// console.log(index)

					var url = '/api/shop/shopList';
					if (!this.tokenValue) {
						url = "/api/IosVisitor/shopList";
					}

					uni.request({
						url: this.baseurl + url,
						method: 'POST',
						header: {
							xcx: 1,
							token: this.token
						},
						data: {
							page: 1,
							num: 3,
							cate_id: id,
							sort: 3,
							lat: this.lat,
							lng: this.lng,
							money_max: '',
							money_min: '',
							keywords: '',
						city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log("商家", res);
							this.shangjialist = res.data.data;
							for (let i = 0; i < this.shangjialist.length; i++) {
								let lat1 = this.lat;
								let lng1 = this.lng;
								let lat2 = this.shangjialist[i].lat;
								let lng2 = this.shangjialist[i].lng;
								this.shangjialist[i].distance = this.space(lat1, lng1, lat2, lng2);
								// console.log(this.shangjialist[i].distance);
							}

						},
						fail: () => {},
						complete: () => {}
					});
				}
				// console.log(this.current)
			},
			activitys(act_on) {
				// console.log("编号", v);
				uni.navigateTo({
					url: '../../pages_huodong/ActivityDetail/ActivityDetail?act_no=' + act_on,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});

			},
			// 跳转个人中心
			navmy(uuid) {
				uni.navigateTo({
					url: '/pages_wode/PersonalCenter/PersonalCenter?uuid=' + uuid,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// tabbar跳转
			navswich(ID) {
				console.log("tabbar跳转",ID);
				if (ID == 0) {
					uni.switchTab({
						url: ''
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
					// 	url: ''
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
<style lang="scss" scoped>
	@import url(index.css);

	.asdsad {
		background-color: #F2F2F2;
		color: #d9d9d9;
		font-size: 30rpx;
	}

	.vip1 {
		width: 324rpx;
		height: 342.63rpx;
	}

	.swiper_itemE {
		width: 480rpx !important;
		transform: translate(400%, 0px) translateZ(0px) scale(1.14) !important;
	}

	.swiper_itemD {
		width: 480rpx !important;
		transform: translate(300%, 0px) translateZ(0px) scale(1.14) !important;
	}

	.swiper_itemC {
		width: 480rpx !important;
		transform: translate(200%, 0px) translateZ(0px) scale(1.14) !important;
	}

	.swiper_itemB {
		width: 480rpx !important;
		transform: translate(100%, 0px) translateZ(0px) scale(1.14) !important;
	}

	.swiper_itemA {
		width: 480rpx !important;
		transform: translate(0%, 0px) translateZ(0px) scale(1.14) !important;
	}


	.huo {
		width: 25rpx;
		height: 32rpx;
		margin-right: 20rpx;
	}

	// 活跃排行
	.base_sex {
		width: 26rpx;
		height: 26rpx;
	}

	.auth {
		width: 30rpx;
		height: 30rpx;
	}

	.vip_code {
		width: 71rpx;
		height: 32rpx;
		margin-left: 8rpx;
		margin-right: 10rpx;
	}

	.hd_address {
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.hd_money {
		height: 32rpx;
		font-size: 24rpx;
		text-align: center;

		font-family: Inter-Regular, Inter;
		// padding: 0rpx 6rpx 0rpx 10rpx; 
		color: #E13600;
		background: rgba(225, 54, 0, 0.1);
		border-radius: 3px 3px 3px 3px;
		opacity: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #E13600;
		padding: 0rpx 5rpx;
	}

	.hd_name {
		font-size: 28rpx;
		width: 218rpx;
		margin-left: 4rpx;
		font-family: Inter-Regular, Inter;
		overflow: hidden;
		color: #000000;
		font-weight: 800;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.hd_title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.hd_bottom {
		position: absolute;
		top: 365rpx;
		left: 20rpx;
		right: 10rpx;
	}

	.hdzd {
		width: 104rpx;
		height: 40rpx;
		position: absolute;
		top: 26rpx;
		right: 26rpx;
	}

	.interestF {

		background: rgba(143, 227, 4, 0.5);
	}

	.interestE {

		background: rgba(212, 38, 255, 0.5);
	}

	.interestD {

		background: rgba(0, 209, 84, 0.5);
	}

	.interestC {
		background: rgba(238, 15, 15, 0.5);
	}

	.interestB {

		background: rgba(207, 152, 9, 0.5);
	}

	.interestA {
		background: rgba(53, 109, 218, 0.5);
	}

	.interest {
		padding: 6rpx 22rpx 6rpx 20rpx;
		border-radius: 100rpx;
		font-size: 20rpx;
		margin-right: 8rpx;
	}

	.lb4 {
		display: flex;
		align-items: center;
		position: absolute;
		top: 46rpx;
		right: 30rpx;
		font-size: 32rpx;
		background-color: #F8B800;
		border-radius: 50rpx;
		padding: 10rpx 28rpx;
		color: white;
	}

	.lb3 {
		display: flex;
		align-items: center;
		position: absolute;
		top: 118rpx;
		left: 26rpx;
		font-size: 20rpx;
		color: white;
	}

	.lb2 {
		display: flex;
		align-items: center;
		position: absolute;
		top: 82rpx;
		left: 30rpx;
		color: white;
		font-size: 20rpx;
	}

	.lb1 {
		display: flex;
		align-items: center;
		position: absolute;
		left: 26rpx;
		top: 30rpx;
		font-size: 40rpx;
		color: white;
	}

	.lb {
		display: flex;
		justify-content: space-around;
		position: absolute;
		border-radius: 0 0 20rpx 20rpx;
		bottom: 10rpx;
		left: 0;
		right: 0;
		height: 188rpx;
		background-color: rgba(0, 0, 0, 0.2);
	}

	.zebraswiper {
		position: relative;
	}

	.image {
		height: 640rpx;
		width: 100%;
		border-radius: 24rpx;
		// box-shadow: 0px 0px 30rpx rgba(0, 0, 0, 0.2);
		//  margin: 0rpx 30rpx;
		z-index: 1;
	}

	.nowactive {
		transform: scale(1.1);
		transition: all 0.2s ease-in 0s;
		z-index: 20;
	}

	.notact {
		transform: scale(0.9);
		transition: all 0.2s ease-in 0s;
	}

	/* 商家推荐 */
	.tjv {
		padding-right: 38rpx;
	}

	.tjv1 {
		border-radius: 20rpx;
		background-color: white;
		padding: 15rpx;
		margin: 30rpx 0;
	}

	.tjv2 {
		display: flex;
		/* justify-content: space-around; */
	}

	.tjv3 {}

	.tjv4 {
		width: 212rpx;
		height: 266rpx;
		border-radius: 20rpx;
	}

	.tjv5 {
		text-align: center;
		display: flex;
		// flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10rpx 0;
	}

	.tjv6 {
		width: 390rpx;
		font-size: 25rpx;
		font-weight: 600;
		overflow: hidden;
		margin-left: 20rpx;
	}

	.tjv7 {
		margin-bottom: 15rpx;
		font-size: 32rpx;
		width: 390rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tjv8 {
		width: 420rpx;
		display: flex;
		margin-bottom: 10rpx;
		align-items: center;
	}

	.tjv9 {
		display: flex;
	}

	.tjv10 {
		background-color: #f8b800;
		border: 1rpx solid #F8B800;
		color: #fff;
		border-radius: 5rpx;
		// font-weight: 100;
		font-size: 28rpx;
		padding: 0rpx 10rpx;
		text-align: center;
		/* width: 70rpx; */
		/* color: white; */
		margin-right: 10rpx;

	}

	.tjv10_10 {

		background: #D24E15;
		border-radius: 5rpx;
		// font-weight: 100;
		font-size: 28rpx;
		padding: 6rpx 14rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		margin-right: 10rpx;
	}

	.tjv11 {
		margin-left: 20rpx;
		font-size: 22rpx;
		font-weight: 400;
		position: absolute;
		right: 46rpx;
	}

	.tjv12 {
		width: 400rpx;
		display: flex;
		align-items: center;
		margin-bottom: 10rpx;
	}

	.tjv13 {}

	.tjv14 {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50rpx;
	}

	.outimg {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50rpx;
		position: relative;
		left: -16rpx;
	}

	.outimgs {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50rpx;
		position: relative;
		left: -32rpx;

	}

	.tjv15 {
		margin-left: 15rpx;
		font-size: 22rpx;
		font-weight: 400;
		overflow: hidden;
		width: 300rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		position: absolute;
		right: 46rpx;
	}

	.tjv16 {
		width: 400rpx;
		align-items: baseline;
		display: flex;
		flex-direction: column;
		margin-top: 10rpx;
		color: #939393;
	}

	.tjv17 {
		font-size: 24rpx;

		font-weight: 400;
	}

	.tjv18 {

		// color: #9999;
		margin-top: 5rpx;
		font-size: 24rpx;
		font-weight: 400;
	}

	.tjv19 {
		border: 1rpx dashed #eeedf1e8;
		width: 400rpx;
		margin: 17.5rpx 0;
	}

	.tjv20 {
		width: 400rpx;
		display: flex;
		align-items: center;

		>view {
			color: #9999;
			font-size: 25rpx;
			align-items: center;
		}
	}

	.tjv21 {
		width: 22rpx;
		height: 26rpx;
	}

	/deep/.tjv22 {
		margin: -4rpx 10rpx 0 10rpx;
	}

	/* 最新活动 */
	.dos {
		display: none;
	}

	.dog {
		display: block;
	}

	// 头像评论
	.group {
		width: 400rpx;
		display: flex;
		white-space: nowrap;
		align-items: center;
		height: 50rpx;
	}

	.group_text {
		white-space: nowrap;
		width: 293rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: 15rpx;
		font-size: 28rpx;
		font-weight: 400;
		font-family: Inter-Regular, Inter;

	}

	.zuduirstx11 {
		/* 组队人数头像 */
		width: 40rpx;
		height: 40rpx;
		border-radius: 38rpx;
		// margin-left: -20rpx;
	}

	.zuduirstx {
		/* 组队人数头像 */
		width: 40rpx;
		height: 40rpx;
		border-radius: 38rpx;
		margin-left: -20rpx;
	}

	.hdv7 {
		width: 302rpx;
		height: 64rpx;
		background-color: white;
		box-shadow: 0px 0px 20rpx 0px rgba(0, 0, 0, 0.15);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50px 50px 50px 50px;
		position: absolute;
		top: 276rpx;
		left: 0rpx;
		right: 12rpx;
	}

	.hdv4 {
		display: flex;
		align-items: center;
	}

	.hdv3 {
		display: flex;
		align-items: center;

	}

	.hdv1 {
		width: 100%;
		// height: 410rpx;
		position: relative;
		border: 1rpx solid #f2f2f2;
		border-radius: 20rpx;
		// top: -347rpx;
	}

	.hdimg {
		// width: 324rpx;
		// height: 316rpx;
		width: 284rpx;
		height: 276rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		position: relative;
		top: 20rpx;
		left: 20rpx;
	}

	.hdimg1 {
		width: 40rpx;
		height: 40rpx;
		margin: 0 10rpx;
	}

	.hdimg2 {
		color: #F8B800;
	}

	.hdview {
		display: inline-block;
		margin-right: 46rpx;
		font-weight: 600;
		position: relative;
		font-size: 22rpx;
		background-color: white;
		border-radius: 20rpx;
		padding-bottom: 10rpx;
		height: 498rpx;


	}

	.tuaa {
		background-image: url(https://ta.imjiayi.com/upload/upload/黑钻竖版1111111.gif);
		background-size: 100% 100%;
		position: absolute;
		top: -20rpx;
		left: -20rpx;
		z-index: 0;
	}

	/* scroll滑动模块 */
	.scroll-Y {
		height: 300rpx;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 674rpx;
	}

	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 120rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: #000000;
		background-color: rgba(163, 163, 163, 0.08);
		border-radius: 50rpx;
		text-align: center;
		padding: 0rpx 10rpx;
		margin-right: 20rpx;
		// margin-bottom: 38rpx;
		font-size: 28rpx;
	}

	.active {
		background-color: #F8B800;
		color: white;
	}

	.slidev3 {
		display: flex;
		justify-content: space-around;
	}

	/* 最新活动 */
	.activity_v3 {
		font-size: 35rpx;
		font-weight: 600;
		margin-left: 18rpx;
	}

	.activity_v2 {
		display: flex;
		align-items: center;
		font-size: 16rpx;
		font-weight: 900;
	}

	.activity_v1 {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0;
		width: 300rpx;
	}

	.activity_hy {
		display: flex;
		justify-content: space-between;
		margin-top: 48rpx;
		margin-bottom: 28rpx;
	}

	.activityimg {
		width: 60rpx;
		height: 60rpx;
	}

	.activityimg1 {
		width: 30rpx;
		height: 30rpx;
	}

	/* 活动标签 */
	.picture_v1 {
		display: flex;
		flex-wrap: wrap;
		margin-top: 60rpx;
		padding-right: 38rpx;


	}

	.picture_v2 {
		flex: 1;
		text-align: center;
	}

	.picture_v3 {
		width: 216rpx;
		height: 106rpx;
		border-radius: 20rpx;
	}

	.picture_v4 {
		margin: 20rpx 0;
	}

	.onimg {
		width: 100%;
		height: 400rpx;
		border-radius: 20rpx;
	}

	.vip {
		background-image: linear-gradient(#FFD7AF, #FFEDDA);
	}

	.vipb {
		position: absolute;
		z-index: 1;
	}

	.viphdv1 {
		width: 100%;
		/* border: 1rpx solid #f2f2f2; */
		border-radius: 20rpx;
	}

	.viphdv7 {
		height: 64rpx;
		/* background-color: white; */
		/* box-shadow: 0px 0px 20rpx 0px rgba(0, 0, 0, 0.15); */
		display: flex;
		/* align-items: center; */
		justify-content: center;
		border-radius: 50px 50px 50px 50px;
		position: absolute;
		top: 292rpx;
		left: 110rpx;
		right: 12rpx;
		font-size: 28rpx;
		color: #da782d;
	}

	/* 轮播图 */
	.onswiper {
		width: 100%;
		height: 400rpx;
		border-radius: 20rpx;
		background: #F2F2F2;
	}

	.swiper-item {
		margin: 0 10rpx;
	}

	.content {
		padding: 0rpx 0rpx 200rpx 38rpx;
		background: #F2F2F2;
	}
</style> -->