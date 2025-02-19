<template>
	<div :style="styleObject">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus
		molestiae sapiente magni? Ullam nulla facere quasi officiis recusandae
		possimus voluptatibus, exercitationem sed ea? Corporis blanditiis assumenda
		dicta quia sed!
		<div>
			<button v-on:click="fontSize++">+</button>
			<button v-on:click="fontSize--">-</button>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';

// const styleObject = reactive({
// 	color: 'red',
// 	fontSize: '20px',
// });

const fontSize = ref(13);
const styleObject = computed(() => ({
	color: 'red',
	fontSize: fontSize.value + 'px',
}));
</script>

<style lang="scss" scoped></style>
