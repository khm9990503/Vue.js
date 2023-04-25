<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글작성</v-app-bar-title>
      <p>000님 반갑습니다. <v-btn>로그아웃</v-btn></p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-card>
            <v-card-item>
              <v-card-title>글 수정하기</v-card-title>
              <v-card-subtitle>글쓴이 : 홍길동</v-card-subtitle>
            </v-card-item>
            <v-card-text>
              <v-text-field
                label="글제목 입력"
                variant="outlined"
                density="compact"
              ></v-text-field>
              <v-textarea
                label="글내용 입력"
                variant="outlined"
                rows="10"
              ></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="btnCancel">취소하기</v-btn>
              <v-btn color="success" @click="btnModify">작성하기</v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark"> copyright &copy;Voard v1.0 </v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const btnCancel = () => {
  router.push("/list");
};
const btnModify = () => {
  router.push("/modify");
};
</script>
<style scoped></style>
