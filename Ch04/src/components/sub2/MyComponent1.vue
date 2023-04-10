<template>
  <h4>MyComponent1</h4>
  <p>
    msg : {{ msg }}
    <button @click="changeMsg">수정</button>
  </p>
  <p>
    count: {{ count }}
    <button @click="btnCountUp">증가</button>
  </p>
  <p>
    name:{{ user.name }}<br />
    age:{{ user.age }}<br />
    addr:{{ user.addr }}<br />
    <button @click="changeUser">수정</button>
  </p>
  <p>신라사람</p>
  <ul>
    <li v-for="person in sillaPerson">{{ person.name }}</li>
  </ul>
  <p>조선사람</p>
  <ul>
    <li v-for="person in josunPerson">{{ person.name }}</li>
  </ul>
  <p>result : {{ result }}</p>
  <p>result2X : {{ result2X }}</p>
  <button @click="btnIncrement">증가</button>
</template>
<script>
import { ref, reactive, computed, watch } from "vue";

export default {
  name: "MyComponent1",
  setup() {
    // 변수 선언(ref : 반응성을 갖게)
    // ref()      -> 기본타입을 반응형으로 처리하는 API
    // reactive() -> 참조타입을 반응형으로 처리하는 API (생략가능)
    const msg = ref("Hello");
    const count = ref(0);
    const user = reactive({
      name: "홍길동",
      age: 23,
      addr: "서울",
    });
    const users = reactive([
      { uid: 1, name: "김유신" },
      { uid: 2, name: "김춘추" },
      { uid: 3, name: "장보고" },
      { uid: 4, name: "정약용" },
      { uid: 5, name: "이순신" },
    ]);
    const result = ref(10);
    // 함수 선언
    function changeMsg() {
      if (msg.value == "Hello") {
        msg.value = "Welcome";
      } else {
        msg.value = "Hello";
      }
    }
    function btnCountUp() {
      count.value++;
    }
    const changeUser = () => {
      user.name = "김유신";
      user.age = 25;
      user.addr = "광주";
    };
    const btnIncrement = () => {
      return result.value++;
    };
    // computed API
    const result2X = computed(() => {
      return result.value * 2;
    });

    const sillaPerson = computed(() => {
      return users.filter((user) => {
        return user.uid <= 3;
      });
    });
    const josunPerson = computed(() => users.filter((user) => user.uid > 3));
    // watch API
    watch(result, (current, prev) => {
      console.log("이전값 : " + prev);
      console.log("현재값 : " + current);
    });
    return {
      msg,
      count,
      user,
      result,
      users,
      changeMsg,
      btnCountUp,
      changeUser,
      sillaPerson,
      josunPerson,
      btnIncrement,
      result2X,
    };
  },
};
</script>
<style></style>
