<template>
  <h4>MyComponent4 - watch API</h4>
  <p>금지문자 발견 : {{ banText }}</p>
  <textarea v-model="inputText" cols="30" rows="10"></textarea>
</template>
<script>
export default {
  name: "MyComponent4",
  data() {
    return {
      inputText: "",
      banText: ["바보", "멍청이", "똥개"],
    };
  },
  // compute랑 다른 점으로 리턴값이 없다. 상태값 데이터 변화를 감지해서 특정 로직을 수행하는 API
  watch: {
    inputText: function () {
      for (let i = 0; i <= this.banText.length; i++) {
        let pos = this.inputText.indexOf(this.banText[i]);
        if (pos >= 0) {
          alert(this.banText[i] + " 입력 불가");
          this.inputText = this.inputText.substr(0, pos);
        }
      }
    },
  },
};
</script>
<style scoped></style>
