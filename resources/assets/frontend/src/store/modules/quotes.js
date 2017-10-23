import Vue from 'vue'

const state = {
  quotes: []
}

const getters = {
  getQuotes: (state) => {
    return state.quotes;
  }
}

const mutations = {
  refreshQuotes: (state, payload) => {
    state.quotes = payload.data;
  }
}

const actions = {
  getQuotes: ({commit}) => {
    Vue.http.get('get-quotes')
      .then(
        (response) => {
          commit('refreshQuotes', response.body);
        },
        (error) => {
          console.log(error);
        }
      );
  },
  addQuote: ({ commit, rootState}, payload) => {
    console.log(rootState);
    Vue.http.post('add-quote?token=' + rootState.auth.token, payload)
      .then(
        (response) => {
          if(response.body.success) {
            actions.getQuotes({commit});
            alert(response.body.message);
          } else {
            console.error(response);
          }
        },
        (error) => {
          console.error(error);
        }
      );
  },
  editQuote: ({commit, rootState}, payload) => {
    Vue.http.put('edit-quote/' + payload.id + '?token=' + rootState.auth.token, payload.data)
      .then(
        (response) => {
          if(response.body.success) {
            actions.getQuotes({commit})
          } else {
            console.error(response);
          }
        },
        (error) => {
          console.error(error);
        }
      );
  },
  deleteQuote: ({commit, rootState}, payload) => {
    Vue.http.delete('delete-quote/' + payload.id + '?token=' + rootState.auth.token, payload)
      .then(
        (response) => {
          if(response.body.success) {
            actions.getQuotes({commit})
          } else {
            console.error(response);
          }
        },
        (error) => {
          console.error(error);
        }
      );
  },
}

export default { state, getters, mutations, actions };