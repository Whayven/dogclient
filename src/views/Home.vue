<template>
  <div class="home">
    <img alt="dogs" src="../assets/banner2.jpg" class="banner-image" />
    <hr />
    <blockquote class="colorful">
      <em>A dog is the only thing on earth that loves you more than you love yourself. - Josh Billings</em>
    </blockquote>
    <div class="container">
      <dl>
        <dt>Dogs are man's best friend</dt>
        <dd>Dogs are reliable</dd>
        <dd>Dogs are loyal</dd>
        <dd>Dogs are gracious</dd>
      </dl>
    </div>

    <h3 class="title">Types of dogs</h3>
    <div class="dog-list">
      <ul class="dog-list-left">
        <li>Shiba Inu</li>
        <li>Husky</li>
        <li>Labrador Retriver</li>
        <li>Alaskan Malamute</li>
        <li>Golden Retriever</li>
        <li>Pitbull</li>
      </ul>
      <ul>
        <li>Akita</li>
        <li>American Foxhound</li>
        <li>Corgi</li>
        <li>German Shephard</li>
        <li>Australian Shepherd</li>
        <li>Barbet</li>
      </ul>
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
  name: "Home",
  props: {
    allDogs: Array
  }
};
</script>

<style scoped>
.banner-image {
  width: 100%;
  height: auto;
}

.dog-list {
  display: flex;
  justify-content: baseline;
}

.dog-list-left {
  width: 50%;
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
