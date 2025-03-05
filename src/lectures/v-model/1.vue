<template>
	<div>
		<!--
		form 에서 입력 양식을 처리할 떄 입력 요소의 상태와 자바스크립트의 상태를 동기화해야 하는 경우가 있다.
		@input 디렉티브를 통해서 input에 입력이 있을때마다 자바스크립트의 요소 값을 동기화 할 수 있다 
		:value="inputValue" 
		@input="event => (inputValue = event.target.value)"
		-->
		<h2>Input Value</h2>
		<!--
		<input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/>
		-->
		<input type="text" v-model="inputValue" />
		<div>{{ inputValue }}</div>

		<hr />

		<!--
		v-model은 HTML 요소가 뭐냐에 따라서 서로 다른 속성과 이벤트를 처리한다
		
		input type="text", input type="textarea" 는 value속성과 input 이벤트
		input type="checkbox", input type="radio" 는 checked속성과 change 이벤트
		input type="select"는 value속성과 change 이벤트
		-->
		<h2>CheckBox Value</h2>
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="yes"
			false-value="no"
		/>
		<label for="checkbox">{{ checkboxValue }}</label>

		<hr />

		<h2>CheckBox Values</h2>
		<label>
			<input type="checkbox" value="HTML" v-model="checkboxValues" /> HTML
		</label>
		<label>
			<input type="checkbox" value="CSS" v-model="checkboxValues" /> CSS
		</label>
		<label>
			<input
				type="checkbox"
				value="JavaScript"
				v-model="checkboxValues"
			/>JavaScript
		</label>
		<div>{{ checkboxValues }}</div>
		<hr />

		<h2>Radio Value</h2>
		<label>
			<input type="radio" name="type" value="o" v-model="radioValue" />
			O 형
		</label>
		<label>
			<input type="radio" name="type" value="a" v-model="radioValue" />
			A 형
		</label>
		<div>{{ radioValue }}</div>

		<hr />

		<h2>Select Value</h2>
		<select v-model="selectValue">
			<option value="HTML">HTML</option>
			<option value="CSS">CSS</option>
			<option value="JavaScript">JavaScript</option>
		</select>
		<div>{{ selectValue }}</div>

		<!--
		v-model 수식어(modifiers)
		.lazy
		.number > 입력 값이 자동으로 number 형변환
		.trim > 입력 값이 자동으로 앞뒤 공백 제거
		--></div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');
const checkboxValue = ref('yes');
const radioValue = ref('o');
const selectValue = ref('HTML');
const checkboxValues = ref([]);
</script>

<style lang="scss" scoped></style>
