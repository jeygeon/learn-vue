<template>
	<div>
		<main>
			<div class="container py-4">
				<PostCreate @create-post="createPost"></PostCreate>

				<hr class="my-4" />

				<div class="row g-3">
					<div class="col col-4">
						<PostItem title="제목1" content="내용1"></PostItem>
					</div>
					<div class="col col-4">
						<PostItem :title="post.title" :content="post.content"></PostItem>
					</div>
					<div class="col col-4" v-for="(post, index) in posts" :key="index">
						<PostItem
							:title="post.title"
							:content="post.content"
							:isLike="post.isLike"
							:type="post.type"
						></PostItem>
					</div>
				</div>

				<hr class="my-4" />

				<!-- <LabelInput v-model:username="username"></LabelInput> {{ username }} -->
				<LabelInput v-model="username"></LabelInput> {{ username }}
			</div>
		</main>
	</div>
</template>

<script setup>
import PostItem from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import { reactive, ref } from 'vue';

const post = reactive({
	title: '제목2',
	content: '내용2',
});

const posts = reactive([
	{ title: '제목3', content: '내용3', isLike: true, type: 'news' },
	{ title: '제목4', content: '내용4', isLike: false, type: 'notice' },
	{ title: '제목5', content: '내용5', isLike: true, type: 'notice' },
	{ title: '제목6', content: '내용6', isLike: false, type: 'news' },
]);

const createPost = newPost => {
	console.log(newPost);
	posts.push(newPost);
};

const username = ref('홍길동');
</script>

<style lang="scss" scoped></style>
