<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <footer style="text-align: center">
      <small>
        Copyright&copy;
        <i>Foster</i>
      </small>
    </footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Navigation
  },
  data: function() {
    return {
    };
  },
  methods: {
    ...mapActions(["fetchDogs", "updateDog"]),
  },
  computed: {
    ...mapGetters(["allDogs"]),
  },
};
</script>

<style>
template {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
#app {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.title {
  background-color: #ffee00;
  text-align: center;
  line-height: 150%;
}
</style>
