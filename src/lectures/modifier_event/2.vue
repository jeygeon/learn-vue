<template>
	<!--
	키 수식어
	.enter
	.tab
	.delete ("Delete", "Backspace" 모두 수신)
	.esc
	.space
	.up
	.down
	.left
	.right
	-->
	<div>
		<input type="text" @keyup.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
		</ul>
	</div>

	<!--
	시스템 키 수식어
	.ctrl
	.alt
	.shift
	.meta (Mac -> command key :: Window -> window key)
	-->
	<div>
		<input type="text" @keyup.alt.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
		</ul>
	</div>
</template>

<script setup>
import { reactive } from 'vue';

const todos = reactive([]);
const addTodo = event => {
	todos.push(event.target.value);
	event.target.value = '';
	event.target.value.focus();
};
</script>

<style lang="scss" scoped></style>
