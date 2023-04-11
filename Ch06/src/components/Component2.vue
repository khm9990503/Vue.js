<template>
  <h4>component2</h4>
  <p>Vuex count : {{ count }}</p>
  <button @click="btnDecrement">감소</button>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const tds = store.getters.getTds;
const count = computed(() => store.getters.getCnt);
const btnDecrement = function () {
  // store action 호출
  store.dispatch("decrement");
};
</script>
<style scoped></style>
