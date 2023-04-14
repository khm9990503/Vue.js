<template>
  <h4>REST API 실습하기</h4>
  <table border="1">
    <tr>
      <th>아이디</th>
      <th>이름</th>
      <th>휴대폰</th>
      <th>나이</th>
    </tr>
    <tr v-for="user in users">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.hp }}</td>
      <td>{{ user.age }}</td>
    </tr>
  </table>
  <hr />
  <h4>GET 파라미터 전송예제</h4>
  <input type="text" v-model="inputText" placeholder="아이디 입력" />
  <button @click="getUser">User 요청</button>
  <p>
    아이디 : {{ user.uid }}<br />
    이름 : {{ user.name }}<br />
    휴대폰 : {{ user.hp }}<br />
    나이 : {{ user.age }}<br />
  </p>
  <hr />
  <h4>POST 예제</h4>
  <form v-on:submit.prevent="postUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td><input type="text" v-model="user.pass" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="저장" />
        </td>
      </tr>
    </table>
  </form>
  <hr />
  <h4>put 예제</h4>
  <form v-on:submit.prevent="putUser">
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" readonly /></td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td><input type="text" v-model="user.pass" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>휴대폰</td>
        <td><input type="text" v-model="user.hp" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="저장" />
        </td>
      </tr>
    </table>
  </form>
  <hr />

  <h4>Delete 예제</h4>
  <input type="text" v-model="inputText" placeholder="아이디 입력" />
  <button @click="deleteUser">User 삭제</button>
</template>
<script setup>
import axios from "axios";
import { ref, reactive, onBeforeMount } from "vue";

const users = ref([]);
const inputText = ref("");
const user = reactive({
  uid: "",
  pass: "",
  name: "",
  hp: "",
  age: 0,
});

function getUser() {
  axios
    .get(`http://localhost:8080/Ch09/user1/${inputText.value}`) // ``으로 하면 변수가 참조된다.
    .then((response) => {
      console.log(response.data);
      Object.assign(user, response.data);
    })
    .catch((error) => {
      console.log(error.data);
    });
}

function postUser() {
  const jsonData = {
    uid: user.uid,
    pass: user.pass,
    name: user.name,
    hp: user.hp,
    age: user.age,
  };
  axios
    .post("http://localhost:8080/Ch09/user1", jsonData)
    .then((response) => {
      console.log(response.data);
      users.value = response.data;
      Object.assign(user, response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

const putUser = () => {
  const jsonData = {
    uid: user.uid,
    pass: user.pass,
    name: user.name,
    hp: user.hp,
    age: user.age,
  };
  axios({
    url: "http://localhost:8080/Ch09/user1",
    method: "put",
    data: jsonData,
    responseType: "json",
  })
    .then((response) => {
      alert("수정완료");
      users.value = response.data;
      console.log("수정 시 :" + response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteUser = () => {
  axios
    .delete(`http://localhost:8080/Ch09/user1/${inputText.value}`) // ``으로 하면 변수가 참조된다.
    .then((response) => {
      console.log(response.data);
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error.data);
    });
};

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Ch09/user1s")
    .then((response) => {
      console.log(response.data);
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
