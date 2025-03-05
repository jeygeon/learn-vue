<template>
	<div>
		<!-- 특정 조건에 따라 렌더링 여부를 결정할 때는 v-if를 사용한다-->
		<!-- v-if 안에 조건식이 true이면 해당 태그가 렌더링 된다 -->
		<h2 v-if="visible">Hello Vue3!</h2>
		<h2 v-else>false입니다</h2>
		<button v-on:click="visible = !visible">toggle</button>

		<hr />

		<h2 v-if="type === 'A'">A 입니다</h2>
		<h2 v-else-if="type === 'B'">B 입니다</h2>
		<h2 v-else-if="type === 'C'">C 입니다</h2>
		<h2 v-else>A, B, C가 아닙니다</h2>
		<button v-on:click="type = 'A'">A</button>
		<button v-on:click="type = 'B'">B</button>
		<button v-on:click="type = 'C'">C</button>
		<button v-on:click="type = 'ETC'">ETC</button>

		<hr />

		<!-- 하나의 조건으로 여러개의 HTML 요소를 렌더링 할 수 있다. template 태그 사용 -->
		<template v-if="visible">
			<h1>Title</h1>
			<p>P1</p>
			<p>P2</p>
		</template>

		<hr />

		<!--
		겉으로 보이는것은 v-if랑 큰 차이가 없지만
		v-if 는 false면 아예 렌더링이 안되고 true일 경우에만 렌더링 된다
		v-show 는 해당 요소가 무조건 생성이 되고 조건에 따라서 display:none / display:block 속성 전환이 된다
		(무엇가를 자주 전환해야 한다면 v-show를 사용하는 것이 더 낫다)
		-->
		<h1 v-show="ok">TITLE 입니다.</h1>
		<button v-on:click="ok = !ok">toggle</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const type = ref('A');
const ok = ref(true);
</script>

<style lang="scss" scoped></style>
