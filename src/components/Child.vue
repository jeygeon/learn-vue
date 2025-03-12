<template>
	<div class="card">
		<div class="card-header">Child Component</div>
		<div class="card-body">
			<DeepChild></DeepChild>
		</div>
	</div>
</template>

<script setup>
import DeepChild from './DeepChild.vue';
</script>

<style lang="scss" scoped></style>
