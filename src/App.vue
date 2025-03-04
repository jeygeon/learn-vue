<template>
	<div>
		<!--
		반응형 상태가 변경되었을 때를 감지하여 다른 작업을 수행해야 하는 경우가 있다. (ex. api call 등..)
		Composition API의 Watch 함수를 통해 해당 작업을 수행할 수 있다.
		--></div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

const message1 = ref('hello');
watch(message1, (newValue, oldValue) => {
	console.log('newValue: ', newValue);
	console.log('oldValue: ', oldValue);
});

// 반응형 객체를 직접 watch() 하게 되면 속성뿐만 아니라 중첩된 모든 속성도 트리거가 된다.
const person = reactive({
	name: 'hong',
	age: 25,
	language: {
		HTML: true,
		CSS: true,
		JavaScript: true,
	},
});
// 반응형 객체는 newValue와 oldValue가 모두 같은 대상을 바라보기 때문에 하나만 사용해도 된다.
watch(
	person,
	value => {
		console.log(value);
	},
	{ deep: false },
);

// immediate를 true로 세 번째 매개변수로 주었을 때 변경 감지 전 바로 함수를 실행할 수 있다.
const message = ref('Hello');
const immediateMessage = ref('');
watch(
	message,
	value => {
		immediateMessage.value = value + ' Vue3';
		console.log(immediateMessage.value);
	},
	{ immediate: true },
);
</script>

<style lang="scss" scoped></style>
