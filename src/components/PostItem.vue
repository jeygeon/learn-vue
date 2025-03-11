<template>
	<div>
		<div class="card">
			<div class="card-body">
				<h6>
					<!-- type: news, notice -->
					<span class="badge text-bg-secondary">{{ typeName }}</span>
				</h6>
				<h5 class="card-title mt-2">{{ title }}</h5>
				<p class="card-text">
					{{ content }}
				</p>
				<a href="#" class="btn" :class="isLikeClass">좋아요</a>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	type: { type: String, default: 'news' },
	title: { type: String, required: true },
	content: { type: String, required: false },
	isLike: { type: Boolean, default: false },
});

const isLikeClass = computed(() => {
	return props.isLike ? 'btn-danger' : 'btn-outline-danger';
});

const typeName = computed(() => {
	return props.type === 'news' ? '뉴스' : '공지사항';
});
</script>

<style lang="scss" scoped></style>
