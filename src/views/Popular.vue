<template>
  <div>
    <h3 class="title">Dog of the Day</h3>
    <div v-if="topDog" class="container">
      <img id="dotd" :src="url" alt="dog of the day" />
      <h3>
        <b>{{ topDog.breed }}</b>
      </h3>
    </div>
    <div v-if="!voted">
      <h3 class="title">Voting</h3>
      <div class="container">
        <h3>Vote for dog of the day</h3>
        <ul class="form">
          <li v-for="dog in candidates" v-bind:key="dog._id">
            <input type="radio" :name="dog._id" :id="dog._id" :value="dog._id" v-model="picked" />
            <label for="dog._id">{{dog.breed}}</label>
          </li>
        </ul>
        <button type="submit" v-on:click.prevent="handleSubmit(picked)">Submit</button>
      </div>
    </div>
    <div v-else-if="voted">
      <h3 class="title" style="margin-bottom: 0">Results</h3>
      <div class="container">
        <ul class="form" style="padding-left: 0">
          <li v-for="dog in candidates" v-bind:key="dog._id">
            <p>{{dog.breed}} : {{dog.score}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      picked: "",
      error: "",
    };
  },
  props: {
    candidates: Array,
    voted: Boolean,
    topDog: Object,
    url: String
  },
  methods: {
    async handleSubmit(id) {
      try {
        if (id) {
          this.$emit("submit", id);
        }
      } catch (e) {
        this.error = e.message;
      }
    },
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
  width: 50%;
  height: auto;
}

.container h3 {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
}

.container img {
  margin-bottom: 5px;
}

.form {
  list-style: none;
}

.form li {
  line-height: 1.8em;
}
</style>