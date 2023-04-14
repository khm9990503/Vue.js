<template>
  <h4>로그인</h4>
  <div>
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
            <button type="submit">로그인</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import axios from "axios";
const router = useRouter();
const user = reactive({
  uid: "",
  pass: "",
});
const loginProc = () => {
  axios
    .post("http://localhost:8080/Voard/user/login", user)
    .then((response) => {
      console.log(response); // 저장소는 로컬 저장소, 세션 저장소, 쿠키 크게 나뉜다
      const token = response.data.accessToken; // 브라우저 저장소에 쿠키 저장 (Vuex로 넘기는게 맞다 그러나 휘발성 새로고침하면 날아감 그래서 localStorage에 남긴다)
      localStorage.setItem("accessToken", token);
      router.push("/jwt/loginSuccess");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
