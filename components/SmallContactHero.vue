<template>
  <div class="bg-primary gwc-row">
    <v-row>
      <v-col cols="11" md="10" class="mx-auto">
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="font-white title-lg" :class="{'text-center mb-4' : $vuetify.breakpoint.smAndDown, 'contact-header': $vuetify.breakpoint.mdAndUp}"><span class="font-secondary title-xl">GROWING</span><br>YOUR BUSINESS WITH<br><span class="font-secondary title-xl">CONFIDENCE</span></h2>
          </v-col>
          <v-col cols="12" md="6" class="my-auto text-center">
            <v-btn
              color="secondary"
              x-large
              class="font-weight-bold"
              to="/contact"
            >
              CONTACT NOW
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contact-header{
}

</style>