<template>
	<view style="overflow: hidden;">
		<!-- <image
		style="width:674rpx;height: 138rpx;bottom: 50rpx;z-index: 40000;background-color: red;"
		src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/tuichuchu.png"></image>
		 -->
		<view class="header" style="height:750rpx;">
			<swiper class="swiper1">
				<swiper-item class="swiper1" v-for="(item,index) in list.content_img">
					<image class="cover " :src="item+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
						style="height:750rpx;" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 活动基本信息 基本 被噻克 -->
		<view class="basic_View123" :class="{
		}">
			<!-- <view class="basic_time">
				<span style="font-size: 42rpx;margin-right: 20rpx;">{{list.money}}</span>
				<span>{{list.time_str}}</span>
			</view> -->

			<!-- <view class="basic_border"></view> -->
		</view>

		<view class="box" :class="{
			'basic_Viewbg':nightMode
		}">
			<view class="basic_View1">

				<view class="basic_title">
					<view class="" :style="{
						'color':nightMode?'white':'black'
					}">{{list.title}}</view>
				</view>

				<view class="shijiaview pore">
					<image src="https://ta.imjiayi.com/upload/upload/发布活动_slices/Rectangle 1639@2x.png"
						class="shijiaviews poab" style="top: 0rpx;left:0rpx;"></image>
					<view class="colonn rowsb poab" style="top: 0rpx;left:0rpx;">
						<view class="h-25"></view>
						<view class="roww">
							<view class="w-25"></view>
							<image class="w-40 h-40 m-right-17"
								src="https://ta.imjiayi.com/upload/upload/未加入_slices (2)/Component 264@2x.png">
							</image>
							<view class="shijian1">
								活动开始时间：{{list.s_time_str}}
							</view>
						</view>
						<view class="h-25"></view>
						<view class="roww">
							<view class="w-25"></view>
							<image class="w-40 h-40 m-right-17"
								src="https://ta.imjiayi.com/upload/upload/未加入_slices (2)/Component 264@2x.png">
							</image>
							<view class="shijian1">
								活动结束时间：{{list.e_time_str}}
							</view>
						</view>
						<view class="h-25"></view>
					</view>
				</view>
				<view class="h-20"></view>

				<view class="view1" v-if="list.is_prepay">
					<image src='../static/Component 306@2x.png' class="view1_img">
					<!-- <image src='../static/Component 308@2x.png' class="view2_img"> -->
					<view class="w-20"></view>
					<view class="guige" style="color:#F8B800">{{ActTicketList[0].money}}/人</view>
				</view>
				<view class="view1" v-else>
					<view class="basic_cate1">{{list.money}}</view>
					<view class="basic_cate2">{{list.cate}} | {{list.zong}} 人 ·
						{{list.sex == 0 ? '男女不限' : list.sex == 1 ? '限男生' : '限女生'}}|{{list.pay_type}}
					</view>
				</view>
				<view class="h-20"></view>
				<!-- <view class="huanhang">
					<view class="guige roww center_center" 
					v-for="(item,index) in ActTicketList">
						<view style="color: white;">{{item.name}}：</view>
						<view style="color:#F8B800">￥{{item.money}}/人</view>
					</view>
				</view> -->

			</view>
			<!-- 组队要求 -->
			<!-- <view class="yaoqiu">
				<view class="basic_requirement">
					<view class="basic_text_one">
						<image class="basic_img" src="https://ta.imjiayi.com/upload/upload/积分 (1) 1@2x.png" mode=""></image>
						<text>信誉积分</text>
						<text class="basic_text" v-if="list.credit>0">{{list.credit}}分以上</text>
						<text v-else>无要求</text>
					</view>
					<view class="basic_text_one">
						<image class="basic_img" src="https://ta.imjiayi.com/upload/upload/我的 (3) 2@2x.png" mode=""></image>
						<text class="basic_text" v-if="list.vip==0">不限</text>
						<text class="basic_text" v-if="list.vip==1">会员用户</text>
					</view>
				</view>
			</view> -->
			<!-- 粗线 -->
			<view class="cuxian" v-if="!nightMode"></view>
			<view class="cuxian22" v-if="nightMode"></view>
			<!-- 商家基本信息 -->
			<view class="shop">
				<view class="shop_basic">
					<view class="" :style="{
						'color':nightMode?'white':'black'
					}">
						<view class="shop_name">{{list.shop.name}}</view>
						<view class="shop_addname txtShowLength">{{list.add_name}}</view>
						<view class="infoaddr txtShowLength" :style="{
							'color':nightMode?'white':'black'
						}">{{list.add_detail}}</view>
						<view class="shop_distance">距您当前位置<text>{{distance}}</text></view>
					</view>
					<view class="shop_call">
						<view class="shop_call_view"
							@click="openLocation(list.lat,list.lng,list.shop.name,list.add_detail)"
							@longtap="showuquanAlertClick"
							>
							<block v-if="!nightMode">
								<image class="shop_call_img" src="../static/daohang.png" mode=""></image>
								<view class="">导航</view>
							</block>
							<block v-if="nightMode">
								<image class="shop_call_img"
									src="https://ta.imjiayi.com/upload/upload/已加入_slices/Component 366@2x.png" mode="">
								</image>
								<view class="" style="color: white;">导航</view>
							</block>
						</view>
						<view style="width: 25rpx;"></view>
						<view class="shop_call_view" @click="onPhone(list.shop.shop_phone)">


							<block v-if="!nightMode">
								<image class="shop_call_img" src="../static/phone.png" mode=""></image>
								<view class="">电话</view>
							</block>
							<block v-if="nightMode">
								<image class="shop_call_img"
									src="https://ta.imjiayi.com/upload/upload/已加入_slices/Component 364@2x.png" mode="">
								</image>
								<view class="" style="color: white;">电话</view>
							</block>

						</view>

						<view style="width: 10rpx;"></view>
					</view>
				</view>

				<view class="basic_border"></view>
				<!-- <view class="renzheng" v-if="list.is_prepay">
					<image class="photo" :src="list.site[0]['headimg']" mode=""></image>
					<view>
						<view class="nickname">{{list.site[0].nickname}}</view>
						<view class="renzheng_view1">官方企划活动需提前支付活动费用哦</view>
					</view>
				</view>
				<view class="h-20"></view> -->
				<!-- <view class="shengyu" v-if="list.is_prepay">
					<view class="shengyu_left">
						{{list.p_num_acc}}人一起
					</view>
					<view class="shengyu_right" style="color: #F8B800;">
						仅剩{{list.residue}}个名额
					</view>
				</view> -->


				<view class="shengyu">
					<view class="shengyu_left">
						{{list.residue}}/{{list.max_num}}人
					</view>


					<block v-if="list.join_type==2">
						<view @click.stop="isPeoAlertClick()" class="shengyu_right" style="color: #9CE500;">
							此活动进行中>
						</view>
					</block>


					<block v-else-if="list.join_type==1">
						<view @click.stop="isPeoAlertClick()" class="shengyu_right" style="color: #FF3D00;">
							此活动已满员>
						</view>
					</block>
					<block v-else>
						<view @click.stop="isPeoAlertClick()" class="shengyu_right" style="color: #F8B800;">
							仅剩
							<span class="mingenum">{{list.residue}}</span>
							个名额>
						</view>
					</block>






				</view>


				<view style="height:20rpx;"></view>
				<view class="basic_scroll huanhang">
					<!-- <scroll-view class="scroll_view roww center_center" scroll-x="true"> -->
					<view class="scroll_item" v-for="(Sitem,Sindex ) in list.site" :key="Sindex" v-if="Sindex<10"
						@click="Navmy(Sitem.uuid)">
						<!-- scroll_item_view -->
						<view class="colonn center_center pore">
							<!-- <view class="scroll_item_read" v-if="Sitem.is_ready==1">{{Sitem.read}}km</view> -->
							<view style="height:18rpx;z-index:1000" v-if="Sitem.nickname">
								<view class="julii">{{Sitem.juli}}</view>
							</view>
							<view style="height:18rpx;z-index:1000" class="yincang1" v-else>
								<view class="julii">{{Sitem.juli}}</view>
							</view>

							<image v-if="Sitem.headimg"
								:class="[{FriendSex0:Sitem.base_sex==0,FriendSex1:Sitem.base_sex==1},'scroll_item_img']"
								:src="Sitem.headimg" mode="" style="z-index:500"></image>

							<image v-else class="scroll_item_img" src="../static/wuren.png" mode=""
								style="z-index:1000"></image>
							<image class="scroll_item_img "
								style="width: 40rpx;height: 40rpx;margin-top:-30rpx;z-index:1000"
								v-if="Sitem.is_ready==1&&Sindex!=0"
								src="https://ta.imjiayi.com/upload/upload/Component 78@2x.png" mode="">
							</image>

							<image v-show="Sindex==9"
								src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/Component%20494@2x.png"
								style="width: 100rpx;height:100rpx;top: 20rpx;left:0rpx;z-index:1001" class="poab"
								@click.stop="isPeoAlertClick()"></image>


							<view class="faqiren" v-show="Sindex==0" :style="{
									'color':nightMode?'white':'black' 
								}" style="z-index:600">发起人</view>
							<view v-if="Sitem.nickname" class="scroll_item_name" :style="{
									'color':nightMode?'white':'black'
								}">{{Sitem.nickname}}</view>
							<view v-else class="scroll_item_name" :style="{
									'color':nightMode?'white':'black'
								}"></view>
						</view>
						<!-- 发起人 -->

					</view>





					<!-- </view> -->

					<!-- </scroll-view> -->
					<!-- 未加入状态 -->
					<!-- <view class="" v-if="list.in_team==0">
						<image v-if="list.join_type==0" @click="actJoin" class="scroll_item_type"
							src="../static/AatDetail/jiaru.png" mode=""></image>
						<image v-else-if="list.join_type==1" class="scroll_item_type" src="../static/AatDetail/manyuan.png"
							mode=""></image>  
						<image v-else-if="list.join_type==2" class="scroll_item_type" style="opacity: 0.6;"
							src="../static/AatDetail/jinxing.png" mode=""></image>
					</view> -->
					<!-- 已加入状态 -->
					<!-- <view class="" v-if="list.in_team!=0">
						<view class="" v-if="list.is_captain==1">
							<image v-if="list.is_lock==0" @click="teamMember(6)" class="scroll_item_type"
								src="../static/AatDetail/weishoudui.png" mode=""></image>
							<image v-if="list.is_lock==1" class="scroll_item_type"
								src="../static/AatDetail/yishoudui.png" mode=""></image>
						</view>
						<view class="" v-if="list.is_captain==0">
							<image v-if="list.in_team==1" @click="Ready()" class="scroll_item_type"
								src="../static/AatDetail/zhunbei.png" mode=""></image>
							<image v-if="list.in_team==2" @click="Ready()" class="scroll_item_type"
								src="../static/AatDetail/yizhunbei.png" mode=""></image>
							<image v-if="list.in_team==3 && !list.is_prepay" @click="teamMember(3)"
								class="scroll_item_type" src="../static/AatDetail/tuichu1.png" mode=""></image>
						</view>
					</view> -->

				</view>

			</view>
			<view class="app" style="z-index:2000;" v-if="lineshow">
				<view>
					<image class='content' src='http://ysv.zjhaly.top/chulaiwan/active/app.png'></image>
					<image class='close' src='../../static/activity/Component 300@2x.png' @click="acsf"></image>
				</view>
			</view>
			<!-- 权限图片弹窗 -->


			<view class="quanxian" v-if="list.in_team==1 || list.in_team==2 || list.in_team==3 ">
				<image class="quanxian_img" @click.stop="showLoadApp" v-if="list.is_captain==0"
					src="http://ysv.zjhaly.top/chulaiwan/active/online.png" mode="">
				</image>
				<image class="quanxian_img" @click.stop="showLoadApp" v-if="list.is_captain==1"
					src="http://ysv.zjhaly.top/chulaiwan/active/duizhang.png" mode=""></image>


				<view class='duizhang' v-if="list.is_captain==1">
					<view class='duizhang_view1' @click="show1=true"></view>
					<view class='duizhang_view2' @click="lineshow=true"></view>
				</view>
			</view>
			<view v-else-if="list.in_team==0&&list.join_type==0">
				<image style="position: fixed;left:24rpx;width:674rpx;height: 138rpx;bottom: 50rpx;z-index: 40000;"
					@click.stop="actJoin"
					src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/Component 496@2x.png">
				</image>
			</view>
			<view v-else-if="list.join_type==1">

				<image 
				v-if="!isPeoAlert"
				style="position: fixed;left:24rpx;width:674rpx;height: 138rpx;bottom: 50rpx;z-index: 40000;"
					src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/tuichuchu.png">
				</image>
				
			</view>


			<image v-else-if="list.in_team>0&&list.is_captain!=1"
				src="https://ta.imjiayi.com/upload/upload/Component 311@2x.png"
				style="position: fixed;left:24rpx;width:674rpx;height: 138rpx;bottom: 50rpx;z-index: 40000;"
				@click.stop="showLoadApp"></image>




			<!-- 权限弹窗 -->
			<view class="fixed" v-if="show || show1 || pay ||lineshow"
				@click="show=false;show1=false;pay=false;lineshow=false;"></view>
			<view class="POP" v-if="show">
				<view class="POP_Title" :style="{
					'color':nightMode?'white':'black'
				}">队员权限</view>
				<image @click="show=false" class="chacha" src="../static/AatDetail/chacha.png" mode=""></image>
				<view class="">
					<!-- <view class="POP_Item" @click="teamMember(1)">
						<image class="POP_Img" src="../static/AatDetail/chufa.png" mode=""></image>
						<view class="">立即出发</view>
					</view> -->
					<view class="POP_Item" @click="teamMember(2)">
						<view class="POP_item_flex">
							<image class="POP_Img" src="../static/AatDetail/saoma.png" mode=""></image>
							<view class="" :style="{
								'color':nightMode?'white':'black'
							}">扫码签到</view>
						</view>
						<image class="POP_right" src="../static/AatDetail/right.png" mode=""></image>
					</view>
					<view class="POP_Item" @click="teamMember(3)" v-if='!list.is_prepay'>
						<view class="POP_item_flex">
							<image class="POP_Img" src="../static/AatDetail/tuichu.png" mode=""></image>
							<view class="" :style="{
								'color':nightMode?'white':'black'
							}">退出队伍</view>
						</view>

						<image class="POP_right" src="../static/AatDetail/right.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="POP" v-show="show1">
				<view class="POP_Title" :style="{
					'color':nightMode?'white':'black'
				}">队长权限</view>
				<image @click="show1=false" class="chacha" src="../static/AatDetail/chacha.png" mode=""></image>
				<view class="">
					<view class="POP_Item" @click="teamMember(4)">
						<view class="POP_item_flex">
							<image class="POP_Img" src="../static/AatDetail/chufa.png" mode=""></image>
							<view class="" :style="{
								'color':nightMode?'white':'black'
							}">队员签到</view>
						</view>

						<image class="POP_right" src="../static/AatDetail/right.png" mode=""></image>
					</view>
					<view class="POP_ItemI" @click="teamMember(5)">
						<view class="POP_item_flexI">
							<image class="POP_Img" src="../static/AatDetail/saoma.png" mode=""></image>
							<view class="">
								<view class="" :style="{
									'color':nightMode?'white':'black'
								}">移除队伍</view>
								<view class="" v-if="spliceShow">
									<view class="POP_item_splice" v-for="(spliceitem,spliceindex) in list.site"
										:key="spliceindex" @click.stop="Onsplice(spliceitem.uuid,spliceindex)"
										v-if="spliceitem.nickname">
										<view class="POP_item_spliceitem">
											<image class="POP_item_head" :src="spliceitem.headimg" mode=""></image>
											<view class="" :style="{
												'color':nightMode?'white':'black'
											}">{{spliceitem.nickname}}{{spliceindex}}</view>
										</view>
										<image v-if='spliceindex>0' class="POP_item_yichu"
											src="../static/AatDetail/yichu.png" mode=""></image>
									</view>
								</view>

							</view>
						</view>
						<image class="POP_right" :class="{POP_rightI:spliceShow}" src="../static/AatDetail/right.png"
							mode=""></image>
					</view>
					<view class="POP_Item" @click="teamMember(6)" :style="{
						'color':nightMode?'white':'black'
					}">
						<view class="POP_item_flex">
							<image class="POP_Img" src="../static/AatDetail/tuichu.png" mode=""></image>
							<view class="">提前收队</view>
						</view>
						<image class="POP_right" src="../static/AatDetail/right.png" mode=""></image>
					</view>
					<view class="POP_Item" @click="teamMember(7)" :style="{
						'color':nightMode?'white':'black'
					}">
						<view class="POP_item_flex">
							<image class="POP_Img" src="../static/AatDetail/tuichu.png" mode=""></image>
							<view class="">解散队伍</view>
						</view>
						<image class="POP_right" src="../static/AatDetail/right.png" mode=""></image>
					</view>
				</view>
			</view>
			<!-- 粗线 -->
			<!-- <view class="cuxian" v-if="!nightMode"></view> -->
			<!-- <view class="cuxian22" v-if="nightMode"></view> -->
			<view style="height: 20rpx;"></view>
			<view class="theme" :style="{
				'color':nightMode?'white':'black'
			}">



				<!-- <view class="theme_view">
					<view class="quan"></view>
					<view class="theme_title">主题介绍</view>
				</view> -->
				<image src="https://ta.imjiayi.com/upload/upload/活动详情_slices/Component 421@2x.png"
					style="width:200rpx;height:60rpx;"></image>


				<view class="theme_text">{{list.content_text}}</view>
			</view>
			<view style="height:33rpx;"></view>
			<!-- <image src="/static/ban.png" style="width: 694rpx;height: 20rpx;"></image> -->
			<image src="https://ta.imjiayi.com/upload/upload/活动详情_slices/0000000 1@2x.png"
				style="width: 750rpx;height: 100rpx;left:-29rpx;" class="pore"></image>

			<view style="height:39rpx;"></view>
			<!-- <swiper class="theme_swiper"
			 current="1" circular="true"
			 previous-margin="10px"
			 next-margin="10px"
			  >
			  <!-- :interval="3000" :duration="1000" -->
			<!-- <swiper-item v-for="(item,index) in swiperList"
				 @click="showimgsiper(index)"
				 :key="index" class="zhuti"> -->
			<!-- <view class="colonn">
						<image class="theme_swiperImg" v-for="(item,index) in swiperList"
						:src="item" mode="widthFix"></image>
					</view> -->
			<!-- </swiper-item>

			</swiper> -->
			<!-- 粗线 -->
			<!-- <view class="cuxian" v-if="!nightMode"></view> -->
			<!-- <view class="cuxian22" v-if="nightMode"></view> -->
			<!-- <view class="h-43"></view> -->




			<view class="theme" :style="{
				'color':nightMode?'white':'black'
			}">
				<!-- <view class="theme_view">
					<view class="quan22"></view>
					<view class="theme_title">温馨提示</view>
				</view> -->

				<image src="https://ta.imjiayi.com/upload/upload/活动详情_slices/Component 419.png"
					style="width:200rpx;height:60rpx;"></image>

			</view>
			<view style="height: 20rpx;"></view>

			<view class="colonn">
				<view class="wen1">到达活动现场找发起人扫码签到哦 !</view>
				<view class="colonn">
					活动开始半小时后未签到视为爽约<br>
					<view class="roww">
						系统将扣除您 <span style="color:#F8B800;font-weight: bold;">5信誉积分</span>
					</view>
					信誉积分过低将影响您后续加入活动<br>
					请准时赴约
				</view>
				<view class="h-20"></view>
				<image style="width: 700rpx;height:2rpx;"
					src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/----------------------------@2x.png">
				</image>

				<view class="h-20"></view>
				<view class="roww">
					<span
						style="color: red;">*</span>本活动信息由发起人自行发布，仅代表发布人个人意志且后续线下活动由发起人独立安排负责，“出来玩”仅作为展示平台。参加活动时请确认好活动信息，注意人身及财产安全
				</view>
			</view>
			<view style="height: 20rpx;"></view>


			<view class="theme" :style="{
				'color':nightMode?'white':'black'
			}">
				<!-- 	<image v-if="nightMode"
					src="https://ta.imjiayi.com/upload/upload/未加入_slices (2)/温馨提示0000@2x.png" mode="widthFix"
					style="width:710rpx;"></image>
				<image v-if="!nightMode"
					src="https://ta.imjiayi.com/upload/upload/未加入_slices (2)/未标题-2 95607.png" mode="widthFix"
					style="width:710rpx;"></image> -->

				<view class="theme_view" style="margin-top: 25rpx;">
					<view class="quan"></view>
					<view class="theme_title">活动推荐</view>
				</view>
			</view>
			<view class="h-20"></view>
			<view class="wall">
				<scroll-view scroll-x style="width: 700rpx;">
					<view class="roww">
						<view class=" text-center m-right-30" v-for="(item, index) in list111" :key="index"
							v-if="index%2==0" @click="ActiveDetail(item.act_no)">
							<view class="left_zview">
								<image class="sj_left_img headerimg"
									:src="item.cover+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
									mode="aspectFill"></image>
								<view class="pop">
									<image style="width: 40rpx;height: 40rpx;" src="../../static/index/naozhong.png"
										mode="">
									</image>
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
											:class="{dos:indexs===0 }" class="achd13" :src="items.headimg" mode=""
											v-if="indexs<7">
										</image>
									</view>
									<view class="zudui">{{item.p_num_str}}</view>
								</view>
							</view>
						</view>

						<view class=" text-center m-right-30" v-for="(item, index) in list111" :key="index"
							v-if="index%2==1" @click="ActiveDetail(item.act_no)">
							<view class="left_zview">
								<image class="sj_left_img headerimg"
									:src="item.cover+'?x-oss-process=image/auto-orient,1/resize,p_45/quality,Q_20'"
									mode="aspectFill"></image>
								<view class="pop">
									<image style="width: 40rpx;height: 40rpx;" src="../../static/index/naozhong.png"
										mode="">
									</image>
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

				</scroll-view>

			</view>
			<view class="h-30"> </view>
			<view class="roww center_center">
				<image style="width: 240rpx;height:96rpx;"
					src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/出来玩底部 6.png">
				</image>
			</view>
			<view class="h-70"> </view>

		</view>






		<!-- 支付弹窗 -->
		<!-- <scroll-view scroll-y="true" style='height:200rpx;'> -->
		<view class='qihua animated fadeInUp' v-show='pay'>
			<!--  -->
			<view class="pbox pore " style="height:1050rpx;padding:0rpx 0rpx;">
				<image :src="img1" mode="widthFix" class="w-750"></image>
				<view style="padding: 52rpx 36rpx;top:0rpx;" class="poab">
					<view class="pbasic_View1">
						<view class="ptheme_view">
							<view class="pquan"></view>
							<view class="ptheme_title">参与信息确认</view>
						</view>
					</view>

					<view class='colonn'>
						<view>活动：{{list.title}}</view>
						<view>地址：{{list.add_detail}}</view>
						<view>时间：{{list.time_str}}</view>
					</view>

					<view class='pacinfo'>
						<view class="colonn">
							<view class="roww  fs-32" :class="{
								'seliccs':selPiaoIndex==index,
								'seliccs1':selPiaoIndex!=index
							}" @click="spaceClick(index)" v-for="(item,index) in ActTicketList">
								<view style="font-weight:bold;">{{item.name}}</view>
								<view class="allline"></view>
								<view style="color: #FF3D00;">￥{{item.money}}/人</view>
							</view>
						</view>
					</view>
					<view class='ptishi'>
						<image class="pbasic_img" src="../../static/activity/tishi.png" mode=""></image>
						<text>本活动不支持退款 请您合理安排时间</text>

					</view>
					<!-- <view class='pbeizhu'>
						<textarea class="pintroducetext" value="" v-model="Detail" placeholder="备注:" />
					</view> -->
					<view class='pdesc_title'>
						不支持退换说明：
					</view>
					<view class='pdesc_content'>
						鉴于活动特殊性（具有实效性、唯一性等特征）一旦成功加入，除因不可抗因素导致活动取消或延期，其余情况无法退款，请您在下单时务必仔细核对订单信息，合理安排时间。
					</view>
					<view class='pgopay' @click="gopay()">
						确认支付
					</view>
				</view>
				<view class="h-50"></view>
			</view>

		</view>
		<!-- </scroll-view> -->
		<!-- 支付弹窗 -->
		<!-- <loadApp v-if="showApp" @closeClick="showLoadApp"></loadApp> -->


		<view class="colonn center_center huuibeijing" style="z-index: 500000;" @click.stop="hideview" v-if="showApp"
			@touchmove="preventTouchMove">
			<view class="pore w-440 h-466">
				<image class="w-440 h-466 poab" style="top: 0rpx;left: 0rpx;"
					src="https://ta.imjiayi.com/upload/upload/小程序下载弹窗_slices/消息提醒精美弹窗UI 9@2x.png"></image>
				<image @click.stop="showLoadApp()" class="w-48 h-48 poab" style="top: 20rpx;right: 20rpx;"
					src="https://ta.imjiayi.com/upload/upload/小程序下载弹窗_slices/Component 412@2x.png"></image>
			</view>
		</view>



		<view v-if="list.in_team==1 || list.in_team==2 || list.in_team==3 " style="height: 150rpx;"></view>
		<view v-else-if="list.is_captain==1" style="height: 150rpx;"></view>





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
						<button id="agree-btn" open-type="agreePrivacyAuthorization"
							@agreeprivacyauthorization="handleAgree" class="tongyisa"></button>
					</view>
				</view>
			</view>
		</view>


		<view class="huuibeijing colonn" style="z-index: 50000;"
		 
		 catchtouchmove="preventTouchMove"
		 v-if="isPeoAlert"
		 @click.stop="isPeoAlertClick"
		 >
			<view class="colonn poab animated  fadeInUp" style="z-index: 50000;bottom: 0rpx;"
			   @click.stop="aaaa"
			>
				<view class="topzaoxi pore roww center_center">
					<image class="w-750 h-198 poab"
						src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/Component 504@2x.png">
					</image>
					<view class="poab w-750 h-198 "
						style="font-weight: bold;font-size:35rpx;text-align: center;line-height: 158rpx;top: 50rpx;">
						仅剩{{list.residue}}个名额</view>
					<image class=" w-35 poab h-35" @click.stop="isPeoAlertClick" style="z-index: 1000;right:35rpx;top:35rpx;"
						src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/叉号 (1) 4@2x.png">
					</image>
				</view>
				<scroll-view scroll-y class="background1" style="width: 750rpx;height: 750rpx;background-color: white;">
					<view class="colonn  w-710 m-left-20">
						<view class="roww p-top-25 p-bottom-15 border_bottom m-left-38 m-right-40"
							v-for="(item,index) in list.site" v-if="item.nickname">
							<view class="tan1 roww center_center" :class="{
								'tan1':item.base_sex==0,
								'tanman':item.base_sex==1,
							}">
								<image class="tan2" :src="item.headimg"></image>
							</view>
							<view class="w-20"></view>
							<view class="colonn">
								<view class="roww">
									<view class="nicokanmealert txtShowLength">{{item.nickname}}</view>
									<view class="w-10"></view>
									<image
										src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/Component 391@2x.png"
										class="w-99 h-41" v-if="item.vip_code==1"></image>
									<image
										src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/Component 392.png"
										class="w-99 h-41" v-if="item.vip_code==2"></image>



									<view class="w-10"></view>
									<image class="w-40 h-40" v-if="item.is_auth==1"
										src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/11111115@2x.png">
									</image>
									<view class="w-10"></view>

									<image class="w-40 h-40" v-if="item.is_avatar==1&&item.base_sex==1"
										src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/腾讯实名认证@2x.png">
									</image>

									<image class="w-40 h-40" v-if="item.is_avatar==1&&item.base_sex==0"
										src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/11111111 5@2x.png">
									</image>

									<view class="w-10"></view>

									<image class="w-120 h-40" v-if="item.is_official==1"
										src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/Component 301@2x.png">
									</image>
								</view>
								<view class="h-12"></view>
								<view class="roww">
									<view class="geqian txtShowLength">{{item.base_sign}}</view>
									<view class="allline"></view>
									<view style="color: #F8B800;font-weight: bold;">{{item.juli}}</view>
								</view>
							</view>
						</view>
						
						<view class="roww p-top-25 p-bottom-15 border_bottom m-left-38 m-right-40"
							v-for="(item,index) in list.site" v-if="!item.nickname">
							<view class="tanman3 roww center_center" >
								<image class="tan2" src="../static/wuren.png"></image>
							</view>
						</view>
						<view class="h-200"></view>
					</view>
				</scroll-view>
				<!-- Component 505@2x.png -->

				<!-- ---{{list.join_type==1}}--{{list.is_captain==0}}--  {{list.is_captain==0}} -->
				<block v-if="list.is_captain==0">
					<!-- <view class="w-100 h-100" style="background-color: red;color:white;">1</view> -->
					<view v-if="list.in_team==3 && !list.is_prepay" class="roww w-750 background1 center_center">
						<image @click="teamMember(3)" class="w-676 h-120"
							src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/Component 506@2x.png">
						</image>
					</view>
					<view v-if="list.in_team==3 && list.is_prepay==1" class="roww w-750 background1 center_center">
						<image @click="teamMember(3)" class="w-676 h-120"
							src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/Component 506@2x.png">
						</image>
					</view>
					<view v-else-if="list.in_team==0&&list.join_type==0">
						<image
							style="position: fixed;left:24rpx;width:674rpx;height: 138rpx;bottom: 50rpx;z-index: 40000;"
							@click.stop="actJoin"
							src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/Component 496@2x.png">
						</image>
					</view>
					<view v-else-if="list.join_type==1">

						<image
							style="position: fixed;left:24rpx;width:674rpx;height: 138rpx;bottom: 50rpx;z-index: 40000;"
							src="https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/tuichuchu.png">
						</image>
					</view>

				</block>






			</view>
		</view>





	</view>
</template>

<script>
	import uQRCode from '../../components/uqrcode.js' //引入uqrcode.js
	export default {
		data() {
			return {


				img1: 'https://ta.imjiayi.com/upload/upload/luomiao.png',

				showuquanAlert: false,
				isPeoAlert: false,

				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				lat: getApp().globalData.lat,
				lng: getApp().globalData.lng,
				act_no: '',
				distance: 0,
				list: [],
				swiperList: [],
				list111: [],
				// 弹窗显示
				show: false,
				show1: false,
				lineshow: false,
				// 移除队伍显示
				spliceShow: false,
				pay: false,
				Detail: '',
				openid: '',

				nightMode: false, //是否是夜间
				showApp: false,

				tokenValue: null,

				UserInfo: {},

				ActTicketList: [], //票列表
				selPiaoIndex: 0,
			}
		},
		onLoad(options) {

			console.log(options.act_no);
			this.act_no = options.act_no;
			uni.login({
				success: (res) => {
					console.log(res);
					this.code = res.code
					this.getOpenid(this.code)
				}
			})

		},
		onShow() {

			var token = uni.getStorageSync("token");
			if (token) {
				this.tokenValue = uni.getStorageSync("token");
				this.token = uni.getStorageSync("token");
				this.getUserInfo();
			}
			setTimeout(res => {
				this.showpagee();
			}, 600)

			this.getDetail();
			this.getYejian();

		},

		onShareTimeline() {
			return {
				title: this.list.title, //自定义标题   string
				path: '/pages_huodong/ActivityDetail/ActivityDetail?act_no=' + this.list.act_no, //是空的页面
				imageUrl: this.list.cover //图片地址
			}
		},

		mounted() {
			this.getDetail();
			this.getlist111();
			// 上报经纬度
			this.setlat();
		},
		onPullDownRefresh() {
			this.getDetail();
			this.getYejian();
			uni.stopPullDownRefresh();
		},
		methods: {
			aaaa(){},
			preventTouchMove(){},
			spaceClick(index) {
				this.selPiaoIndex = index;
			},
			// 获取商品规格
			getSpaces() {
				var url = this.baseurl + '/api/act/getActTicket';
				uni.request({
					url: url,
					method: 'POST',
					data: {
						act_no: this.list.act_no,
						city:uni.getStorageSync("citySel"),
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						this.ActTicketList = res.data.data;
						for (var a = 0; a < this.ActTicketList.length; a++) {
							this.ActTicketList[a].isshow = false;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 显示成员
			isPeoAlertClick() {
				this.isPeoAlert = !this.isPeoAlert;
			},

			// 个人信息
			getUserInfo() {
				var url = this.baseurl + '/api/user/getUserInfo';
				var token = uni.getStorageSync("token")
				if (!token) {
					url = this.baseurl + '/api/IosVisitor/getUserInfo';
				}
				var uuid = uni.getStorageSync("uuid");
				uni.request({
					url: url,
					method: 'POST',
					data: {
						uuid: uuid
					},
					header: {
						xcx: 1,
						token: this.token
					},
					success: res => {
						console.log("个人信息", res);
						this.UserInfo = res.data.data;
						uni.setStorageSync("userInfo", this.UserInfo)
					},
					fail: () => {},
					complete: () => {}
				});
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
			showuquanAlertClick() {
				this.showuquanAlert = !this.showuquanAlert;
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
			showpagee() {
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

						var juli = this.space(this.lat, this.lng, this.list.lat, this.list.lng).toFixed(
							2);
						this.distance = juli
						this.getDetail();
					},
					fail: res => {
						console.log("定位失败", res);
						// uni.showToast({
						// 	title: "定位失败",
						// 	icon: 'none'
						// })
					},
					complete: res => {
						console.log("结果", res)
					}
				})
			},






			showimgsiper(index) {
				// 预览图片
				uni.previewImage({
					urls: this.swiperList,
					current: index,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},

			hideview() {},
			showLoadApp() {
				this.showApp = !this.showApp;
			},







			getYejian() {
				wx.getSystemInfo({
					success: (res) => {
						// 判断是否开启了夜间模式
						var nightMode = res.theme === 'dark';
						this.nightMode = nightMode;
						console.log('夜间模式状态:', nightMode);
						console.log('夜间模式状态:', this.nightMode, res);
					}
				});
			},




			// showApp(){
			// 	uni.showToast({
			// 		title:"完整功能请下载APP",
			// 		icon:"none"
			// 	})
			// },

			getOpenid(e) {



				uni.request({
					url: this.baseurl + '/api/login/getOpenid',
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token,
					},
					data: {
						code: e,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("openid", res);
						this.openid = res.data.openid

					},
					fail: () => {},
					complete: () => {}
				});


			},


			onShareAppMessage(res) {
				if (res.from === 'button') { // 来自页面内分享按钮
					console.log(res.target)
				}
				return {
					title: this.list.title,
					path: '/pages_huodong/ActivityDetail/ActivityDetail?act_no=' + this.act_no,
					'imageUrl': this.list.cover
				}
			},
			// 打开Aapp
			acsf(e) {
				this.lineshow = !this.lineshow
			},
			getlist111() {


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
						cate_id: this.current,
						sort: 2,
						lat: this.lat,
						lng: this.lng,
						page: 1,
						num: 4,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("活动列表", res);
						this.list111 = res.data.data;

					},
					fail: () => {},
					complete: () => {}
				});
			},
			getDetail() {

				var url = '/api/act/actInfo';
				if (!this.tokenValue) {
					url = "/api/IosVisitor/actInfo";
				}
				uni.request({
					url: this.baseurl + url,
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token
					},
					data: {
						act_no: this.act_no,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("阿萨德科技", res)
						if (res.data.code == 1001) {
							uni.showToast({
								title: "请先登录",
								icon: 'none'
							})
							setTimeout(res => {
								uni.navigateTo({
									url: "/pages/Login/Login"
								})
							}, 1000)
						} else if (res.data.code == 1) {
							console.log("活动详情", res);
							this.list = res.data.data;
							this.getSpaces();
							for (var a = 0; a < this.list.site.length; a++) {
								var obg = this.list.site[a];
								if (obg.lat != 0&&obg.lat) {
									obg.juli = this.space(this.lat, this.lng, obg.lat, obg.lng).toFixed(
										2)+"km";
								} else {
									obg.juli = "未知";
								}


								this.list.site[a] = obg;
							}

							this.list.zong = res.data.data.site.length
							uni.setNavigationBarTitle({
								title: this.list.title
							})
						} else {
							setTimeout(res1 => {
								uni.showToast({
									title: res.data.info,
									icon: 'none'
								})
								uni.reLaunch({
									url: "/pages/index/index"
								})
							}, 1000)

						}



						// res.data.data.site.map((item, index) => {
						// 	this.list.site[index].read = this.space(this.list.lat, this.list.lng, item
						// 		.lat, item
						// 		.lng).toFixed(
						// 		2);
						// })
						this.swiperList = res.data.data.content_img;
						var juli = this.space(this.lat, this.lng, this.list.lat, this.list.lng).toFixed(
							2)+"km";
						this.distance = juli
					},
					fail: () => {},
					complete: () => {}
				});
			},
			//支付
			gopay() {
				let _this = this;
				// if(!this.Detail){
				// 	uni.showToast({
				// 		title: '请添加备注',
				// 		mask: true,
				// 		icon: 'none'
				// 	});
				// 	return;
				// }
				if (!this.openid) {
					uni.showToast({
						title: '支付错误',
						mask: true,
						icon: 'none'
					});
					return;
				}
				if (this.selPiaoIndex < 0) {
					uni.showToast({
						title: '请先选择套餐',
						mask: true,
						icon: 'none'
					});
					return false;
				}

				console.log("支付1");
				uni.request({
					url: _this.baseurl + '/api/actDo/prepay_new',
					method: 'POST',
					header: {
						xcx: 1,
						token: _this.token
					},
					data: {
						act_no: _this.act_no,
						pay_type: 3,
						remark: _this.Detail,
						openid: _this.openid,
						'ticket_id': this.ActTicketList[this.selPiaoIndex].id,
						phone: this.UserInfo.phone,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						if (res.data.code == 1) {

							uni.requestPayment({
								provider: 'wxpay',
								timeStamp: res.data.data.timeStamp,
								nonceStr: res.data.data.nonceStr,
								package: res.data.data.package,
								signType: res.data.data.signType,
								paySign: res.data.data.paySign,
								success: (res) => {

									uni.showToast({
										title: '支付成功',
										icon: 'none',
										success() {
											_this.getDetail();
											_this.pay = !_this.pay
										}
									})
									console.log('success:' + JSON.stringify(res));
								},
								fail: function(err) {
									console.log(err)
									uni.showToast({
										title: '支付失败',
										icon: 'none'
									})
									console.log('fail:' + JSON.stringify(err));
								},
								complete: (res) => {
									console.log("支付API刻骨1", res);
								}
							});
						} else {
							uni.showToast({
								title: res.data.info,
								icon: 'none'
							})
						}
					},
					fail: () => {},
					complete: (res) => {
						console.log("支付接口刻骨1", res);
					}
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
			// 拨打电话
			onPhone(phone) {
				uni.makePhoneCall({
					phoneNumber: phone + '',

					success(res) {
						console.log(res);
					},
				})
			},
			// // 导航
			// openLocation(lat, lng, name, address) {
			// 	if (!name) {
			// 		name = "-";
			// 	}
			// 	if (!address) {
			// 		address = "-";
			// 	}
			// 	console.log("查看地图位置---信息", lat, lng, name, address);
			// 	// wx.authorize
			// 	wx.authorize({
			// 		scope: 'scope.userFuzzyLocation',
			// 		success() {




			// 			uni.openLocation({
			// 				latitude: Number(lat),
			// 				longitude: Number(lng),
			// 				address: address,
			// 				name: name,
			// 				success(res) {
			// 					console.log("查看地图位置", res);
			// 				},
			// 				complete: (res) => {
			// 					console.log("接受", res)
			// 				}
			// 			})
			// 		},
			// 		complete: (res) => {
			// 			console.log("asdasd", res);
			// 		}
			// 	})
			// },
			// 导航
			openLocation(lat, lng, name, address) {

				console.log("-1111---", lat, lng, name, address)

				// wx.getFuzzyLocation({
				// 	type: 'gcj02', //返回可以用于wx.openLocation的经纬度
				// 	success:(res)=> {
				// 		console.log("----", res)
				// 		const latitude = res.latitude
				// 		const longitude = res.longitude
				wx.openLocation({
					latitude: parseFloat(lat + ''),
					longitude: parseFloat(lng + ''),
					scale: 18,
					name: this.list.add_name,
					address: this.list.add_detail,
					success(res) {
						console.log("-1111---", res)
					},
					fail: res => {
						console.log("导航失败", res)
						uni.showToast({
							title: "导航失败",
							icon: 'none'
						})
					},
					complete: (res) => {
						console.log("complete2222", res)
					}
				})
				// 	},
				// 	complete: (res) => {
				// 		console.log("-1complete111---", res)
				// 	}
				// })
			},





			// 计算距离
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
			// 参与活动
			actJoin() {
				if (!this.tokenValue) {
					uni.showToast({
						title: "请先登录",
						icon: "none"
					})
					setTimeout(res => {
						uni.navigateTo({
							url: "/pages/Login/Login"
						})
					}, 1000)
					return false;
				}
				var loginInfo = uni.getStorageSync("loginInfo");
				if (loginInfo) {
					if (loginInfo.status == 0) {
						uni.showToast({
							title: "请先完善信息",
							icon: "none"
						})
						setTimeout(res => {
							uni.navigateTo({
								url: "/pages_yindao/yindao1/yindao1"
							})
						}, 1000)
						return false;
					}
				}

				if (this.list.is_prepay == 1) {
					//提交订单
					this.pay = !this.pay
					// uni.navigateTo({
					// 	url: `../../pages_huodong/pay/pay?act_no=`+this.act_no,
					// 	success: res => {},
					// 	fail: () => {},
					// 	complete: () => {}
					// });
				} else {
					uni.request({
						url: this.baseurl + '/api/actDo/actJoin',
						method: 'POST',
						header: {
							xcx: 1,
							token: this.token
						},
						data: {
							act_no: this.act_no,
							lat: this.lat,
							lng: this.lng,
							city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log(res);
							if (res.data.code == 0) {
								uni.showToast({
									title: res.data.info,
									mask: true,
									icon: 'none'
								});
							} else {
								uni.showToast({
									title: res.data.info,
									mask: true,
									icon: 'none'
								});
								this.getDetail();
							}
						},
						fail: () => {},
						complete: () => {}
					});
				}

			},
			// 队员准备
			Ready() {
				uni.request({
					url: this.baseurl + '/api/actGroup/actUserReady',
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token
					},
					data: {
						act_no: this.act_no,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("准备", res);
						if (res.data.code == 0) {
							uni.showToast({
								title: res.data.info,
								mask: true,
								icon: 'none',
							});
						} else if (res.data.code == 1) {
							uni.showToast({
								title: res.data.info,
								mask: true,
								icon: 'none',
							});
							this.setlat();
							uni.request({
								url: this.baseurl + '/api/actGroup/actUserStart',
								method: 'POST',
								header: {
									token: this.token
								},
								data: {
									act_no: this.act_no,
									city:uni.getStorageSync("citySel"),
								},
								success: res => {
									// clog
									console.log("立即出发", res);
									if (res.data.code == 1) {
										this.getDetail();
									} else {
										uni.showToast({
											title: res.data.info,
											mask: true,
											icon: 'none'
										});
									}
								},
								fail: () => {},
								complete: () => {}
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			teamMember(type) {
				if (type == 1) {
					// uni.request({
					// 	url: this.baseurl + '/api/actGroup/actUserStart',
					// 	method: 'GET',
					// 	header: {
					// 		token: this.token
					// 	},
					// 	data: {
					// 		act_no: this.act_no
					// 	},
					// 	success: res => {
					// 		// clog
					// 		console.log(res);
					// 	},
					// 	fail: () => {},
					// 	complete: () => {}
					// });
				} else if (type == 2) {
					let _this = this;
					uni.scanCode({
						onlyFromCamera: true,
						success(res) {
							console.log("扫码", res.result, _this.baseurl);
							if (res.result) {
								uni.request({
									url: _this.baseurl + '/api/actGroup/actUserSign',
									method: 'POST',
									header: {
										xcx: 1,
										token: _this.token
									},
									data: {
										act_no: res.result,
										city:uni.getStorageSync("citySel"),
									},
									success: res => {
										console.log("扫码签到", res);
										if (res.data.code == 0) {
											uni.showToast({
												title: res.data.info,
												mask: true,
											});
										} else if (res.data.code == 1) {
											uni.showToast({
												title: res.data.info,
												mask: true,

											});

											_this.show = false;
											_this.getDetail();
										}
									},
									fail: () => {},
									complete: () => {}
								});
							}

						}
					})
				} else if (type == 3) {
					let _this = this;
					uni.showModal({
						title: '退出队伍',
						content: '确认要退出队伍吗',
						success: function(res) {
							if (res.confirm) {
								uni.request({
									url: _this.baseurl + '/api/actGroup/actUserQuit',
									method: 'POST',
									header: {
										xcx: 1,
										token: _this.token
									},
									data: {
										act_no: _this.act_no,
										city:uni.getStorageSync("citySel"),
									},
									success: res => {
										console.log("退出队伍", res);
										if (res.data.code == 1) {
											uni.showToast({
												title: res.data.info,
												mask: true,
											});

											_this.isPeoAlertClick();

											_this.getDetail();
											setTimeout(() => {
												uni.navigateBack({
													delta: 1,
												});
											}, 1000)
											_this.show = false;
										} else if (res.data.code == 0) {
											uni.showToast({
												title: res.data.info,
												mask: true,
												icon: 'error'
											});
										}
									},
									fail: () => {},
									complete: () => {}
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});

				} else if (type == 4) {
					// 队员签到
					let list = JSON.stringify(this.list);
					uni.navigateTo({
						url: '../SginIn/SginIn?list=' + list,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else if (type == 5) {
					// 移除队伍
					if (this.spliceShow) {
						this.spliceShow = false;
					} else {
						this.spliceShow = true;
					}
				} else if (type == 6) {
					// 提前收队
					uni.request({
						url: this.baseurl + '/api/actGroup/actCaptainReceive',
						method: 'POST',
						header: {
							xcx: 1,
							token: this.token
						},
						data: {
							act_no: this.act_no,
							city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log("提前收队", res);
							if (res.data.code == 0) {
								uni.showToast({
									title: res.data.info,
									icon: 'error',
									mask: true,
								});
							} else if (res.data.code == 1) {
								uni.showToast({
									title: res.data.info,
									icon: 'success',
									mask: true,
								});
								this.setlat();
								this.getDetail();
							}
						},
						fail: () => {},
						complete: () => {}
					});
				} else if (type == 7) {
					// 解散队伍
					uni.request({
						url: this.baseurl + '/api/actGroup/actCaptainDissolve',
						method: 'POST',
						header: {
							xcx: 1,
							token: this.token
						},
						data: {
							act_no: this.act_no,
							city:uni.getStorageSync("citySel"),
						},
						success: res => {
							console.log("解散", res);
							if (res.data.code == 0) {
								uni.showToast({
									title: res.data.info,
									icon: 'error',
									mask: true,
								});
							} else if (res.data.code == 1) {
								uni.showToast({
									title: res.data.info,
									icon: 'success',
									mask: true,
								});
								setTimeout(() => {
									uni.navigateBack({
										delta: 1,
									});
								}, 1000)
							}
						},
						fail: () => {},
						complete: () => {}
					});
				} else if (type == 8) {

				}
			},
			setlat() {
				uni.request({
					url: this.baseurl + '/api/actGroup/upLocation',
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token
					},
					data: {
						lat: this.lat,
						lng: this.lng,
						act_no: this.act_no,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						console.log("上报经纬度", res);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// // 生成二维码
			// qrFun() {
			// 	uQRCode.make({
			// 		canvasId: 'qrcode',
			// 		componentInstance: this,
			// 		text: this.act_no,
			// 		size: 150,
			// 		margin: 0,
			// 		backgroundColor: '#ffffff',
			// 		foregroundColor: '#000000',
			// 		fileType: 'png',
			// 		errorCorrectLevel: uQRCode.errorCorrectLevel.H,
			// 		success: res => {
			// 			// console.log("二维码图片",res);
			// 		}
			// 	})

			// }
			// 踢出队伍
			Onsplice(uuid, index) {
				if (index == 0) {
					return;
				}
				// console.log(uuid, index);
				// console.log(this.list.site[index].nickname);
				uni.request({
					url: this.baseurl + '/api/actGroup/actCaptainOutTeam',
					method: 'POST',
					header: {
						xcx: 1,
						token: this.token
					},
					data: {
						uuid: uuid,
						act_no: this.act_no,
						city:uni.getStorageSync("citySel"),
					},
					success: res => {
						if (res.data.code == 0) {
							uni.showToast({
								title: res.data.info,
								mask: true,
								icon: 'none',
							});
						} else if (res.data.code == 1) {
							uni.showToast({
								title: res.data.info,
								mask: true,
								icon: 'none',
							});
							this.list.site.splice(index, 1)
						}
						console.log(res);

					},
					fail: () => {},
					complete: () => {}
				});
			},
			Navmy(uuid) {
				if (uuid) {
					uni.navigateTo({
						url: '/pages_wode/PersonalCenter/PersonalCenter?uuid=' + uuid,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}

			}
		}
	}
</script>

<style scoped>
	@import url(ActivityDetail.css);

	/* .qihua{
		transform: rotate(90deg);
	} */
	/* 支付弹窗 */
	.pay .header {
		height: 580rpx;
	}

	/* page{
			background-color:#F6F7F9 ;
		} */
	.qihua {
		bottom: 0;
		z-index: 1111;
		right: 0px;
		left: 0px;
		position: fixed;
		z-index: 60001
	}

	.qihua .pacinfo {
		display: block;
		font-size: 32rpx;
		line-height: 38rpx;
		padding: 22rpx 0;

		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		font-size: 32rpx;
		flex-direction: column;
		-webkit-display: flex;
		justify-content: center;
		line-height: 76rpx;
		padding-left: 24rpx;
		padding-right: 24rpx;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}

	.qihua .ptishi {
		/* width:// 674rpx; */
		height: 78rpx;
		background: #000000;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		display: flex;
		align-items: center;
		padding: 2rpx 0;
	}

	.qihua .ptishi image {
		width: 52rpx;
		height: 52rpx;
		margin-left: 24rpx;
	}

	.qihua .ptishi text {
		color: #F8B800;
		font-size: 32rpx;
		padding: 33rpx;

	}

	.qihua .ppayinfo {
		padding: 50rpx 24rpx;
		display: flex;
		justify-content: space-between;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		margin: 30rpx 0;
	}

	.qihua .ppayinfo .pprice {
		color: #D60000;
	}

	.qihua .pbeizhu {
		padding-top: 18rpx;
		padding-left: 26rpx;
		/* width: 674rpx; */
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
	}

	.pbeizhu textarea {
		height: 63rpx;
	}

	.qihua .pdesc_title {
		color: #D60000;
		font-size: 30rpx;
		margin-top: 32rpx;
		margin-bottom: 2rpx;
	}

	.qihua .pdesc_content {
		color: #959595;
	}

	.qihua .pgopay {
		display: flex;
		align-items: center;
		/* text-align: center; */
		/* margin: auto; */
		justify-content: center;
		margin-top: 38rpx;
		font-size: 52rpx;
		color: #FFFFFF;
		width: 674rpx;
		height: 110rpx;
		background: #F8B800;
		border-radius: 24rpx 24rpx 24rpx 24rpx;
	}

	.qihua .ptheme_swiperImg {
		/* height: 508rpx;
			width: 660rpx;
			border-radius: 10rpx; */
		border-radius: 10rpx;
		height: 100%;

	}

	.qihua .ptheme_swiper {
		width: 100%;
		height: 508rpx;
		margin-top: 20rpx;
	}

	/* 主题推荐 */
	.qihua .pquan {
		width: 40rpx;
		height: 40rpx;
		background: rgba(248, 184, 0, 0.5);
		border-radius: 50rpx;
		position: absolute;
		left: 0;
		top: 0;
	}

	.qihua .ptheme_text {
		font-size: 32rpx;
		font-weight: 400;
		font-family: Inter-Regular, Inter;
		margin-top: 38rpx;
		white-space: pre-line;
	}

	.qihua .ptheme_title {
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 400;
		margin-left: 10rpx;

	}

	.qihua .ptheme_view {
		display: flex;
		position: relative;
	}


	.qihua .pcuxian1 {
		height: 12rpx;
		background: #F8F8F8;
		margin: 40rpx 0;
	}

	.qihua .pcuxian {
		height: 12rpx;
		background: #F8F8F8;
		margin: 26rpx 0;
	}



	.qihua .pbasic {
		/* padding-left: 30rpx; */
		padding-top: 44rpx;
		/* padding-right: 30rpx; */
		/* background-image: linear-gradient(to right, #FFB15B, #E96535); */
		border-radius: 30pt 30pt 0pt 0pt;
		position: relative;
		top: -96rpx;
	}

	.qihua .pbox {
		border-radius: 16px 16px 0 0;
		/* position: relative; */
		/* top: -55px; */
		background-color: #F6F7F9;
		/* padding: 52rpx 36rpx; */

	}

	/* .page{
			background-color: #F6F7F9;
		} */
	/* 弹窗end */
	.header {
		height: 298px;
	}

	.header image {
		height: 100%;
	}

	.duizhang {
		display: flex;
		display: flex;
		width: 100%;
		position: absolute;
		bottom: 9rpx;
		height: 119rpx;
	}

	.photo {
		width: 118rpx;
		height: 118rpx;
		border-radius: 50%;
		margin-left: 14rpx;
		margin-right: 14rpx;
		border: 7rpx solid #EC7A9C;
	}

	.nickname {
		color: #934D29;
		font-weight: bold;
		/* position: absolute;
		left: 150rpx;
		top: 32rpx; */
	}

	.renzheng {
		background-image: url(http://ysv.zjhaly.top/chulaiwan/active/qihua.png);
		background-size: 100% 100%;
		height: 148rpx;
		display: flex;
		align-items: center;
		position: relative;
	}

	.renzheng_view1 {
		color: #934D29;
		/* margin-bottom: -41rpx; */
	}

	.duizhang_view1 {
		width: 25%;
	}

	.duizhang_view2 {
		width: 69%;
		margin-left: 23rpx;
	}

	.shengyu {
		display: flex;
		justify-content: space-between;

	}

	.shengyu_left {
		color: #939393;
	}

	.shengyu_right {
		color: #FF3D00;
	}

	.view1_img {
		width: 174rpx;
		height: 72rpx;
	}

	.view2_img {
		margin-left: 26rpx;
		width: 142rpx;
		height: 72rpx;
	}

	.view_zao {
		color: #F8B800;
		font-size: 32rpx;
		padding: 13rpx 25rpx;
		background: #000000;
		border-radius: 14%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}

	/* 权限弹窗 */
	.POP_rightI {
		transform: rotate(90deg);
	}

	.basic_View123 {
		/* background-image: linear-gradient(to right, #F8B800, #F8B800); */
		background-image: url(https://ta.imjiayi.com/upload/upload/%E6%B4%BB%E5%8A%A8%E8%AF%A6%E6%83%85_slices/33333331.png);
		background-size: 100% 100%;
		border-radius: 20pt 20pt 0pt 0pt;
		height: 72rpx;
		/* 	position: absolute;
			bottom: 43%; */
		width: 100%;
		position: relative;
		/* bottom: 43%; */
		width: 100%;
		/* z-index: 1; */
		top: -24px;
	}

	.basic_View {
		background-image: linear-gradient(to right, #FFB15B, #E96535);
		border-radius: 20pt 20pt 0pt 0pt;
		height: 172rpx;
		/* 	position: absolute;
		bottom: 43%; */
		width: 100%;
		height: 172rpx;
		position: relative;
		/* bottom: 43%; */
		width: 100%;
		/* z-index: 1; */
		top: -24px;
	}

	.basic_Viewbg {
		background-image: linear-gradient(to right, #272438, #000000);
	}

	.basic_View1 .view1 {
		display: flex;
	}

	.basic_View1 {}

	.POP_right {
		width: 36rpx;
		height: 36rpx;
	}

	.POP_item_flexI {
		display: flex;
	}

	.POP_item_flex {
		display: flex;
	}

	.POP_item_spliceitem {
		display: flex;
		align-items: center;

	}

	.POP_item_splice {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 520rpx;
		margin: 28rpx 0;

	}

	.FriendSex1 {

		border: 6rpx solid #66ADFF;
	}

	.FriendSex0 {

		border: 6rpx solid #FF759F;
	}

	.POP_item_head {
		width: 68rpx;
		height: 68rpx;
		border-radius: 50%;
		margin-right: 22rpx;
	}

	.POP_item_yichu {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
	}

	.chacha {
		position: absolute;
		top: 60rpx;
		right: 50rpx;
		width: 26rpx;
		height: 26rpx;
	}

	.POP_ItemI {
		padding: 34rpx 0;
		display: flex;
		align-items: end;
		justify-content: space-between;
		font-size: 32rpx;
		border-bottom: 2rpx solid #E3E3E3;
	}

	.POP_Item {
		padding: 34rpx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* justify-content: center; */
		font-size: 32rpx;
		border-bottom: 2rpx solid #E3E3E3;
	}



	.POP_Img {
		width: 56rpx;
		height: 56rpx;
		margin-right: 16rpx;
	}

	.POP_Title {
		font-size: 36rpx;
		text-align: center;
		font-weight: 800;
	}

	.yaoqiu {
		/* padding-left: 25rpx; */
		padding-top: 28rpx;
	}

	.POP {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: white;
		border-radius: 40rpx 40rpx 0 0;
		/* height: 496rpx; */
		z-index: 11;
		padding: 50rpx;
		animation: OnePOP 1s linear;
		font-family: Inter-Regular, Inter;
		/* position: relative; */
	}

	@keyframes OnePOP {
		from {
			transform: translateY(1000rpx);
		}

		to {
			transform: translateY(0rpx);
		}
	}

	.fixed {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
	}

	/* 权限显示 */
	.quanxian_img {
		/* width: 261rpx; */
		height: 100%;
	}

	.quanxian {
		/* width: 610rpx; */
		height: 142rpx;
		position: fixed;
		left: 4%;
		right: 4%;
		bottom: 50rpx;
		z-index: 1005;
		display: flex;
		justify-content: center;

	}

	/* 发起人 */
	.faqiren {
		/* position: absolute; */
		font-size: 20rpx;
		background: #F8B800;
		color: white;
		padding: 0 10rpx;
		border-radius: 20rpx;
		margin-top: -15rpx;
		/* top: 90rpx; */
		/* left: 30rpx; */

	}

	/* 瀑布流 */
	.zudui {
		color: #9999;
		font-size: 20rpx;
	}

	.achd13 {
		width: 44rpx;
		height: 44rpx;
		border-radius: 40rpx;
		margin-right: -20rpx;
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



	.txttitle1 {
		font-size: 28rpx;
		width: 228rpx;
		font-weight: 600;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-left: 10rpx;
	}

	.text_money {
		/* width: 64rpx; */
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
		padding: 0rpx 10rpx;
	}

	.txttitle {
		margin-left: 10rpx;
		margin-top: 30rpx;
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

	.sj_left_img {

		width: 324rpx;
		height: 298rpx;
		border-radius: 10rpx 10rpx 0rpx 0rpx;

	}

	.left_zview {
		position: relative;
		width: 100%;
		height: auto;
		background: white;

		box-shadow: 0px 6px 20px 0px rgba(175, 175, 175, 0.14);
	}

	.text-center {
		/* margin: 15rpx; */
		background-color: white;
		border-radius: 20rpx;
		border: 1rpx solid #F2F2F2;
		margin: 20rpx 30rpx 20rpx 0;
	}

	.left {
		width: 324rpx;
		overflow: hidden;
		/* height: 92px; */
	}

	.wall {
		display: flex;
		justify-content: space-around;
		/* padding: 0 40rpx; */

	}

	.zhuti {
		border-radius: 20rpx;
	}

	/* 轮播图 */
	.cover {
		width: 100%;
		/* object-fit: cover;
		height: 100%; */
	}

	.theme_swiperImg {
		/* height: 508rpx;
		width: 660rpx;
		border-radius: 10rpx; */
		/* border-radius: 20rpx; */
		/* height: 96%; */
		width: 98%;
		margin-left: 1%;
	}

	.theme_swiper {
		width: 100%;
		/* height: 420rpx; */
		height: 497rpx;
		margin-top: 20rpx;
	}

	/* 主题推荐 */
	.quan {
		width: 40rpx;
		height: 40rpx;
		background: rgba(248, 184, 0, 0.5);
		border-radius: 50rpx;
		position: absolute;
		left: 0;
		top: 0;
	}

	.quan22 {
		flex: 1;
		height: 30rpx;
		background: rgba(248, 184, 0, 0.5);
		border-radius: 50rpx;
		position: absolute;
		left: 0;
		width: 150rpx;
		top: 20rpx;
	}

	.theme_text {
		font-size: 32rpx;
		font-weight: 400;
		font-family: Inter-Regular, Inter;
		margin-top: 22rpx;
		white-space: pre-line;
	}

	.theme_title {
		font-size: 36rpx;
		font-family: Inter-Regular, Inter;
		font-weight: 800;
		margin-left: 10rpx;
	}

	.theme_view {
		display: flex;
		position: relative;
	}

	.theme {
		/* 	padding-left: 30rpx;
		padding-right: 30rpx; */
	}

	/* 横向滚动 */
	.basic_scroll {
		display: flex;
		/* justify-content: space-between; */
		margin-top: 0rpx;
		margin-bottom: 10rpx;
		/* margin-left:-25rpx; */
	}

	.scroll_item_read {
		font-size: 20rpx;
		padding: 4rpx 10rpx;
		background: #F8b800;
		color: white;
		border-radius: 100rpx;
		position: absolute;
		top: 0px;

	}

	.scroll_item_view {
		/* display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center; */
	}

	.scroll_item_name {
		font-size: 24rpx;
		font-family: Inter-Regular, Inter;
		width: 86rpx;
		height: 34rpx;
		margin-top: 10rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.scroll_item_type {
		width: 100rpx;
		height: 100rpx;
		border-radius: 100rpx;
		/* border: 4rpx solid #F8B800; */
		margin-left: 20rpx;
	}

	.scroll_item_img {
		width: 100rpx;
		height: 100rpx;
		border-radius: 100rpx;
		/* border: 4rpx solid #F8B800; */
		/* border: 7rpx solid #EC7A9C; */
	}

	.scroll_item {
		display: inline-block;
		text-align: center;
		width: 104rpx;
		/* margin-right: 15rpx; */
		margin-right: 35rpx;
	}

	.scroll_view {
		white-space: nowrap;
		width: 575rpx;
	}

	/* 商家电话导航 */
	.shop_call_img {
		width: 40rpx;
		height: 46rpx;
	}

	.shop_call {
		display: flex;
	}

	.shop_call_view {
		text-align: center;
		font-size: 20rpx;
		margin: 0 12rpx;
	}

	.shop_basic {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.shop_addname {
		/* font-size: 28rpx; */

		font-family: Inter-Regular, Inter;

		font-weight: 400;
	}

	.infoaddr {
		width: 550rpx;
		color: #111111;
	}

	.shop_distance {
		font-size: 28rpx;
		color: #939393;

	}

	.shop_distance text {
		color: #F8B800;
	}

	.shop_name {
		font-size: 32rpx;
		font-weight: 800;
		font-family: Inter-Regular, Inter;
	}

	.shop {
		font-size: 32rpx;
		/* padding-left: 30rpx; */
		padding-top: 26rpx;
		/* padding-right: 30rpx; */
	}

	.cuxian1 {
		height: 12rpx;
		background: #F8F8F8;
		margin: 40rpx 0;
	}

	.cuxian {
		height: 12rpx;
		background: #F8F8F8;
		margin: 26rpx 0;
	}

	.cuxian22 {
		height: 12rpx;
		background: #2F2E39;
		margin: 26rpx 0;
	}

	/* 基本要求 */
	.basic_text_one {
		margin-right: 16rpx;
		display: flex;
		align-items: center;
	}

	.basic_text_one text {
		margin-left: 10rpx;
	}

	.basic_text {
		font-size: 32rpx;
	}

	.basic_TowView {
		font-size: 32rpx;
	}

	.basic_requirement {
		display: flex;
		align-items: center;
		font-size: 32rpx;
		padding: 20rpx;
		/* background-image: linear-gradient(to right, #FF8686, #f5f5eb); */
		background-image: url(http://ysv.zjhaly.top/chulaiwan/active/Rectangle%201649%402x.png);
		background-size: 100% 100%;
		color: #FF6448;
	}

	.basic_img {
		width: 36rpx;
		height: 36rpx;
		/* margin-top: 11rpx; */
	}

	.app {
		position: fixed;
		/* background: rgba(0, 0, 0, 0.3); */
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		z-index: 25;
		display: flex;
		align-items: center;
		justify-content: center;
		/* position: fixed;
		z-index: 11;
		top: 36%;
		left: 21.1%; */
	}

	.app .content {
		width: 440rpx;
		height: 466.01rpx;
		/* position: relative; */
		top: 26%;
		left: 13%;
		z-index: 10;
	}

	.app .close {
		width: 52rpx;
		height: 52rpx;

		position: absolute;
		left: 73%;
		/* top: -51px; */
		z-index: 11;
	}

	/* 基本信息 */
	.basic_border {
		width: 100%;
		height: 1rpx;
		background-color: #E4E4E4;
		margin: 26rpx 0 6rpx 0;
	}

	.basic_time span {
		color: #fff;
	}

	.basic_time {
		font-size: 32rpx;
		/* text-align: center; */
		padding-top: 39rpx;
		padding-left: 44rpx;
	}

	.basic_money {
		font-size: 52rpx;
	}

	.rensheng_img {
		width: 100%;
		height: 148rpx;
	}

	.basic_cate1 {

		border-radius: 12rpx;
		color: #F8B800;
		font-size: 32rpx;
		padding: 10rpx 25rpx;
		background: #000000;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		/* height: 60rpx; */
	}

	.basic_cate2 {
		background: #F8B800;
		/* padding: 12rpx 22rpx; */
		border-radius: 12rpx;
		color: #000000;
		font-size: 32rpx;
		padding: 10rpx 25rpx;

		position: relative;
		left: -14rpx;
	}

	.basic_title {
		display: flex;
		align-items: center;
		font-size: 36rpx;
		padding: 38rpx 0;
		font-weight: bold;
	}

	.basic {
		/* padding-left: 30rpx; */
		padding-top: 44rpx;
		/* padding-right: 30rpx; */
		/* background-image: linear-gradient(to right, #FFB15B, #E96535); */
		border-radius: 30pt 30pt 0pt 0pt;
		position: relative;
		top: -96rpx;
	}

	.box {
		border-radius: 16px 16px 0 0;
		/* position: relative;
		top: 44rpx; */
		background-color: #fff;
		padding: 0 28rpx;
		/* z-index: 2; */

		position: relative;
		/* top: -94rpx; */
		margin-top: -94rpx;

	}

	.boxbgh {
		background-image: linear-gradient(to right, #272438, #000000);
	}
</style>