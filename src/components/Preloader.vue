<template>
  <div class="preloader-wrapper" v-bind:style="$store.state.preloaderVisible">
    <div class="preloader">
      <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
    </div>
  </div>
</template>

<style>
  .preloader-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
  }
  .preloader {
    margin: auto;
    color: darkseagreen;
  }

</style>