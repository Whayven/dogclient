<template>
  <div id="app">
    <Navigation />
    <router-view :allDogs="dogs" :candidates="selectDogs" :voted="voted" @submit="voteResults" />
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
import dogService from "./dogService";

export default {
  name: "App",
  components: {
    Navigation
  },
  data: function() {
    return {
      dogs: [],
      selectDogs: [],
      voted: false
    };
  },
  methods: {
    async voteResults(id) {
      try {
        await dogService.updateDog(id);
        this.selectDogs = await dogService.getSelectDogs();
        this.voted = true;
      } catch (e) {
        this.error = e.message;
      }
    }
  },
  async created() {
    try {
      this.dogs = await dogService.getDogs();
      this.selectDogs = await dogService.getSelectDogs();
    } catch (e) {
      this.error = e.message;
    }
  }
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
