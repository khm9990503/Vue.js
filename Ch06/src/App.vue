<template>
  <h3>Ch06.Vuex 실습</h3>
  <p>Vuex message : {{ msg }}</p>
  <table border="1">
    <tr>
      <th>번호</th>
      <th>내용</th>
      <th>완료</th>
    </tr>
    <tr v-for="td in tds">
      <td>{{ td.no }}</td>
      <td>{{ td.text }}</td>
      <td>{{ td.done ? "완료" : "못함" }}</td>
    </tr>
  </table>
  <Component1></Component1>
  <Component2></Component2>
  <Component3></Component3>
</template>

<script setup>
import { useStore } from "vuex";
import Component1 from "./components/Component1.vue";
import Component2 from "./components/Component2.vue";
import Component3 from "./components/Component3.vue";

const store = useStore();
const msg = store.getters.getMsg;
const tds = store.getters.getTds;
</script>

<style scoped>
/**
2023/04/11
npm create vite@latest
*/
</style>
