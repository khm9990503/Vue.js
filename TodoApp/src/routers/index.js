/**
 * Router 인스턴스 정의
 *
 *
 */
import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/sub1/Login.vue";
import Register from "../components/sub1/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },
  ],
});

// router 내보내기 -> main.js 등록
export default router;
