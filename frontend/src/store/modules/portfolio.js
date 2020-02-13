import axios from 'axios'
const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCK' (state, {stockId, stockPrice, quantity}) {
    axios.post('/api/users/buy/' + localStorage.getItem('username'), {stockId:stockId, stockPrice:stockPrice, quantity:quantity})
    .then((response) => {
      state.funds = response.data;
    })
  },
  'SELL_STOCK' (state, {stockId, stockPrice, quantity}) {
    axios.post('/api/users/sell/' + localStorage.getItem('username'), {stockId:stockId, stockPrice:stockPrice, quantity:quantity})
    .then((response) => {
      state.funds = response.data;
    })
  }
};

const actions = {
  sellStock: ({commit}, order) => {
    commit('SELL_STOCK', order);
  }
};
const getters = {
  stockPortfolio (state, getters) {
    axios.get('/api/users/stocksLoad/' + localStorage.getItem('username'))
    .then((response) => {
      state.stocks = response.data.portfolio;
    })
    return state.stocks.map(stock => {
      var record = getters.stocks.find(element => element.id == stock.id);
      return {
        id:stock.id,
        quantity:stock.quantity,
        price: record.price,
        name: record.name
      }
    })
  },
  funds(state) {
    axios.get('/api/users/stocksLoad/' + localStorage.getItem('username'))
    .then((response) => {
        state.funds = response.data.funds;
    })
    return state.funds;
  }
};
export default {
  state,
  getters,
  mutations,
  actions
}
