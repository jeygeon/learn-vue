<template>
	<div class="card">
		<div class="card-header">
			<slot name="header">#Header</slot>
		</div>
		<div class="card-body">
			<!-- name을 지정하지 않으면 기본적으로 default 이다. -->
			<slot name="content1">#Title</slot>
			<br />
			<slot>#Content</slot>
			<br />
			<slot name="content3" content-message="내용3"></slot>
			<br />
			<!-- content4로 정의된 slot은 없음으로 렌더링되지 않는다 -->
			<slot v-if="$slots.content4" name="content4"></slot>
		</div>
		<div class="card-footer text-body-secondary">
			<slot name="footer">#Footer</slot>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
