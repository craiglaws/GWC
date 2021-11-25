<template>
  <div>
    <HeroHeader title="Sell <span class='font-secondary'>with</span> confidence<br><span class='font-secondary'>Grow </span>with <span class='font-secondary'>confidence</span>" mobileTitle="<span class='font-secondary'>Grow<br></span>With<br><span class='font-secondary'>Confidence</span>" image="/images/gwc-cover-photo.png"/>
    <v-row class="gwc-row-5">
      <v-col cols="11" md="10" class="mx-auto">
        <h2 class="mb-6">Grow your business with confidence</h2>
        <p class="font-weight-bold font-secondary">"I believe in the value of investing in people, equipping them with the skills, tools and resources to excel."</p>
        <p> Most people say they want to achieve their targets, but not many are willing to put in the work to make it happen. Selling is hard. If it was easy, everyone would do it.</p>
        <p>Having worked as a Sales Manager and Account Manager for many years, I understand how important sales are for every business.  Growing your business and make it more visible doesn’t need to be difficult, time-consuming, or expensive. I have years of experience in building long-term business relationships and providing top quality customer service, with a great sales track record. I have prospected the whole of the UK in the past 13 years, so I understand the correct approach for each region.</p>
        <p class="font-weight-bold font-primary">If you want to avoid hiring a full-time employee, including the costs of inducting & training, you will benefit from working with me.</p>
        <h2 class="mb-6 mt-8">The Services I Offer</h2>
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
          <nuxt-img src="/images/gwc-hen-4.JPG" class="about-img"></nuxt-img>
          <div class="flex-grow-1 my-auto">
            <h2 class="mb-6">Who will you be working with?</h2>
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
          text: "Sales coaching develops each salesperson's full potential. It boosts confidence and improves social, communication and questioning skills to discover areas for improvement and possibilities for new levels of success.",
          path: "/coaching"
        },
        {
          icon: '/icons/developing.png',
          title: "Business Development",
          text: "Business development includes sales growth, business expansion, the formation of strategic partnerships and increased profitability. It is important in achieving sustainable business growth and focuses on creating long-term value.",
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
  margin-right: 50px;
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