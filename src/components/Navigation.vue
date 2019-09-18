<template>
  <div>
    <header>
      <div class="banner-container">
        <nav class="nav">
          <router-link class="link" to="/">
          Home
          </router-link>
          <router-link class="link" to="/popular">
          Popular
          </router-link>
          <button v-if="!user" class="link" @click="login">
          Login
          </button>
          <button v-else class="link" @click="logout">
          Logout
          </button>
        </nav>
        <h1 class="banner">Dog Island</h1>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navigation",
  methods: {
    ...mapActions(["fetchUser", "logout"]),
    login() {
      this.$auth.loginRedirect()
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
.banner-container .banner {
  font-size: 3em;
  color: #E5DED6;
  text-shadow: 2px 2px 3px #000;
  margin: 0 0 0.1em 0.2em;
  position: absolute;
  bottom: 0;
}

.banner-container {
  background: url("../assets/whitelakedog.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 20vh;
  width: 100%;
  position: relative;
}

.banner-container .nav {
  display: flex;
  padding: 1em;
}

.banner-container .link {
  background: transparent;
  margin-right: 1.5em;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  color: #E5DED6;
  border: none;
  cursor: pointer;
}

.link {
  text-decoration: none;
  font-size: 1.1em;
  color: black;
  padding: 0;
}
.link:hover {
  color: rgb(255, 217, 0);
  transform: scale(1.1);
  transition: all 0.3s ease;
}
</style>
