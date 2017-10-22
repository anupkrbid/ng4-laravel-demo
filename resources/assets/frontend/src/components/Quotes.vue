<template>
  <div>
    <button class="btn btn-primary" @click="onFetchQuotes">Fetch Quotes</button>
    <hr/>
    <app-quote></app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue'

  export default {
    components: {
      appQuote: Quote
    },
    methods: {
      onFetchQuotes () {
        console.log('ON FETCH QUOTES CLICKED');
      }
    }
  }
</script>