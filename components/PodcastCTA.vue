<template>
  <div class="bg-primary gwc-row">
    <v-row>
      <v-col cols="11" md="10" class="mx-auto">
        <div class="d-flex justify-space-around">
          <div class="flex-grow-1 pr-md-8 text-col">
            <h2 class="font-secondary title-lg mb-1">BOOST YOUR CONFIDENCE</h2>
            <TitleBorder color="white-bd" class="mb-6"/>
            <p class="font-white font-weight-bold">Follow the series in which I talk to business owners across the Highlands on their business journey. An honest insight on their highs and lows which can help build your confidence and take your business journey to the next step.</p>
            <v-btn
              color="secondary"
              to="https://www.youtube.com/channel/UC04J-PyswfCclM_-FoQsghA"
              target="_blank"
              class="mt-4"
            >
              View all videos
            </v-btn>
          </div>
          <iframe width="400" height="300" src="https://www.youtube.com/embed/mucI36euomk" frameborder="0" class="flex-shrink-0 youtube-embed">
          </iframe>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.text-col{
  max-width: 600px !important;
}

@media(max-width: 960px){
  .youtube-embed{
    display: none;
  }
}

</style>