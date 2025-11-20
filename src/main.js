import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'   // ← прямой импорт
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import './assets/base.css'

// Создаём роутер вручную прямо тут
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/contact', name: 'contact', component: ContactView },
  ]
})

createApp(App).use(router).mount('#app')