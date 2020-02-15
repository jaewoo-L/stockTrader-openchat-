import axios from 'axios'
const state = {
  socket: null,
  user:null,
  messages:[]
};
const mutations = {
  'INIT_SOCKET'(state) {
    state.socket = io();
  },
  'SEND_MESSAGE'(state, msg) {
    state.socket.emit('message', msg);
  },
  'SET_USERNAME'(state, name) {
    return new Promise((resolve, reject) =>{
      state.socket.emit('join', name);
      localStorage.setItem('username', name);
      state.user = name;
      axios.post('/api/users/login', {username: name})
      .then((response) => {
        // console.log(response.data);
      })
      resolve()
    })
  }
};
const actions = {
  initSocket: ({commit}) => {
    commit('INIT_SOCKET');
  },
  sendMessage:({commit}, msg) => {
    commit('SEND_MESSAGE', msg);
  },
  setUsername:({commit}, name) => {
    commit('SET_USERNAME', name);
  },
  showMessage:({state}) => {
    state.socket.on('message1', (message) => {
      return new Promise((resolve, reject) => {
        state.messages.push(message);
        resolve()
      })
    })
  }
};
const getters = {
  messages(state) {
    return state.messages;
  },
  getsocket(state) {
    return state.socket;
  },
  user(state) {
    return state.user;
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
