import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/index.js";
//import './assets/main.css'

const app = createApp(App);

// router 추가
app.use(router);

// app 컴포넌트 출력
app.mount("#app");
