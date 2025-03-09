<template>
	<div class="row g-3">
		<!--
    1번째 방법

		<button
			class="btn btn-primary"
			@click="$emit('createPost', 1, 2, 3, '네번째')"
		>
			button
		</button>
    -->
		<div class="col col-2">
			<select
				class="form-select"
				aria-label="Default select example"
				v-model="type"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input type="text" class="form-control" v-model="title" />
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">button</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits({
	createPost: newPost => {
		// 유효성 체크에 걸려도 이벤트가 발생이 되긴 된다. 경고 표시만 나옴
		if (!newPost.title) {
			console.log('제목을 입력해주세요');
			return false;
		}
		return true;
	},
});

const title = ref('');
const type = ref('news');
const createPost = () => {
	const newPost = {
		type: type.value,
		title: title.value,
	};
	emit('createPost', newPost);
	type.value = 'news';
	title.value = '';
};
</script>

<style lang="scss" scoped></style>
