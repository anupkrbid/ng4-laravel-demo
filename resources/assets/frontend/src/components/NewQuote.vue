<template>
  <div>
    <div class="panel-group">
      <div class="panel panel-primary">
        <div class="panel-heading">New Quote</div>
        <div class="panel-body">
          <form @submit.prevent="onSubmit">
            <label for="content">New Content:</label>
            <input id="content"
                   type="text"
                   name="content"
                   v-model="content"
            >
            <button class="btn btn-primary btn-sm" type="submit">Save</button>
            <button class="btn btn-default btn-sm" type="reset" @click="onCancel">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        content: ''
      }
    },
    methods: {
      onCancel () {
        this.context = '';
        console.log('ON FETCH QUOTES CLICKED');
      },
      onSubmit () {
        this.$store.dispatch('addQuote', { content: this.content });
      }
    }
  }
</script>