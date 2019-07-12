import Vue from 'vue'
import Router from 'vue-router'

/***
 * 路由懒加载
 */

/* 主页 */
const Home = () => import('../pages/home');

/* 子页面 */
const about=()=>import('../pages/About.vue');
const detail=()=>import('../pages/Detail.vue');
const list=()=>import('../pages/List.vue');
const center=()=>import('../pages/NewsCenter.vue');
const app=()=>import('../pages/App.vue');
const index=()=>import('../pages/Main.vue');

const carousel=()=>import('../components/carousel.vue');

/* NotFound */
const NotFound = () => import('../pages/404');

Vue.use(Router);

let routers = [
  {hidden: true, name: '', path: '/404', component: NotFound},
  {hidden: true, path: '*', redirect: {path: '/404'}},
  {path:'/', redirect:{path:'/home'}},
  {
    name: 'home',
    path: '/home',
    redirect: {path: '/home/index'},
    component: Home,
    children: [
      {string: '首页',
        name: '首页',
        path: 'index',
        component: index,
      },
      {string: '关于我们', name: '关于我们', path: 'about', component: about},
      {string: '新闻中心', name: '新闻中心', path: 'center', component: center},
      {string: '应用列表', name: '应用列表', path: 'app', component: app},
      {string: '新闻列表', name: '新闻列表', path: 'list', component: list},
      {string: '新闻详情', name: '新闻详情', path: 'detail', component: detail},
      {string: 'carousel', name: 'carousel', path: 'carousel', component: carousel},
    ]
  }
];

const route = new Router({
  mode: 'hash',
  routes: routers
});
export default route;
