<template>
	<div>
		<!--
		반응형 상태가 변경되었을 때를 감지하여 다른 작업을 수행해야 하는 경우가 있다. (ex. api call 등..)
		Composition API의 Watch 함수를 통해 해당 작업을 수행할 수 있다.
		-->
		<form action="" @submit.prevent="save(title, contents)">
			<input type="text" v-model="title" />
			<textarea v-model="contents"></textarea>
			<hr />
			<button>저장</button>
		</form>
	</div>
</template>

<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';

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

const title = ref('');
const contents = ref('');

const save = (title, contents) => {
	console.log('title: ', title, ', contents: ', contents);
};
// title과 contents가 변경되면 watchEffect 함수가 호출된다.
// watchEffect는 watch와는 다르게 한번 즉시 실행된다.
watchEffect(() => {
	save(title.value, contents.value);
});

// watch는 명시적으로 적시된 데이터를 감시한다
// watchEffect는 콜백함수 안에서 사용한 반응형 데이터를 감시한다 (상대적으로 덜 명시적)
</script>

<style lang="scss" scoped></style>
