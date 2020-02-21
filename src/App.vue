<template>
  <div id="app">
    <Trello msg="worl"/>
  </div>
</template>

<script>
import Trello from "./components/Trello";
import store from "./store";

export default {
  name: "App",
  store,
  components: {
    Trello
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
