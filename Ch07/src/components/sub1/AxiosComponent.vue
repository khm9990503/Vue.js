<template>
  <h4>Axios 실습하기</h4>
  <h4>GET 기본</h4>
  <button @click="getUsers">Users 요청</button>
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

  <h4>GET 단축함수 예제</h4>
  <input type="text" v-model="inputText" placeholder="아이디 입력" />
  <button @click="getUser1">User 요청</button>
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
</template>
<script setup>
import axios from "axios";
import { ref, reactive } from "vue";
const users = ref([]);
const user = reactive({
  uid: "",
  pass: "",
  name: "",
  hp: "",
  age: 0,
});
const inputText = ref("");

const getUsers = function () {
  // $.ajax({}) 사용가능 하지만 더이상 업데이트 X, 비추천
  axios({
    url: "http://localhost:8080/Ch09/user1s",
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      console.log("resp : " + JSON.stringify(response));
      console.log(response.data);
      users.value = response.data;
    })
    .catch((error) => {
      console.log("error : " + error);
    });
};
const getUser = function () {
  const jsonData = {
    uid: inputText.value,
  };
  axios({
    url: "http://localhost:8080/Ch09/user1",
    method: "get",
    params: jsonData,
    responseType: "json",
  })
    .then((response) => {
      console.log(response.data);
      Object.assign(user, response.data);
    })
    .catch((error) => {
      console.log("error : " + error);
    });
};

const getUser1 = () => {
  const jsonData = {
    uid: inputText.value,
  };
  axios
    .get("http://localhost:8080/Ch09/user1", { params: jsonData })
    .then((response) => {
      console.log(response.data);
      Object.assign(user, response.data);
    })
    .catch((error) => {
      console.log("error : " + error);
    });
};

const postUser = () => {
  const jsonData = {
    uid: user.uid,
    pass: user.pass,
    name: user.name,
    hp: user.hp,
    age: user.age,
  };
  axios({
    url: "http://localhost:8080/Ch09/user1",
    method: "post",
    data: jsonData,
    responseType: "json",
  })
    .then((response) => {
      alert("등록완료");
      console.log("등록 시 :" + response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
