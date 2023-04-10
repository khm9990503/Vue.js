<script setup></script>

<template>
  <h3>Ch05.Router 실습</h3>

  <h4>1)Router 기본</h4>
  <!--router 기능을 하기 위해 라이브러리 필요, 기본글에서 a링크로 변환-->
  <router-link to="/hello">Hello</router-link> /
  <router-link to="/welcome">Welcome</router-link> /
  <router-link to="/greeting">Greeting</router-link>

  <router-view></router-view>
  <hr />

  <h4>2)Nested Router</h4>
  <hr />

  <h4>3)Named view</h4>
  <hr />
</template>

<style scoped></style>
