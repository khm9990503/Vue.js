<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글보기</v-app-bar-title>
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
              <v-card-title>글보기</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-card>
                <v-card-item>
                  <v-card-title>{{ article.title }}</v-card-title>
                  <v-card-subtitle>글쓴이 : {{ article.nick }}</v-card-subtitle>
                  <v-card-subtitle
                    >작성날짜 :
                    {{ article?.rdate.substring(2, 10) }}</v-card-subtitle
                  >
                </v-card-item>
                <v-card-text>
                  {{ article.content }}
                </v-card-text>
              </v-card>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="btnCancel">목록으로</v-btn>
              <v-btn
                color="success"
                v-if="article.uid == user.uid"
                @click="btnModify"
                >수정하기</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark"> copyright &copy;Voard2 v1.0 </v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { reactive, computed } from "vue";
const router = useRouter();
const userStore = useStore();
const user = computed(() => userStore.getters.user);
const props = defineProps({
  no: String,
  title: String,
  content: String,
  uid: String,
  nick: String,
  rdate: String,
});
const article = reactive({
  no: props.no,
  title: props.title,
  content: props.content,
  uid: props.uid,
  nick: props.nick,
  rdate: props.rdate,
});
const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};
const btnCancel = () => {
  router.push("/list");
};
const btnModify = () => {
  router.push({ name: "Modify", params: article });
};
</script>
<style scoped></style>
