import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "@/store/index"; 


// import AppView from '@/App.vue';
import BeginView from '@/views/FuncView/BeginView.vue';
import HomeView from '@/views/FuncView/HomeView.vue';
import DecisionView from '@/views/FuncView/DecisionView.vue';
import ExcutionView from '@/views/FuncView/ExcutionView.vue';
import AboutView from '@/views/FuncView/AboutView.vue';
import SettingView from '@/views/FuncView/SettingView.vue';

import FilesView from '@/views/FuncView/DecisionComponents/FilesView.vue';
import CriteriaView from '@/views/FuncView/DecisionComponents/CriteriaView.vue';
import TradeView from '@/views/FuncView/DecisionComponents/TradeView.vue';
import SchemeView from '@/views/FuncView/DecisionComponents/SchemeView.vue';
import AnalyseView from '@/views/FuncView/DecisionComponents/AnalyseView.vue';

import TestingView from '@/views/FuncView/ExcutionComponents/TestingView.vue';



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
    path: '/Scheme',
    name: 'Scheme',
    component: SchemeView,
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
    path: '/Excution',
    name: 'Excution',
    component: ExcutionView,
    meta:{
      'title':'Excution - ADecision'
    },
  },
  {
    path: '/Testing',
    name: 'Testing',
    component: TestingView,
    meta:{
      'title':'Excution - ADecision'
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
  
  let routerPath = ""
  if (["Files", "Criteria", "Scheme", "Trade-off", "Analyse"].includes(to.name)) {
    routerPath = "/Decision/" + to.name
  } else if (["Testing"].includes(to.name)) {
    routerPath = "/Excution/" + to.name
  } else {
    routerPath = "/" + to.name
  }
  store.commit('HandlerouterPath', routerPath);

  next()
});

export default router;
