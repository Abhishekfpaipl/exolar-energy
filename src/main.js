import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import observe from "./directives/v-observe.js"; 

createApp(App).directive('observe', observe).use(store).use(router).mount("#app");
