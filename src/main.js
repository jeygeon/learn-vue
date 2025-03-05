import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

// 전역적으로 컴포넌트를 등록하게 되면, 해당 컴포넌트를 사용하지 않더라도
// 최종적으로 빌드에 해당 컴포넌트가 포함된다.
// 이는 사용자가 다운로드 하는 자바스크립트 파일을 불필요하게 증가시키게 된다.
// 소스코드를 볼때 컴포넌트간의 종속관계를 파악하기 힘들다

import 'bootstrap/dist/js/bootstrap.js';
