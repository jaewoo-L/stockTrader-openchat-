import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/Header.vue';
const OpenChat = (resolve) => {
  require.ensure(['./components/OpenChat.vue'], ()=> {
    resolve(require('./components/OpenChat.vue'))
  })
}
const Login = (resolve) => {
  require.ensure(['./components/Login.vue'], ()=> {
    resolve(require('./components/Login.vue'))
  })
}
const Home = (resolve) => {
  require.ensure(['./components/Home.vue'], ()=>{
		resolve(require('./components/Home.vue'));
	});
}
const Portfolio = (resolve) => {
  require.ensure(['./components/portfolio/Portfolio.vue'],()=>{
    resolve(require('./components/portfolio/Portfolio.vue'));
  })
}
const Stocks = (resolve) => {
  require.ensure(['./components/stocks/Stocks.vue'],()=>{
    resolve(require('./components/stocks/Stocks.vue'));
  })
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/chat', name: 'chat', components: {'header': Header, default: OpenChat} },
    { path:'/home', name:'home', components: {'header': Header, default: Home}},
    { path:'/portfolio',name:'portfolio',components: {'header': Header, default: Portfolio}},
    { path:'/stocks',name:'stocks',components: {'header': Header, default: Stocks}}
  ]
})
