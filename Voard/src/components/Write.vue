<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글작성</v-app-bar-title>
      <p>
        {{ user?.nick }}님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-card>
            <v-card-item>
              <v-card-title>글 작성하기</v-card-title>
              <v-card-subtitle>글쓴이 : 홍길동</v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <v-text-field
                label="글제목 입력"
                variant="outlined"
                density="compact"
                v-model="article.title"
              ></v-text-field>
              <v-textarea
                label="글내용 입력"
                variant="outlined"
                rows="10"
                v-model="article.content"
              ></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="btnCancel">취소하기</v-btn>
              <v-btn color="success" @click="btnWrite">작성하기</v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-toolbar color="primary" title="등록 확인"></v-toolbar>
            <v-card-text> 작성한 글 등록 완료! </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="btnCloseDlg">확인</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
    <v-footer app theme="dark"> copyright &copy;Voard2 v1.0 </v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, reactive, ref } from "vue";
import axios from "axios";
const router = useRouter();
const userStore = useStore();

const dialog = ref(false);
const user = computed(() => userStore.getters.user);
const article = reactive({
  title: "",
  content: "",
  uid: user?.value.uid,
});
const btnCloseDlg = () => {
  dialog.value = false;
  router.push("/list");
};
const btnCancel = () => {
  router.push("/list");
};
const btnWrite = () => {
  axios
    .post("/write", article)
    .then((response) => {
      console.log(response);
      dialog.value = true;
    })
    .catch((error) => {
      console.log(error);
    });
};
const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};
</script>
<style scoped></style>
