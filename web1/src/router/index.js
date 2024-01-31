import Vue from 'vue';
import VueRouter from 'vue-router';

// import AppView from '@/App.vue';
import BeginView from '@/views/FuncView/BeginView.vue';
import HomeView from '@/views/FuncView/HomeView.vue';
import DecisionView from '@/views/FuncView/DecisionView.vue';
import ExcutionView from '@/views/FuncView/ExcutionView.vue';
import AboutView from '@/views/FuncView/AboutView.vue';
import SettingView from '@/views/FuncView/SettingView.vue';


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
    // redirect: '/PowerChat',
    children: [
      // {
      //   path: 'PowerChat',
      //   name: 'PowerChat',
      //   component: PowerChatView,
      //   redirect: '/PowerChat/PowerChatTalk',
      //   meta:{
      //     'title':'ADecision'
      //   },
      // },
    ],
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
    path: '/Excution',
    name: 'Excution',
    component: ExcutionView,
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
  next()
});

export default router;
