<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글목록</v-app-bar-title>
      <p>
        {{ user?.nick }}님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-table>
            <thead>
              <tr>
                <th class="text-center">번호</th>
                <th class="text-center">제목</th>
                <th class="text-center">글쓴이</th>
                <th class="text-center">조회수</th>
                <th class="text-center">등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(article, state) in articles">
                <td class="text-center">
                  {{ paging.pageStartNum - state }}
                </td>
                <td class="text-center">
                  <a href="#" @click.prevent="viewOpen(article)">{{
                    article.title
                  }}</a>
                </td>
                <td class="text-center">{{ article.nick }}</td>
                <td class="text-center">{{ article.hit }}</td>
                <td class="text-center">
                  {{ article.rdate.substring(2, 10) }}
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-sheet class="text-right pt-6">
            <v-btn color="primary" @click="btnWrite">글쓰기</v-btn>
          </v-sheet>
          <v-pagination
            v-model="paging.pg"
            :length="paging.lastPageNum"
            :total-visible="10"
            rounded="circle"
            @click="pageClick"
          ></v-pagination>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark"> copyright &copy;Voard2 v1.0 </v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onBeforeMount, reactive, ref } from "vue";
import axios from "axios";
const router = useRouter();
const userStore = useStore();
// data
const user = computed(() => userStore.getters.user);
const paging = reactive({
  pg: 1,
  pageStartNum: null,
  lastPageNum: null,
  currentPage: null,
  pageGroupStart: null,
  pageGroupEnd: null,
});
const articles = ref([]);
// method
const btnWrite = () => {
  router.push("/write");
};
const btnLogout = () => {
  localStorage.removeItem("accessToken");
  router.push("/user/login");
};
const getArticles = () => {
  axios
    .get("/getList?pg=" + paging.pg)
    .then((response) => {
      console.log(response);
      articles.value = response.data.articles;
      paging.pg = response.data.pg;
      paging.pageStartNum = response.data.pageStartNum;
      paging.lastPageNum = response.data.lastPageNum;
      paging.currentPage = response.data.currentPage;
      paging.pageGroupStart = response.data.pageGroupStart;
      paging.pageGroupEnd = response.data.pageGroupEnd;
    })
    .catch((error) => {
      console.log(error);
    });
};
const pageClick = () => {
  if (paging.pg > paging.lastPageNum) {
    paging.pg = paging.lastPageNum;
  }
  //alert("pg : " + paging.pg);
  getArticles();
};
const viewOpen = (article) => {
  router.push({ name: "View", params: article });
};
onBeforeMount(() => {
  getArticles();
});
</script>
<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
