<template>
  <h3>NewComponent1</h3>
  <p>
    카운터 : {{ count }}
    <button @click="btnCountUp">증가</button>
  </p>
</template>
<script>
export default {
  name: "NewComponent1",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    btnCountUp: function () {
      this.count++;
    },
  },
  // 컴포넌트 라이프사이클 함수(Hook) : mounted, updated, unmounted
  beforeCreate: function () {
    console.log("beforeCreate...");
  },
  created: function () {
    console.log("created...");
  },
  beforeMount: function () {
    console.log("beforeMount...");
  },
  mounted: function () {
    console.log("mounted...");
  },
  ///////////////////////// 업데이트
  beforeUpdate: function () {
    console.log("beforeUpdate...");
  },
  updated: function () {
    console.log("updated...");
  },
  ///////////////////////// 제거
  beforeUnmount: function () {
    console.log("beforeUnmount...");
  },
  unmounted: function () {
    console.log("unmounted...");
  },
};
</script>
<style scoped></style>
