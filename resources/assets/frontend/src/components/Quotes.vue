<template>
  <div>
    <button class="btn btn-primary" @click="onFetchQuotes">Fetch Quotes</button>
    <hr/>
    <app-quote :quote="quote" v-for="quote in quotes" :key="quote.id"></app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue'

  export default {
    components: {
      appQuote: Quote
    },
    computed : {
      quotes () {
        return this.$store.getters.getQuotes;
      }
    },
    methods: {
      onFetchQuotes () {
        console.log('ON FETCH QUOTES CLICKED');
        this.$store.dispatch('getQuotes');
      }
    }
  }
</script>