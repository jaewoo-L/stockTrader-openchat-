import stocks from '../../data/stocks.js';
import axios from 'axios'

const state = {
  stocks: []
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    axios.get('/api/users/stocksLoad/' + localStorage.getItem('username'))
    .then((response) => {
      state.stocks = response.data.stocks;
    })
  },
  'RANDOM_STOCKS' (state) {
    axios.get('/api/users/endDay/' + localStorage.getItem('username'))
    .then((response) => {
    })
  }
};

const actions = {
  buyStock: ({commit}, order) =>{
    commit('BUY_STOCK', order);
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({commit, dispatch}) => {
    commit('RANDOM_STOCKS');
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
