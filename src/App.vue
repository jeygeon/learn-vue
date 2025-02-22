<template>
	<div></div>
</template>

<script setup>
import { ref, computed } from 'vue';

const num = ref(5);
let result = computed(() => {
	return num.value % 2 == 0 ? '짝수' : '홀수';
});

result = computed({
	get() {
		return num.value % 2 == 0 ? '짝수' : '홀수';
	},
	set(value) {
		if (value == '짝수') {
			num.value++;
		} else {
			num.value--;
		}
	},
});

console.log('변경전: ', num.value);
result.value = '짝수';
console.log('변경후: ', num.value);
</script>

<style lang="scss" scoped></style>
