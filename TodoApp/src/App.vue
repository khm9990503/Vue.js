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
import { onBeforeMount } from "vue";
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
    onBeforeMount(() => {
      console.log("JwtComponent onBeforeMount!!!");
      const accessToken = localStorage.getItem("accessToken");
      store
        .dispatch("authUser", accessToken)
        .then((response) => {
          alert("로그인 중");
        })
        .catch((error) => {
          alert("로그인을 하고 사용해주세요");
        });
    });
    return { store, addTodoHandler, onBeforeMount };
  },
};
</script>
<style scoped></style>
