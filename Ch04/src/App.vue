<template>
  <h2>Ch04.Composition API 실습</h2>

  <h4>1)Setup</h4>
  <Component1></Component1>
  <hr />

  <h4>2)Reactivity</h4>
  <MyComponent1></MyComponent1>
  <hr />

  <h4>3)LifeCycle Hooks</h4>
  <HooksComponent v-if="isShow"></HooksComponent>
  <button @click="btnToggle">컴포넌트 {{ status }}</button>
  <hr />

  <h4>4)Dependency Injection</h4>
  <DIComponent></DIComponent>
</template>

<script>
/*
  날짜 : 2023/04/06
  이름 : 구홍모
  내용 : Ch04.Composition API 실습

  Vue3 Composition API
  - 기존 Options API를 대체하는 통합한 Composition API
  - 컴포넌트의 로직을 유연하고 가독성있게 처리할 수 있는 함수 기반 API

*/
import Component1 from "./components/sub1/Component1.vue";
import DIComponent from "./components/sub4/DIComponent.vue";
import MyComponent1 from "./components/sub2/MyComponent1.vue";
import HooksComponent from "./components/sub3/HooksComponent.vue";
import { ref, reactive } from "vue";
import { provide } from "vue";
export default {
  name: "App",
  components: { Component1, MyComponent1, HooksComponent, DIComponent },
  setup() {
    // Hooks
    const isShow = ref(true);
    const status = ref("삭제");
    const btnToggle = () => {
      if (isShow.value) {
        isShow.value = false;
        status.value = "생성";
      } else {
        isShow.value = true;
        status.value = "삭제";
      }
    };
    // DI
    const user = reactive({
      name: "김유신",
      age: 23,
      addr: "김해시",
    });
    provide("user", user); // app 컴포넌트 => 하위 모든 컴포넌트 : user 참조가능
    return { isShow, status, btnToggle };
  },
};
</script>
