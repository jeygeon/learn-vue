<template>
	<!--
	템플릿 문법 {{  }} 은 간단히 사용하면 매우 편리하지만
	템플릿 표현식 내 코드가 길어질 경우 가독성이 떨어지고 유지보수하기 힘들어질 수 있다.
	-->
	<p>{{ teacher.name }}</p>
	<p>강의가 있습니까?</p>

	<!--
	아래 두 표현식의 결과는 같지만 computed를 사용했을 경우에
	데이터가 캐싱되기 때문에 성능상으로는 더욱 좋다
	-->
	<p>{{ hasLectures }}</p>
	<p>{{ existLectures() }}</p>

	<hr />
	<h2>이름</h2>
	<p>{{ fullName }}</p>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';

const teacher = reactive({
	name: '홍길동',
	lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
});

/**
 * 처음 실행될때의 결과는 캐싱이 되고 다시 함수가 실행되는 시점은
 * 안에 들어가있는 데이터가 변경되는 시점이다.
 */
const hasLectures = computed(() => {
	return teacher.lectures.length > 0 ? '있음' : '없음';
});

const existLectures = () => {
	return teacher.lectures.length > 0 ? '있음' : '없음';
};

const firstName = ref('홍');
const lastName = ref('길동');
let fullName = computed(() => {
	return firstName.value + ' ' + lastName.value;
});

/**
 * computed는 읽기 전용 함수이기 때문에 아래와 같이
 * value가 변경되면 readonly라면서 경고창이 발생한다.
 */
fullName.value = '길동 홍';

// 만약에 변경을 하고싶다면 get, set 함수를 사용할 수 있다.
fullName = computed({
	get() {
		return firstName.value + ' ' + lastName.value;
	},
	set(value) {
		[firstName.value, lastName.value] = value.split(' ');
	},
});

fullName.value = '제 윤건';
</script>

<style lang="scss" scoped></style>
