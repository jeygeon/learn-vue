<script setup></script>

<template>
	<!--
	v-once 는 최초 1회 렌더링 시에만 데이터가 바인드 되고 그 이후에는 변함 없다
	-->
	<h2>보간법</h2>
	<div>{{ message }}</div>
	<div v-once>{{ message }}</div>
	<button @click="add">add !</button>

	<hr />

	<!--
	이중 중괄호는 데이터를 HTML이 아니라 텍스트로 인식한다.
	동적으로 만든 태그 자체를 HTML로 출력하려면 v-html을 사용해야 한다
	동적으로 만든 태그이기 때문에 XSS 취약점에 주의할 것
	-->
	<h2>v-html</h2>
	<p>{{ rawHtml }}</p>
	<p v-html="rawHtml"></p>

	<hr />

	<!--
	속성 바인딩은 v-bind를 사용한다
	v-bind를 다 써도 되고 : 으로 줄여서 사용도 가능하다
		ex) v-bind:title === :title
	v-bind에 객체를 넣음으로써 다중 bind또한 가능하다
	-->
	<h2>속성 바인딩</h2>
	<div v-bind:title="dynamicTitle">안녕하세요</div>
	<input type="text" value="홍길동" :disabled="isInputDisabled" />
	<br />
	<button @click="changeDisabled">changeDisabledBtn</button>
	<br />
	<input v-bind="attrs" />

	<hr />

	<!--
	이중괄호에서는 자바스크립트 표현식이 모두 사용 가능하다.
	-->
	<h2>JavaScript</h2>
	{{ message.split('').reverse().join('') }}
	{{ isInputDisabled ? 'yes' : 'no' }}
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('Hello');
		const rawHtml = ref('<strong>Hello</strong>');
		const dynamicTitle = ref('마우스 호버!');
		const isInputDisabled = ref(true);
		const attrs = {
			type: 'password',
			value: '12345',
			disabled: false,
		};
		const add = () => {
			message.value = message.value + '!';
		};
		const changeDisabled = () => {
			isInputDisabled.value = !isInputDisabled.value;
		};
		return {
			message,
			add,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			changeDisabled,
			attrs,
		};
	},
};
</script>

<style></style>
