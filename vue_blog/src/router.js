import { createRouter, createWebHistory } from 'vue-router'
import WelcomePageVue from '../components/WelcomePage.vue'
import BlogApiVue from '../components/BlogApi.vue'

const routes = [
    { path: '/', component: WelcomePageVue },
    { path: '/blog', component: BlogApiVue },
    { path: '/about', component: BlogApiVue }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router  