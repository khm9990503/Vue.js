import { createStore } from "vuex";
import axios from "axios";

const userStore = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser(context, user) {
      context.commit("SET_USER", user);
    },
    setUserAuth(context, accessToken) {
      axios
        .get("http://localhost:8080/Voard2/user/auth", {
          headers: { "X-AUTH-TOKEN": accessToken },
        })
        .then((response) => {
          console.log(response);
          const user = response.data.user;
          context.commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});

export default userStore;
