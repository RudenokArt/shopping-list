<template>
  <button v-bind:class="VievButtonComplete(complete)" v-on:click="setItemComplete(index)">
  <i class="fa fa-check" aria-hidden="true"></i>
</button>
</template>
<script>
   export default {
    props: {
      complete: {type: String,},
      index: {type: String,},
    },
    methods: {
      setItemComplete: function (index) {
        this.$store.commit('setItemComplete', index);
      },
      VievButtonComplete: function (complete) {
        if (complete == 'true') {return 'btn btn-sm btn-outline-secondary';}
        else {return 'btn btn-sm btn-outline-success';}
      },
    },
  };
</script>