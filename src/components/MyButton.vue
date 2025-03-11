<template>
	<div>
		<button class="btn btn-primary" type="button" v-bind="$attrs">
			My Button
		</button>
	</div>
</template>

<script setup>
defineOptions({
	inheritAttrs: false, // 자동 적용 방지
});
</script>

<style lang="scss" scoped></style>
