<template>
  <router-link v-if="showlogin > 0" to="/login">로그인</router-link>
  /
  <router-link v-if="showlogin > 0" to="/register">회원가입</router-link> /
  <a href="#" v-if="showlogin < 1" @click.prevent="logout">로그아웃</a>
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
import { onBeforeMount, ref, computed } from "vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    const store = useStore();
    const showlogin = computed(() => store.getters.getShowLogin);

    const addTodoHandler = (inputValue) => {
      // store에 저장
      store.dispatch("addTodo", inputValue);
    };
    const logout = () => {
      store.dispatch("setShowLogin", 1);
      localStorage.removeItem("accessToken");
    };
    onBeforeMount(() => {
      console.log("JwtComponent onBeforeMount!!!");
      const accessToken = localStorage.getItem("accessToken");
      store
        .dispatch("authUser", accessToken)
        .then((response) => {
          store.dispatch("setShowLogin", 0);
          alert("로그인 완료");
        })
        .catch((error) => {
          console.log(error);
          alert("로그인을 하고 사용해주세요");
        });
    });
    return { logout, showlogin, addTodoHandler, onBeforeMount };
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
