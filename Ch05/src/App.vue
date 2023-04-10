<script setup></script>

<template>
  <h3>Ch05.Router 실습</h3>

  <h4>1)Router 기본</h4>
  <!--router 기능을 하기 위해 라이브러리 필요, 기본글에서 a링크로 변환-->
  <router-link to="/hello">Hello</router-link> /
  <router-link to="/welcome">Welcome</router-link> /
  <router-link to="/greeting">Greeting</router-link>
  <hr />

  <h4>2)Nested Router</h4>
  <!-- Router로 페이지를 이동할 때 2개 이상의 컴포넌트를 화면에 출력 -->
  <router-link to="/parent">Parent</router-link>
  <hr />

  <h4>3)Named view</h4>
  <!-- 특정 페이지로 이동했을 때 여러 개의 컴포넌트를 동시에 화면에 출력 -->
  <router-link to="/main1">Main1</router-link> /
  <router-link to="/main2">Main2</router-link> /
  <router-link to="/main3">Main3</router-link>
  <hr />

  <h4>4)Router 데이터 전송</h4>
  <router-link
    v-bind:to="{
      path: '/component1', // 쿼리는 path
      query: { name: '홍길동', age: 21, addr: '부산' },
    }"
    >Component1</router-link
  >
  /
  <router-link
    v-bind:to="{
      name: 'Component2', // 파람은 name
      params: { name: '홍길동', age: 21, addr: '부산' },
    }"
    >Component2</router-link
  >
  /
  <router-link to="/form1">Form1</router-link>
  /
  <router-link to="/form2">Form2</router-link>
  <hr />

  <router-view name="header"></router-view>
  <router-view></router-view>
  <router-view name="footer"></router-view>
</template>

<style scoped></style>
