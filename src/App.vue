<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App'
  };
</script>
<style>
  @import "./assets/reset.css";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-size: 14Px;
    line-height: 1.42857143;
    overflow-x: hidden;
    box-sizing: border-box;
  }
</style>
