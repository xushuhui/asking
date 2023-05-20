<template>
	<view class="main">
		{{msg}}
	</view>
</template>

<script>
	export default {
		name: "Copyright",
		data() {
			return {
				msg: 'Copyright © 2023.问天机.All Rights Reserved.'
			};
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 100%;
		text-align: center;
		position: fixed;
		bottom: 8px;
		font-size: 12px;
		text-align: center;
		color: #9a9a9a;
	}
</style>