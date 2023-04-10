<template>
  <h4>DIComponent</h4>
  <p>
    이름 : {{ user.name }}<br />
    나이 : {{ user.age }}<br />
    주소 : {{ user.addr }}<br />
  </p>
  <DISubComponent></DISubComponent>
</template>
<script setup>
import DISubComponent from "./DISubComponent.vue";
import { inject } from "vue";
const user = inject("user");
</script>
<style scoped></style>
