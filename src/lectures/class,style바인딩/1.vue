<template>
	<!--
	- :class (v-bind:class)를 사용해서 클래스를 동적으로 바인딩 할 수 있다.
	- class를 선언한 값과 공존할 수 있다.
	- , 를 이용하여 여러개 선언이 가능하다 (특수문자 들어가면 ''로 감싸주기)
	-->
	<div>
		<!-- <div class="active text">텍스트 입니다</div> -->
		<div class="text" :class="{ active: isActive, 'text-danger': hasError }">
			텍스트 입니다
		</div>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">toggle error</button>

		<!-- 만약 여러가지 속성이라면 객체로 선언해서 사용도 가능하다. -->
		<div :class="classObject">두번째 텍스트입니다.</div>
		<button
			v-on:click="objectToggle = classObject['active'] = !classObject['active']"
		>
			toggle
		</button>
		<button
			v-on:click="classObject['text-danger'] = !classObject['text-danger']"
		>
			toggle error
		</button>

		<!-- 배열도 넣을 수 있다 -->
		<div :class="[first, second]">세번째 텍스트입니다</div>
	</div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const isActive = ref(false);
const hasError = ref(false);

const classObject = reactive({
	active: false,
	'text-danger': false,
});

const first = ref('fisrt-active');
const second = ref('second-active');

const toggle = () => {
	isActive.value = !isActive.value;
};
</script>

<style scoped>
.active {
	font-weight: 900;
}

.text-danger {
	color: red;
}
</style>
