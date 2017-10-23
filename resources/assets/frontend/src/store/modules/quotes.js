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
          console.log('GET QUOTES : ', response);
          commit('refreshQuotes', response.body);
        },
        (error) => {
          console.log(error);
        }
      );
  },
  addQuote: ({commit, rootState}, payload) => {
    console.log(rootState);
    Vue.http.post('add-quote?token=' + rootState.auth.token, payload)
      .then(
        (response) => {
          console.log(response);
          if(response.body.success) {
            alert('added');
          }
          Vue.$store.dispatch('getQuotes');
        },
        (error) => {
          console.log(error);
        }
      );
  },
  editQuote: ({commit, rootState}, payload) => {
    Vue.http.put('edit-quote/' + payload.id + '?token=' + rootState.auth.token, payload.data)
      .then(
        (response) => {
          console.log('EDIT QUOTES : ', response);
          actions.getQuotes();
        },
        (error) => {
          console.log(error);
        }
      );
  },
  deleteQuote: ({commit, rootState}, payload) => {
    Vue.http.delete('delete-quote/' + payload.id + '?token=' + rootState.auth.token, payload)
      .then(
        (response) => {
          console.log('DELETE QUOTE : ', response);
          Vue.$store.dispatch('getQuotes');
        },
        (error) => {
          console.log(error);
        }
      );
  },
}

export default { state, getters, mutations, actions }