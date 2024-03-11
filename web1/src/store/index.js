import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

  const state= {
    userMsg: {
      isLogin: false,
    },
    systemMsg: {
      leftBarTag: true,
      routerPath: "",
      projectName: "",
    }
  }

  const getters= {
    // userMsg
    getisLogin() {
      return state.userMsg.isLogin
    },

    // systemMsg
    getleftBarTag() {
      return state.systemMsg.leftBarTag
    },
    getrouterPath() {
      return state.systemMsg.routerPath
    }, 
    getprojectName() {
      return state.systemMsg.projectName
    },

  }

  const mutations= {
    // userMsg
    HandleisLogin(state, data) {
      state.userMsg.isLogin = data; 
    },

    // systemMsg
    HandleleftBarTag(state, data) {
      state.systemMsg.leftBarTag = data; 
    },
    HandlerouterPath(state, data) {
      state.systemMsg.routerPath = data; 
    }, 
    HandleprojectName(state, data) {
      state.systemMsg.projectName = data; 
    },
  }

export default new Vuex.Store({
    mutations:mutations,
    state:state,
    getters:getters,
})