<template>
  <h4>component1</h4>
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
  <p>Vuex count : {{ count }}</p>
  <button @click="btnIncrement">증가</button>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const msg = store.getters.getMsg;
const tds = store.getters.getTds;
const count = computed(() => store.getters.getCnt);

const btnIncrement = function () {
  // store action 호출
  store.dispatch("increment");
};
</script>
<style scoped></style>
