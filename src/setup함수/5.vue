<script setup></script>

<template>
	<div>{{ counter }}</div>
	<div>{{ message }}</div>
	<button @click="increase">increase counter</button>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		let counter = ref(0);
		const message = ref('hello vue3');
		const increase = () => {
			counter.value++;
		};
		return {
			counter,
			message,
			increase,
		};
	},
};
</script>

<style></style>
