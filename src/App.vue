<template>
  <div class="container pt-5">
    <div class="row justify-content-between mt-1 border" v-for="(item, index) in $store.state.itemsList">
      <div class="col-7 p-0" v-bind:style="VievItemComplete(item.complete)">
        {{index}}~{{item.product}}-{{item.sort}}
      </div>
      <div class="col-1 p-0">
        <CompleteButton v-bind:index="index" v-bind:complete="item.complete"/>
      </div>
      <div class="col-1 p-0">
        <DeleteItemButton v-bind:index="index"/>
      </div>
      <div class="col-1 p-0">
        <SortItemAsc v-bind:index="index"/>
      </div>
      <div class="col-1 p-0">
        <SortItemDesc v-bind:index="index"/>
      </div>
    </div>
    <div class="row justify-content-around pt-2">
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
  import SortItemAsc from './components/SortItemAsc.vue';
  import SortItemDesc from './components/SortItemDesc.vue';
  export default {
    components: {
      Preloader, CompleteButton, DeleteItemButton, AddItemFrom, SortItemAsc, SortItemDesc,
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
