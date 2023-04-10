<template>
  <h4>Component3</h4>
  <p>
    이름 : <input type="text" v-model="user.name" /> <br />
    이름 : <input type="number" v-model="user.age" /> <br />
    <button @click="btnSend">상위로 전송</button>
  </p>
</template>
<script>
export default {
  name: "Component3",
  setup(props, context) {
    // 변수선언(변수는 반응성 X but 객체는 기본적으로 반응성을 가진다.)
    const user = {
      name: "",
      age: 0,
    };
    const btnSend = () => {
      console.log("name : " + user.name);
      console.log("age : " + user.age);
      // 상위컴포넌트로 이벤트 발생
      context.emit("myEvent", user);
    };
    return { user, btnSend };
  },
};
</script>
<style scoped></style>
