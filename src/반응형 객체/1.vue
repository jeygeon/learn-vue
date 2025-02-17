<template>
	<button v-on:click="incremenet">Click {{ state.count }}</button>
	<button v-on:click="incremenet">Deep Click {{ state.deep.count }}</button>
	<hr />
	<p>{{ text }}</p>
	<button v-on:click="addMessage">addMessageBtn</button>
</template>

<script setup>
import { reactive, ref } from 'vue';

/**
 * 반응형 객체를 생성하기 위해서는 reactive() 함수를 사용할 수 있다.
 * 객체의 값이 변경되면 자동으로 값이 렌더링 된다.
 * reactive 함수는 객체나 배열같은 레퍼런스 타입을 반응형 객체로 만들 수 있다.
 */
const state = reactive({ count: 0, deep: { count: 0 } });

/**
 * reactive함수
 * > 객체 타입에만 동작한다면,
 *
 * ref 함수는
 * > number, string, boolean 같음 primitive 타입의 반응형 상태를 만들 때 사용한다.
 * > 여기서 text는 value라는 하나의 속성만 가지고 있는 객체가 된다.
 * > 그래서 자바스크립트에서 값을 가져올 때는 text.value 로 해당 데이터에 접근해야 한다.
 */
const text = ref('Hello');

const incremenet = () => {
	state.count++;
	state.deep.count++;
};
const addMessage = () => {
	text.value = text.value + '!';
};
</script>

<style lang="scss" scoped></style>
