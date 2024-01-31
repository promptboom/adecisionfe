import Vue from 'vue';
import VueRouter from 'vue-router';

import AppView from '@/App.vue';
import HomeView from '@/views/HomeView.vue';
import DecisionView from '@/views/DecisionView.vue';
import ExcutionView from '@/views/ExcutionView.vue';
import AboutView from '@/views/AboutView.vue';
import SettingView from '@/views/SettingView.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'App',
    component: AppView,
    redirect: '/Home',
    children: [
      {
        path: 'Home',
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
        path: 'Decision',
        name: 'Decision',
        component: DecisionView,
        meta:{
          'title':'Decision - ADecision'
        },
      },
      {
        path: 'Excution',
        name: 'Excution',
        component: ExcutionView,
        meta:{
          'title':'Excution - ADecision'
        },
      },
      {
        path: 'About',
        name: 'About',
        component: AboutView,
        meta:{
          'title':'About - ADecision'
        },
      },
      {
        path: 'Setting',
        name: 'Setting',
        component: SettingView,
        meta:{
          'title':'Setting - ADecision'
        },
      },
    ],
    meta:{
      'title':'Homw - ADecision'
    },
  },
  
  {
    path:"*",
    redirect:'/'
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
