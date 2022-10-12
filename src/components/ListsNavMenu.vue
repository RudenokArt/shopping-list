<template>
  {{$store.getters.shoppingListsArr}}
</template>

<script>
  export default {
    mounted: function () {
      this.$store.commit('GetShoppingLists');
    }
  };
</script>