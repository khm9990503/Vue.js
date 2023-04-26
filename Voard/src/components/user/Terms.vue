<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>약관</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-textarea
            label="이용약관"
            variant="outlined"
            rows="10"
            hide-details="true"
            v-model="state.data.terms"
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다"
            v-model="isTerms"
          ></v-checkbox>
          <v-textarea
            label="개인정보 취급방침"
            variant="outlined"
            rows="10"
            hide-details="true"
            v-model="state.data.privacy"
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다"
            v-model="isPrivacy"
          ></v-checkbox>
        </v-sheet>
        <v-sheet max-width="800" class="text-center mx-auto">
          <v-btn @click="btnCancel">취소</v-btn>
          <v-btn class="ml-2" color="primary" @click="btnNext">다음</v-btn>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark"> copyright &copy;Voard v1.0 </v-footer>
  </v-app>
</template>
<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref, reactive, onBeforeMount } from "vue";
const router = useRouter();
const isTerms = ref(false);
const isPrivacy = ref(false);
const state = reactive({
  data: {},
});

const btnCancel = () => {
  router.push("/user/login");
};
const btnNext = () => {
  if (!isTerms.value || !isPrivacy.value) {
    alert("약관에 모두 동의하셔야 합니다.");
    return;
  }
  router.push("/user/register");
};

onBeforeMount(() => {
  axios
    .get("http://localhost:8080/Voard/user/terms")
    .then((response) => {
      state.data = response.data;
      //data.privacy = response.data.privacy;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
