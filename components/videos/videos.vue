<template>
	<view @click.stop="aaa">
		<video style="background-color: red;border-radius: 20rpx;"
		:src="imgUrl"
		:poster="videoImg"
		:style="{
			width:width+'rpx',
			height:height+'rpx',
		}" mode="aspectFill"
		></video>
	</view>
</template>

<script>
	export default {
		name:"videos",
		props: {
		    videoUrl: {
		        type: String,
		        default: "",
		    },
			width:{
				type: Number,
				default: 300,
			},
			height:{
				type: Number,
				default: 300,
			},
			imgUrl:{
				type: String,
				default: "",
			},
			videoImg:{
				type: String,
				default: "",
			}
		},
		data() {
			return {
				
			};
		},
		created(){
			console.log("videoUrl",this.videoUrl)
		},
		methods:{
			aaa(){}
		}
		
	}
</script>

<style>

</style>