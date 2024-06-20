<template>
	<view class="content pore">

		<view class="colonn" style="position: fixed;top: 0rpx;left: 0rpx;z-index: 1;" v-if="!nightMode">
			<image src="https://ta.imjiayi.com/upload/upload/发布活动_slices/未标题-102@2x.png"
				class="w-750 topbg "></image>
				<view class="bottomview"></view>
		</view>
		<view class="colonn" style="position: fixed;top: 0rpx;left: 0rpx;z-index: 1;" v-if="nightMode">
			<image src="https://ta.imjiayi.com/upload/upload/发布活动_slices/未标题-2 9571@2x.png"
				class="w-750 topbg "></image>
			<view class="bottomview1" style="margin-top: -1vh;height: 71vh;"></view>
		</view>

		<!-- 分类 -->
		<scroll-view
			style="width: 750rpx;height: 100vh;position:fixed;left: 0rpx;top:0rpx;z-index: 100;padding: 0rpx 20rpx;"
			scroll-y>
			<view class="colonn">
				<view :style="{
					height:jiaonang.top+'px',
				}"></view>
				<view class="roww center_center" style="width: 710rpx;" :style="{
					height:jiaonang.height+'px',
				}">
					<view class="roww pore center_center rowsb w-750">
						
						<image @click.stop="tobackpage" v-if="!nightMode" src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (6).png"
						 class="w-40 h-40 m-left-50"></image>
						<image @click.stop="tobackpage" v-else src="https://ta.imjiayi.com/upload/upload/VIP_slices/左箭头.png" 
						class="w-40 h-40 m-left-50"></image>
						
						<view class="fabuhuodong" v-if="!nightMode">发布活动</view>
						<view class="fabuhuodong" style="color: white;" v-if="nightMode">发布活动</view>
						<image src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (6).png" class="w-40 h-40 m-right-50"></image>
					</view>
				</view>
				<view class="h-45"></view>
				<view class="colonn">
					<view class="colonn">
						<image 
						:src="nightMode?heiye[0]:baiye[0]"
							class="w-210 h-78"></image>
						<view class="h-52"></view>
						<view class="huanhang rowsb ">
							<block v-for="(item,index) in actelist">
								<view class="colonn m-bottom-30" style="position: relative;top: -16rpx;"
									v-if="selTypeIndex==index">
									<image class="typeimg1" mode="aspectFill" :src="item.cover"></image>
									<view class="h-15"></view>
									<view class="typetxt" style="color:#F8B800;">{{item.name}}</view>
								</view>
								<view class="colonn m-bottom-30" v-else @click.stop="selTypeIndexClick(index,item)">
									<image class="typeimg" mode="aspectFill" :src="item.cover"></image>
									<view class="h-15"></view>
									<view class="typetxt" style="color: white;" v-if="nightMode">{{item.name}}</view>
									<view class="typetxt" v-else>{{item.name}}</view>
								</view>
							</block>

						</view>
					</view>
					<view class="colonn">
						<image 
						:src="nightMode?heiye[1]:baiye[1]"
							class="w-210 h-78"></image>
						<view class="h-46"></view>
						<view class="TitleTowView1">
							<input type="text" 
							
						 class="allline"
							
							:style="{
								color:nightMode?'white':'black'
							}"
							:placeholder-style="{
								color:nightMode?'white':'black'
							}"
							
							v-model="TitleValue" :maxlength="20" placeholder="请输入标题" />
							<view class="TitleTowRight roww">
								<text style="color: #F8B800;">{{TitleValue.length}}</text>
								<text
								:style="{
									color:nightMode?'white':'black'
								}"
								>/20</text>
							</view>
						</view>
					</view>

					<view class="colonn">
						<image 
						:src="nightMode?heiye[2]:baiye[2]"
							class="w-210 h-78">
						</image>
						<view class="h-46"></view>
						<view class="TimeTowView1">
							<view class="roww center_center" @click="is_kai_time=true">
								<view class="TimeLast_Title" style="color: white;" v-if="nightMode">开始时间</view>
								<view class="TimeLast_Title" v-else>开始时间</view>
								<view class="allline"></view>
								<view>{{year}}.{{month}}.{{day}} {{hour}}:{{Minute}}</view>
								<image
									src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (6)@2x(2).png"
									class="w-30 h-30" v-if="!nightMode"></image>
									<image
										src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (7) 2@2x.png"
										class="w-30 h-30" v-if="nightMode"></image>
							</view>
							<view class="h-30"></view>
							<view class="roww center_center" @click="is_kai_time1=true">
								<view class="TimeLast_Title" style="color: white;" v-if="nightMode">结束时间</view>
								<view class="TimeLast_Title"  v-else>结束时间</view>
								<view class="allline"></view>
								<view>{{year1}}.{{month1}}.{{day1}} {{hour1}}:{{Minute1}}</view>
								<image
									src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (6)@2x(2).png"
									class="w-30 h-30" v-if="!nightMode"></image>
									<image
										src="https://ta.imjiayi.com/upload/upload/发布活动_slices/箭头 下 (7) 2@2x.png"
										class="w-30 h-30" v-if="nightMode"></image>
							</view>
						</view>
					</view>
					<view class="h-57"></view>
					<view class="fengexian"></view>
					<view class="h-54"></view>
					<view class="jiodphdizhi duiqi roww" 
					:style="{
						color:nightMode?'white':'black'
					}"
					>
						<view>活动地址</view>
						<view class="w-78 "></view>
						<view class="roww center_center"  @click.stop="navAddress(1)">
							<image src="https://ta.imjiayi.com/upload/upload/发布活动_slices/切图12@2x(3).png"
								class="w-30 h-30 m-right-10"></image>
							<view>选择优惠商家</view>
							<view class="w-26"></view>
						</view>
						<view class="roww center_center"
						@click.stop="navAddress(2)"
						>
							<image src="https://ta.imjiayi.com/upload/upload/发布活动_slices/切图12@2x(3).png"
								class="w-30 h-30 m-right-10"></image>
							<view>自定义位置</view>
						</view>
					</view>
					<view class="h-20"></view>
					<view class="roww center_center" style="line-height: 40rpx;"
					:style="{
						color:nightMode?'white':'black'
					}"
					>
						<image class="w-40 h-40  "
							src="https://ta.imjiayi.com/upload/upload/发布活动_slices/位置 2@2x.png"></image>
							<view v-if="add_type==1">{{ addname}}</view>
							<view v-else-if="add_type==2">{{addname}}</view>
							<view v-else>请选择地点</view>
							<view class="allline"></view>
					</view>
					<view class="h-57"></view>
					<view class="colonn">
						<image 
						:src="nightMode?heiye[3]:baiye[3]"
							class="w-210 h-78">
						</image>
						<view class="h-46"></view>
						<view class="roww center_center"
						:style="{
							color:nightMode?'white':'black'
						}"
						> 
							<view
							
							>设置人数</view>
							<view class="allline"></view>
							<view class="roww center_center" @click.stop="p_num_typeClick(1)">
								<image :src="(p_num_type)==1?selYuan[1]:selYuan[0]"
									class="w-30 h-30 m-right-15"></image>
								<view>精准人数</view>
							</view>
							<view class="w-25"></view>
							<view class="roww center_center" @click.stop="p_num_typeClick(2)">
								<image  :src="(p_num_type)==2?selYuan[1]:selYuan[0]"
									class="w-30 h-30 m-right-15"></image>
								<view>模糊人数</view>
							</view>
							
							
							
						</view>
						<view class="h-33"></view>
						
						<view class="huanhang rowsa" v-if="p_num_type==1">
							
							<block v-if="!nightMode">
								<view
								:class="{
									'remitem':RenNum!=(item+2),
									'remitembg':RenNum==(item+2),
								}"
								v-for="(item,index) in 9"
								 @click.stop="onRen(item+2,1)"
								>
									{{index+2+'人'}}
								</view>
							</block>
							<block v-if="nightMode">
								<view
								:class="{
									'remitem2':RenNum!=(item+2),
									'remitembg':RenNum==(item+2),
								}"
								v-for="(item,index) in 9"
								 @click.stop="onRen(item+2,1)"
								>
									{{index+2+'人'}}
								</view>
							</block>
							
							
							
							<view class="remitem yincang1" >
							</view>
						</view>
						
						<view class="huanhang rowsa" v-if="p_num_type==2">
							<block v-if="!nightMode">
								<view class="remitem1" v-for="(item,index) in pnumberList"
								 @click.stop="onRen(item.value,2)"
								 :class="{
								 	'remitem1':RenNumT!=(item.value),
								 	'remitem1bg':RenNumT==(item.value),
								 }"
								 
								>
									{{item.value+'人'}}
								</view>
							</block>
							<block v-if="nightMode">
								<view class="remitem1" v-for="(item,index) in pnumberList"
								 @click.stop="onRen(item.value,2)"
								 :class="{
								 	'remitem2':RenNumT!=(item.value),
								 	'remitem1bg':RenNumT==(item.value),
								 }"
								>
									{{item.value+'人'}}
								</view>
							</block>
							
							
							<view class="remitem1 yincang1" v-for="(item,index) in 2">
								1111
							</view>
						</view>
						
						
						
						<view class="h-71"></view>
						<view class="roww center_center"
						:style="{
							color:nightMode?'white':'black'
						}"
						>
							<view>性别要求</view>
							<view class="allline"></view>
						</view>
						<view class="h-28"></view>
						<view class="roww rowsa">
							<image class="seximg"
							@click="changeSex(1)"
								:src="sex==1?seximg[0]:seximg[3]"
								>
							</image>
							<image class="seximg"
								
								@click="changeSex(2)"
									:src="sex==2?seximg[1]:seximg[4]"></image>
							<image class="seximg"
								
								@click="changeSex(0)"
									:src="sex==0?seximg[2]:seximg[5]"></image>
						</view>    

						<view class="h-71"></view>
						<view class="roww center_center"
						:style="{
							color:nightMode?'white':'black'
						}"
						>
							<view>付款方式</view>
							<view class="allline"></view>
						</view>
						<view class="h-28"></view>
						<view class="huanhang rowsa">
							
							<block v-if="!nightMode">
								<view
								:class="{
									'fukuanfnagshiitem':pay_type!=(index+1),
									'fukuanfnagshiitem1':pay_type==(index+1),
								}"
								@click="pay_typeClick(index+1)"
								v-for="(item,index) in fukuanfangshi">
									{{item.name}}
								</view>
							</block>
							<block v-else>
								<view
								:class="{
									'fukuanfnagshiitemh':pay_type!=(index+1),
									'fukuanfnagshiitem1':pay_type==(index+1),
								}"
								@click="pay_typeClick(index+1)"
								v-for="(item,index) in fukuanfangshi">
									{{item.name}}
								</view>
							</block>
							
							
							
							<view class="fukuanfnagshiitem yincang1" >
								
							</view>
						</view>
						<view class="h-35"></view>
						<view 
						v-if="pay_type!=2"
						class="roww center_center"
						:style="{
							color:nightMode?'white':'black'
						}"
						>
							<view>人均</view>
							<view class="allline"></view>
								<input class="limitMoneyInput"  
								:style="{
									color:nightMode?'white':'black'
								}"
								
								:placeholder-style="{
									color:nightMode?'white':'black'
								}"
								placeholder="金额" type="number" v-model="money" value="" />
								<view class="w-20"></view>
							<view style="color: red;">元</view>
						</view>
						<view class="h-85"></view>
					</view>
					<view class="h-37"></view>

					<view class="colonn">
						<image 
						:src="nightMode?heiye[4]:baiye[4]"
							class="w-210 h-78">
						</image>
						<view class="h-46"></view>
						<view class="jieshaoview colonn"
						 :style="{
							background:nightMode?'#1B1926' :''
						 }"
						 >
							<textarea style="width: 675rpx;" 
							v-model="Detail" 
							maxlength="500"
							placeholder="请输入本次的活动"></textarea>
							
							<view class="huanhang">
								<!-- <image  v-for="(item,index) in OSSlist"
									:src="item"
									class="w-118 h-118 m-right-15" ></image>
									<image 
										src="https://ta.imjiayi.com/upload/upload/发布活动_slices/Component 66@2x.png"
										class="w-118 h-118 m-right-15"  @click="chooseImg"></image> -->
											<view class="OSSView" v-for="(item,index) in OSSlist" :key="index">
												<view class="OSSX" @click.stop="onOSSdelete(index)">x</view>
												<image class="introduceupload" :src="item" mode=""></image>
											</view>
											<image class="introduceupload" 
											@click="chooseImg" src="../../static/upload.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="fabuaa" @click="onbtn">发布</view>
					<view class="h-50"></view>
				</view>
			</view>

		</scroll-view>

		<!-- 选择时间 -->
		<!-- 选择时间 -->
		<view class="pickerceng" v-if="is_kai_time" @click="is_kai_time=false">
			<view class="pickerView">
				<picker-view :indicator-style="indicatorStyle" :value="value" @change.stop="bindChange"
					class="picker-view">
					<picker-view-column>
						<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in hours" :key="index">{{item}}时</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in Minutes" :key="index">{{item}}分</view>
					</picker-view-column>
				</picker-view>
				<button type="default" @click="is_kai_time=false">确定</button>
			</view>

		</view>
		<view class="pickerceng" v-if="is_kai_time1" @click="is_kai_time1=false">
			<view class="pickerView">
				<picker-view :indicator-style="indicatorStyle" :value="value1" @change.stop="bindChange1"
					class="picker-view">
					<picker-view-column>
						<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in hours" :key="index">{{item}}时</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in Minutes" :key="index">{{item}}分</view>
					</picker-view-column>
				</picker-view>
				<button type="default" @click="is_kai_time1=false">确定</button>
			</view>
		</view>




	</view>
</template>

<script>
	import uploadImage from '../../js_sdk/yushijie-ossutil/ossutil/uploadFile.js'
	export default {



		data() {

			const date = new Date()
			// 年
			const years = []
			const year = date.getFullYear()
			const year1 = date.getFullYear()
			// // 月
			const months = []
			const month = date.getMonth() + 1
			const month1 = date.getMonth() + 1
			// // 日
			const days = []
			const day = date.getDate()
			const day1 = date.getDate()
			// // 时
			const hours = []
			const hour = date.getHours() + 1
			const hour1 = date.getHours() + 1
			// // 分
			const Minutes = []
			const Minute = date.getMinutes()
			const Minute1 = date.getMinutes()
			// 时间戳
			const s_time = parseInt(date.getTime() / 1000);
			const e_time = parseInt(date.getTime() / 1000);
			for (let i = 2016; i <= date.getFullYear() + 5; i++) {
				years.push(i)
			}
			for (let i = 0; i <= 24; i++) {
				hours.push(i)
			}
			for (let i = 0; i <= 60; i++) {
				Minutes.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}

			return {
				
				baiye:[
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图1@2x.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图2@2x.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图3.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图4.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图5.png',
					''
				],
				heiye:[
					'https://ta.imjiayi.com/upload/upload/发布活动_slices (2)/切图24@2x.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices (2)/切图23@2x.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices (2)/切图22@2x.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices (2)/切图21@2x.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices (2)/切图20 1@2x.png'
				],
				
				jiaonang: {},
				TitleValue: "",
				nightMode: false,
				selTypeIndex: -1,
				activityTitle:"",
				OSSlist:[],
				selYuan:[
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图12@2x.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图13@2x.png'
				],
				seximg:[
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图6@2x.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图8.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图10.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图7.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图9.png',
					'https://ta.imjiayi.com/upload/upload/发布活动_slices/切图11.png',
				],
				sex:2,
				p_num_value:"",
				p_num_type:1,
				RenNum:"",
				RenNumT:'',
				pay_type:-1,
				cate_id: '',
				cate_name:"",
				// 封面图
				Cover: '',
				
				pnumberList:[
					{
						'value':'2~4'
					},
					{
						'value':'4~6'
					},
					{
						'value':'6~10'
					},
					{
						'value':'15~20'
					},
					{
						'value':'20~30'
					}
				],
				
				// 地址选择
				AddressBottom: false,
				add_type: null,
				addname: '',
				addDetail: '',
				Detail:"",//简介
				
				// 上传图片
				OSSlist: [],
				ASSlist: [],
				
				lat: '',
				lng: '',
				fukuanfangshi:[
					{
						'name':'AA',
						'id':'1'
					},{
						'name':'免费',
						'id':'2'
					},{
						'name':'男A女免',
						'id':'3'
					},{
						'name':'女A男免',
						'id':'4'
					},{
						'name':'我请客',
						'id':'5'
					}
				],
				VIP:null,
				money:0,
				
				baseurl: getApp().globalData.baseurl,
				token: getApp().globalData.token,
				actelist: [], //分类
				is_kai_time: false,
				is_kai_time1: false,
				indicatorStyle: `height: 50px;`,
				years,
				year,
				year1,
				months,
				month,
				month1,
				days,
				day,
				day1,
				hour,
				hour1,
				hours,
				Minutes,
				Minute,
				Minute1,
				value: [8, month - 1, day - 1, hour, Minute],
				value1: [8, month1 - 1, day1 - 1, hour1, Minute1],
				visible: true,
				is_kai_time: false,
				is_kai_time1: false,

			}
		},
		onLoad() {
			const date = new Date()
			this.s_time = parseInt(date.getTime() / 1000);
			this.e_time = parseInt(date.getTime() / 1000);
			
			this.getJiaonang();
			
			this.acte();
		},
		onShow() {
			this.getYejian()
		},
		methods: {
			
			changeSex(index){
				this.sex=index;
			},
			
			getYejian() {
				wx.getSystemInfo({
					success: (res)=> {
						// 判断是否开启了夜间模式
						var nightMode = res.theme === 'dark';
						this.nightMode = nightMode;
						console.log('夜间模式状态:', nightMode);
						console.log('夜间模式状态:',this.nightMode, res);
					}
				});
			},
			tobackpage(){
				uni.navigateBack({
					delta:1
				})
			},
			onbtn() {
			
				uni.showLoading({
					mask: true,
					title: "正在发布",
				})
				let cover = '';
				// this.Cover.length > 0 ,
				console.log("截图给我看看",this.cate_id != '' , 
				this.TitleValue.length > 0 , 
				this.s_time ,
				this.e_time,  
				this.s_time > 0 , 
				this
					.e_time > 0 , 
					this.add_type != "" , 
					this.addname.length > 0 , 
					this.addDetail.length > 0 ,
					this
					.lat > 0 , this.lng > 0 ,
					 this.p_num_type != '' , 
					 this.creditText != '' , 
					 this.sex,this.sex != "" , 
					 this.VIP !=
					"" , this.pay_type != '' , 
					this.money != '' , 
					this.Detail.length > 0 , 
					this.OSSlist.length );
					
					
					if(this.cate_id==''){
						uni.showToast({
							title: '请选择分类',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					if(this.TitleValue==''){
						uni.showToast({
							title: '请输入活动标题',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					if(this.s_time==''){
						uni.showToast({
							title: '请输入活动标题',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					if(this.addname==''){
						uni.showToast({
							title: '请选择活动地址',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					
					if(this.lat==''||this.lng==''){
						uni.showToast({
							title: '经纬度出现问题',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					if(this.lat==''||this.lng==''){
						uni.showToast({
							title: '经纬度出现问题',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					
					if(this.p_num_type==1&&this.RenNum==''){
						uni.showToast({
							title: '请设置参加人数',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					if(this.p_num_type==2&&this.RenNumT==''){
						uni.showToast({
							title: '请设置参加人数',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					if(this.pay_type<0){
						uni.showToast({
							title: '请选择支付类型',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					if(this.pay_type==2){
						this.money=0;
					}
					if(this.Detail==""){
						uni.showToast({
							title: '请输入活动简介',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					if(this.OSSlist.length<=0){
						uni.showToast({
							title: '请输入活动图片',
							mask: true,
							icon: 'none'
						});
						return false;
					}
					
					
					
					// if(this.addDetail==''){
					// 	uni.showToast({
					// 		title: '商家',
					// 		mask: true,
					// 		icon: 'none'
					// 	});
					// 	return false;
					// }
					
					
					
					// --------------
				// if (this.cate_id != '' && this.TitleValue.length > 0  && this.s_time > 0 && this
				// 	.e_time > 0 && this.add_type != "" && this.addname.length > 0 
				// 	&& this.addDetail.length > 0 && this
				// 	.lat > 0 && this.lng > 0 && this.p_num_type != ''  &&  this
				// 	.VIP !=
				// 	"" && this.pay_type != '' && this.money != '' && this.Detail.length > 0 && this.OSSlist.length > 0) {
					// 上传封面图片
					// uploadImage(this.Cover, 'image/xcx/',
					// 	result => {
					// 		console.log('oss', result);
					// 		cover = result;
					// 		console.log("封面", cover);
					// 	});
					setTimeout(() => {
						
						this.OSSlist.map(item => {
							uploadImage(item, 'image/xcx/',
								result => {
									console.log(result);
									this.ASSlist.push(result)
									console.log(this.ASSlist.length == this.OSSlist.length);
									if (this.ASSlist.length == this.OSSlist.length) {
										console.log(this.baseurl);
										uni.request({
											url: this.baseurl+'/api/actDo/actCreate',
											header: {
												xcx:1,
												token: this.token
											},
											method: 'POST',
											data: {
												// 分类id
												cate_id: this.cate_id,
												// 标题
												title: this.TitleValue,
												// 封面图
												// cover: cover,
												// 开始时间
												s_time: this.s_time,
												// 结束时间
												e_time: this.e_time,
												// 活动地址状态
												add_type: this.add_type,
												// 商铺编号
												shop_no: this.shop_no,
												// 地址名称
												add_name: this.addname,
												// 详细地址
												add_detail: this.addDetail,
												// 经度
												lng: this.lng,
												// 纬度
												lat: this.lat,
												// 人数选择
												p_num_type: this.p_num_type,
												p_num_acc: this.RenNum,
												p_num_sec: this.RenNumT,
												// 信誉积分
												// credit: this.creditText,
												// 性别
												sex: this.sex,
												// 是否VIP
												vip: this.VIP,
												// 付款方式
												pay_type: this.pay_type,
												money: this.money,
												content_text: this.Detail,
												content_img: this.ASSlist,
												city:uni.getStorageSync("citySel"),
											},
											success: res => {
												console.log("发布活动", res);
												uni.hideLoading();
												if(res.data.code==1){
													uni.showToast({
														title:"发布 成功",
														mask:true,
														icon:'none',
														success() {
															setTimeout(res=>{
																uni.navigateBack({
																	delta: 1,
																});
															},1000)
															
														}
													});
												}else{
													uni.showToast({
														title:res.data.info,
														mask:true,
														icon:'none',
														success() {
															setTimeout(res=>{
																uni.navigateBack({
																	delta: 1,
																});
															},1000)  
															
														}
													});
												}
												
												
											},
											fail: () => {},
											complete: () => {}
										});
									}
								})
						});
					}, 2000)
					// 上传详情图片
			
				// } else {
				// 	uni.showToast({
				// 		title: '请仔细检查所填内容',
				// 		mask: true,
				// 		icon: 'none'
				// 	});
				// }
			
			
			},
			
			// 删除图片
			onOSSdelete(index) {
				console.log("删除",index)
				this.OSSlist.splice(index, 1)
				this.$forceUpdate();
			},
			//选择图片
			chooseImg() {
				let _this = this;
				uni.chooseMedia({
					count: 9,
					success(res) {
						console.log("选择图片九张", res);
						res.tempFiles.forEach(item => {
							_this.OSSlist.push(item.tempFilePath);
						})
					},
					complete: (res) => {
						console.log("阿达",res);
					}
				});
			},
			pay_typeClick(index){
				this.pay_type=index;
			},
			p_num_typeClick(index){
				this.p_num_type=index;
			},
			// 人数选择
			onRen(num, type) {
				this.p_num_type = type;
				if (type == 1) {
					this.RenNum = num;
					this.RenNumT = '';
				} else if (type == 2) {
					this.RenNumT = num;
					this.RenNum = '';
				}
			},
			// 商家选择
			navAddress(type) {
				if(this.selTypeIndex==-1){
					uni.showToast({
						title:"请先选择活动分类",
						icon:"none"
					})
					return false;
				}
				
				this.add_type = type;
				if (type == 1) {
					uni.navigateTo({
						url: '../shangjiaAddress/shangjiaAddress?cate_id=' + this.cate_id,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				} else if (type == 2) {
					uni.navigateTo({
						url: '../Groupaddress/Groupaddress',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}
			},
			selTypeIndexClick(index,item) {
				this.selTypeIndex = index;
				this.cate_id=item.id;
			},
			// 选择时间
			bindChange: function(e) {
				let val = e.detail.value
				console.log(val)
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
				this.hour = this.hours[val[3]]
				this.Minute = this.Minutes[val[4]]
				console.log("年", this.year);
				console.log("yue", this.month);
				console.log("日", this.day);
				console.log("是", this.hour);
				console.log("分", this.Minute);
				let time = this.year + '-' + this.month + '-' + this.day + ' ' + this.hour + ':' + this.Minute;
				console.log("date", time);
				let date = new Date(this.year, this.month - 1, this.day, this.hour, this.Minute);
				console.log("date1", date);
				this.s_time = parseInt(date.getTime() / 1000);
				console.log("结束", this.s_time);
			},
			bindChange1: function(e) {
				let val = e.detail.value
				console.log(val)
				this.year1 = this.years[val[0]]
				this.month1 = this.months[val[1]]
				this.day1 = this.days[val[2]]
				this.hour1 = this.hours[val[3]]
				this.Minute1 = this.Minutes[val[4]]
				let time = this.year1 + '-' + this.month1 + '-' + this.day1 + ' ' + this.hour1 + ':' + this.Minute1;
				let time1 = this.year1 + '-' + this.month1 + '-' + this.day1 + '-' + this.hour1 + ':' + this.Minute1 +
					':' + '58';
				console.log(time);
				let date = new Date(this.year1, this.month1 - 1, this.day1, this.hour1, this.Minute1);
				console.log(date);
				this.e_time = parseInt(date.getTime() / 1000);
				console.log("开始", this.e_time);
			},
			// 获取分类
			acte() {
				if(!this.token){
					uni.showToast({
						title:"请先登录",
						icon:"none"
					})
					setTimeout(res=>{
						
						uni.navigateTo({
							url:"/pages/Login/Login"
						})  
					},2000)
					return false;
				}
				
				
				var loginInfo=uni.getStorageSync("loginInfo");
				if(loginInfo){
					if(loginInfo.status==0){
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
				
				
				uni.request({
					url: this.baseurl + '/api/act/actCate',
					method: 'POST',
					header: {
						xcx: 1,
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
			
			getJiaonang() {
				const jn = wx.getMenuButtonBoundingClientRect();
				this.jiaonang = jn;
			}
		}
	}
</script>

<style>
	@import url(group.css);
</style>