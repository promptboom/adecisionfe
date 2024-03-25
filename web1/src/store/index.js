import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

  const state= {
    userMsg: {
      isLogin: false,
      userID: '',
      userName: '',
      token: '',
      isProUser: false,
    },
    systemMsg: {
      leftBarTag: true,
      routerPath: "",
      projectName: "",
      ADecisionSnackbar: '',
    }
  }

  const getters= {
    // userMsg
    getisLogin() {
      return state.userMsg.isLogin
    },
    getuserID() {
      return state.userMsg.userID
    },
    getuserName() {
      return state.userMsg.userName
    },
    gettoken() {
      return state.userMsg.token
    },
    getisProUser() {
      return state.userMsg.isProUser
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
    getADecisionSnackbar() {
      return state.systemMsg.ADecisionSnackbar
    },

  }

  const mutations= {
    // userMsg
    HandleisLogin(state, data) {
      state.userMsg.isLogin = data; 
    },
    HandleuserID(state, data) {
      state.userMsg.userID = data; 
    },
    HandleuserName(state, data) {
      state.userMsg.userName = data; 
    },
    Handletoken(state, data) {
      state.userMsg.token = data; 
    },
    HandleisProUser(state, data) {
      state.userMsg.isProUser = data; 
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
    HandleADecisionSnackbar(state, data) {
      state.systemMsg.ADecisionSnackbar = data; 
    },
  }

export default new Vuex.Store({
    mutations:mutations,
    state:state,
    getters:getters,
})