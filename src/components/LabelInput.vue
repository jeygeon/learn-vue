<template>
	<div>
		<label>
			이름
			<input
				type="text"
				:value="modelValue"
				@input="event => emit('update:modelValue', event.target.value)"
			/>
		</label>
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['modelValue', 'label']);
const emit = defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped></style>
