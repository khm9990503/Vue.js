<template>
  <h4>MyComponent2 - Methods API</h4>
  <button v-on:click="btn1Click">button1</button>
  <button v-on:click="btn2Click">button2</button>
  <button v-on:click="btn3Click">button3</button>
</template>
<script>
export default {
  name: "MyComponent2",
  // 화면 이벤트 처리와 로직 제어에 관련한 함수를 정의하는 API
  methods: {
    btn1Click() {
      alert("button click1");
    },
    btn2Click: function () {
      alert("button click2");
    },
    btn3Click: () => {
      alert("button click3");
    },
  },
};
</script>
<style scoped></style>
