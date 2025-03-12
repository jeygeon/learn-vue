<template>
	<div class="contaier py-4">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<button @click="count++">count plus</button>
				<p>{{ appMessage }}</p>
				<Child></Child>
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject, provide, ref } from 'vue';
import Child from './Child.vue';

const staticMessage = 'static message';
const count = ref(10);
const beforeUpdateMessage = ref('before update message');
const doUpdateMessage = () => {
	beforeUpdateMessage.value = 'after update message';
};
provide('static-message', staticMessage);
provide('count', count);
// 만약 데이터를 업데이트 해야한다면, 업데이트 해주는 함수까지 provide 하는 것이 향후 유지보수 측면에서 좋다.
provide('beforeUpdateMessage', { beforeUpdateMessage, doUpdateMessage });

const appMessage = inject('app-message');
</script>

<style lang="scss" scoped></style>
