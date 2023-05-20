<template>
	<view class="comm-nav">
		{{isShowTitle ? '问天机' : ''}}
	</view>
</template>

<script>
	export default {
		props: {
			isShowTitle: {
				Boolean,
				default: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comm-nav {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 88rpx;
		height: 100rpx;
		text-align: center;
		font-size: 18px;
		font-weight: 800;
		letter-spacing: 13px;
		color: #66a3ff;
	}
</style>