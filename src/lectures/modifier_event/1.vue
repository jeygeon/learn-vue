<template>
	<div>
		<!--
		이벤트 처리를 할 때는 v-on 디렉티브를 사용한다. ex) v-on:click
		v-on 디렉티브는 @로 치환하여 사용이 가능하다. ex) @:click
		-->
		<button @click="counter++">{{ counter }}</button>

		<!--
		이벤트 객체를 인라인으로 넘길때는 앞에 $를 붙여서 아래 처럼 넘길 수 있다.
		-->
		<button @click="printEventInfo('hello vue', $event)">
			inline event handler
		</button>
	</div>

	<hr />

	<input type="text" @keydown="onKeydownHandler" />

	<hr />

	<!--
	이벤트를 조작할 때 event.preventDefault() 또는 event.stopPropagation() 함수를 호출해서 사용할 수 있다.
	하지만 비즈니스 로직 안에서 이러한 함수 호출은 코드를 비 효율적으로 만들 수 있다.

	그래서 이 문제르 해결하기 위해 Vue는 v-on 이벤트에 대해서 다양한 수식어(Modifiers)를 제공한다.

	.stop = e.stopPropagation() // 이벤트 버블링 전파가 일어나는 것을 방지
	.prevent = e.preventDefault() 
	-->
	<div id="modifiers">
		<div @click="clickDiv">
			DIV 영역
			<p @click="clickP">
				P 영역
				<span @click.stop="clickSpan">SPAN 영역</span>
			</p>
		</div>
	</div>
	<a href="https://www.naver.com" @click.prevent="clickA">a 영역</a>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);
const printEventInfo = (message, event) => {
	console.log('message: ', message);
	console.log('event: ', event);
	console.log('event.target: ', event.target);
};

const onKeydownHandler = event => {
	console.log(event.key);
};

const clickDiv = () => {
	console.log('click div !');
};

const clickP = () => {
	console.log('click p !');
};

const clickSpan = () => {
	console.log('click span !');
};

const clickA = () => {
	console.log('click a !');
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}

#modifiers div {
	background-color: #ccc;
}

#modifiers p {
	background-color: #999;
}

#modifiers span {
	background-color: #666;
	display: block;
}
</style>
