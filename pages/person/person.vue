<template>
	<view>
		<Nav />
		<view class="person-main">
			<view class="person-main-top">
				<view class="person-main-top-photo">
					<image mode="aspectFit" :src="isAuth ? userData.userInfo.avatarUrl : defaultAvatar">
					</image>
				</view>
				<view class="person-main-top-btn" @click="login">
					{{isAuth ? userData.userInfo.nickName : ''}}
					点击授权登录
				</view>
			</view>
			<view class="person-main-rate">
				<view class="person-main-rate-item" v-for="(item,index) in rateList" :key="index">
					<view class="person-main-rate-item-num">
						{{item.num}}
					</view>
					<view class="person-main-rate-item-txt">
						{{item.txt}}
					</view>
				</view>
			</view>
			<view class="person-main-oper">
				<view class="person-main-oper-item" v-for="(item,index) in btnList" :key="index">
					<view class="person-main-oper-item-l">
						<image mode="aspectFit" :src="item.icon">
						</image>
						<view class="p-l-10">
							{{item.txt}}
						</view>
					</view>
					<view class="person-main-oper-item-r">
						<image mode="aspectFit" src="https://cdn.nieanshow.cn/assets/right.png"> </image>
					</view>
				</view>
			</view>
		</view>
		<Copyright />
	</view>
</template>

<script>
	import Nav from '@/components/Nav/index.vue'
	import Copyright from '@/components/Copyright/index.vue'
	export default {
		components: {
			Nav,
			Copyright
		},
		data() {
			return {
				defaultAvatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132',
				rateList: [{
						num: 12,
						txt: '次数'
					},
					{
						num: 5,
						txt: '邀请'
					},
					{
						num: 90,
						txt: '提问'
					},
					{
						num: 1192,
						txt: '收藏'
					},
				],
				btnList: [{
					icon: 'https://cdn.nieanshow.cn/assets/hy.png',
					txt: '会员权益'
				}, {
					icon: 'https://cdn.nieanshow.cn/assets/hr.png',
					txt: '热门活动'
				}, {
					icon: 'https://cdn.nieanshow.cn/assets/dz.png',
					txt: '我点赞的'
				}],
				isAuth: false,
				userData: {}
			}
		},
		methods: {
			login() {
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {

						console.log(loginRes);
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
							}
						});
					}
				});
				// uni.authorize({
				// 	scope: "scope.userInfo",
				// 	success() {
				// 		uni.getUserInfo({
				// 			provider: 'weixin',
				// 			success: (infoRes) => {
				// 				this.isAuth = true
				// 				this.userData = infoRes
				// 				console.log(infoRes, "000");
				// 			}
				// 		})
				// 	}
				// });
			}
		}
	}
</script>
<style>
	page {
		background-image: linear-gradient(to bottom, #accbeec7 0%, #ffffff 23%)
	}
</style>
<style lang="scss" scoped>
	.person-main {
		padding: 0 32rpx;

		&-top {
			display: flex;
			align-items: center;
			width: 100%;
			margin-bottom: 20rpx;

			&-photo {
				margin-right: 30rpx;
			}

			&-photo image {
				border-radius: 100%;
				width: 120rpx;
				height: 120rpx;

			}

			&-btn {
				font-size: 18px;
			}
		}

		&-rate {
			display: flex;
			justify-content: space-around;
			border-radius: 20rpx;
			margin-bottom: 48rpx;

			&-item {
				text-align: center;

				&-num {
					font-weight: 800;
					font-size: 48rpx;
					color: #4288DB;
				}

				&-txt {
					font-size: 24rpx;
					color: #505050
				}
			}
		}

		&-oper {
			box-shadow: 2rpx 4rpx 40rpx 0px #bbbbbb80;
			border-radius: 24rpx;

			&-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 36rpx;
				padding: 20rpx 24rpx;

				&-l {
					display: flex;
					align-items: center;
				}

				&-l image {
					width: 65rpx;
					height: 65rpx;
				}

				&-r image {
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
	}
</style>