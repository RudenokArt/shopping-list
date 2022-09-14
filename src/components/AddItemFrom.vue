<template>
  <div class="col-9 p-0">
    <input type="text" class="form-control" v-model="itemNew">
  </div>
  <div class="col-2 p-0">
    <button class="btn btn-outline-primary" v-on:click="AddItem">
    <i class="fa fa-floppy-o" aria-hidden="true"></i>
  </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        itemNew: '',
      };      
    },
    methods: {
      AddItem: function () {
        var item = {};
        item.product = this.itemNew;
        item.complete = 'false';
        console.log(item);
        this.$store.commit('AddItem', item);
      },
    },
  };
  
</script>