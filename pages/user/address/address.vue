<template>
  <view class="address-list">
    <view class="rf-list" v-if="addressList.length > 0">
      <view class="rf-list-item" v-for="(item, index) in addressList" :key="index" @tap="checkAddress(item)">
        <view class="mid" @touchstart="goTouchStart(item.id)" @touchmove="goTouchMove" @touchend="goTouchEnd">
          <view class="address-box">
            <text v-if="parseInt(item.checked, 10) === 1" class="tag">默认</text>
            <text class="address in1line">{{item.type == 1 ? "家" : item.type == 2 ? "学校" : "随机" }} {{item.location}}</text>
          </view>
          <view class="u-box">
            <text class="name">{{item.receivingName}}</text>
            <text class="mobile">{{item.receivingPhone}}</text>
          </view>
        </view>
        <view class="right">
          <text class="iconfont iconbianji" @tap.stop="addAddress('edit', item.id)"></text>
        </view>
      </view>
      <text v-if="addressList.length > 0" class="tips">
        提示：长按可删除当前收货地址。最多只能存在一个默认地址。
      </text>
      <rf-load-more v-if="addressList.length > 0" :status="loadingType"/>
    </view>
    <view class="add-btn-wrapper">
      <button class="add-btn" @tap="addAddress('add')">新增地址</button>
    </view>
    <rf-empty :info="`暂无收货地址，请添加地址`" v-if="addressList.length === 0 && !loading"></rf-empty>
    <!--加载动画-->
    <rf-loading v-if="loading"></rf-loading>
  </view>
</template>

<script>
	/**
	 * @des 收货地址列表
	 *
	 * @author stav stavyan@qq.com
	 * @date 2020-03-10 18:00
	 * @copyright 2019
	 */
	import {addressDelete, addressList} from "@/api/userInfo";

	import rfLoadMore from '@/components/rf-load-more/rf-load-more';

	export default {
		components: {
			rfLoadMore
		},
		data() {
			return {
				timeOutEvent: 0,
				source: 0,
				page: 1,
				addressList: [],
				loadingType: 'more',
				loading: true
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.page = 1;
			this.addressList = [];
			this.getAddressList('refresh');
		},
		//加载更多
		onReachBottom() {
			this.page++;
			this.getAddressList();
		},
		onLoad(option) {
			this.source = option.source;
		},
		onShow() {
			this.initData()
		},
		methods: {
			goTouchStart(id) {
				clearTimeout(this.timeOutEvent);//清除定时器
				this.timeOutEvent = 0;
				this.timeOutEvent = setTimeout(() => {
					uni.showModal({
						content: '确定要删除该收货地址吗',
						success: (e) => {
							if (e.confirm) {
								this.handleAddressDelete(id);
							}
						}
					});
				}, 0.5 * 1000);//这里设置定时
			},
      // 删除地址
      async handleAddressDelete(id) {
				await this.$http.post(`${addressDelete}`,{keyName : id}).then(() => {
          this.page = 1;
          this.addressList.length = 0;
          this.getAddressList();
        })
      },
			//手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
			goTouchEnd() {
				clearTimeout(this.timeOutEvent);
			},
			//如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
			goTouchMove() {
				clearTimeout(this.timeOutEvent);//清除定时器
				this.timeOutEvent = 0;
			},
			// 数据初始化
			initData() {
				this.page = 1;
				this.addressList.length = 0;
				this.getAddressList();
			},
			// 获取收货地址列表
			async getAddressList(type) {
				await this.$http.post(`${addressList}`, {}).then(r => {
					this.loading = false;
					if (type === 'refresh') {
						uni.stopPullDownRefresh();
					}
					this.loadingType = r.data.length === 10 ? 'more' : 'nomore';
					this.addressList = [...this.addressList, ...r.data];
				}).catch(() => {
					this.loading = false;
					if (type === 'refresh') {
						uni.stopPullDownRefresh();
					}
				});
			},
			// 选择地址
			checkAddress(item) {
				if (parseInt(this.source, 10) === 1) {
					//this.$mHelper.prePage()获取上一页实例，在App.vue定义
					this.$mHelper.prePage().addressData = item;
				  this.$mRouter.back();
				}
			},
			// 跳转添加地址页面
			addAddress(type, id) {
				this.$mRouter.push({route: `/pages/user/address/manage?type=${type}&id=${id}`});
			}
		}
	}
</script>

<style lang='scss'>
	page{
    background-color: $page-color-base;
	}
	.address-list {
		position: relative;
    .address-box {
      display: flex;
      align-items: center;

      .tag {
        font-size: 20upx;
        color: $base-color;
        background: #fffafb;
        border: 1px solid #ffb4c7;
        border-radius: 4upx;
        padding: 4upx 6upx;
        line-height: 1;
      }

      .address {
        font-size: 30upx;
        color: $font-color-dark;
      }
    }

    .u-box {
      font-size: 28upx;
      color: $font-color-light;
      margin-top: 16upx;

      .name {
        margin-right: 30upx;
      }
    }
  }
</style>
