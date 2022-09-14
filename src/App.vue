<template>
  <div class="container pt-5">
    <div class="row justify-content-between mt-1 border" v-for="(item, index) in $store.state.itemsList">
      <div class="col-7 p-0" v-bind:style="VievItemComplete(item.complete)">
        {{index}}~{{item.product}}-{{item}}
      </div>
      <div class="col-1 p-0">
        <CompleteButton v-bind:index="index" v-bind:complete="item.complete"/>
      </div>
      <div class="col-1 p-0">
        <DeleteItemButton v-bind:index="index"/>
      </div>
    </div>
    <div class="row justify-content-between pt-2">
      <AddItemFrom/>
    </div>
  </div>
  <Preloader/>
</template>

<script>

  import Preloader from './components/Preloader.vue';
  import CompleteButton from './components/CompleteButton.vue';
  import DeleteItemButton from './components/DeleteItemButton.vue';
  import AddItemFrom from './components/AddItemFrom.vue';
  export default {
    components: {
      Preloader, CompleteButton, DeleteItemButton, AddItemFrom,
    },

    methods: {

       VievItemComplete: function (complete) {
        if (complete == 'true') {return 'text-decoration: line-through; color: grey';}
        else {return 'text-decoration: none; color: balck';}
      },

     

    },

    mounted: function () {
      this.$store.commit('GetItemsList');
    }

  };
</script>

<style>

</style>
