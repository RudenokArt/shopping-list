<template>
  <button class="btn btn-sm btn-outline-info" v-on:click="SortItemDesc">
    <i class="fa fa-sort-desc" aria-hidden="true"></i>
  </button>
</template>

<script>
  export default {
    props: {
      index: {type: Number},
    },
    methods: {
      SortItemDesc: function () {
        this.$store.commit('SortItemDesc', this.index);
      }
    },
  };
</script>