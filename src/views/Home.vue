<template>
  <div class="home">
    <div class="wrapper">
      <h3 class="header colorful">Welcome to Dog Island</h3>
      <div class="card">
        <span>Dog Island has just gone through a massive overhaul, from the web design to the server-side code running on the back end. A lot of changes have been made to make this website an awesome experience, and I will continue to put my best foot forward when it comes to developing this experience.</span>
      </div>
    </div>

    <h3 class="title">The Goal</h3>
    <div class="card">
      <span>You must be wondering, what is this all about? Dog Island is simply a pet appreciation project design for you guys to see cool pictures of dogs and maybe get some cool stuff out of it. My current plans include:
        <ul>
          <li>Dog gallery</li>
          <li>Hall of fame for dog the day winners</li>
          <li>...and more!</li>
        </ul>
      </span>
    </div>

    <h3 class="title">Popular dogs</h3>
    <ol>
      <li>Labrador Retriver</li>
      <li>Husky</li>
      <li>German Shephard</li>
    </ol>

    <h3 class="title">Why get a dog?</h3>
    <p>
      Dogs are
      <b>amazing</b> companions. The real question is, why don't you have a dog?
    </p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
.banner-image {
  width: 100%;
  height: auto;
  position: relative;
}

.header {
  font-size: 40px;
  text-align: center;
}

.card {
  margin-top: 0;
  padding: 1em;
  word-spacing: 0.2em;
}

.card span {
  font-size: 20px;
  display: inline-block;
  position: relative;
}

.card span::after {
  content: "";
  height: 2px;
  width: 20%;
  background-color: rgb(209, 198, 189);
  position: absolute;
  bottom: -0.5em;
  left: 50%;
  transform: translate(-50%);
}

.colorful {
  background-image: repeating-linear-gradient(
    to left,
    violet,
    indigo,
    blue,
    green,
    orange,
    red
  );
  background-clip: text;
  background-size: 800% 800%;
  color: transparent;
  animation: rainbow 8s ease infinite;
}
@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 50% 25%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
