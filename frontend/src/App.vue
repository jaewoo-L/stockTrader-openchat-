<template>
  <div id="app">
    <router-view name="header"></router-view>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>
<script>
  export default {
    created: function() {
      this.$store.dispatch('initSocket');
    }
  }
</script>
<style>
  html { height: 100%; }
  body { height: 100%; padding:0;margin:0;background-color:#f8f8f8;}
  #app {
    height: 100%;
  }
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }
  @keyframes slide-in {
    0%{
      transform:translateY(-30px);
      opacity:0;
    }
    100%{
      transform:translateY(0);
      opacity:1;
    }
  }
  @keyframes slide-out {
    0%{
      transform:translateY(0);
      opacity:1;
    }
    100%{
      transform:translateY(-30px);
      opacity:0;
    }
  }
</style>
