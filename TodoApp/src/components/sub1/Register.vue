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
  alert("dd");
};
</script>
<style scoped></style>
