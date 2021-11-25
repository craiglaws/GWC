<template>
  <div>
    <HeroHeader title="Opportunities for sales at all times" mobileTitle="Opportunities for<br>sales at all times" image="/images/bus-dev-2.jpg"/>
    <v-row class="gwc-row-5">
      <v-col cols="11" md="10" class="mx-auto">
        <h2 class="mb-6">Increase your sales. Increase your profitability.</h2>
        <p>Business development includes sales growth, business expansion, the formation of strategic partnerships and increased profitability. Business Development is important achieve sustainable business growth. It focuses on creating long-term value rather than quick cash solutions.</p>
        <p>Having worked as a Sales Manager and Account Manager for many years, I understand how important sales are for every business. Even more important is they reflect your core values, professionalism and great customer service.</p>
        <p>I have seen how difficult it is for some businesses to employ experienced salespeople to represent their business and be passionate about their products or services. Being a salesperson is not just about getting the sale and forgetting about the customer. A salesperson must understand the business inside out and identify with the core values, mission, business objectives and business offering, and have great communication and problem-solving skills.</p>
        <p>If you want to avoid hiring a full-time sale person, including the costs of inducting & training, you could benefit from working with an external business developer. I work with self-employed business owners and small-to-medium businesses.</p>

        <h2 class="mb-6 mt-8">The Services I Offer</h2>
        <DevelopmentGrid />
      </v-col>
    </v-row>
    <ContactHero />
    <v-row class="gwc-row-5">
      <v-col cols="11" md="10" class="mx-auto">
        <h2 class="mb-4">The 4 Simple Steps</h2>
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
</style>