<template>
  <div class="container pt-5">
    <ListsNavMenu/>
    <div v-bind:class="sortedItemHighligh(index)"
    v-for="(item, index) in $store.state.itemsList"
    class="row justify-content-between mt-1 border">
      <div class="col-7 p-0" v-bind:style="VievItemComplete(item.complete)">
        {{index+1}}~{{item.product}}
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
<style scoped>
  .btn:focus {
    box-shadow: none;
  }
  .btn {
    display: block;
    width: 30px;
  }
</style>
<script>

  import Preloader from './components/Preloader.vue';
  import CompleteButton from './components/CompleteButton.vue';
  import DeleteItemButton from './components/DeleteItemButton.vue';
  import AddItemFrom from './components/AddItemFrom.vue';
  import SortItemAsc from './components/SortItemAsc.vue';
  import SortItemDesc from './components/SortItemDesc.vue';
  import ListsNavMenu from './components/ListsNavMenu.vue';
  export default {
    components: {
      Preloader,
      CompleteButton,
      DeleteItemButton,
      AddItemFrom,
      SortItemAsc,
      SortItemDesc,
      ListsNavMenu,
    },

    methods: {
       VievItemComplete: function (complete) {
        if (complete == 'true') {return 'text-decoration: line-through; color: grey';}
        else {return 'text-decoration: none; color: balck';}
      },

      sortedItemHighligh: function (index) {
        if (index == this.$store.state.sortedItem) {
          return 'just-sorted';
        }
      },
     

    },

    mounted: function () {
      this.$store.commit('GetItemsList');
    }

  };
</script>

<style scoped>

@keyframes sort {
  from {
    background: rgba(0, 0, 0, 0.1);
  }
  to {
    background: transparent;
  }
}
.just-sorted {
  animation-name:sort;
  animation-duration:2s;
}
</style>
