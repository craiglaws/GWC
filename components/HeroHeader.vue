<template>
  <div
    class="hero-bg"
    :class="{'hero-bg-plain' : !mobileImage}"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="hero-box">
      <h1 class="title-lg font-white" v-show="$vuetify.breakpoint.mdAndUp" v-html="title"></h1>
      <h1 class="title-lg font-white" v-show="$vuetify.breakpoint.smAndDown" v-html="mobileTitle"></h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    mobileTitle: String,
    image: String,
    mobileImage: {
      type: Boolean,
      default: true
    }
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

@media(max-width: 600px){
  .hero-bg{
    height: 60vh;

  }
  .hero-bg-plain{
    background-color: rgba(43, 77, 87, 0.8);
    background-image: none !important;
    height: 50vh;
  }
}
@media(max-width: 425px){
  .hero-box{
    margin: 0;
    padding: 40px 20px;
    width: 100%;
  }
}
</style>