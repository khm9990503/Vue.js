/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

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
