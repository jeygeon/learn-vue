<template>
	<div>
		<main>
			<div class="container py-4">
				<MyButton class="hello-btn" id="hello-btn" @click="sayHello"></MyButton>

				<hr />

				<FancyButton>Click!! <span style="color: red">@@@</span> </FancyButton>

				<hr />

				<!-- slot에 전달인자를 설정하여 원하는 slot으로 컨텐츠로 내용을 전달할 수 있다. -->
				<AppCard>
					<template v-slot:header>제목</template>
					<!-- slot이름은 동적으로 적용도 가능하다. -->
					<template v-slot:[slotArgs]>내용1</template>
					<template v-slot>내용2</template>
					<!-- 자식 컴포넌트에서 보낸 데이터를 할당 받을 수 도 있다. -->
					<template #content3="{ contentMessage }">
						{{ contentMessage }}
					</template>
					<!-- slot의 단축표현으로 #을 사용할 수 있다. -->
					<template #footer>시간</template>
				</AppCard>
			</div>
		</main>
	</div>
</template>

<script setup>
import MyButton from './MyButton.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';

const sayHello = () => {
	alert('안녕하세요');
};

const slotArgs = ref('content1');
</script>

<style lang="scss" scoped></style>
