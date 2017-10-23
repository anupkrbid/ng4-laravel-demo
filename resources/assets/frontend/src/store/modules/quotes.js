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
  addQuote: ({commit}, payload) => {
    Vue.http.post('add-quote?token=' + Vue.$store.getters.token, payload)
      .then(
        (response) => {
          console.log('ADD QUOTE : ', response);
          Vue.$store.dispatch('getQuotes');
        },
        (error) => {
          console.log(error);
        }
      );
  },
  editQuote: ({commit}, payload) => {
    Vue.http.post('edit-quote/' + payload.id + '?token=' + Vue.$store.getters.token, payload)
      .then(
        (response) => {
          console.log('EDIT QUOTES : ', response);
          Vue.$store.dispatch('getQuotes');
        },
        (error) => {
          console.log(error);
        }
      );
  },
  deleteQuote: ({commit}, payload) => {
    Vue.http.post('delete-quote/' + payload.id + '?token=' + Vue.$store.getters.token, payload)
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