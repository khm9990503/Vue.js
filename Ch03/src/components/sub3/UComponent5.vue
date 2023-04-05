<template>
  <h4>UComponent5</h4>
  <p>
    이름 : <input type="text" v-model="name" /> <br />
    나이 : <input type="number" v-model="age" /> <br />
  </p>
  <button @click="onEmit">상위 컴포넌트 전달</button>
</template>
<script>
export default {
  name: "UComponent5",
  data() {
    return {
      name: "hong",
      age: 12,
    };
  },
  methods: {
    onEmit: function () {
      let data = {
        name: this.name,
        age: this.age,
      };
      // 상위 컴포넌트로 myEvent 이벤트를 발생
      this.$emit("myEvent", data);
    },
  },
};
</script>
<style scoped></style>
