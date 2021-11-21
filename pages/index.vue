<template>
  <div>
    <HeroHeader title="<span class='font-secondary'>Grow</span><br>With<br><span class='font-secondary'>Confidence</span>" image="/images/gwc-cover-photo.png"/>
    <v-row class="gwc-row-5">
      <v-col cols="11" md="10" class="mx-auto">
        <h2 class="mb-1">INTRO TITLE GOES HERE</h2>
        <TitleBorder color="secondary-bd mb-6"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2 class="mb-1 mt-8">The Services I Offer</h2>
        <TitleBorder color="secondary-bd mb-6"/>
        <div class="service-grid">
          <div 
            v-for="(service, i) in services"
            :key="i"
            class="service-card px-4 py-6 d-flex flex-column align-center text-center"
          >
            <nuxt-img class="service-icon mb-5" :src="service.icon"></nuxt-img>
            <h3 class="mb-3 card-header" v-html="service.title"></h3>
            <p v-html="service.text"></p>
            <v-btn
              color="secondary"
              :to="service.path"
              class="mt-4"
            >
              Find out more
            </v-btn>

          </div>
        </div>
      </v-col>
    </v-row>
    <PodcastCTA />
    <v-row class="gwc-row-5">
      <v-col cols="11" md="10" class="mx-auto">
        <div class="d-flex about-cont">
          <nuxt-img src="/images/placeholder.png" class="about-img"></nuxt-img>
          <div class="flex-grow-1">
            <h2 class="mb-1">ABOUT TITLE GOES HERE</h2>
            <TitleBorder color="secondary-bd mb-6"/>
            <p>An experienced and successful sales professional, I have worked with international, national and local businesses. I have covered many sectors – engineering, stationary, food & drink, hospitality and creative agency. You can be successful in any industry.</p>
            <v-btn color="secondary" to="/about">More About Me</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <Testimonials />
  </div>
</template>

<script>
export default {

  data(){
    return{
      services: [
        {
          icon: '/icons/leadership.png',
          title: "Coaching",
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          path: "/coaching"
        },
        {
          icon: '/icons/developing.png',
          title: "Business Development",
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          path: "/business-development"
        },
      ]
    }
  }

}
</script>

<style scoped>

.service-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 30px;
}

.service-card{
  background-color: #f7f7f7;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 4px;
  width: 100%;
  transition: transform .3s ease-in-out;
}

.service-card:hover{
  transform: scale(1.05);
}

.service-icon{
  width: 80px;
}

.card-header{
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.about-img{
  width: 300px;
  margin-right: 40px;
  object-fit: contain;
}

@media(max-width: 840px){
  .about-img{
    display: none;
  }

  .service-grid{
    grid-template-columns: 1fr;
  }
}
</style>