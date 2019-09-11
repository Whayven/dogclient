<template>
  <div>
    <header>
      <h1 class="banner">Dog Island</h1>
    </header>

    <nav class="nav">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/popular">Popular Dogs</router-link>
    </nav>
  </div>
</template>

<style scoped>
.banner {
  background-color: #ffee00;
  line-height: 200%;
  text-align: center;
  text-shadow: 3px 3px 5px #ccc;
}
.nav {
  display: flex;
  justify-content: space-around;
}
.link {
  text-decoration: none;
  font-size: 1.1em;
  color: black;
}
.link:hover {
  text-decoration: underline;
}
</style>
