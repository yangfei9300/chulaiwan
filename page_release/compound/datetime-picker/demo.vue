<template>
	<view>
		
		<view class="cu-form-group">
			<view class="title">提醒时间：</view>
			<yu-datetime-picker 
				:maskClose=false
				startYear="2020"
				endYear="2099"
				@confirm="onConfirm" 
				ref="dateTime" 
				:value=scheduleDate 
				:isAll="true">
			</yu-datetime-picker>
		</view>
		
	</view>
</template>

<script>
	import config from '../../utils/config.js'
	import yuDatetimePicker from "@/components/yu-datetime-picker/datetime.vue"  // 提醒时间
	
	export default {
		components: {  // 提醒时间
			yuDatetimePicker
		},
		data() {
			return {
				
			};
		},
		methods: {
			onConfirm(e) { // 提醒时间
				this.scheduleDate=e.selectRes;
			}
		}
	};
</script>
