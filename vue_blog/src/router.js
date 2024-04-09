import { createRouter, createWebHistory } from "vue-router";
import WelcomePageVue from "./components/WelcomePage/WelcomePage.vue";
import BlogApiVue from "./components/BlogApi/BlogApi.vue";
import AboutVue from "./components/About/About.vue";

const routes = [
  { path: "/", component: WelcomePageVue },
  { path: "/blog", component: BlogApiVue },
  { path: "/about", component: AboutVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
