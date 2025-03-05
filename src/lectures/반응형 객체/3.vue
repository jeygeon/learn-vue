<template>
	<p>author: {{ author }}</p>
	<p>title: {{ title }}</p>
	<button v-on:click="addMessage1">add message</button>
	<hr />
	<p>year: {{ year }}</p>
	<button v-on:click="addMessage2">add message</button>
	<hr />
	<p>description: {{ description }}</p>
	<button v-on:click="addMessage3">add message</button>
</template>

<script setup>
import { reactive, toRef, toRefs } from 'vue';

const book = reactive({
	author: 'Vue Team',
	year: '2020',
	title: 'Learn Vue3',
	description: '화이팅',
	price: '1000원',
});

/**
 * 아래 구조분해 할당은 book 객체의 속성 (author, title)들의 값이
 * 단순이 재 선언 된 것이 때문에 반응성을 잃어버린 단순 string 이다.
 */
const { author, title } = book;

/**
 * toRefs를 사용하게 되면 객체의 속성과 구조분해해서 재할당한 값은
 * 동기화 상태가 돼서 값이 똑같이 변경된다.
 */
let { year, price } = toRefs(book);
const addMessage2 = () => {
	year.value = year.value + '!';
};

/**
 * 만약 한가지 속성만 가져오고 싶으면 toRef를 사용하고
 * 두번째 매개변수 자리에 가져오고 싶은 속성의 값을 쓰면 된다.
 */
let description = toRef(book, 'description');
const addMessage3 = () => {
	description.value = description.value + '!';
};
</script>

<style lang="scss" scoped></style>
