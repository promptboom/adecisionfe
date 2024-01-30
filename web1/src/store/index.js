import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

  const state= {
    userMsg: {
      isLogin: false,
    },
  }

  const getters= {
    // userMsg
    getisLogin() {
      return state.userMsg.isLogin
    },
  }

  const mutations= {
    // userMsg
    HandleisLogin(state, data) {
      state.userMsg.isLogin = data; 
    },
  }

export default new Vuex.Store({
    mutations:mutations,
    state:state,
    getters:getters,
})