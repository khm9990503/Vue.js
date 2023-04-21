<template>
  <main>
    <ul>
      <Item></Item>
    </ul>
  </main>
</template>
<script>
import Item from "./Item.vue";

export default {
  name: "Main",
  setup() {
    return {};
  },
  components: { Item },
};
</script>
<style scoped>
main {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}
main ul {
  width: 100%;
  height: auto;
  list-style: none;
  padding-left: 0;
  box-sizing: border-box;
}
</style>
