import Vue from 'vue'

const state = {
  isAuthenticated: false,
  token: ''
}

const getters = {
  isAuthenticated: (state) => {
    return state.isAuthenticated;
  },
  token: (state) => {
    return state.token;
  }
}

const mutations = {
  userSignIn: (state, payload) => {
    state.isAuthenticated = true;
    state.token = payload.token;
    localStorage.setItem('token', payload.token);
  },
  userSignOut: (state, payload) => {
    state.isAuthenticated = false;
    state.token = '';
    localStorage.removeItem('token');
  },
  checkUserAuthentication: (state) => {
    if(localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined) {
      state.isAuthenticated = true;
      state.token = localStorage.getItem('token');
    } else {
      state.isAuthenticated = false;
      state.token = '';
    }
  }
}

const actions = {
  userSignIn: ({commit}, payload) => {
    Vue.http.post('sign-in', payload)
      .then(
        (response) => {
          commit('userSignIn', response.body);
        },
        (error) => {
          console.log(error);
        }
      );
  },
  userSignOut: ({commit}) => {
    Vue.http.post('sign-out?token=' + state.token)
      .then(
        (response) => {
          console.log(response);
          commit('userSignOut', response.body);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

export default { state, getters, mutations, actions }