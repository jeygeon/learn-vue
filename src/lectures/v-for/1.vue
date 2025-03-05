<template>
	<div>
		<!--
		목록을 출력할 때는 v-for 디렉티브를 통해서 렌더링 할 수 있다.
		-->
		<ul>
			<li v-for="item in items" :key="item.id">
				{{ item }}
			</li>
		</ul>

		<hr />

		<ul>
			<li v-for="(item, index) in items" :key="item.id">
				인덱스: {{ index }}, {{ item }}
			</li>
		</ul>

		<hr />

		<!--
		만약에 이렇게 조건을 걸고싶으면 template을 사용하면 된다.
		v-for와 v-if를 같은 태그에서 사용하는 것은 권장하지 않는다.
		-->
		<template v-for="item in items" :key="item.id">
			<ul>
				<li v-if="item.id % 2 === 0">{{ item }}</li>
			</ul>
		</template>

		<hr />

		<!--
		객체의 속성을 반복해서 출력도 가능하다.
		-->
		<ul>
			<li v-for="(value, key, index) in user" :key="key">
				{{ key }} : {{ value }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const items = ref([
	{ id: 1, language: 'Java' },
	{ id: 2, language: 'HTML' },
	{ id: 3, language: 'CSS' },
	{ id: 4, language: 'JavaScript' },
	{ id: 5, language: 'Vue3' },
]);

const user = reactive({
	name: 'hong',
	age: 25,
	location: 'seoul',
});
</script>

<style lang="scss" scoped></style>
