import Vue from 'vue'
import Router from 'vue-router'
// import Index from "../views/Index.vue"
import Login from "../components/Login.vue"
import recomeed from '../components/recomeed.vue'
import tour from '../components/tour.vue'
import strate from '../components/strate.vue'
import haidao from '../components/haidao.vue'
import reg from '../components/reg.vue'
import Wqk from '../components/Wqk.vue'
import Navbar from '../components/Navbar.vue'
import friend from '../components/friend.vue'
import zjcx from '../components/Zjcx.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/zjcx',component:zjcx},
    {path:'/friend',component:friend},
   {path:'/Wqk',component:Wqk},
    {path:'/Reg',component:reg},
    {path:'/haidao',component:haidao},
    {path:'/',component:Navbar},
    {path:'/Login',component:Login},
    // {path:'/Navbar',name:'Navbar',component:Navbar,},
    {path:'/recomeed/:id',name:'recomeed',component: () => import(
      /* webpackChunkName: "recommed" */ 
      '../components/recomeed.vue'),},
    {path:'/tour/:id',name:'tour',component: () => import(
        /* webpackChunkName: "recommed" */ 
        '../components/tour.vue'),
      },
      {path:'/strate/:id',name:'strate',component: () => import(
        /* webpackChunkName: "recommed" */ 
        '../components/strate.vue'),
      },
  ]
})