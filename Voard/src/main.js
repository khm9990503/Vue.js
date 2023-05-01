/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// axios
import axios from "axios";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// routers
import router from "./routers/index.js";

// store
import userStore from "./store/user";

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.use(userStore);
app.mount("#app");

// axios 전역설정
axios.defaults.baseURL = "http://localhost:8080/Voard2"; // 개발
//axios.defaults.baseURL = "http://3.35.170.228:8181"; // 배포
