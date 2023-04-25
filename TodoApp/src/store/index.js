import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user: null,
    todos: [],
  },
  mutations: {
    SET_USER: function (state, data) {
      state.user = data;
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
    CLEAR_TODO(state) {
      state.todos = [];
    },
  },
  actions: {
    setUser: function (context, data) {
      context.commit("SET_USER", data);
    },
    authUser: function (context, token) {
      return axios
        .get("http://localhost:8080/TodoApp/user/auth", {
          headers: { "X-AUTH-TOKEN": token },
        })
        .then((response) => {
          console.log(response);
          const user = response.data.user;

          // 사용자 객체 저장(State)
          context.commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    },

    login: function (context, user) {
      return axios
        .post("http://localhost:8080/TodoApp/user/login", user)
        .then((response) => {
          console.log(response);
          const token = response.data.accessToken;
          const user = response.data.user;

          // accessToken 저장(Cookie)
          localStorage.setItem("accessToken", token);

          // 사용자 객체 저장(State)
          context.commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
          throw error;
        });
    },
    addTodo(context, todo) {
      context.commit("ADD_TODO", todo);
    },
    removeTodo(context, index) {
      context.commit("REMOVE_TODO", index);
    },
    clearTodo(context) {
      context.commit("CLEAR_TODO");
    },
  },
  getters: {
    getUser: function (state) {
      return state.user;
    },
    getTodos(state) {
      return state.todos;
    },
  },
});

export default store;
