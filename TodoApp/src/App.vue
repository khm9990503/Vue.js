<template>
  <router-link to="/login">로그인</router-link> /
  <router-link to="/register">회원가입</router-link>
  <router-view></router-view>
  <br />
  <Header v-on:addTodo="addTodoHandler"></Header
  ><!--헨들러 = 리스너-->
  <Main></Main>
  <Footer></Footer>
</template>
<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { useStore } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    const store = useStore();
    const addTodoHandler = (inputValue) => {
      // store에 저장
      store.dispatch("addTodo", inputValue);
    };
    return { store, addTodoHandler };
  },
};
</script>
<style scoped></style>
