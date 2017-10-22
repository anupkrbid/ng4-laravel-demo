<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <br/>
      <div class="row">
        <div class="col-xs-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>
  #app {
    padding: 30px;
  }
</style>
