<template>
	<view class="">
		<u-popup :show="showrs" @close="close" @open="open">
			<view style="    padding: 40rpx;">
				<view class="xztit">
					<view class="">限制人数</view>
					<view class="xx" @click="showrs=false">X</view>
				</view>
				<view class="">
					<view class="tc">
						<view class="tc1">
							<image class="tcimg" src="../../static/releaseimg/jingzhunrenshu.png" mode=""></image>
							<view class="tcrs">精准人数</view>
						</view>
						<view class="">
							<label class="radio">
								<radio value="" :checked="acc" @click="asc" /><text></text>
							</label>
						</view>
					</view>
					<view class="jzrstc" v-if="acc">
						<view class="jzrstc1" v-for="(item,index) in list" :key="index">
							<view class="jzrstc2" :class="{active:tccurrent==index}" @click="tcys(index)">{{item}}
							</view>
						</view>

					</view>

				</view>
				<view class="hengxian"></view>
				<view class="">
					<view class="tc">
						<view class="tc1">
							<image class="tcimg" src="../../static/releaseimg/jingzhunrenshu.png" mode=""></image>
							<view class="tcrs">精准人数</view>
						</view>
						<view class="">
							<label class="radio">
								<radio value="" :checked="acc1" @click="asc1" /><text></text>
							</label>
						</view>
					</view>
					<view class="jzrstc" v-if="acc1">
						<view class="jzrstc11" v-for="(item,index) in list1" :key="index">
							<view class="jzrstc2" :class="{active:tccurrent==index}" @click="tcys(index)">{{item}}
							</view>
						</view>

					</view>

				</view>


			</view>
		</u-popup>
		<u-button @click="showrs = true">打开</u-button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				tccurrent: 0,
				list: [
					"1人", "2人", "3人", "4人", "5人", "6人", "7人", "8人",
				],
				list1: [
					"2~4人", "4~6人", "6~8人"
				],
				acc: false,
				acc1: false,
				showrs: true,
				columns1: [
					['06月28日 周二', '06月28日 周三'],
					['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
						'12:00',
					],
				],
				columnData1: [
					['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
						'12:00'
					],
					['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
						'12:00'
					],
				]
			}
		},
		methods: {
			tcys(e) {
				this.tccurrent = e;
			},
			asc() {
				if (this.acc == true) {
					this.acc = false
					this.acc1=true
				} else {
					this.acc = true
					this.acc1=false
				}
			},
			asc1() {
				if (this.acc1 == true) {
					this.acc1 = false
					this.acc=true
				} else {
					this.acc1 = true
					this.acc=false
				}
			},
			open() {
				// console.log('open');
			},
			close() {
				this.showrs = false
				// console.log('close');
			},
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// 当第一列值发生变化时，变化第二列(后一列)对应的选项
				if (columnIndex === 0) {
					// picker为选择器this实例，变化第二列对应的选项
					picker.setColumnValues(1, this.columnData1[index])
				}
			},
			// 回调参数为包含columnIndex、value、values
			confirm1(e) {
				console.log('confirm', e)
				this.showrs = false
			}
		}
	}
</script>
<style scoped>
	.hengxian {
		border-bottom: 1rpx solid #e3e3e3;
		height: 1rpx;
		margin-top: 48rpx;
		margin-bottom: 10rpx;
	}

	.jzrstc2 {
		width: 100rpx;
		text-align: center;
		border-radius: 20rpx;
	}

	.jzrstc1 {
		flex: 20%;
		display: flex;
		justify-content: center;
		margin: 10rpx;
	}

	.jzrstc11 {
		flex: 20%;
		display: flex;
		justify-content: center;
		margin: 10rpx;
		position: relative;
		left: -25rpx;
	}

	.jzrstc {
		display: flex;
		flex-wrap: wrap;
	}

	.active {
		background-color: #F8B800;
		color: white;
	}

	.tcimg {
		width: 50rpx;
		height: 50rpx;
	}

	.tc1 {
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
	}

	.tc {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.xztit{
		display: flex;
		    justify-content: center;
			position: relative;
			    margin-bottom: 20rpx;
	}
	.xx{
		    position: absolute;
		    right: 0rpx;
	}
</style>
