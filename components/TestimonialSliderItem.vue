<template>
  <div class="d-flex flex-column align center px-10">
    <div class="font-white mb-4 ">
      <h2 class="font-white" v-html="slide.name"></h2>
      <p class="mb-0" v-html="slide.position"></p>
      <p class="mb-1" v-html="slide.company"></p>
      <!-- <TitleBorder color="secondary-bd" /> -->
    </div>
    <p class="font-white" v-html="slide.review"></p>
  </div>
</template>

<script>
export default {
  props: {
    slide: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>