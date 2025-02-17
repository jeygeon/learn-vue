<template>
	<p>{{ state.count }}</p>
	<button v-on:click="addValue">addValue</button>
	<hr />
	<p>{{ arr[0] }} + {{ arr[1] }}</p>
</template>

<script setup>
import { reactive, ref } from 'vue';

/**
 * ref -> Object
 *
 * ref로 선언한 데이터를 반응형 객체의 속성으로 주입하게 되면 자동으로 unwrapping이 되어서
 * 일반 속성처럼 사용이 가능하다.
 */
const count = ref(0);
const state = reactive({
	count: count,
});
const addValue = () => {
	state.count++;
	console.log(state.count);
};

/**
 * ref -> Array
 *
 * ref로 선언한 데이터를 반응형 배열의 값으로 주입하게 되면
 * ref와는 달리 자바스크립트에서 접근할 때는 .value를 붙여야
 * 해당 데이터에 접근이 가능하다.
 */
const message0 = ref('Hello');
const message1 = ref('World');
const arr = reactive([message0, message1]);
console.log(arr[0].value);
</script>

<style lang="scss" scoped></style>
