<template>
  <v-app style="overflow: hidden"> 
    <NewHeader />
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
  
    }
  }
}
</script>

