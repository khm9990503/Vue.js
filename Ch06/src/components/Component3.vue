<template>
  <h4>component3</h4>
  <p>Vuex count : {{ showCount }}</p>
  <input type="number" v-model="count" />
  <button @click="btnInit">초기화</button>
</template>
<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const count = ref(0);
const showCount = computed(() => store.getters.getCnt);
const btnInit = function () {
  // store action 호출
  const payload = Number(count.value);
  store.dispatch("initCount", payload);
};
</script>
<style scoped></style>
