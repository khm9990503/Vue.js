<template>
  <router-view></router-view>
</template>
<script setup>
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import userStore from "./store/user";
const router = useRouter();
onBeforeMount(() => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken != null) {
    userStore.dispatch("setUserAuth", accessToken);
  } else {
    router.push("/user/login");
  }
});
</script>
