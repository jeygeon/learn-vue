<template>
	<div>
		<!-- 
		전달인자를 사용하여 변수명 변경
		
		이름
		<input
			type="text"
			:value="username"
			@input="$emit('update:username', $event.target.value)"
		/>
		-->

		이름
		<input
			type="text"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>

		<!--
		computed를 사용하여 v-model 구현
		
		이름
		<input type="text" v-model="username" />
		--></div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	username: {
		type: String,
	},
	modelValue: {
		type: String,
	},
});
const emit = defineEmits(['update:username', 'update:modelValue']);

const username = computed({
	get() {
		return props.username;
	},
	set(username) {
		emit('update:username', username);
	},
});
</script>

<style lang="scss" scoped></style>
