<template>
  <button v-on:click="DeleteItem(index)" class="btn btn-outline-danger btn-sm">
    <i class="fa fa-trash-o" aria-hidden="true"></i>
  </button>
</template>

<script>
  export default {
    props: {
      index: {type: String,},
    },
    methods: {
      DeleteItem: function (index) {
        this.$store.commit('DeleteItem', index);
      }
    },
  };
</script>