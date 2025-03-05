<template>
	<div></div>
</template>

<script setup>
import { reactive, readonly } from 'vue';

const original = reactive({
	count: 0,
});
original.count++;
console.log(original.count);

const copy = readonly(original);
copy.value++; //여기서 warn 경고 발생
console.log(copy.value); // 여기서 undefined 발생
</script>

<style lang="scss" scoped></style>
