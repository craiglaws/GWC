<template>
  <div>
    <HeroHeader title="Coaching" image="/images/gwc-cover-photo.png"/>
    <v-row class="gwc-row-5">
      <v-col cols="10" class="mx-auto">
        <h2 class="mb-1">Sell with Confidence, Grow with Confidence</h2>
        <TitleBorder color="secondary-bd"/>
        <CoachingGrid class="my-8" @scroll-to="scrollTo"/>
      </v-col>
    </v-row>
    <ContactHero />
    <v-row class="">
      <v-col cols="10" class="mx-auto">
        <div class="gwc-row">
            <!-- Account Management -->
          <v-row class="service gwc-mb-3 mt-10">
            <v-col cols="12" md="8" class="py-0">
              <h2 class="mb-1" ref="accountManagement">Account Management</h2>
              <TitleBorder color="secondary-bd" class="mb-4" />
              <div class="pr-md-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <ul>
                    <li
                      v-for="(item, i) in accountList"
                      :key="i"
                    >
                      {{item}}
                    </li>
                  </ul>
                </div>
                <v-btn
                  color="secondary"
                  to="/contact"
                  class="mt-4"
                >
                  Book Now
                </v-btn>
            </v-col>
            <v-col cols="12" md="4" class="my-auto py-0" v-show="$vuetify.breakpoint.mdAndUp">
              <nuxt-img class="account-img" src="/images/placeholder.png"></nuxt-img>
            </v-col>
          </v-row>
          <!-- Business Development -->
          <v-row class="service gwc-mb-3">
            <v-col cols="12" md="8" class="">
              <h2 class="mb-1" ref="businessDevelopment">Business Development & Live Prospecting</h2>
              <TitleBorder color="secondary-bd" class="mb-4" />
              <div class="pr-md-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <ul>
                    <li
                      v-for="(item, i) in accountList"
                      :key="i"
                    >
                      {{item}}
                    </li>
                  </ul>
                </div>
                <v-btn
                  color="secondary"
                  to="/contact"
                  class="mt-4"
                >
                  Book Now
                </v-btn>
            </v-col>
            <v-col cols="12" md="4" class="my-auto" v-show="$vuetify.breakpoint.mdAndUp">
              <nuxt-img class="account-img" src="/images/placeholder.png"></nuxt-img>
            </v-col>
          </v-row>
          <v-row class ="gwc-mb-3">
            <!-- Online Sales -->
            <v-col cols="12" md="6" ref="salesCoaching" class="service-one service-cols gwc-mb-2">
              <div class="pr-md-6">
                <h2 class="mb-1">Online Sales Coaching</h2>
                <TitleBorder color="secondary-bd" class="mb-4"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <ul>
                  <li
                    v-for="(item, i) in onlineSalesList"
                    :key="i"
                  >
                    {{item}}
                  </li>
                </ul>
                <v-btn
                  color="secondary"
                  to="/contact"
                  class="mt-4"
                >
                  Book Now
                </v-btn>
              </div>
            </v-col>
            <!-- Sales Assessment -->
            <v-col cols="12" md="6" ref="salesAssessment" class="service-cols">
              <div class="pl-md-6">
                <h2 class="mb-1">Sales Assessment</h2>
                <TitleBorder color="secondary-bd" class="mb-4"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <ul>
                  <li
                    v-for="(item, i) in salesAssessList"
                    :key="i"
                  >
                    {{item}}
                  </li>
                </ul>
                <v-btn
                  color="secondary"
                  to="/contact"
                  class="mt-4"
                >
                  Book Now
                </v-btn>
              </div>
            </v-col>
          </v-row>
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
      onlineSalesList: [
        'How to set targets',
        'How to build a pipeline',
        'How to plan daily routine activities to deliver sales targets for the month',
        'Weekly video call to catch up on progress',
        '8 hours per month Live Online Coaching',
      ],
      salesAssessList: [
        'Cold calling, pipeline generation, account management and closing',
        'Assessment is based on specific evidence observed to focus on a personalised approach, listening to calls and accompanying you in a field on visits to existing and potential clients'
      ],
      accountList: [
        'How to effectively use a consultative sales approach to drive sales performance',
        'How to analyse your product, your sales scripts and how you open conversations with the customer, and how to respond to objections',
        'How to manage your time more effectively to free up time for selling',
        'How to identify target clients and retain, grow and protect them',
        'How to grow and strengthen existing customer relationships',
        'How to effectively upsell /cross-sell to increase revenue from existing customers',
        'How to lead an effective meeting to achieve SMART objectives (agenda setting)',
        'Understanding your existing client’s purchasing behaviour',

      ],
    }
  },
  methods: {
    scrollTo(refName){
      const element = this.$refs[refName];
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

}
</script>

<style scoped>

.service-one{
  border-right: solid 1px gray;
}

.service::after{
    content: '';
    display: block;
    height: 1px;
    width: 50%;
    background-color: grey;
    margin: auto;
    margin-top: 52px;
  }

.account-img{
  width: 100%;
}

@media(max-width: 960px){
  .service-one{
    border-right: none;
  }
  .service-cols::after{
    content: '';
    display: block;
    height: 1px;
    width: 50%;
    background-color: grey;
    margin: auto;
    margin-top: 52px;
  }
}

</style>