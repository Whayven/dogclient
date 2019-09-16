<template>
  <div>
    <h3 class="header colorful">Dog of the Day</h3>
    <div v-if="dogOfTheDay" class="container">
      <h3 class="colorful">
        <b>{{ dogOfTheDay.breed }}</b>
      </h3>
      <img id="dotd" :src="image" alt="dog of the day"/>
      
    </div>
    <div v-if="!voted">
      <h3 class="title">Vote for Dog of the Day</h3>
      <div class="container">
        <ul class="form">
          <li v-for="dog in allCandidates" v-bind:key="dog._id">
            <input type="radio" :name="dog._id" :id="dog._id" :value="dog" v-model="picked" />
            <label for="dog._id">{{dog.breed}}</label>
          </li>
        </ul>
        <button type="submit" v-on:click.prevent="updateDog(picked)">Submit</button>
      </div>
    </div>
    <div v-else-if="voted">
      <h3 class="title" style="margin-bottom: 0">Results</h3>
      <div class="container">
        <ul class="form" style="padding-left: 0">
          <li v-for="dog in allCandidates" v-bind:key="dog._id">
            <p>{{dog.breed}} : {{dog.score}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: function() {
    return {
      picked: ""
    };
  },
  watch: {
    async voted() {
      await this.fetchCandidates(); 
    }
  },
  methods: {
    ...mapActions(["fetchCandidates", "fetchImage", "updateDog"]),
  },
  computed: {
    ...mapGetters(["allCandidates", "image", "voted"]),
    dogOfTheDay() {
      return this.allCandidates.sort((x, y) => {
        return y.score - x.score;
      })[0];
    }
  },
  async created() {
    await this.fetchCandidates();
    await this.fetchImage(this.dogOfTheDay.breed);
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
}

#dotd {
  width: 50vh;
}

.container h3 {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 20px;
}

.container img {
  margin-bottom: 5px;
}

.form {
  list-style: none;
}

.form li {
  line-height: 1.8em;
  font-size: 20px;
}

button {
  border-radius: 2px;
  border: 1px solid rgba(50, 226, 15, 0.815);
  background-color: rgba(50, 226, 15, 0.815);
  padding: 5px;
  color: white;
  font-weight: 600;
}

button:hover {
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
</style>