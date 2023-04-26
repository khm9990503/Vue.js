<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>회원가입</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-card class="mb-2">
            <v-card-item>
              <v-card-title>사이트 이용정보 입력</v-card-title>
            </v-card-item>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="아이디 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.uid"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      color="success"
                      :loading="loading"
                      @click="btnCheckUid"
                      >중복확인</v-btn
                    >
                    <v-chip
                      v-if="isUidCheck == 1"
                      class="ml-2"
                      color="red"
                      text-color="white"
                    >
                      이미 사용중인 아이디
                    </v-chip>
                    <v-chip
                      v-if="isUidCheck == 0"
                      class="ml-2"
                      color="green"
                      text-color="white"
                    >
                      사용가능한 아이디
                    </v-chip>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      type="password"
                      label="비밀번호 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.pass1"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      type="password"
                      label="비밀번호 확인"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.pass2"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-item>
              <v-card-title>개인정보 이용정보 입력</v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="이름 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="별명 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.nick"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"
                    ><v-btn color="success" @click="btnCheckNick"
                      >중복확인</v-btn
                    >
                    <v-chip
                      v-if="isNickCheck == 1"
                      class="ma-2"
                      color="red"
                      text-color="white"
                    >
                      이미 사용중인 별명
                    </v-chip>
                    <v-chip
                      v-if="isNickCheck == 0"
                      class="ma-2"
                      color="green"
                      text-color="white"
                    >
                      사용가능한 별명
                    </v-chip>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="이메일 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="휴대폰 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.hp"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      label="우편번호 검색"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.zip"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2">
                    <v-btn color="success" block="" @click="postcode"
                      >검색</v-btn
                    >
                  </v-col>
                  <v-col cols="5"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      label="기본주소 검색"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.addr1"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      id="addr2"
                      label="상세주소 입력"
                      variant="outlined"
                      density="compact"
                      hide-details="true"
                      v-model="user.addr2"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
              </v-container>
            </v-card-item>
            <v-card-text></v-card-text>
          </v-card>
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
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import axios from "axios";
const isUidCheck = ref(3);
const isNickCheck = ref(3);
const loading = ref(false);
const router = useRouter();
const user = reactive({
  uid: null,
  pass1: null,
  pass2: null,
  name: null,
  nick: null,
  email: null,
  hp: null,
  zip: null,
  addr1: null,
  addr2: null,
});

const btnCheckUid = () => {
  loading.value = true;
  axios
    .get("http://localhost:8080/Voard/user/countUid", {
      params: { uid: user.uid },
    })
    .then((response) => {
      setTimeout(() => {
        loading.value = false;
        isUidCheck.value = response.data;
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
    });
};
const btnCheckNick = () => {
  axios
    .get("http://localhost:8080/Voard/user/countNick", {
      params: { nick: user.nick },
    })
    .then((response) => {
      isNickCheck.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
const postcode = () => {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ""; // 주소 변수
      var extraAddr = ""; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === "R") {
        // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      user.zip = data.zonecode;
      user.addr1 = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("addr2").focus();
    },
  }).open();
};
const btnCancel = () => {
  router.push("/user/login");
};
const btnNext = () => {
  axios
    .post("http://localhost:8080/Voard/user/regist", user)
    .then((response) => {
      if (response.data > 0) {
        alert("등록을 완료했습니다.\n로그인을 해주세요.");
        router.push("/user/login");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
