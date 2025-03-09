<template>
	<div>
		<main>
			<div class="container py-4">
				<PostCreate @create-post="createPost"></PostCreate>

				<hr class="my-4" />

				<div class="row g-3">
					<div class="col col-4">
						<AppCard title="제목1" content="내용1"></AppCard>
					</div>
					<div class="col col-4">
						<AppCard :title="post.title" :content="post.content"></AppCard>
					</div>
					<div class="col col-4" v-for="(post, index) in posts" :key="index">
						<AppCard
							:title="post.title"
							:content="post.content"
							:isLike="post.isLike"
							:type="post.type"
						></AppCard>
					</div>
				</div>

				<hr class="my-4" />

				<LabelInput v-model="username" label="이름"></LabelInput>
			</div>
		</main>
	</div>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
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

const username = ref('');
</script>

<style lang="scss" scoped></style>
