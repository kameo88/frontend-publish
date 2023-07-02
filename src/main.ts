import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "./assets/css/index.css";
import i18n from "./i18n";
import OverflowTootipDirective from "./directives/overflow-tooltip-directive";

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .directive("overflow-tooltip", OverflowTootipDirective)
  .mount("#app");
