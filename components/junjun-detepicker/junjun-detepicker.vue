<template>
    <view class="datetime-picker">
        <view class="mask" :class="{ show: open }" @touchmove.stop.prevent catchtouchmove="true"></view>
        <view class="wrap" :class="{ show: open }">
            <view class="picker-header" @touchmove.stop.prevent catchtouchmove="true">
                <view class="btn-picker cancel" @click="open = false">取消</view>
                <view class="btn-picker submit" @click="_onSubmit">确定</view>
            </view>
            <view class="picker-body">
                <picker-view :value="value" @change="_onChange">
                    <picker-view-column v-if="judgeFormat('y+')">
                        <view class="column-item" v-for="item in years" :key="'years' + item">
                            {{ item + '年' }}
                        </view>
                    </picker-view-column>
                    <picker-view-column v-if="judgeFormat('M+')">
                        <view class="column-item" v-for="item in months" :key="'months' + item">
                            {{ formatNum(item) + '月' }}
                        </view>
                    </picker-view-column>
                    <picker-view-column v-if="judgeFormat('d+')">
                        <view class="column-item" v-for="item in days" :key="'days' + item">
                            {{ formatNum(item) + '日' }}
                        </view>
                    </picker-view-column>
                    <picker-view-column v-if="judgeFormat('h+')">
                        <view class="column-item" v-for="item in hours" :key="'hours' + item">
                            {{ formatNum(item) + '时' }}
                        </view>
                    </picker-view-column>
                    <picker-view-column v-if="judgeFormat('m+')">
                        <view class="column-item" v-for="item in minutes" :key="'minutes' + item">
                            {{ formatNum(item) + '分' }}
                        </view>
                    </picker-view-column>
                    <picker-view-column v-if="judgeFormat('s+')">
                        <view class="column-item" v-for="item in seconds" :key="'seconds' + item">
                            {{ formatNum(item) + '秒' }}
                        </view>
                    </picker-view-column>
                </picker-view>
            </view>
        </view>
    </view>
</template>

<script>
import { datePipe } from './dateformat';
export default {
    name: 'datePicker',
    props: {
        startYear: {
            type: Number,
            default: 2000,
        },
        endYear: {
            type: Number,
            default: 2030,
        },
        format: {
            type: String,
            default: 'yyyy-MM-dd hh:mm',
        },
        defalutDate: {
            type: String,
            default: () => null,
        },
    },
    data() {
        return {
            open: false,
            years: [],
            months: [],
            days: [],
            hours: [],
            minutes: [],
            seconds: [],
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: '',
            second: '',
            value: [0, 0, 0, 0, 0, 0],
        };
    },
    created() {
        if (this.defalutDate) {
            this.currentDate = datePipe(this.defalutDate, this.format);
        } else {
            this.currentDate = datePipe(new Date(), this.format);
        }
        this.init();
    },
    watch: {
        defalutDate() {
            this.currentDate = datePipe(this.defalutDate, this.format);
        },
        month() {
            this.initDays();
        },
    },
    methods: {
        judgeFormat(val) {
            return new RegExp('(' + val + ')').test(this.format);
        },
        initSetValue() {
            let y = new Date(this.currentDate).getFullYear() - this.startYear;
            let mon = new Date(this.currentDate).getMonth();
            let d = new Date(this.currentDate).getDate() - 1;
            let h = new Date(this.currentDate).getHours();
            let min = new Date(this.currentDate).getMinutes();
            let s = new Date(this.currentDate).getSeconds();
            this.value = [y, mon, d, h, min, s];
        },
        init() {
            this.initYears();
            this.initMonths();
            this.initDays();
            this.initHours();
            this.initMinutes();
            this.initSeconds();
            this.setSelectValue();
        },
        initYears() {
            const years = [];
            for (let year = this.startYear; year <= this.endYear; year++) {
                years.push(year);
            }
            this.years = years;
        },
        initMonths() {
            const months = [];
            for (let month = 1; month <= 12; month++) {
                months.push(month);
            }
            this.months = months;
        },
        initDays() {
            const value = this.value;
            const selectedYear = this.years[value[0]];
            const selectedMonth = this.months[value[1]];
            const days = [];
            const totalDays = new Date(selectedYear, selectedMonth, 0).getDate();
            for (let day = 1; day <= totalDays; day++) {
                days.push(day);
            }
            this.days = days;
        },
        initHours() {
            const hours = [];
            for (let hour = 0; hour <= 23; hour++) {
                hours.push(hour);
            }
            this.hours = hours;
        },
        initMinutes() {
            const minutes = [];
            for (let minute = 0; minute < 60; minute++) {
                minutes.push(minute);
            }
            this.minutes = minutes;
        },
        initSeconds() {
            const seconds = [];
            for (let second = 1; second <= 60; second++) {
                seconds.push(second);
            }
            this.seconds = seconds;
        },
        show() {
            this.open = true;
            setTimeout(() => {
                this.initSetValue();
                this.setSelectValue();
            }, 200);
        },
        hide() {
            this.open = false;
        },
        _onChange(e) {
            this.value = e.detail.value;
            this.setSelectValue();
        },
        setSelectValue() {
            const v = this.value;
            this.year = this.years[v[0]];
            this.month = this.months[v[1]];
            this.day = this.days[v[2]];
            this.hour = this.hours[v[3]];
            this.minute = this.minutes[v[4]];
            this.second = this.seconds[v[5]];
        },
        _onSubmit() {
            const { year, month, day, hour, minute, formatNum, second } = this;
            let result = {
                year: this.judgeFormat('y+') ? formatNum(year) : '0000',
                month: this.judgeFormat('M+') ? formatNum(month) : '00',
                day: this.judgeFormat('d+') ? formatNum(day) : '00',
                hour: this.judgeFormat('h+') ? formatNum(hour) : '00',
                minute: this.judgeFormat('m+') ? formatNum(minute) : '00',
                second: this.judgeFormat('s+') ? formatNum(second) : '00',
            };
            let date = `${result.year}-${result.month}-${result.day} ${result.hour}:${result.minute}:${result.second}`;
            date = datePipe(date, this.format);
            this.$emit('submit', { ...result, format: date });
            this.hide();
        },
        formatNum(num) {
            return num < 10 ? '0' + num : String(num);
        },
    },
};
</script>

<style lang="scss">
$transition: all 0.3s ease;
$primary: #488ee9;

.datetime-picker {
    position: relative;
    z-index: 999;
    picker-view {
        height: 100%;
    }
    .mask {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        visibility: hidden;
        opacity: 0;
        transition: $transition;
        &.show {
            visibility: visible;
            opacity: 1;
        }
    }
    .wrap {
        z-index: 1001;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        transition: $transition;
        transform: translateY(100%);
        &.show {
            transform: translateY(0);
        }
    }
    .picker-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px 8px;
        background-color: darken(#fff, 2%);
        background-color: #fff;
    }
    .picker-body {
        width: 100%;
        height: 420rpx;
        overflow: hidden;
        background-color: #fff;
    }
    .column-item {
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn-picker {
        position: relative;
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        text-align: center;
        text-decoration: none;
        line-height: 2;
        -webkit-tap-highlight-color: transparent;
        overflow: hidden;
        background-color: #eee;
        font-size: 14px;
        // border-radius: 2px;
        color: #000;
        cursor: pointer;
    }
    .btn-picker.submit {
        background-color: $primary;
        color: #fff;
    }
}
</style>
