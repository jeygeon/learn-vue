<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-body">
			<P>staticMessage : {{ staticMessage }}</P>
			<P>message : {{ message }}</P>
			<P>count : {{ count }}</P>
			<P>updateMessage : {{ beforeUpdateMessage }}</P>
			<button @click="doUpdateMessage">update message button</button>
			<p>{{ appMessage }}</p>
		</div>
	</div>
</template>

<script setup>
import { inject } from 'vue';

const staticMessage = inject('static-message');
// 전달받지 못한 인자라면 두 번째 매개변수로 디폴트 값을 정할 수 있다.
const message = inject('message', 'default message');
const count = inject('count');
const { beforeUpdateMessage, doUpdateMessage } = inject('beforeUpdateMessage');
const appMessage = inject('app-message');
</script>

<style lang="scss" scoped></style>
