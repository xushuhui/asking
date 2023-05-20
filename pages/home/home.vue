<template>
	<view>
		<!-- <Nav /> -->
		<view class="chat">
			<view class="chat-item" v-for="item in 4">
				<view class="chat-item-ava p-r-5">
					<image mode="aspectFit" :src="defaultAvatar">
					</image>
				</view>
				<view class="chat-item-content">
					<view class="chat-item-content-txt">
						在我们的生活中，有很多未知的领域等待我们去探索。这些领域可能是科学、技术、艺术、文化或其他方面。无论是哪个领域，探索未知都是一个充满挑战和机遇的过程。
						首先，探索未知需要勇气和决心。我们必须敢于面对未知的风险和不确定性，并且要有足够的毅力和耐心来克服困难和挫折。同时，我们也需要具备一定的知识和技能，以便更好地理解和应对所面临的问题和挑战。
					</view>
					<view class="chat-item-content-btn m-t-5">
						<view class="chat-item-content-btn-item m-r-8">
							复制
						</view>
						<!-- <view class="chat-item-content-btn-item">
							我有疑问？
						</view> -->
					</view>
				</view>
			</view>
		</view>


		<view class="input-bar">
			<view class="input-bar-oper">
				<input focus placeholder="请输入姓名" />
			</view>
			<!-- <view class="input-bar-send">
				发送
			</view> -->
		</view>
	</view>
</template>

<script>
	import Nav from '@/components/Nav/index.vue'
	export default {
		components: {
			Nav,
		},
		data() {
			return {
				defaultAvatar: 'https://cdn.nieanshow.cn/assets/def.jpg',
			}
		},
		methods: {
			send() {
				console.log(111);
			}
		}
	}
</script>
<style>
	page {
		background-color: #F5F5F5;
	}
</style>
<style lang="scss" scoped>
	.input-bar {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 10px;
		background-color: #F6F6F6;
		box-sizing: border-box;
		display: flex;
		align-items: center;

		&-oper {
			width: 100%;
			// flex: 1;
		}

		&-oper input {
			background-color: #fff;
			height: 72rpx;
			padding: 0 20rpx;
			border-radius: 60rpx;
		}

		&-send {
			padding: 16rpx 30rpx;
			margin-left: 10rpx;
			border-radius: 60rpx;
			background-color: #95EC69;
			color: #232323;
		}
	}


	.chat {
		padding: 28rpx 20rpx;

		&-item {
			display: flex;
			margin-bottom: 22rpx;

			&-ava image {
				width: 65rpx;
				height: 65rpx;
				border-radius: 10rpx;
			}

			&-content {
				&-txt {
					font-size: 16px;
					background-color: #FFFFFF;
					padding: 14rpx 16rpx;
					border-radius: 16rpx;
					box-shadow: 4rpx 4rpx 18rpx 0px #afafaf80;
					text-indent: 2em;
				}

				&-btn {
					display: flex;

					&-item {
						// border: 1px solid;
						background-color: #FFFFFF;
						padding: 2px 5px;
						margin-right: 8px;
						border-radius: 5px;
					}
				}
			}
		}
	}
</style>