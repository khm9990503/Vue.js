<template>
  <h4>User1 목록</h4>
  <table border="1">
    <tr>
      <td>아이디</td>
      <td>이름</td>
      <td>휴대폰</td>
      <td>나이</td>
      <td>관리</td>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>
        <a href="#" @click.prevent="modifyUser(user)">수정</a>&nbsp;/
        <a href="#" @click.prevent="deleteUser(user)">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
import { onBeforeMount, ref } from "vue";

const router = useRouter();
const users = ref([]);
const modifyUser = (user) => {
  router.push({ name: "User1Modify", params: user });
};
const deleteUser = (user) => {
  const res = confirm("삭제하실?");
  if (!res) {
    return;
  }
  axios
    .delete(`http://localhost:8080/Ch09/user1/${user.uid}`)
    .then((response) => {
      alert("삭제 성공!");
    })
    .catch((error) => {
      console.log(error);
    });
  //router.push({ name: "User1Modify", params: user });
};

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Ch09/user1s")
    .then((response) => {
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
