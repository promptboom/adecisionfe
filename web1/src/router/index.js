import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "@/store/index"; 
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '@/utils/SystemUtils/localStorage.js'


// import AppView from '@/App.vue';
import BeginView from '@/views/FuncView/BeginView.vue';
import HomeView from '@/views/FuncView/HomeView.vue';
import DecisionView from '@/views/FuncView/DecisionView.vue';
import ExecutionView from '@/views/FuncView/ExecutionView.vue';
import AboutView from '@/views/FuncView/AboutView.vue';
import SettingView from '@/views/FuncView/SettingView.vue';

import Login from '@/components/SocialComponents/YA_Login.vue';

import FilesView from '@/views/FuncView/DecisionComponents/FilesView.vue';
import CriteriaView from '@/views/FuncView/DecisionComponents/CriteriaView.vue';
import TradeView from '@/views/FuncView/DecisionComponents/TradeView.vue';
import AlternativesView from '@/views/FuncView/DecisionComponents/AlternativesView.vue';
import AnalyseView from '@/views/FuncView/DecisionComponents/AnalyseView.vue';

import TestingView from '@/views/FuncView/ExecutionComponents/TestingView.vue';

import ProjectMsg from '@/views/ProjectView/DecisionProject/ProjectMsg.vue';
import ProjectFiles from '@/views/ProjectView/DecisionProject/ProjectFiles.vue';
import ProjectCriteria from '@/views/ProjectView/DecisionProject/ProjectCriteria.vue';
import ProjectAlternatives from '@/views/ProjectView/DecisionProject/ProjectAlternatives.vue';
import ProjectTradeOff from '@/views/ProjectView/DecisionProject/ProjectTradeOff.vue';
import ProjectAnalyseSummary from '@/views/ProjectView/DecisionProject/ProjectAnalyseSummary.vue';
import ProjectAnalysePreference from '@/views/ProjectView/DecisionProject/ProjectAnalysePreference.vue';
import ProjectAnalyseAlternatives from '@/views/ProjectView/DecisionProject/ProjectAnalyseAlternatives.vue';




Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'BeginView',
    component: BeginView,
    redirect: '/Home',
    meta:{
      'title':'ADecision'
    },
  },
  {
    path: '/Home',
    name: 'Home',
    component: HomeView,
    meta:{
      'title':'Home - ADecision'
    },
  },
  {
    path: '/Decision',
    name: 'Decision',
    component: DecisionView,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/Files',
    name: 'Files',
    component: FilesView,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/Criteria',
    name: 'Criteria',
    component: CriteriaView,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/Alternatives',
    name: 'Alternatives',
    component: AlternativesView,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/Trade-off',
    name: 'Trade-off',
    component: TradeView,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/Analyse',
    name: 'Analyse',
    component: AnalyseView,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/Execution',
    name: 'Execution',
    component: ExecutionView,
    meta:{
      'title':'Execution - ADecision'
    },
  },
  {
    path: '/Testing',
    name: 'Testing',
    component: TestingView,
    meta:{
      'title':'Execution - ADecision'
    },
  },
  {
    path: '/ProjectMsg',
    name: 'ProjectMsg',
    component: ProjectMsg,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/ProjectFiles',
    name: 'ProjectFiles',
    component: ProjectFiles,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/ProjectCriteria',
    name: 'ProjectCriteria',
    component: ProjectCriteria,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/ProjectAlternatives',
    name: 'ProjectAlternatives',
    component: ProjectAlternatives,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/ProjectTradeOff',
    name: 'ProjectTradeOff',
    component: ProjectTradeOff,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/ProjectAnalyseSummary',
    name: 'ProjectAnalyseSummary',
    component: ProjectAnalyseSummary,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/ProjectAnalysePreference',
    name: 'ProjectAnalysePreference',
    component: ProjectAnalysePreference,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/ProjectAnalyseAlternatives',
    name: 'ProjectAnalyseAlternatives',
    component: ProjectAnalyseAlternatives,
    meta:{
      'title':'Decision - ADecision'
    },
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta:{
      'title':'Login - ADecision'
    },
  },
  {
    path: '/About',
    name: 'About',
    component: AboutView,
    meta:{
      'title':'About - ADecision'
    },
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: SettingView,
    meta:{
      'title':'Setting - ADecision'
    },
  },
  
  {
    path:"*",
    redirect:'/Home'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title=to.meta.title
  }
  
  let projectName = getLocalStorage("ADecisionProject");

  let routerPath = ""
  if (["Files", "Criteria", "Alternatives", "Trade-off", "Analyse"].includes(to.name)) {
    routerPath = "/Decision/" + to.name
  } else if (["Testing"].includes(to.name)) {
    routerPath = "/Execution/" + to.name
  } else if (to.name.startsWith("Project")) {
    routerPath = "/" + projectName + "/" + to.name.substring(7)
  } else {
    routerPath = "/" + to.name
  }
  store.commit('HandlerouterPath', routerPath);

  next()
});

export default router;
