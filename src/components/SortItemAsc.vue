<template>
  <button class="btn btn-sm btn-outline-info" v-on:click="SortItemAsc">
    <i class="fa fa-sort-asc" aria-hidden="true"></i>
  </button>
</template>

<script>
  export default {
    props: {
      index: {type: Number},
    },
    methods: {
      SortItemAsc: function () {
        this.$store.commit('SortItemAsc', this.index);
      }
    },
  };
</script>

<style scoped>
  button:hover {
    background: transparent;
    color: #0dcaf0;
  }
</style>