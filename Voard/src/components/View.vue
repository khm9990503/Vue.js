<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글보기</v-app-bar-title>
      <p>000님 반갑습니다. <v-btn>로그아웃</v-btn></p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-card>
            <v-card-item>
              <v-card-title>글보기</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-card>
                <v-card-item>
                  <v-card-title>제목입니다.</v-card-title>
                  <v-card-subtitle>글쓴이 : 홍길동</v-card-subtitle>
                  <v-card-subtitle>작성날짜 : 2023.04.25</v-card-subtitle>
                </v-card-item>
                <v-card-text>
                  ResultMap은 매우 유연한 기능으로 다양한 형태로 정의할 수
                  있습니다. 따라서 resultType에 따라 ResultMap을 다르게 정의하여
                  사용할 수 있습니다. ResultMap은 다양한 매핑 정보를 담고
                  있으므로, resultType을 변경하는 경우 해당 객체의 매핑 정보를
                  수정해주어야 합니다.
                </v-card-text>
              </v-card>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="btnCancel">목록으로</v-btn>
              <v-btn color="success" @click="btnModify">수정하기</v-btn>
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
