<template>
  <div
    class="hero-bg"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="hero-box">
      <h1 class="title-lg font-white mb-1" v-html="title"></h1>
      <TitleBorder color="secondary-bd mb-2"/>
      <h5 v-if="quote" class="font-secondary" v-html="quote"></h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    quote: String
  }
}
</script>

<style scoped>

.hero-bg{
  margin-top: -90px;
  height: 80vh;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.hero-box{
  position: absolute;
  bottom: 5%;
  background-color:rgba(43, 77, 87, 0.8);
  margin-left: 5%;
  margin-right: 5%;
  padding: 40px;
}

@media(max-width: 425px){
  .hero-box{
    margin: 0;
    padding: 40px 20px;
    width: 100%;
  }
}
</style>