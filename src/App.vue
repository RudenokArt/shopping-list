<template>
  <div class="container pt-5">
    <div class="row justyfy-content-between mt-1 border" v-for="(item, index) in $store.state.itemsList">
      <div class="col-8 p-1" v-bind:style="VievItemComplete(item.complete)">
        {{index}}~{{item.product}}-{{item.complete}}
      </div>
      <div class="col-1">
        <button v-bind:class="VievButtonComplete(item.complete)" v-on:click="setItemComplete(index)">
          <i class="fa fa-check" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <Preloader/>
</template>

<script>

  import Preloader from './components/Preloader.vue';
  export default {
    components: {
      Preloader,
    },

    methods: {
      setItemComplete: function (index) {
        this.$store.commit('setItemComplete', index);
      },

      VievItemComplete: function (complete) {
        if (complete == 'true') {return 'text-decoration: line-through; color: grey';}
        else {return 'text-decoration: none; color: balck';}
      },

      VievButtonComplete: function (complete) {
        if (complete == 'true') {return 'btn btn-sm btn-outline-secondary';}
        else {return 'btn btn-sm btn-outline-success';}
      }

    },

    mounted: function () {
      this.$store.commit('GetItemsList');
    }

  }
</script>

<style>

</style>
