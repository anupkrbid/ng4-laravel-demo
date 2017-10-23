<template>
  <div>
    <div class="panel-group">
      <div class="panel panel-primary">
        <div class="panel-heading">{{ quote.content }}</div>
        <div class="panel-body">
          <div class="form-inline" v-if="editMode">
            <label for="content">New Content:</label>
            <input id="content" type="text" v-model="editedValue">
            <button class="btn btn-primary btn-sm" @click="onSave">Save</button>
            <button class="btn btn-default btn-sm" @click="onCancel">Cancel</button>
          </div>
          <div v-if="!editMode">
            <button class="btn btn-primary btn-sm" @click="onEdit">Edit</button>
            <button class="btn btn-danger btn-sm" @click="onDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['quote'],
    data () {
      return {
        editMode: false,
        editedValue: ''
      }
    },
    methods: {
      onSave () {
        console.log('ON SAVE CLICKED - NEW CONTENT ');
        const payload = {
          data: {
            content: this.editedValue
          },
          id: this.quote.id
        };
        this.$store.dispatch('editQuote', payload);
        this.editedValue = '';
        this.editMode = false;
      },
      onCancel () {
        console.log('ON CANCEL CLICKED');
        this.editedValue = '';
        this.editMode = false;
      },
      onEdit () {
        this.editMode = true;
        console.log('ON EDIT CLICKED');
      },
      onDelete () {
        const payload = {
          id: this.quote.id
        };
        this.$store.dispatch('deleteQuote', payload);
        this.editMode = false;
      }
    }
  }
</script>