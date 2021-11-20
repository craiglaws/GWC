<template>
  <div>
    <HeroHeader title="Business Development" image="/images/gwc-cover-photo.png"/>
    <v-row class="gwc-row-5">
      <v-col cols="11" md="10" class="mx-auto">
        <h2 class="mb-1">TITLE GOES HERE</h2>
        <TitleBorder color="secondary-bd mb-6"/>
        <p>Having worked as a Sales Manager and Account Manager for many years, I understand how important sales are for every business. Even more important is they reflect your core values, professionalism and great customer service.</p>
        <p>I have seen how difficult it is for some businesses to employ experienced salespeople to represent their business and be passionate about their products or services. Being a salesperson is not just about getting the sale and forgetting about the customer. A salesperson must understand the business inside out and identify with the core values, mission, business objectives and business offering, and have great communication and problem-solving skills.</p>
        <p>If you want to avoid hiring a full-time sale person, including the costs of inducting & training, you could benefit from working with an external business developer. I work with self-employed business owners and small-to-medium businesses.</p>

        <h2 class="mb-1 mt-8">The Services I Offer</h2>
        <TitleBorder color="secondary-bd mb-6"/>
        <DevelopmentGrid />
      </v-col>
    </v-row>
    <ContactHero />
    <v-row class="gwc-row-5">
      <v-col cols="11" md="10" class="mx-auto">
        <h2 class="mb-1">The 4 Simple Steps</h2>
        <TitleBorder color="secondary-bd mb-6"/>
        <div v-for="(step, i) in simpleSteps" :key="i" class="d-flex mb-3">
          <h2 class="font-secondary align-self-start pr-2">{{i+1}}.</h2>
          <p class="mb-0 font-primary align-self-center font-weight-bold">{{step}}</p>
        </div>
        <p class="mt-6">Getting your business visible doesn’t need to be difficult, time-consuming or expensive. I have years of experience in building long-term business relationships and providing top quality customer service, with a great sales track record. I have prospected the whole of the UK in the past 13 years, so I understand the correct approach for each region.</p>
        <p>You’ll be kept in the loop as much as you want to be. Some clients like weekly updates, others monthly, and some prefer to just see the results and let me deal with the data! I am very straight-talking and open so you can ask me anything at any time.</p>
      </v-col>
    </v-row>
    <Testimonials />
  </div>
</template>

<script>
export default {
  
  data(){
    return{
      simpleSteps: [
        'Meet in person or online to discuss your business objectives and requirements',
        'Complete GWC client onboarding questionnaire',
        'I send you a proposal with a strategy to meet your needs',
        'Confirm starting and finish dates'

      ]
    }
  }
}
</script>

<style scoped>

.dev-cont-box{
  width: 50%;
}

.text-card{
  background-color: #f7f7f7;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 4px;
}

</style>