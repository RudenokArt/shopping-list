<template>
  <div class="container pt-5">
    <div class="row justyfy-content-between mt-1 border" v-for="(item, index) in $store.state.itemsList">
      <div class="col-8 p-1">
        {{item.product}}
      </div>
      <div class="col-1">
        <button class="btn btn-sm btn-outline-success">
          <i class="fa fa-check" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="container">
    {{$store.state.itemsList}}
  </div>
</template>

<script>

  export default {

    methods: {


    },

    mounted: function () {
      this.$store.commit('GetItemsList');
    }

  }
</script>

<style>

</style>
