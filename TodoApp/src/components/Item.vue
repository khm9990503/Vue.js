<template>
  <li v-for="(td, index) in tds">
    <i class="fa fa-check"></i>
    {{ td }}
    <button @click="removeTodoHandler(index)">삭제</button>
  </li>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Item",
  setup() {
    const store = useStore();
    const tds = computed(() => store.getters.getTodos);

    const removeTodoHandler = (index) => {
      store.dispatch("removeTodo", index);
    };
    return { tds, removeTodoHandler };
  },
};
</script>
<style scoped>
main ul li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding-left: 6px;
  margin: 6px 0;
  background-color: white;
}
main li button {
  float: right;
  width: 40px;
  height: 40px;
  border: none;
  color: #de4343;
}
</style>
