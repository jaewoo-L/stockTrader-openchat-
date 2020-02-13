import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import stocks from './modules/stocks.js'
import chat from './modules/chat.js'
import portfolio from './modules/portfolio.js'

Vue.use(Vuex);
export const store = new Vuex.Store({
  actions:{
    // loadData:({commit}) => {
    //   axios.get('/api/users/stocksLoad/' + localStorage.getItem('username'))
    //   .then((response) => {
    //     if(response.data) {
    //       const stocks = response.data.stocks;
    //       const funds = response.data.funds;
    //       const stockPortfolio = response.data.portfolio;
    //       const portfolioData = {
    //         stockPortfolio,
    //         funds
    //       }
    //       commit('SET_STOCKS', stocks);
    //     }
    //   })
    // }
  },
  modules:{
    stocks,
    portfolio,
    chat
  }
});
