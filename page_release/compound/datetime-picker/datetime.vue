<template>
    <view class="yu-datetime-wrap">
        <view :class="'yu-datetime-form ' + (showBorder ? 'yu-datetime-form-border' : '')">
            <view class="yu-datetime-form-hd" v-if="label">
                <text>{{ label }}</text>
            </view>
            <view class="yu-datetime-form-bd yu-datetime-form-disabled" v-if="disabled">
                <view class="yu-datetime-form-value" v-if="valueShow">{{ valueShow }}</view>
                <view class="yu-datetime-form-placeholder" v-else>{{ placeholder }}</view>
            </view>
            <view class="yu-datetime-form-bd" @tap="handleShowPicker" v-else>
                <view class="yu-datetime-form-value" v-if="valueShow">{{ valueShow }}</view>
                <view class="yu-datetime-form-placeholder" v-else>{{ placeholder }}</view>
            </view>
            <view :class="'yu-datetime-form-ft ' + (showArrow ? 'yu-datetime-form-arrow' : '')"></view>
        </view>
		
        <view :class="'yu-datetime-mask ' + (showDatetime ? 'yu-datetime-mask-show' : '')" @tap.stop.prevent="handleMask" @touchmove.stop.prevent="handleMask"></view>
        <view :class="'yu-datetime-view ' + (showDatetime ? 'yu-datetime-view-show' : '')">
            <view class="yu-datetime-hd" @touchmove.stop.prevent="handleMask">
                <view class="yu-datetime-cancel" @tap.stop.prevent="pickerCancel">
                    <image class="img" src="/static/datetime/close.png" mode="widthFix"></image>
                </view>
                <view class="yu-datetime-title"></view>
                <view class="yu-datetime-confirm" :style="'color:' + color + ';'" @tap.stop.prevent="pickerConfirm">确定</view>
            </view>
			
			=== {{valueArr}} ====
            <view class="yu-datetime-bd">
                <picker-view class="yu-datetime-picker" :indicator-style="pickerViewStyle" :value="values" @change="handleChange">
                    <block v-if="type == 'datetime' || type == 'date'">
                        <picker-view-column>
                            <view class="yu-datetime-item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
                        </picker-view-column>
                        <picker-view-column>
                            <view class="yu-datetime-item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
                        </picker-view-column>
                        <picker-view-column>
                            <view class="yu-datetime-item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
                        </picker-view-column>
                    </block>
                    <block v-if="type == 'datetime' || type == 'time'">
                        <picker-view-column>
                            <view class="yu-datetime-item" v-for="(item, index) in hours" :key="index">{{ item }}时</view>
                        </picker-view-column>
                        <picker-view-column>
                            <view class="yu-datetime-item" v-for="(item, index) in minutes" :key="index">{{ item }}分</view>
                        </picker-view-column>
                    </block>
                </picker-view>
            </view>
			
			<view class="yu-datetime-lunar" v-if="isSwitch">
				<view>
					开启农历：<switch @change="switchBtn" :checked="openLunar==1"></switch>
				</view>
			</view>
			
        </view>
		
    </view>
</template>

<script>
import conversion from "@/utils/calendar.js"
export default {
    data() {
        return {
            pickerViewStyle: `height:44px;`,
            showDatetime: false,
            years: [],
            months: [],
            days: [],
            hours: [],
            minutes: [],
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: '',
            values: [0, 0, 0, 0, 0],
            valueArr: [],
            // picker变化后的值
            valueShow: '' // 默认需要显示的值或选中的显示值
        };
    },
    options: {
        multipleSlots: true
    },
    props: {
        label: { // 表单label
            type: String,
            default: ''
        },
        placeholder: { // 占位提示
            type: String,
            default: ''
        },
        value: { // 默认日期值
            type: String,
            default: ''
        },
        type: { // 类型 datetime/date/time
            type: String,
            default: 'datetime'
        },
        color: { // 确认按钮颜色
            type: String,
            default: '#3565ee'
        },
        startYear: { // 开始年份 type为datetime/date生效
            type: [String, Number],
            default: 1970
        },
        endYear: { // 结束年份 type为datetime/date生效
            type: [String, Number],
            default: new Date().getFullYear()
        },
        step: { // 分钟步长 type为datetime/time生效
            type: [String, Number],
            default: 1
        },
        maskClose: { // 是否开启点击遮罩关闭弹窗
            type: [Boolean, String],
            default: true
        },
        separator: { // 输出的日期分隔符 type为datetime/date生效
            type: String,
            default: '-'
        },
        showArrow: { // 是否显示箭头
            type: [Boolean, String],
            default: true
        },
        showBorder: { // 是否显示线条
            type: [Boolean, String],
            default: false
        },
        disabled: { // 是否禁用
            type: [Boolean, String],
            default: false
        },
		isSwitch:{ // 是否显示开启农历按钮
			type: Boolean,
			default: true
		}
    },
    mounted: function () {
		this.valueShow=this.value;
        this.judgeInit();
    },
    methods: {
        judgeInit() { // 数据初始化判断
            if (this.type == 'datetime') {
                this.initDatetimeData();
            } else if (this.type == 'date') {
                this.initDateData();
            } else if (this.type == 'time') {
                this.initTimeData();
            }
        },
        handleMask() { // 点击、滑动遮罩，判断是否关闭时间日期对话框
            if (this.maskClose) {
				this.showDatetime=false;
                this.judgeInit();
            }
        },
        handleShowPicker() { // 显示时间日期对话框
			this.showDatetime=true;
        },
        getDays(year, month) { // 获取月份天数
            let days = new Date(year, month, 0);
            return days.getDate();
        },
        formatData(value) { // 日期时间的初始化
            return value < 10 ? '0' + value : value + '';
        },
        initDatetimeData() { // type为datetime数据初始化
            let years = [];
            let months = [];
            let days = [];
            let hours = [];
            let minutes = [];
            let year = 1970;
            let month = 1;
            let day = 1;
            let hour = 0;
            let minute = 0;
            let totalDays = 0;
            let values = [0, 0, 0, 0, 0];
            let str = this.valueShow;

            if (str) {
                // 有默认值显示默认值
                let arr = str.split(/\/|-|[ ]|:/);
                year = parseInt(arr[0]);
                month = parseInt(arr[1]);
                day = parseInt(arr[2]);
                hour = parseInt(arr[3]);
                minute = parseInt(arr[4]);
                totalDays = this.getDays(year, month); //当前月份总天数
            } else {
                // 无默认值显示当前日期时间
                let date = new Date();
                year = date.getFullYear();
                month = date.getMonth() + 1;
                day = date.getDate();
                hour = date.getHours();
                minute = date.getMinutes();
                totalDays = this.getDays(year, month); //当前月份总天数
            }

            for (let i = parseInt(this.startYear); i <= this.endYear; i++) {
                values[0] = parseInt(year - this.startYear);
                years.push(this.formatData(i));
            }

            for (let i = 1; i <= 12; i++) {
                if (month == i) {
                    values[1] = parseInt(i - 1);
                }
                months.push(this.formatData(i));
            }

            for (let i = 1; i <= totalDays; i++) {
                if (day == i) {
                    values[2] = parseInt(i - 1);
                }
                days.push(this.formatData(i));
            }

            for (let i = 0; i < 24; i++) {
                if (hour == i) {
                    values[3] = parseInt(i);
                }
                hours.push(this.formatData(i));
            }

            let step = this.step > 1 ? parseInt(this.step) : 1;
            for (let i = 0; i < 60; i++) {
                // if(minute == i) {values[4] = parseInt(i);}
                // minutes.push(this.formatData(i));
                if (minute == i && minute <= 60 - step) {
                    values[4] = Math.ceil(minute / step);
                } else if (minute == i && minute > 60 - step) {
                    values[4] = Math.floor(minute / step);
                }

                if (i % step == 0) {
                    minutes.push(this.formatData(i));
                }
            }

            minute = minutes[values[4]]; // 分钟默认值要匹配到跟步长相关的分钟值
            this.valueArr = [this.formatData(year), this.formatData(month), this.formatData(day), this.formatData(hour), minute];
            // 这里是value的坑，需要单独设值
			this.years=years;
			this.months=months;
			this.days=days;
			this.hours=hours;
			this.minutes=minutes;
			this.year=year;
			this.month=month;
			this.day=day;
			this.hour=hour;
			this.minute=minute;
			this.values;
        },
        initDateData() { // type为date数据初始化
            let years = [];
            let months = [];
            let days = [];
            let year = 1970;
            let month = 1;
            let day = 1;
            let totalDays = 0;
            let values = [0, 0, 0];
            let str = this.valueShow;

            if (str) {
                // 有默认值显示默认值
                let arr = str.split(/\/|-|[ ]|:/);
                year = parseInt(arr[0]);
                month = parseInt(arr[1]);
                day = parseInt(arr[2]);
                totalDays = this.getDays(year, month); //当前月份总天数
            } else {
                // 无默认值显示当前日期时间
                let date = new Date();
                year = date.getFullYear();
                month = date.getMonth() + 1;
                day = date.getDate();
                totalDays = this.getDays(year, month); //当前月份总天数
            }

            for (let i = parseInt(this.startYear); i <= this.endYear; i++) {
                values[0] = parseInt(year - this.startYear);
                years.push(this.formatData(i));
            }
			
            for (let i = 1; i <= 12; i++) {
                if (month == i) {
                    values[1] = parseInt(i - 1);
                }
                months.push(this.formatData(i));
            }
			
            for (let i = 1; i <= totalDays; i++) {
                if (day == i) {
                    values[2] = parseInt(i - 1);
                }
                days.push(this.formatData(i));
            }

            this.valueArr = [this.formatData(year), this.formatData(month), this.formatData(day)];
            // 这里是value的坑，需要单独设值
			this.years=years;
			this.months=months;
			this.days=days;
			this.year=year;
			this.month=month;
			this.day=day;
			this.values;
        },
        initTimeData() { // type为time时数据初始化
            let hours = [];
            let minutes = [];
            let hour = 0;
            let minute = 0;
            let values = [0, 0];
            let str = this.valueShow;

            if (str) {
                // 有默认值显示默认值
                let arr = str.split(':');
                hour = parseInt(arr[0]);
                minute = parseInt(arr[1]);
            } else {
                // 无默认值显示当前日期时间
                let date = new Date();
                hour = date.getHours();
                minute = date.getMinutes();
            }

            for (let i = 0; i < 24; i++) {
                if (hour == i) {
                    values[0] = parseInt(i);
                }
                hours.push(this.formatData(i));
            }

            let step = this.step > 1 ? parseInt(this.step) : 1;
            for (let i = 0; i < 60; i++) {
                if (minute == i && minute <= 60 - step) {
                    values[4] = Math.ceil(minute / step);
                } else if (minute == i && minute > 60 - step) {
                    values[4] = Math.floor(minute / step);
                }

                if (i % step == 0) {
                    minutes.push(this.formatData(i));
                }
            }

            minute = minutes[values[4]]; // 分钟默认值要匹配到跟步长相关的分钟值
            this.valueArr = [this.formatData(hour), this.formatData(minute)];
            // 这里是value的坑，需要单独设值
			this.hours=hours;
			this.minutes=minutes;
			this.hour=hour;
			this.minute=minute;
			this.values;
        },
        handleChange(e) { // picker变化时执行
            let values = e.detail.value;
            let val = [];
            let days = [];
            let year = 0;
            let month = 0;
            let totalDays = 0;
            if (this.type == 'datetime' || this.type == 'date') {
                // 改变年月要重新设置天数
                year = this.years[values[0]];
                month = this.months[values[1]];
                totalDays = this.getDays(year, month);
                for (let i = 1; i <= totalDays; i++) {
                    days.push(this.formatData(i));
                }

				this.days=days;
				this.values=values;
            } else if (this.type == 'time') {
				this.values;
            } // 构造变化的输出值

            if (this.type == 'datetime') {
                val[0] = year;
                val[1] = month;
                val[2] = this.days[values[2]];
                val[3] = this.hours[values[3]];
                val[4] = this.minutes[values[4]];
            } else if (this.type == 'date') {
                val[0] = year;
                val[1] = month;
                val[2] = this.days[values[2]];
            } else if (this.type == 'time') {
                val[0] = this.hours[values[0]];
                val[1] = this.minutes[values[1]];
            }

            this.valueArr = val;
            this.$emit('change', {
                detail: val
            });
        },
        pickerCancel() { // 取消选择
			this.showDatetime=false;
            this.judgeInit();
        },
        pickerConfirm() { // 确认选择
            let arr = this.valueArr;
            let sign = this.separator; // 分隔符
            let obj = {
                value: '',
                values: arr
            }; // 构造确认输出值

            if (this.type == 'datetime') {
                obj.value = arr[0] + sign + arr[1] + sign + arr[2] + ' ' + arr[3] + ':' + arr[4];
            } else if (this.type == 'date') {
                obj.value = arr[0] + sign + arr[1] + sign + arr[2];
            } else if (this.type == 'time') {
                obj.value = arr[0] + ':' + arr[1];
            }

			this.valueShow=obj.value;
			this.showDatetime=false;
            this.$emit('confirm', {
                detail: obj
            });
        },
		getSolar(){ // 获取阳历
			console.log("获取阳历......");
			//let solarDate = conversion.lunar2solar(lunarYear, lunarMonth, lunarDay, (leapMonth == this.selectValue[1] ? true : false));
		},
		getLunar(){ // 获取农历
			this.months = [];
			this.days = [];
		
			console.log("获取农历......");
			let lunarDate = conversion.solar2lunar(this.year, this.month, this.day);
			console.log("获取农历......" + lunarDate.date);
			console.log("获取农历......" + lunarDate.lunarDate);
			console.log("获取农历......" + lunarDate.IMonthCn);
			console.log("获取农历......" + lunarDate.IDayCn);
			
			let leap_month = conversion.leapMonth(this.year); // 判断是否为闰年
			console.log("获取农历 leap_month: " + leap_month);
			
			// 返回农历 闰月没有就返回0
			for (let i = 1; i <= 12; i++) {
				this.months.push(conversion.toChinaMonth(i));
				if(i == leap_month){
					this.months.push("闰" + conversion.toChinaMonth(i));
				}
			}
			console.log("获取农历 months : " + this.months);
			
			// 农历返回天数
			// leapMonth 返回闰月 conversion.leapMonth(year)
			// monthDays 返回非闰月的天数
			// leapDays 返回闰月的天数
			if(conversion.leapMonth(this.year) != 0 && (conversion.leapMonth(this.year) == this.month || (this.month - 1) == conversion.leapMonth(this.year))){
				for (let i = 1; i <= conversion.leapDays(this.year, conversion.leapMonth(this.year)); i++) {
					this.days.push(conversion.toChinaDay(i));
				}
			} else{
				let lunarMonth = '';
				if(conversion.leapMonth(this.year)){
					lunarMonth = this.month  < conversion.leapMonth(this.year) ? this.month : (this.month - 1);
				} else{
					lunarMonth = this.month;
				}
				
				for (let i = 1; i <= conversion.monthDays(this.year, lunarMonth); i++) {
					this.days.push(conversion.toChinaDay(i));
				}
			}
			console.log("获取农历 days : " + this.days);
			
			// this.valueArr = [this.year, lunarDate.IMonthCn, lunarDate.IDayCn, 0, 0];
		},
		switchBtn(e) { // 农历按钮
			console.log("lunar button : " + e.detail.value);
			let lunar=e.detail.value;
			this.openLunar=lunar;
			if(lunar == true){ // 农历
				this.getLunar();
			} else{
				this.getSolar();
			}
		}
    }
};
</script>

<style>
.yu-datetime-wrap {
    position: relative;
}
.yu-datetime-form {
    position: relative;
    background: #fff;
    padding: 0 15px;
    height: 48px;
    display: flex;
    display: -webkit-flex;
    font-size: 15px;
}
.yu-datetime-form-border::after {
    position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    left: 15px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    background-color: #e6e6e6;
}
.yu-datetime-form-hd {
    line-height: 48px;
    width: 80px;
    padding-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
}
.yu-datetime-form-bd {
    -webkit-flex: 1;
    flex: 1;
}
.yu-datetime-form-value {
    color: #000;
    height: 48px;
    line-height: 48px;
    font-size: 15px;
}
.yu-datetime-form-placeholder {
    color: #808080;
    height: 48px;
    line-height: 48px;
    font-size: 15px;
}
.yu-datetime-form-disabled .yu-datetime-form-value {
    color: #808080;
}
.yu-datetime-form-disabled .yu-datetime-form-placeholder {
    color: #f2f2f2;
}
.yu-datetime-form-ft {
    position: relative;
}
.yu-datetime-form-arrow {
    padding-right: 15px;
}
.yu-datetime-form-arrow::after {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    vertical-align: middle;
    position: absolute;
    top: 50%;
    right: 2px;
    margin-top: -4px;
}
/* 弹出对话框部分 */
.yu-datetime-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
    background: #000;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;
}
.yu-datetime-mask-show {
    visibility: visible;
    opacity: 0.6;
}
.yu-datetime-view {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    border-radius: 15px 15px 0 0;
    transition: all 0.3s;
    transform: translateY(100%);
    background-color: #fff;
    visibility: hidden;
    opacity: 0;
}
.yu-datetime-view-show {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
}
.yu-datetime-hd {
    display: flex;
    align-items: center;
    padding: 10px 10px 0;
    height: 32px;
    position: relative;
    text-align: center;
    font-size: 16px;
    justify-content: space-between;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
/* .yu-datetime-hd:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #e6e6e6;
  color: #e6e6e6;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
} */
.yu-datetime-cancel {
    overflow: hidden;
    width: 24px;
    height: 24px;
    padding: 4px;
    margin-right: 16px;
    overflow: hidden;
}
.yu-datetime-cancel .img {
    float: left;
    width: 24px;
}
.yu-datetime-confirm {
    line-height: 32px;
    width: 48px;
    text-align: center;
}
.yu-datetime-title {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    height: 32px;
    line-height: 32px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
}
.yu-datetime-bd {
    /* width: 100%; */
    height: 240px;
    overflow: hidden;
}
.yu-datetime-picker {
    height: 100%;
}
.yu-datetime-item {
    text-align: center;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
}
.yu-datetime-lunar{
	height: 110rpx;
	width: calc(100%rpx);
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 31rpx;
	background-color: #FFFFFF;
}
</style>
