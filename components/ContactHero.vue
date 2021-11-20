<template>
  <div class="bg-primary gwc-row">
    <v-row>
      <v-col cols="11" md="10" class="mx-auto">
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="font-white title-lg flex-shrink-1" :class="{'text-center mb-4' : $vuetify.breakpoint.smAndDown, 'contact-header': $vuetify.breakpoint.mdAndUp}"><span class="font-secondary title-xl">GROWING</span><br>YOUR<br>BUSINESS<br>WITH<br><span class="font-secondary title-xl">CONFIDENCE</span></h2>
          </v-col>
          <v-col cols="12" md="6">
            <ContactForm />
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
  margin-top: 108px;
}

</style>