<template>
  <div>
    <h3>회원가입</h3>
  </div>
  <form @submit.prevent="registProc">
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
          <input type="submit" value="회원가입" />
        </td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import { reactive } from "vue";
import axios from "axios";
const user = reactive({
  uid: "",
  pass: "",
});
const registProc = () => {
  axios
    .post("http://localhost:8080/TodoApp/user/regist", user)
    .then((response) => {
      alert("회원가입 성공!");
    })
    .catch((error) => {
      console.log(error);
      alert("회원가입 실패!");
    });
};
</script>
<style scoped></style>
