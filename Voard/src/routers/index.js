import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/user/Login.vue";
import Register from "../components/user/Register.vue";
import Terms from "../components/user/Terms.vue";
import List from "../components/List.vue";
import View from "../components/View.vue";
import Write from "../components/Write.vue";
import Modify from "../components/Modify.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/user/login", name: "Login", component: Login },
    { path: "/user/terms", name: "Terms", component: Terms },
    { path: "/user/register", name: "Register", component: Register },
    { path: "/list", name: "List", component: List },
    { path: "/write", name: "Write", component: Write },
    { path: "/view", name: "View", component: View, props: true },
    { path: "/modify", name: "Modify", component: Modify, props: true },
  ],
});
router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken != null) {
    // JWT 인증 토큰이 있는 경우 이전 라우터를 기억합니다.
    localStorage.setItem("previousRoute", from.path);
  }
  next();
});

export default router;
