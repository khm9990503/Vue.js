<template>
  <h4>User2 목록</h4>
  <table border="1">
    <tr>
      <td>아이디</td>
      <td>이름</td>
      <td>휴대폰</td>
      <td>나이</td>
      <td>등록일</td>
      <td>관리</td>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.rdate }}</td>
      <td>
        <a href="#" @click="modifyUser(user)">수정</a> /
        <a href="#" @click="deleteUser(user)">삭제</a>
      </td>
    </tr>
  </table>
</template>
<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
import { ref, onBeforeMount } from "vue";
const users = ref([]);
const router = useRouter();
const modifyUser = (user) => {
  router.push({
    name: "User2Modify",
    query: {
      uid: user.uid,
      name: user.name,
      hp: user.hp,
      age: user.age,
      rdate: user.rdate,
    },
  });
};
const deleteUser = (user) => {
  const res = confirm("정말 삭제?");
  if (!res) {
    return;
  } else {
    axios
      .delete(`http://localhost:8080/Ch09/user2/${user.uid}`)
      .then((response) => {
        alert("삭제 완료!");
        fetchUser();
      })
      .catch((error) => {
        alert("삭제 실패");
        console.log(error);
      });
  }
};

const fetchUser = () => {
  axios
    .get("http://localhost:8080/Ch09/user2s")
    .then((response) => {
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

onBeforeMount(() => {
  fetchUser();
});
</script>
<style scoped></style>
