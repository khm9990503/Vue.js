<template>
  <div>
    <h3>로그인</h3>
  </div>
  <form @submit.prevent="loginProc">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td><input type="password" v-model="user.pass" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="로그인" />
        </td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { reactive } from "vue";

const router = useRouter();
const store = useStore();

const user = reactive({
  uid: "",
  pass: "",
});

const loginProc = function () {
  // 로그인 요청
  store
    .dispatch("login", user)
    .then((response) => {
      alert("로그인 성공");
    })
    .catch((error) => {
      alert("로그인 실패!");
    });
};
</script>
<style scoped></style>
